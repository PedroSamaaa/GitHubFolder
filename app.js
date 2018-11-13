// Expliquer cette procédure, que fait elle ?

/* Il est fortement conseillé d'utiliser
la doc en ligne sur JavaScript (mdn,devdocs,w3school etc...) */

// Expliquer les lignes 19 & 20
// Expliquer la ligne 39
// Expliquer les ligne 41 à 51

var kewlArray = ['Bien', 'Good', 'Super', 'Génial', 'Youpi !', 'Right'];
var notKewlArray = ['Pas bien', 'Bouh !', 'Bad', 'Zéro !', 'Wrong', 'Nul'];
var title = document.querySelector('h1');

function createSquare(){

    var body = document.querySelector('body');
    
    var square = document.createElement('div') // square est la variable, on crée donc un tag document avec .createElement qui est 'div'.
    square.classList.add('square'); // LaVariableLocal.classList qui nous permet de manipuler l'élement d'une classe suivi de .add qui ajoute ce nouvel argument dans la continuité du code. (une classe est un attribut)
    //
    var circle = document.createElement('div');
    circle.classList.add('circle');
    
    var containerStick = document.createElement('div');
    containerStick.classList.add('cross--container', 'hide');
    
    var leftStick = document.createElement('div');
    leftStick.classList.add('left-stick');
    
    var rightStick = document.createElement('div'); 
    rightStick.classList.add('right-stick'); 

    title.innerHTML = 'Click me !';
    
    containerStick.append(leftStick);
    containerStick.append(rightStick);
    square.append(circle);
    square.append(containerStick);
    body.appendChild(square); // appendChild est un élément HTML, DOnc qui ajoute l'élément HTML child (enfant) en dernière position de l'élément parent(la variable qui précéde). 

    containerStick.addEventListener('click', (e) => { // On crée un événement pour la variable containerStick.
        var target = e.target;

        if(target.className === 'cross--container'){ // On crée une boucle Si, qui est une comparaison absolue sur cette ligne.

            target.previousSibling.classList.toggle('hide');// cette ligne nous retourne l'objet avec previousSibling et la fonction toggle renvoie true.
            target.classList.toggle('hide');// On renvoie true sur cette ligne.
            title.innerHTML = kewlArray[getRandomInt(6)];// On ajoute de l'aléatoire sur le titre avec la variable kewlArray avec [getRandomInt()].

        }
    });

    circle.addEventListener('click', (e) => { 
        var target = e.target; 

        target.nextSibling.classList.toggle('hide');
        target.classList.toggle('hide');
        title.innerHTML = notKewlArray[getRandomInt(6)];

    });
}

/**
 *
 * @param max {int}
 * @return {number}
 */

function getRandomInt(max){

    return Math.floor(Math.random() * Math.floor(max));

}