 let renderCart = JSON.parse(localStorage.getItem("renderCart"));
 if (renderCart == null) {
     renderCart = [];
 };
//  function RenderCart() { 
//    let renderBuy="";
//    console.log(renderCart)
//      for (let i = 0; i < renderCart.length; i++) {
//       renderBuy+= `
//         <div class="card shadow p-3 mb-5 bg-body-tertiary rounded" style="width: 15rem;" >
//               <img src="${renderCart[i].image}" class="card-img-top" alt="...">
//               <div class="card-body">
//                 <h5 class="card-title">${renderCart[i].name}</h5>
//                 <p class="card-text">${i}</p>
//                 <p class="card-text">${renderCart[i].price}</p>
//                 <button class="btn btn-primary" onclick="buy(${renderCart[i].id})">BUY</button>
//               </div>
//         </div>
//          `
//         }
//         console.log(renderBuy);
//         document.getElementById("container-product").innerHTML = renderBuy;
// }
// RenderCart()