let selectedValue = null;
let selectedCell = null;

const inputButtons = document.querySelectorAll(".input-btn");
const cells = document.querySelectorAll(".board-cell");
const cleanBtn = document.querySelector(".input-clean-everything");

const clickSound = new Audio("./audio/click.mp3");
clickSound.volume = 1;

function playClick() {
  const sound = clickSound.cloneNode();
  sound.volume = 1;
  sound.play().catch(() => {});
}

/* INPUTS */
inputButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    playClick();

    inputButtons.forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");

    selectedValue = btn.dataset.value;
  });
});

/* GRID */
cells.forEach(cell => {
  cell.addEventListener("click", () => {

    if (!selectedValue) return;

    playClick();

    cells.forEach(c => c.classList.remove("selected"));
    cell.classList.add("selected");

    const text = cell.querySelector("h4");

    if (selectedValue === "delete") {
      text.textContent = "";
    } else {
      text.textContent = selectedValue;
    }
  });
});

/* CLEAN */
cleanBtn.addEventListener("click", () => {
  playClick();

  cells.forEach(cell => {
    cell.querySelector("h4").textContent = "";
    cell.classList.remove("selected");
  });

  inputButtons.forEach(b => b.classList.remove("selected"));

  selectedValue = null;
  selectedCell = null;
});
