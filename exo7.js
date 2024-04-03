//declaration du tableau Etudiants
var Etudiants=["Mouhamed","Ousseynou","Fatou","Marieme","Malick"]
//Utilisons une seule methodde pour ajouter et supprimer un ou plusieurs etudiants au debut du tableau
Etudiants.splice(0,1)
console.log(Etudiants)//ca supprime le 1er etudiant et on aura ["Ousseynou","Fatou","Marieme","Malick"]
Etudiants.splice(0,0,"Mamadou Lamine")
console.log(Etudiants)//ca ajoute un etudiant au debut du tableau et on aura ["Mamadou Lamine","Ousseynou","Fatou","Marieme","Malick"]