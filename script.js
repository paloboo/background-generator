var _ = require('lodash');
console.log(_);

var array = [1,2,3,4,5,6,7,8];
console.log('answer', _.without(array, 3));
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random");


function setGradient(){
    body.style.background = "linear-gradient(to right, "+color1.value+", "+color2.value+")"
    css.textContent = body.style.background + ";";

}

setGradient();

function randomColor(){
//    (Math.round(Math.random()*255))
var col1 = "#"+(Math.round(Math.random()*255)).toString(16)+""+(Math.round(Math.random()*255)).toString(16)+""+(Math.round(Math.random()*255)).toString(16);
var col2 = "#"+(Math.round(Math.random()*255)).toString(16)+""+(Math.round(Math.random()*255)).toString(16)+""+(Math.round(Math.random()*255)).toString(16);
color1.value=col1;
color2.value=col2;
console.log(col1);
body.style.background = "linear-gradient(to right, "
+color1.value
+", "
+color2.value+")";

};


color1.addEventListener("input", setGradient)


color2.addEventListener("input", setGradient)

randomButton.addEventListener("click", randomColor);
