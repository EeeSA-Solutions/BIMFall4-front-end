let UserID;

loginForm.onsubmit = (e) => {
  e.preventDefault();
  console.log(e);

  let requestObject = {
    Email: e.target[0].value,
    Password: e.target[1].value,
  };

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
    });
  function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";" + ";path=/";
  }
};

var x = document.getElementById("loginForm");
var y = document.getElementById("registerForm");

function login_swipe() {
  x.style.left = "-400px";
  y.style.left = "440px";
}

function register_swipe() {
  x.style.left = "0px";
  y.style.left = "400px";
}
