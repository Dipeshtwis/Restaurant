import nav from './nav';
import home from './home';
import contact from './contact';

const parent = document.getElementById('content');
parent.style.background = "url('b.jpg') center";

parent.appendChild(nav());
parent.appendChild(home());
// parent.appendChild(menu());
// parent.appendChild(contact());

// const img = document.createElement('img');
// img.src = "b.jpg";
// img.alt = 'img';
// spec.appendChild(img);
