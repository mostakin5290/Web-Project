let count = 0;
let leftTime = 60;
let temp = false;
let timeTemp = true;

const start_btn = document.getElementById("start-btn");
const main = document.querySelector(".main");

const score = document.querySelector(".score");
score.innerHTML = `<h1>Score: ${count}</h1>`

const time = document.querySelector(".time");
time.innerHTML = `<h1>Time: ${leftTime}</h1>`




start_btn.addEventListener("click", (event) => {
    event.stopPropagation();
    start_btn.style.display = "none";
    temp = true;

    count = 0;
    leftTime = 60;
    score.innerHTML = `<h1>Score: ${count}</h1>`;
    time.innerHTML = `<h1>Time: ${leftTime}</h1>`;

    setTimeout(() => {
        temp = false;
        time.innerHTML = `<h1>Time's up!</h1>`;
    }, 60000)
    setTimeout(() => {
        start_btn.style.display = "block";
        start_btn.innerHTML = "ReStart"

    }, 62000);
});


function createBubble() {
    const photos = ["./img/1.png", "./img/2.png", "./img/3.png",
        "./img/4.png", "./img/5.png", "./img/6.png","./img/7.png"];

    const bubble = document.createElement("div");
    bubble.className = "bubble";

    const bubbleValue = Math.floor(Math.random() * 6);

    const img = document.createElement("img");
    img.className = "photo";


    if (bubbleValue === 0) {
        img.src = "./img/8.png";
    } else {
        const random = Math.floor(Math.random() * (6 - 1) + 1);
        img.src = photos[random];
    }


    bubble.appendChild(img);

    const mainRect = main.getBoundingClientRect();
    const headRect = document.querySelector(".head").getBoundingClientRect();

    const left = Math.random() * (mainRect.width - 80);
    const top = Math.random() * (mainRect.height - headRect.height - 80);

    bubble.style.left = left + "px";
    bubble.style.top = top + "px";


    bubble.addEventListener("click", (event) => {
        event.stopPropagation();

        if (bubbleValue == 0) {
            count -= 10;
        } else {
            count += 10;
        }
        score.innerHTML = `<h1>Score: ${count}</h1>`;
        bubble.classList.add("grow-animation");
        bubble.addEventListener("animationend", () => {
            bubble.remove();
        });
    });

    main.appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, 800);
}


setInterval(() => {
    if (!temp) {
        return;
    }
    createBubble();
}, 800)

setInterval(() => {
    if (!temp) {
        return;
    }
    else if (leftTime >= 0) {
        time.innerHTML = `<h1>Time: ${leftTime}</h1>`;
        leftTime--;
        timeTemp = true;
    }
}, 1000)

