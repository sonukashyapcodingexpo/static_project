/**
 * Form Validation and Submission Handling
 * Accessible, client-side progressive enhancement
 */
export function initForms() {
  const forms = document.querySelectorAll('form[data-validate="true"]');

  forms.forEach(form => {
    form.setAttribute('novalidate', 'true');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      let isValid = true;
      const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');

      inputs.forEach(input => {
        const group = input.closest('.form-group');
        const value = input.value.trim();
        let fieldValid = true;

        if (!value) {
          fieldValid = false;
        } else if (input.type === 'email') {
          // Standard RFC 5322 regex approximation
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(value)) {
            fieldValid = false;
          }
        }

        if (!fieldValid) {
          isValid = false;
          if (group) group.classList.add('has-error');
          input.setAttribute('aria-invalid', 'true');
        } else {
          if (group) group.classList.remove('has-error');
          input.removeAttribute('aria-invalid');
        }
      });

      // Clear error on input
      inputs.forEach(input => {
        input.addEventListener('input', () => {
          const group = input.closest('.form-group');
          if (group) group.classList.remove('has-error');
          input.removeAttribute('aria-invalid');
        }, { once: true });
      });

      if (!isValid) {
        const firstError = form.querySelector('.has-error input, .has-error select, .has-error textarea');
        if (firstError) firstError.focus();
        return;
      }

      // Show submitting state
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Processing...</span>';
      }

      // Simulated endpoint handling for static preview
      try {
        await new Promise(resolve => setTimeout(resolve, 800));

        // Display success banner
        let successNotice = form.querySelector('.form-success-message');
        if (!successNotice) {
          successNotice = document.createElement('div');
          successNotice.className = 'form-success-message';
          successNotice.style.cssText = 'padding: var(--space-md); background: var(--color-success-bg); color: var(--color-success); border-radius: var(--radius-sm); border: 1px solid var(--color-success); margin-top: var(--space-lg); font-weight: var(--fw-medium);';
          form.appendChild(successNotice);
        }
        successNotice.textContent = 'Thank you! Your enquiry has been received. Our team will review your requirements and respond within 1 business day.';
        successNotice.focus();

        form.reset();
      } catch (err) {
        alert('An unexpected error occurred. Please try again or reach out to us directly via email.');
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        }
      }
    });
  });
}

