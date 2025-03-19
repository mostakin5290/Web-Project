const calendarElement = document.getElementById("calendar");
const currentMonthElement = document.getElementById("currentMonth");
const selectedDateElement = document.getElementById("selectedDate");
const eventListElement = document.getElementById("eventList");
const eventDateInput = document.getElementById("eventDate");
const eventTableBody = document.querySelector(".allEvent tbody");
const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

let currentDate = new Date();
let events = JSON.parse(localStorage.getItem("events")) || {};


document.addEventListener('DOMContentLoaded', function () {
    const buttons = {
        homeBtn: '.home-part',
        TotalActivityBtn: '.TotalActivity',
        CompleteActivityBtn: '.CompleteActivity',
        PendingActivityBtn: '.PendingActivity',
        FailedActivityBtn: '.FailedActivity',
        AboutBtn: '.About'
    };

    const main = document.querySelector('main');

    const setActiveSection = (activeBtnId) => {
        Object.keys(buttons).forEach(btnId => {
            const part = document.querySelector(buttons[btnId]);
            const button = document.querySelector(`#${btnId}`);

            if (part && button) {
                if (btnId === activeBtnId) {
                    part.style.display = 'flex';
                    button.parentElement.classList.add('active');
                } else {
                    part.style.display = 'none';
                    button.parentElement.classList.remove('active');
                }
            }
        });

        if (main) {
            if (activeBtnId === 'homeBtn') {
                main.classList.add('home-active');
            } else {
                main.classList.remove('home-active');
            }
        }
        if (main) {
            if (activeBtnId === 'AboutBtn') {
                main.classList.add('about-active');
            } else {
                main.classList.remove('about-active');
            }
        }
    };

    setActiveSection('homeBtn');

    Object.keys(buttons).forEach(btnId => {
        const button = document.querySelector(`#${btnId}`);

        if (button) {
            button.addEventListener('click', () => {
                setActiveSection(btnId);
            });
        }
    });

    const allSideMenu = document.querySelectorAll('.sideBar .side-menu.top li a');

    allSideMenu.forEach(item => {
        const li = item.parentElement;

        item.addEventListener('click', function () {
            allSideMenu.forEach(i => i.parentElement.classList.remove('active'));
            li.classList.add('active');
        });
    });

    const menuBar = document.querySelector('.categories a .menu');
    const sidebar = document.querySelector('.sideBar');

    if (menuBar) {
        menuBar.addEventListener('click', function () {
            sidebar.classList.toggle('hide');
            if (window.innerWidth < 480) {
                if (main.style.display === "none") {
                    main.style.display = "flex";
                }
                else
                    main.style.display = "none";
            }
        });
    }

    // RESPONSIVE
    if (sidebar) {
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
    }

    // dark
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

function generateCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const today = new Date();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    currentMonthElement.textContent = `${monthNames[month]} ${year}`;

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < firstDay; i++) {
        const blank = document.createElement("div");
        blank.className = "day blank";
        fragment.appendChild(blank);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement("div");
        dayElement.className = "day";
        dayElement.textContent = day;
        dayElement.setAttribute("aria-label", `Day ${day}`);
        if (
            day === today.getDate() &&
            year === today.getFullYear() &&
            month === today.getMonth()) {
            dayElement.classList.add("current-day");
            dayElement.style.color = "#fff";
        }
        // dayElement.addEventListener("click", () => selectDate(day, month, year));
        fragment.appendChild(dayElement);
    }

    calendarElement.innerHTML = "";
    calendarElement.appendChild(fragment);

    calendarElement.addEventListener("click", (event) => {
        if (event.target.classList.contains("day")) {
            const day = parseInt(event.target.textContent, 10);
            selectDate(day, month, year);
        }
    })

    const savedDate = localStorage.getItem("selectedDate");
    if (savedDate) {
        const [savedYear, savedMonth, savedDay] = savedDate.split("-").map(Number);
        selectDate(savedDay, savedMonth - 1, savedYear);
    } else {
        selectDate(today.getDate(), today.getMonth(), today.getFullYear());
    }
}



function selectDate(day, month, year) {
    const selectedDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    selectedDateElement.textContent = `${String(day).padStart(2, "0")}:${String(month + 1).padStart(2, "0")}:${year}`;
    eventDateInput.value = selectedDate;

    document.querySelectorAll(".day").forEach((el) => el.classList.remove("selected-day"));

    const days = Array.from(calendarElement.children).filter(
        (el) => el.textContent == day && !el.classList.contains("current-day")
    );
    if (days.length) {
        days[0].classList.add("selected-day");
    }

    displayEvents(selectedDate);
}

function displayEvents(date) {
    eventListElement.innerHTML = "";

    if (events[date]) {
        events[date].sort((a, b) => new Date(`1970-01-01T${a.timeFrom}:00`) - new Date(`1970-01-01T${b.timeFrom}:00`));
        events[date].forEach((event, index) => {
            const eventContainer = document.createElement("div");
            eventContainer.className = 'eventContainer';

            const eventItem = document.createElement("span");
            eventItem.className = 'eventItem';
            eventItem.innerHTML = `<p>${event.name}</p><p>(${event.timeFrom} - ${event.timeTo})</p>`;

            const modifyButton = document.createElement("button");
            modifyButton.innerHTML = `<i class="fa-solid fa-pen"></i>`;
            modifyButton.className = "modifyButton";
            modifyButton.onclick = () => modifyEvent(date, index);

            const deleteButton = document.createElement("button");
            deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
            deleteButton.classList = "deleteButton";
            deleteButton.onclick = () => deleteEvent(date, index);

            const doneButton = document.createElement("button");
            doneButton.innerHTML = `<i class="fa-regular fa-square-check"></i>`;
            doneButton.className = "doneButton";
            doneButton.onclick = () => markDone(date, index);

            if (isEventFailed(event, date)) {
                modifyButton.style.display = "none";
                doneButton.style.display = "none";
            }

            const btnList = document.createElement("div");
            btnList.className = 'btnList';
            const hr = document.createElement('hr');
            hr.classList = 'hr';

            eventContainer.appendChild(eventItem);
            eventContainer.appendChild(btnList);
            eventItem.appendChild(hr);
            btnList.appendChild(modifyButton);
            btnList.appendChild(deleteButton);
            btnList.appendChild(doneButton);

            eventListElement.appendChild(eventContainer);
        });
    } else {
        eventListElement.innerHTML = "<p>No events for this day</p>";
    }

    updateAllEventsTable();
    updatePendingAndCompleteTable();
}

function addEvent(event) {
    event.preventDefault();
    const date = eventDateInput.value;
    const name = document.getElementById("eventName").value;
    const timeFrom = document.getElementById("timeFrom").value;
    const timeTo = document.getElementById("timeTo").value;

    
    if (new Date(`1970-01-01T${timeFrom}:00`) >= new Date(`1970-01-01T${timeTo}:00`)) {
        alert("Start time must be earlier than end time.");
        document.getElementById("timeFrom").style.borderColor = "red";
        document.getElementById("timeTo").style.borderColor = "red";
        return;
    }
    else {
        document.getElementById("timeFrom").style.borderColor = "";
        document.getElementById("timeTo").style.borderColor = "";
    }

    if (!name || !timeFrom || !timeTo) return;

    if (!events[date]) {
        events[date] = [];
    }

    events[date].push({ name, timeFrom, timeTo, done: false });
    localStorage.setItem("events", JSON.stringify(events));

    document.getElementById("eventName").value = "";
    displayEvents(date);
}

function updatePendingAndCompleteTable() {
    const pendingTableBody = document.querySelector("#PendingEventTable tbody");
    const completeTableBody = document.querySelector("#CompleteEventTable tbody");
    const failedTableBody = document.querySelector("#failedEventTable tbody");

    pendingTableBody.innerHTML = "";
    completeTableBody.innerHTML = "";
    failedTableBody.innerHTML = "";

    for (const data in events) {
        events[data].forEach((event) => {
            const row = document.createElement("tr");
            row.innerHTML =
                `<td>${data}</td>
                <td>${event.name}</td>
                <td>${event.timeFrom} - ${event.timeTo}</td>
                <td>${getEventStatus(event, data)}</td>`;
            if (event.done) {
                completeTableBody.appendChild(row);
            } else if (isEventFailed(event, data)) {
                failedTableBody.appendChild(row);
            } else {
                pendingTableBody.appendChild(row);
            }
        });
    }
}
function getEventStatus(event, date) {
    if (isEventFailed(event, date)) {
        return 'Failed';
    }
    return event.done ? 'Completed' : 'Pending';
}

function isEventFailed(event, date) {
    const currentDateTime = new Date();
    const eventEndTime = new Date(`${date}T${event.timeTo}:00`);
    eventEndTime.setTime(eventEndTime.getTime() + 12 * 60 * 60 * 1000);
    return !event.done && currentDateTime > eventEndTime;
}

function markDone(date, index) {
    const event = events[date][index];
    event.done = !event.done;

    localStorage.setItem("events", JSON.stringify(events));

    displayEvents(date);

    const eventContainers = document.querySelectorAll('.eventContainer');
    const targetEventContainer = eventContainers[index];
    const completeButton = targetEventContainer.querySelector('.doneButton');
    const modifyButton = targetEventContainer.querySelector('.modifyButton');
    if (event.done) {
        const ans = prompt("are you sure y[Yes] n[No]:");
        if (ans == "y") {
            completeButton.style.display = "none";
            modifyButton.style.display = "none";
        }
    }
}

function modifyEvent(date, index) {
    const newEventName = prompt("Modify event name:");
    const newTimeFrom = prompt("Modify time from:");
    const newTimeTo = prompt("Modify time to:");

    if (new Date(`1970-01-01T${newTimeFrom}:00`) >= new Date(`1970-01-01T${newTimeTo}:00`)) {
        alert("Start time must be earlier than end time.");
        return;
    }

    if (newEventName && newTimeFrom && newTimeTo) {
        events[date][index].name = newEventName;
        events[date][index].timeFrom = newTimeFrom;
        events[date][index].timeTo = newTimeTo;
        events[date].sort((a, b) => {
            return new Date(`1970-01-01T${a.timeFrom}:00`) - new Date(`1970-01-01T${b.timeFrom}:00`);
        });
        localStorage.setItem("events", JSON.stringify(events));
        displayEvents(date);
    }
}

function deleteEvent(date, index) {
    events[date].splice(index, 1);
    if (events[date].length === 0) {
        delete events[date];
    }
    localStorage.setItem("events", JSON.stringify(events));
    displayEvents(date);
}

function updateAllEventsTable() {
    eventTableBody.innerHTML = "";

    for (const date in events) {
        events[date].sort((a, b) => new Date(`1970-01-01T${a.timeFrom}:00`) - new Date(`1970-01-01T${b.timeFrom}:00`));
        events[date].forEach((event) => {
            const row = document.createElement("tr");
            row.innerHTML =
                `<td>${date}</td>
                <td>${event.name}</td>
                <td>${event.timeFrom} - ${event.timeTo}</td>
                <td>${event.done ? 'Completed' : (isEventFailed(event, date) ? 'Failed' : 'Pending')}</td>`;
            eventTableBody.appendChild(row);
        });
    }
}

function changeMonth(direction) {
    currentDate.setMonth(currentDate.getMonth() + direction);
    generateCalendar();
}

window.onload = () => {
    generateCalendar();
    updatePendingAndCompleteTable();
};