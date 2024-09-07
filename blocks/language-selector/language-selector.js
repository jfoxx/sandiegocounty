export default function decorate(block) {
  const button = document.createElement('button');
  button.innerText = 'Languages';
  block.textContent = '';
  block.append(button);
}
