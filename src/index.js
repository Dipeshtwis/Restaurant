import nav from './nav';
import home from './home';
import menu from './menu';
import contact from './contact';

const parent = document.getElementById('content');
parent.style.background = "url('assets/img/b.jpg') center";

parent.appendChild(nav());
parent.appendChild(home());
parent.appendChild(menu());
parent.appendChild(contact());
