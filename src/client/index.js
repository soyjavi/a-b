import on from './on';

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
