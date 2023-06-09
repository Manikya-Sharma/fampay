const dutchCheckBox = document.getElementById("dutch");
dutchCheckBox.addEventListener("change", () => {
  if (dutchCheckBox.checked) {
    const div = document.createElement("div");
    div.id = "num-people";
    const num = document.createElement("input");
    div.classList.add("flex", "gap-3");
    num.setAttribute("type", "number");
    num.id = "num";
    num.classList.add(
      "rounded-md",
      "h-10",
      "focus:border-red-800",
      "active:border-red-400",
      "hover:border-orange-400",
      "border-2",
      "px-2",
      "mt-5",
      "overflow-auto",
      "text-orange-800",
      "font-semibold",
      "text-lg",
      "selection:bg-[#f5a623]",
      "selection:text-[#121212]",
      "mx-auto",
      "w-[15rem]"
    );
    num.setAttribute("placeholder", "Enter the number of people")
    document.querySelector("#splitting").insertAdjacentElement("afterend", div);
    div.appendChild(num);
    num.addEventListener("change", () => {
      const amt = document.getElementById("amount").value;
      const numPeople = document.getElementById("num").value;
      if (amt && numPeople) {
        document.querySelector(".main-container").lastElementChild.textContent =
          "Payment to be made per person: ₹" + amt / numPeople;
      }
    });
  } else {
    document.querySelector("#num-people").remove();
  }
});

const proceedButton = document.querySelector("#proceed");
proceedButton.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem("numPeople", document.getElementById("num").value)
  location.href = "./proceed-payment.html";
});
