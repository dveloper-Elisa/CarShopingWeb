//  variable

const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const clearcartBtn = document.querySelector(".clear-cart");
const cartDom = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDom = document.querySelector(".products-center");

// cart array

let cart = [];

//  dealing with bag buttons
function getBagBtn() {
  const btns = [...document.querySelectorAll(".bag-btn")];

  btns.forEach((button) => {
    let id = button.dataset.id;
    let inCart = cart.find((checkCart) => checkCart.id === id);

    if (inCart) {
      button.innerText = "in cart";
      button.disabled = true;
    }
    button.addEventListener("click", (e) => {
      e.preventDefault();
      button.innerText = "in cart";
      button.disabled = true;

      // GETTING PRODUCT FROM PRODUCTS
      let addedProduct = { ...getProduct(id), amount: 1 };
      // ADDING PRODUCT TO CART

      cart = [...cart, addedProduct];

      //   SAVING PRODUCT TO LOCAL STORAGE
      savingToLocalStorage();

      //   SETTING CART VALUES
      setCartCartValue(cart);

      //   displaying Cart Items
      addCartItem(addedProduct);

      //   SHOWIG CART
      showCart();
    });
  });
  function setCartCartValue(cart) {
    let tempTotal = 0;
    let itemsTotal = 0;
    cart.map((item) => {
      tempTotal += item.price * item.amount;
      itemsTotal += item.amount;
    });
    cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
    cartItems.innerText = itemsTotal;
  }
  //   ADDING ITEM TO CART
  function addCartItem(item) {
    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
    <img src=${item.image.url} alt="product" />
            <div>
              <h4>${item.title}</h4>
              <h5>$${item.price}</h5>
              <span class="remove-item" data-id=${item.id}>Remove</span>
            </div>
            <div>
              <i class="fas fa-chevron-up" data-id=${item.id}></i>
              <p class="item-amount">${item.amount}</p>
              <i class="fas fa-chervron-down" data-id=${item.id}></i> 
            </div>
    `;
    cartContent.appendChild(div);
  }

  //   SHOWING CART METHOD
  function showCart() {
    cartOverlay.classList.add("transparentBcg");
    cartDom.classList.add("showCart");
  }
}

// product Array
const productsData = [
  {
    id: crypto.randomUUID(),
    title: "queen beds",
    price: 10.99,
    image: { url: "./photo/HD_car.jpg" },
  },
  {
    id: crypto.randomUUID(),
    title: "King's car",
    price: 10.99,
    image: { url: "./photo/hhh.jpg" },
  },
  {
    id: crypto.randomUUID(),
    title: "shapened car",
    price: 10.99,
    image: { url: "./photo/hhhh.jpg" },
  },
  {
    id: crypto.randomUUID(),
    title: "Kubota car",
    price: 10.99,
    image: { url: "./photo/ertyui.jpg" },
  },
  {
    id: crypto.randomUUID(),
    title: "couple's beds",
    price: 11.99,
    image: { url: "./photo/lamuzine.jpg" },
  },
  {
    id: crypto.randomUUID(),
    title: "Hop car",
    price: 14.99,
    image: { url: "./photo/c.jpg" },
  },
  {
    id: crypto.randomUUID(),
    title: "Brabasi",
    price: 14.99,
    image: { url: "./photo/asdfghjk.jpg" },
  },
  {
    id: crypto.randomUUID(),
    title: "Kabox's beds",
    price: 11.99,
    image: { url: "./photo/ff.jpg" },
  },
  {
    id: crypto.randomUUID(),
    title: "Lewisex car",
    price: 12.33,
    image: { url: "./photo/mcleran-car.jpg" },
  },
  {
    id: crypto.randomUUID(),
    title: "Industry car",
    price: 12.33,
    image: { url: "./photo/aaa.jpg" },
  },
  {
    id: crypto.randomUUID(),
    title: "Business cars",
    price: 12.33,
    image: { url: "./photo/b.jpg" },
  },
  {
    id: crypto.randomUUID(),
    title: "Benz",
    price: 12.33,
    image: { url: "./photo/HD_car.jpg" },
  },
  {
    id: crypto.randomUUID(),
    title: "Benz",
    price: 12.33,
    image: { url: "./photo/f.jpg" },
  },
  {
    id: crypto.randomUUID(),
    title: "Benzema's car",
    price: 12.33,
    image: { url: "./photo/HD_car.jpg" },
  },
  {
    id: crypto.randomUUID(),
    title: "readies cars",
    price: 12.33,
    image: { url: "./photo/car2.jpg" },
  },
  {
    id: crypto.randomUUID(),
    title: "hammer car",
    price: 12.33,
    image: { url: "./photo/car1.jpg" },
  },
];

// Saving products into local storage

function store() {
  localStorage.setItem("products", JSON.stringify(productsData));
}

// get product from local storage

function getProduct(id) {
  let products = JSON.parse(localStorage.getItem("products"));
  return products.find((productCart) => productCart.id === id);
}

// SAVING CART TO LOCAL STORAGE
function savingToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// displaying products

function display() {
  let result = "";

  productsData.forEach((image) => {
    result += `
   
    <article class="product">
    <div class="img-container">
      <img
        src=${image.image.url}
        alt="product"
        class="product-img"
      />
      <button class="bag-btn" data-id=${image.id}>
        <i class="fa fa-shoping-cart"></i>add to bag
      </button>
    </div>
    <h3>${image.title}</h3>
    <h4>$${image.price}</h4>
  </article>
    
    `;
    productsDom.innerHTML = result;
  });
}

//  function calling methods
document.addEventListener("DOMContentLoaded", () => {
  display(); // is displaying products to the dom
  store(); // storin products in local storage

  getBagBtn(); // geting all bug buttons
});

// Removing cart overlay

const cartProduct = document
  .querySelector(".cart-overlay")
  .addEventListener("click", (e) => {
    if (e.target.classList.contains("clear-cart")) {
      cart = [];
      localStorage.setItem("cart", JSON.stringify(cart));
      cartOverlay.classList.remove("transparentBcg");
      cartDom.classList.remove("showCart");
    }
    if (e.target.className == "remove-item") {
      let id = e.target.dataset;
      let onCart = JSON.parse(localStorage.getItem("cart"));
      onCart = onCart.find((product) => product.id != id);
      localStorage.setItem("cart", JSON.stringify(onCart));
      e.target.parentElement.parentElement.remove();
      // count Cart Item
    }
    if (e.target.classList.contains("fa-window-close")) {
      cartOverlay.classList.remove("transparentBcg");
      cartDom.classList.remove("showCart");
    }
  });
cartItems.addEventListener("click", (e) => {
  e.preventDefault();
  cartDom.classList.add("showCart");
  cartOverlay.classList.add("transparentBcg");
});
