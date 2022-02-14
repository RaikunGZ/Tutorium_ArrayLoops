// Kassensystem

let arrFixArticle = ["Brot", 1.0, "Käse", "Pizza", 2.0, "Schokolade", 0.5];
let arrPiceArticle = ["Nüsse", 2.99, "Bananen", 1.0]; // Preis/1000g

arrFixArticle.splice(3, 0, 1.5); //nicht sicher

console.log("Fixed: ", arrFixArticle, "Piece: ", arrPiceArticle);

// Kassenbelege

let nNut = 500;
let nBan = 200;

let preisNüsse = (arrPiceArticle[1] / 1000) * nNut;
let preisBananen = (arrPiceArticle[3] / 1000) * nBan;

let Tim = `Tim: \n 2x ${arrFixArticle[2]} ${arrFixArticle[3]} € \n 1x ${
  arrFixArticle[4]
}  ${arrFixArticle[5]} € \n 500g ${arrPiceArticle[0]} ${preisNüsse.toFixed(
  2
)} € \n `;

let Lisa = `Lisa: \n 1x ${arrFixArticle[0]} ${arrFixArticle[1]} € \n 2x ${
  arrFixArticle[6]
} ${arrFixArticle[7]} € \n 200g ${preisBananen.toFixed(2)} ${
  arrPiceArticle[3]
} €  \n `;

nNut = 300;
nBan = 650;

preisNüsse = (arrPiceArticle[1] / 1000) * nNut;
preisBananen = (arrPiceArticle[3] / 1000) * nBan;

let Nico = `Nico: \n 1x ${arrFixArticle[4]}  ${arrFixArticle[5]} € \n 1x ${
  arrFixArticle[2]
} ${arrFixArticle[3]} € \n 300g ${arrPiceArticle[0]} ${preisNüsse.toFixed(
  2
)} € \n 650g ${arrPiceArticle[2]} ${preisBananen.toFixed(2)} €  \n `;

console.log(Tim, "\n", Lisa, "\n", Nico);

// Gewinnspiel

let bill = ["Tim", "Lisa", "Nico"]
"Tim" = [`2x ${arrFixArticle[2]} ${arrFixArticle[3]} €`, `1x ${arrFixArticle[4]}  ${arrFixArticle[5]} €`, `500g ${arrPiceArticle[0]} ${preisNüsse}`];
"Lisa" = [`1x ${arrFixArticle[0]} ${arrFixArticle[1]} €`, `2x ${arrFixArticle[6]} ${arrFixArticle[7]} €`, `200g ${preisBananen} ${arrPiceArticle[3]} €]`];
"Nico" = [`1x ${arrFixArticle[4]}  ${arrFixArticle[5]} €`, `1x ${arrFixArticle[2]} ${arrFixArticle[3]} €`, `300g ${arrPiceArticle[0]} ${preisNüsse} €`, `650g ${arrPiceArticle[2]} ${preisBananen} €`];

if(Nico.includes(Schokolade)){
    console.log(Nico, "bekommt einen 25% Gutschein!")
}else{
    console.log(Tim, Lisa, "bekommen 20% Rabatt.")
}