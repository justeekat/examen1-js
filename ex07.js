function appliquerRemise(prix, pourcentage) {
  if (pourcentage != 0) {
    let price = prix * (1 - pourcentage / 100);
    return ajouterTVA(price);
  } else {
    return ajouterTVA(prix);
  }
}

function ajouterTVA(prix) {
  return prix * 1.2;
}

function calculerPrixFinal(prix, pourcentage) {
  return appliquerRemise(prix, pourcentage);
}

calculerPrixFinal(100, 10); // 108
calculerPrixFinal(50, 20); // 48
calculerPrixFinal(200, 0); // 240
console.log(calculerPrixFinal(100, 10));
console.log(calculerPrixFinal(50, 20));
console.log(calculerPrixFinal(200, 0));
