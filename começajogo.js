function começajogo(){
    let numcartas = 1;
    let verificapar = numcartas%2;
    let cartasjogo = [];
    let cont = 1;
    
    while(numcartas<4 || numcartas> 14 ||verificapar !== 0){
        numcartas = prompt("Com quantas cartas deseja jogar?")
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
    let divcartas = document.querySelector(".CaixaCartas");

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
      
    if(c1.parentNode.classList[0]===c2.parentNode.classList[0]){
    primeiracarta= '';
    segundacarta= '';     
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