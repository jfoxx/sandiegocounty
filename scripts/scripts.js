import {
  buildBlock,
  loadHeader,
  loadFooter,
  decorateButtons,
  decorateIcons,
  decorateSections,
  decorateBlock,
  decorateBlocks,
  decorateTemplateAndTheme,
  waitForFirstImage,
  loadBlock,
  loadSection,
  loadSections,
  loadCSS,
  sampleRUM,
  getMetadata,
} from './aem.js';
import ffetch from './ffetch.js';

/**
 * Builds hero block and prepends to main in a new section.
 * @param {Element} main The container element
 */
function buildHeroBlock(main) {
  const h1 = main.querySelector('h1');
  const picture = main.querySelector('picture');
  // eslint-disable-next-line no-bitwise
  if (h1 && picture && (h1.compareDocumentPosition(picture) & Node.DOCUMENT_POSITION_PRECEDING)) {
    const section = document.createElement('div');
    section.append(buildBlock('hero', { elems: [picture, h1] }));
    main.prepend(section);
  }
}

async function loadSubNav(header) {
  const sectionNav = buildBlock('subnav', '');
  header.append(sectionNav);
  decorateBlock(sectionNav);
  return loadBlock(sectionNav);
}

async function latestNewsBlock(aside) {
  const div = document.createElement('div');
  div.className = 'latest-news';
  const title = document.createElement('h3');
  title.innerText = 'Latest News';
  const list = document.createElement('ul');
  const allentries = await ffetch('/query-index.json').all();
  function filterItems(arr, query) {
    return arr.filter((el) => el.template.includes(query));
  }
  const match = filterItems(allentries, 'News');
  match.forEach((i) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = i.path;
    a.innerText = i.title;
    li.append(a);
    list.append(li);
  });
  div.append(title, list);
  aside.append(div);
}

function newsTemplate(main) {
  const titleBar = document.createElement('div');
  titleBar.className = 'article-header';
  const category = document.createElement('span');
  category.className = 'category';
  category.innerText = getMetadata('category');
  const date = document.createElement('span');
  date.className = 'pubdate';
  date.innerText = getMetadata('pubdate');
  const title = document.querySelector('h1');
  titleBar.append(category, date, title);

  const mainContent = document.createElement('div');
  mainContent.className = 'main-content';
  mainContent.innerHTML = main.innerHTML;
  const aside = document.createElement('aside');
  aside.className = 'secondary-content';

  main.textContent = '';
  main.append(titleBar, mainContent, aside);
}

/**
 * load fonts.css and set a session storage flag
 */
async function loadFonts() {
  await loadCSS(`${window.hlx.codeBasePath}/styles/fonts.css`);
  try {
    if (!window.location.hostname.includes('localhost')) sessionStorage.setItem('fonts-loaded', 'true');
  } catch (e) {
    // do nothing
  }
}

/**
 * Builds all synthetic blocks in a container element.
 * @param {Element} main The container element
 */
function buildAutoBlocks(main) {
  try {
    buildHeroBlock(main);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Auto Blocking failed', error);
  }
}

/**
 * Decorates the main element.
 * @param {Element} main The main element
 */
// eslint-disable-next-line import/prefer-default-export
export function decorateMain(main) {
  // hopefully forward compatible button decoration
  decorateButtons(main);
  decorateIcons(main);
  buildAutoBlocks(main);
  decorateSections(main);
  decorateBlocks(main);
}

/**
 * Loads everything needed to get to LCP.
 * @param {Element} doc The container element
 */
async function loadEager(doc) {
  document.documentElement.lang = 'en';
  decorateTemplateAndTheme();
  const main = doc.querySelector('main');
  const template = getMetadata('template');
  if (main) {
    decorateMain(main);
    if (template === 'News') {
      newsTemplate(main);
    }
    document.body.classList.add('appear');
    await loadSection(main.querySelector('.section'), waitForFirstImage);
  }

  sampleRUM.enhance();

  try {
    /* if desktop (proxy for fast connection) or fonts already loaded, load fonts.css */
    if (window.innerWidth >= 900 || sessionStorage.getItem('fonts-loaded')) {
      loadFonts();
    }
  } catch (e) {
    // do nothing
  }
}

/**
 * Loads everything that doesn't need to be delayed.
 * @param {Element} doc The container element
 */
async function loadLazy(doc) {
  const main = doc.querySelector('main');
  await loadSections(main);

  const { hash } = window.location;
  const element = hash ? doc.getElementById(hash.substring(1)) : false;
  if (hash && element) element.scrollIntoView();

  const header = doc.querySelector('header');

  loadHeader(header);
  loadFooter(doc.querySelector('footer'));

  const template = getMetadata('template');
  if (template) {
    loadSubNav(header);
  }

  loadCSS(`${window.hlx.codeBasePath}/styles/lazy-styles.css`);
  loadFonts();

  if (template === 'News') {
    const aside = document.querySelector('aside');
    latestNewsBlock(aside);
  }
}

/**
 * Loads everything that happens a lot later,
 * without impacting the user experience.
 */
function loadDelayed() {
  // eslint-disable-next-line import/no-cycle
  window.setTimeout(() => import('./delayed.js'), 3000);
  // load anything that can be postponed to the latest here
}

async function loadPage() {
  await loadEager(document);
  await loadLazy(document);
  loadDelayed();
}

loadPage();
