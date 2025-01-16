
  document.getElementById("contactForm").addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const formData = {
      name: document.querySelector('input[name="name"]').value,
      email: document.querySelector('input[name="email"]').value,
      message: document.querySelector('textarea[name="message"]').value,
    };

    try {
      // Send form data to the backend
      const response = await fetch("https://my-portfolio-backend-rfbf.onrender.com/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      alert(result.message); // Show success message from backend
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send the message. Please try again later.");
    }
  });

