import menuArr from "./data.js";

const orderContainer = document.getElementById("order-item");

let cart = [];
let totalPrice = 0;

document.addEventListener("click", (e) => {
  if (e.target.id === "add-btn") {
    addToCart(Number(e.target.dataset.id));
  }
  if (e.target.id === "remove-btn") {
    removeFromCart(Number(e.target.dataset.id));
  }

  if (e.target.id === "complete-order-btn") {
    completeOrder();
  }
  if (e.target.id === "pay") {
    detailsForm(e);
  }
});

renderMenu(menuArr);

function renderMenu(arr) {
  let html = ``;

  arr.map((item) => {
    html += `  <div class="menu-item" id=${item.id}>
          <span class="emoji">${item.emoji}</span>
          <div class="item-details">
            <p class="title">${item.name}</p>
            <p>${item.ingredients}</p>
            <span>$${item.price}</span>
          </div>
          <button class="add-btn" id="add-btn" data-id="${item.id}">
            +
          </button>
        </div>
    `;
  });

  document.getElementById("menu-items").innerHTML = html;
}

function addToCart(item) {
  menuArr.map((menuItem) => {
    if (menuItem.id === item) {
      cart.push(menuItem);
      totalPrice += menuItem.price;
    }
  });

  renderCart();
}

function renderCart() {
  let html = ``;

  cart.forEach((item) => {
    html += ` <div>
              <h3 class="mt">
                ${item.name}
                <button id="remove-btn" data-id=${item.id}>remove</button>
              </h3>
              <p class="mt">$${item.price}</p>
            </div>
            `;
  });

  document.getElementById("total").innerText = `$${totalPrice}`;

  orderContainer.innerHTML = html;
}

function removeFromCart(itemId) {
  const index = cart.findIndex((item) => item.id === itemId);
  if (index !== -1) {
    const removedItem = cart.splice(index, 1)[0];
    totalPrice -= removedItem.price;
  }
  renderCart();
}

function completeOrder() {
  cart.length > 0
    ? (document.getElementById("payment-form").style.display = "block")
    : null;
}

function detailsForm(e) {
  e.preventDefault();
  const form = document.getElementById("payment-form");
  const formData = new FormData(form);
  const name = formData.get("full-name");

  const order = document.getElementById("order-details");
  form.style.display = "none";
  order.style.display = "block";
  order.innerHTML = `<p>Thanks, ${name} Your order is on its way!</p>`;
  form.style.display = "none";
  cart = [];
  totalPrice = 0;
  renderCart();
}
