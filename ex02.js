function formaterDuree(minutes) {
  if (minutes >= 60) {
    let min = minutes % 60;
    let h = Math.floor(minutes / 60);
    return `${h}h${min}min.`;
  } else {
    return `${minutes}min.`;
  }
}

// formaterDuree(135); // "2h15min"
// formaterDuree(60); // "1h0min"
// formaterDuree(45); // "0h45min"
console.log(formaterDuree(135));
console.log(formaterDuree(60));
console.log(formaterDuree(45));
