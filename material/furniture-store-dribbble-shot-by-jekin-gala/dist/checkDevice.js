const loadingMobile=document.getElementById('loadingMobile');
const loadingOverlay=document.getElementById('loadingOverlay');

if(window.screen.height>window.screen.width){
  loadingMobile.classList.remove('d-none');
  const img=`<img src="./image/animate.gif" style="width: 100%;">`;
  loadingMobile.innerHTML=img;
  setTimeout(function(){
    loadingMobile.innerHTML='';
    loadingMobile.classList.add('d-none');
}, 2800);
}else{
  loadingOverlay.classList.remove('d-none');
}