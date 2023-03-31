let listToCart = JSON.parse(localStorage.getItem("listToCart")) || [];
function renderCartInWeb() {
  let listToCarts = JSON.parse(localStorage.getItem("listToCart")) || [];
  let renderCart = ``;
  for (let i = 0; i < listToCarts.length; i++) {
    renderCart += `
    <div class="conainer-product">
      <div class="toast-wp" id="showDelete">
        <div class="toast-body">
          Bạn có muốn xóa sản phẩm 
          <div class="wp-button">
            <button class="btn-agree" onclick="ageer(${i})">Exit</button>
            <button class="btn-disagree" onclick=" erase(${i})">Xóa</button>
          </div>
        </div>
      </div>
      
      <div class="product-bag">
        <img src="${listToCarts[i].image}" alt="" class="img-bag" />
        <div>
          <h3 class="name-product">${listToCarts[i].name}</h3>
          <p class="price-product">${listToCarts[i].price}</p>
        </div>
      </div>
      <div class="bag-button-wp">
        <button class="bag-button" onclick="buttonMinus(${i}, ${listToCarts[i].id})">-</button>
        <span class="product-number" id="quantity"
          >${listToCart[i].quantity}</span
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
  listToCart[poisionPlusProduct].quantity++;
  localStorage.setItem("listToCart", JSON.stringify(listToCart));
  renderCartInWeb();
}
function buttonMinus(poisionMinusProduct) {
  if(listToCart[poisionMinusProduct].quantity > 0){
    listToCart[poisionMinusProduct].quantity--;
    localStorage.setItem("listToCart", JSON.stringify(listToCart));
    renderCartInWeb();
  }else if(listToCart[poisionMinusProduct].quantity == 0){
      showDeleteMessage(poisionMinusProduct);
  }
}
function showDeleteMessage(poisionMinusProduct) {
  document.getElementById("showDelete").style.display = "block";
  console.log("vi tri la", poisionMinusProduct)
}


