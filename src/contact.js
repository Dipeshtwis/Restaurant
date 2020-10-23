const contact = () => {
  const spec = document.createElement('div');
  spec.style.padding = '6rem';
  const name = document.createElement('h1');
  name.innerHTML = 'Dipesh Kumar';
  name.style.cssText = 'color :white; font-size: 48px; text-align: center; margin-top: 3.5rem;';
  spec.appendChild(name);

  const gmail = document.createElement('h4');
  gmail.innerHTML = 'deepesh.97kumar@gmail.com';
  gmail.style.cssText = 'color :white; font-size: 36px; text-align: center; margin-top: 3.5rem;';
  spec.appendChild(gmail);

  const phone = document.createElement('p');
  phone.innerHTML = '+91-6296703671';
  phone.style.cssText = 'color :white; font-size: 24px; text-align: center; line-height: 40px; margin-top: 3.5rem;';
  spec.appendChild(phone);

  return spec;
};

export default contact;