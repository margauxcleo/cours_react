// function recuperePairs(...params) {
//     let tab = [];
//     for(let i = 0; i < params.length; i++) {
//         if (params[i] % 2 === 0) {
//             tab.push(params[i]);
//         }
//     }
//     console.log(tab);
// };

// Correction - autre façon de faire 
// const recuperePairs = (...nombres) => {
//     const result = [];
//     // !(n % 2) = n'est pas impair donc est pair
//     // si on n'a qu'une seule opération, les accolades ne sont pas obligatoires
//     for (n of nombres) if (!(n % 2)) result.push(n);
//     console.log(result);
// };

// Correction - autre façon de faire plus concise 
const recuperePairs = (...nombres) => {
    // on utilise filter() qui s'utilise dans un array
    const result = nombres.filter((n) => !(n % 2));
    console.log(result);
};

recuperePairs(1, 2, 3, 4 ,5); // result => [2, 4]
recuperePairs(); // result => []
recuperePairs(1, 3, 11, 27); // result => []
recuperePairs(1, 2, 3, 11, 28, 27, 68); // result => [2, 28, 68]

