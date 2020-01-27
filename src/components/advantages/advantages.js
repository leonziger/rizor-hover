import $ from 'jquery';
window.$ = window.jQuery = require('jquery');

import 'slick-carousel';

$('.advantages__slides').slick({
    dots: true,
    arrows: false
});

const video1 = $('.video1');
const video1play = $('.video1__play');
video1play.click(function(){
    video1[0].play();
});

const video2 = $('.video2');
const video2play = $('.video2__play');
video2play.click(function(){
    video2[0].play();
});

const video3 = $('.video3');
const video3play = $('.video3__play');
video3play.click(function(){
    video3[0].play();
});
