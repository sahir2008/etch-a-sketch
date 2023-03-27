const container = document.querySelector(".container");
const fragment = document.createDocumentFragment();

function hoverEffect() {
  const squares = document.querySelectorAll(".square-div");
  squares.forEach((square) => {
    square.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "red";
    });
  });
}

function gridMaker(numOfGrid, containerWidth = 500) {
  for (let i = 0; i < numOfGrid * numOfGrid; i++) {
    let div = document.createElement("div");
    container.style.width = `${containerWidth}px`;
    div.classList.add("square-div");
    div.style.setProperty("--myCellWidth", `${containerWidth / numOfGrid}px`);
    div.style.setProperty("--myCellHeight", `${containerWidth / numOfGrid}px`);
    fragment.appendChild(div);
  }
  container.appendChild(fragment);
  hoverEffect();
}
let userSelection =16;

function handleClick() {
  let getDataFromUser = prompt("Enter A number from 1 to 100");
  userSelection = parseInt(getDataFromUser);
  if (!isNaN(userSelection) && userSelection >= 1 && userSelection <= 100) {
    // Clear the container before creating a new grid
    container.innerHTML = "";
    gridMaker(userSelection);
  } else {
    alert("Please enter a valid number between 1 and 100.");
  }
}


gridMaker(userSelection);