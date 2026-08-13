// botões
const botoes = document.querySelectorAll("button");

// Para cada botão podemos curtir
botoes.forEach(botao => {
    let curtiu = false;
    botao.addEventListener("click",curtir);


function curtir() {
    let num = botao.querySelector("span");

    num.textContent++;
}
    
});

