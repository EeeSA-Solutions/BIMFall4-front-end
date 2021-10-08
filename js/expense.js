import { cookieUserID } from "./cookiecutter.js";
import generateTable from "./tableGenerator.js";
import { getDataByName, postByModel } from "./fetches.js";
import {welcomeMessage} from "./homepage.js";

forms.onsubmit = (e) => {
  e.preventDefault();

  let requestObject = {
    Name: e.target[0].value,
    Category: e.target[1].value,
    Date: e.target[2].value,
    Amount: e.target[3].value,
    UserID: cookieUserID,
  };
  postByModel(requestObject, "Expense")
};

getDataByName("Expense").then((data) => {
  data.forEach((obj) => {
    obj.Date = obj.Date.slice(0, 10);
    obj["Edit"] = obj;
    obj["Delete"] = obj.ID;
    delete obj["ID"];
  });
  generateTable(data, "table-div", "Expense");
});
welcomeMessage();