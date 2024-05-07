let nomeLanches = [ "x-buguer", "x-salada", "x-calvo", "x-cebola", "x-bacon", "x-frango", "x-tudo", "x-ratazana", "x-taco"];
let precoLanches = [ 10.0 , 12.0 , 0.0 , 12.0 , 15.0 , 15.0 , 20.0 , 33.0, 15 ];
let ingredientesLanches = ["Pão, maionese, hambúguer, tomate, alface", "Pão, maionese, hambúguer, tomate, alface, pepino, creamcheese, molho verde", "Pão, carne moída, tomate, alface, brócolis", " Pão, maionese, hambúguer, alface, cebola, azeitona, molho barbecue", "Pão, maionese, hambúguer, tomate, alface, bacon, batata palha", "Pão, maionese, hambúguer, tomate, alface, pepino, molho verde, queijo", "Pão, maionese, hambúguer, tomate, alface, queijo, pepino, bacon, molho verde", "Pão, maionese, carne de rato, tomate, alface", "panqueca, maionese, carne de taco, tomate, alface"];

let cardapio = [nomeLanches, precoLanches, ingredientesLanches];

//Aumenta os preços em 10%
cardapio[1] = cardapio[1].map((preco)=> (preco + preco*0.1));

//imprime o cardapio
for(i=0;i<cardapio[0].length;i++){
    console.log(cardapio[0][i] +
         "- R$" + cardapio[1][i].toFixed(2) +
          "- ingredientes: " + cardapio[2][i]);
}
//Desafio
//Criar uma terceira dimensão c/ingredientes de cada lanches
