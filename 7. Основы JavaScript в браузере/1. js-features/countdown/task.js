// function counter() {
//     let timer = document.getElementById("timer");
//     timer.textContent -= 1;
//     if (timer.textContent == 0) {
//         alert("Вы победили в конкурсе!");
//         clearInterval(id);
//     }
// }
// let id = setInterval(counter, 1000);


let timer = document.getElementById("timer");

function counter() {
    timer.textContent -= 1;
    if (timer.textContent == 0) {
        alert("Вы победили в конкурсе");
        clearInterval(id);
    }
}
let id = setInterval(counter, 50);




























