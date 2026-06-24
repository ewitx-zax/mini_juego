const board = document.getElementById("board");

const words = [
    "JAVA",
    "HTML",
    "CSS",
    "PWA",
    "TOMCAT"
];

const wordList = document.getElementById("wordList");

words.forEach(word => {
    const li = document.createElement("li");
    li.textContent = word;
    wordList.appendChild(li);
});

function randomLetter(){
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alphabet[Math.floor(Math.random()*alphabet.length)];
}

for(let i=0;i<100;i++){

    const cell = document.createElement("div");

    cell.classList.add("cell");

    cell.textContent = randomLetter();

    cell.addEventListener("click",()=>{

        cell.classList.toggle("selected");

    });

    board.appendChild(cell);
}

if("serviceWorker" in navigator){

    navigator.serviceWorker.register("service-worker.js");

}