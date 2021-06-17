import createBudgetForm from "./createBudgetForm.js";

const createBudget = () => {
  const body = document.getElementById("create-budget-body");
  const container = document.createElement("div");
  container.className = "create-budget-container";
  const content = document.createElement("div");
  content.className = "create-budget-content";
  container.appendChild(content);

  createHeader(content);
  createBudgetForm(content);
  body.appendChild(container);
};

const createHeader = (parent) => {
  const headerContainer = document.createElement("header");
  headerContainer.className = "header-container";

  const headerCategory = document.createElement("h2");
  const headerCategoryText = document.createTextNode("Name");
  headerCategory.className = "header-name"
  headerCategory.appendChild(headerCategoryText);

  const headerAmount = document.createElement("h2");
  const headerAmountText = document.createTextNode("Amount");
  headerAmount.className = "header-amount"
  headerAmount.appendChild(headerAmountText);

  const headerRepeat = document.createElement("h2");
  const headerRepeatText = document.createTextNode("Repeat");
  headerRepeat.className = "header-repeat"
  headerRepeat.appendChild(headerRepeatText);

  headerContainer.appendChild(headerCategory);
  headerContainer.appendChild(headerAmount);
  headerContainer.appendChild(headerRepeat);
  parent.appendChild(headerContainer);
};
createBudget();
