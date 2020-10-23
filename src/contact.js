const contact = () => {
  const spec = document.createElement('div');
  spec.className = 'contact';

  const name = document.createElement('h1');
  name.innerHTML = 'Dipesh Kumar';
  name.className = 'contact-para name';
  spec.appendChild(name);

  const gmail = document.createElement('h4');
  gmail.innerHTML = 'deepesh.97kumar@gmail.com';
  gmail.className = 'contact-para gmail';
  spec.appendChild(gmail);

  const phone = document.createElement('p');
  phone.innerHTML = '+91-6296703671';
  phone.className = 'contact-para phone';
  spec.appendChild(phone);

  return spec;
};

export default contact;