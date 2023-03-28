// phân đăng kí
let dataForm = JSON.parse(localStorage.getItem("dataForm"));

function Summit(e) {
    e.preventDefault(e)
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
   
    let chekHoll = Object.values(listForm);
    for (let i = 0; i < chekHoll.length; i++) {
        if (chekHoll[i] === "") {
            alert("mời nhập đầy đủ thông tin");
            return
        }
    }

    let checkGmail = document.getElementById("signUp__email-input").value;
    if (checkGmail.endsWith("@gmail.com")) {
        if (passwordInput !== passwordInputAgain) {
            alert("bạn nhạp lại mật khẩu sai");
            return
        } else if (dataForm == null) {
            dataForm = [];
            dataForm.push(listForm)
            localStorage.setItem("dataForm", JSON.stringify(dataForm));
        } else  {
            dataForm.push(listForm);
            localStorage.setItem("dataForm", JSON.stringify(dataForm));
            alert("chuc mừng bạn nhập đúng");
            setTimeout(function () {
                window.location.assign("./index.html");
            }, 3000);
        };
    } else {
        alert("nhập lại email");
    };
}
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
        console.log(eyeChane.classList);
        console.log(cout);
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










