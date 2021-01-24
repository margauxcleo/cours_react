// Fonction getPosts qui
// 1. Récupère la tâche ayant l'ID 42 depuis https://jsonplaceholder.typicode.com/todos
// 2. Récupere l'email de l'utilisateur concerné par cette tache via https://jsonplaceholder.typicode.com/users

// const get = (url) => {
//     return new Promise((resolve, reject) => {
//         const xhr = new window.XMLHttpRequest();
//         xhr.onreadystatechange = () => {
//             if (xhr.readyState === 4)
//                 if (xhr.status === 200) resolve(xhr.responseText);
//                 else reject("Une erreur est survenue.");
//         };
//         xhr.open("GET", url);
//         xhr.send();
//     });
// };
// const getPosts = () => {
//     const response = get("https://jsonplaceholder.typicode.com/todos")
//         .then((responseText) => {
//             const todos = JSON.parse(responseText);
//             const todo42 = todos[41];
//             const id = todo42.id;
//             return id;
//             // ici on stocke l'id
//         })
//         // qui est automatiquement rétribué ici 
//         .then((id) => {
//             const responseTodos = get(
//                 `https://jsonplaceholder.typicode.com/todos?id=${id}`
//             ).then((responseText) => {
//                 const result = JSON.parse(responseText);
//                 console.log(result);
//             });
//         })
//         .catch((errorMessage) => {
//             console.error(errorMessage);
//         });
// };

// Ma version raccourcie
const get = (url) => {
    return new Promise((resolve, reject) => {
        const xhr = new window.XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4)
                if (xhr.status === 200) resolve(xhr.responseText);
                else reject("Une erreur est survenue.");
        };
        xhr.open("GET", url);
        xhr.send();
    });
};
const getPosts = () => {
    const response = get("https://jsonplaceholder.typicode.com/todos")
        .then((responseText) => {
            const todos = JSON.parse(responseText);
            const todo42 = todos[41];
            const userId = todo42.userId;
            return userId;
        })
        // on veut récuperer l'email du user rattaché 
        .then((userId) => {
            const responseTodos = get(
                `https://jsonplaceholder.typicode.com/users?id=${userId}`
            ).then((responseText) => {
                const result = JSON.parse(responseText);
                // on met result[0] car result est un array, et on appelle l'index de l'élément, puis son email
                const email = result[0].email;
                console.log(email);
            });
        })
        .catch((errorMessage) => {
            console.error(errorMessage);
        });
};

// CORRECTION EN RACCOURCI en aync/await
//   const getTodos = async () => {
//     const response = await get("https://jsonplaceholder.typicode.com/todos");
//     const todos = JSON.parse(response);
//     console.log(todos[41]);
//     // console.log(todos.filter((todo) => todo.id === 42));
//   };

// CORRECTION EN RACCOURCI en promesses
// const getPosts = () => {
//     const response = get("https://jsonplaceholder.typicode.com/todos")
//         .then((responseText) => {
//         const todos = JSON.parse(responseText);
//         console.log(todos[41]);
//         // ici on stocke l'id
//         })
//         .catch((errorMessage) => {
//         console.error(errorMessage);
//     });
// };

// CORRECTION PARTIE 2 DE L'EXO AVEC DES ASYNC AWAIT 
// const getTodos = async () => {
//     const response = await get("https://jsonplaceholder.typicode.com/todos");
//     const todos = JSON.parse(response);
//     const todo = todos[41];
//     // console.log(todos.filter((todo) => todo.id === 42));
//     const userId = todo.userId;
//     // console.log(userId);
//     const responseUser = await get(
//       `https://jsonplaceholder.typicode.com/users?id=${userId}`
//     );
//     // console.log(responseUser);
//     const parseResponse = JSON.parse(responseUser);
//     const user = parseResponse[0];
//     const email = user.email;
//     console.log(email);
// };

getPosts();