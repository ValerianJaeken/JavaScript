let empty = ["", "", "", "", "", "", ""];
let word = ["B", "O", "N", "J", "O", "U", "R"];
let count = 0;
let i = 0;

function guessLetter() {
  while (empty.toString() !== word.toString()) {

    let ask = window.prompt("Insérez une lettre en majuscule").toUpperCase();
    count++;
    for (let x = 0; x < 7; x++) {
      if (word[x] == ask) {
        empty[x] = ask;
        console.log(empty);
      }
    }
  }
}

guessLetter();
console.log("Bravo fucker");
console.log("Vous avez pris " + (count - 1) + " tentatives, déchet");
