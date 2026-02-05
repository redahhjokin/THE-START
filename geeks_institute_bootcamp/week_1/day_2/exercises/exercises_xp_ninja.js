// ===== Exercise 1 =====

// ----------- Random Number -------------

let randomNum = prompt("Get a random number between 1 and 100");
for (let i = 0; i <= randomNum; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// ===== Exercise 2 =====

// ----------- Capitalized letters -------------

function capitalizeLetters(str) {
  let evenCap = "";
  let oddCap = "";

  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      evenCap += str[i].toUpperCase();
      oddCap += str[i];
    } else {
      evenCap += str[i];
      oddCap += str[i].toUpperCase();
    }
  }

  return [evenCap, oddCap];
}
// console.log(capitalizeLetters("abcdef"));

// ===== Exercise 3 =====

// ----------- Is palindrome? -------------

function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("bob"));
console.log(isPalindrome("kayak"));
console.log(isPalindrome("hello"));

// ===== Exercise 4 =====

// ----------- Biggest Number -------------

// ===== Exercise 5 =====

// ----------- Unique Elements -------------

// ===== Exercise 6 =====

// ----------- Calendar -------------
