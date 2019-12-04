const uploadMethod = document.forms["uploadForm"].elements["radio_upload"];
const webcamRecord = document.getElementById("webcamRecord");
const browseFile = document.getElementById("browseFile");

// for (radio in uploadMethod) {
//   uploadMethod[radio].onchange = function() {
//       console.log(this.value);
//       if(this.value==='Browse File'){
//         webcamRecord.classList.add("d-none");
//         browseFile.classList.remove("d-none");
//       }
//       else if(this.value==='Webcam Record'){
//         webcamRecord.classList.remove("d-none");
//         browseFile.classList.add("d-none");
//       }else{
//         call();
//       }
//   }
// }


/** Button Try Again */
const btntAgain=()=>{
  window.location.reload();
}

/** Call Modal */
function call() {
	new Modal({
		el: document.getElementById('static-modal')
	}).show();
};

/** Tab select method */
const selectMethod=(id)=>{
  id=parseInt(id,10);
  const navItem=document.getElementsByClassName("nav-tabs");
  const list=navItem[0].getElementsByTagName("li");
  const tabPane=document.getElementsByClassName("tab-pane");
  for(let i=0;i<3;i++){
    if(i===id){
      list[i].getElementsByTagName("a")[0].classList.add("active");
      tabPane[i].classList.add("show", "active");
    }
    else{
      list[i].getElementsByTagName("a")[0].classList.remove("active");
      tabPane[i].classList.remove("show", "active");
    }
  }
}