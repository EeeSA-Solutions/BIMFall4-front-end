import { getDataByName } from "../fetches.js";

export const friendRequests = async () => {
  const friendlist = getDataByName("Friend");
  checkNotifacion(await friendlist);
};

const checkNotifacion = (list) => {
  list.forEach((element) => {
    if (element.List_ID === 1) {
      const notifactionElement = document.getElementById("notificationDiv");
      if (!notifactionElement) {
        const social = document.getElementsByClassName("social");
        const notificationDiv = document.createElement("div");
        notificationDiv.id = "notificationDiv";
        const text = document.createElement("p");
        const textnode = document.createTextNode("!");
        text.id = "notification";
        text.appendChild(textnode);
        notificationDiv.append(text);
        social[0].append(notificationDiv);
      }
    }
  });
};
