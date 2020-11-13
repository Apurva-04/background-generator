var color1=document.getElementsByName("color1")[0];
var color2=document.getElementsByName("color2")[0];
var html=document.getElementsByTagName("html")[0];
var h3=document.getElementsByTagName("h3")[0];

function setGradient(){
	html.style.background="linear-gradient(90deg, "+color1.value+', '+ color2.value +")";
	h3.innerHTML=html.style.background;
}

color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);