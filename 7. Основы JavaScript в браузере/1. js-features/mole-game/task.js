// let kills = document.getElementById("dead");
// let misses = document.getElementById("lost");

// function catchMole(e) {
//     let click = e.target;
//     if (click.className.includes("hole_has-mole") == true) {
//         let killsValue = kills.textContent;
//         killsValue = Number(killsValue);
//         killsValue += 1;
//         kills.textContent = killsValue;
//         if (killsValue == 10) {
//             alert("Вы победили!");
//         }
//     } else {
//         let missesValue = misses.textContent;
//         missesValue = Number(missesValue);
//         missesValue += 1;
//         misses.textContent = missesValue;
//         if (missesValue == 5) {
//             alert("Вы проиграли!");
//             misses.textContent = 0;
//             kills.textContent = 0;
//         }
//     }
// }

// document.getElementById("hole1").onclick = catchMole;
// document.getElementById("hole2").onclick = catchMole;
// document.getElementById("hole3").onclick = catchMole;
// document.getElementById("hole4").onclick = catchMole;
// document.getElementById("hole5").onclick = catchMole;
// document.getElementById("hole6").onclick = catchMole;
// document.getElementById("hole7").onclick = catchMole;
// document.getElementById("hole8").onclick = catchMole;
// document.getElementById("hole9").onclick = catchMole;


// let kills = document.getElementById("dead");
// let misses = document.getElementById("lost");
// let htmlCollection = document.getElementsByClassName("hole");
// let arr = Array.from(htmlCollection);
// for (let i = 0; i < arr.length; i++) {
//     arr[i].onclick = catchMole;
// }

// function catchMole(event) {
//     if (event.target.className.includes('hole_has-mole')) {
//         let killsValue = Number(kills.textContent);
//         killsValue++;
//         kills.textContent = killsValue;
//         if (killsValue == 10) {
//             alert("Вы победили!");
//             misses.textContent = 0;
//             kills.textContent = 0;
//         }
//     } else {
//         let missesValue = Number(misses.textContent);
//         missesValue++;
//         misses.textContent = missesValue;
//         if (missesValue == 5) {
//             alert("Вы проиграли!");
//             misses.textContent = 0;
//             kills.textContent = 0;
//         }
//     }
// }





let kills = document.getElementById("dead");
let misses = document.getElementById("lost");
let htmlColl = document.getElementsByClassName("hole");
let hole = Array.from(htmlColl);
for (let i = 0; i < hole.length; i++) {
    hole[i].onclick = catchMole;
}

function catchMole(evn) {
    if (evn.target.className.includes('hole_has-mole')) {
        let killsValue = Number(kills.textContent);
        killsValue++;
        kills.textContent = killsValue;
        if (killsValue == 10) {
            alert("Вы выиграли");
            kills.textContent = 0;
            misses.textContent = 0;
        }
    } else {
        let missesValue = Number(misses.textContent);
        missesValue++;
        misses.textContent = missesValue;
        if (missesValue == 5) {
            alert("Вы проиграли");
            kills.textContent = 0;
            misses.textContent = 0;
        }
    }
}































