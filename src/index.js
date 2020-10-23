import nav from './nav';
import home from './home';
import menu from './menu';
import contact from './contact';

const parent = document.getElementById('content');
parent.style.background = "url('assets/img/b.jpg') center no-repeat";

parent.appendChild(nav());
const link = document.querySelectorAll('.links');
parent.appendChild(home());

const tab = (linkId) => {
  let a;
  if (linkId === 'home') a = home();
  if (linkId === 'menu') a = menu();
  if (linkId === 'contact') a = contact();

  return a;
};


link.forEach((li) => {
  li.addEventListener('click', () => {
    const element = tab(li.id);
    parent.removeChild(parent.childNodes[1]);
    parent.appendChild(element);
  });
});
