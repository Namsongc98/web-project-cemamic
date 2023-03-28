let userBuy = JSON.parse(localStorage.getItem("renderbag"));
console.log(userBuy)
if(userBuy){
    userBuy = []
    userBuy.push( userBuy)
    localStorage.setItem("userBuy",JSON.stringify(renderbag))
}else{
    userBuy.push(userBuy)
    localStorage.setItem("userBuy",JSON.stringify(renderbag))
}