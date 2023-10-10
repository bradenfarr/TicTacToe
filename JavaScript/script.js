const boxElement = document.getElementsByTagName("p");
const reset = document.querySelector(".resetButton");
const result = document.querySelector(".result");
const gameBoard = document.querySelector(".gameBoard")

const boxes = [box1,box2,box3,box4,box5,box6,box7,box8,box9]

function computerPlay () {
    const randomBox = boxes[Math.floor(Math.random() * boxes.length)]; 

    if (randomBox.innerHTML) {
        return computerPlay()            
    } else {
        randomBox.textContent = "O"
        randomBox.classList.add("disableClick")
        checkBoxes()
    }
};

const userPlay = e => { 
    let boxID = e.target.id
    const box = document.getElementById(boxID)
    box.textContent = "X"
    checkBoxes()
    computerPlay()
    box.classList.add("disableClick")
  }

for (let boxes of boxElement) {
    boxes.addEventListener("click", userPlay);
}

reset.addEventListener('click', function(){
    result.textContent = "Click a box to play."
    boxes.forEach((box) => {
        box.textContent = ""
        box.classList.remove("disableClick")
    })
    gameBoard.classList.remove("disableClick")
});

function checkBoxes () {

    if (box1.innerHTML.indexOf('X') > -1 && box2.innerHTML.indexOf('X') > -1 && box3.innerHTML.indexOf('X') > -1){
        playerWin()
    }
    if (box1.innerHTML.indexOf('X') > -1 && box5.innerHTML.indexOf('X') > -1 && box9.innerHTML.indexOf('X') > -1){
        playerWin()
    }
    if (box1.innerHTML.indexOf('X') > -1 && box4.innerHTML.indexOf('X') > -1 && box7.innerHTML.indexOf('X') > -1){
        playerWin()
    }
    if (box2.innerHTML.indexOf('X') > -1 && box5.innerHTML.indexOf('X') > -1 && box8.innerHTML.indexOf('X') > -1){
        playerWin()
    }
    if (box3.innerHTML.indexOf('X') > -1 && box5.innerHTML.indexOf('X') > -1 && box7.innerHTML.indexOf('X') > -1){
        playerWin()
    }
    if (box3.innerHTML.indexOf('X') > -1 && box6.innerHTML.indexOf('X') > -1 && box9.innerHTML.indexOf('X') > -1){
        playerWin()
    }
    if (box4.innerHTML.indexOf('X') > -1 && box5.innerHTML.indexOf('X') > -1 && box6.innerHTML.indexOf('X') > -1){
        playerWin()
    }
    if (box7.innerHTML.indexOf('X') > -1 && box8.innerHTML.indexOf('X') > -1 && box9.innerHTML.indexOf('X') > -1){
        playerWin()
    }

    if (box1.innerHTML.indexOf('O') > -1 && box2.innerHTML.indexOf('O') > -1 && box3.innerHTML.indexOf('O') > -1){
        computerWin()
    }
    if (box1.innerHTML.indexOf('O') > -1 && box5.innerHTML.indexOf('O') > -1 && box9.innerHTML.indexOf('O') > -1){
        computerWin()
    }
    if (box1.innerHTML.indexOf('O') > -1 && box4.innerHTML.indexOf('O') > -1 && box7.innerHTML.indexOf('O') > -1){
        computerWin()
    }
    if (box2.innerHTML.indexOf('O') > -1 && box5.innerHTML.indexOf('O') > -1 && box8.innerHTML.indexOf('O') > -1){
        computerWin()
    }
    if (box3.innerHTML.indexOf('O') > -1 && box5.innerHTML.indexOf('O') > -1 && box7.innerHTML.indexOf('O') > -1){
        computerWin()
    }
    if (box3.innerHTML.indexOf('O') > -1 && box6.innerHTML.indexOf('O') > -1 && box9.innerHTML.indexOf('O') > -1){
        computerWin()
    }
    if (box4.innerHTML.indexOf('O') > -1 && box5.innerHTML.indexOf('O') > -1 && box6.innerHTML.indexOf('O') > -1){
        computerWin()
    }
    if (box7.innerHTML.indexOf('O') > -1 && box8.innerHTML.indexOf('O') > -1 && box9.innerHTML.indexOf('O') > -1){
        computerWin()
    }
    if (box1.innerHTML && box2.innerHTML && box3.innerHTML && box4.innerHTML && box5.innerHTML && box6.innerHTML && box7.innerHTML && box8.innerHTML && box9.innerHTML){
        result.textContent = "Draw!"
        return
    }
};

function playerWin () {
    result.textContent = "You Won!"
    gameBoard.classList.add("disableClick")
}

function computerWin () {
    result.textContent = "You Lost!"
    gameBoard.classList.add("disableClick")
}