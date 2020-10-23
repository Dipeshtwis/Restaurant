import nav from './nav';
import home from './home';
import menu from './menu';
import contact from './contact';

const parent = document.getElementById('content');
parent.style.background = "url('assets/img/b.jpg') center no-repeat";

parent.appendChild(nav());
const link = document.querySelectorAll('.links');
const main = document.createElement('div');

main.appendChild(home());
parent.appendChild(main);

const tab = (lid) => {
  let a;
  if (lid === 'home') a = home();
  if (lid === 'menu') a = menu();
  if (lid === 'contact') a = contact();

  return a;
};


link.forEach((li) => {
  li.addEventListener('click', () => {
    const element = tab(li.id);
    main.innerHTML = '';
    main.appendChild(element);
  });
});
