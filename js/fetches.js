import { token } from "./cookiecutter.js";
import { dotAnimation } from "./animations.js";
import { popupConfirmation } from "./popupConfirmation.js";
import { fullDate } from "./dateSelector.js";
import { monthToday, yearToday } from "./dateSelector.js";
//---------------------Collection of "fetch" functions----------------------

export const getDataByName = (name) => {
  // dotAnimation.show();
  const requestObject = new Date(`${yearToday}-0${monthToday+1}-01T03:24:00`)
  let newMonthToday = parseInt(monthToday);
  let newYearToday = parseInt(yearToday)
  var fullDate = new Date(`${newMonthToday+1} 01, ${newYearToday}`);
  fullDate = fullDate.toString();
  return fetch(`https://localhost:44357/api/${name}`, {
    
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      Date: fullDate,
    },
    //body: JSON.stringify(requestObject),
  })
    .then((response) => {
      return response.json();
    })
    .catch(() => {
      //dotAnimation.errorMessage("Unable to retrieve data");
    })
    .finally(() => {
      // dotAnimation.hide();
    });
};

export const deleteByID = (model, id) => {
  popupConfirmation(
    () => {
      // dotAnimation.show();
      fetch("https://localhost:44357/api/" + model, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(id),
      })
        .then(() => {
          window.location.reload();
        })
        .catch(() => {
          //dotAnimation.errorMessage("Unable to delete");
        })
        .finally(() => {
          // dotAnimation.hide();
        });
    },
    () => {
      return;
    },
    "Are you sure you want to delete this?"
  );
};

export const setFriendStatus = (relationshipID, wantedstatus) => {
  return fetch(`https://localhost:44357/api/Friend?id=${relationshipID}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(wantedstatus),
  });
};

export const putByID = (requestObject, model, parent) => {
  popupConfirmation(
    () => {
      // dotAnimation.deleteMessage();
      // dotAnimation.show(parent);
      fetch("https://localhost:44357/api/" + model, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(requestObject),
      })
        .then(() => {
          window.location.reload();
        })
        .catch(() => {
          // dotAnimation.errorMessage("Unable to edit");
        })
        .finally(() => {
          // dotAnimation.hide();
        });
    },
    () => {
      return;
    },
    "Are you sure you want to change this?"
  );
};

export const postByModel = (requestObject, model) => {
  // dotAnimation.deleteMessage();
  // dotAnimation.show();
  fetch("https://localhost:44357/api/" + model, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(requestObject),
  })
    .then(() => {
      window.location.reload();
    })
    .catch(() => {
      // dotAnimation.errorMessage("Unable to add");
    })
    .finally(() => {
      // dotAnimation.hide();
    });
};
