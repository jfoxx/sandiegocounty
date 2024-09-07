export default function decorate(block) {
  const form = document.createElement('form');
  form.setAttribute('action', '/search'); // Set action URL
  form.setAttribute('method', 'GET'); // Set form method
  
  // Create a text input for search query
  const searchInput = document.createElement('input');
  searchInput.setAttribute('type', 'text');
  searchInput.setAttribute('name', 'query');
  searchInput.setAttribute('placeholder', 'Search...');
  searchInput.required = true; // Make it a required field

  // Create a submit button
  const submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.textContent = 'Search';

  // Append the input and button to the form
  form.appendChild(searchInput);
  form.appendChild(submitButton);

  block.textContent = '';
  block.append(form);
}