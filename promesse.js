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

//on a retravaillé l'exemple d'AJAX/JSON qui était construit avec des callbacks avec des promesses.

const get = (url) => {
    return new Promise((resolve, reject) => {
      const xhr = new window.XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4)
          if (xhr.status === 200) resolve(xhr.responseText);
          else reject("Une erreur est survenue");
      };
      xhr.open("GET", url);
      xhr.send();
    });
  };
  const getTodos = () => {
    const response = get("https://jsonplaceholder.typicode.com/users")
      .then((responseText) => {
        const users = JSON.parse(responseText);
        const user4 = users[3];
        const id = user4.id;
        return id;
        // ici on stocke l'id
      })
      // qui est automatiquement rétribué ici 
      .then((id) => {
        const responseTodos = get(
          `https://jsonplaceholder.typicode.com/todos?userId=${id}`
        ).then((responseText) => {
          const result = JSON.parse(responseText);
          console.log(result);
        });
      })
      .catch((errorMessage) => {
        console.error(errorMessage);
      });
  };