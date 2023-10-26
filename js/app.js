// VERSÃO OTIMIZADA
// Atualizada em 26.10.2023

function alterarStatus(id) {
  let gameSelecionado = document.getElementById(`game-${id}`);
  let image = gameSelecionado.querySelector("div");
  let button = gameSelecionado.querySelector("a");

  //Verifica se o jogo está alugado
  let isAlugado = image.classList.contains("dashboard__item__img--rented");

  if (isAlugado) {
    image.classList.remove("dashboard__item__img--rented");
    button.classList.remove("dashboard__item__button--return");
    button.textContent = "Alugar";
  } else {
    image.classList.add("dashboard__item__img--rented");
    button.classList.add("dashboard__item__button--return");
    button.textContent = "Devolver";
  }
}

// ## Versão antiga ##

// // Definie as classes para alugado = 0 e disponivel = 1
// let classImage = [
//   "dashboard__item__img dashboard__item__img--rented",
//   "dashboard__item__img",
// ];

// // Definie as classes para alugado = 0 e disponivel = 1
// let classButton = [
//   "dashboard__item__button dashboard__item__button--return",
//   "dashboard__item__button",
// ];

// function alterarStatus(id) {
//   let gameSelecionado = document.getElementById(`game-${id}`);
//   let image = gameSelecionado.querySelector("div");
//   let button = gameSelecionado.querySelector("a");

//   //Verifica a classe da imagem, se está alugado ou disponivel
//   if (image.getAttribute("class") == classImage[0]) {
//     image.setAttribute("class", classImage[1]);
//     button.setAttribute("class", classButton[1]);
//     button.text = "Alugar";
//   } else {
//     image.setAttribute("class", classImage[0]);
//     button.setAttribute("class", classButton[0]);
//     button.text = "Devolver";
//   }
// }
