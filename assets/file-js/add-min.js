



let addProduct = JSON.parse(localStorage.getItem("addProduct")) || [];
function addProductRepo() {
  let nameAddProduct = document.getElementById("name-prd").value;
  let idAddProduct = document.getElementById("id-prd").value;
  let priceAddProduct = document.getElementById("price-prd").value;
  let quantityAddProduct = document.getElementById("prd-number").value;
  let imgProduct = document.getElementById("diplay-img__prd").value
  let listProductAdd = {
    nameAddProduct,
    imgProduct,
    idAddProduct,
    priceAddProduct,
    quantityAddProduct,

  }
  if (addProduct.length == "") {
    console.log("có data")
    addProduct.push(listProductAdd);
    localStorage.setItem("addProduct", JSON.stringify(addProduct));
  } else {
    addProduct.push(listProductAdd);
    localStorage.setItem("addProduct", JSON.stringify(addProduct));
  }
  renderlistProductInContainer();
}
  //lấy  id thẻ img 
  const displayProduct = document.getElementById("diplay-img__prd");
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
      displayProduct.src =dataUrl;
      localStorage.setItem("inputImg",dataUrl)
    }
    reader.readAsDataURL(fileImg);
  }
  const inputImgRepo = document.getElementById ("")
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
            <td>${addProduct[i].nameAddProduct}</td>
            <td><img src="${i}" alt="" id="diplay-img__prd-table" multiple ></td>
            <td>${addProduct[i].idAddProduct}</td>
            <td>${addProduct[i].priceAddProduct}</td>
            <td>${addProduct[i].quantityAddProduct}</td> 
            <td><button onclick="editProductInRepo(${i})" class="btn-edit"></button></td> 
            <td> <button onclick="deleteProductInRepo(${i})" class="btn-delete"></button></td> 
            <td> <button onclick="addProductMenu(${i})" class="btn-addMenu"></button></td>
          </tr>
    `;

  }
  document.getElementById("tableInProduct").innerHTML = renderProduct;
}
renderlistProductInContainer()

function deleteProductInRepo(poisisionPrDele) {
  addProduct.splice(poisisionPrDele, 1)
  localStorage.setItem("addProduct", JSON.stringify(addProduct));
  renderlistProductInContainer()
}
