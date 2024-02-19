// HEADER/FOOTER FETCH
window.onload = function () {
  fetch(`./header.html`)
    .then((response) => response.text())
    .then((data) => (document.querySelector(`#header`).innerHTML = data));

  fetch("./footer.html")
    .then((response) => response.text())
    .then((data) => (document.querySelector(`#footer`).innerHTML = data));
};

// LOAD SCREEN
window.addEventListener("load", function () {
  var load_screen = document.getElementById("loading-screen");
  document.body.removeChild(load_screen);
});
