const year = document.getElementById("year");
const username = document.getElementById("username");
const password = document.getElementById("password");
const apples = document.getElementById("apples");

const currentYear = document.getElementById("current-year");

const updateForm = function() {
    console.log("Update Form!")
    
    
    console.log("Username -> ", username.value)
    console.log("Password -> ", password.value)
    console.log("Apples -> ", apples.value)
    console.log("Year -> ", year.value)
}

year.addEventListener("change", function() {
    currentYear.innerHTML = year.value;
})