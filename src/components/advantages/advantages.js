import $ from 'jquery';
window.$ = window.jQuery = require('jquery');

import 'slick-carousel';

$('.advantages__slides').slick({
    dots: true,
    arrows: false
});
