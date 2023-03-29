
function impClick(e) {
    e.preventDefault(e)
    let stringEmail = document.getElementById("signIn__email-input").value;
    let stringPass = document.getElementById("signIn__password-input").value;
    let dataForm = JSON.parse(localStorage.getItem("dataForm")) || []
    let checkForm = dataForm.find((user) => user.email === stringEmail && user.passwword === stringPass)
    if (checkForm) {
        localStorage.setItem("flag",1)
       window.location.href = '/index.html';
    } else {
        localStorage.setItem("flag",0)
       signWrong()
    }
}
function  signWrong() {
    document.getElementById("signWrong").style.display = "block";
    setTimeout(function () {
        document.getElementById("signWrong").style.display = "none";
    }, 3000)
}
let inputEyeAgain = document.getElementById("signIn__password-input");
let eyeChaneAgain = document.getElementById("eye-signIn");
let cout = 0;
function eyeSignIn(e) {
    e.preventDefault(e)
    console.log("se")
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
