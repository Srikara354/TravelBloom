function handleSearch() {
    let searchInput = document.getElementById("searchBar").value.toLowerCase();
    let message = document.getElementById("searchMessage");

    if (searchInput.includes("beach")) {
        message.innerHTML = "🏖️ Check out our top beach destinations!";
    } else if (searchInput.includes("temple")) {
        message.innerHTML = "🏯 Explore our recommended temple destinations!";
    } else if (searchInput.trim()) {
        message.innerHTML = "🔎 Searching for: " + searchInput;
    } else {
        message.innerHTML = "";
    }
}

function validateForm(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let errorMsg = document.getElementById("errorMessage");

    if (name === "" || email === "" || message === "") {
        errorMsg.innerHTML = "⚠️ All fields are required!";
        return false;
    }

    alert("✅ Message sent successfully!");
    document.getElementById("contactForm").reset();
    errorMsg.innerHTML = "";
    return true;
}

document.addEventListener("DOMContentLoaded", function () {
    const searchBtn = document.getElementById("searchBtn");
    const contactForm = document.getElementById("contactForm");
    const themeBtn = document.getElementById("toggleTheme");

    if (searchBtn) {
        searchBtn.addEventListener("click", handleSearch);
    }

    if (contactForm) {
        contactForm.addEventListener("submit", validateForm);
    }

    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            themeBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
        });
    }
});
