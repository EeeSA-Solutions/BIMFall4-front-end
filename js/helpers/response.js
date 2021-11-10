export const feedbackResponse = (response, whereID) => {
  if (response.Status == "Success") {
    document.getElementById(whereID).innerHTML = response.Message;
  } else if (response.status == "200") {
    document.getElementById(whereID).innerHTML = "Success";
  } else {
    document.getElementById(whereID).innerHTML = response.Message;
  }
};
