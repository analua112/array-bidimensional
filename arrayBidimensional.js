let nomeLanches = [ "x-buguer", "x-salada", "x-calvo", "x-cebola", "x-bacon", "x-frango", "x-tudo", "x-ratazana", "x-taco"];
let precoLanches = [ 10.0 , 12.0 , 0.0 , 12.0 , 15.0 , 15.0 , 20.0 , 33.0, 15 ];
let ingredientesLanches = ["pao", "maionese", "hambúguer", ]

let cardapio = [nomeLanches, precoLanches, ingredientesLanches];

for(i=0;i<cardapio[0].length;i++){
console.log(cardapio[0][i] + "- R$" + cardapio[1][i] + "- ingredientes" + cardapio[2][i]);
}

//Desafio
//Criar uma terceira dimensão c/ingredientes de cada lanches