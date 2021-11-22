let AnimationWrapper = document.querySelector(".animation-wrapper");

let divAnimation1 = document.createElement("div");
let divAnimation2 = document.createElement("div");
let divAnimation3 = document.createElement("div");

divAnimation1.className = "animation a1";
divAnimation2.className = "animation a2";
divAnimation3.className = "animation a3";

const errorMsg = document.createElement("p");
let text = document.createTextNode("");

export const dotAnimation = {
  show: (parent) => {
    if (parent) {
      AnimationWrapper = parent;
    }
    AnimationWrapper.appendChild(divAnimation1);
    AnimationWrapper.appendChild(divAnimation2);
    AnimationWrapper.appendChild(divAnimation3);
  },
  hide: () => {
    if (AnimationWrapper && AnimationWrapper.hasChildNodes()) {
      if (AnimationWrapper.childNodes[0].nodeName == "#text") {
        AnimationWrapper.removeChild(AnimationWrapper.childNodes[0]);
      }
    }

    if (AnimationWrapper && AnimationWrapper.hasChildNodes()) {
      AnimationWrapper.removeChild(divAnimation1);
      AnimationWrapper.removeChild(divAnimation2);
      AnimationWrapper.removeChild(divAnimation3);
    }
  },
  errorMessage: (msg) => {
    text.textContent = msg;
    errorMsg.appendChild(text);
    errorMsg.className = "errorMessage";
    AnimationWrapper.appendChild(errorMsg);
  },
  deleteMessage: () => {
    // text.textContent = "";

    if (AnimationWrapper.hasChildNodes()) {
      if (AnimationWrapper.childNodes[0].nodeName == "#text") {
        AnimationWrapper.removeChild(AnimationWrapper.childNodes[0]);
      }
    }
  },
};
