 function bigClick() {
    document.getElementById("text").style.resize = "none";
    document.getElementById("text").style.fontSize = "24pt";
}

function fancifyClick() {
  /*  //get random color when FancyShmancy is clicked
   let red = Math.floor(Math.random() * (255 - 1)) + 1;
    let green = Math.floor(Math.random() * (255 - 1)) + 1;
    let blue = Math.floor(Math.random() * (255 - 1))+ 1; */

    document.getElementById("text").style.fontStyle = "italic";
    //document.getElementById("text").style.color = "rgb(" + red + "," + green + "," + blue + ")";
    document.getElementById("text").style.color = "blue";
    document.getElementById("text").style.textDecoration = "underline";

}
function boldClick() {
    document.getElementById("text").style.fontWeight = "bold";
}

function boringClick() {
    document.getElementById("text").style.fontStyle = "normal";
    document.getElementById("text").style.fontWeight = "normal";
    document.getElementById("text").style.color = "black";
    document.getElementById("text").style.fontSize = "10pt";
    document.getElementById("text").style.textDecoration = "none";
    var tolower = document.getElementById("text");
    tolower.value = tolower.value.toLowerCase();
}

function mooClick() {
    var x = document.getElementById("text");
    x.value = x.value.toUpperCase();
    x.value = x.value.replaceAll(".", "-Moo.");
}
// field set widths
document.getElementById("Fancify").style.width = "350px";
document.getElementById("textbox").style.width = "350px";

// event listeners 
document.getElementById("bigger").addEventListener("click", bigClick);
document.getElementById("fancy").addEventListener("click", fancifyClick);
document.getElementById("boring").addEventListener("click", boringClick);
document.getElementById("moo").addEventListener("click", mooClick);

