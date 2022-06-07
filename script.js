// selecting all elements
const selectBox = document.querySelector(".select-box"),
selectXBtn = selectBox.querySelector(".playerX"),
selectYBtn = selectBox.querySelector(".playerY");

window.onload = () =>{ //once window loaded
    selectXBtn.onclick = () =>{
        selectBox.classList.add("hide"); //hide the select box on playerX button clicked
    }
}

