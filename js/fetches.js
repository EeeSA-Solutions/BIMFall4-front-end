import { token } from "./cookiecutter.js";
import { dotAnimation } from "./animations.js";
import { popupConfirmation } from "./popupConfirmation.js";
import { fullDate } from "./dateSelector.js";

//---------------------Collection of "fetch" functions----------------------

export const getDataByName = (name) => {
  // dotAnimation.show();

  return fetch(`https://localhost:44357/api/${name}/?date=${fullDate}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
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
  }).then (() => {
    window.location.reload()
  })
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
  const fetchedData = fetch("https://localhost:44357/api/" + model, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(requestObject),
  })
    .then((res) => {
      if (res.status === 405 && model === "budget") {
        return res;
      } else {
        window.location.reload();
      }
    })
    .catch(() => {
      // dotAnimation.errorMessage("Unable to add");
    })
    .finally(() => {
      // dotAnimation.hide();
    });
  return fetchedData;
};
