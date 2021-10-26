import { cookieUserID } from "./cookiecutter.js";
import generateTable from "./tableGenerator.js";
import { getDataByName, postByModel } from "./fetches.js";
import {welcomeMessage} from "./homepage.js";

forms.onsubmit = (e) => {
  e.preventDefault();
  let requestObject = {
    Category: e.target[0].value,
    Amount: e.target[1].value,
    UserID: cookieUserID,
    Date: e.target[2].value,
  };
  postByModel(requestObject, "budget")
};

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
