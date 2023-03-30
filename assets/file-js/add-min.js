let addProduct = JSON.parse(localStorage.getItem("addProduct")) || []
function AddProduct() {
  let nameAddProduct = document.getElementById("name-prd").value;
  let idAddProduct = document.getElementById("id-prd").value;
  let priceAddProduct = document.getElementById("price-prd").value;
  let quantityAddProduct = document.getElementById("prd-number").value;
  let listProductAdd = {
    nameAddProduct,
    idAddProduct,
    priceAddProduct,
    quantityAddProduct,
  }
  if (!addProduct == null) {
    addProduct.push(listProductAdd)
    localStorage.setItem("addProduct", localStorage.setItem(addProduct))
  }
  console.log(listProductAdd)
  renderlistProductInContainer()
}
function renderlistProductInContainer() {
  let renderProduct = `
          <th>
            <td>Stt</td>
            <td>sản phẩm</td>
            <td>hình ảnh sản phẩm</td>
            <td>Mã sản phẩm</td>
            <td>Giá sản phẩm</td>
            <td>Số lượng</td> 
            <td>Sửa</td> 
            <td>Xóa</td> 
          </th>`;
  for (let i = 0; i < addProduct.length; i++) {
    renderProduct += `
          <th>
            <td>${i}</td>
            <td>${addProduct[i].nameAddProduct}</td>
            <td>${addProduct[i]}</td>
            <td>${addProduct[i].idAddProduct}</td>
            <td>${addProduct[i].priceAddProduct}</td>
            <td>${addProduct[i].quantityAddProduct}</td> 
            <td>Sửa</td> 
            <td>Xóa</td> 
          </th>
    `;
    document.getElementById("tableInContainer").innerHTML = render;
  }

}

