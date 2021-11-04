import generateTable from "./tableGenerator.js";
import { getDataByName } from "./fetches.js"
import { feedbackResponse } from "./workhorse.js"
import { cookieUserID } from "./cookiecutter.js";
import {token} from "./cookiecutter.js"
import { welcomeMessage } from "./homepage.js";
forms.onsubmit = (e) => {
  e.preventDefault();

  let requestObject = {
    ID: cookieUserID,
    Email: e.target[0].value
  };

  fetch("https://localhost:44357/api/friend", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `bearer ${token}`
    },
    body: JSON.stringify(requestObject),
  })
    .then((response) => response.json())
    .then((response) => {
      feedbackResponse(response, "feedback")
    });
}
getDataByName("Friend").then((data) => {
  friendListSorter(data)
});

function friendListSorter(list) {
  let received = []
  let sent = []
  let friends = []
  list.forEach((obj) => {
    if (obj.List_ID === 1) {
      obj["Accept"] = obj.Relationship_ID;
      obj["Delete"] = obj.Relationship_ID;
      delete obj.List_ID
      delete obj.Relationship_ID
      received.push(obj)
    } else if (obj.List_ID === 2) {
      obj["Delete"] = obj.Relationship_ID;
      delete obj.Relationship_ID
      delete obj.List_ID
      sent.push(obj)
    } else if (obj.List_ID === 3) {
      obj["Delete"] = obj.Relationship_ID;
      delete obj.Relationship_ID
      delete obj.List_ID
      friends.push(obj)
    }
  })
  generateTable(sent, "sent", "Friend")
  generateTable(received, "received", "Friend")
  generateTable(friends, "friends", "Friend")
}
