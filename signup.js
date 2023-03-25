btn = document.querySelector("button");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const fName = document.getElementById("first-name").value;
  const lName = document.getElementById("last-name").value;
  const dob = document.getElementById("dob").value;
  const age = document.getElementById("age").value;
  const password = document.getElementById("password").value;
  const cPwd = document.getElementById("cPwd").value;
  const email = document.getElementById("email").value;
  if (cPwd !== password) {
    alert("The passwords do not match! Please enter correct password");
  }
  localStorage.setItem("fname", fName);
  localStorage.setItem("lName", lName);
  localStorage.setItem("dob", dob);
  localStorage.setItem("age", age);
  localStorage.setItem("password", password);
  localStorage.setItem("email", email);
  //* friends can dutch, they will be sent notification

  location.href = "login.html";
});
