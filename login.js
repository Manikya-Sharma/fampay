const btn = document.getElementById("submit");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const userName = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  if (
    userName != localStorage.getItem("userName") ||
    password != localStorage.getItem("password")
  ) {
    alert("Incorrect username or password!");
    console.log(userName);
    console.log(localStorage.getItem("userName"));
    console.log(password);
    console.log(localStorage.getItem("password"));
  } else {
    location.href = "logged-in.html";
  }
});
