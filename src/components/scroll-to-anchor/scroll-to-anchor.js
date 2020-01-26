import $ from 'jquery';


const screenHeight = $(window).height();
const screenWidth = $(window).width();
  $('[href^="#"]').click(function(){
    const mainHeader = document.querySelector('.main-header');
    const link = $(this).attr('href');
    $(this).addClass('active').siblings().removeClass('active');
    let coordinates = $(link).offset().top;

    $('html, body').animate({scrollTop:coordinates}, 1000);
    return false;
  });

