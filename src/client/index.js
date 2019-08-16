// import on from './on';


(() => {
  window.onload = () => {
    window.setTimeout(() => {
      document.querySelector('body').classList.remove('is-preload');
    }, 100);
    console.log('onload');
  };
})();


window.aprendeblockchain = {
  // on,
};
