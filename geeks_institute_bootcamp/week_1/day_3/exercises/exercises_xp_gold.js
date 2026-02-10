// ===== Exercise 1 =====

// ----------- Select a kind of Music -------------

let select = document.getElementById("genres");
console.log(select.value);

let classic = document.createElement("option");
classic.textContent = "Classic";
select.appendChild(classic);
document.createAttribute("value", classic);
classic.selected = true;

// ===== Exercise 2 =====

// ----------- Delete colors -------------

const select = document.getElementById("colorSelect");
const btn = document.querySelector('input[type="button"]');

btn.addEventListener("click", removeColor);

function removeColor() {
  const selectedIndex = select.selectedIndex;

  if (selectedIndex !== -1) {
    select.remove(selectedIndex);
  }
}

// ===== Exercise 3 =====

// ----------- Create a shopping list -------------
