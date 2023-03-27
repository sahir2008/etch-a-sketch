function divMaker(numOfDivs, optionalContainer) {
  for (let i = 0; i < numOfDivs; i++) {
    let div = document.createElement("div");
    div.classList.add("square-div")
    document.body.appendChild(div);
    if (optionalContainer) {
      optionalContainer.appendChild(div);
    }
  }
}
const container = document.querySelector(".container");
divMaker(500, container);


// const squares = document.querySelectorAll(".square-div");
// squares.forEach(square => {
//     square.addEventListener("mouseover", (e)=>{
//         e.target.style.backgroundColor = "blue"
//     })
// })