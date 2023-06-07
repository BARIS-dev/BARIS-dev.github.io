// Get the macos window element
var macosWindow = document.getElementById("macos-window");

// Get the macos header element
var macosHeader = document.getElementById("macos-header");

// Initialize the offset variables
var offsetX = (offsetY = null);

// Add a mousedown event listener to the macos header
macosHeader.addEventListener("mousedown", function (event) {
  // Get the current mouse position
  var mouseX = event.clientX;
  var mouseY = event.clientY;

  // Get the current window position
  var windowX = macosWindow.offsetLeft;
  var windowY = macosWindow.offsetTop;

  // Calculate the offset between the mouse and the window
  offsetX = mouseX - windowX;
  offsetY = mouseY - windowY;

  // Set a flag to indicate that the window is being dragged
  macosWindow.dragging = true;
});

// Add a mousemove event listener to the document
document.addEventListener("mousemove", function (event) {
  // Check if the window is being dragged
  if (macosWindow.dragging) {
    // Get the current mouse position
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    // Calculate the new window position based on the offset
    var windowX = mouseX - offsetX;
    var windowY = mouseY - offsetY;

    // Set the new window position
    macosWindow.style.left = windowX + "px";
    macosWindow.style.top = windowY + "px";
  }
});

// Add a mouseup event listener to the document
document.addEventListener("mouseup", function (event) {
  // Set the flag to indicate that the window is not being dragged anymore
  macosWindow.dragging = false;
});

// An array of names
var names = [
  "Albert",
  "Alper",
  "Andreea",
  "Barış",
  "David",
  "Ezzuldin",
  "Fredy",
  "Halid",
  "Hanna",
  "Ihor",
  "Kai",
  "Kim",
  "Manuel",
  "Ömer",
  "Sebastian",
  "Valeri",
  "Yahya",
  "Zahra",
];

// An object to store the total and session counts for each name
var counts = {};

// A function to initialize the counts object
function initCounts() {
  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    counts[name] = { total: 0, session: 0 };
  }
}

// A function to update the table with the counts and percentages
function updateTable() {
  var totalDraws = 0; // The total number of draws in the session
  var table = document.getElementById("table"); // The table element
  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    var row = table.rows[i + 1]; // The row element for the name
    var totalCell = row.cells[1]; // The cell element for the total count
    var sessionCell = row.cells[2]; // The cell element for the session count
    var percentCell = row.cells[3]; // The cell element for the percentage
    totalCell.innerHTML = counts[name].total; // Set the total count
    sessionCell.innerHTML = counts[name].session; // Set the session count
    totalDraws += counts[name].session; // Add the session count to the total draws
  }
  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    var row = table.rows[i + 1]; // The row element for the name
    var percentCell = row.cells[3]; // The cell element for the percentage
    if (totalDraws > 0) {
      var percent = Math.round((counts[name].session / totalDraws) * 100); // Calculate the percentage
      percentCell.innerHTML = percent + "%"; // Set the percentage
    } else {
      percentCell.innerHTML = ""; // Clear the percentage
    }
  }
}

// A function to draw a random name from the array
function drawName() {
  var switchElement = document.getElementById("switch"); // The switch element
  var repeat = switchElement.checked; // The value of the switch (true or false)
  var index; // The index of the drawn name in the array
  if (repeat) {
    // If repeat is true, draw any name from the array
    index = Math.floor(Math.random() * names.length);
  } else {
    // If repeat is false, draw only names that have not been striked
    var availableNames = []; // An array of available names
    for (var i = 0; i < names.length; i++) {
      var name = names[i];
      if (counts[name].session == 0) {
        // If the name has not been drawn in this session, add it to the available names array
        availableNames.push(name);
      }
    }
    if (availableNames.length == 0) {
      // If there are no available names, alert and return
      alert("Alle Namen wurden gezogen!");
      return;
    }
    // Draw a random name from the available names array
    var randomName =
      availableNames[Math.floor(Math.random() * availableNames.length)];
    // Find the index of the random name in the original array
    index = names.indexOf(randomName);
  }
  var name = names[index]; // The drawn name
  counts[name].total++; // Increment the total count for the name
  counts[name].session++; // Increment the session count for the name
  updateTable(); // Update the table with the new counts and percentages
  showName(name); // Show the drawn name in the output element
  if (!repeat) {
    // If repeat is false, strike the drawn name in the table
    var table = document.getElementById("table"); // The table element
    var row = table.rows[index + 1]; // The row element for the name
    var nameCell = row.cells[0]; // The cell element for the name
    nameCell.className = "striked"; // Add the striked class to the name cell
  }
}

// A function to reset the session counts and clear the striked names
function resetSession() {
  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    counts[name].session = 0; // Reset the session count for the name
    var table = document.getElementById("table"); // The table element
    var row = table.rows[i + 1]; // The row element for the name
    var nameCell = row.cells[0]; // The cell element for the name
    nameCell.className = ""; // Remove the striked class from the name cell
  }
  updateTable(); // Update the table with the new counts and percentages
}

// A function to show the drawn name in the output element
function showName(name) {
  var outputElement = document.getElementById("output"); // The output element
  outputElement.innerHTML = name; // Set the output to the name
}

// Call the initCounts function when the page loads
window.onload = initCounts;

// Get the macos window element
var macosWindow = document.getElementById("macos-window");

// Get the macos header element
var macosHeader = document.getElementById("macos-header");

// Initialize the offset variables
var offsetX = (offsetY = null);

// Add a mousedown event listener to the macos header
macosHeader.addEventListener("mousedown", function (event) {
  // Get the current mouse position
  var mouseX = event.clientX;
  var mouseY = event.clientY;

  // Get the current window position
  var windowX = macosWindow.offsetLeft;
  var windowY = macosWindow.offsetTop;

  // Calculate the offset between the mouse and the window
  offsetX = mouseX - windowX;
  offsetY = mouseY - windowY;

  // Set a flag to indicate that the window is being dragged
  macosWindow.dragging = true;
});

// Add a mousemove event listener to the document
document.addEventListener("mousemove", function (event) {
  // Check if the window is being dragged
  if (macosWindow.dragging) {
    // Get the current mouse position
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    // Calculate the new window position based on the offset
    var windowX = mouseX - offsetX;
    var windowY = mouseY - offsetY;

    // Set the new window position
    macosWindow.style.left = windowX + "px";
    macosWindow.style.top = windowY + "px";
  }
});

// Add a mouseup event listener to the document
document.addEventListener("mouseup", function (event) {
  // Set the flag to indicate that the window is not being dragged anymore
  macosWindow.dragging = false;
});
