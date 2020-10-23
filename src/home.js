const home = () => {
  const spec = document.createElement('div');
  spec.style.padding = '6rem';
  const head = document.createElement('h1');
  head.innerHTML = 'Welcome to the Fast Food Restaurant';
  head.style.cssText = 'color :white; font-size: 48px; text-align: center; margin-top: 3.5rem;';
  spec.appendChild(head);

  const para = document.createElement('p');
  para.innerHTML = 'Indian Accent is one of New Delhi’s, in fact India’s most prized restaurants. Chef Manish Mehrotra expertly crafts Indian dishes so that they retain their original charm but also have a touch of modernity. Known for its butter chicken kulchas, melt-in-your-mouth naans, delicious dals and exquisitely plated, inventive desserts, Indian Accent is the place to be for a dinner to remember.';
  para.style.cssText = 'color :white; font-size: 24px; line-height: 40px; padding: 5rem;';
  spec.appendChild(para);

  return spec;
};

export default home;