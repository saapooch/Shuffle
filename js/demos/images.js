var Shuffle = window.shuffle;

window.myShuffle = new Shuffle(document.querySelector('.my-grid-with-images'), {
  itemSelector: '.js-item',
  sizer: '.shuffle__sizer',
});
