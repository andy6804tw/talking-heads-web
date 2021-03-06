let preview = document.getElementById("preview");
let recording = document.getElementById("recording");
let startButton = document.getElementById("startButton");
let stopButton = document.getElementById("stopButton");
let downloadButton = document.getElementById("downloadButton");
let logElement = document.getElementById("log");
let recordedBlob;
let recordFile = '';

let recordingTimeMS =11000;
function log(msg) {
  logElement.innerHTML += msg + "\n";
}
function wait(delayInMS) {
  return new Promise(resolve => setTimeout(resolve, delayInMS));
}
function startRecording(stream, lengthInMS) {
  let recorder = new MediaRecorder(stream);
  let data = [];

  recorder.ondataavailable = event => data.push(event.data);
  recorder.start();
  log(recorder.state + " for " + (lengthInMS / 1000)-1 + " seconds...");

  let recorded = wait(lengthInMS).then(
    () => {
      stop(preview.srcObject);
      recorder.state == "recording" && recorder.stop()
    }
  );
  let stopped = new Promise((resolve, reject) => {
    recorder.onstop = resolve;
    recorder.onerror = event => reject(event.name);
    clearInterval(recorded);
  });

  return Promise.all([
    stopped,
    recorded
  ])
    .then(() => data);
}
function stop(stream) {
  stream.getTracks().forEach(track => track.stop());
}
startButton.addEventListener("click", function () {
  startRecording(preview.captureStream(), recordingTimeMS)
    .then(recordedChunks => {
      console.log('stop');
      recordedBlob = new Blob(recordedChunks, { type: "video/webm" });
      recordFile = new File([recordedBlob], "webm");
      recording.src = URL.createObjectURL(recordedBlob);
      downloadButton.href = recording.src;
      downloadButton.download = "RecordedVideo.webm";

      log("Successfully recorded " + recordedBlob.size + " bytes of " +
        recordedBlob.type + " media.");
    })
    .catch(log);
}, false);
stopButton.addEventListener("click", function () {
  stop(preview.srcObject);
}, false);


// const upload=()=>{
//   // 上傳 Video 檔案
//   const recordFile = new File([recordedBlob], "webm");
//   const formData = new FormData();
//   formData.append("videoFile", recordFile);
//   axios.post(`http://127.0.0.1:5000/upload`, formData,
//     {
//       headers: {
//         'content-type': 'mutipart/form-data'
//       }
//     })
//     .then(function (response) {
//       var dataObject = response.data;
//       console.log(dataObject);
//     })
// }



const initWebcam = () => {
  // start webcam
  navigator.mediaDevices.getUserMedia({
    audio: true,
    video: { width: 256, height: 256, frameRate: 29 }
  }).then(stream => {
    preview.srcObject = stream;
    downloadButton.href = stream;
    preview.captureStream = preview.captureStream || preview.mozCaptureStream;
    log("Successfully open webcam!")
    return new Promise(resolve => preview.onplaying = resolve);
  }).catch(log);
}