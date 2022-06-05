const ArrivalData = [
  {
    products: [
      {
        category: "ecommerce",
        productName: "Samsung Galaxy S10",

        productPrice: 2000,
        productDescription:
          "Amazon Gift Card is a global fashion destination for 20-somethings, selling all the freshest styles complemented by exclusive content....",
      },
      {
        category: "ecommerce",
        productName: "Samsung Galaxy S10",

        productPrice: 2000,
        productDescription:
          "Amazon Gift Card is a global fashion destination for 20-somethings, selling all the freshest styles complemented by exclusive content....",
      },
      {
        category: "ecommerce",
        productName: "Samsung Galaxy S10",

        productPrice: 2000,
        productDescription:
          "Amazon Gift Card is a global fashion destination for 20-somethings, selling all the freshest styles complemented by exclusive content....",
      },
      {
        category: "ecommerce",
        productName: "Samsung Galaxy S10",

        productPrice: 2000,
        productDescription:
          "Amazon Gift Card is a global fashion destination for 20-somethings, selling all the freshest styles complemented by exclusive content....",
      },
    ],
  },
  {
    products: [
      {
        category: "ecommerce",
        productName: "Samsung Galaxy S10",

        productPrice: 2000,
        productDescription:
          "Amazon Gift Card is a global fashion destination for 20-somethings, selling all the freshest styles complemented by exclusive content....",
      },
      {
        category: "ecommerce",
        productName: "Samsung Galaxy S10",

        productPrice: 2000,
        productDescription:
          "Amazon Gift Card is a global fashion destination for 20-somethings, selling all the freshest styles complemented by exclusive content....",
      },
      {
        category: "ecommerce",
        productName: "Samsung Galaxy S10",

        productPrice: 2000,
        productDescription:
          "Amazon Gift Card is a global fashion destination for 20-somethings, selling all the freshest styles complemented by exclusive content....",
      },
      {
        category: "ecommerce",
        productName: "Samsung Galaxy S10",

        productPrice: 2000,
        productDescription:
          "Amazon Gift Card is a global fashion destination for 20-somethings, selling all the freshest styles complemented by exclusive content....",
      },
    ],
  },
  {
    products: [
      {
        category: "ecommerce",
        productName: "Samsung Galaxy S10",

        productPrice: 2000,
        productDescription:
          "Amazon Gift Card is a global fashion destination for 20-somethings, selling all the freshest styles complemented by exclusive content....",
      },
      {
        category: "ecommerce",
        productName: "Samsung Galaxy S10",

        productPrice: 2000,
        productDescription:
          "Amazon Gift Card is a global fashion destination for 20-somethings, selling all the freshest styles complemented by exclusive content....",
      },
      {
        category: "ecommerce",
        productName: "Samsung Galaxy S10",

        productPrice: 2000,
        productDescription:
          "Amazon Gift Card is a global fashion destination for 20-somethings, selling all the freshest styles complemented by exclusive content....",
      },
      {
        category: "ecommerce",
        productName: "Samsung Galaxy S10",

        productPrice: 2000,
        productDescription:
          "Amazon Gift Card is a global fashion destination for 20-somethings, selling all the freshest styles complemented by exclusive content....",
      },
    ],
  },
];

function renameKey(obj, old_key, new_key) {
  // check if old key = new key
  if (old_key !== new_key) {
    Object.defineProperty(
      obj,
      new_key, // modify old key
      // fetch description from object
      Object.getOwnPropertyDescriptor(obj, old_key)
    );
    delete obj[old_key]; // delete old key
  }
}

function getTwoProductEach(ArrivalData) {
  let cart = {};
  for (let i = 0; i < ArrivalData.length; i++) {
    for (let j = 0; j < ArrivalData[i].products.length; j++) {
      if (j < 2) {
        if (cart[i] === undefined) {
          cart[i] = [];
        }
        cart[i].push(ArrivalData[i].products[j]);
      }
    }
  }

  return cart;
}

const yesNow = getTwoProductEach(ArrivalData);
console.log(Object.values(yesNow));

// var capitals = [
//   {
//     // creating an object 'capital' with
//     Burma: "Naypyitaw", // key "Burma" and value "Naypitaw"
//   },
// ];
// console.log(capitals);

// function rename() {
//   // function to rename on button click
//   capitals = capitals.map(function (obj) {
//     obj["Myanmar"] = obj["Burma"]; // Assign new key
//     delete obj["Burma"]; // Delete old key
//     return obj;
//   });
//   console.log(capitals);
// }
