//loginBtn.addEventListener('click', loginBtnUpdate);
//var loginBtn = document.querySelector('#SUBMIT');



(async ()=> {
    data=await(await fetch('../bdd.json')).json()
    console.log('Base de donnée globale chargé.')
    let currentUserTextZone = document.getElementById('currentUserText');
    currentUserTextZone.innerText = cacheStorage.getItem('CurrentLoggedUserName')
})()

let data = {}

let currentUser=''
let currentUserName=''
let currentUserRank=''


cacheStorage = localStorage;



//VERIFICATION DES CONDITIONS D'IDENTITE
async function validate(){
    let usernameTxt = document.getElementById('USER').value
    let passwordTxt = document.getElementById('PASS').value
    if ((!usernameTxt)||(!passwordTxt)) {
        console.log("Champs vides!")
        let invalidLoginText = document.getElementById('incorrectPass');
        invalidLoginText.innerText = "Merci de renseigner votre identifiant ou votre mot de passe!"
        return;
    };

    if(checkUser(usernameTxt, passwordTxt)){
        console.log('Compte trouvé! Rang: '+currentUserRank)
        
        window.location = '../tPrivate.html';
    } else {
        console.log("Compte invalide!")
        let invalidLoginText = document.getElementById('incorrectPass');
        invalidLoginText.innerText = "Mot de passe ou identifiant inccorect"
    } 
}


//VERIFICATION DE L'EXISTANCE D'UN OBJECT
function checkUser(user, pwd){
    for (let dUser of data.users){
        if (dUser.id===user && dUser.pwd===pwd && (dUser.rank)) {
            currentUser=dUser.id
            currentUserName=dUser.uname
            currentUserRank=dUser.rank
            cacheStorage.setItem('CurrentLoggedUser', currentUser)
            cacheStorage.setItem('CurrentLoggedUserName', currentUserName)
            cacheStorage.setItem('CurrentLoggedUserRank', currentUserRank)
            return true;
        }
    } return false;
}