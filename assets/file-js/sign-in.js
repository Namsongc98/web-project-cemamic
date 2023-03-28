// đang nhập




function impClick(e) {
    e.preventDefault(e)
    let dataForm = JSON.parse(localStorage.getItem("dataForm"));
    let stringEmail = document.getElementById("signIn__email-input").value;
    let stringPass = document.getElementById("signIn__password-input").value;
    let checkForm = dataForm.find((user) => { dataForm.emailInput === stringEmail && user.passwordInput === stringPass })
    console.log(checkForm )
    
}
