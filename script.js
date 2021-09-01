var body=document.querySelector("body");
var inpt1= document.querySelector(".color1");
var inpt2= document.querySelector(".color2");
var css = document.querySelector("h3");
var random= document.querySelector("#random");



function setBackgroundColor(){
	body.style.background="linear-gradient( to right,"
	+ inpt1.value+
	","+
	inpt2.value+")";
	css.textContent=body.style.background+";";

}

function generateRandomColorValue(){

   var value= "0123456789ABCDEF";
   var color= "#";
   for(var i=0; i<6; i++){
   	color+=value[Math.floor(Math.random()*16)];
   }
   return color;
}

function setRandomColor(){
	inpt1.value=generateRandomColorValue();
	inpt2.value=generateRandomColorValue();
	setBackgroundColor();
}


setBackgroundColor();
inpt1.addEventListener("input", setBackgroundColor);
inpt2.addEventListener("input", setBackgroundColor);
random.addEventListener("click", setRandomColor);