const nav = () => {
  const nav = document.createElement('nav');
  nav.style.cssText = 'background-color: #ba8500; padding:1rem; border-radius:20px;';

  const ul = document.createElement('ul');
  ul.style.cssText = 'list-style: none; color :white; display: flex; justify-content: space-around;';
  nav.appendChild(ul);

  const li = document.createElement('li');
  li.className = 'links';
  li.id = 'home';
  li.innerHTML = 'Home';
  ul.appendChild(li);

  const lit = document.createElement('li');
  lit.className = 'links';
  lit.id = 'menu';
  lit.innerHTML = 'Menu';
  ul.appendChild(lit);

  const lite = document.createElement('li');
  lite.className = 'links';
  lite.id = 'contact';
  lite.innerHTML = 'Contact';
  ul.appendChild(lite);

  return nav;
};

export default nav;