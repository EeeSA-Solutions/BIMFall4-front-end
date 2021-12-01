export function openDrop(parent, dropdownObj, ulName) {
  const parentElement = document.getElementById(parent);
  const childElement = parentElement.getElementsByClassName("dropdownContent");
  childElement[0].classList.toggle("show");
  addDropItems(dropdownObj, ulName);
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

const addDropItems = (obj, ulName) => {
  const ulElement = document.getElementById(ulName);
  if (ulElement.childElementCount === 0) {
    for (var key in obj) {
      const liElement = document.createElement("li");
      const textNode = document.createTextNode(key + ": " + obj[key]);
      liElement.appendChild(textNode);
      ulElement.appendChild(liElement);
    }
  }
};
