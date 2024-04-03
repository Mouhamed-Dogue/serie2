// declaration de notre tableaux Etudiants
var Etudiants=["Mouhamed","Ousseynou","Fatou","Marieme","Malick"]
//Utilisons une seule methodde pour ajouter et supprimer un ou plusieurs etudiants dans le tableau
Etudiants.splice(0,1)
//ca supprime le 1er etudiant et on aura ["Ousseynou","Fatou","Marieme","Malick"]
console.log(Etudiants)
//ca ajoute un etudiant au niveau de la quatrime place du tableau et on aura ["Ousseynou","Fatou","Marieme","Balde","Malick"]
Etudiants.splice(3,0,"Balde")
console.log(Etudiants)
