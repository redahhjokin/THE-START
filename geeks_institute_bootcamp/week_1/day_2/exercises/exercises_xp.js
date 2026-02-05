// ===== Exercise 1 =====

// ----------- Find the numbers divisible by 23 -------------

function displayNumbersDivisible(divisor) {
  let outcome = [];
  let sum = 0;
  for (let i = 0; i <= 500; i++) {
    if (i % divisor == 0) {
      outcome.push(i);
      sum = sum + i;
    }
  }
  console.log("Outcome : " + outcome.join(" "));
  console.log("Sum : " + sum);
}
displayNumbersDivisible(23);

// ===== Exercise 2 =====

// ----------- Shopping List -------------

const stock = {
  banana: 6,
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1,
};

const prices = {
  banana: 4,
  apple: 2,
  pear: 1,
  orange: 1.5,
  blueberry: 10,
};

let shoppingList = ["banana", "orange", "apple"];
function myBill() {
  let sum = 0;
  for (let i = 0; i < shoppingList.length; i++) {
    let item = shoppingList[i];
    if (stock[item] > 0) {
      sum = sum + prices[item];
      stock[item] = stock[item] - 1;
    }
  }
  console.log(sum);
}
myBill();

// ===== Exercise 3 =====

// ----------- What’s in my wallet ? -------------

function changeEnough(itemPrice, amountOfChange) {
  let sum = 0;

  let quarters = amountOfChange[0] * 0.25;
  let dimes = amountOfChange[1] * 0.1;
  let nickel = amountOfChange[2] * 0.05;
  let penny = amountOfChange[3] * 0.01;
  sum = quarters + dimes + nickel + penny;

  if (sum < itemPrice) {
    // the sum of the change is smaller than the item’s price
    return false;
  } else {
    // the sum of the change is bigger or equal than the item’s price
    return true;
  }
}
console.log(changeEnough(4.25, [25, 20, 5, 0]));
console.log(changeEnough(14.11, [2, 100, 0, 0]));
console.log(changeEnough(0.75, [0, 0, 20, 5]));

// ===== Exercise 4 =====

// ----------- Vacations Costs -------------

function hotelCost() {
  let days = 0;
  let Cost = 0;
  do {
    days = Number(
      prompt(" the number of nights they would like to stay in the hotel : "),
    );
  } while (isNaN(days) || days <= 0);
  cost = days * 140;
  return cost;
}

function planeRideCost() {
  do {
    rides = prompt(" destination : ");
  } while (isNaN(rides) !== true);
  const price = {
    London: 183,
    Paris: 220,
    AllOtherDestination: 300,
  };
  if (rides == "london") {
    return price.London;
  } else if (rides == "paris") {
    return price.Paris;
  } else return price.AllOtherDestination;
}
function rentalCarCost() {
  let days = 0;

  do {
    days = Number(
      prompt(" the number of days you would like to rent the car : "),
    );
  } while (isNaN(days) || days <= 0);

  if (days <= 10) {
    cost = days * 40;
  } else {
    cost = days * 40 - (40 * 5) / 100;
  }

  return cost;
}

function totalVacationCost() {
  let CarCost = rentalCarCost();
  let HotelCost = hotelCost();
  let RideCost = planeRideCost();
  let total = CarCost + HotelCost + RideCost;

  alert(
    " The car cost: " +
      CarCost +
      "dh , the hotel cost: " +
      HotelCost +
      "dh , the plane tickets cost: " +
      RideCost +
      "dh and the total is : " +
      total +
      "dh .",
  );
}
totalVacationCost();

// ===== Exercise 5 =====

// ----------- Users -------------

// part 1
// html

// part 2
// Retrieve the div and console.log it

let TheDiv = document.getElementById("container");
console.log(TheDiv);

// Change the name “Pete” to “Richard”.

let lists = document.querySelectorAll(".list");
let flists = lists[0].querySelectorAll("li");
flists[1].innerHTML = "Richard";

// Delete the second <li> of the second <ul>.

let slists = lists[1].querySelectorAll("li");
lists[1].removeChild(slists[1]);

// Change the name of the first <li> of each <ul> to your name.

for (let i = 0; i < lists.length; i++) {
  lists[i].firstElementChild.innerHTML = "reda";

  //  part 3
  // Add a class called student_list to both of the <ul>'s.

  lists[i].classList.add("student_list");
}

// Add the classes university and attendance to the first <ul>.

lists[0].classList.add("university", "attendance");

//  part 4
// Add a “light blue” background color and some padding to the <div>.

TheDiv.style.backgroundColor = "lightblue";
TheDiv.style.padding = "20px";

// Do not display the <li> that contains the text node “Dan”. (the last <li> of the first <ul>)

slists[2].style.visibility = "hidden";

// Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>)

flists[1].style.border = "2px solid black";
// Change the font size of the whole body.
document.querySelector("body").style.fontSize = " 30px";

//  part 5
// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).

// ===== Exercise 6 =====

// ----------- Change the navbar -------------

// Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

let thedev = document.getElementById("navBar");
thedev.setAttribute("id", "socialNetworkNavigation");

// We are going to add a new <li> to the <ul>.

let list = document.createElement("li");
let text = document.createTextNode("Logout");
list.appendChild(text); // or list.textContent = "Logout";
let ulist = document.getElementsByTagName("ul");
ulist[0].appendChild(list);
console.log(ulist[0]);

// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).

let firstElem = ulist[0].firstElementChild;
let lastElem = ulist[0].lastElementChild;

console.log(firstElem.textContent);
console.log(lastElem.textContent);

// ===== Exercise 7 =====

// ----------- My Book List -------------

// 1) Array of objects
const allBooks = [
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    image: "https://covers.openlibrary.org/b/id/7984916-L.jpg",
    alreadyRead: true,
  },
  {
    title: "game of thrones",
    author: "George R.R. Martin",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_C1zvb87cxPL28JSRzOFw1SAHMMKARQ2fswLBb6L17zy-f9h7",
    alreadyRead: false,
  },
];

// 2) Select section
const section = document.querySelector(".listBooks");

// 3) Loop with for
for (let i = 0; i < allBooks.length; i++) {
  const book = allBooks[i];

  // create div
  const bookDiv = document.createElement("div");

  // title + author
  const details = document.createElement("p");
  details.textContent = book.title + " written by " + book.author;

  // if already read → red
  if (book.alreadyRead === true) {
    details.style.color = "red";
  }

  // image
  const img = document.createElement("img");
  img.src = book.image;
  img.style.width = "100px";

  // append
  bookDiv.appendChild(details);
  bookDiv.appendChild(img);
  section.appendChild(bookDiv);
}
