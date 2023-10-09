const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const box5 = document.querySelector(".box5");
const box6 = document.querySelector(".box6");
const box7 = document.querySelector(".box7");
const box8 = document.querySelector(".box8");
const box9 = document.querySelector(".box9");
const reset = document.querySelector(".reset");
const result = document.querySelector(".result");
const gameBoard = document.querySelector(".gameBoard")

const boxes = [box1,box2,box3,box4,box5,box6,box7,box8,box9]
const RECHARGE_TIME = 1500;

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

box1.addEventListener('click', function(){
    box1.textContent = "X"
    checkBoxes()
    computerPlay()
    box1.classList.add("disableClick")
});

box2.addEventListener('click', function(){
    box2.textContent = "X"
    checkBoxes()
    computerPlay()
    box2.classList.add("disableClick")
});

box3.addEventListener('click', function(){
    box3.textContent = "X"
    checkBoxes()
    computerPlay()
    box3.classList.add("disableClick")
});

box4.addEventListener('click', function(){
    box4.textContent = "X"
    checkBoxes()
    computerPlay()
    box4.classList.add("disableClick")
});

box5.addEventListener('click', function(){
    box5.textContent = "X"
    checkBoxes()
    computerPlay()
    box5.classList.add("disableClick")
});

box6.addEventListener('click', function(){
    box6.textContent = "X"
    checkBoxes()
    computerPlay()
    box6.classList.add("disableClick")
});

box7.addEventListener('click', function(){
    box7.textContent = "X"
    checkBoxes()
    computerPlay()
    box7.classList.add("disableClick")
});

box8.addEventListener('click', function(){
    box8.textContent = "X"
    checkBoxes()
    computerPlay()
    box8.classList.add("disableClick")
});

box9.addEventListener('click', function(){
    box9.textContent = "X"
    checkBoxes()
    computerPlay()
    box9.classList.add("disableClick")
});

reset.addEventListener('click', function(){
    result.textContent = "Click a picture to play."
    boxes.forEach((box) => {
        box.textContent = ""
        box.classList.remove("disableClick")
    })
    gameBoard.classList.remove("disableClick")
});

function checkBoxes () {
    check1 = box1.innerHTML
    check2 = box2.innerHTML
    check3 = box3.innerHTML
    check4 = box4.innerHTML
    check5 = box5.innerHTML
    check6 = box6.innerHTML
    check7 = box7.innerHTML
    check8 = box8.innerHTML
    check9 = box9.innerHTML

    if (check1.indexOf('X') > -1 && check2.indexOf('X') > -1 && check3.indexOf('X') > -1){
        playerWin()
    }
    if (check1.indexOf('X') > -1 && check5.indexOf('X') > -1 && check9.indexOf('X') > -1){
        playerWin()
    }
    if (check1.indexOf('X') > -1 && check4.indexOf('X') > -1 && check7.indexOf('X') > -1){
        playerWin()
    }
    if (check2.indexOf('X') > -1 && check5.indexOf('X') > -1 && check8.indexOf('X') > -1){
        playerWin()
    }
    if (check3.indexOf('X') > -1 && check5.indexOf('X') > -1 && check7.indexOf('X') > -1){
        playerWin()
    }
    if (check3.indexOf('X') > -1 && check6.indexOf('X') > -1 && check9.indexOf('X') > -1){
        playerWin()
    }
    if (check4.indexOf('X') > -1 && check5.indexOf('X') > -1 && check6.indexOf('X') > -1){
        playerWin()
    }
    if (check7.indexOf('X') > -1 && check8.indexOf('X') > -1 && check9.indexOf('X') > -1){
        playerWin()
    }

    if (check1.indexOf('O') > -1 && check2.indexOf('O') > -1 && check3.indexOf('O') > -1){
        computerWin()
    }
    if (check1.indexOf('O') > -1 && check5.indexOf('O') > -1 && check9.indexOf('O') > -1){
        computerWin()
    }
    if (check1.indexOf('O') > -1 && check4.indexOf('O') > -1 && check7.indexOf('O') > -1){
        computerWin()
    }
    if (check2.indexOf('O') > -1 && check5.indexOf('O') > -1 && check8.indexOf('O') > -1){
        computerWin()
    }
    if (check3.indexOf('O') > -1 && check5.indexOf('O') > -1 && check7.indexOf('O') > -1){
        computerWin()
    }
    if (check3.indexOf('O') > -1 && check6.indexOf('O') > -1 && check9.indexOf('O') > -1){
        computerWin()
    }
    if (check4.indexOf('O') > -1 && check5.indexOf('O') > -1 && check6.indexOf('O') > -1){
        computerWin()
    }
    if (check7.indexOf('O') > -1 && check8.indexOf('O') > -1 && check9.indexOf('O') > -1){
        computerWin()
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