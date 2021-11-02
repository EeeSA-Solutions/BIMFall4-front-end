import { cookieUserID } from "./cookiecutter.js";
import generateTable from "./tableGenerator.js";
import { getDataByName, postByModel } from "./fetches.js";
import { welcomeMessage } from "./homepage.js";

// welcomeMessage();
getDataByName("budget").then((data) => {
  data.forEach((obj) => {
    obj.Date = obj.Date.slice(0, 10);
    //delete and edit columns with the important value
    obj["Edit"] = obj;
    obj["Delete"] = obj.ID;
    delete obj["ID"];
  });
  generateTable(data, "table-div", "budget");
});

const planBtn = document.getElementById("planbudget");
const createBudgetBody = document.getElementById("create-budget-body");
const clearBtn = document.getElementById("clear-btn");
const containerBudget = document.getElementById("containerBudget");

createBudgetForm.onsubmit = (e) => {
  e.preventDefault();
  var today = new Date();
  var yearMonth = today.getFullYear() + "-" + (today.getMonth() + 1);
  let reqObjects = [
    {
      Category: "Groceries",
      Amount: e.target[0].value,
      UserID: cookieUserID,
      Date: yearMonth,
      Repeat: e.target[1].checked,
    },
    {
      Category: "Entertainment",
      Amount: e.target[2].value,
      UserID: cookieUserID,
      Date: yearMonth,
      Repeat: e.target[3].checked,
    },
    {
      Category: "Fixed Cost",
      Amount: e.target[4].value,
      UserID: cookieUserID,
      Date: yearMonth,
      Repeat: e.target[5].checked,
    },
    {
      Category: "Transport",
      Amount: e.target[6].value,
      UserID: cookieUserID,
      Date: yearMonth,
      Repeat: e.target[7].checked,
    },
    {
      Category: "Other",
      Amount: e.target[8].value,
      UserID: cookieUserID,
      Date: yearMonth,
      Repeat: e.target[9].checked,
    },
  ];

  reqObjects.forEach((obj) => {
    if (obj.Amount > 0) {
      console.log(obj);
      postByModel(obj, "budget");
    }
  });

  planBtn.style.display = "flex";
  createBudgetBody.style.display = "none";
  containerBudget.style.display = "unset";
};

//clear button even
clearBtn.addEventListener("click", () => {
  const amount = document.getElementsByClassName("amount-input");
  for (let index = 0; index < amount.length; index++) {
    amount[index].value = "";
  }
});
//plan a budget event
planBtn.addEventListener("click", (e) => {
  createBudgetBody.style.display = "flex";
  planBtn.style.display = "none";
  containerBudget.style.display = "none";
});
