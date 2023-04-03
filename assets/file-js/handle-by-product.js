// import { listProductDefind } from './constant.js';
// console.log(listProductDefind);
// let products = JSON.parse(localStorage.getItem("listProduct")) || [];
// if (listProductDefind.length > 0 && products.length == 0) {
//   localStorage.setItem("listProduct", JSON.stringify(listProductDefind))
// }

//-----------------hiển thị phần tài khoản----------------

let coutDiplayAccout = 0;
function diplayAccout() {
  coutDiplayAccout++
  if (coutDiplayAccout == 1) {
    document.getElementById("diplayAccout").style.display = "block"
  } else if (coutDiplayAccout == 2) {
    document.getElementById("diplayAccout").style.display = "none"
    coutDiplayAccout = 0;
  }
}
//hàm nhận tiền vnd
const VND = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});
//render sản phẩm
let products = JSON.parse(localStorage.getItem("products"))
function render() {
  for (let i = 0; i < products.length; i++) {
    let renderPro = `
    <div class="card shadow p-3 mb-5 bg-body-tertiary rounded" style="width: 15rem;" >
      <img src="${products[i].image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${products[i].name}</h5>
        <p class="card-text">${products[i].id}</p>
        <p class="card-text">${VND.format(products[i].price)}</p>
        <button class="btn btn-primary" onclick="handleBuyPoduct(${products[i].id})">BUY</button>
      </div>
    </div>`
    document.getElementById("wpProduct").innerHTML += renderPro;
  }
}
render()
// tên người đăng nhập
let isLognIn = JSON.parse(localStorage.getItem("isLognIn"));

let dataFormUser = JSON.parse(localStorage.getItem("dataFormUser")) || [];
//  render giỏ hành
let listToCart = JSON.parse(localStorage.getItem("listToCart")) || [];
// ham xu ly mua san pham truyen tham so id san pham
let productFindById;
console.log(isLognIn)
function handleBuyPoduct(productId) {
  if (isLognIn == null) {
    console.log("vào")
    donAcout();
    return;
  }
  productFindById = products.find((production) => production.id == productId);
  if (!productFindById) {
    havelist()
    return;
  }
  let checkProductionInCart = this.checkProductionInCart(productFindById.id, listToCart);
  if (checkProductionInCart) {
    inCart()
    return
  }
  pushProductionInCart(productFindById);

}
// đẩy sản phẩm vào giỏ hàng
function pushProductionInCart(productFindById) {
  listToCart.push(productFindById);
  localStorage.setItem("listToCart", JSON.stringify(listToCart));
  
  plusCout();
};
function plusCout() {
  JSON.parse(localStorage.getItem("listToCart"));
  let coutCart = listToCart.length;
  localStorage.setItem("coutCart",JSON.stringify(coutCart));
  document.getElementById("quantity").innerHTML = coutCart;
}
function checkProductionInCart(productId, listToCart) {
  // function some build in trả về true hoặc false trả về true nếu đk trong call back là đúng
  let check = listToCart.some((productInCart) => productInCart.id == productFindById.id);
  return check;
}

if (isLognIn == true) {
  for (let i = 0; i < dataFormUser.length; i++) {
    document.getElementById("userDisplay").innerHTML = ` hello! ${dataFormUser[i].lastname}`;
  }
}
function inCart() {
  var x = document.getElementById("inCart");
  x.className = "show";
  setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}
function havelist() {
  var x = document.getElementById("havelist");
  x.className = "show";
  setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}
function donAcout() {
  var x = document.getElementById("donAcout");
  x.className = "show";
  setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}
let coutNav = 0;
function reponsiteNav() {
  coutNav++;
  if (coutNav == 1) {
    document.getElementById("nav__reponsite").style.display = "block"
  } else if (coutNav == 2) {
    document.getElementById("nav__reponsite").style.display = "none"
    coutNav = 0;
  }
}