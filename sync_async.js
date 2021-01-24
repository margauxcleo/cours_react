// JSON => JavaScript Object Notation 
// un JSON est un objet JS stocké dans un fichier texte de cette façon
// format de fichier de données très utilisé pour échanger des données entre deux API 
// {
//     "nom": "John",
//     "prenom": "Wick"
// }

// on récupère ces données, et on les transforme dans un objet JS manipulable dans un fichier JS

// ------------------------------------------------------

// AJAX => Asynchronous Javascript And XML 
// permet de récupérer des données sans recharger la page 

// Fonction getPosts qui
// 1. recupere le quatrieme utilisateur depuis https://jsonplaceholder.typicode.com/users
// 2. recupere  les taches a faires de cet utilisateur depuis https://jsonplaceholder.typicode.com/todos?userId=[ID]
// 3. renvois les taches au format JSON

//on a retravaillé l'exemple d'AJAX/JSON qui était construit avec des callbacks avec des fonctions async await  

const get = (url) => {
    return new Promise((resolve, reject) => {
      const xhr = new window.XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4)
          if (xhr.status === 200) resolve(xhr.responseText);
          else reject("Ceci est un message d'erreur");
      };
      xhr.open("GET", url);
      xhr.send();
    });
  };
  const getTodos = async () => {
    const response = await get("https://jsonplaceholder.typicode.com/users");
    const users = JSON.parse(response);
    const user = users[3];
    const id = user.id;
    const responseTodos = await get(
      `https://jsonplaceholder.typicode.com/todos?userId=${id}`
    );
    const todos = JSON.parse(responseTodos);
    console.log(todos);
  };