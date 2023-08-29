const campo1 = document.querySelector("#campo1");
const campo2 = document.querySelector("#campo2");
const seletor =document.querySelector("#operaçao");
const igual = document.querySelector("#igual");
let resposta = document.querySelector("#resposta")

seletor.addEventListener9("change", calcular);
campo1.addEventListener("keydown", calcular);
campo2.addEventListener("keyup", calcular);
function calcular  (){

    if (campo1.value!=== ''&& campo2.value=== '')
    {;

    }


    const valor1= perseInt (campo1, value);
    const valor2= perseInt (campo2, value);
    const operaçao= seletor.value;
    if(operaçao==="somar")
    resposta.innerHtml= valor1+valor2;
    if(operacao==="subtrair")
    resposta.innerHtml= valor1+valor2;
    if(operacao==="multiplicar")
    resposta.innerHtml= valor1+valor2;
    if(operacao==="dividir")
    resposta.innerHtml= valor1+valor2;
    



}