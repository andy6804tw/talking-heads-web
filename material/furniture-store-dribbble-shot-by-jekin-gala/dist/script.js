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