import { cookieUserID } from "../helpers/cookie.js";
import generateTable from "../components/tableGenerator.js";
import { getDataByName, postByModel } from "../fetches.js";
import { welcomeMessage } from "./homepage.js";
import { getDefaultDateForInput } from "../helpers/date.js";

document.getElementById("date").value = getDefaultDateForInput();

forms.onsubmit = (e) => {
  e.preventDefault();
  console.log(e);

  let requestObject = {
    Name: e.target[0].value,
    Amount: e.target[1].value,
    Date: e.target[2].value,
    UserID: cookieUserID,
    Repeat: e.target[3].checked,
  };

  postByModel(requestObject, "Income");
};

//GET
getDataByName("Income").then((data) => {
  data.forEach((obj) => {
    obj.Date = obj.Date.slice(0, 10);
    //delete and edit columns with the important value
    obj["Edit"] = obj;
    obj["Delete"] = obj.ID;
    delete obj["ID"];
  });
  generateTable(data, "table-div", "Income");
});
