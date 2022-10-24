//loginBtn.addEventListener('click', loginBtnUpdate);
//var loginBtn = document.querySelector('#SUBMIT');



(async ()=> {
    data=await(await fetch('../bdd.json')).json()
    console.log(data)
})()

let data = {}




async function validate(){
    let usernameTxt = document.getElementById('USER').value
    let passwordTxt = document.getElementById('PASS').value
    alert("Utilisateur "+usernameTxt+" et mot de passe "+passwordTxt)
}


