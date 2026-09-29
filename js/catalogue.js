const products = {
  "air-force-1": {
    name: "Nike Air Force 1",
    size: "UK 4–10",
    colours: [
      {
        name: "Black",
        image: "images/air-force-black.jpg"
      },
      {
        name: "White",
        image: "images/air-force-white.jpg"
      }
    ]
  },

  "yeezy-350-v2": {
    name: "Yeezy 350 V2",
    size: "UK 4–10",
    colours: [
      {
        name: "White",
        image: "images/yeezy-white.jpg"
      },
      {
        name: "Black",
        image: "images/yeezy-black.jpg"
      },
      {
        name: "Grey",
        image: "images/yeezy-grey.jpg"
      }
    ]
  }
};


/* PAGE ELEMENTS */

const cataloguePage = document.getElementById("catalogue-page");
const productPage = document.getElementById("product-page");

const productName = document.getElementById("product-name");
const productTopName = document.getElementById("product-top-name");

const mainProductImage =
  document.getElementById("main-product-image");

const colourOptions =
  document.getElementById("colour-options");

const backButton =
  document.getElementById("back-button");


/* OPEN PRODUCT */

function openProduct(productId) {

  const product = products[productId];

  if (!product) return;

  productName.textContent = product.name;
  productTopName.textContent = product.name;

  colourOptions.innerHTML = "";

  product.colours.forEach((colour, index) => {

    const button = document.createElement("button");

    button.type = "button";
    button.className = "colour-option";

    if (index === 0) {
      button.classList.add("active");
    }

    button.innerHTML = `
      <img
        src="${colour.image}"
        alt="${product.name} ${colour.name}"
      >

      <span>${colour.name}</span>
    `;

    button.addEventListener("click", () => {

      mainProductImage.src = colour.image;

      mainProductImage.alt =
        `${product.name} ${colour.name}`;

      document
        .querySelectorAll(".colour-option")
        .forEach(option => {
          option.classList.remove("active");
        });

      button.classList.add("active");
    });

    colourOptions.appendChild(button);
  });


  /* DEFAULT TO FIRST COLOUR */

  const firstColour = product.colours[0];

  mainProductImage.src = firstColour.image;

  mainProductImage.alt =
    `${product.name} ${firstColour.name}`;


  /* SWITCH PAGE */

  cataloguePage.classList.remove("active");
  productPage.classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "instant"
  });
}


/* PRODUCT CARD CLICKS */

document
  .querySelectorAll(".product-card")
  .forEach(card => {

    card.addEventListener("click", () => {
      openProduct(card.dataset.product);
    });


    /* KEYBOARD SUPPORT */

    card.addEventListener("keydown", event => {

      if (
        event.key === "Enter" ||
        event.key === " "
      ) {
        event.preventDefault();
        openProduct(card.dataset.product);
      }

    });

  });


/* BACK BUTTON */

backButton.addEventListener("click", () => {

  productPage.classList.remove("active");
  cataloguePage.classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "instant"
  });

});


/* DM BUTTON */

const dmButton =
  document.getElementById("dm-button");

dmButton.addEventListener("click", event => {

  event.preventDefault();

  alert(
    "DM us for current availability."
  );

});