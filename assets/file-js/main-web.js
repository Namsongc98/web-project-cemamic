
// let listProduct = [{
//     image: "/assets/img-web-gom/binh-hoa-rong.jpg",
//     name: "Bình hoa nghệ thuât hình rồng",
//     id: 1,
//     number: 0,
//     price: 500000,

// },
// {
//     image: "/assets/img-web-gom/binh-hoa.jpg",
//     name: "Bình hoa nghệ thuật",
//     id: 2,
//     number: 0,
//     price: 600000,

// }, {
//     image: "/assets/img-web-gom/da-coc.jpg",
//     name: "Cốc đá nghệ thuật",
//     id: 3,
//     number: 0,
//     price: 700000,

// }, {
//     image: "/assets/img-web-gom/da-nghe-thuat.jpg",
//     name: "Hoa đá nghệ thuật",
//     id: 4,
//     number: 0,
//     price: 800000,

// }, {
//     image: "/assets/img-web-gom/gai-gio.jpg",
//     name: "Cô gái cầm giỏ",
//     id: 5,
//     number: 0,
//     price: 900000,

// }, {
//     image: "/assets/img-web-gom/gai-mua.jpg",
//     name: "Cô gái múa ",
//     id: 6,
//     number: 0,
//     price: 1000000,

// }, {
//     image: "/assets/img-web-gom/tuong-da-hoa.jpg",
//     name: "Tượng đá bằng hoa",
//     id: 7,
//     number: 0,
//     price: 1200000,

// }, {
//     image: "/assets/img-web-gom/tuong-da-phat.jpg",
//     name: "Tượng phật bằng đá",
//     id: 8,
//     number: 0,
//     price: 1400000,

// }, {
//     image: "/assets/img-web-gom/voi-da.jpg",
//     name: "Tượng voi bằng đá",
//     id: 8,
//     number: 0,
//     price: 1300000,

// }];
// localStorage.setItem("listProduct", JSON.stringify(listProduct))
let products = JSON.parse(localStorage.getItem("listProduct")) ? JSON.parse(localStorage.getItem("listProduct")) : [];
function render() {
  for (let i = 0; i < products.length; i++) {
    let renderPro = `
        <div class="product-cart">
                  <img
                    src="${products[i].image}"
                     alt=""
                    class="product-img"
                  />
                  <div class="product-info">
                     <p class="product-name">${products[i].name}</p>
                     <span class="idProduct">ID: ${i} </span>
                     <div class="product-info-price">
                       <span class="product-price">${products[i].price}</span>
                       <span class="product-cout">${products[i].number}</span>
                       <button class="product-buy" onclick="buy(${products[i].id})">BUY</button>
                     </div>
                 </div>
                 </div>`
    document.getElementById("wpProduct").innerHTML += renderPro;
  }
}
render()
let renderbag = JSON.parse(localStorage.getItem("renderbag"));
let flag = true;
function buy(index) {
  if (renderbag == null) {
    renderbag = []
    renderbag.push(productLocal)
    localStorage.setItem("renderbag ", JSON.stringify(renderbag))
  } else {
    if (renderbag.length == "") {
      for (let i = 0; i < productLocal.length; i++) {
        if (productLocal[i].id == index) {
          renderbag.push(productLocal[i]);
          console.log(productLocal[i])
          localStorage.setItem("renderbag ", JSON.stringify(renderbag))
        }
      }
    } else {
      for (let j = 0; j < renderbag.length; j++) {
        if (renderbag[j].id == index) {
          flag = false;
        } else {
          flag = true;
        }
      }
      if (flag == false) {
        alert("xác nhận thêm vào")
      } else {
        for (let k = 0; k < productLocal.length; k++) {
          if (productLocal[k].id == index) {
            renderbag.push(productLocal[k]);
            localStorage.setItem(" renderbag ", JSON.stringify(renderbag))
          }
          break
        }
      }
    }
  }
}