function accesManege(taille, age) {
  if (taille >= 120 && age >= 8) {
    return true;
  } else {
    return false;
  }
}

accesManege(130, 10); // true
accesManege(130, 7); // false
accesManege(120, 8); // true
console.log(accesManege(130, 10));
console.log(accesManege(130, 7));
console.log(accesManege(120, 8));
