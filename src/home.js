const home = () => {
  const spec = document.createElement('div');
  spec.className = 'contact';

  const head = document.createElement('h1');
  head.innerHTML = 'Welcome to the Fast Food Restaurant';
  head.className = 'name contact-para';
  spec.appendChild(head);

  const para = document.createElement('p');
  para.className = 'contact-para phone pad';
  para.innerHTML = 'Indian Accent is one of New Delhi’s, in fact India’s most prized restaurants. Chef Manish Mehrotra expertly crafts Indian dishes so that they retain their original charm but also have a touch of modernity. Known for its butter chicken kulchas, melt-in-your-mouth naans, delicious dals and exquisitely plated, inventive desserts, Indian Accent is the place to be for a dinner to remember.';
  spec.appendChild(para);

  return spec;
};

export default home;