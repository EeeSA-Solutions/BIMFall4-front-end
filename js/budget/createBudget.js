import createBudgetForm from "./createBudgetForm.js";

const createBudget = () => {
  const body = document.getElementById("create-budget-body");
  const container = document.createElement("div");
  container.className = "create-budget-container";
  const content = document.createElement("div");
  content.className = "create-budget-content";
  container.appendChild(content);

 
  createBudgetForm(content);
  body.appendChild(container);
};


createBudget();
