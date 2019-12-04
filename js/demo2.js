const uploadMethod = document.forms["fileForm"].elements["radio_upload"];

for(radio in uploadMethod) {
  uploadMethod[radio].onclick = function() {
      console.log(this.value);
  }
}