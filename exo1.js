//declaration de la fonction
function calculerAireRectangle(longueur, largeur) {
    var aire=longueur*largeur;
    return aire;
}
//declaration d'une variable resulta pour afficher la fonction
var resultat=calculerAireRectangle;
//Affichage de l'aire
// ca affiche 50m
console.log("l'aire du rectangle est : "+resultat(10,5)+" m2");