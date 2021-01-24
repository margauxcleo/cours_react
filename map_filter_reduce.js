// MAP 
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/map
// La méthode map() crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.
// EXEMPLE 1
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

// EXEMPLE 2
// const tab = [1, 2, 3, 4 , 5];
// console.log( 
//     tab.map(function (n) {
//         return n += 2
//     })
// );

// en fonction fléchée
const map2 = tab.map(n => n += 2);

// FILTER 
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/filter 
// La méthode filter() crée et retourne un nouveau tableau contenant tous les éléments du tableau d'origine qui remplissent une condition déterminée par la fonction callback.
// EXEMPLE 1 
console.log(
    tab.filter(function (n) {
    return n <= 3;
    })
);

// en fonction fléchée
const map3 = tab.map(n => n <= 3);

// EXEMPLE 2
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

// REDUCE 
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/reduce  
// La méthode reduce() applique une fonction qui est un « accumulateur » et qui traite chaque valeur d'une liste (de la gauche vers la droite) afin de la réduire à une seule valeur.
// comme une boucle, qui conserve le résultat et le place dans previous value à chaque tour 

// EXEMPLE 1
// console.log(tab.reduce(function(previous, current) {
//     return previous + current;
//     })
// );

// autre façon de l'écrire
console.log(
    tab.reduce((previousValue, currentValue) => previousValue + currentValue)
);

// EXEMPLE 2 
const array2 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array2.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15