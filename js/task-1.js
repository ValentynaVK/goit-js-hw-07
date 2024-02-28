const list = document.querySelector('#categories');
const items = [...list.children];
console.log(`Number of categories: ${items.length}`);
items.forEach(item => {
  console.log(`category: ${item.querySelector('h2').textContent}`);
  console.log(`Elements: ${item.querySelector('ul').children.length}`);
});