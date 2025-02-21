 document.getElementById("contactForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const submitBtn = document.getElementById("submitBtn");
    const loadingText = document.getElementById("loadingText");

    submitBtn.disabled = true;
    submitBtn.innerText = "Sending...";
    loadingText.style.display = "block"; // ✅ Show loading text

    const formData = {
      name: document.querySelector('input[name="name"]').value,
      email: document.querySelector('input[name="email"]').value,
      message: document.querySelector('textarea[name="message"]').value,
    };

    try {
      const response = await fetch("https://my-portfolio-backend-rfbf.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      alert(result.message);
      document.getElementById("contactForm").reset();
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send the message. Please try again later.");
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerText = "Send Message";
      loadingText.style.display = "none"; // ✅ Hide loading text
    }
  });
