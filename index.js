// Exos fonctions 
// fonction 1
const Fonction1 = [1,2]
console.log(Fonction1, "Fin de l'exercice 1")

// Fonction 2

const ChiffresListe = [1,9,8,7,4,5,2,1,3,6,5,4,8,4,8,7];

const PlusGrandChiffre = (chiffres) => (chiffres.length > 0 ? Math.max(...chiffres) : "La liste est vide.");

const resultat = PlusGrandChiffre(ChiffresListe);
console.log("Le plus grand chiffre est :", resultat, "Fin de l'exercice 2");

//fonction 3
 
const Motsavecvoyelle = "anticonstitutionnellement massi jordan mounir";

const retirerVoyelles = (chaine) => chaine.replace(/[aeiouAEIOU]/g, '');

const Sansvoyelles = retirerVoyelles(Motsavecvoyelle);
console.log("Chaîne sans voyelles :", Sansvoyelles, "Fin de l'exercice 3");

//fonction 4 

function trierLettresDansPhrase(phrase) {
    phrase.replace("")
    const phraseTriee = phrase.split('').sort().join('');
    return phraseTriee;
}
const MotATrier = "Anticonstitutionnellement";
const phraseTriee = trierLettresDansPhrase(MotATrier);

console.log("Phrase triée par ordre alphabétique :", phraseTriee, "Fin de l'éxercice 4");

//fonction 5 

//fonction 6

const Personne = ["Massi","Jordan","Mounir"]

//fonction 7

const Motsavecvoyelle2 = "anticonstitutionnellement massi jordan mounir";

const AgrandirVoyelles = (chaine) => chaine.replace(/[aeiou]/g, '');

const Grandevoyelles = AgrandirVoyelles(Motsavecvoyelle);
console.log(chaine.toUpperCase(aeiou), Grandevoyelles, "Fin de l'exercice 3");