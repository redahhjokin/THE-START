// ===== Exercise 1 =====

// ----------- is_Blank -------------

function isBlank(str) {
  return str === "";
}
// console.log(isBlank("")); //example 1
// console.log(isBlank("abc")); //example 2

// ===== Exercise 2 =====

// ----------- Abbrev_name -------------

function abbrevName(str) {
  let parts = str.split(" ");
  return parts[0] + " " + parts[1][0] + ".";
}
// console.log(abbrevName("Robin Singh")); //example

// ===== Exercise 3 =====

// ----------- SwapCase -------------

function swapCase(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }

  return result;
}

console.log(swapCase("The Quick Brown Fox"));

// ===== Exercise 4 =====

// ----------- Omnipresent value -------------

function isOmnipresent(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    let found = false;

    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === value) {
        found = true;
        break;
      }
    }

    if (found === false) {
      return false;
    }
  }

  return true;
}
// console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1));
// console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6));

// ===== Exercise 5 =====

// ----------- Red table -------------

let table = document.body.firstElementChild;
let cases = table.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
  table.rows[i].cells[i].style.backgroundColor = "red";
  table.rows[i].cells[table.rows.length - 1 - i].style.backgroundColor = "red";
}
