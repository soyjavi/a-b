import on from './on';

// -- auto-config
const { location: { protocol, href } } = window;
if (protocol !== 'https:') window.location.href = `https:${href.substring(protocol.length)}`;

(() => {
  window.onload = () => {
    window.setTimeout(() => {
      document.querySelector('body').classList.remove('is-preload');
    }, 100);
  };
})();

window.aprendeblockchain = {
  on,
};
