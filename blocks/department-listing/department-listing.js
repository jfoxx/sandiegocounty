export default function decorate(block) {
  const search = document.createElement('div');
  search.className = 'department-listing-search';
  const searchField = document.createElement('input');
  searchField.id = 'department-listing-search-field';
  searchField.setAttribute('placeholder', 'Filter departments by title, keyword or acronym');
  search.append(searchField);
  const headerRow = document.createElement('div');
  headerRow.className = 'header-row';
  const deptHeader = document.createElement('div');
  const connectHeader = document.createElement('div');
  const keywords = document.createElement('div');
  deptHeader.textContent = 'Department';
  connectHeader.textContent = 'Connect';
  headerRow.append(deptHeader, connectHeader, keywords);
  block.prepend(headerRow);
  block.prepend(search);
  const buttons = block.querySelectorAll('a.button');
  buttons.forEach((i) => {
    i.classList.remove('button');
  });
}
