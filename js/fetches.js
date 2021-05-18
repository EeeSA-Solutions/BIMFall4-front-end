import cookieUserID from "./cookiecutter.js";
import { dotAnimation } from "./animations.js";
import { popupConfirmation } from "./popupConfirmation.js";
//---------------------Collection of "fetch" functions----------------------

export const getDataByName = (name) => {
  dotAnimation.show();
  return fetch(`https://localhost:44357/api/${name}/${cookieUserID}`)
    .then((response) => {
      return response.json();
    })
    .catch(() => {
      dotAnimation.errorMessage("Unable to retrieve data");
    })
    .finally(() => {
      dotAnimation.hide();
    });
};

export const deleteByID = (model, id) => {
  popupConfirmation(
    () => {
      dotAnimation.show();
      fetch("https://localhost:44357/api/" + model + "/" + id + "/", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(() => {
          window.location.reload();
        })
        .catch(() => {
          dotAnimation.errorMessage("Unable to delete");
        })
        .finally(() => {
          dotAnimation.hide();
        });
    },
    () => {
      return;
    },
    "Are you sure you want to delete this?"
  );
};

export const setFriendStatus = (relationshipID, wantedstatus) => {
  return fetch(`https://localhost:44357/api/Friend/${relationshipID}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(wantedstatus),
  });
};

export const putByID = (requestObject, model, id, parent) => {
  popupConfirmation(
    () => {
      dotAnimation.deleteMessage();
       dotAnimation.show(parent)
      fetch("https://localhost:44357/api/" + model + "/" + id + "/", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestObject),
      })
        .then(() => {
          window.location.reload();
        })
        .catch(() => {
          dotAnimation.errorMessage("Unable to edit");
        })
        .finally(() => {
          dotAnimation.hide();
        });
    },
    () => {
      return;
    },
    "Are you sure you want to change this?"
  );
};

export const postByModel = (requestObject, model) => {
  dotAnimation.deleteMessage();
  dotAnimation.show();
  fetch("https://localhost:44357/api/" + model, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestObject),
  })
    .then(() => {
      window.location.reload();
    })
    .catch(() => {
      dotAnimation.errorMessage("Unable to add");
    })
    .finally(() => {
      dotAnimation.hide();
    });
};
