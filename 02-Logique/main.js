//Langues
let Langues = "derp";
let Message;
switch (Langues) {
  case "fr" :
    Message="Bonjour tout le monde";
    console.log(Message);
  break;
  case "es" :
    Message = "Hola, mundo";
    console.log(Message);
  break;
    case "en" :
    Message = "Hello world";
    console.log(Message);
  break;
  default :
   console.log("Enter either fr, es or en")
  break;
}

//Affichage scores
let score=9001;
let Result;

switch (score){
  case (score>8000) :
    Result="A";
    console.log("Vous avez le rang " + Result);
  break;
  case (score > 2000 && score < 8000) :
    Result="B";
    console.log("Vous avez le rang " + Result);
  break;
  case (score < 2000):
    Result="C";
    console.log("Vous avez le rang " + Result);
  break;
  default :
    console.log("Entrez un chiffre, sombre imbécile!");
  break;
}

//Mettre au pluriel
let Single="miel";
let NumSingle=12;
let Plural;
if(NumSingle>1){
  Plural = Single+"s";
}
else if (NumSingle = 1){
  Plural = Single;
}
else{
  Plural = "Rentrez un chiffre au dessus de 0 svp";
}
console.log(Plural);
