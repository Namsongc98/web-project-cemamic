// import { listProductDefind } from './constant.js';
// console.log(listProductDefind);
// let products = JSON.parse(localStorage.getItem("listProduct")) || [];
// if (listProductDefind.length > 0 && products.length == 0) {
//   localStorage.setItem("listProduct", JSON.stringify(listProductDefind))
// }

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
        <p class="card-text">${i}</p>
        <p class="card-text">${VND.format(products[i].price)}</p>
        <button class="btn btn-primary" onclick="handleBuyPoduct(${products[i].id})">BUY</button>
      </div>
    </div>`
    document.getElementById("wpProduct").innerHTML += renderPro;
  }
}
render()
// tên người đăng nhập
let flagUser = JSON.parse(localStorage.getItem("flagUser")) || [];
let dataFormUser = JSON.parse(localStorage.getItem("dataFormUser")) || [];

if (flagUser == 1) {
  let userWin = dataFormUser[0].name
  document.getElementById("userDisplay").innerHTML = ` hello! ${userWin}`;
}
//  render giỏ hành
let listToCart = JSON.parse(localStorage.getItem("listToCart")) || [];
// ham xu ly mua san pham truyen tham so id san pham
let productFindById;
function handleBuyPoduct(productId) {
  if (dataFormUser == null) {
    alert("chưa đăng nhập");
    return;
  }
  productFindById = products.find((production) => production.id == productId);

  if (!productFindById) {
    alert('Sản phẩm cần mua không nằm trong danh mục sản phâm được bán!')
    return;
  }
  let checkProductionInCart = this.checkProductionInCart(productFindById.id, listToCart);
  if (checkProductionInCart) {
    myFunction()
    return
  }
 
  pushProductionInCart(productFindById);
}
// đẩy sản phẩm vào giỏ hàng
function pushProductionInCart(productFindById) {
  ++productFindById.cout;
  listToCart.push(productFindById);
  localStorage.setItem("listToCart", JSON.stringify(listToCart));
  document.getElementById("quantity").innerHTML = productFindById.cout;
}
function checkProductionInCart(productId, listToCart) {
  // function some build in trả về true hoặc false trả về true nếu đk trong call back là đúng
  let check = listToCart.some((productInCart) => productInCart.id == productFindById.id);
  return check;
}
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

// snackbar
function myFunction() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
