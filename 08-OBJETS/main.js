//EXERCICE 1

let character = {
  name : "Edwin McSausage",
  age : 29,
  items_to_give : ["Sausage","Tacos","Tricerasloth"]
}

for(let prop in character){
  console.log(prop);
  console.log(character[prop]);
}

function giveItem(){
  let donner= Math.floor(Math.random()*3);
  console.log(character.name + " vous donne "+character["items_to_give"][donner]+"!!");
}
giveItem();

//EXERCICE 2

let forSale = [
    {
    title:"Bacon Sword",
    physic:27,
    magic:5,
    minLevel:15,
    available:true
  },
    {
    title : "Lettuce shield",
    physic:7,
    magic:15,
    minLevel:10,
    available:false
  },
    {
    title : "Tacos Staff",
    physic:5,
    magic:25,
    minLevel:15,
    available:true
  },
    {
    title : "Pizza shield",
    physic:27,
    magic:25,
    minLevel:15,
    available:true
  }
]


function showItems(){
  for(let x=0;x<forSale.length;x++){
    console.log("Here's what I have to offer : "+forSale[x].title)
  }
}
showItems();

function trueItems(){
    for(let x=0;x<forSale.length;x++){
      if(forSale[x].available==true){
      console.log(forSale[x].title+" is available")
      }
      else{
        console.log(forSale[x].title+" is out of stock")
      }
    }
  }

trueItems();

function levelItems(){
  for(let x=0;x<forSale.length;x++){
    if(forSale[x].minLevel<=10){
      console.log(forSale[x].title+" can be equipped at level 10!");
    }
    else{
      console.log(forSale[x].title+" can be equipped at level 15!");
    }
  }
}

levelItems();

//EXERCICE 3
