

//hàm tạo email
let dataFormUser = JSON.parse(localStorage.getItem("dataFormUser")) || [];
let isLognIn =  JSON.parse(localStorage.getItem("isLognIn")) || [];
function submidRegister() {
    let fistName = document.getElementById("fistName").value;
    let lastName = document.getElementById("lastName").value;
    let emailInput = document.getElementById("signUp__email-input").value;
    let passwordInput = document.getElementById("signUp__password-input").value;
    let passwordInputAgain = document.getElementById("password-input-again").value;
    let listForm = {
        name: fistName,
        lastname: lastName,
        email: emailInput,
        passwword: passwordInput,
        passwordAgain: passwordInputAgain,
    };
    //hàm khong cho đăng nhập nếu không nhập j cả
    let chekHoll = Object.values(listForm);
    for (let i = 0; i < chekHoll.length; i++) {
        if (chekHoll[i] === "") {
            fullInfor()
            return;
        }
    }
    //hàm check email bao gồm nếu email trùng nhau phải có đuôi @gmail.com 
    let checkEmail = dataFormUser.some((user) => user.email === emailInput)
    if (checkEmail) {
        sameAccount();
        return;
    }
    let checkGmail = document.getElementById("signUp__email-input").value;
    if (checkGmail.endsWith("@gmail.com")) {
        if (passwordInput !== passwordInputAgain) {
            passwordAgain();
            return
        } else if (dataFormUser == null) {
            dataFormUser = [];
            dataFormUser.push(listForm)
            localStorage.setItem("dataFormUser", JSON.stringify(dataFormUser));
        } else {
            dataFormUser.push(listForm);
            localStorage.setItem("dataFormUser", JSON.stringify(dataFormUser));
            sussec()
            localStorage.setItem("isLognIn", true)
            setTimeout(function () {
                window.location.assign("../index.html");
            }, 1000);
        };
    } else {
        checkEmailEnd();
    };
}
//hàm hiển thị password
let cout = 0;
let inputEye = document.getElementById("signUp__password-input")
let eyeChane = document.getElementById("eye-signUp")
function eyeSignUp(e) {
    e.preventDefault(e);
    cout++;
    if (cout == 1) {
        inputEye.type = "text";
        eyeChane.classList.add("fa-eye");
        console.log(eyeChane.classList);
        console.log(cout);
    } else if (cout == 2) {
        inputEye.type = "password";
        eyeChane.classList.remove("fa-eye");
        cout = 0;
    }
}
let inputEyeAgain = document.getElementById("password-input-again");
let eyeChaneAgain = document.getElementById("eye-signUp-again");
function eyeSignUpAgain(e) {
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
//các hàm hiển thị thông báo nếu nhập không đuungs điều kiện
function fullInfor() {
    document.getElementById("daydu").style.display = "block";
    setTimeout(function () {
        document.getElementById("daydu").style.display = "none";
    }, 3000)
}
function sameAccount() {
    document.getElementById("couttk").style.display = "block";
    setTimeout(function () {
        document.getElementById("couttk").style.display = "none";
    }, 3000)
}
function  passwordAgain() {
    document.getElementById("again").style.display = "block";
    setTimeout(function () {
        document.getElementById("again").style.display = "none";
    }, 3000)
}
function sussec() {
    document.getElementById("sussec").style.display = "block";
    setTimeout(function () {
        document.getElementById("sussec").style.display = "none";
    }, 3000)
}
function checkEmailEnd() {
    document.getElementById("Email").style.display = "block";
    setTimeout(function () {
        document.getElementById("Email").style.display = "none";
    }, 3000)
}












