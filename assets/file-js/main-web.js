
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
let renderbag = JSON.parse(localStorage.getItem("renderbag"));
let flag = true;
function buy(index) {
  if (renderbag == null) {
    renderbag = []
    renderbag.push( products)
    localStorage.setItem("renderbag ", JSON.stringify(renderbag))
  } else {
    console.log("vetr")
    if (renderbag.length == "") {
      console.log("vetr")
      for (let i = 0; i < products.length; i++) {
        if ( products[i].id == index) {
          renderbag.push( products[i]);
          console.log( products[i]);
          localStorage.setItem("renderbag ", JSON.stringify(renderbag));
          console.log(renderbag);
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
        alert("xác nhận thêm vào");
      } else {
        for (let k = 0; k <  products.length; k++) {
          if ( products[k].id == index) {
            renderbag.push( products[k]);
            localStorage.setItem(" renderbag ", JSON.stringify(renderbag));
          }
        }
      }
    }
  }
  
}