import home from './home';

const parent = document.getElementById('content');
parent.style.background = "url('b.jpg') center";

const nav = document.createElement('nav');
parent.appendChild(nav);
nav.style.cssText = 'background-color: #ba8500; padding:1rem; border-radius:20px;';

const ul = document.createElement('ul');
ul.style.cssText = 'list-style: none; color :white; display: flex; justify-content: space-around;';
nav.appendChild(ul);

const li = document.createElement('li');
li.innerHTML = 'Home';
ul.appendChild(li);

const lit = document.createElement('li');
lit.innerHTML = 'Menu';
ul.appendChild(lit);

const lite = document.createElement('li');
lite.innerHTML = 'Contact';
ul.appendChild(lite);

parent.appendChild(home());

// const img = document.createElement('img');
// img.src = "b.jpg";
// img.alt = 'img';
// spec.appendChild(img);
