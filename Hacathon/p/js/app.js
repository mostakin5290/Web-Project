const textarea = document.querySelector("#textarea");
const wordCount = document.querySelector("#wordCount");
const Percentage = document.querySelector(".Percentage");
const updateDay = document.querySelector(".day");
const progress = document.querySelector(".progress");
const progressColor = document.querySelector(".process");
const updateMonth = document.querySelector(".month");

const mindMapCanvas = document.querySelector(".mind-map-canvas .nodes");
const addNodeButton = document.querySelector(".add-node");

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

let now = new Date();
let year = now.getFullYear();
let month = now.getMonth();

// Writing Pad
window.addEventListener("load", () => {
    const saveText = localStorage.getItem("text");
    const saveDate = localStorage.getItem("date");
    const today = now.toLocaleDateString();

    if (saveDate !== today) {
        localStorage.removeItem("text");
        localStorage.setItem("date", today);
    } else if (saveText) {
        textarea.value = saveText;
        updateCounts(saveText);
    }
});

function updateCounts(text) {
    const word = text.trim().split(/\s+/);
    const wordCountNum = text.trim() === "" ? 0 : word.length;

    wordCount.textContent = `${wordCountNum} / 100`;
    Percentage.textContent = `${(wordCountNum / 100) * 100}%`;
    progress.textContent = "In Progress";
    progress.style.color = "#3a506b";
    progressColor.style.background = "#c4c9e9";

    if (wordCountNum >= 100) {
        progress.textContent = "Complete";
        progressColor.style.background = "#c4e9ce";
        progress.style.color = "black";
    }
}

textarea.addEventListener("input", () => {
    const text = textarea.value;
    localStorage.setItem("text", text);
    updateCounts(text);
});

updateDay.textContent = now.getDate();
updateMonth.textContent = months[now.getMonth()];

// Mind Map
function createNode(content = `New Task`, id) {
    const li = document.createElement("li");
    li.classList.add("node");
    li.setAttribute("data-id", id);

    li.innerHTML = `
    <span class="node-content">${content}</span>
    <div class="node-controls">
        <button class="edit-node">Edit</button>
        <button class="delete-node">Delete</button>
    </div>`;
    mindMapCanvas.appendChild(li);

    li.querySelector(".edit-node").addEventListener("click", () => editNode(li));
    li.querySelector(".delete-node").addEventListener("click", () => deleteNode(li));

    saveNodesToStorage();
}

addNodeButton.addEventListener("click", () => {
    const nodeId = Date.now();
    createNode("New Task", nodeId);
});

function editNode(node) {
    const nodeContent = node.querySelector(".node-content");
    const currentText = nodeContent.textContent.trim();
    const newText = prompt("Edit Node:", currentText);
    if (newText !== null && newText.trim() !== "") {
        nodeContent.textContent = newText.trim();
    }
    saveNodesToStorage();
}

function deleteNode(node) {
    if (confirm("Are you sure you want to delete this node?")) {
        node.remove();
        saveNodesToStorage();
    }
}

function saveNodesToStorage() {
    const nodes = [];
    document.querySelectorAll(".node").forEach((node) => {
        nodes.push({
            id: node.getAttribute("data-id"),
            content: node.querySelector(".node-content").textContent.trim(),
        });
    });
    localStorage.setItem("mindMapNodes", JSON.stringify(nodes));
}

function loadNodesFromStorage() {
    const nodes = JSON.parse(localStorage.getItem("mindMapNodes")) || [];
    nodes.forEach((node) => createNode(node.content, node.id));
}

window.onload = loadNodesFromStorage;