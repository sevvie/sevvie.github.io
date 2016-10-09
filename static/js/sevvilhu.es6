---
---
$('.sidebar').affix({
  offset: { top: 245 }
});

let navHeight = $('.navbar').outerHeight(true) + 10;

$(document.body).scrollspy({
  target: '.sidebar',
  offset: navHeight
});
