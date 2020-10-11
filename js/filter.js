function filterAction() {
  document.querySelectorAll(".grid-item").forEach((item) => {
    let categoryAtt = item.getAttribute("cat");

    if (category() == categoryAtt || category() == "all") {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

function category() {
  let btn = document.querySelectorAll(".category-control");
  for (const cat of btn) {
    if (cat.checked) {
      return cat.getAttribute("data-value-category");
    }
  }
}

function checkAtributeToggle() {
  document.querySelector(".filter-container").addEventListener("click", () => {
    document.querySelectorAll(".category-control").forEach((item) => {
      item.removeAttribute("checked");
    });

    if (event.target.classList == "category-control") {
      event.target.setAttribute("checked", "");
    } else {
      event.stopImmediatePropagation();
    }
  });
}

checkAtributeToggle();

document
  .querySelector(".filter-container")
  .addEventListener("click", () => filterAction());
