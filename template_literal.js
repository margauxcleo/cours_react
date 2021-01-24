function saluerTous(name1 = "Pierre", name2 = "Paul", name3 = "Jack") {
    console.log(`Bonjour à ${name1}, ${name2}, ${name3}`);
}

// autre façon de faire, avec une fonction fléchée
// const saluerTous(name1 = "Pierre", name2 = "Paul", name3 = "Jack") => {
//     console.log(`Bonjour à ${name1}, ${name2}, ${name3}`);
// }

saluerTous("Jean", "Jeanne", "Helene");
// affiche Bonjour à Jean, Jeanne, Helene
saluerTous("Jean");
// affiche Bonjour à Jean, Paul, Jack
saluerTous("Jean", "Jeanne");
// affiche Bonjour à Jean, Jeanne, Jack

// ES5 on créer l'exportation du module
module.exports = saluerTous;

// ES6 
// export default saluerTous;