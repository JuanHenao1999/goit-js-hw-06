const ul = document.querySelector('#categories');
const items = ul.children;

console.log(`Number of categories: ${items.length}`);

for (let i = 0; i < items.length; i++) {
  console.log(`Category: ${items[i].querySelector('h2').textContent}`);
  console.log(`Elements: ${items[i].querySelectorAll('li').length}`);
}