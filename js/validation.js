// Enquiry Form Handler (Calculates response)
const enquiryForm = document.getElementById('enquiryForm');
if (enquiryForm) {
  enquiryForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;

    const name = document.getElementById('fullName');
    const email = document.getElementById('email');
    const type = document.getElementById('enquiryType');
    const qty = document.getElementById('quantity');
    const responseBox = document.getElementById('enquiryResponse');

    // Validation
    if (!name.value.trim()) {
      document.getElementById('nameError').style.display = 'block';
      valid = false;
    } else {
      document.getElementById('nameError').style.display = 'none';
    }

    if (!email.value.includes('@')) {
      document.getElementById('emailError').style.display = 'block';
      valid = false;
    } else {
      document.getElementById('emailError').style.display = 'none';
    }

    if (!type.value) {
      document.getElementById('typeError').style.display = 'block';
      valid = false;
    } else {
      document.getElementById('typeError').style.display = 'none';
    }

    if (valid) {
      const estimatedCost = (parseFloat(qty.value) * 150).toFixed(2);
      responseBox.style.display = 'block';
      responseBox.innerHTML = `
        <h3>Enquiry Submitted Successfully!</h3>
        <p>Thank you, <strong>${name.value}</strong>.</p>
        <p>Estimated Cost/Availability Index: <strong>R ${estimatedCost}</strong> based on standard pricing models[cite: 7].</p>
        <p>Our sales support team will contact you at <em>${email.value}</em> within 24 business hours.</p>
      `;
    }
  });
}

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    const cName = document.getElementById('contactName').value;
    const cEmail = document.getElementById('contactEmail').value;
    const cMsg = document.getElementById('message').value;

    if (!cName || !cEmail.includes('@') || !cMsg) {
      e.preventDefault();
      alert('Please fill in all required contact fields properly before proceeding.');
    }
  });
}