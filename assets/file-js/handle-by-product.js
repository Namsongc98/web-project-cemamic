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
let dataForm = JSON.parse(localStorage.getItem("dataForm"));
let listToCart = JSON.parse(localStorage.getItem("listToCart")) || [];

// ham xu ly mua san pham truyen tham so id san pham
function handleBuyPoduct(productId) {
  if (dataForm == null) {
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
    alert(`sản phẩm ${productFindById.name} đã có trong giỏ hàng`)
    return
  }
  pushProductionInCart(productFindById);
}
// đẩy sản phẩm vào giỏ hàng
function pushProductionInCart(productFindById) {
  listToCart.push(productFindById);
  localStorage.setItem("listToCart", JSON.stringify(listToCart));
}
function checkProductionInCart(productId, listToCart) {
  // function some build in trả về true hoặc false trả về true nếu đk trong call back là đúng
  let check = listToCart.some((productInCart) => productInCart.id == productId);
  return check;
}