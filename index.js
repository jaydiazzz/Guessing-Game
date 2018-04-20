var colors = ["#ff9090","#ff9f80", "#80bfff", "#8c66ff", "#80ff80", "#ffff80"];

function randomColor() {
  var limit = colors.length;
  var i     = Math.floor(Math.random() * limit);
  document.body.style.backgroundColor = `${colors[i]}`;
}

randomColor();

setTimeout(function(){
    document.querySelector("#popup").style.display = "block";
},15000);

document.querySelector(".close1").onclick = function() {
  document.querySelector("#popup").style.display = "none";
}

document.querySelector(".close").onclick = function() {
  document.querySelector("#modal").classList.remove("showing");
  document.querySelectorAll(".strikes div")[0].style.display = "block";
  document.querySelectorAll(".strikes div")[1].style.display = "block";
  document.querySelectorAll(".strikes div")[2].style.display = "block";
};

document.querySelector(".close2").onclick = function() {
  document.querySelector("#wrong").classList.remove("showing");
  document.querySelectorAll(".strikes div")[0].style.display = "block";
  document.querySelectorAll(".strikes div")[1].style.display = "block";
  document.querySelectorAll(".strikes div")[2].style.display = "block";
};

var difficulty;

function easy() {
  count = 0;
  if (count == 0) {
    let i = 0;i < 3;i++;
    document.querySelector(`.strikes>div:nth-of-type(${i})`).style.display =
      "block";
  }
  
  document.querySelector(".numbers").innerHTML = " ";
  
  difficulty = 10;
  var number = Math.floor(Math.random() * difficulty) + 1;
  
  console.log(number);

  for (let i = 1; i < difficulty + 1; i++) {
    var numbers       = document.createElement("div");
    numbers.innerHTML = i;
    document.querySelector(".numbers").append(numbers);
  }

  var divs      = document.querySelector(".numbers").childNodes;
  var chosenOne = divs[number];

  var correct = (chosenOne.id = "index-" + number);

  document.getElementById(correct).onclick = function() {
    document.querySelector("#modal").classList.add("showing");
  };
}

function hard() {
  count = 0;
  if (count == 0) {
    let i = 0;i < 3;i++;
    
    document.querySelector(`.strikes>div:nth-of-type(${i})`).style.display =
      "block";
  }
  
  document.querySelector(".numbers").innerHTML = " ";
  
  difficulty = 100;
  var number = Math.floor(Math.random() * difficulty) + 1;
  
  console.log(number);

  for (let i = 1; i < difficulty + 1; i++) {
    var numbers       = document.createElement("div");
    numbers.innerHTML = i;
    document.querySelector(".numbers").append(numbers);

    var divs = document.querySelector(".numbers").childNodes;
  }

  var divs      = document.querySelector(".numbers").childNodes;
  var chosenOne = divs[number];

  var correct = (chosenOne.id = "index-" + number);

  document.getElementById(correct).onclick = function() {
    document.querySelector("#modal").classList.add("showing");
  };
}

var count   = 0;
var nodeBoy = document.querySelector(".numbers");

nodeBoy.onclick = function() {
  count += 1;
  console.log(count);
  document.querySelector(`.strikes>div:nth-of-type(${count})`).style.display =
    "none";

  if (document.querySelector("#modal").classList.contains("showing") && count == 3){
    count = 0;
    document.querySelector("#wrong").classList.remove("showing");
    console.log(count);
  }
  
  else if (document.querySelector("#modal").classList.contains("showing")) {
    count = 0;
    console.log(count);
  }
  
  else if (count == 3) {
    document.querySelector("#wrong").classList.add("showing");
    count = 0;
  }
  
};

function remove() {
  document.querySelector("#instructions").style.display = "none";
}

window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(e) {
  if ((document.querySelector("#modal").classList.contains("showing") ||
      document.querySelector("#wrong").classList.contains("showing")) &&
    (e.keyCode == 13 || e.keyCode == 32)) {
    
    document.querySelector("#modal").classList.remove("showing");
    document.querySelector("#wrong").classList.remove("showing");
    document.querySelectorAll(".strikes div")[0].style.display = "block";
    document.querySelectorAll(".strikes div")[1].style.display = "block";
    document.querySelectorAll(".strikes div")[2].style.display = "block";
  
  }
}
