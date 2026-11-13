function accesSalle(estMembre, aInvitation, estBanni) {
  if (estBanni == false) {
    if (estMembre == true || aInvitation == true) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

accesSalle(true, false, false); // true
accesSalle(false, true, false); // true
accesSalle(true, true, true); // false
console.log(accesSalle(true, false, false));
console.log(accesSalle(false, true, false));
console.log(accesSalle(true, true, true));
