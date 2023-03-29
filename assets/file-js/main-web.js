
// let listProduct = [{
//     image: "/assets/img-web-gom/binh-hoa-rong.jpg",
//     name: "Bình hoa nghệ thuât hình rồng",
//     id: 0,
//     number: 0,
//     price: 500000,

// },
// {
//     image: "/assets/img-web-gom/binh-hoa.jpg",
//     name: "Bình hoa nghệ thuật",
//     id: 1,
//     number: 0,
//     price: 600000,

// }, {
//     image: "/assets/img-web-gom/da-coc.jpg",
//     name: "Cốc đá nghệ thuật",
//     id: 2,
//     number: 0,
//     price: 700000,

// }, {
//     image: "/assets/img-web-gom/da-nghe-thuat.jpg",
//     name: "Hoa đá nghệ thuật",
//     id: 3,
//     number: 0,
//     price: 800000,

// }, {
//     image: "/assets/img-web-gom/gai-gio.jpg",
//     name: "Cô gái cầm giỏ",
//     id: 4,
//     number: 0,
//     price: 900000,

// }, {
//     image: "/assets/img-web-gom/gai-mua.jpg",
//     name: "Cô gái múa ",
//     id: 5,
//     number: 0,
//     price: 1000000,

// }, {
//     image: "/assets/img-web-gom/tuong-da-hoa.jpg",
//     name: "Tượng đá bằng hoa",
//     id: 6,
//     number: 0,
//     price: 1200000,

// }, {
//     image: "/assets/img-web-gom/tuong-da-phat.jpg",
//     name: "Tượng phật bằng đá",
//     id: 7,
//     number: 0,
//     price: 1400000,

// }];
// localStorage.setItem("listProduct", JSON.stringify(listProduct))

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
        <button class="btn btn-primary" onclick="buy(${products[i].id})">BUY</button>
      </div>
    </div>`
        document.getElementById("wpProduct").innerHTML += renderPro;
    }
}
render()
let dataForm = JSON.parse(localStorage.getItem("dataForm"));
;
let flag = JSON.parse(localStorage.getItem("flag"));
let listToCart = JSON.parse(localStorage.getItem("listProductCart"));
function buy(index) {

    if (dataForm == null) {
        alert("chua đang nhâpk");
        return;
    }
    if (listToCart == null) {
        listToCart = [];
        for (let i = 0; i < products.length; i++) {
            if (products[i].id == index) {
                listToCart.push(products[i]);
                localStorage.setItem("listToCart", JSON.stringify(listToCart));
                break
            }
        }
    } else {
        console.log("icn")
        for (let j = 0; j < products.length; j++) {
            if (products[j].index == index) {
                let flagPrd = true;
                for (let k = 0; k < listToCart.length; k++) {
                    if (listToCart[k] == index) {
                        flagPrd = false;
                        localStorage.setItem("listToCart", JSON.stringify(listToCart))
                    } else {
                        flagPrd = true;
                    }
                }
                localStorage.setItem("listToCart", JSON.stringify(listToCart))
                if(!flagPrd){
                    alert("sản phẩm có trong giỏ hàng")
                    console.log()
                    return;
                }else{
                    listToCart.push(products);
                    localStorage.setItem(" listToCart ",JSON.stringify(listToCart));
                }
            }
        }
    }
}
