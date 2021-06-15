const createBudgetForm = (parent) => {
  const form = document.createElement("form");
  const inputContainer = document.createElement("div");
  inputContainer.className = "input-container";


  const nameColumn = document.createElement("div")
  nameColumn.className = "name-column"
  inputContainer.appendChild(nameColumn)
  const amountColumn = document.createElement("div")
  amountColumn.className = "amount-column"
  inputContainer.appendChild(amountColumn)
  const repeatColumn = document.createElement("div")
  repeatColumn.className = "repeat-column"
  inputContainer.appendChild(repeatColumn)

  createHeader(nameColumn, amountColumn, repeatColumn)
  //for loop
  for (let index = 0; index < 10; index++) {
    const inputDiv = document.createElement("div");
    inputDiv.className = "input-content"
    createLabel(nameColumn);
    createInput(amountColumn);
    createRadio(repeatColumn);
    inputContainer.appendChild(inputDiv);
  }
  form.appendChild(inputContainer);

  //static
  createDropdown(form);
  createAddCategory(form);
  createButtons(form);
  parent.appendChild(form);
};

// const nameColumn = (parent) => {
//   const div = document.createElement("div")
//   div.className = "name-column"
//   parent.appendChild(div)
// }
// const amountColumn = (parent) => {
//   const div = document.createElement("div")
//   div.className = "amount-column"
// }
// const repeatColumn = (parent) => {
//   const div = document.createElement("div")
//   div.className = "repeat-column"
// }


const createLabel = (form) => {
  const label = document.createElement("label");
  const textNode = document.createTextNode("Groceries");
  label.appendChild(textNode);
  form.appendChild(label);
};
const createInput = (form) => {
  const input = document.createElement("input");
  input.type = "number";
  input.className = "amountInput"
  form.appendChild(input);

};
const createRadio = (form) => {
  const radio = document.createElement("input");
  radio.type = "radio";
  radio.className = "radioInput"
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

const createHeader = (parent1, parent2, parent3) => {
  const headerCategory = document.createElement("h2");
  const headerCategoryText = document.createTextNode("Name");
  headerCategory.appendChild(headerCategoryText);

  const headerAmount = document.createElement("h2");
  const headerAmountText = document.createTextNode("Amount");
  headerAmount.appendChild(headerAmountText);

  const headerRepeat = document.createElement("h2");
  const headerRepeatText = document.createTextNode("Repeat");
  headerRepeat.appendChild(headerRepeatText);

  parent1.appendChild(headerCategory);
  parent2.appendChild(headerAmount);
  parent3.appendChild(headerRepeat);
  
};

export default createBudgetForm;
