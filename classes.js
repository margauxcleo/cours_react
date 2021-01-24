let prenom2 = "Jack";
let nom2 = "Brel";
let age = 90;
class Animal {
  constructor(prenom) {
    this.prenom = prenom;
  }
  manger() {
    console.log("Je mange");
  }
  manger(repas) {
    console.log("Je mange mon " + repas);
  }
  static cri() {
    console.log("Je crie");
  }
}
class Chien extends Animal {
  constructor(prenom) {
    super(prenom);
    this.espece = "Chien";
  }
  cri() {
    console.log("wouf");
  }
}
class Chat extends Animal {
  constructor(prenom) {
    super(prenom);
    this.espece = "Chat";
  }
  cri() {
    console.log("miaou");
  }
}
const chien_bob = new Chien("Bob");
console.log(chien_bob);
chien_bob.cri();
chien_bob.manger();
const chat_kitty = new Chat("Kitty");
console.log(chat_kitty);
chat_kitty.cri();