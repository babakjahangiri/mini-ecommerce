const ProductsInCart = [];

const initCart = () => {
  if (window.sessionStorage.getItem("Cart") === null) {
    let cartObject = {
      name: "babak'card", //customer name
      products: [],
      total: 0,
    };

    window.sessionStorage.setItem("Cart", JSON.stringify(cartObject));
  }
};

export const userCart = (CartData) => {};

export const addToCart = (ProductId) => {
  initCart();

  var cartObject = JSON.parse(window.sessionStorage.getItem("Cart"));

  console.log(cartObject);

  //   let productItem = new Object();
  //   productItem.id = ProductId;
  //   productItem.qty = 1;
  //   ProductsInCart.push(productItem);

  //   window.localStorage.setItem("Cart", ProductsInCart);
};

export const UpdateCart = (CartData) => {
  let oldCart = JSON.parse(sessionStorage.getItem("Cart"));
};

export const getUserCart = () => {
  window.sessionStorage.getItem("Cart");
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

const makeCart = () => {
  let cartObject = new Object();
  cartObject.name = ""; //customer name
  cartObject.products = [];
  cartObject.total = 0;
};

const AddToCartObject = () => {};
