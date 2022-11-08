/*(async ()=> {
    data=await(await fetch('../bdd.json')).json()
    console.log('Base de donnée globale chargé.')
})()

let data = {}*/


async function loadAnimalView(animalType){
    console.log("Animal choisi: " + animalType)
    localStorage.setItem('currentChoosenAnimal', animalType)
    window.location = '../animalViews.html';
}


(async ()=> {
    data=await(await fetch('../bdd.json')).json()
    console.log('Base de donnée globale chargé.')
    if(localStorage.getItem('currentChoosenAnimal')){
        showAllAnimalElements(localStorage.getItem('currentChoosenAnimal'))
    } else {
        console.log("Aucun animal n'est séléctionné, erreur du code!")
    }
})()

function showAllAnimalElements(animalType){
    switch(animalType){
        case 'lions':
            for(let lion of data.pets.lions){
                let tree = document.createDocumentFragment();
                let div = document.createElement("div");
                div.setAttribute('class', "box")
        
        
                let nameText = document.createElement('h2')
                nameText.setAttribute("class", "animalDetails");
                nameText.setAttribute("id", "animalName");
                nameText.appendChild(document.createTextNode(lion.name))
                div.appendChild(nameText)
        
                let ageText = document.createElement('h4')
                ageText.setAttribute("class", "animalDetails");
                ageText.setAttribute("id", "animalAge");
                ageText.appendChild(document.createTextNode('Âge: '+lion.age))
                div.appendChild(ageText)
        
                let sexText = document.createElement('h4')
                sexText.setAttribute("class", "animalDetails");
                sexText.setAttribute("id", "animalSex");
                sexText.appendChild(document.createTextNode('Sexe: ' +lion.sex))
                div.appendChild(sexText)
        
                let visitText = document.createElement('h4')
                visitText.setAttribute("class", "animalDetails");
                visitText.setAttribute("id", "animalSex");
                visitText.appendChild(document.createTextNode('Dernière visite médicale: '+lion.lastMedicalVisit))
                div.appendChild(visitText)

                if(localStorage.getItem('currentChoosenAnimal')){
                    
                    let headerText = document.getElementById('header');
                    headerText.innerText = "Lions"

                }
        
        
                tree.appendChild(div);
                document.getElementById("list").appendChild(tree);
            }
        
        break;

            case 'girafe':
            for(let giraf of data.pets.girafe){
                let tree = document.createDocumentFragment();
                let div = document.createElement("div");
                div.setAttribute('class', "box")
        
        
                let nameText = document.createElement('h2')
                nameText.setAttribute("class", "animalDetails");
                nameText.setAttribute("id", "animalName");
                nameText.appendChild(document.createTextNode(giraf.name))
                div.appendChild(nameText)
        
                let ageText = document.createElement('h4')
                ageText.setAttribute("class", "animalDetails");
                ageText.setAttribute("id", "animalAge");
                ageText.appendChild(document.createTextNode('Âge: '+giraf.age))
                div.appendChild(ageText)
        
                let sexText = document.createElement('h4')
                sexText.setAttribute("class", "animalDetails");
                sexText.setAttribute("id", "animalSex");
                sexText.appendChild(document.createTextNode('Sexe: ' +giraf.sex))
                div.appendChild(sexText)
        
                let visitText = document.createElement('h4')
                visitText.setAttribute("class", "animalDetails");
                visitText.setAttribute("id", "animalSex");
                visitText.appendChild(document.createTextNode('Dernière visite médicale: '+giraf.lastMedicalVisit))
                div.appendChild(visitText)

                if(localStorage.getItem('currentChoosenAnimal')){
                    
                    let headerText = document.getElementById('header');
                    headerText.innerText = "Girafes"

                }
        
        
                tree.appendChild(div);
                document.getElementById("list").appendChild(tree);
            }
            break;


            case 'zebras':
            for(let zebra of data.pets.zebras){
                let tree = document.createDocumentFragment();
                let div = document.createElement("div");
                div.setAttribute('class', "box")
        
        
                let nameText = document.createElement('h2')
                nameText.setAttribute("class", "animalDetails");
                nameText.setAttribute("id", "animalName");
                nameText.appendChild(document.createTextNode(zebra.name))
                div.appendChild(nameText)
        
                let ageText = document.createElement('h4')
                ageText.setAttribute("class", "animalDetails");
                ageText.setAttribute("id", "animalAge");
                ageText.appendChild(document.createTextNode('Âge: '+zebra.age))
                div.appendChild(ageText)
        
                let sexText = document.createElement('h4')
                sexText.setAttribute("class", "animalDetails");
                sexText.setAttribute("id", "animalSex");
                sexText.appendChild(document.createTextNode('Sexe: ' +zebra.sex))
                div.appendChild(sexText)
        
                let visitText = document.createElement('h4')
                visitText.setAttribute("class", "animalDetails");
                visitText.setAttribute("id", "animalSex");
                visitText.appendChild(document.createTextNode('Dernière visite médicale: '+zebra.lastMedicalVisit))
                div.appendChild(visitText)

                if(localStorage.getItem('currentChoosenAnimal')){
                    
                    let headerText = document.getElementById('header');
                    headerText.innerText = "Zèbres"

                }
        
        
                tree.appendChild(div);
                document.getElementById("list").appendChild(tree);
            }
            break;

            case 'hippopotamus':
            for(let hippopotamus of data.pets.hippopotamus){
                let tree = document.createDocumentFragment();
                let div = document.createElement("div");
                div.setAttribute('class', "box")
        
        
                let nameText = document.createElement('h2')
                nameText.setAttribute("class", "animalDetails");
                nameText.setAttribute("id", "animalName");
                nameText.appendChild(document.createTextNode(hippopotamus.name))
                div.appendChild(nameText)
        
                let ageText = document.createElement('h4')
                ageText.setAttribute("class", "animalDetails");
                ageText.setAttribute("id", "animalAge");
                ageText.appendChild(document.createTextNode('Âge: '+hippopotamus.age))
                div.appendChild(ageText)
        
                let sexText = document.createElement('h4')
                sexText.setAttribute("class", "animalDetails");
                sexText.setAttribute("id", "animalSex");
                sexText.appendChild(document.createTextNode('Sexe: ' +hippopotamus.sex))
                div.appendChild(sexText)
        
                let visitText = document.createElement('h4')
                visitText.setAttribute("class", "animalDetails");
                visitText.setAttribute("id", "animalSex");
                visitText.appendChild(document.createTextNode('Dernière visite médicale: '+hippopotamus.lastMedicalVisit))
                div.appendChild(visitText)

                if(localStorage.getItem('currentChoosenAnimal')){
                    
                    let headerText = document.getElementById('header');
                    headerText.innerText = "Hippopotames"

                }
        
        
                tree.appendChild(div);
                document.getElementById("list").appendChild(tree);
            }
            break;
            case 'elephants':
            for(let elephant of data.pets.elephants){
                let tree = document.createDocumentFragment();
                let div = document.createElement("div");
                div.setAttribute('class', "box")
        
        
                let nameText = document.createElement('h2')
                nameText.setAttribute("class", "animalDetails");
                nameText.setAttribute("id", "animalName");
                nameText.appendChild(document.createTextNode(elephant.name))
                div.appendChild(nameText)
        
                let ageText = document.createElement('h4')
                ageText.setAttribute("class", "animalDetails");
                ageText.setAttribute("id", "animalAge");
                ageText.appendChild(document.createTextNode('Âge: '+elephant.age))
                div.appendChild(ageText)
        
                let sexText = document.createElement('h4')
                sexText.setAttribute("class", "animalDetails");
                sexText.setAttribute("id", "animalSex");
                sexText.appendChild(document.createTextNode('Sexe: ' +elephant.sex))
                div.appendChild(sexText)
        
                let visitText = document.createElement('h4')
                visitText.setAttribute("class", "animalDetails");
                visitText.setAttribute("id", "animalSex");
                visitText.appendChild(document.createTextNode('Dernière visite médicale: '+elephant.lastMedicalVisit))
                div.appendChild(visitText)

                if(localStorage.getItem('currentChoosenAnimal')){
                    
                    let headerText = document.getElementById('header');
                    headerText.innerText = "Eléphants"

                }
        
        
                tree.appendChild(div);
                document.getElementById("list").appendChild(tree);
            }
            break;
            case 'flamingos':
            for(let flamingo of data.pets.flamingos){
                let tree = document.createDocumentFragment();
                let div = document.createElement("div");
                div.setAttribute('class', "box")
        
        
                let nameText = document.createElement('h2')
                nameText.setAttribute("class", "animalDetails");
                nameText.setAttribute("id", "animalName");
                nameText.appendChild(document.createTextNode(flamingo.name))
                div.appendChild(nameText)
        
                let ageText = document.createElement('h4')
                ageText.setAttribute("class", "animalDetails");
                ageText.setAttribute("id", "animalAge");
                ageText.appendChild(document.createTextNode('Âge: '+flamingo.age))
                div.appendChild(ageText)
        
                let sexText = document.createElement('h4')
                sexText.setAttribute("class", "animalDetails");
                sexText.setAttribute("id", "animalSex");
                sexText.appendChild(document.createTextNode('Sexe: ' +flamingo.sex))
                div.appendChild(sexText)
        
                let visitText = document.createElement('h4')
                visitText.setAttribute("class", "animalDetails");
                visitText.setAttribute("id", "animalSex");
                visitText.appendChild(document.createTextNode('Dernière visite médicale: '+flamingo.lastMedicalVisit))
                div.appendChild(visitText)

                if(localStorage.getItem('currentChoosenAnimal')){
                    
                    let headerText = document.getElementById('header');
                    headerText.innerText = "Flamants roses"

                }
        
        
                tree.appendChild(div);
                document.getElementById("list").appendChild(tree);
            }
            break;
            case 'pelicans':
            for(let pelican of data.pets.pelicans){
                let tree = document.createDocumentFragment();
                let div = document.createElement("div");
                div.setAttribute('class', "box")
        
        
                let nameText = document.createElement('h2')
                nameText.setAttribute("class", "animalDetails");
                nameText.setAttribute("id", "animalName");
                nameText.appendChild(document.createTextNode(pelican.name))
                div.appendChild(nameText)
        
                let ageText = document.createElement('h4')
                ageText.setAttribute("class", "animalDetails");
                ageText.setAttribute("id", "animalAge");
                ageText.appendChild(document.createTextNode('Âge: '+pelican.age))
                div.appendChild(ageText)
        
                let sexText = document.createElement('h4')
                sexText.setAttribute("class", "animalDetails");
                sexText.setAttribute("id", "animalSex");
                sexText.appendChild(document.createTextNode('Sexe: ' +pelican.sex))
                div.appendChild(sexText)
        
                let visitText = document.createElement('h4')
                visitText.setAttribute("class", "animalDetails");
                visitText.setAttribute("id", "animalSex");
                visitText.appendChild(document.createTextNode('Dernière visite médicale: '+pelican.lastMedicalVisit))
                div.appendChild(visitText)

                if(localStorage.getItem('currentChoosenAnimal')){
                    
                    let headerText = document.getElementById('header');
                    headerText.innerText = "Pélicans"

                }
        
        
                tree.appendChild(div);
                document.getElementById("list").appendChild(tree);
            }
            break;
            case 'whitewolves':
            for(let whitewolve of data.pets.whitewolves){
                let tree = document.createDocumentFragment();
                let div = document.createElement("div");
                div.setAttribute('class', "box")
        
        
                let nameText = document.createElement('h2')
                nameText.setAttribute("class", "animalDetails");
                nameText.setAttribute("id", "animalName");
                nameText.appendChild(document.createTextNode(whitewolve.name))
                div.appendChild(nameText)
        
                let ageText = document.createElement('h4')
                ageText.setAttribute("class", "animalDetails");
                ageText.setAttribute("id", "animalAge");
                ageText.appendChild(document.createTextNode('Âge: '+whitewolve.age))
                div.appendChild(ageText)
        
                let sexText = document.createElement('h4')
                sexText.setAttribute("class", "animalDetails");
                sexText.setAttribute("id", "animalSex");
                sexText.appendChild(document.createTextNode('Sexe: ' +whitewolve.sex))
                div.appendChild(sexText)
        
                let visitText = document.createElement('h4')
                visitText.setAttribute("class", "animalDetails");
                visitText.setAttribute("id", "animalSex");
                visitText.appendChild(document.createTextNode('Dernière visite médicale: '+whitewolve.lastMedicalVisit))
                div.appendChild(visitText)

                if(localStorage.getItem('currentChoosenAnimal')){
                    
                    let headerText = document.getElementById('header');
                    headerText.innerText = "Loups blancs"

                }
        
        
                tree.appendChild(div);
                document.getElementById("list").appendChild(tree);
            }
            break;
            case 'rhinoceros':
            for(let rhinocero of data.pets.rhinoceros){
                let tree = document.createDocumentFragment();
                let div = document.createElement("div");
                div.setAttribute('class', "box")
        
        
                let nameText = document.createElement('h2')
                nameText.setAttribute("class", "animalDetails");
                nameText.setAttribute("id", "animalName");
                nameText.appendChild(document.createTextNode(rhinocero.name))
                div.appendChild(nameText)
        
                let ageText = document.createElement('h4')
                ageText.setAttribute("class", "animalDetails");
                ageText.setAttribute("id", "animalAge");
                ageText.appendChild(document.createTextNode('Âge: '+rhinocero.age))
                div.appendChild(ageText)
        
                let sexText = document.createElement('h4')
                sexText.setAttribute("class", "animalDetails");
                sexText.setAttribute("id", "animalSex");
                sexText.appendChild(document.createTextNode('Sexe: ' +rhinocero.sex))
                div.appendChild(sexText)
        
                let visitText = document.createElement('h4')
                visitText.setAttribute("class", "animalDetails");
                visitText.setAttribute("id", "animalSex");
                visitText.appendChild(document.createTextNode('Dernière visite médicale: '+rhinocero.lastMedicalVisit))
                div.appendChild(visitText)

                if(localStorage.getItem('currentChoosenAnimal')){
                    
                    let headerText = document.getElementById('header');
                    headerText.innerText = "Rhinoceros"

                }
        
        
                tree.appendChild(div);
                document.getElementById("list").appendChild(tree);
            }
            break;
            case 'seals':
            for(let seal of data.pets.seals){
                let tree = document.createDocumentFragment();
                let div = document.createElement("div");
                div.setAttribute('class', "box")
        
        
                let nameText = document.createElement('h2')
                nameText.setAttribute("class", "animalDetails");
                nameText.setAttribute("id", "animalName");
                nameText.appendChild(document.createTextNode(seal.name))
                div.appendChild(nameText)
        
                let ageText = document.createElement('h4')
                ageText.setAttribute("class", "animalDetails");
                ageText.setAttribute("id", "animalAge");
                ageText.appendChild(document.createTextNode('Âge: '+seal.age))
                div.appendChild(ageText)
        
                let sexText = document.createElement('h4')
                sexText.setAttribute("class", "animalDetails");
                sexText.setAttribute("id", "animalSex");
                sexText.appendChild(document.createTextNode('Sexe: ' +seal.sex))
                div.appendChild(sexText)
        
                let visitText = document.createElement('h4')
                visitText.setAttribute("class", "animalDetails");
                visitText.setAttribute("id", "animalSex");
                visitText.appendChild(document.createTextNode('Dernière visite médicale: '+seal.lastMedicalVisit))
                div.appendChild(visitText)

                if(localStorage.getItem('currentChoosenAnimal')){
                    
                    let headerText = document.getElementById('header');
                    headerText.innerText = "Phoques"

                }
        
        
                tree.appendChild(div);
                document.getElementById("list").appendChild(tree);
            }
            break;
            case 'monkeys':
            for(let monkey of data.pets.monkeys){
                let tree = document.createDocumentFragment();
                let div = document.createElement("div");
                div.setAttribute('class', "box")
        
        
                let nameText = document.createElement('h2')
                nameText.setAttribute("class", "animalDetails");
                nameText.setAttribute("id", "animalName");
                nameText.appendChild(document.createTextNode(monkey.name))
                div.appendChild(nameText)
        
                let ageText = document.createElement('h4')
                ageText.setAttribute("class", "animalDetails");
                ageText.setAttribute("id", "animalAge");
                ageText.appendChild(document.createTextNode('Âge: '+monkey.age))
                div.appendChild(ageText)
        
                let sexText = document.createElement('h4')
                sexText.setAttribute("class", "animalDetails");
                sexText.setAttribute("id", "animalSex");
                sexText.appendChild(document.createTextNode('Sexe: ' +monkey.sex))
                div.appendChild(sexText)
        
                let visitText = document.createElement('h4')
                visitText.setAttribute("class", "animalDetails");
                visitText.setAttribute("id", "animalSex");
                visitText.appendChild(document.createTextNode('Dernière visite médicale: '+monkey.lastMedicalVisit))
                div.appendChild(visitText)

                if(localStorage.getItem('currentChoosenAnimal')){
                    
                    let headerText = document.getElementById('header');
                    headerText.innerText = "Singes"

                }
        
        
                tree.appendChild(div);
                document.getElementById("list").appendChild(tree);
            }
            break;
            case 'pandas':
            for(let panda of data.pets.pandas){
                let tree = document.createDocumentFragment();
                let div = document.createElement("div");
                div.setAttribute('class', "box")
        
        
                let nameText = document.createElement('h2')
                nameText.setAttribute("class", "animalDetails");
                nameText.setAttribute("id", "animalName");
                nameText.appendChild(document.createTextNode(panda.name))
                div.appendChild(nameText)
        
                let ageText = document.createElement('h4')
                ageText.setAttribute("class", "animalDetails");
                ageText.setAttribute("id", "animalAge");
                ageText.appendChild(document.createTextNode('Âge: '+panda.age))
                div.appendChild(ageText)
        
                let sexText = document.createElement('h4')
                sexText.setAttribute("class", "animalDetails");
                sexText.setAttribute("id", "animalSex");
                sexText.appendChild(document.createTextNode('Sexe: ' +panda.sex))
                div.appendChild(sexText)
        
                let visitText = document.createElement('h4')
                visitText.setAttribute("class", "animalDetails");
                visitText.setAttribute("id", "animalSex");
                visitText.appendChild(document.createTextNode('Dernière visite médicale: '+panda.lastMedicalVisit))
                div.appendChild(visitText)

                if(localStorage.getItem('currentChoosenAnimal')){
                    
                    let headerText = document.getElementById('header');
                    headerText.innerText = "Pandas"

                }
        
        
                tree.appendChild(div);
                document.getElementById("list").appendChild(tree);
            }
            break;
            case 'lemurs':
            for(let lemur of data.pets.lemurs){
                let tree = document.createDocumentFragment();
                let div = document.createElement("div");
                div.setAttribute('class', "box")
        
        
                let nameText = document.createElement('h2')
                nameText.setAttribute("class", "animalDetails");
                nameText.setAttribute("id", "animalName");
                nameText.appendChild(document.createTextNode(lemur.name))
                div.appendChild(nameText)
        
                let ageText = document.createElement('h4')
                ageText.setAttribute("class", "animalDetails");
                ageText.setAttribute("id", "animalAge");
                ageText.appendChild(document.createTextNode('Âge: '+lemur.age))
                div.appendChild(ageText)
        
                let sexText = document.createElement('h4')
                sexText.setAttribute("class", "animalDetails");
                sexText.setAttribute("id", "animalSex");
                sexText.appendChild(document.createTextNode('Sexe: ' +lemur.sex))
                div.appendChild(sexText)
        
                let visitText = document.createElement('h4')
                visitText.setAttribute("class", "animalDetails");
                visitText.setAttribute("id", "animalSex");
                visitText.appendChild(document.createTextNode('Dernière visite médicale: '+lemur.lastMedicalVisit))
                div.appendChild(visitText)

                if(localStorage.getItem('currentChoosenAnimal')){
                    
                    let headerText = document.getElementById('header');
                    headerText.innerText = "Lémuriens"

                }
        
        
                tree.appendChild(div);
                document.getElementById("list").appendChild(tree);
            }
            break;
            case 'crocodiles':
            for(let crocodile of data.pets.crocodiles){
                let tree = document.createDocumentFragment();
                let div = document.createElement("div");
                div.setAttribute('class', "box")
        
        
                let nameText = document.createElement('h2')
                nameText.setAttribute("class", "animalDetails");
                nameText.setAttribute("id", "animalName");
                nameText.appendChild(document.createTextNode(crocodile.name))
                div.appendChild(nameText)
        
                let ageText = document.createElement('h4')
                ageText.setAttribute("class", "animalDetails");
                ageText.setAttribute("id", "animalAge");
                ageText.appendChild(document.createTextNode('Âge: '+crocodile.age))
                div.appendChild(ageText)
        
                let sexText = document.createElement('h4')
                sexText.setAttribute("class", "animalDetails");
                sexText.setAttribute("id", "animalSex");
                sexText.appendChild(document.createTextNode('Sexe: ' +crocodile.sex))
                div.appendChild(sexText)
        
                let visitText = document.createElement('h4')
                visitText.setAttribute("class", "animalDetails");
                visitText.setAttribute("id", "animalSex");
                visitText.appendChild(document.createTextNode('Dernière visite médicale: '+crocodile.lastMedicalVisit))
                div.appendChild(visitText)

                if(localStorage.getItem('currentChoosenAnimal')){
                    
                    let headerText = document.getElementById('header');
                    headerText.innerText = "Crocodiles"

                }
        
        
                tree.appendChild(div);
                document.getElementById("list").appendChild(tree);
            }
            break;
            case 'snakes':
            for(let snake of data.pets.snakes){
                let tree = document.createDocumentFragment();
                let div = document.createElement("div");
                div.setAttribute('class', "box")
        
        
                let nameText = document.createElement('h2')
                nameText.setAttribute("class", "animalDetails");
                nameText.setAttribute("id", "animalName");
                nameText.appendChild(document.createTextNode(snake.name))
                div.appendChild(nameText)
        
                let ageText = document.createElement('h4')
                ageText.setAttribute("class", "animalDetails");
                ageText.setAttribute("id", "animalAge");
                ageText.appendChild(document.createTextNode('Âge: '+snake.age))
                div.appendChild(ageText)
        
                let sexText = document.createElement('h4')
                sexText.setAttribute("class", "animalDetails");
                sexText.setAttribute("id", "animalSex");
                sexText.appendChild(document.createTextNode('Sexe: ' +snake.sex))
                div.appendChild(sexText)
        
                let visitText = document.createElement('h4')
                visitText.setAttribute("class", "animalDetails");
                visitText.setAttribute("id", "animalSex");
                visitText.appendChild(document.createTextNode('Dernière visite médicale: '+snake.lastMedicalVisit))
                div.appendChild(visitText)

                if(localStorage.getItem('currentChoosenAnimal')){
                    
                    let headerText = document.getElementById('header');
                    headerText.innerText = "Serpents"

                }
        
        
                tree.appendChild(div);
                document.getElementById("list").appendChild(tree);
            }
            break;
        }
        return console.log('Animaux de catégorie ' +animalType+' affichés.')
}
