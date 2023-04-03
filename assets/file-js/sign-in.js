//tạo email
let isLognIn = JSON.parse(localStorage.getItem("isLognIn"))
function impClick(e) {
    e.preventDefault(e)
    let stringEmail = document.getElementById("signIn__email-input").value;
    let stringPass = document.getElementById("signIn__password-input").value;
    let dataFormUser = JSON.parse(localStorage.getItem("dataFormUser")) || [];
    let checkForm = dataFormUser.find((user) => user.email === stringEmail && user.passwword === stringPass);
    let isLognIn = false;
    if (checkForm) {
       //tạo addmin
        if (stringEmail == "namson@gmail.com" && stringPass == "son") {
            window.location.href = "./addMin.html";
          
        } else {
            localStorage.setItem("isLognIn",true );
            window.location.href = '/index.html';
            localStorage.setItem("dataFormUser", JSON.stringify(dataFormUser) );
        };
    } else {
        localStorage.setItem("isLognIn",false );
        signWrong()
    };
};
//hàm đăng nhập sai
function signWrong() {
    document.getElementById("signWrong").style.display = "block";
    setTimeout(function () {
        document.getElementById("signWrong").style.display = "none";
    }, 3000)
}
//hàm mắt
let inputEyeAgain = document.getElementById("signIn__password-input");
let eyeChaneAgain = document.getElementById("eye-signIn");
let cout = 0;
function eyeSignIn(e) {
    e.preventDefault(e)
    cout++;
    if (cout == 1) {
        inputEyeAgain.type = "text";
        eyeChaneAgain.classList.add("fa-eye");
    } else if (cout == 2) {
        inputEyeAgain.type = "password";
        eyeChaneAgain.classList.remove("fa-eye");
        cout = 0;
    }
}