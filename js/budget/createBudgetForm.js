const createBudgetForm = (parent) => {
  const form = document.createElement("form");
  form.className="createBudget-form";
  const inputContainer = document.createElement("div");
  inputContainer.className = "input-container";
  const addBtnDropDownContainer = document.createElement("div");
  addBtnDropDownContainer.className = "buttons-container";
  
  //for loop
  for (let index = 0; index < 5; index++) {
    const inputDiv = document.createElement("div");
    createLabel(inputDiv);
    createInput(inputDiv);
    createCheckbox(inputDiv);
    inputDiv.className="input-content";
    inputContainer.appendChild(inputDiv);
  }
  form.appendChild(inputContainer);
  
  //static
  createDropdown(addBtnDropDownContainer);
  createAddCategory(addBtnDropDownContainer);
  createButtons(addBtnDropDownContainer);
  form.appendChild(addBtnDropDownContainer);
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
  input.className = "amount-input";
  form.appendChild(input);
};
const createCheckbox = (form) => {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "checkbox-input";
  form.appendChild(checkbox);
};

const createButtons = (parent) => {

  const btnDropdown = document.createElement("div")
  btnDropdown.className = "btnDropdown-container"

  const container = document.createElement("div");
  container.className = "clearSave-btn-container";
  

  const clearBtn = document.createElement("button");
  const clearBtnText = document.createTextNode("Clear");
  clearBtn.className ="clear-btn";
  clearBtn.appendChild(clearBtnText);

  const saveBtn = document.createElement("button");
  const saveBtnText = document.createTextNode("Save");
  saveBtn.className ="save-btn";
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
  addCategoryBtn.className = "addCategory-btn";
  addCategoryBtn.appendChild(textNode);
  parent.appendChild(addCategoryBtn);
};
export default createBudgetForm;
