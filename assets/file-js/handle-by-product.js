// import { listProductDefind } from './constant.js';
// console.log(listProductDefind);
// let products = JSON.parse(localStorage.getItem("listProduct")) || [];
// if (listProductDefind.length > 0 && products.length == 0) {
//   localStorage.setItem("listProduct", JSON.stringify(listProductDefind))
// }



let products = JSON.parse(localStorage.getItem("listProduct")) ? JSON.parse(localStorage.getItem("listProduct")) : [];
 
function render() {
  for (let i = 0; i < products.length; i++) {
    let renderPro = `
    <div class="card shadow p-3 mb-5 bg-body-tertiary rounded" style="width: 15rem;" >
      <img src="${products[i].image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${products[i].name}</h5>
        <p class="card-text">${i}</p>
        <p class="card-text">${products[i].price}</p>
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
let nameFormUser  = localStorage.getItem("nameFormUser") ||[];
 if( flagUser ==  1){
   document.getElementById("userDisplay").innerHTML = nameFormUser;
 }
//  render giỏ hành
let listToCart = JSON.parse(localStorage.getItem("listToCart")) || [];
// ham xu ly mua san pham truyen tham so id san pham
function handleBuyPoduct(productId) {
  if (dataFormUser == null) {
    alert("chưa đăng nhập");
    return;
  }
 
  const productFindById = products.find((production) => production.id == productId);
  if (!productFindById) {
    alert('Sản phẩm cần mua không nằm trong danh mục sản phâm được bán!')
    return;
  }
  
  let checkProductionInCart = this.checkProductionInCart(productFindById.id, listToCart);
  if (checkProductionInCart) {
    console.log(listToCart)
    alert(`sản phẩm ${productFindById.name} đã có trong giỏ hàng`)
    return
  }
  pushProductionInCart(productFindById);
}
// đẩy sản phẩm vào giỏ hàng

let coutProduct = 0;
function pushProductionInCart(productFindById) {
  listToCart.push(productFindById);
  coutProduct ++;
  localStorage.setItem("listToCart", JSON.stringify(listToCart));
  document.getElementById("quantity").innerHTML = coutProduct;
}
function checkProductionInCart(productId, listToCart) {
  // function some build in trả về true hoặc false trả về true nếu đk trong call back là đúng
  let check = listToCart.some((productInCart) => productInCart.id == productId);
  return check;
}
//-----------------hiển thị phần tài khoản----------------
let coutDiplayAccout = 0;
function diplayAccout() {
  coutDiplayAccout ++
  if (coutDiplayAccout == 1) {
    document.getElementById("diplayAccout").style.display = "block"
  } else if(coutDiplayAccout == 2){
    document.getElementById("diplayAccout").style.display = "none"
    coutDiplayAccout = 0;
  }
}
