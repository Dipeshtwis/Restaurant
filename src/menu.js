const menu = () => {
  const spec = document.createElement('div');
  spec.style.cssText = 'display: grid; grid-template-columns: repeat(2,1fr); padding:3rem;';

  const menu1 = document.createElement('div');
  spec.appendChild(menu1);

  const head = document.createElement('h3');
  head.innerHTML = 'Noodles';
  head.style.cssText = 'color :white; font-size: 24px; margin: .5rem 0;';
  menu1.appendChild(head);

  const img = document.createElement('img');
  img.style.cssText = 'height: 200px';
  img.src = 'b.jpg';
  img.alt = 'img';
  menu1.appendChild(img);

  const para = document.createElement('p');
  para.innerHTML = 'Rupee 100 per/plate';
  para.style.cssText = 'color :white; font-size: 12px; line-height: 30px; padding: 3rem;';
  menu1.appendChild(para);

  // menu2

  const menu2 = document.createElement('div');
  spec.appendChild(menu2);

  const title = document.createElement('h3');
  title.innerHTML = 'Pasta';
  title.style.cssText = 'color :white; font-size: 24px; margin: .5rem 0;';
  menu2.appendChild(title);

  const imge = document.createElement('img');
  imge.style.cssText = 'height: 200px';
  imge.src = 'b.jpg';
  imge.alt = 'imge';
  menu2.appendChild(imge);

  const desc = document.createElement('p');
  desc.innerHTML = 'Rupee 80 per/plate';
  desc.style.cssText = 'color :white; font-size: 12px; line-height: 30px; padding: 3rem;';
  menu2.appendChild(desc);

  // menu3

  const menu3 = document.createElement('div');
  spec.appendChild(menu3);

  const ti = document.createElement('h3');
  ti.innerHTML = 'Coffee';
  ti.style.cssText = 'color :white; font-size: 24px; margin: .5rem 0;';
  menu3.appendChild(ti);

  const image = document.createElement('img');
  image.style.cssText = 'height: 200px';
  image.src = 'b.jpg';
  image.alt = 'imge';
  menu3.appendChild(image);

  const des = document.createElement('p');
  des.innerHTML = 'Rupee 150 cup';
  des.style.cssText = 'color :white; font-size: 12px; line-height: 30px; padding: 3rem;';
  menu3.appendChild(des);

  // menu4

  const menu4 = document.createElement('div');
  spec.appendChild(menu4);

  const header = document.createElement('h3');
  header.innerHTML = 'Chowmein';
  header.style.cssText = 'color :white; font-size: 24px; margin: .5rem 0;';
  menu4.appendChild(header);

  const im = document.createElement('img');
  im.style.cssText = 'height: 200px';
  im.src = 'b.jpg';
  im.alt = 'imge';
  menu4.appendChild(im);

  const de = document.createElement('p');
  de.innerHTML = 'Rupee 150 cup';
  de.style.cssText = 'color :white; font-size: 12px; line-height: 30px; padding: 3rem;';
  menu4.appendChild(de);

  return spec;
};

export default menu;