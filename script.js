document.addEventListener("DOMContentLoaded", () => {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const eyeIcon = document.getElementById("invisible");
    const loginButton = document.getElementById("Login-btn");

    if (eyeIcon && passwordInput) {
        eyeIcon.addEventListener("click", () => {
            const isPasswordHidden = passwordInput.type === "password";
            passwordInput.type = isPasswordHidden ? "text" : "password";
            eyeIcon.innerHTML = isPasswordHidden 
                ? '<i class="fa-regular fa-eye"></i>' 
                : '<i class="fa-regular fa-eye-slash"></i>';
        });
    }

    if (loginButton && emailInput && passwordInput) {
        if (window.location.pathname.includes("signup.html")) {
            // Signup Logic
            loginButton.addEventListener("click", () => {
                const email = emailInput.value.trim();
                const password = passwordInput.value.trim();

                if (email && password) {
                    localStorage.setItem(email, password);
                    alert("Signup successful! Redirecting to login...");
                    window.location.href = "login.html";
                } else {
                    alert("Please fill in all fields.");
                }
            });
        } else if (window.location.pathname.includes("login.html")) {
            // Login Logic
            loginButton.addEventListener("click", () => {
                const email = emailInput.value.trim();
                const password = passwordInput.value.trim();
                const storedPassword = localStorage.getItem(email);

                if (storedPassword && storedPassword === password) {
                    alert("Login successful! Redirecting to homepage...");
                    window.location.href = "index.html";
                } else {
                    alert("Invalid email or password! Redirecting to signup...");
                    window.location.href = "signup.html";
                }
            });
        }
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const navRight = document.getElementById("nav-right");

    // ✅ Toggle Navbar on Click
    function toggleMenu() {
        var navRight = document.querySelector("nav-right");
        navRight.classList.toggle("active");
    }
    menuIcon.addEventListener("click", () => {
        if (navRight.classList.contains("show")) {
            navRight.classList.remove("show");  // Hide menu
        } else {
            navRight.classList.add("show");  // Show menu
        }
    });

    // ✅ Hide Navbar When Clicking Outside (Optional)
    document.addEventListener("click", (event) => {
        if (!menuIcon.contains(event.target) && !navRight.contains(event.target)) {
            navRight.classList.remove("show");  // Close menu if clicked outside
        }
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector("#section3g");
    if (section) {
        section.addEventListener("mouseenter", function () {
            let container = section.querySelector("div");
            if (container) {
                let images = container.children;
                if (images.length > 1) {
                    setTimeout(() => {
                        let first = images[0];
                        let second = images[1];

                        first.style.display = "none";
                        second.style.display = "none";

                        // Clone and append images back
                        container.appendChild(first.cloneNode(true));
                        container.appendChild(second.cloneNode(true));

                        // Remove the original images
                        container.removeChild(first);
                        container.removeChild(second);
                    }, 3000); // Delay for animation
                }
            }
        });
    }
});
