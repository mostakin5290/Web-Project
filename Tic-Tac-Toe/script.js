let turn = 'O';
let count = 0;
const winner = [
    [0, 1, 2], [3, 4, 5],
    [6, 7, 8], [0, 3, 6],
    [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

let boardArray = new Array(9).fill('E');

function checkWinner() {
    for (let [i0, i1, i2] of winner) {
        if (boardArray[i0] !== 'E' && boardArray[i0] === boardArray[i1] && boardArray[i1] === boardArray[i2]) {
            return true;
        }
    }
    return false;
};

const game = (event) => {
    const element = event.target;
    count++;
    
    if (boardArray[element.id] === 'E') {
        element.innerHTML = turn;
        boardArray[Number(element.id)] = turn;
        
        if (checkWinner()) {
            winnerText.textContent = `winner:${turn}`;
            board.removeEventListener('click', game);
            updatePlayerImages();
            return;
        }
        else if (count == 9) {
            winnerText.textContent = `Game Draw`;
            board.removeEventListener('click',game);
            oImage.style.scale = 0.8;
            xImage.style.scale = 0.8;
            return;
        }
        turn = turn === 'O' ? 'X' : 'O'
        winnerText.innerHTML =`${turn}'s turn`;
        updatePlayerImages();
    }
};

const updatePlayerImages = () => {
    if (turn === 'X') {
        xImage.style.transform = 'scale(1)'; 
        oImage.style.transform = 'scale(0.8)'; 
    } else {
        oImage.style.transform = 'scale(1)'; 
        xImage.style.transform = 'scale(0.8)'; 
    }
};

const xImage = document.getElementById('x-image');
const oImage = document.getElementById('o-image');
const winnerText = document.querySelector(".winnerTxt");
const board = document.querySelector('.board');
board.addEventListener('click', game);

const restartBtn = document.getElementById('restart-btn');
restartBtn.addEventListener('click', ()=>{
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box,value)=>{
        box.innerHTML = '';
        boardArray[value] = 'E';
    });

    xImage.style.transform = 'scale(0.8)';
    oImage.style.transform = 'scale(1)';
    turn = 'O';
    count = 0;
    winnerText.innerHTML =`O's turn`;
    boardArray = new Array(9).fill('E');
    board.addEventListener('click',game);
});