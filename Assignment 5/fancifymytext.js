 function bigClick() {
    document.getElementById("text").style.fontSize = "24pt";
}

function fancifyClick() {
    let red = Math.floor(Math.random() * (255 - 1)) + 1;
    let green = Math.floor(Math.random() * (255 - 1)) + 1;
    let blue = Math.floor(Math.random() * (255 - 1))+ 1;

    document.getElementById("text").style.fontStyle = "italic";
    document.getElementById("text").style.color = "rgb(" + red + "," + green + "," + blue + ")";
}

function boringClick() {
    document.getElementById("text").style.fontStyle = "normal";
    document.getElementById("text").style.color = "black";
}

// event listeners 
document.getElementById("bigger").addEventListener("click", bigClick);
document.getElementById("fancy").addEventListener("click", fancifyClick);
document.getElementById("boring").addEventListener("click", boringClick);
