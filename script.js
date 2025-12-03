// SIGNUP FUNCTION
function signup(event) {
    event.preventDefault();

    let user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    };

    localStorage.setItem("userData", JSON.stringify(user));

    document.getElementById("signupMsg").innerHTML = "Signup Successful! Redirecting...";

    setTimeout(() => {
        window.location.href = "login.html";
    }, 1500);
}


// LOGIN FUNCTION
function login(event) {
    event.preventDefault();

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPass").value;

    let storedUser = JSON.parse(localStorage.getItem("userData"));

    if (!storedUser) {
        document.getElementById("loginMsg").innerHTML = "No user found! Please Sign Up.";
        return;
    }

    if (email === storedUser.email && password === storedUser.password) {

        // Show welcome page
    document.body.innerHTML = `
    <h1 class="welcome-title">
        🎉 Welcome to Enquero Naukri, ${storedUser.name}!
    </h1>
    <div class="fall-container"></div>
    `;

    } else {
        document.getElementById("loginMsg").innerHTML = "Invalid Email or Password!";
    }
}
