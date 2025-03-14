const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});


// Get modal element
var modal = document.getElementById("modal");

// Get button that opens the modal
var btn = document.getElementById("btn");

// Get the close button
var closeButton = document.getElementsByClassName("close-button")[0];

// Get the input field and send button
var inputField = modal.querySelector("input[type='text']");
var sendButton = modal.querySelector("button");

// Get the success message div
var successMessage = document.getElementById("success-message");

// Ensure modal is hidden on page load
modal.style.display = "none";

// Function to show modal when button is clicked
btn.onclick = function () {
    modal.style.display = "flex"; // Show modal
    setTimeout(() => modal.classList.add("show"), 10); // Trigger animation
};

// Function to hide modal
function hideModal() {
    modal.classList.remove("show");
    setTimeout(() => {
        modal.style.display = "none";
        inputField.value = ""; // Clear input field
        successMessage.style.display = "none"; // Hide message
    }, 300); // Wait for animation
}

// Close modal when clicking close button
closeButton.onclick = hideModal;

// Close modal when clicking outside of it
window.onclick = function (event) {
    if (event.target === modal) {
        hideModal();
    }
};

// Handle send button
sendButton.onclick = function () {
    var message = inputField.value.trim();
    if (message !== "") {
        successMessage.style.display = "block"; // Show success message
        successMessage.textContent = "Your message has been sent successfully!";
        setTimeout(hideModal, 2000); // Close modal after 2 sec
    } else {
        alert("Please enter a message.");
    }
};

// Get elements
var resumeImg = document.getElementById("resumeImg");
var previewBtn = document.getElementById("previewBtn");
var downloadBtn = document.getElementById("downloadBtn");

// Preview Button: Show full image
previewBtn.onclick = function () {
    resumeImg.style.height = "auto"; // Show full image
    resumeImg.parentElement.style.height = "auto"; // Expand container
};

// Download Button: Save the image
downloadBtn.onclick = function () {
    var link = document.createElement("a");
    link.href = resumeImg.src;
    link.download = "resume.png"; // Download as "resume.png"
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
document.querySelectorAll(".cool img").forEach(img => {
    img.addEventListener("mousemove", function (e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left; // Cursor X position relative to image
        const y = e.clientY - rect.top;  // Cursor Y position relative to image

        // Calculate how much the image should move
        const moveX = (x - rect.width / 2) * 0.1; // Adjust sensitivity
        const moveY = (y - rect.height / 2) * 0.1;

        // Apply transform
        this.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    img.addEventListener("mouseleave", function () {
        this.style.transform = "translate(0, 0)"; // Reset position on mouse leave
    });
});


document.querySelectorAll(".project1 img").forEach(img => {
    img.addEventListener("mousemove", function (e) {
        const rect = this.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5; // Normalize (-0.5 to 0.5)
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        // Rotate based on cursor position
        const rotateX = y * 20; // Adjust tilt sensitivity
        const rotateY = -x * 20;

        this.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
    });

    img.addEventListener("mouseleave", function () {
        this.style.transform = "perspective(500px) rotateX(0) rotateY(0) scale(1)";
        this.style.transition = "transform 0.3s ease";
    });
});

document.querySelectorAll(".icon ").forEach(img => {
    img.addEventListener("mousemove", function (e) {
        const rect = this.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5; // Normalize (-0.5 to 0.5)
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        // Rotate based on cursor position
        const rotateX = y * 20; // Adjust tilt sensitivity
        const rotateY = -x * 20;

        this.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
    });

    img.addEventListener("mouseleave", function () {
        this.style.transform = "perspective(500px) rotateX(0) rotateY(0) scale(1)";
        this.style.transition = "transform 0.3s ease";
    });
});
document.querySelectorAll(".resumeInfo ").forEach(img => {
    img.addEventListener("mousemove", function (e) {
        const rect = this.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5; // Normalize (-0.5 to 0.5)
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        // Rotate based on cursor position
        const rotateX = y * 20; // Adjust tilt sensitivity
        const rotateY = -x * 20;

        this.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
    });

    img.addEventListener("mouseleave", function () {
        this.style.transform = "perspective(500px) rotateX(0) rotateY(0) scale(1)";
        this.style.transition = "transform 0.3s ease";
    });
});


// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth"
            });
        }
    });
});
