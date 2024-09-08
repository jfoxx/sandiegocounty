import ffetch from '../../scripts/ffetch.js';

const allentries = await ffetch('/query-index.json').all();
function filterItems(arr, query) {
  return arr.filter((el) => el.template.includes(query));
}

/* eslint-disable prefer-const */

function formatDate(date) {
  const mydate = date.split(' ')[0];
  let year;
  let month;
  let day;
  [year, month, day] = mydate.split('-');
  const dateline = `${month}/${day}/${year}`;
  return dateline;
}

function setCarousel(block) {
    const buttons = document.createElement('ul');
    buttons.className = 'carousel-buttons';
    const nextButton = document.createElement('li');
    const prevButton = document.createElement('li');
    nextButton.className = 'nextButton';
    prevButton.className = 'prevButton';
    const btnNext = document.createElement('button');
    const btnPrev = document.createElement('button');
    btnPrev.setAttribute('disabled', 'disabled');
    nextButton.append(btnNext);
    prevButton.append(btnPrev);
    buttons.append(prevButton, nextButton);
    block.append(buttons);
    runCarousel(block);
}

function runCarousel(block){
    const carousel = block.querySelector('ul');
    carousel.classList.add('panel-1');
    const panels = Math.round(carousel.children.length / 3);
    console.log(panels);
    const nextButton = block.querySelector('.nextButton button');
    const prevButton = block.querySelector('.prevButton button');
    nextButton.addEventListener('click', function(){
        let currPanel = Number(carousel.className.replace('panel-', ''));
        currPanel ++;
        prevButton.removeAttribute('disabled');
        if (currPanel < panels) {      
            carousel.className = `panel-${currPanel}`;
            this.removeAttribute('disabled');
        } else {
            carousel.className = `panel-${panels}`;
            this.setAttribute('disabled', 'disabled');
        }
    });
    prevButton.addEventListener('click', function(){
        let currPanel = Number(carousel.className.replace('panel-', ''));
        currPanel --;
        nextButton.removeAttribute('disabled');
        if (currPanel > 1) {      
            carousel.className = `panel-${currPanel}`;
            this.removeAttribute('disabled');
        } else {
            carousel.className = `panel-1`;
            this.setAttribute('disabled', 'disabled');
        }
    });

}

export default function decorate(block) {
  const base = block.firstElementChild;
  const template = base.firstElementChild.innerText;
  const limit = base.lastElementChild.innerText;
  const list = document.createElement('ul');
  list.id = 'list';
  const match = filterItems(allentries, template);
  match.forEach((i) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = i.path;
    const img = document.createElement('img');
    img.src = i.image;
    if (img) a.append(img);
    const title = document.createElement('p')
    title.innerText = i.title;
    a.append(title);
    const date = document.createElement('span');
    date.innerText = i.pubdate;
    a.append(date);
    li.append(a);
    list.append(li);
  });
  block.textContent = '';
  block.append(list);
  setCarousel(block);
}
