window.$ = window.jQuery = require('jquery');
import $ from 'jquery';
require('waypoints/lib/jquery.waypoints');

import './components/main-header/main-header';
import './components/advantages/advantages';
import './components/scroll-to-anchor/scroll-to-anchor';
import './components/sticky-menu/sticky-menu';

// const navli = document.querySelectorAll('.main-header__nav a');
// console.log(navli);
// const waypoint = new Waypoint({
//     element: document.querySelectorAll('.ss'),
//     handler: function(direction) {
//         alert('You have scrolled to a thing')
//     }
// })

// $('.track').waypoint({
//     handler: function(direction) {
//         // alert('ID:' + this.element.id);
//         console.log(this.element.id);
//     },
//     offset: '20%'
// });
