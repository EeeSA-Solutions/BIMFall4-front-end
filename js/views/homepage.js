import { cookieUserID } from "../helpers/cookie.js";
import { getDataByName } from "../fetches.js";
import { friendRequests } from "../components/friendNotification.js";
import { calculateBudgetsAndExpense, getTotal } from "../helpers/calculate.js";
import generateTable from "../components/tableGenerator.js";
import { buildSummaryObj } from "../helpers/factory.js";
import { openDrop } from "../components/dropdown.js";

calculateBudgetsAndExpense().then((result) => {
  generateTable([result[0]], "remaining");
  generateTable([result[1]], "budget");
  generateTable([result[2]], "expense");
});

export function welcomeMessage() {
  if (cookieUserID != "") {
    getDataByName("user")
      .then((data) => {
        return data.FirstName;
      })
      .then((result) => {
        var welcomeText = document.createElement("h3");
        welcomeText.appendChild(document.createTextNode(result));
        document.getElementById("profileName").appendChild(welcomeText);
      });
  } else {
    var notLoggedIn = document.createElement("h5");
    notLoggedIn.appendChild(
      document.createTextNode(
        "You are not logged in. Please login for full use of this site."
      )
    );
    document.getElementById("profileName").appendChild(notLoggedIn);
  }
}
buildSummaryObj().then((res) => {
  console.log(res);
});

welcomeMessage();
friendRequests();

const dropdown = document.getElementById("openDrop");
if (dropdown) {
  dropdown.addEventListener("click", () => {
    openDrop();
  });
}
