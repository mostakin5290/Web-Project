let userScore = 0;
let computerScore = 0;

const userImages = ["./img/stonePlayer.png", "./img/paperPlayer.png", "./img/scissorPlayer.png"];
const computerImages = ["./img/stoneComputer.png", "./img/paperComputer.png", "./img/scissorComputer.png"];

const choice = document.querySelectorAll('.choice');
const GameStatus = document.querySelector('.gameStatus h1');
const pScore = document.querySelector('.pScore');
const cScore = document.querySelector('.cScore');
const userPhoto = document.querySelector('.userPhoto img');
const computerPhoto = document.querySelector('.computerPhoto img');


const computerChoice = () => {
    const option = ['rock', 'paper', 'scissor'];
    let randomOption = Math.floor(Math.random() * 3);
    computerPhoto.src = computerImages[randomOption];
    return option[randomOption];
};

const showWinner = (userWin) => {
    if (userWin) {
        GameStatus.innerText = 'You Win';
        GameStatus.style.color = 'green';
        userScore += 1;
        pScore.innerText = userScore;
    }
    else {
        GameStatus.innerText = 'You Lost!';
        GameStatus.style.color = 'red';
        computerScore += 1;
        cScore.innerText = computerScore;
    }
};

const play = (user) => {
    userPhoto.src = "./img/stonePlayer.png";
    computerPhoto.src = "./img/stoneComputer.png";

    userPhoto.classList.add('shake');
    computerPhoto.classList.add('shake');

    setTimeout(() => {
        userPhoto.classList.remove('shake');
        computerPhoto.classList.remove('shake');

        const option = ['rock', 'paper', 'scissor'];
        const userIndex = option.indexOf(user);
        userPhoto.src = userImages[userIndex];
        const computer = computerChoice();

        if (user === computer) {
            GameStatus.innerText = "It a Draw!";
            GameStatus.style.color = 'black';
        }
        else {
            let userWin = true;
            if (user === 'rock') {
                userWin = computer === 'scissor' ? true : false;
            }
            else if (user === 'paper') {
                userWin = computer === 'scissor' ? false : true;
            }
            else {
                userWin = computer === 'rock' ? false : true;
            }
            showWinner(userWin);
        }
    }, 1000);
};

choice.forEach((choice) => {
    choice.addEventListener('click', () => {
        const user = choice.id;
        play(user);
    })
});



const restart = document.querySelector('.restartButton button');
restart.addEventListener('click', () => {
    userScore = 0;
    computerScore = 0;

    pScore.innerText = userScore;
    cScore.innerText = computerScore;

    GameStatus.innerText = "Chose an Option";
    GameStatus.style.color = "#2980b9"

    userPhoto.src = userImages[0];
    computerPhoto.src = computerImages[0];
});

const modeToggle = document.querySelector('#modeToggle');
modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains("dark-mode")) {
        modeToggle.classList.remove("fa-moon");
        modeToggle.classList.add("fa-sun");
        modeToggle.style.color = 'white'
    } else {
        modeToggle.classList.remove("fa-sun");
        modeToggle.classList.add("fa-moon");
        modeToggle.style.color = 'black'

    }


    // dark
    const mainElement = document.querySelector('.main');
    mainElement.classList.toggle('dark-mode');
    const scoreElements = document.querySelectorAll('.pScore, .cScore');
    scoreElements.forEach(element => {
        element.classList.toggle('dark-mode');
    });
    const gameStatus = document.querySelector('.gameStatus h1');
    gameStatus.classList.toggle('dark-mode');
    const gamePhotos = document.querySelectorAll('.gamePhoto img');
    gamePhotos.forEach(img => img.classList.toggle('dark-mode'));
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => btn.classList.toggle('dark-mode'));
});