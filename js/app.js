let gridItems = document.querySelectorAll(".grid-item");
let ul = document.querySelector(".footer-container");

let num = 0;

gridItems.forEach((item1) => {
  const button = item1.querySelector(".add-btn");

  button.addEventListener("click", () => {
    ul.style.visibility = "visible";
    ul.style.opacity = "1";

    item1.classList.add("animation");
    num += Number(item1.querySelector(".item-price").getAttribute("value"));
    document.querySelector(".fixed-cart-price").innerHTML = `$${num}`;

    setTimeout(() => {
      item1.classList.remove("animation");
    }, 5000);

    ul.insertAdjacentHTML(
      "beforeend",
      `<li class="footer-items">
      <button class="remove-item">X</button>
      <div class="side-by-side">     
      ${
        item1.querySelector(".title").textContent
      } <img class="cart-image" src="${item1
        .querySelector(".bike-image")
        .getAttribute("src")}"/></div> <span class="cart-price">${
        item1.querySelector(".item-price").textContent
      }</span> </li>`
    );

    document.querySelectorAll(".remove-item").forEach((item) => {
      item.addEventListener("click", function () {
        num -= Number(item1.querySelector(".item-price").getAttribute("value"));
        document.querySelector(".fixed-cart-price").innerHTML = `$${num}`;
        if (num === 0) {
          setTimeout(() => {
            document.querySelector(".footer-container").style.visibility =
              "hidden";
            document.querySelector(".footer-container").style.opacity = "0";
          }, 1000);
        }

        item.parentNode.classList.add("remove-animation");

        setTimeout(() => {
          item.parentNode.remove();
        }, 1000);
      });
    });
  });
});
