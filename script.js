let turno = "X";
let tablero = ["", "", "", "", "", "", "", "", ""];

const celdas = document.querySelectorAll(".cell");

celdas.forEach(celda => {
    celda.addEventListener("click", () => {
        const index = celda.dataset.index;

        if (tablero[index] === "") {
            tablero[index] = turno;
            celda.textContent = turno;
            turno = turno === "X" ? "O" : "X";
        }
    });
});

function reiniciar() {
    tablero = ["", "", "", "", "", "", "", "", ""];
    celdas.forEach(c => c.textContent = "");
    turno = "X";
}
