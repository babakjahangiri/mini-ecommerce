import allProducts from "./../data/products.json";

export const initCart = () => {
  if (window.sessionStorage.getItem("Cart") === null) {
    let cartObject = {
      name: "", //customer name
      total: 0,
      products: [],
    };
    setCart(cartObject);
  }
};

//it could work with localStorage as well if change sessionStorage to localStorage
// ---------------------------------------------//
//return the cart as an object
export const getCart = () => {
  let cartObject = JSON.parse(window.sessionStorage.getItem("Cart"));
  if (cartObject === null) {
    initCart();
  }
  return JSON.parse(window.sessionStorage.getItem("Cart"));
};

//set object to the cart
const setCart = (cartObject) => {
  window.sessionStorage.setItem("Cart", JSON.stringify(cartObject));
};

// ---------------------------------------------------//
export const getItemsCount = () => {
  let cartObject = getCart();
  var totalItems = 0;
  if (cartObject.products !== null) {
    for (var i in cartObject.products) {
      totalItems += Number(cartObject.products[i].qty);
    }
  }
  return totalItems;
};

const initProduct = (productId) => {
  let productItem = {
    id: productId,
    qty: 1,
  };
  let cartObject = getCart();
  cartObject.products.push(productItem);
  setCart(cartObject);
};

export const addToCart = (productId) => {
  let cartObject = getCart();

  //Check the Product array in the object is empty or not
  //if (cartObject.products.length > 0) {
  let productItem = cartObject.products.find((item) => item.id === productId);

  //check if product id not found then add a product with qty:1 (initProduct)
  if (productItem !== undefined) {
    let newProducts = cartObject.products.map((item) =>
      item.id === productId ? { ...item, qty: Number(item.qty) + 1 } : item
    );
    cartObject.products = newProducts;
    setCart(cartObject);
  } else {
    initProduct(productId);
  }
  // }
};
export const getCartProducts = () => {
  let cartObject = getCart();
  return cartObject.products;
};

export const deleteCartItem = (productId) => {
  let cartObject = getCart();
  let newProducts = [];

  for (var i = 0; i < cartObject.products.length; i++) {
    if (cartObject.products[i].id !== productId) {
      newProducts.push(cartObject.products[i]);
    }
  }

  delete cartObject.products;
  cartObject.products = newProducts;
  setCart(cartObject);

  return cartObject.products; //return manipulated cart object after delete
};

export const updateCartItem = (productId, qty) => {
  let cartObject = getCart();
  let newProducts = [];

  for (var i = 0; i < cartObject.products.length; i++) {
    if (cartObject.products[i].id === productId) {
      cartObject.products[i].qty = qty;
    }
    newProducts.push(cartObject.products[i]);
  }

  delete cartObject.products;
  cartObject.products = newProducts;
  setCart(cartObject);

  return cartObject.products; //return edited products in the cart
};

export const getCartTotal = () => {
  let cartObject = getCart();
  if (cartObject.products !== null) {
    let totalPrice = 0;

    for (let i = 0; i < cartObject.products.length; i++) {
      totalPrice =
        getStockPrice(cartObject.products[i].id) *
          Number(cartObject.products[i].qty) +
        totalPrice;
    }
    return Number(totalPrice);
  }
};

///------Stock functions ------

export const getStockPrice = (productId) => {
  let p = allProducts.find((item) => item.id === productId);
  return Number(p.price);
};

export const getProductStock = (productId) => {
  return allProducts.find((item) => item.id === productId);
};

///----- Extra functions -----------
export const removeUserCart = () => {
  window.sessionStorage.removeItem("Cart");
};

export function CheckBrowser() {
  if ("sessionStorage" in window && window["sessionStorage"] !== null) {
    // We can use localStorage object to store data.
    return true;
  } else {
    return false;
    //message to user that we can not store the data
  }
}
