let cancer = document.body;
document.body.className = "bg-olive"; //INSTEAD OF body.classList.Remove("NAME")

console.log(cancer);

let ebola = document.getElementById("first-paragraph");
ebola.classList.remove("bg-lime","gray");
console.log(ebola)

ebola.classList.add("aqua");
console.log(ebola);

let sida =  document.getElementsByClassName("bg-silver");
for(let i=0;i<sida.length;i++){
    sida[i].classList.add("bg-teal");
    sida[i].classList.remove("bg-silver");
}
console.log(sida);
