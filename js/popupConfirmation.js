export const popupConfirmation = () => {
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
  const textNode = document.createTextNode(
    "Are you sure you want to continue?"
  );
  text.appendChild(textNode);
  popup.append(text);

  //create form
  const form = document.createElement("form");
  popup.append(form);

  //create buttons
  const btnNo = document.createElement("button");
  const btnYes = document.createElement("button");
  btnNo.textContent = "No";
  btnYes.textContent = "Yes";
  btnNo.value = false;
  btnYes.value = true;
  form.append(btnNo);
  form.append(btnYes);

  form.addEventListener("click", (e) => {
    e.preventDefault();
  });
  return form[0].value;
};
const clickhandler = (e) => {
  e.preventDefault();
  console.log(e.target.value);
  return e.target.value;
};
