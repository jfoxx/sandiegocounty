export default function decorate(block) {
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('.icon')) {
        div.className = 'tiles-tile-icon';
        const icon = div.querySelector('img').getAttribute('src');
        div.style.maskImage = `url(${icon})`;
      } else div.className = 'tiles-tile-body';
    });
    ul.append(li);
  });
  block.textContent = '';
  block.append(ul);
}
