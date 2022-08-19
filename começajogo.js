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

    console.log(divcartas);

    for(i=0; i<cartasjogo.length; i++){
        let txt = cartasjogo[i]
        divcartas.innerHTML += `<div class = "${txt} Cartas" onclick="virarcarta()">
        <img src ="imgs/front.png">
                </div>`;


    }
}

