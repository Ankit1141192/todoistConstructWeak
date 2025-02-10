document.addEventListener("DOMContentLoaded", () => {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const eyeIcon = document.getElementById("invisible");
    const loginButton = document.getElementById("Login-btn");

    // Toggle Password Visibility
    if (eyeIcon && passwordInput) {
        eyeIcon.addEventListener("click", () => {
            const isPasswordHidden = passwordInput.type === "password";
            passwordInput.type = isPasswordHidden ? "text" : "password";
            eyeIcon.innerHTML = isPasswordHidden 
                ? '<i class="fa-regular fa-eye"></i>' 
                : '<i class="fa-regular fa-eye-slash"></i>';
        });
    }

    // Signup & Login Logic
    if (loginButton && emailInput && passwordInput) {
        loginButton.addEventListener("click", () => {
            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();

            if (!email || !password) {
                alert("Please fill in all fields.");
                return;
            }

            if (window.location.pathname.includes("signup")) {
                try {
                    localStorage.setItem(email, password);
                    console.log("Stored Data:", localStorage.getItem(email)); // Debugging
                    alert("Signup successful! Redirecting to login...");
                    window.location.href = "login.html";
                } catch (error) {
                    console.error("Error saving to localStorage:", error);
                    alert("Signup failed. Please try again.");
                }
            } else if (window.location.pathname.includes("login")) {
                const storedPassword = localStorage.getItem(email);
                console.log("Retrieved Password:", storedPassword); // Debugging

                if (storedPassword && storedPassword === password) {
                    alert("Login successful! Redirecting to homepage...");
                    window.location.href = "index.html";
                } else {
                    alert("Invalid email or password! Redirecting to signup...");
                    window.location.href = "signup.html";
                }
            }
        });
    }
});
