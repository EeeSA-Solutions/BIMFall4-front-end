export function openDrop() {
  document.getElementById("dropdown").classList.toggle("show");
}

window.onclick = function (e) {
  if (!e.target.matches(".btnDrop")) {
    var dropdowns = document.getElementsByClassName("dropdownContent");
    var i;

    for (i = 0; i < dropdowns.length; i++) {
      var openDrop = dropdowns[i];
      if (openDrop.classList.contains("show")) {
        openDrop.classList.remove("show");
      }
    }
  }
};
