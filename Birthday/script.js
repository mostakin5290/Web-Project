const birthdays = [
    { name: "Sk Asfar Ali", date: "06/09/2004", phone: "6297942997" },
    { name: "Mostakin Mondal", date: "07/07/2004", phone: "9832225840" },
    { name: "Sovan Jana", date: "26/12/2004", phone: "9800362557" },
    { name: "Sandipan Pal", date: "16/02/2000", phone: "7585949532" },
    { name: "Sayan Dey", date: "27/12/2000", phone: "9733389829" },
    { name: "Nayan Maity", date: "10/02/2003", phone: "9749322776" },
    { name: "Sanjoy", date: "26/09/2024", phone: "9564824184" },
    { name: "Sudipta Pariary", date: "13/10/2004", phone: "7908671229" },
    { name: "Gopal Das", date: "21/10/2004", phone: "6295432911" },
    { name: "Saker Khan", date: "10/04/2003", phone: "9083069181" },
]
// Get the next birthday date
function getNextBirthdayDate(birthday) {
    const now = new Date();
    const [day, month, year] = birthday.date.split("/").map(Number);
    let birthdayDate = new Date(now.getFullYear(), month - 1, day);

    if (birthdayDate < now) {
        birthdayDate.setFullYear(now.getFullYear() + 1);
    }

    return birthdayDate;
}

// Display countdowns
function displayCountdowns() {
    const now = new Date();
    const countdownList = document.getElementById("countdown-list");
    countdownList.innerHTML = "";

    // Sort birthdays based on the time
    const sortedBirthdays = [...birthdays].sort((a, b) => {
        const dateA = getNextBirthdayDate(a);
        const dateB = getNextBirthdayDate(b);
        return dateA - dateB;
    })
    sortedBirthdays.forEach((birthday, index) => {
        const birthdayDate = getNextBirthdayDate(birthday);
        const timeDiff = birthdayDate - now;
        let message = "";

        if (timeDiff > 0) {
            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
            const seconds = Math.floor((timeDiff / 1000) % 60);
            message = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        } else if (timeDiff <= 0 && Math.abs(timeDiff) < 24 * 60 * 60 * 1000) {
            message = "🎉 It's their birthday today!";
        } else {
            message = "Birthday has passed this year.";
        }

        const countdownDiv = document.createElement("div");
        countdownDiv.className = "countdown-item";
        countdownDiv.innerHTML = `
            <div class="item">
                <div class="item-text">
                    <h4>${birthday.name}</h4>
                    <h4>:</h4>
                    <p>${message}</p>
                </div>
                <button class="wish-button" id="wish-button-${index}">Wish</button>
            </div>
        `;
        countdownList.appendChild(countdownDiv);

        const wishButton = document.getElementById(`wish-button-${index}`);
        wishButton.addEventListener("click", () => {
            WishButton(birthdayDate, now, birthday.name, birthday.phone);
        });
    });
}

//  wish button
function WishButton(birthdayDate, now, name, phone) {
    const message = now.toDateString() === birthdayDate.toDateString()
        ? `Happy Birthday, ${name}! 🎉`
        : (now < (birthdayDate + 15900000000))
            ? `Advance Happy Birthday, ${name}! 🎉`
            : `Sorry for the late Happy Birthday, ${name}😔😔`;

    const whatsappURL = `https://wa.me/+91${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
}

displayCountdowns();
setInterval(displayCountdowns, 1000);
