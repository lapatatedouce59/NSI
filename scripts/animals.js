/*(async ()=> {
    data=await(await fetch('../bdd.json')).json()
    console.log('Base de donnée globale chargé.')
})()

let data = {}*/


async function loadAnimalView(animalType){
    console.log("Animal choisi: " + animalType)
    window.location = '../animalViews.html';
}


(async ()=> {
    data=await(await fetch('../bdd.json')).json()
    console.log('Base de donnée globale chargé.')
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
                nameText.appendChild(document.createTextNode(lions.name))
                div.appendChild(nameText)
        
                let ageText = document.createElement('h4')
                ageText.setAttribute("class", "animalDetails");
                ageText.setAttribute("id", "animalAge");
                ageText.appendChild(document.createTextNode(lions.age))
                div.appendChild(ageText)
        
                let sexText = document.createElement('h4')
                sexText.setAttribute("class", "animalDetails");
                sexText.setAttribute("id", "animalSex");
                sexText.appendChild(document.createTextNode(lions.sex))
                div.appendChild(sexText)
        
                let visitText = document.createElement('h4')
                visitText.setAttribute("class", "animalDetails");
                visitText.setAttribute("id", "animalSex");
                visitText.appendChild(document.createTextNode(lions.lastMedicalVisit))
                div.appendChild(visitText)
        
        
                tree.appendChild(div);
                document.getElementById("list").appendChild(tree);
            }
        
                break;

            case 'girafe':
            for(let girafe of data.pets.girafe){
                let tree = document.createDocumentFragment();
                let div = document.createElement("div");
                div.setAttribute('class', "box")
        
        
                let nameText = document.createElement('h2')
                nameText.setAttribute("class", "animalDetails");
                nameText.setAttribute("id", "animalName");
                nameText.appendChild(document.createTextNode(girafe.name))
                div.appendChild(nameText)
        
                let ageText = document.createElement('h4')
                ageText.setAttribute("class", "animalDetails");
                ageText.setAttribute("id", "animalAge");
                ageText.appendChild(document.createTextNode(girafe.age))
                div.appendChild(ageText)
        
                let sexText = document.createElement('h4')
                sexText.setAttribute("class", "animalDetails");
                sexText.setAttribute("id", "animalSex");
                sexText.appendChild(document.createTextNode(girafe.sex))
                div.appendChild(sexText)
        
                let visitText = document.createElement('h4')
                visitText.setAttribute("class", "animalDetails");
                visitText.setAttribute("id", "animalSex");
                visitText.appendChild(document.createTextNode(girafe.lastMedicalVisit))
                div.appendChild(visitText)
        
        
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
                ageText.appendChild(document.createTextNode(zebra.age))
                div.appendChild(ageText)
        
                let sexText = document.createElement('h4')
                sexText.setAttribute("class", "animalDetails");
                sexText.setAttribute("id", "animalSex");
                sexText.appendChild(document.createTextNode(zebra.sex))
                div.appendChild(sexText)
        
                let visitText = document.createElement('h4')
                visitText.setAttribute("class", "animalDetails");
                visitText.setAttribute("id", "animalSex");
                visitText.appendChild(document.createTextNode(zebra.lastMedicalVisit))
                div.appendChild(visitText)
        
        
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
                ageText.appendChild(document.createTextNode(hippopotamus.age))
                div.appendChild(ageText)
        
                let sexText = document.createElement('h4')
                sexText.setAttribute("class", "animalDetails");
                sexText.setAttribute("id", "animalSex");
                sexText.appendChild(document.createTextNode(hippopotamus.sex))
                div.appendChild(sexText)
        
                let visitText = document.createElement('h4')
                visitText.setAttribute("class", "animalDetails");
                visitText.setAttribute("id", "animalSex");
                visitText.appendChild(document.createTextNode(hippopotamus.lastMedicalVisit))
                div.appendChild(visitText)
        
        
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
                ageText.appendChild(document.createTextNode(elephant.age))
                div.appendChild(ageText)
        
                let sexText = document.createElement('h4')
                sexText.setAttribute("class", "animalDetails");
                sexText.setAttribute("id", "animalSex");
                sexText.appendChild(document.createTextNode(elephant.sex))
                div.appendChild(sexText)
        
                let visitText = document.createElement('h4')
                visitText.setAttribute("class", "animalDetails");
                visitText.setAttribute("id", "animalSex");
                visitText.appendChild(document.createTextNode(elephant.lastMedicalVisit))
                div.appendChild(visitText)
        
        
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
                ageText.appendChild(document.createTextNode(flamingo.age))
                div.appendChild(ageText)
        
                let sexText = document.createElement('h4')
                sexText.setAttribute("class", "animalDetails");
                sexText.setAttribute("id", "animalSex");
                sexText.appendChild(document.createTextNode(flamingo.sex))
                div.appendChild(sexText)
        
                let visitText = document.createElement('h4')
                visitText.setAttribute("class", "animalDetails");
                visitText.setAttribute("id", "animalSex");
                visitText.appendChild(document.createTextNode(flamingo.lastMedicalVisit))
                div.appendChild(visitText)
        
        
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
                ageText.appendChild(document.createTextNode(pelican.age))
                div.appendChild(ageText)
        
                let sexText = document.createElement('h4')
                sexText.setAttribute("class", "animalDetails");
                sexText.setAttribute("id", "animalSex");
                sexText.appendChild(document.createTextNode(pelican.sex))
                div.appendChild(sexText)
        
                let visitText = document.createElement('h4')
                visitText.setAttribute("class", "animalDetails");
                visitText.setAttribute("id", "animalSex");
                visitText.appendChild(document.createTextNode(pelican.lastMedicalVisit))
                div.appendChild(visitText)
        
        
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
                ageText.appendChild(document.createTextNode(whitewolve.age))
                div.appendChild(ageText)
        
                let sexText = document.createElement('h4')
                sexText.setAttribute("class", "animalDetails");
                sexText.setAttribute("id", "animalSex");
                sexText.appendChild(document.createTextNode(whitewolve.sex))
                div.appendChild(sexText)
        
                let visitText = document.createElement('h4')
                visitText.setAttribute("class", "animalDetails");
                visitText.setAttribute("id", "animalSex");
                visitText.appendChild(document.createTextNode(whitewolve.lastMedicalVisit))
                div.appendChild(visitText)
        
        
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
                ageText.appendChild(document.createTextNode(rhinocero.age))
                div.appendChild(ageText)
        
                let sexText = document.createElement('h4')
                sexText.setAttribute("class", "animalDetails");
                sexText.setAttribute("id", "animalSex");
                sexText.appendChild(document.createTextNode(rhinocero.sex))
                div.appendChild(sexText)
        
                let visitText = document.createElement('h4')
                visitText.setAttribute("class", "animalDetails");
                visitText.setAttribute("id", "animalSex");
                visitText.appendChild(document.createTextNode(rhinocero.lastMedicalVisit))
                div.appendChild(visitText)
        
        
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
                ageText.appendChild(document.createTextNode(seal.age))
                div.appendChild(ageText)
        
                let sexText = document.createElement('h4')
                sexText.setAttribute("class", "animalDetails");
                sexText.setAttribute("id", "animalSex");
                sexText.appendChild(document.createTextNode(seal.sex))
                div.appendChild(sexText)
        
                let visitText = document.createElement('h4')
                visitText.setAttribute("class", "animalDetails");
                visitText.setAttribute("id", "animalSex");
                visitText.appendChild(document.createTextNode(seal.lastMedicalVisit))
                div.appendChild(visitText)
        
        
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
                ageText.appendChild(document.createTextNode(monkey.age))
                div.appendChild(ageText)
        
                let sexText = document.createElement('h4')
                sexText.setAttribute("class", "animalDetails");
                sexText.setAttribute("id", "animalSex");
                sexText.appendChild(document.createTextNode(monkey.sex))
                div.appendChild(sexText)
        
                let visitText = document.createElement('h4')
                visitText.setAttribute("class", "animalDetails");
                visitText.setAttribute("id", "animalSex");
                visitText.appendChild(document.createTextNode(monkey.lastMedicalVisit))
                div.appendChild(visitText)
        
        
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
                ageText.appendChild(document.createTextNode(panda.age))
                div.appendChild(ageText)
        
                let sexText = document.createElement('h4')
                sexText.setAttribute("class", "animalDetails");
                sexText.setAttribute("id", "animalSex");
                sexText.appendChild(document.createTextNode(panda.sex))
                div.appendChild(sexText)
        
                let visitText = document.createElement('h4')
                visitText.setAttribute("class", "animalDetails");
                visitText.setAttribute("id", "animalSex");
                visitText.appendChild(document.createTextNode(panda.lastMedicalVisit))
                div.appendChild(visitText)
        
        
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
                ageText.appendChild(document.createTextNode(lemur.age))
                div.appendChild(ageText)
        
                let sexText = document.createElement('h4')
                sexText.setAttribute("class", "animalDetails");
                sexText.setAttribute("id", "animalSex");
                sexText.appendChild(document.createTextNode(lemur.sex))
                div.appendChild(sexText)
        
                let visitText = document.createElement('h4')
                visitText.setAttribute("class", "animalDetails");
                visitText.setAttribute("id", "animalSex");
                visitText.appendChild(document.createTextNode(lemur.lastMedicalVisit))
                div.appendChild(visitText)
        
        
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
                ageText.appendChild(document.createTextNode(crocodile.age))
                div.appendChild(ageText)
        
                let sexText = document.createElement('h4')
                sexText.setAttribute("class", "animalDetails");
                sexText.setAttribute("id", "animalSex");
                sexText.appendChild(document.createTextNode(crocodile.sex))
                div.appendChild(sexText)
        
                let visitText = document.createElement('h4')
                visitText.setAttribute("class", "animalDetails");
                visitText.setAttribute("id", "animalSex");
                visitText.appendChild(document.createTextNode(crocodile.lastMedicalVisit))
                div.appendChild(visitText)
        
        
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
                ageText.appendChild(document.createTextNode(snake.age))
                div.appendChild(ageText)
        
                let sexText = document.createElement('h4')
                sexText.setAttribute("class", "animalDetails");
                sexText.setAttribute("id", "animalSex");
                sexText.appendChild(document.createTextNode(snake.sex))
                div.appendChild(sexText)
        
                let visitText = document.createElement('h4')
                visitText.setAttribute("class", "animalDetails");
                visitText.setAttribute("id", "animalSex");
                visitText.appendChild(document.createTextNode(snake.lastMedicalVisit))
                div.appendChild(visitText)
        
        
                tree.appendChild(div);
                document.getElementById("list").appendChild(tree);
            }
            break;
        }
        console.log('Informations affichées')
        return true;
}
