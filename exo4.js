//creation d'une classe Personne avec une methode Presentation
class Personne {
    constructor(nom,age) {
        this.nom = nom;
        this.age = age;
    }

    Presentation() {
        console.log("Bonjour je m'appelle " + this.nom, " et j'ai " + this.age );
    }
}
//declaration de la personne1
var personne1 = new Personne("Lamine", 25);
personne1.Presentation();