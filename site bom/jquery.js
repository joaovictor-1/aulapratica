let botao= document.querySelector("#botao");
botao.style.background= "blue";
let estaQuebrado=false;
let contaCliques=0;

botao.addEventListener("mouseout", e =>{
    if(estaQuebrado===false)
      botao.style.background="blue";
     botao.style.color="white"; });

botao.addEventListener("mouseover", e =>{
    if(estaQuebrado===false)
    botao.style.background="green";});

botao.addEventListener("click", e =>{

    contaCliques++;

    if(contaCliques>=2){
        botao.style.background="red";
        botao.innerHTML= "oiii mae Boa noite <3";
        estaQuebrado=true;}
    
    
    })
    


window.alert('Oii')
window.prompt('Qual e seu nome?')













