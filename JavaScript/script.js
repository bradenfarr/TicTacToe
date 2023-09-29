const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const box5 = document.querySelector(".box5");
const box6 = document.querySelector(".box6");
const box7 = document.querySelector(".box7");
const box8 = document.querySelector(".box8");
const box9 = document.querySelector(".box9");

const boxes = [box1,box2,box3,box4,box5,box6,box7,box8,box9]

function computerPlay () {
    const randomBox = boxes[Math.floor(Math.random() * boxes.length)]; 
    let i = 0
    while (i < 1) {
        let computerChoice = randomBox
        if (computerChoice.textContent.includes("X")) {
            return computerPlay()            
        } else {
            computerChoice.textContent = "O"
            i++
        }
    }
};

box1.addEventListener('click', function(){
    box1.textContent = "X"
});

box2.addEventListener('click', function(){
    box2.textContent = "X"
});

box3.addEventListener('click', function(){
    box3.textContent = "X"
});

box4.addEventListener('click', function(){
    box4.textContent = "X"
});

box5.addEventListener('click', function(){
    box5.textContent = "X"
});

box6.addEventListener('click', function(){
    box6.textContent = "X"
});

box7.addEventListener('click', function(){
    box7.textContent = "X"
});

box8.addEventListener('click', function(){
    box8.textContent = "X"
});

box9.addEventListener('click', function(){
    computerPlay()
});
