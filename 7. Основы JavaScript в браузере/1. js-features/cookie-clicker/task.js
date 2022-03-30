// let image = document.getElementById("cookie");
// let counter = document.getElementById("clicker__counter");
// let counterSpeed = document.getElementById("clicker__speed");
// let prevClick = null;

// function changeSize() {
//     if (image.width == 200) {
//         image.width = 70;
//     }
//     else {
//         image.width = 200;
//     }
//     let counterValue = Number(counter.textContent);
//     counterValue += 1;
//     counter.textContent = counterValue

//     if (prevClick == null) {
//         prevClick = new Date();
//         return;
//     }

//     let now = new Date();

//     let speed = (1 / (now.getTime() - prevClick.getTime())) * 1000;
//     counterSpeed.textContent = speed.toFixed(2);
//     prevClick = now;


// }
// image.onclick = changeSize;








let clickerCounter = document.getElementById("clicker__counter");
let image = document.getElementById("cookie");

function changeSize() {
    if (image.width == 200) {
        image.width = 70;
    } else {
        image.width = 200;
    }
    let clickerCounterValue = Number(clickerCounter.textContent);
    clickerCounterValue++;
    clickerCounter.textContent = clickerCounterValue;
}

image.onclick = changeSize;


