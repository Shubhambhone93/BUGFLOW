const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function () {

    const role = document.getElementById("role").value;
    const email = document.querySelector("input[type='email']").value;
    const password = document.querySelector("input[type='password']").value;

    if (role === "Select Role") {
        alert("Please select your role.");
        return;
    }

    if (email === "") {
        alert("Please enter your email.");
        return;
    }

    if (password === "") {
        alert("Please enter your password.");
        return;
    }

    localStorage.setItem("role", role);
    localStorage.setItem("username", "Shubham Bhone");

    window.location.href = "dashboard.html";

});