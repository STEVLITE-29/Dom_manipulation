// let quant = document.querySelectorAll(".quantity");
// let add = document.querySelectorAll(".add");

// add.forEach((button) => {
//     button.addEventListener('click', addQuant);
// });

// function addQuant() {
//     for
//     quant.innerText = parseInt(quant.innerText) + 1;
// }

let addButtons = document.querySelectorAll(".add");
let quants = document.querySelectorAll(".quant");

addButtons.forEach((button) => {
  button.addEventListener('click', addQuant);
});

function addQuant() {
    quants.forEach((quant) => {
        quant.innerText = parseInt(quant.innerText) + 1;
    });
}
