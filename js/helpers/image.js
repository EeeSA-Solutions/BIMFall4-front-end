const uploadImage = () => {
  file.click();
};
const encodeImageFileAsURL = async (img) => {
  const filePromises = new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = async function () {
      try {
        const response = reader.result;
        //resolve the promise with res value
        resolve(response);
      } catch (error) {
        reject(error);
      }
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsDataURL(img.files[0]);
  });
  // Wait for promise to be resolved
  return await filePromises;
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
  encodeImageFileAsURL(file).then((res) => {
    profileImg.src = res;
  });
});
