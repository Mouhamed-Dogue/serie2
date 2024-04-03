// declaration de la classe mere Personne
class Personne {
    constructor(nom, prenom, age) {
      this.nom = nom;
      this.prenom = prenom;
      this.age = age;
    }
  
    presentation() {
      console.log("Mon prenom est " + this.prenom +" mon nom est " + this.nom + " et jai " + this.age + " ans.");
    }
  }
  
  // declaration de la classe enfant Etudiants
  class Etudiants extends Personne {
    constructor(nom, prenom, age, classe) {
      //heritage de la classe mere Personne  
      super(nom, prenom, age);
      this.classe = classe;
    }
  
    presentationEtudiants() {
      console.log("Mon prenom est " + this.prenom +" mon nom est " + this.nom + " et jai " + this.age + " ans" + " je fais " + this.classe);
    }
}
  
  // Instanciation de l'objet etudiant
  var etudiant1 = new Etudiants("Dogue", "Mouhamed", 21, "licence3");
  etudiant1.presentationEtudiants()// affiche Mon prenom est Mouhamed mon nom est Dogue et jai 21 ans je fais la licence3
  var etudiant2 = new Etudiants("Dogue", "Papi", 25, "Master 2");
  etudiant2.presentationEtudiants()//ca affiche Mon prenom est Papi mon nom est Dogue et jai 25 ans je fais le master 2