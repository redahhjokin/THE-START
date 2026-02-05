// ===== Exercise 1 =====

// ----------- Timer -------------

// Part I

function sayHello() {
  alert("Hello World");
}
setTimeout(sayHello, 2000);

// Part 2
let div1 = document.getElementById("container");

function addPara() {
  let newPara = document.createElement("p");
  newPara.textContent = "Hello World";
  div1.appendChild(newPara);
  console.log(div1.children.length);
  
  //-- part 3 last question --
  if (div1.children.length >= 5) {
    Stop()
}
}

setTimeout(addPara, 2000);

// Part 3

let repeat = setInterval(addPara, 2000);

function Stop() {
  clearInterval(repeat);
}

let btn = document.getElementById("clear");
btn.addEventListener("click", Stop);


// ===== Exercise 2 =====

// ----------- Move the box -------------

let container = document.getElementById("container");
let animate = document.getElementById("animate");

let count = 0
function myMove() {
    
  let move = setInterval(frame, 1);

  function frame() {
    if (count >= 350) {
      clearInterval(mov);
    } else {
      count++;
      animate.style.left = count + "px";
    }
  }
}
