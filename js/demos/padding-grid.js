'use strict';

window.demo = new window.shuffle(document.getElementById('grid'), {
  itemSelector: '.grid__brick',
  sizer: document.querySelector('#grid .shuffle__sizer'),
});
