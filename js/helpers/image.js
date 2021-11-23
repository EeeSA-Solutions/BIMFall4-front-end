const uploadImage = () => {
  file.click();
};
const encodeImageFileAsURL = (img) => {
  var file = img.files[0];
  var reader = new FileReader();
  reader.onloadend = function () {
    console.log(reader.result);
  };
  reader.readAsDataURL(file);
};

//create file input
var file = document.createElement("input");
file.style.display = "none";
file.type = "file";

//get profileImg
var profileImg = document.getElementById("profileImage");

//events
profileImg.addEventListener("click", () => uploadImage());

file.addEventListener("change", () => {
  encodeImageFileAsURL(file);
});
