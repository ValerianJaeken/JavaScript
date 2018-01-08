//Exercice : Pair et Impair
let x=0;
while(x<21){
  if(x%2==0){
    console.log(x+" Pair");

  }
  else{
    console.log(x+" Impair");
  }
  x++;
}

//Exercice : Multiplication tables

let y=0;
let z=0;
while(z<11){
  console.log(y);
  y=(y+1)*9;
  z++;
}

//Exercice : assigner des grades
let a=0;
while(a<101){
  if(a<=70 && a>65){
    console.log("Grade D")
  }
  else if(a<=80 && a>70){
    console.log("Grade C")
  }
  else if(a<=90 && a>80){
    console.log("Grade B")
  }
  else if(a>90){
    console.log("Grade A")
  }
  else{
    console.log("Grade F")
  }
  a++;
}

//Exercice : Pyramide

var r = 18;
for (let i = 0; i < r; i++) {
   for (let j=x-1; j>i; j--) {
      document.write("&nbsp&nbsp");
   }
   for (let k=0; k<=(i*2); k++) {
      document.write("*");
   }
   document.write("<br>");
}
for (let i=0; i<2; i++) {
    for (let j=0; j<(r*2)-3; j++) {
        document.write("&nbsp");
    }
    document.write("*$
    <br>");
}
