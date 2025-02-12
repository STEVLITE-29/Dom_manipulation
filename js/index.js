// Select all "add" buttons (presumably for increasing quantity)
let addButtons = document.querySelectorAll(".add");

// Select all "minus" buttons (presumably for decreasing quantity)
let minusButtons = document.querySelectorAll(".fa-minus-circle");

// Select all elements displaying quantity
let quants = document.querySelectorAll(".quantity");

// Select all unit price elements
let price = document.querySelectorAll(".unit-price");

// Select the total price element
let total = document.querySelector(".total");

// Select all heart icons (for liking items)
let heart = document.querySelectorAll(".fa-heart");

// Select all trash icons (for deleting items)
let del = document.querySelectorAll(".fa-trash-alt");

// Select all elements with the class "body" (presumably item containers)
let body = document.querySelectorAll(".body");

// Initialize an array to track the like state of each item
let like = [false, false, false];

// Loop through each "add" button and add an event listener for clicks
addButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Increase the quantity of the corresponding item
    quants[index].innerText = parseInt(quants[index].innerText) + 1;

    // Update the total price by adding the price of the added item
    total.innerText = parseInt(price[index].innerText.replace("$", "")) + parseInt(total.innerText);
  });
});

// Loop through each "minus" button and add an event listener for clicks
minusButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Ensure quantity does not go below 1
    if (parseInt(quants[index].innerText) > 1) {
      // Decrease the quantity of the corresponding item
      quants[index].innerText = parseInt(quants[index].innerText) - 1;

      // Update the total price by subtracting the price of the removed item
      total.innerText = parseInt(total.innerText) - parseInt(price[index].innerText.replace("$", ""));
    }
  });
});

// Loop through each heart icon to toggle the "like" state
heart.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (like[index] === false) {
      // Change heart color to red (liked)
      button.style.color = "red";
      like[index] = true;
    } else {
      // Change heart color back to black (unliked)
      button.style.color = "black";
      like[index] = false;
    }
  });
});

// Loop through each trash icon to delete the corresponding item
del.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Hide the item's container (simulate deletion)
    body[index].style.display = "none";
  });
});
