const homeBtn = document.querySelector('#homeBtn');
const TotalActivityBtn = document.querySelector('#TotalActivityBtn');
const mindMapBtn = document.querySelector('#mindMapBtn');

const homePart = document.querySelector('.home-part');
const TotalActivityPart = document.querySelector('.TotalActivity');
const mindMapPart = document.querySelector('.mindMap-part');


const randomData = [
    { title: "Product 1", description: "This is a description for Product 1." },
    { title: "Product 2", description: "This is a description for Product 2." },
    { title: "Product 3", description: "This is a description for Product 3." },
    { title: "Product 4", description: "This is a description for Product 5." },
];

document.addEventListener('DOMContentLoaded', function () {
    const allSideMenu = document.querySelectorAll('.sideBar .side-menu.top li a');

    allSideMenu.forEach(item => {
        const li = item.parentElement;

        item.addEventListener('click', function () {
            allSideMenu.forEach(i => i.parentElement.classList.remove('active'));
            li.classList.add('active');
        });
    });

    // TOGGLE SIDEBAR
    const menuBar = document.querySelector('.categories a .menu');
    const sidebar = document.querySelector('.sideBar');

    if (menuBar) {
        menuBar.addEventListener('click', function () {
            sidebar.classList.toggle('hide');
        });
    }

    // RESPONSIVE SIDEBAR
    if (window.innerWidth < 768) {
        sidebar.classList.add('hide');
    }

    window.addEventListener('resize', function () {
        if (window.innerWidth < 768) {
            sidebar.classList.add('hide');
        } else {
            sidebar.classList.remove('hide');
        }
    });

    // DARK MODE TOGGLE
    const switchMode = document.querySelector('#dark-mode-toggle');

    if (switchMode) {
        switchMode.addEventListener('change', function () {
            if (this.checked) {
                document.body.classList.add('dark');
            } else {
                document.body.classList.remove('dark');
            }
        });
    }
});

homeBtn.addEventListener('click',()=>{
    homePart.style.display = 'flex';
    TotalActivityPart.style.display = 'none';
    mindMapPart.style.display = 'none';
});
TotalActivityBtn.addEventListener('click',()=>{
    homePart.style.display = 'none';
    TotalActivityPart.style.display = 'flex';
    mindMapPart.style.display = 'none';

});
mindMapBtn.addEventListener('click',()=>{
    homePart.style.display = 'none';
    TotalActivityPart.style.display = 'none';
    mindMapPart.style.display = 'flex';
});


// card section 
document.addEventListener("DOMContentLoaded", () => {
    const cardsContainer = document.querySelector("main");
    randomData.forEach((data) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <h3>${data.title}</h3>
            <p>${data.description}</p>
        `;

        cardsContainer.appendChild(card);
    });
});
