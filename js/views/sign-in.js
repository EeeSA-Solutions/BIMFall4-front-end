import { dotAnimation } from "../components/animations.js";

let UserID;
let Token;

loginForm.onsubmit = (e) => {
  e.preventDefault();
  console.log(e);

  let requestObject = {
    Email: e.target[0].value,
    Password: e.target[1].value,
  };
  dotAnimation.deleteMessage();
  dotAnimation.show();
  fetch("https://localhost:44357/api/Login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestObject),
  })
    .then((Response) => Response.json())
    .then((result) => {
      console.log(result);
      if (result.Status != "Invalid") {
        UserID = result.UserID;
        Token = result.UserToken;
        setCookie("User", UserID);
        setCookie("Token", Token);
        window.location.href = "summary.html";
      } else {
        document.getElementById("ErrorMessage").style.visibility = "Visible";
      }
      dotAnimation.hide();
    });
  function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";" + ";path=/";
  }
};

var x = document.getElementById("loginForm");
var y = document.getElementById("registerForm");

// function login_swipe() {
//   x.style.left = "-400px";
//   y.style.left = "440px";
// }

// function register_swipe() {
//   x.style.left = "0px";
//   y.style.left = "400px";
// }

function login_swipe() {
  x.style.left = "-100%";
  y.style.left = "98%";
}

export function register_swipe() {
  x.style.left = "0%";
  y.style.left = "100%";
}

document.getElementById("sign-in").addEventListener("click", () => {
  register_swipe();
});

document.getElementById("sign-up").addEventListener("click", () => {
  login_swipe();
});
