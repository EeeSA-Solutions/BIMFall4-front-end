const AnimationWrapper = document.querySelector("#animation-wrapper");

const divAnimation1 = document.createElement("div");
const divAnimation2 = document.createElement("div");
const divAnimation3 = document.createElement("div");


const errorMsg = document.createElement("p")
let text = document.createTextNode("")


export const dotAnimation = {
    show: () => {
            
            AnimationWrapper.appendChild(divAnimation1)
            AnimationWrapper.appendChild(divAnimation2)
            AnimationWrapper.appendChild(divAnimation3)
    },
    hide: () => {
        if (AnimationWrapper && AnimationWrapper.hasChildNodes()){      
            AnimationWrapper.removeChild(divAnimation1)
            AnimationWrapper.removeChild(divAnimation2)
            AnimationWrapper.removeChild(divAnimation3) 
        }

     },
    errorMessage: (msg) =>{
        text.textContent = msg
         errorMsg.appendChild(text)
          errorMsg.className = "errorMessage"
         AnimationWrapper.appendChild(errorMsg)
    },
    deleteMessage: () => {
        text.textContent = ""
    }
}

