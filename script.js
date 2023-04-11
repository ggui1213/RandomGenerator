var list=["ramen",
          "salad",
          "steak",
          "curry",
          "pizza",
          "burger",
          "chicken",
          "fried rice",
          "milk tea",
          "french fries"];

var names = document.getElementById('name');
var generator = document.getElementById('generator');
var outputs = document.getElementById('output');

generator.addEventListener("click",function(){
  var current = names.value;
  generate(current);
  restyle();
})

function generate(text){
  var randomIndex = Math.floor(Math.random() * list.length);
  var outputText = list[randomIndex];
  output.innerText = "Hi, " + text + "! Let's have " + outputText + " together!";
}

function restyle(){
  var fonts = ["Times New Roman", "Arial","Verdana","Monaco","Helvetica"]
  var randFonts = fonts[Math.floor(Math.random()*fonts.length)];
  var randSize = Math.floor(Math.random() * 40)+14;
  var randR = Math.random() * 20 + 50;
  var randG = Math.random() * 20 + 50;
  var randB = Math.random() * 20 + 50;
  var colorOutput = "rgb("+randR+","+randG+","+randB+")";
  output.style.backgroundColor = colorOutput;
  output.style.fontFamily = randFonts;
  output.style.fontSize = randSize + "pxs"
}