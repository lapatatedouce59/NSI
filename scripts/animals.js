/*(async ()=> {
    data=await(await fetch('../bdd.json')).json()
    console.log('Base de donnée globale chargé.')
})()

let data = {}*/

cacheStorage = localStorage;

async function loadAnimalView(animalType){
    console.log("Animal choisi: " + animalType)
    window.location = '../animalViews.html.html';
}