function jouerTour(pointsDeVie, valeur, action) {
  if (action == soigner) {
    return soigner(pointsDeVie, valeur);
  } else if (action == attaquer) {
    return attaquer(pointsDeVie, valeur);
  } else {
    return "Action invalid.";
  }
}

function attaquer(pointsDeVie, valeur) {
  return pointsDeVie - valeur;
}

function soigner(pointsDeVie, valeur) {
  return pointsDeVie + valeur;
}

jouerTour(100, 30, attaquer); // 70
jouerTour(50, 20, soigner); // 70
jouerTour(0, 25, soigner); // 25

console.log(jouerTour(100, 30, attaquer));
console.log(jouerTour(50, 20, soigner));
console.log(jouerTour(0, 25, soigner));
