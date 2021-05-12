import cookieUserID from "./cookiecutter.js";
import generateTable from "./tableGenerator.js";
import { getDataByName, postByModel } from "./fetches.js";

forms.onsubmit = (e) => {
  e.preventDefault();
  console.log(e);

  let requestObject = {
    Amount: e.target[0].value,
    StartDate: e.target[1].value,
    ReachDate: e.target[2].value,
    Name: e.target[3].value,
    UserID: cookieUserID,
  };

  postByModel(requestObject, "savinggoal")
};

const getMonthdiff = (StartDate, ReachDate) => {
  let months;
  months = (ReachDate.getFullYear()- StartDate.getFullYear())* 12;
  months -= StartDate.getMonth();
  months += ReachDate.getMonth();
  //To calculate with current month---------------------------------------------------------------------------
  months += 1;
  return months;
}


getDataByName("savinggoal").then((data) => {
  data.forEach(function (obj) {
    //calculating days/months to save -------------------------------------------------------------------------
    var msSpan = new Date(obj.ReachDate) - new Date(obj.StartDate);
    var daySpan = msSpan / (1000 * 60 * 60 * 24) + 1; //(1000ms * 60sekunder * 60minuter * 24timmar)
    var saveEveryDay = obj.Amount / daySpan;
    const monthdiff = getMonthdiff(new Date(obj.StartDate), new Date(obj.ReachDate));
    const saveEveryMonth = obj.Amount/monthdiff;

  

    //counting to here ------------------------------------------------------------------------------------------
    //Formatting date
    obj.StartDate = obj.StartDate.slice(0, 10);
    obj.ReachDate = obj.ReachDate.slice(0, 10);
    //Renaming obj key
    obj["Start Date"] = obj["StartDate"];
    obj["Reach Date"] = obj["ReachDate"];
    delete obj["StartDate"];
    delete obj["ReachDate"];
    //adding new obj key and value to object
    obj["Save every day"] = "~" + saveEveryDay.toFixed(0) + "kr";
    obj["Save every month"] = "~" + saveEveryMonth.toFixed(0) + "kr";

    //delete and edit columns with the important value
    obj["Delete"] = obj.ID;
    delete obj["ID"];
    obj["Edit"] = obj;
  });
  generateTable(data, "table-div", "savinggoal");
});
