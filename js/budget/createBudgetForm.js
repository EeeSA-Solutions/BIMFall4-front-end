const createBudgetForm = (parent) => {
  const form = document.createElement("form");
  const inputContainer = document.createElement("div");
  inputContainer.className = "input-container";

  //for loop
  for (let index = 0; index < 10; index++) {
    const inputDiv = document.createElement("div");
    createLabel(inputDiv);
    createInput(inputDiv);
    createRadio(inputDiv);
    inputContainer.appendChild(inputDiv);
  }
  form.appendChild(inputContainer);

  //static
  createDropdown(form);
  createAddCategory(form);
  createButtons(form);
  parent.appendChild(form);
};
const createLabel = (form) => {
  const label = document.createElement("label");
  const textNode = document.createTextNode("Groceries");
  label.appendChild(textNode);
  form.appendChild(label);
};
const createInput = (form) => {
  const input = document.createElement("input");
  input.type = "number";
  form.appendChild(input);
};
const createRadio = (form) => {
  const radio = document.createElement("input");
  radio.type = "radio";
  form.appendChild(radio);
};

const createButtons = (parent) => {
  const container = document.createElement("div");
  container.className = "add-budget-btn-container";

  const clearBtn = document.createElement("button");
  const clearBtnText = document.createTextNode("Clear");
  clearBtn.appendChild(clearBtnText);

  const saveBtn = document.createElement("button");
  const saveBtnText = document.createTextNode("Save");
  saveBtn.appendChild(saveBtnText);

  container.appendChild(clearBtn);
  container.appendChild(saveBtn);
  parent.appendChild(container);
};

const createDropdown = (parent) => {
  const dropdown = document.createElement("select");
  parent.appendChild(dropdown);
};
const createAddCategory = (parent) => {
  const addCategoryBtn = document.createElement("button");
  const textNode = document.createTextNode("+");
  addCategoryBtn.appendChild(textNode);
  parent.appendChild(addCategoryBtn);
};
export default createBudgetForm;
