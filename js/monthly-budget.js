import cookieUserID from "./cookiecutter.js";
import generateTable from "./tableGenerator.js";
import { getDataByName } from "./fetches.js";

forms.onsubmit = (e) => {
  e.preventDefault();
  let requestObject = {
    Category: e.target[0].value,
    Amount: e.target[1].value,
    UserID: cookieUserID,
    Date: e.target[2].value,
  };

  fetch("https://localhost:44357/api/budget", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestObject),
  });
};



// GetBudgetsByUserIdPromise().then((data) => {
//   data.forEach((item) => {
//     item.Date = item.Date.slice(0, 10);
//   });
//   generateTable(data, "table-div");
// });

getDataByName("budget").then((data) => {
  data.forEach((item) => {
    item.Date = item.Date.slice(0, 10);
    item["Delete"] = item.ID
    item["Edit"] = item.ID
  });
  generateTable(data, "table-div");
});
