const voltar = document.getElementById("esq");
const proximo = document.getElementById("dir");
const image = document.getElementById("img");
const seletor = document.getElementById("seletor");
const body = document.querySelector("body");
const botoes = document.querySelector("#botoes");
const titulo = document.getElementsByTagName("h1")[0];

const dark = "dark";
var index = 1;

function prox() {
  index++;
  if (index > 8) {
    index = 1;
  }
  image.style.backgroundImage = `url('../img/${index}.jpeg')`;
}

function volt() {
  index--;
  if (index < 1) {
    index = 8;
  }
  image.style.backgroundImage = `url('../img/${index}.jpeg')`;
}

function alternar() {
  body.classList.toggle(dark);
  seletor.classList.toggle(dark);
  botoes.classList.toggle(dark);

  if (body.classList.contains(dark)) {
    seletor.setAttribute("src", "../img/icon/sol.png");
    titulo.innerText = "Modo escuro ativo";
    return;
  }
  seletor.setAttribute("src", "../img/icon/lua.png");
  titulo.innerText = "Modo claro ativo";
}

seletor.addEventListener("click", alternar);
proximo.addEventListener("click", prox);
voltar.addEventListener("click", volt);
