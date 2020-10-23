const parent = document.getElementById('content');

parent.style.background = "url('b.jpg') center";

const nav = document.createElement('nav');

parent.appendChild(nav);
nav.style.cssText = "background-color: #ba8500; padding:1rem; border-radius:20px;"

const ul = document.createElement('ul');
ul.style.cssText = "list-style: none; color :white; display: flex; justify-content: space-around; "

nav.appendChild(ul);

let li = document.createElement('li')
li.innerHTML = "Home";
ul.appendChild(li);

let lit = document.createElement('li')
lit.innerHTML = "Menu";
ul.appendChild(lit);

let lite = document.createElement('li')
lite.innerHTML = "Contact";ul.appendChild(lite);



const spec = document.createElement('div');
parent.appendChild(spec);
const head = document.createElement('h1');
head.innerHTML = "Welcome to the Fast Food Restaurant";
head.style.cssText = "color :white; font-size: 48px; text-align: center; margin-top: 3rem;";
spec.appendChild(head);

const para = document.createElement('p');
para.innerHTML = "Indian Accent is one of New Delhi’s, in fact India’s most prized restaurants. Chef Manish Mehrotra expertly crafts Indian dishes so that they retain their original charm but also have a touch of modernity. Known for its butter chicken kulchas, melt-in-your-mouth naans, delicious dals and exquisitely plated, inventive desserts, Indian Accent is the place to be for a dinner to remember.";
para.style.cssText = "color :white; font-size: 24px; line-height: 40px; padding: 5rem;";
spec.appendChild(para);

const img = document.createElement('img');
// img.src = "b.jpg";
img.alt = "img";
spec.appendChild(img);
