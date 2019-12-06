let videoName = ''
const modelList = ['陳昇瑋', '韓國瑜', '蔡英文'];
const list = document.getElementById('select_model');
const uploadForm = document.getElementById("uploadForm");
const btnAgain = document.getElementById("btnAgain");


for (let i = 0; i < modelList.length; i++) {
  const option = document.createElement('option');
  option.innerHTML = modelList[i];
  option.setAttribute("value", i);
  list.appendChild(option);
}
/** Post File */
const addFile = () => {
  // File
  const formData = new FormData();
  const vildeoFile = document.getElementById('videoFile').files;
  const modelIdx = document.getElementById('select_model').value;
  if ((vildeoFile.length||recordFile!=='') && modelIdx !== '') {
    // Get video file
    if(recordFile!==''){
      videoName = `srcVideo.webm`;
      formData.append("videoFile", recordFile);
      formData.append("fileName", videoName);
    }else{
      console.log('innnn')
      videoName = `srcVideo.${vildeoFile[0].name.split(".")[1]}`;
      console.log(videoName)
      formData.append("videoFile", vildeoFile[0]);
      formData.append("fileName", videoName);
    }
    // loading animation
    document.getElementById("loading").classList.remove("d-none");
    // hidden upload form
    uploadForm.classList.add("d-none");
    // 上傳 Image 檔案
    
    
    document.getElementById("loading").classList.remove("d-none");
    axios.post(`${domain}/upload`, formData,
      {
        headers: {
          'content-type': 'mutipart/form-data'
        }
      })
      .then(function (response) {
        var dataObject = response.data;
        console.log(dataObject);
        axios.post(`${domain}/transform`,
          {
            videoName,
            modelIdx
          }
        ).then((response) => {
          const dataObject = response.data;
          console.log(dataObject);
          // Render result video
          const videoPlayerRes = document.getElementById("videoPlayer-res");
          videoPlayerRes.innerHTML = '';
          videoPlayerRes.classList.remove("d-none");
          const playerRes = videojs('videoPlayer-res', {
            sources: [{ src: `${domain}/static/result-${dataObject.token}.mp4` }],
            loop: false,
            autoplay: 'muted',
            controls: true
          });
          // Stop loaging animate
          document.getElementById("loading").classList.add("d-none");
          // Show try again button
          btnAgain.classList.remove("d-none");
        },
          (error) => {
            var message = error.response.data.message;
          }
        );
      })
  }
}


