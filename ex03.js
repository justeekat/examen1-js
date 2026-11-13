function comparerScores(score1, score2) {
  if (score1 > score2) {
    return "Joueur 1 gagne !";
  } else if (score2 > score1) {
    return "Joueur 2 gagne !";
  } else {
    return "Égalité !";
  }
}

comparerScores(12, 8); // "Joueur 1 gagne"
comparerScores(3, 7); // "Joueur 2 gagne"
comparerScores(5, 5); // "Égalité"
console.log(comparerScores(12, 8));
console.log(comparerScores(3, 7));
console.log(comparerScores(5, 5));
