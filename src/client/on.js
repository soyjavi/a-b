import fingerprint from './fingerprint';

const IS_EMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line
const HEADERS = {
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'X-Requested-With': 'XMLHttpRequest',
};


const queryString = (props = {}) => (
  Object.keys(props)
    .filter(key => props[key] !== undefined && props[key] !== '')
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(props[key])}`)
    .join('&') // eslint-disable-line
);

document.querySelector('#email').addEventListener('keyup', ({ target: { value } }) => {
  const el = document.querySelector('button')

  if (IS_EMAIL.test(value)) el.removeAttribute('disabled');
  else el.setAttribute('disabled', '');
});

export default {
  async paymentBTC(el) {
    const [{ value: email }, { value: address }] = el.parentNode.children;

    if (!IS_EMAIL.test(email)) return;

    el.setAttribute('disabled', '');
    el.innerHTML = 'Enviando...';

    const response = await fetch('/payment/bitcoin', {
      headers: { ...HEADERS },
      method: 'POST',
      body: queryString({ email, address }),
    }).catch(e => console.error(e));

    if (response) {
      const json = await response.json();
      console.log('on.paymentBTC', json);
    }


    el.innerHTML = 'He realizado el pago';
    el.removeAttribute('disabled', '');
  },
};
