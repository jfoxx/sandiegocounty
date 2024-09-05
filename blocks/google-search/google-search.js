export default function decorate(block) {
  // Create the outermost div with id ___gcse_0
  var gcseDiv = document.createElement('div');
  gcseDiv.id = '___gcse_0';

  // Create the inner div with class gsc-control-searchbox-only
  var innerDiv = document.createElement('div');
  innerDiv.className = 'gsc-control-searchbox-only gsc-control-searchbox-only-en';
  innerDiv.setAttribute('dir', 'ltr');

  // Create the form element
  var form = document.createElement('form');
  form.className = 'gsc-search-box gsc-search-box-tools';
  form.setAttribute('accept-charset', 'utf-8');

  // Create the table for the search box
  var table = document.createElement('table');
  table.className = 'gsc-search-box';
  table.setAttribute('cellspacing', '0');
  table.setAttribute('cellpadding', '0');
  table.setAttribute('role', 'presentation');

  // Create the tbody element
  var tbody = document.createElement('tbody');

  // Create the row (tr) inside the table
  var tr = document.createElement('tr');

  // Create the input box td
  var inputTd = document.createElement('td');
  inputTd.className = 'gsc-input';

  // Create the input box container div
  var inputBoxDiv = document.createElement('div');
  inputBoxDiv.className = 'gsc-input-box';
  inputBoxDiv.id = 'gsc-iw-id1';

  // Create the inner table for the input box
  var innerTable = document.createElement('table');
  innerTable.id = 'gs_id50';
  innerTable.className = 'gstl_50 gsc-input';
  innerTable.setAttribute('cellspacing', '0');
  innerTable.setAttribute('cellpadding', '0');
  innerTable.setAttribute('role', 'presentation');
  innerTable.style.width = '100%';
  innerTable.style.padding = '0px';

  // Create the input row (tr) for the inner table
  var innerTr = document.createElement('tr');

  // Create the input field td
  var inputFieldTd = document.createElement('td');
  inputFieldTd.id = 'gs_tti50';
  inputFieldTd.className = 'gsib_a';

  // Create the input field
  var input = document.createElement('input');
  input.setAttribute('autocomplete', 'off');
  input.setAttribute('type', 'text');
  input.setAttribute('size', '10');
  input.className = 'gsc-input';
  input.name = 'search';
  input.title = 'search';
  input.setAttribute('aria-label', 'search');
  input.id = 'gsc-i-id1';
  input.setAttribute('dir', 'ltr');
  input.setAttribute('spellcheck', 'false');
  input.style = 'width: 100%; padding: 0px; border: none; margin: -0.0625em 0px 0px; height: 1.25em; background: url("https://www.google.com/cse/static/images/1x/en/branding.png") left center no-repeat rgb(255, 255, 255); outline: none;';

  // Create the clear button td
  var clearButtonTd = document.createElement('td');
  clearButtonTd.className = 'gsib_b';

  // Create the clear button div
  var clearButtonDiv = document.createElement('div');
  clearButtonDiv.className = 'gsst_b';
  clearButtonDiv.id = 'gs_st50';
  clearButtonDiv.setAttribute('dir', 'ltr');

  // Create the clear button link (a)
  var clearButtonLink = document.createElement('a');
  clearButtonLink.className = 'gsst_a';
  clearButtonLink.setAttribute('href', 'javascript:void(0)');
  clearButtonLink.title = 'Clear search box';
  clearButtonLink.setAttribute('role', 'button');
  clearButtonLink.style.display = 'none';

  // Create the clear button span
  var clearButtonSpan = document.createElement('span');
  clearButtonSpan.className = 'gscb_a';
  clearButtonSpan.id = 'gs_cb50';
  clearButtonSpan.setAttribute('aria-hidden', 'true');
  clearButtonSpan.innerHTML = '×';

  // Create the search button td
  var searchButtonTd = document.createElement('td');
  searchButtonTd.className = 'gsc-search-button';

  // Create the search button
  var searchButton = document.createElement('button');
  searchButton.className = 'gsc-search-button gsc-search-button-v2';

  // Create the SVG for the search button
  var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', '13');
  svg.setAttribute('height', '13');
  svg.setAttribute('viewBox', '0 0 13 13');

  // Create the title for the SVG
  var title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
  title.textContent = 'search';

  // Create the path for the SVG
  var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', 'm4.8495 7.8226c0.82666 0 1.5262-0.29146 2.0985-0.87438 0.57232-0.58292 0.86378-1.2877 0.87438-2.1144 0.010599-0.82666-0.28086-1.5262-0.87438-2.0985-0.59352-0.57232-1.293-0.86378-2.0985-0.87438-0.8055-0.010599-1.5103 0.28086-2.1144 0.87438-0.60414 0.59352-0.8956 1.293-0.87438 2.0985 0.021197 0.8055 0.31266 1.5103 0.87438 2.1144 0.56172 0.60414 1.2665 0.8956 2.1144 0.87438zm4.4695 0.2115 3.681 3.6819-1.259 1.284-3.6817-3.7 0.0019784-0.69479-0.090043-0.098846c-0.87973 0.76087-1.92 1.1413-3.1207 1.1413-1.3553 0-2.5025-0.46363-3.4417-1.3909s-1.4088-2.0686-1.4088-3.4239c0-1.3553 0.4696-2.4966 1.4088-3.4239 0.9392-0.92727 2.0864-1.3969 3.4417-1.4088 1.3553-0.011889 2.4906 0.45771 3.406 1.4088 0.9154 0.95107 1.379 2.0924 1.3909 3.4239 0 1.2126-0.38043 2.2588-1.1413 3.1385l0.098834 0.090049z');

  // Append title and path to the SVG
  svg.appendChild(title);
  svg.appendChild(path);

  // Append SVG to the search button
  searchButton.appendChild(svg);

  // Create the clear button td
  var clearResultsTd = document.createElement('td');
  clearResultsTd.className = 'gsc-clear-button';

  // Create the clear button div
  var clearResultsDiv = document.createElement('div');
  clearResultsDiv.className = 'gsc-clear-button';
  clearResultsDiv.title = 'clear results';
  clearResultsDiv.innerHTML = '&nbsp;';

  // Append elements together
  clearButtonLink.appendChild(clearButtonSpan);
  clearButtonDiv.appendChild(clearButtonLink);
  clearButtonTd.appendChild(clearButtonDiv);

  inputFieldTd.appendChild(input);
  innerTr.appendChild(inputFieldTd);
  innerTr.appendChild(clearButtonTd);
  innerTable.appendChild(innerTr);

  inputBoxDiv.appendChild(innerTable);
  inputTd.appendChild(inputBoxDiv);

  tr.appendChild(inputTd);
  tr.appendChild(searchButtonTd);
  tr.appendChild(clearResultsTd);

  tbody.appendChild(tr);
  table.appendChild(tbody);
  form.appendChild(table);
  innerDiv.appendChild(form);
  gcseDiv.appendChild(innerDiv);

  // Append the whole structure to the body or a specific element in your document

  block.textContent = '';
  block.append(gcseDiv);
  }
  