const container = document.querySelector(".container");

function gridMaker(numOfGrid = 16, containerWidth = 500) {
  for (let i = 0; i < numOfGrid * numOfGrid; i++) {
    let div = document.createElement("div");
    container.style.width = `${containerWidth}px`;
    div.classList.add("square-div");
    div.style.setProperty("--myCellWidth", `${containerWidth / numOfGrid}px`);
    div.style.setProperty("--myCellHeight", `${containerWidth / numOfGrid}px`);
    container.appendChild(div);
  }
}
gridMaker();

const squares = document.querySelectorAll(".square-div");
squares.forEach((square) => {
  square.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "red";
  });
});