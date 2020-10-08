let gridItems = document.querySelectorAll(".grid-item");
let ul = document.querySelector(".footer-container");
let toDelete = false;
let num = 0;
let uniqueId = 0;

gridItems.forEach((item) => {
  const button = item.querySelector(".add-btn");
  button.addEventListener("click", () => {
    ul.style.visibility = "visible";
    ul.style.opacity = "1";
    item.classList.add("animation");
    num += Number(item.querySelector(".item-price").getAttribute("value"));
    document.querySelector(".fixed-cart-price").innerHTML = `$${num}`;
    uniqueId++;

    setTimeout(() => {
      item.classList.remove("animation");
    }, 5000);

    ul.insertAdjacentHTML(
      "beforeend",
      `<li value="${uniqueId}" class="footer-items">
      <button class="remove-item">X</button>
      <div class="side-by-side">     
      ${
        item.querySelector(".title").textContent
      } <img class="cart-image" src="${item
        .querySelector(".bike-image")
        .getAttribute("src")}"/></div> <span class="cart-price">${
        item.querySelector(".item-price").textContent
      }</span> </li>`
    );

    document.querySelectorAll(".remove-item").forEach((item) => {
      item.addEventListener("click", function () {
        item.parentNode.remove();
      });
    });
  });
});
