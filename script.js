var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomColor(){
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);
	
	const rgb = red * 256 * 256 + green * 256 + blue
	return rgb.toString(16);
	return Math.floor(Math.random() * 16777216).toString(16);
}

function randomize(){
	color1.value = "#" + randomColor();
	color2.value = "#" + randomColor();
	setGradient();
} 

setGradient();
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener('click', randomize);
