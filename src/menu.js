const menu = () => {
  const menuDiv = document.createElement('div');
  menuDiv.className = 'menu-div';

  // menu1

  const menu1 = document.createElement('div');
  menuDiv.appendChild(menu1);

  const head = document.createElement('h3');
  head.innerHTML = 'Noodles';
  head.className = 'menu-header';
  menu1.appendChild(head);

  const img = document.createElement('img');
  img.className = 'menu-img';
  img.src = 'assets/img/noodle.jpg';
  img.alt = 'img';
  menu1.appendChild(img);

  const para = document.createElement('p');
  para.innerHTML = 'Rupee 100 per/plate';
  para.className = 'menu-desc';
  menu1.appendChild(para);

  // menu2

  const menu2 = document.createElement('div');
  menuDiv.appendChild(menu2);

  const title = document.createElement('h3');
  title.innerHTML = 'Pasta';
  title.className = 'menu-header';
  menu2.appendChild(title);

  const imge = document.createElement('img');
  imge.className = 'menu-img';
  imge.src = 'assets/img/pastaa.jpg';
  imge.alt = 'imge';
  menu2.appendChild(imge);

  const desc = document.createElement('p');
  desc.innerHTML = 'Rupee 80 per/plate';
  desc.className = 'menu-desc';
  menu2.appendChild(desc);

  // menu3

  const menu3 = document.createElement('div');
  menuDiv.appendChild(menu3);

  const ti = document.createElement('h3');
  ti.innerHTML = 'Biryani';
  ti.className = 'menu-header';
  menu3.appendChild(ti);

  const image = document.createElement('img');
  image.className = 'menu-img';
  image.src = 'assets/img/biryani.jpg';
  image.alt = 'imge';
  menu3.appendChild(image);

  const des = document.createElement('p');
  des.innerHTML = 'Rupee 150 per/plate';
  des.className = 'menu-desc';
  menu3.appendChild(des);

  // menu4

  const menu4 = document.createElement('div');
  menuDiv.appendChild(menu4);

  const header = document.createElement('h3');
  header.innerHTML = 'Papdi Chaat';
  header.className = 'menu-header';
  menu4.appendChild(header);

  const im = document.createElement('img');
  im.className = 'menu-img';
  im.src = 'assets/img/chaat.jpg';
  im.alt = 'imge';
  menu4.appendChild(im);

  const de = document.createElement('p');
  de.innerHTML = 'Rupee 150 cup';
  de.className = 'menu-desc';
  menu4.appendChild(de);

  return menuDiv;
};

export default menu;