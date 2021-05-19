export const popupConfirmation = (functionTrue, functionFalse, message) => {
  //Get overlay container
  const overlayContainer = document.getElementById("overlay-container");
  //create overlay
  const overlay = document.createElement("div");
  overlay.className = "overlay";
  overlayContainer.appendChild(overlay);
  overlay.style.visibility = "visible";

  //create popup
  const popup = document.createElement("div");
  popup.className = "popup popup-confirm";
  overlay.appendChild(popup);

  //create text
  const text = document.createElement("p");
  const textNode = document.createTextNode(message);
  text.appendChild(textNode);
  popup.append(text);

  //create form
  const form = document.createElement("form");
  popup.append(form);

  //create buttons
  const btnYes = document.createElement("button");
  const btnNo = document.createElement("button");
  btnYes.textContent = "Yes";
  btnNo.textContent = "No";
  form.append(btnYes);
  form.append(btnNo);

  btnYes.addEventListener("click", (e) => {
    e.preventDefault();
    btnAction(functionTrue);
  });
  btnNo.addEventListener("click", (e) => {
    e.preventDefault();
    btnAction(functionFalse);
  });
  const btnAction = (functionAction) => {
    if (functionAction && typeof functionAction === "function") {
      functionAction();
    }
    overlay.remove();
  };
};
