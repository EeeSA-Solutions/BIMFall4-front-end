import { putByID } from "./fetches.js";

const popup = (editObj, model, id) => {
  //Get overlay container
  const overlayContainer = document.getElementById("overlay-container");
  //create overlay
  const overlay = document.createElement("div");
  overlay.className = "overlay";
  overlayContainer.appendChild(overlay);
  overlay.style.visibility = "visible";

  //create popup
  const popup = document.createElement("div");
  popup.className = "popup popupb";
  overlay.appendChild(popup);

  //Creating X button for closeDown popup
  const close = document.createElement("p");
  close.className = "close";
  const x = document.createTextNode("×");
  close.appendChild(x);
  popup.appendChild(close);

  //Creating Form
  const form = document.createElement("form");
  form.id = "popupForm";
  popup.appendChild(form);

  let nr = 2;

if (model === "savinggoal"){
  nr = 4
}
  for(var i = 0; i < Object.values(editObj).length -nr; i++){
    //create inputs in popup
    const input = document.createElement("input");
    input.className = "input1";
    input.value = Object.values(editObj)[i];
    form.appendChild(input);
  };
  //  }

  //Creating SubmitButton
  const btn = document.createElement("button");
  btn.className = "submit-btn";
  const TextButton = document.createTextNode("Submit");
  btn.appendChild(TextButton);
  btn.type = "submit";
  form.appendChild(btn);

  //Closing down popup
  close.addEventListener("click", () => {
    console.log("funkar");
    if (overlay.className === "overlay") {
      overlay.style.visibility = "hidden";
      overlay.remove();
    }
  });
  
  window.onclick = function (event) {
    if (event.target == overlay) {
      overlay.remove();
    }
  };
  
  popupForm.onsubmit = (e) => {
    e.preventDefault();
    createEditObj(e, model, id);
    window.location.reload();
  };
};
const createEditObj = (e, model, id) => {
  switch (model) {
    case "Income":
      const incomeObject = {
        Name: e.target[0].value,
        Amount: e.target[1].value,
        Date: e.target[2].value,
      };
      putByID(incomeObject, model, id);
      break;

    case "Expense":
      const expenseObject = {
        Name: e.target[0].value,
        Category: e.target[1].value,
        Date: e.target[2].value,
        Amount: e.target[3].value,
      };
      putByID(expenseObject, model, id);
      break;

    case "budget":
      const budgetObject = {
        Category: e.target[0].value,
        Amount: e.target[1].value,
        Date: e.target[2].value,
      };
      putByID(budgetObject, model, id);
      break;

    case "savinggoal":
      const savinggoalObject = {
        Name: e.target[0].value,
        Amount: e.target[1].value,
        StartDate: e.target[2].value,
        ReachDate: e.target[3].value,
      };
      putByID(savinggoalObject, model, id);
      break;



    default:
      break;
  }
};
export default popup;
