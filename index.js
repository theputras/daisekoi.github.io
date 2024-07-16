const input = document.getElementById('sekte');
const dropdownContent = document.querySelector('.dropdown-content');
const alasanForm = document.querySelector('.alasan-form');
const resetFormButton = document.getElementById('resetFormButton');

// Show dropdown on input click or focus
input.addEventListener('click', (e) => {
  dropdownContent.style.display = 'block';
});

input.addEventListener('focus', (e) => {
  dropdownContent.style.display = 'block';
});

// Prevent default behavior on mousedown in dropdown
dropdownContent.addEventListener('mousedown', (e) => {
  e.preventDefault();
});

// Hide dropdown on blur if not clicking within it
input.addEventListener('blur', (e) => {
  if (!dropdownContent.contains(document.activeElement)) {
    dropdownContent.style.display = 'none';
  }
});

// Filter dropdown options based on input value
input.addEventListener('input', (e) => {
  const inputValue = e.target.value.toLowerCase();
  const options = dropdownContent.querySelectorAll('a');

  options.forEach((option) => {
    const optionValue = option.textContent.toLowerCase();
    option.style.display = optionValue.includes(inputValue) ? 'block' : 'none';
  });
});

// Handle dropdown option click
dropdownContent.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    const value = e.target.getAttribute('data-value');
    input.value = value;
    dropdownContent.style.display = 'none';
    input.blur();

    

    if (selectedSection) {
      selectedSection.style.display = 'flex';
      selectedSection.style.flexDirection = 'column';
      selectedSection.style.alignItems = 'start';
      selectedSection.style.gap = '20px';
      selectedSection.querySelectorAll('input').forEach(input => {
        input.setAttribute('required', 'required');
      });

      // Append the alasan-form to the selected section
      selectedSection.appendChild(alasanForm);
      alasanForm.style.display = 'block';
    }
  }
});


// Handle form reset
resetFormButton.addEventListener('click', () => {
  const form = document.forms['submit-to-google-sheet'];

  // Clear all input fields
  form.reset();

  // Hide all sections
  [hololive, jkt48, game, anime, kritik, tokusatsu, kpop].forEach(section => {
    section.style.display = 'none';
  });

  // Hide the alasan form
  alasanForm.style.display = 'none';

  // Clear the dropdown input field
  input.value = '';
});