//loginBtn.addEventListener('click', loginBtnUpdate);
//var loginBtn = document.querySelector('#SUBMIT');



(async ()=> {
    data=await(await fetch('../bdd.json')).json()
    //console.log(data)
})()

let data = {}

currentUser=''
currentUserRank=''

//VERIFICATION DES CONDITIONS D'IDENTITE
async function validate(){
    let usernameTxt = document.getElementById('USER').value
    let passwordTxt = document.getElementById('PASS').value
    if(checkUser(usernameTxt, passwordTxt)){
        console.log('Compte trouvé! Rang: '+currentUserRank)
    } else {console.log("Compte invalide!")}
}


//VERIFICATION DE L'EXISTANCE D'UN OBJECT
function checkUser(user, pwd){
    for (let dUser of data.users){
        if (dUser.id===user && dUser.pwd===pwd && (dUser.rank)) {
            currentUser=dUser.id
            currentUserRank=dUser.rank
            return true;
        }
    } return false;
}