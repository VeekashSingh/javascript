//Chapter Project adding friends name interactive voting system
// An array to hold the list of friends' names
const myArray = ["Laurence", "Mike", "John", "Larry"];

// Getting references to the DOM elements by their IDs
const message = document.getElementById("message");
const addNew = document.getElementById("addNew"); // The button to add a new friend
const newInput = document.getElementById("addFriend"); // The input field where the user types the new friend's name
const output = document.getElementById("output"); // The table element where the friends list will be displayed

// Event handler for when the "Add Friend" button is clicked
addNew.onclick = function () {
    const newFriend = newInput.value; // Get the value (name) entered in the input field
    adder(newFriend, myArray.length, 0); // Call the adder function to add the new friend to the table
    myArray.push(newFriend); // Add the new friend's name to the myArray
}

// Function to build the initial list of friends from the myArray
function build() {
    myArray.forEach((item, index) => {
        adder(item, index, 0); // Add each friend's name from the array to the table
    });
}

// Function to create a new table row for a friend
function adder(name, index, counter) {
    const tr = document.createElement("tr"); // Create a new table row (tr) element
    const td1 = document.createElement("td"); // Create a new table data (td) element for the index
    td1.classList.add("box"); // Add a CSS class to the td element (if you want to style it with CSS)
    td1.textContent = index + 1; // Set the text content of the td to the friend's position in the list (index + 1)

    const td2 = document.createElement("td"); // Create a new td element for the friend's name
    td2.textContent = name; // Set the text content of the td to the friend's name

    const td3 = document.createElement("td"); // Create a new td element for the counter
    td3.textContent = counter; // Set the initial counter value to 0

    // Append the three td elements to the table row
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);

    // Add an event handler to the table row for when it is clicked
    tr.onclick = function () {
        console.log(tr.lastChild); // Log the last child (counter td element) to the console for debugging
        let val = Number(tr.lastChild.textContent); // Convert the counter text content to a number
        val++; // Increment the counter value by 1
        tr.lastChild.textContent = val; // Update the counter text content with the new value
    }

    // Append the new table row to the output table element
    output.appendChild(tr);
}

// This function is called to build the initial table when the page loads
build();
/*
self check quiz
 */