
let minVal = 20;
let maxVal = 80;
function rRand(){
  let random =  Math.floor(Math.random()*(maxVal-minVal)+1+minVal);
  return random;
}
let randomF = rRand();

function argument(){
  let plus = "C'est plus";
  let moins = "C'est moins";
  let nbTry = 1;
  let juste = "BRAVO LOL ARE YOU A WIZARD?,T'AS CHATTé EN "+ nbTry +" COUPS";
  let cancer = prompt("Tu pe antrait 1 numhereau antr 20 est 80 stp xdfdp ");
    nbTry ++;
    if(cancer !== null){ // THIS CONDITION IS TO LEAVE THE LOOP WHEN YOU CLICK ON CANCEL ON THE PROMPT

        if(cancer > randomF){
          alert(moins)
          return argument()
        }
        else if(cancer > maxVal || cancer < minVal){
          alert("ENTRE "+ minVal + " ET " + maxVal + " PETIT CON")
          return argument()
        }
        else if(cancer < randomF){
          alert(plus)
          return argument()
        }
        else if(isNaN(cancer)){
          alert("ON T'A DEMAND2 DE RENTRER UN CHIFFRE PETIT MALIN")
          argument()
        }
        else if(cancer == randomF){
          alert("BRAVO LOL ARE YOU A WIZARD?,T4AS CHATT2 EN "+ nbTry +" COUPS")
        }
    }
}

argument();
