document.getElementById('navToggle').addEventListener("click", event => {
  console.log('sdsa')
  const nav = document.querySelector("nav");
  const header = document.querySelector("header");

  if (event.target.dataset.menustate == "closed") {
    event.target.dataset.menustate = nav.dataset.state = header.dataset.menustate =
      "open";
  } else {
    event.target.dataset.menustate = nav.dataset.state = header.dataset.menustate =
      "closed";
  }
});


var anchor = document.querySelector('a[href="#section1"]')
var target = document.getElementById('section1')
anchor.addEventListener('click', function (e) {
  if (window.scrollTo) {
    e.preventDefault()
    window.scrollTo({'behavior': 'smooth', 'top': target.offsetTop})
  }
})