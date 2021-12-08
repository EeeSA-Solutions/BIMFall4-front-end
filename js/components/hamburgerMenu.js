const handleHamburgerClick = () => {
  toggleRemoveElements();
  toggleShowElements();
  toggleChangeElements();
};

const toggleRemoveElements = () => {
  document.getElementById("main-content").classList.toggle("hidden");
  document.getElementById("dateSelector").classList.toggle("hidden");
  document.getElementsByTagName("hr")[0].classList.toggle("hidden");
};
const toggleShowElements = () => {
  document.getElementById("logo").classList.toggle("unset");
  document.getElementById("sidebar-box").classList.toggle("unset");
  document.getElementById("logo-header").classList.toggle("logo-header-show");
};
const toggleChangeElements = () => {
  hamburgerBtn.classList.toggle("active-hamburger");
  document.getElementById("footer").classList.toggle("pos-unset");
};

const hamburgerBtn = document.getElementById("hamburger-button");
hamburgerBtn.addEventListener("click", () => handleHamburgerClick());
