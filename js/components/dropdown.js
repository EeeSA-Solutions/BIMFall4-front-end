export function openDrop(parent) {
  document.getElementById(parent).elementn.classList.toggle("show");
}



//Remove drop on click
window.onclick = function (e) {
  if (!e.target.matches(".flexbox")) {
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
