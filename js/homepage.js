import { cookieUserID } from "./cookiecutter.js";
import { getDataByName } from "./fetches.js";

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
welcomeMessage();
