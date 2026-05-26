function initContactForm() {
  const form = $('#contact-form');
  if (!form) return;

  const nameInput = $('#contact-name');
  const emailInput = $('#contact-email');
  const subjectInput = $('#contact-subject');
  const messageInput = $('#contact-message');
  const submitBtn = $('.form-submit');
  const successEl = $('.form-success');
  const fallbackMsg = $('.form-fallback');

  function showError(input, message) {
    const errorEl = input.parentElement.querySelector('.form-error');
    input.classList.add('error');
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.add('visible');
    }
  }

  function clearError(input) {
    const errorEl = input.parentElement.querySelector('.form-error');
    input.classList.remove('error');
    if (errorEl) {
      errorEl.textContent = '';
      errorEl.classList.remove('visible');
    }
  }

  function validate() {
    let valid = true;

    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      showError(nameInput, 'Name must be at least 2 characters');
      valid = false;
    } else {
      clearError(nameInput);
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      showError(emailInput, 'Please enter a valid email');
      valid = false;
    } else {
      clearError(emailInput);
    }

    if (!subjectInput.value.trim() || subjectInput.value.trim().length < 3) {
      showError(subjectInput, 'Subject must be at least 3 characters');
      valid = false;
    } else {
      clearError(subjectInput);
    }

    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      showError(messageInput, 'Message must be at least 10 characters');
      valid = false;
    } else {
      clearError(messageInput);
    }

    return valid;
  }

  form.addEventListener('submit', async e => {
    e.preventDefault();

    if (!validate()) return;

    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    if (fallbackMsg) fallbackMsg.classList.remove('visible');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: nameInput.value.trim(),
          email: emailInput.value.trim(),
          subject: subjectInput.value.trim(),
          message: messageInput.value.trim()
        })
      });

      if (!res.ok) throw new Error('Server error');

      form.style.display = 'none';
      successEl.classList.add('visible');
    } catch (err) {
      console.error('Contact form error:', err);
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;
      if (fallbackMsg) {
        fallbackMsg.classList.add('visible');
      } else {
        alert('Failed to send. Please email me directly at hello@elainees.dev');
      }
    }
  });

  [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
    input.addEventListener('blur', () => validate());
    input.addEventListener('input', () => {
      if (input.classList.contains('error')) validate();
    });
  });
}
