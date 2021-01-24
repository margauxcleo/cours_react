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

// on créé la fonction get, qui sera stockée dans la variable get
// on donne à cette fonction 3 paramètres 
// url qui va être notre url
// success qui va correspondre à la fonction callback en cas de succès
// error qui va correspondre à la fonction callback en cas d'échec 
const get = (url, success, error) => {
    // on utilise la méthode XMLHttpRequest() pour créer une nouvelle requête AJAX
    const xhr = new window.XMLHttpRequest();
    // la méthode onreadystatechange peut prendre plusieurs paramètres
    // Un EventHandler qui réagit aux changements de readyState. Le callback est appelé dans le contexte du thread de rendu. La propriété XMLHttpRequest.onreadystatechange  contient le gestionnaire d'évènement appelé lorsque l'évènement readystatechange est déclenché, soit chaque fois que la propriété readyState de XMLHttpRequest est modifiée.
    xhr.onreadystatechange = () => {
        // readyState renvoi l'état dans lequel se trouve un client XMLHttpRequest.
        // peut avoir différentes valeurs, chacune correspondant à un état 
        // ici 4 = DONE 
      if (xhr.readyState === 4)
        // La propriété en lecture seule XMLHttpRequest.status renvoie le code d'état HTTP numérique de la réponse de XMLHttpRequest.
        // Avant que la demande ne se termine, la valeur du statut est 0. Les navigateurs signalent également un statut de 0 en cas d'erreurs XMLHttpRequest.
        // 200 = Successful responses
        if (xhr.status === 200) success(xhr.responseText);
        // ici on définit la callback en cas d'échec
        else error("Une erreur est survenue");
    };
    // La méthode open() de XMLHttpRequest instancie une nouvelle requête ou réinitialise un déjà existante.
    // XMLHttpRequest.open(method, url)
    // ici, la méthode est GET car on va chercher des infos dans un JSON 
    xhr.open("GET", url);
    // La méthode  XMLHttpRequest send() envoie la requête au serveur.  Si la requête est asynchrone (elle l'est par défaut), la méthode envoie un retour dés que la requête est partie et le résultat est intégré en utilisant les évènements.En cas de requête synchrone, elle ne renvoie rien tant que la réponse n'est pas retournée.
    xhr.send();
  };
  const getTodos = () => {
      // on précise le param url
    const response = get(
      "https://jsonplaceholder.typicode.com/users",
      // on précise le param success donc la fonction callback success
      (responseText) => {
        const users = JSON.parse(responseText);
        const user4 = users[3];
        const id = user4.id;
        // on précise le param url
        const responseTodos = get(
          `https://jsonplaceholder.typicode.com/todos?userId=${id}`,
          // on précise le param success donc la fonction callback success
          (todosText) => {
            const todos = JSON.parse(todosText);
            console.log(todos);
          },
          // on précise le param error donc la fonction callback error
          (errorMessage) => {
            console.error(errorMessage);
          }
        );
      },
      // on précise le param error donc la fonction callback error
      (errorMessage) => {
        console.error(errorMessage);
      }
    );
  };
  getTodos();

