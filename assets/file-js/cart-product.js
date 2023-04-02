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
//khai báomony
const VND = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});
//___________render-giỏ hàng____________
let listToCart = JSON.parse(localStorage.getItem("listToCart")) || [];
function renderCartInWeb() {
  let listToCarts = JSON.parse(localStorage.getItem("listToCart")) || [];
  let renderCart = ``;
  let totalProduct = 0;
  for (let i = 0; i < listToCarts.length; i++) {
    let sumProduct = listToCart[i].cout * listToCarts[i].price;
    totalProduct += sumProduct 
    renderCart += `
    <div class="conainer-product">
      <div class="product-bag">
        <img src="${listToCarts[i].image}" alt="" class="img-bag" />
        <div>
          <h3 class="name-product">${listToCarts[i].name}</h3>
          <p class="price-product">${VND.format(listToCarts[i].price)}</p>
          <h4 class="totalPrd" id="totalPrd">${VND.format(listToCarts[i].price)}</h4>
        </div>
      </div>
      <div class="bag-button-wp">
        <button class="bag-button" onclick="buttonMinus(${i})">-</button>
        <span class="product-number" id="quantity"
          >${listToCart[i].cout}</span
        >
        <button class="bag-button" onclick="buttonPlus(${i})">+</button>
      </div>
      <div class="bag-right">
        <span class="total" id="totalMoney"></span>
        <button class="delete" id="delete" onclick="erase(${i})">xóa</button>
        </div>
    </div>
        `

  }
  document.getElementById("container-product").innerHTML = renderCart;
  document.getElementById("totalPrdBill").innerHTML = `Tổng tiền là: ${VND.format(totalProduct)}`;

}
renderCartInWeb();
//xóa sản phẩm
function erase(poisionProduct) {
  listToCart.splice(poisionProduct, 1);
  localStorage.setItem("listToCart", JSON.stringify(listToCart));
  renderCartInWeb();
}
//cộng product
function buttonPlus(poisionPlusProduct) {
  listToCart[poisionPlusProduct].cout++;
  localStorage.setItem("listToCart", JSON.stringify(listToCart));
  renderCartInWeb();
}

//giảm sản phẩm
function buttonMinus(poisionMinusProduct) {
  if (listToCart[poisionMinusProduct].cout == 1) {
    let confirmProduct = confirm("bạn muốn xóa");
    if (confirmProduct) {
      listToCart.splice(poisionMinusProduct, 1)
      localStorage.setItem("listToCart", JSON.stringify(listToCart))
      return;
    }
  } else {
    listToCart[poisionMinusProduct].cout--;
    localStorage.setItem("listToCart", JSON.stringify(listToCart))
  }
  renderCartInWeb();
}


