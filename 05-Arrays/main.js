let tableau=[1,2,3,4,5,6,7,8,9];
let resultat=0;
for (let i=0; i<tableau.length; i++) {
  resultat = resultat + tableau[i];
  console.log(resultat);
}




let tamere="Global environment ?";
console.log(tamere);

function varEnv () {
  let tamere="Variable environment?";
  console.log(tamere);
}
varEnv(tamere);
