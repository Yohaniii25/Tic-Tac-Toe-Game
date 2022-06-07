//selecting all required elements
const selectBox = document.querySelector(".select-box"),
selectBtnX = selectBox.querySelector(".options .playerX"),
selectBtnO = selectBox.querySelector(".options .playerO"),
playBoard = document.querySelector(".play-board"),
players = document.querySelector(".players"),
allBox = document.querySelectorAll("section span");

window.onload = ()=>{ //once window loaded
    for (let i = 0; i < allBox.length; i++) { //add onclick attribute in all available span
       allBox[i].setAttribute("onclick", "clickedBox(this)");
    }
}
selectBtnX.onclick = ()=>{
    selectBox.classList.add("hide"); //hide select box
    playBoard.classList.add("show"); //show the playboard section
}

selectBtnO.onclick = ()=>{ 
    selectBox.classList.add("hide"); //hide select box
    playBoard.classList.add("show"); //show the playboard section
    players.setAttribute("class", "players active player"); //set class attribute in players with players active player values
}


let playerXIcon = "fas fa-times"; //class name of fontawesome cross icon
let playerOIcon = "fas fa-circle"; //class name of fontawesome circle icon

//user click function
function clickedBox(element) {
    if (players.classList.contains("player")) { // if players element has contains .player
        element.innerHTML = `<i class="${playerOIcon}"></i>`;
        players.classList.add("active");
        //adding cross icon tag inside user clicked element
    } else {
        element.innerHTML = `<i class="${playerXIcon}"></i>`;
        players.classList.add("active");
    }; //adding cross icon tag inside user clicked element
}
