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
// getting products

// class Products {
//   async getProducts() {
//     try {
//       let result = await fetch("products.json");
//       let data = await result.json();
//       let products = data.items;

//       products = products.map((item) => {
//         const { title, price } = item.field;
//         const { id } = item.sys;
//         const image = item.image.url;
//         return { title, price, id, image };
//       });

//       return products;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// }

const productsData = [
  {
    id: crypto.randomUUID(),
    title: "queen beds",
    price: 10.99,
    image: { url: "./IMG-20220618-WA0024.jpg" },
  },
  {
    id: crypto.randomUUID(),
    title: "King's beds",
    price: 10.99,
    image: { url: "./IMG-20230411-WA0001.jpg" },
  },
  {
    id: crypto.randomUUID(),
    title: "couple's beds",
    price: 11.99,
    image: { url: "./IMG-20220630-WA0007.jpg" },
  },
  {
    id: crypto.randomUUID(),
    title: "God's beds",
    price: 14.99,
    image: { url: "./IMG_20220525_152948.jpg" },
  },
  {
    id: crypto.randomUUID(),
    title: "Kabox's beds",
    price: 11.99,
    image: { url: "./IMG-20230411-WA0011.jpg" },
  },
  {
    id: crypto.randomUUID(),
    title: "Elisa's beds",
    price: 12.33,
    image: { url: "./IMG-20220618-WA0024.jpg" },
  },
];

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
});
