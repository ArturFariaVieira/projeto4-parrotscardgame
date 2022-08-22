let numcartas;
let cartasjogo = [];
let cont = 1;
let divcartas;
let nome = prompt("Bem vindo ao Parrots Memory CardGame!\nQual o seu nome, jogador?");    

function começajogo(){
    numcartas = 0;
    cartasjogo = []
    
    let verificapar = numcartas%2;    
    while(numcartas<4 || numcartas> 14 ||verificapar !== 0){
        numcartas = prompt(`Com quantas cartas deseja jogar, ${nome}?`)
        verificapar = numcartas%2;
        if (numcartas<4 || numcartas> 14 || verificapar !== 0){
            alert("favor inserir um número par entre 4 e 14")
        }
    }
    for( i=1; i <= numcartas/2; i++){
        
        let carta = "carta" + i
        cartasjogo.push(carta);
        cartasjogo.push(carta);

    }
    cartasjogo.sort(comparador);
    function comparador() { 
        return Math.random() - 0.5; 
    }
    console.log(cartasjogo);
    divcartas = document.querySelector(".CaixaCartas");

        for(i=0; i<cartasjogo.length; i++){
        let txt = cartasjogo[i]
        divcartas.innerHTML += `<div class = "${txt} Cartas">
        <div class="front-face face">
             <img src ="imgs/${txt}.gif">               
        </div>
        <div class="back-face face" onclick="virarcarta(this)" >
            <img src ="imgs/front.png">
        </div>`


    }
}
let primeiracarta = '';
let segundacarta = '';
let cont2 =0;
function virarcarta(cartaclicada){
    
    
    if(primeiracarta !== '' && segundacarta !==''){
        console.log(primeiracarta);
        console.log(segundacarta);
        
        verificaigual(primeiracarta, segundacarta);
    }
    
    if(primeiracarta=== ''){
        primeiracarta = cartaclicada;
        primeiracarta.classList.add('virada');
    }
    else {segundacarta = cartaclicada;
        segundacarta.classList.add('virada');
        verificaigual(primeiracarta, segundacarta);
    }

   
}
 function verificaigual(c1, c2){ 
    cont2++;
    if(c1.parentNode.classList[0]===c2.parentNode.classList[0]){
    primeiracarta= '';
    segundacarta= '';    
    verificafimjogo(); 
}
    else {
    
    setTimeout(desvira, 1000,c1, c2);
}
   
}
function desvira(a, b){
    let desvira1 =a;
    let desvira2 =b;
    desvira1.classList.remove('virada');
    desvira2.classList.remove('virada');
    primeiracarta= '';
    segundacarta= '';
}
function verificafimjogo(){
    let fim = document.querySelectorAll('.virada');
    console.log(fim.length);
    console.log(numcartas);
    if(fim.length == numcartas){
      let jogarnovamente = prompt(`Parabéns, ${nome}, você venceu o jogo em ${cont2} jogadas e segundos!\nDeseja jogar novamente?`);
      if(jogarnovamente === 'sim'){
        divcartas.innerHTML='';
        começajogo();
          }
    }
}