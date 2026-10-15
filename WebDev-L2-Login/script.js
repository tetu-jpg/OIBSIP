let namevalue = document.getElementById("text");
let password = document.getElementById("pass");
let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let nameinput = namevalue.value.trim();
    let passwordinput = password.value;

    if (nameinput === "" || passwordinput.trim() === "") {
        alert("Please enter your name and password.");
        return;
    }

    
    localStorage.setItem("username", nameinput);

    alert("Demo login successful!");

    namevalue.value = "";
    password.value = "";
});

window.addEventListener("DOMContentLoaded", function () {
    let saveduser = localStorage.getItem("username");

    if (saveduser) {
        namevalue.value = saveduser;
    }
});
