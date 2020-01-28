import $ from 'jquery';

//Cache selectors
let lastId,
    rightMenu = $('.vertical-nav'),
    topMenu = $(".main-header__nav"),
    topMenuHeight = topMenu.outerHeight()+15,

    // All list items
    menuItems = topMenu.find("a"),
    rightMenuItems = rightMenu.find("a"),

    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
        let item = $($(this).attr("href"));
        if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation

menuItems.click(function(e){
    let href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;

    $('.active').removeClass('active');
    $(this).addClass('active').siblings().removeClass('active');

    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 1000);
    e.preventDefault();
});

rightMenuItems.click(function(e){
    let href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;

    $('.vert-active').removeClass('.vert-active');
    $(this).addClass('.vert-active').siblings().removeClass('.vert-active');

    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 1000);
    e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
    // Get container scroll position
    let windowOffset;
    if ($(window).width() >= 1800 ) { windowOffset = 100;} else { windowOffset = 0; }
    let fromTop = $(this).scrollTop() + topMenuHeight + windowOffset;

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
        // Set/remove active class
        $('.active').removeClass('active');
        menuItems.filter("[href='#"+id+"']").addClass('active').siblings().removeClass('active');

        $('.vert-active').removeClass('vert-active');
        rightMenuItems.filter("[href='#"+id+"']").addClass('vert-active').siblings().removeClass('vert-active');

    }
});

