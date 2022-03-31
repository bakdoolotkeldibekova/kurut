// Main Page
const selected = document.querySelector(".selected");
// Returns the first Element within the document that matches the "selected" value. If no matches are found, null is returned.

const optionsContainer = document.querySelector(".options-container");
// Returns the first Element that matches the "option-container" value.
const searchBox = document.querySelector(".search-box input");
// Returns the "input value" that user add to the search box.
const optionsList = document.querySelectorAll(".option");
// Returns the value in the "option" section that user has chooseen.
selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active"); // When the "click" action works, the option changes to "active" status.

  searchBox.value = ""; // Take the search value in search box
  filterList(""); // fillter the output according to the search box value.

  if (optionsContainer.classList.contains("active")) {
    searchBox.focus(); // search action works when the option is active.
  }
});
// For each option in the optionList, when onclick display the suitable label and active status.
optionsList.forEach((o) => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});
// keyup event when a keyboard key is released.
searchBox.addEventListener("keyup", function (e) {
  filterList(e.target.value);
});

const filterList = (searchTerm) => {
  searchTerm = searchTerm.toLowerCase(); // change the searchTerm input to lowercase
  optionsList.forEach((option) => {
    let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();

    //incase the value of the label which the index of "searchTerm" exist, return the block display; else display none
    if (label.indexOf(searchTerm) != -1) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
};
//Function display the filter results
function show_filters() {
  let x = document.getElementById("select-box"); // x is asigned the value of the "select-box"
  // if the value ans style of x value is equal with "none", x's style will change to "block", else its style is "none".
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// My Orders Page
function show_active() {
  // Display the active element with suitable id and style
  // The element with id "active_block" will be display block while the other one with "completed-block"will be none.
  // The element with id "active_btn" will be display with "black"color, "bold" font, with the borderbottom "2px solid #31A13C"
  document.getElementById("active_block").style.display = "block";
  document.getElementById("completed_block").style.display = "none";
  document.getElementById("active_btn").style.color = "black";
  document.getElementById("completed_btn").style.color = "gray";
  document.getElementById("active_btn").style.fontWeight = "bold";
  document.getElementById("completed_btn").style.fontWeight = "normal";
  document.getElementById("active_btn").style.borderBottom = "2px solid #31A13C";
}

function show_completed() {
  // Display the completed element with suitable id and style
  // The element with id "completed_block" will be display block while the other one with "active-block"will be none.
  // The element with id "completed_btn" will be display with "black" color, "bold" font;
  document.getElementById("active_block").style.display = "none";
  document.getElementById("completed_block").style.display = "block";
  document.getElementById("active_btn").style.color = "gray";
  document.getElementById("completed_btn").style.color = "black";
  document.getElementById("active_btn").style.fontWeight = "normal";
  document.getElementById("completed_btn").style.fontWeight = "bold";
  document.getElementById("active_btn").style.borderBottom = "none";
}

// Log in Page
function eye() {
  // allow to hide the text value (password)
  var x = document.getElementById("myInput"); // asign the input value with the id "myInput"to x
  var y = document.getElementById("hide1"); // asign the input value with the id "hide1"to y
  var z = document.getElementById("hide2"); //asign the input value with the id "hide2"to z

  // If x's type and value are equal with "password"
  if (x.type === "password") {
    x.type = "text"; // asignx's type to text
    y.style.display = "block"; // show y
    z.style.display = "none"; // hide z
  } else {
    x.type = "password"; // asign x's type to "password"
    y.style.display = "none"; // hide y
    z.style.display = "block"; // show z
  }
}

function show_login() {
  // display the Login's element
  document.getElementById("login_page").style.display = "block"; // Return the element with the id "login_page" and display block
  document.getElementById("create_an_account").style.display = "none";
  document.getElementById("login_button").style.color = "black"; // Return the element with the id "login_button" and display black color
  document.getElementById("create_button").style.color = "gray"; // Return the element with the id "create_button" and display gray color
  document.getElementById("login_button").style.fontWeight = "bold"; // Return the element with the id "login_button" and display bold font
  document.getElementById("create_button").style.fontWeight = "normal";
}

function show_create() {
  // display the Create's element
  document.getElementById("login_page").style.display = "none";
  document.getElementById("create_an_account").style.display = "block"; // Return the element with the id "create_an_account" and display block
  document.getElementById("login_button").style.color = "gray"; // Return the element with the id "login_button" and display gray color
  document.getElementById("create_button").style.color = "black"; // Return the element with the id "create_button" and display black color
  document.getElementById("login_button").style.fontWeight = "normal";
  document.getElementById("create_button").style.fontWeight = "bold"; // Return the element with the id "create_button" and display bold font
}

// Add New Product Page
function add(x) {
  // allow to add value to element
  const div = document.createElement("div"); // return new element with type div
  div.innerHTML = `
    <input style="margin-top:10px; " type="text " class="form-control ">  
      `; // sets the HTML markup contained within the element.
  if (x == "color") {
    document.getElementById("new_product_color").appendChild(div); // if value of x is "color" append a "div" node as the last child of the element with the id "new_product_color"
  } else if (x == "size") {
    document.getElementById("new_product_size").appendChild(div); // if value of x is "size" append a "div" node as the last child of the element with the id "new_product_size"
  }
  return false;
}

// Feedback Page
