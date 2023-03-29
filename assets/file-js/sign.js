// phân đăng kí
let dataForm = JSON.parse(localStorage.getItem("dataForm")) || [];
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
            daydu()
            return
        }
    }
    let checkEmail = dataForm.some((user) => user.email === emailInput)
    if (checkEmail) {
        couttk()
        console.log("sìun")
        return
    }
    let checkGmail = document.getElementById("signUp__email-input").value;
    if (checkGmail.endsWith("@gmail.com")) {
        if (passwordInput !== passwordInputAgain) {
            again()
            return
        } else if (dataForm == null) {
            dataForm = [];
            dataForm.push(listForm)
            localStorage.setItem("dataForm", JSON.stringify(dataForm));
        } else {
            dataForm.push(listForm);
            localStorage.setItem("dataForm", JSON.stringify(dataForm));
            sussec()
            localStorage.setItem("flag", 1)
            setTimeout(function () {
                window.location.assign("/index.html");
            }, 1000);
        };
    } else {
        Email();
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
function daydu() {
    document.getElementById("daydu").style.display = "block";
    setTimeout(function () {
        document.getElementById("daydu").style.display = "none";
    }, 3000)
}
function couttk() {
    document.getElementById("couttk").style.display = "block";
    setTimeout(function () {
        document.getElementById("couttk").style.display = "none";
    }, 3000)
}
function  again() {
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
function Email() {
    document.getElementById("Email").style.display = "block";
    setTimeout(function () {
        document.getElementById("Email").style.display = "none";
    }, 3000)
}












