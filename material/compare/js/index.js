document.getElementsByClassName('juxtapose')[0].innerHTML='';
  slider = new juxtapose.JXSlider('.juxtapose',
    [
      {
        src: `https://imgur.com/JepQaor.gif`,
        label: 'Target',
        // credit: 'Image Credit'
      },
      {
        src: `https://i.imgur.com/4jTV2jM.gif`,
        label: 'Driver',
        // credit: "Image Credit"
      }
    ],
    {
      animate: true,
      showLabels: true,
      showCredits: true,
      startingPosition: "50%",
      makeResponsive: true
    });


  setTimeout(function () {
    document.getElementsByClassName("jx-knightlab")[0].remove();
  }, 500)