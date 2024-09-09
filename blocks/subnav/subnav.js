import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

export default async function decorate(block) {
  // load nav as fragment
  const template = getMetadata('template').toLowerCase();
  if (template) {
    const navPath = `/section-navigation/${template}-nav`;
    const fragment = await loadFragment(navPath);

    // decorate nav DOM
    block.textContent = '';
    const nav = document.createElement('nav');
    nav.id = 'subnav';
    while (fragment.firstElementChild) nav.append(fragment.firstElementChild);
    block.append(nav);
  }
}
