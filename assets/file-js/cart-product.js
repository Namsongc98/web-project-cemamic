let listToCart = JSON.parse(localStorage.getItem("listToCart")) || [];
console.log(listToCart)
let renderCart = ``;


function renderCartInWeb() {
  for (let i = 0; i < listToCart.length; i++) {
    renderCart += `
        <div class="conainer-product" >
            <div class="product-bag">
              <img
                src="${listToCart[i].image}"
                alt=""
                class="img-bag"
              />
              <div>
                <h3 class="name-product">${listToCart[i].name}</h3>
                <p class="spice-product">tiên</p>
              </div>
            </div>
            <div class="bag-button-wp">
              <button class="bag-button" onclick="buttonMinus()">-</button>
              <span class="product-number" id="quantity"></span>
              <button class="bag-button" onclick="buttonPlus()">+</button>
            </div>
            <div class="bag-right">
              <span class="total" id="totalMoney"></span>
              <button class="delete" id="delete" onclick="erase(${i})">xóa</button>
            </div>
        </div>
        `
    document.getElementById("container-product").innerHTML = renderCart;
  }
}
renderCartInWeb() 
//xóa sản phẩm
function erase(poisionProduct) {
  listToCart.splice(poisionProduct, 1)
  localStorage.setItem("listToCart",JSON.stringify(listToCart))
}
//cộng product
let quantity = 1;
function buttonPlus(){
  quantity += 1;
  console.log(quantity)
  document.getElementById('quantity').innerHTML = quantity;
}



