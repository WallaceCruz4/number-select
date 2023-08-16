const botao1 = document.getElementById('numero1');
const botao2 = document.getElementById('numero2');
const botao3 = document.getElementById('numero3');
const botao4 = document.getElementById('numero4');
const botao5 = document.getElementById('numero5');
const btn = document.getElementById('btn');

const numeros = [botao1, botao2, botao3, botao4, botao5];
let conteudoDoClique = '';

const frase = document.getElementById('frase')

numeros.forEach(botao => {
  botao.addEventListener('click', () => {
    conteudoDoClique = botao.textContent;
    console.log(conteudoDoClique);
  });
});

btn.addEventListener('click', () => {
  if (conteudoDoClique) {
    frase.textContent = (`Parabéns! O número selecionado foi ${conteudoDoClique} de ${numeros.length}`);
  } else {
    frase.textContent = ('Nenhum número foi selecionado ainda.');
  }
});
