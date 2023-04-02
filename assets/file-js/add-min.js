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



//lấy  id thẻ img 
let displayProduct = document.getElementById("diplay-img__prd");
//lấy id thẻ thẻ input
//sự kiện chỉ đến phần tử gôc (file)
const inputImg = document.getElementById("image-display");
//lăng nghe sự kiện onchance từ input
inputImg.onchange = function (event) {
  const fileImg = event.target.files[0];
  // chuyển tai liệu thành dữ liệu uRL
  const reader = new FileReader();
  reader.onload = function (event) {
    const dataUrl = event.target.result;
    // thiết lập nguồn url ảnh lên đối tượng 
    displayProduct.src = dataUrl;

  }
  reader.readAsDataURL(fileImg);
}

function createID() {
  Math.floor(Math.random() * 100000);
  document.getElementById("id-prd").value = `${Math.floor(Math.random() * 100000)} `;
};
let imgProduct;
// let products = JSON.parse(localStorage.getItem("listProduct"));
let products = JSON.parse(localStorage.getItem("listProduct"));
let addProduct = JSON.parse(localStorage.getItem("addProduct")) || [];
function addProductRepo() {
  let nameAddProduct = document.getElementById("name-prd").value;
  let idAddProduct = document.getElementById("id-prd").value;
  let priceAddProduct = document.getElementById("price-prd").value;
  let quantityAddProduct = document.getElementById("prd-number").value;
  imgProduct = document.getElementById("diplay-img__prd").src = `${displayProduct.src} `;
  console.log(imgProduct)
  let listProductAdd = {
    name: nameAddProduct,
    image: imgProduct,
    id: idAddProduct,
    price: priceAddProduct,
    quantity: quantityAddProduct,
    cout: 1,
  }
  let flagEditPrd = JSON.parse(localStorage.getItem("flagEditPrd"));
  if (!flagEditPrd == []) {
    addProduct.splice(flagEditPrd, 1, listProductAdd)
    localStorage.removeItem("flagEditPrd")
    localStorage.setItem("addProduct", JSON.stringify(addProduct));
    renderlistProductInContainer();
    return;
  }
  if (addProduct.length == "") {
    addProduct.push(listProductAdd);
    localStorage.setItem("addProduct", JSON.stringify(addProduct));
  } else {
    console.log(listProductAdd)
    addProduct.push(listProductAdd);
    localStorage.setItem("addProduct", JSON.stringify(addProduct));
  }
  renderlistProductInContainer();
}

function renderlistProductInContainer() {
  let renderProduct = `
          <tr>
            <th>Stt</th>
            <th>sản phẩm</th>
            <th>hình ảnh sản phẩm</th>
            <th>Mã sản phẩm</th>
            <th>Giá sản phẩm</th>
            <th>Số lượng</th> 
            <th>Sửa</th> 
            <th>Xóa</th> 
            <th>Thêm</th>
          </tr>`;
  for (let i = 0; i < addProduct.length; i++) {
    renderProduct += `
          <tr>
            <td>${i}</td>
            <td>${addProduct[i].name}</td>
            <td><img src="${addProduct[i].image}" alt="" id="diplay-img__prd-table" class="diplay-img__prd-table"  >
            </td>
            <td>${addProduct[i].id}</td>
            <td>${addProduct[i].price}
            </td>
            <td>${addProduct[i].quantity}</td> 
            <td> <button onclick="editProductInRepo(${i})" class="btn-delete button">Sửa</button></td> 
            <td> <button onclick="deleteProductInRepo(${i})" class="btn-delete button">Xóa</button></td> 
            <td> <button onclick="addProductMenu(${i})" class="btn-btn-edit button">Thêm</button></td>
          </tr>
    `;
  }
  document.getElementById("tableInProduct").innerHTML = renderProduct;

  cleanPrd()

}
function cleanPrd() {
  document.getElementById("name-prd").value = "";
  document.getElementById("id-prd").value = '';
  document.getElementById("price-prd").value = '';
  document.getElementById("prd-number").value = '';
  document.getElementById("diplay-img__prd").src = "";
}

renderlistProductInContainer()

//xóa sản phẩm
function deleteProductInRepo(poisisionPrdDele) {
  console.log("vet")
  addProduct.splice(poisisionPrdDele, 1)
  localStorage.setItem("addProduct", JSON.stringify(addProduct));
  renderlistProductInContainer()
}
// edit sản phẩm
function editProductInRepo(poisisionPrdedit) {
  console.log(addProduct[poisisionPrdedit].nameAddProduct)
  document.getElementById("name-prd").value = addProduct[poisisionPrdedit].name;
  document.getElementById("id-prd").value = addProduct[poisisionPrdedit].id;
  document.getElementById("price-prd").value = addProduct[poisisionPrdedit].price;
  document.getElementById("prd-number").value = addProduct[poisisionPrdedit].quantity;
  localStorage.setItem("flagEditPrd", poisisionPrdedit)
}
// _____________________thêm sản phẩm _______________
products = JSON.parse(localStorage.getItem("listProduct")) || [];
addProduct = JSON.parse(localStorage.getItem("addProduct")) || [];
console.log(addProduct)
function addProductMenu(poisisionPrdMore) {
  console.log(addProduct[poisisionPrdMore].id)
  products.push(addProduct[poisisionPrdMore]);
  localStorage.setItem("products", JSON.stringify(products));
};