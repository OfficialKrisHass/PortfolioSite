let display = document.getElementById("display");

document.getElementById("AC").onclick = function() { display.value = ""; }
document.getElementById("DE").onclick = function() { display.value = display.value.slice(0, -1); }
document.getElementById("equal").onclick = function() { display.value = eval(display.value); }

let buttons = document.getElementsByClassName("button");
for (let i = 0; i < buttons.length; i++) {

    let button = buttons.item(i);
    button.onclick = function() { display.value += button.value; }

}

