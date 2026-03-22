// Toggle mobile navigation menu 
let togglemenu = document.querySelector(".toggle-menu");
let nav = document.querySelector(".nav");

togglemenu.addEventListener("click", function () {
  nav.classList.toggle("show");
});


// Handle contact form submission and show user feedback messages
const form = document.getElementById("contact-form");
const statusMessage = document.getElementById("form-status");
const sendBtn = document.getElementById("send-btn");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  sendBtn.disabled = true;
  statusMessage.textContent = "Sending...";
  statusMessage.className = "sending";

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      statusMessage.textContent = "Message sent successfully.";
      statusMessage.className = "success";
      form.reset();
    } else {
      statusMessage.textContent = "Failed to send message. Please try again.";
      statusMessage.className = "error";
    }
  } catch (error) {
    statusMessage.textContent = "Something went wrong. Please try again.";
    statusMessage.className = "error";
  }

  sendBtn.disabled = false;
});

// Update footer with the current year automatically
let footer = document.querySelector(".footer span");
let year = new Date();
footer.textContent = year.getFullYear();
