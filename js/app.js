// Definie as classes para alugado = 0 e disponivel = 1
let classImage = [
  "dashboard__item__img dashboard__item__img--rented",
  "dashboard__item__img",
];

// Definie as classes para alugado = 0 e disponivel = 1
let classButton = [
  "dashboard__item__button dashboard__item__button--return",
  "dashboard__item__button",
];

function alterarStatus(id) {
  let gameSelecionado = document.getElementById(`game-${id}`);
  let image = gameSelecionado.querySelector("div");
  let button = gameSelecionado.querySelector("a");

  //Verifica a classe da imagem, se está alugado ou disponivel
  if (image.getAttribute("class") == classImage[0]) {
    image.setAttribute("class", classImage[1]);
    button.setAttribute("class", classButton[1]);
    button.text = "Alugar";
  } else {
    image.setAttribute("class", classImage[0]);
    button.setAttribute("class", classButton[0]);
    button.text = "Devolver";
  }

  console.log(button.text);
}
