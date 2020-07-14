import allProducts from "./../data/products.json";

export const initCart = () => {
  if (window.sessionStorage.getItem("Cart") === null) {
    let cartObject = {
      name: "", //customer name
      products: [],
      total: 0,
    };
    setCart(cartObject);
  }
};

//it could work with localStorage as well
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
      totalItems += cartObject.products[i].qty;
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
      item.id === productId ? { ...item, qty: item.qty + 1 } : item
    );
    cartObject.products = newProducts;
    setCart(cartObject);
  } else {
    initProduct(productId);
  }
  // }
};

export const getProductFromStock = (productId) => {
  return allProducts.find((item) => item.id === productId);
};

export const UpdateCart = (CartData) => {
  //let oldCart = JSON.parse(sessionStorage.getItem("Cart"));
};

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
