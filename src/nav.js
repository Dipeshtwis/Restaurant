const nav = () => {
  const nav = document.createElement('nav');
  nav.className = 'nav-bar';

  const ul = document.createElement('ul');
  ul.className = 'nav-link';
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