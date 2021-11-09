registerForm.onsubmit = (e) => {
  e.preventDefault();

  if(e.target[3].value === e.target[4].value){
  let requestObject = {
    FirstName: e.target[0].value,
    LastName: e.target[1].value,
    Email: e.target[2].value,
    Password: e.target[3].value,
  };
  fetch("https://localhost:44357/api/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestObject),
  })
    .then((Response) => { return Response.json() })
    .then((data) => {

      if (data.Status == "Invalid")
        alert(data.Message);
      else {
        register_swipe();
      }
    })
  }
  else{
    alert('Passwords do not match!')
  }
};