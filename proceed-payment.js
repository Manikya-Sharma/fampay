num = localStorage.getItem("numPeople");
for (let i = num-1; i >= 1; i--) {
  const form = document.querySelector("form");
  const inp = document.createElement("input");
  inp.setAttribute("type", "text");
  inp.setAttribute("id", `person-${i}`);
  inp.setAttribute("name", `person-${i}`);
  inp.setAttribute("placeholder", `Username of friend ${i}`);
  inp.classList.add(
    "rounded-md",
    "h-10",
    "focus:border-red-800",
    "active:border-red-400",
    "hover:border-orange-400",
    "border-2",
    "px-2",
    "overflow-auto",
    "text-orange-800",
    "font-semibold",
    "text-lg",
    "selection:bg-[#f5a623]",
    "selection:text-[#121212]",
    "block",
    "mx-auto",
    "mb-10",
    "w-3/4"
  );
  form.insertBefore(inp, form.firstChild.nextSibling.nextSibling);
}

document.querySelector("#submit").addEventListener("click", (e) => {
  e.preventDefault();
})