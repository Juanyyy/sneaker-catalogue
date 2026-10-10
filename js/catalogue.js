let selectedProduct = "";
let selectedColour = "";
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
    "air-force-sole-blue": {
    name: "Nike Air Force 1 Sole Blue",
    size: "UK 4–10",
    colours: [
        {
            name: "White/Blue",
            image: "images/air-force-sole-blue.jpg"
        }
    ]
},
"air-force-first-use": {
    name: "Nike Air Force 1 First Use",
    size: "UK 4–10",
    colours: [
        {
            name: "White/Grey",
            image: "images/air-force-first-use.jpg"
        }
    ]
},
"air-max-dia": {
    name: "Nike Air Max Dia",
    size: "UK 4–10",
    colours: [
        {
            name: "White",
            image: "images/air-max-dia-white.jpg"
        },
        {
            name: "Black",
            image: "images/air-max-dia-black.jpg"
        }
    ]
},
"ispa-air-max-720": {
    name: "Nike ISPA Air Max 720",
    size: "UK 4–10",
    colours: [
        {
            name: "White/Black/Grey/Blue",
            image: "images/ispa-air-max-720-white-black-grey-blue.jpg"
        }
    ]
},
"nike-sb-dunk": {
    name: "Nike SB Dunk",
    size: "UK 4–10",
    colours: [
        {
            name: "Red",
            image: "images/nike-sb-dunk-red.jpg"
        },
        {
            name: "Black",
            image: "images/nike-sb-dunk-black.jpg"
        },
        {
            name: "Orange",
            image: "images/nike-sb-dunk-orange.jpg"
        },
        {
            name: "Light Blue",
            image: "images/nike-sb-dunk-light-blue.jpg"
        }
    ]
},
"nike-air-max-97": {
    name: "Nike Air Max 97",
    size: "UK 4–10",
    colours: [
        {
            name: "Silver",
            image: "images/nike-air-max-97-silver.jpg"
        },
        {
            name: "Black",
            image: "images/nike-air-max-97-black.jpg"
        },
        {
            name: "White",
            image: "images/nike-air-max-97-white.jpg"
        }
    ]
},
"nike-air-force-1-utility": {
    name: "Nike Air Force 1 Utility",
    size: "UK 4–10",
    colours: [
        {
            name: "White/Black",
            image: "images/nike-air-force-1-utility-white-black.jpg"
        }
    ]
},
"yeezy-boost-380-alien": {
    name: "Yeezy Boost 380 Alien",
    size: "UK 4–10",
    colours: [
        {
            name: "Grey/White/Light Green",
            image: "images/yeezy-boost-380-alien-grey-white-light-green.jpg"
        }
    ]
},
"anika-stitch-interest-knit-mini-dress": {
    name: "Anika Stitch Interest Knit Mini Dress",
    size: "UK/AU 4, 6, 8, 10, 12, 14, 16, 18",
    description: "Soft-blue knit mini dress with textured stitching, short sleeves and a fitted waist. A-line skirt and decorative gold-tone buttons.",
    colours: [
        {
            name: "Soft Blue",
            image: "images/anika-stitch-interest-knit-mini-dress-soft-blue.jpg"
        }
    ]
},
"clara-pleated-lace-trim-midi-dress": {
    name: "Clara Pleated Lace Trim Midi Dress",
    size: "UK/AU 4, 6, 8, 10, 12, 14, 16, 18, 20",
    description: "Spotted midi dress with a pleated A-line skirt, lace trims and sheer blouson sleeves. Belted elastic waist and lined body.",
    colours: [
        {
            name: "Dark Risley Spot",
            image: "images/clara-pleated-lace-trim-midi-dress-dark-risley-spot.jpg"
        }
    ]
},
"ivy-lace-corset-drape-maxi-dress": {
    name: "Ivy Lace Corset Drape Maxi Dress",
    size: "UK/AU 4, 6, 8, 10, 12, 14, 16",
    description: "Dark-chocolate maxi dress with a structured lace bodice, draped waist and a column skirt. Lined, with a concealed back zip.",
    colours: [
        {
            name: "Dark Chocolate",
            image: "images/ivy-lace-corset-drape-maxi-dress-dark-chocolate.jpg"
        }
    ]
},
"arielle-lace-midi-dress": {
    name: "Arielle Lace Midi Dress",
    size: "UK/AU 4, 6, 8, 10, 12, 14, 16",
    description: "Plum-brown floral-lace midi dress with a fitted bodice, flutter shoulders and a flowing pleated skirt. High neckline and rear keyhole fastening.",
    colours: [
        {
            name: "Plum Brown",
            image: "images/arielle-lace-midi-dress-plum-brown.jpg"
        }
    ]
},
"elaine-belted-fit-and-flare-midi-dress": {
    name: "Elaine Belted Fit-and-Flare Midi Dress",
    size: "6, 8, 10, 12, 14, 16, 18",
    description: "Apple-green sleeveless midi dress with a fit-and-flare shape and matching fabric waist belt. Viscose-blend stretch fabric.",
    colours: [
        {
            name: "Apple Green",
            image: "images/elaine-belted-fit-and-flare-midi-dress-apple-green.jpg"
        }
    ]
},
"ayla-linen-mini-skirt": {
    name: "Ayla Linen Mini Skirt",
    size: "UK/AU 4, 6, 8, 10, 12, 14, 16",
    description: "Lined linen mini skirt with an A-line shape and a concealed side zip.",
    notice: "IMPORTANT: Skirt only; styling pieces shown in the photograph are not included.",
    colours: [
        {
            name: "Porcelain",
            image: "images/ayla-linen-mini-skirt-porcelain.jpg"
        }
    ]
},

"autumn-polka-dot-midi-skirt": {
  name: "Autumn Polka-Dot Midi Skirt",
  size: "6, 8, 10, 12, 14, 16, 18",
  notice: "IMPORTANT: Skirt only; matching tops are separate.",
  colours: [
    {
      name: "White/Black",
      image: "images/autumn-polka-dot-midi-skirt-white-black.jpg"
    }
  ]
},

"althea-anglaise-midi-skirt": {
  name: "Althea Anglaise Midi Skirt",
  size: "6, 8, 10, 12, 14, 16, 18",
  notice: "IMPORTANT: Skirt only; top not included.",
  colours: [
    {
      name: "Red",
      image: "images/althea-anglaise-midi-skirt-red.jpg"
    }
  ]
},

"finley-printed-blouse": {
  name: "Finley Printed Blouse",
  size: "UK/AU 4, 6, 8, 10, 12, 14, 16",
  colours: [
    {
      name: "Saffia Ditsy",
      image: "images/finley-printed-blouse-saffia-ditsy.jpg"
    }
  ]
},

"rebecca-scallop-trim-tshirt": {
  name: "Rebecca Scallop Trim T-Shirt",
  size: "XXS, XS, S, M, L, XL",
  colours: [
    {
      name: "Cloud Blue/Porcelain",
      image: "images/rebecca-scallop-trim-tshirt-cloud-blue-porcelain.jpg"
    }
  ]
},

"alexis-short-sleeve-blouse": {
  name: "Alexis Short Sleeve Blouse",
  size: "UK/AU 4, 6, 8, 10, 12, 14, 16, 18",
  colours: [
    {
      name: "Porcelain",
      image: "images/alexis-short-sleeve-blouse-porcelain.jpg"
    }
  ]
},

"indie-tuck-blouse": {
  name: "Indie Tuck Blouse",
  size: "UK/AU 4, 6, 8, 10, 12, 14, 16, 18",
  colours: [
    {
      name: "Rosewater",
      image: "images/indie-tuck-blouse-rosewater.jpg"
    }
  ]
},

"kai-fitted-short-sleeve-top": {
  name: "Kai Fitted Short-Sleeve Top",
  size: "4, 6, 8, 10, 12, 14, 16",
  notice: "IMPORTANT: Top only.",
  colours: [
    {
      name: "Red",
      image: "images/kai-fitted-short-sleeve-top-red.jpg"
    }
  ]
},

"lola-bodysuit": {
  name: "Lola Bodysuit",
  size: "4, 6, 8, 10, 12, 14, 16",
  notice: "IMPORTANT: Bodysuit only.",
  colours: [
    {
      name: "White/Black",
      image: "images/lola-bodysuit-white-black.jpg"
    }
  ]
},

"becky-bowler-bag": {
  name: "Becky Bowler Bag",
  size: "One size",
  showDescription: true,
  description: "Structured faux-leather bowler bag with top handles, zip fastening and a detachable adjustable strap. Gold-tone hardware and an internal pouch. Approx. 26 × 16.5 × 10 cm (W × H × D).",
  colours: [
    {
      name: "Black Saffiano",
      image: "images/becky-bowler-bag-black-saffiano.jpg"
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
const productMeta = document.getElementById("product-meta");
const productDescription = document.getElementById("product-description");
const productNotice = document.getElementById("product-notice");
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
  selectedProduct = product.name;
selectedColour = product.colours[0].name;

  productName.textContent = product.name;
  productTopName.textContent = product.name;
productMeta.textContent = `${product.size} · DM for current availability`;

productDescription.textContent = product.showDescription ? (product.description || "") : "";


if (product.notice) {
    productNotice.textContent = product.notice;
    productNotice.hidden = false;
} else {
    productNotice.textContent = "";
    productNotice.hidden = true;
}
  colourOptions.innerHTML = "";

  product.colours.forEach((colour, index) => {

    const button = document.createElement("button");

    button.type = "button";
    button.className = "colour-option";
    button.dataset.colour = colour.name;

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
        

        selectedColour = button.dataset.colour;
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

});/* DM BUTTON */

const dmButton = document.getElementById("dm-button");

dmButton.addEventListener("click", event => {
  event.preventDefault();

  const phoneNumber = "27608791111";

 const message =
  `Hi! I'm interested in the ${selectedProduct} - ${selectedColour}. Could you please confirm availability?`;
  const whatsappURL =
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");
});


/* CATEGORY SWITCHING */

const categoryTabs = document.querySelectorAll(".category-tab");
const categorySections = document.querySelectorAll(".category-section");

categoryTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const selectedCategory = tab.dataset.category;

    categoryTabs.forEach(button => {
      button.classList.remove("active");
    });

    tab.classList.add("active");

    categorySections.forEach(section => {
      section.hidden =
        section.dataset.categorySection !== selectedCategory;
    });
  });
});