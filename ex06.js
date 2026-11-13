function estBissextile(annee) {
  if (annee % 4 == 0) {
    if (annee % 100 > 0 || annee % 400 == 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

estBissextile(2024); // true
estBissextile(1900); // false
estBissextile(2000); // true
console.log(estBissextile(2024));
console.log(estBissextile(1900));
console.log(estBissextile(2000));
