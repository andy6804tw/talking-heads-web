document.getElementsByClassName('juxtapose')[0].innerHTML='';
  slider = new juxtapose.JXSlider('.juxtapose',
    [
      {
        src: `https://i.imgur.com/HGvzFG1.png`,
        label: 'Before',
        // credit: 'Image Credit'
      },
      {
        src: `https://i.imgur.com/HGvzFG1.png`,
        label: 'After',
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