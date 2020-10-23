import nav from './nav';
import home from './home';

const parent = document.getElementById('content');
parent.style.background = "url('b.jpg') center";

parent.appendChild(nav());
parent.appendChild(home());

// const img = document.createElement('img');
// img.src = "b.jpg";
// img.alt = 'img';
// spec.appendChild(img);
