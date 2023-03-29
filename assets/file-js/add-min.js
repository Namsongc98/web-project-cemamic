let addProduct = JSON.parse(localStorage.getItem("addProduct"))
function AddProduct() {
  let namAddProduct = document.getElementById("name-prd");
  let idAddProduct = document.getElementById("id-prd");
  let priceAddProduct = document.getElementById("price-prd");
  let numberAddProduct = document.getElementById("prd-number");
  let listProductAdd = {
    namAddProduct,
    idAddProduct,
    priceAddProduct,
    numberAddProduct,
  }
  if(addProduct == null){
    addProduct = [];
    addProduct.push(listProductAdd)
    localStorage.setItem("addProduct", localStorage.setItem(addProduct))
  }else{
    addProduct.push(listProductAdd)
    localStorage.setItem("addProduct", localStorage.setItem(addProduct))
  }

}
function renderTable() {
  render = `
          <th>
            <td>Stt</td>
            <td>sản phẩm</td>
            <td>Mã sản phẩm</td>
            <td>Giá sản phẩm</td>
            <td>Số lượng</td> 
            <td>Sửa</td> 
            <td>Xóa</td> 
          </th>`;
  for (let i = 0; i < addProduct.length; i++) {
    render =
  }
} 

