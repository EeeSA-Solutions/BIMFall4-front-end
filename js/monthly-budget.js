import { cookieUserID } from "./cookiecutter.js";
import generateTable from "./tableGenerator.js";
import { getDataByName, postByModel } from "./fetches.js";
import { welcomeMessage } from "./homepage.js";
import { popupConfirmation } from "./popupConfirmation.js";
import { fullDate } from "./dateSelector.js";
// welcomeMessage();
const renderTable = () => {
  getDataByName("budget").then((data) => {
    const newData = data.map((obj) => {
      return manipulateRequestObject(obj);
    });
    generateTable(newData, "table-div", "budget");
  });
};
const manipulateRequestObject = (obj) => {
  obj.Date = obj.Date.slice(0, 7);
  //delete and edit columns with the important value
  obj["Edit"] = obj;
  obj["Delete"] = obj.ID;
  delete obj["ID"];
  return obj;
};

renderTable();

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
      Date: fullDate,
      Repeat: e.target[1].checked,
    },
    {
      Category: "Entertainment",
      Amount: e.target[2].value,
      UserID: cookieUserID,
      Date: fullDate,
      Repeat: e.target[3].checked,
    },
    {
      Category: "Fixed Cost",
      Amount: e.target[4].value,
      UserID: cookieUserID,
      Date: fullDate,
      Repeat: e.target[5].checked,
    },
    {
      Category: "Transport",
      Amount: e.target[6].value,
      UserID: cookieUserID,
      Date: fullDate,
      Repeat: e.target[7].checked,
    },
    {
      Category: "Other",
      Amount: e.target[8].value,
      UserID: cookieUserID,
      Date: fullDate,
      Repeat: e.target[9].checked,
    },
  ];
  reqObjects.forEach((obj) => {
    if (obj.Amount > 0) {
      postByModel(obj, "budget").then((res) => {
        if (res?.status === 405) {
          overrideConfirm(obj);
        }
      });
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

const overrideConfirm = (obj) => {
  obj["Override"] = true;
  popupConfirmation(
    () => {
      postByModel(obj, "budget");
      renderTable();
    },
    () => {
      return;
    },
    `Budget for ${obj.Category} already exist for this month, do you want to override it?`
  );
};
