var colourOne = document.getElementsByName("primary")[0];
var colourTwo = document.getElementsByName("secondary")[0];
var body = document.getElementById("gradient");
var text = document.getElementById("text");

function setGradient() {
    body.style.backgroundImage = "linear-gradient(to right, " 
    + colourOne.value 
    + ", " 
    + colourTwo.value 
    + ")";
    text.textContent = body.style.backgroundImage + ";";
}

setGradient()

colourOne.addEventListener("change", setGradient);

colourTwo.addEventListener("change", setGradient);
