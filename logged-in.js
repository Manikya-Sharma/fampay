document.querySelector(".content").firstElementChild.textContent =
  "Welcome " +
  localStorage.getItem("fName") +
  " " +
  localStorage.getItem("lName") +
  " you are logged in!";
