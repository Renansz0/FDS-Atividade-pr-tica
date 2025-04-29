let botao = document.querySelector("#btn");
let mensagem = document.querySelector("#mensagemP");

botao.addEventListener("click", e=>{
    mensagem.style.fontSize = "2rem";
    mensagem.style.fontFamily = '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif';
    mensagem.innerHTML = "Bem-vindo ao site!";

});