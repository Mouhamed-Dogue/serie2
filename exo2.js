// declaration de la fonction celsiusVersFahrenheit
function celsiusVersFahrenheit(degreCelsius){
    var tempFahrenheit=(degreCelsius*9/5)+32
    return tempFahrenheit
}
//declaration d'une variable resultat pour afficher la fonction
var resultat=celsiusVersFahrenheit;
//Affichage de la temperature en fahrenheit
// ca affiche 86f
console.log("la temperature en fahrenheit est : "+resultat(30)+" f")