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
    displayProduct.src =URL.createObjectURL(dataUrl);
    localStorage.setItem("dataUrl", dataUrl)

  }
  reader.readAsDataURL(fileImg);
}
console.log(displayProduct.src)
let addProduct = JSON.parse(localStorage.getItem("addProduct")) || [];
let products = JSON.parse(localStorage.getItem("listProduct"));
function addProductRepo() {
  let nameAddProduct = document.getElementById("name-prd").value;
  let idAddProduct = document.getElementById("id-prd").value;
  let priceAddProduct = document.getElementById("price-prd").value;
  let quantityAddProduct = document.getElementById("prd-number").value;
  let imgProduct = document.getElementById("diplay-img__prd").src;
  let listProductAdd = {
    name : nameAddProduct,
    img: imgProduct,
    id: idAddProduct,
    price: priceAddProduct,
    quantity: quantityAddProduct,
  }
  let flagEditPrd = JSON.parse(localStorage.getItem("flagEditPrd")) ;
  if (!flagEditPrd == []) {
    addProduct.splice(flagEditPrd , 1, listProductAdd)
    localStorage.removeItem("flagEditPrd")
    renderlistProductInContainer();
    return;
  }
  if (addProduct.length == "") {
    addProduct.push(listProductAdd);
    localStorage.setItem("addProduct", JSON.stringify(addProduct));
  } else {
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
            <td><img src="${addProduct[i].image}" alt="" id="diplay-img__prd-table" class="diplay-img__prd-table"  ></td>
            <td>${addProduct[i].id}</td>
            <td>${addProduct[i].price}</td>
            <td>${addProduct[i].quantity}</td> 
            <td><button onclick="editProductInRepo(${i})" class="btn-edit button">Sửa</button></td> 
            <td> <button onclick="deleteProductInRepo(${i})" class="btn-delete button">Xóa</button></td> 
            <td> <button onclick="addProductMenu(${i})" class="btn-btn-edit button">Thêm</button></td>
          </tr>
    `;

  }
  document.getElementById("tableInProduct").innerHTML = renderProduct;
  document.getElementById("name-prd").value = "";
  document.getElementById("id-prd").value = '';
  document.getElementById("price-prd").value = '';
  document.getElementById("prd-number").value = '';

}
renderlistProductInContainer()
function deleteProductInRepo(poisisionPrdDele) {
  addProduct.splice(poisisionPrdDele, 1)
  localStorage.setItem("addProduct", JSON.stringify(addProduct));
  renderlistProductInContainer()
}
// edit sản phẩm
function editProductInRepo(poisisionPrdedit) {
  document.getElementById("name-prd").value = addProduct[poisisionPrdedit].nameAddProduct;
  document.getElementById("id-prd").value = addProduct[poisisionPrdedit].idAddProduct;
  document.getElementById("price-prd").value = addProduct[poisisionPrdedit].priceAddProduct;
  document.getElementById("prd-number").value = addProduct[poisisionPrdedit].quantityAddProduct;
  localStorage.setItem("flagEditPrd",poisisionPrdedit)
}


