import $ from 'jquery';


// const screenHeight = $(window).height();
// const screenWidth = $(window).width();
//   $('[href^="#"]').click(function(){
//     const mainHeader = document.querySelector('.main-header');
//     const link = $(this).attr('href');
//     $(this).addClass('active').siblings().removeClass('active');
//     let coordinates = $(link).offset().top;
//
//     $('html, body').animate({scrollTop:coordinates}, 1000);
//     return false;
//   });



// Cache selectors
let lastId,
    topMenu = $(".main-header__nav"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
        let item = $($(this).attr("href"));
        if (item.length) { return item; }
    });

// console.log(menuItems);
// console.log(scrollItems);

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
    let href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 1000);
    e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
    // Get container scroll position
    let fromTop = $(this).scrollTop()+topMenuHeight;

    // Get id of current scroll item
    let cur = scrollItems.map(function(){
        if ($(this).offset().top < fromTop)
            return this;
    });
    // Get the id of the current element
    cur = cur[cur.length-1];
    let id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;
        // console.log(id);
        // console.log(menuItems.removeClass('active').end().filter("[href='#"+id+"']"));
        // Set/remove active class
        menuItems.removeClass('active').end().filter("[href='#"+id+"']").addClass('active');

    }
});