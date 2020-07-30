const loadingMobile=document.getElementById('loadingMobile');
const loadingOverlay=document.getElementById('loadingOverlay');

if(window.screen.height>window.screen.width){
  loadingMobile.classList.remove('d-none');
  console.log('mobile');
  const imgMobile=document.getElementById('imgMobile');
  // document.getElementById('logo').innerText='mobile';
  imgMobile.src='https://i.imgur.com/CQ7c6KQ.gif'
  imgMobile.onload=function(){
    setTimeout(function(){
      loadingMobile.innerHTML='';
      loadingMobile.classList.add('d-none');
  }, 2900);
  }
}else{
  console.log('desktop');
  loadingOverlay.classList.remove('d-none');
}