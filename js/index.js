// Read More

$(document).ready(function() {
    var showChar = 520;  // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "Read More >";
    var lesstext = "Read Less";
    
    $('.DescriptionMore').each(function() {
        var content = $(this).html();
        if(content.length > showChar) {
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
            $(this).html(html);
        }
    });
 
    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});

// Owl Slider 

$("#Popular").owlCarousel({margin: 15,animateOut: 'linear',center:false,smartSpeed: 1000,touchDrag  : true,mouseDrag  : true, autoplay: 2000,dots: false,nav: true,navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],loop: true,responsive: {0: {items: 1},400: {items: 1.5},700: {items: 2},1000: {items: 3},},});

$("#Advertisement").owlCarousel({
    margin: 0,
    animateOut: 'linear',
    center:false,
    smartSpeed: 1000,
    touchDrag  : true,
    mouseDrag  : true, 
    autoplay: 2000,
    dots: true,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    loop: true,
    responsive: {
        0: {items: 1},
        600: {items: 2},
        1000: {items: 3},
    },
});

$("#Advertisement2").owlCarousel({
    margin: 0,
    animateOut: 'linear',
    center:false,
    smartSpeed: 1000,
    touchDrag  : true,
    mouseDrag  : true, 
    autoplay: 2000,
    dots: true,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    loop: true,
    responsive: {
        0: {items: 1},
        600: {items: 2},
        1000: {items: 3},
    },
});

$("#IndustriesSlide").owlCarousel({
    margin: 0,
    animateOut: 'linear',
    center:true,
    smartSpeed: 1000,
    touchDrag  : false,
    mouseDrag  : false, 
    autoWidth:true,
    // autoplay: 5000,
    touchDrag  : true,
    mouseDrag  : true,
    dots: false,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    loop: false,
    responsive: {
        0: {items: 2},
        600: {items: 4},
        1000: {items: 7},
    },
});


$("#JobSubCategorySlide").owlCarousel({
    margin: 0,
    animateOut: 'linear',
    smartSpeed: 1000,
    touchDrag  : false,
    mouseDrag  : false, 
    autoWidth:true,
    // autoplay: 5000,
    touchDrag  : true,
    mouseDrag  : true,
    dots: false,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    loop: false,
    responsive: {
        0: {items: 2},
        600: {items: 4},
        1000: {items: 10},
    },
});

$("#IndustriesSlide2").owlCarousel({
    margin: 0,
    animateOut: 'linear',
    center:false,
    smartSpeed: 1000,
    touchDrag  : true,
    mouseDrag  : true, 
    autoWidth:true,
    // autoplay: 5000,
    touchDrag  : true,
    mouseDrag  : true,
    dots: false,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    loop: false,
    responsive: {
        0: {items: 2},
        600: {items: 4},
        1000: {items: 6},
    },
});

$("#JobSlider").owlCarousel({
    margin: 0,
    animateOut: 'linear',
    center:false,
    smartSpeed: 1000,
    touchDrag  : true,
    mouseDrag  : true, 
    autoplay: 5000,
    dots: false,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    loop: false,
    responsive: {
        0: {items: 1},
        600: {items: 2},
        1000: {items: 3},
        1300: {items: 4},
    },
});

$("#EmployerSlider").owlCarousel({
    margin: 20,
    animateOut: 'linear',
    center:false,
    smartSpeed: 1000,
    touchDrag  : true,
    mouseDrag  : true, 
    autoplay: 5000,
    dots: false,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    loop: false,
    responsive: {
        0: {items: 1},
        400: {items: 1.2},
        700: {items: 2},
        1000: {items: 3}, 
    },
});

$("#CitySlider").owlCarousel({
    margin: 20,
    animateOut: 'linear',
    center:false,
    smartSpeed: 1000,
    touchDrag  : true,
    mouseDrag  : true, 
    autoplay: 5000,
    dots: false,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    loop: true,
    responsive: {
        0: {items: 1},
        400: {items: 1.2,margin: 10,},
        700: {items: 1},
        1000: {items: 3}, 
    },
});

$("#IndustriesJob").owlCarousel({
    margin: 0,
    animateOut: 'linear',
    center:false,
    smartSpeed: 1000,
    touchDrag  : true,
    mouseDrag  : true, 
    autoplay: 5000,
    dots: true,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    loop: false,
    responsive: {
        0: {items: 1},
        600: {items: 2},
        1000: {items: 4}, 
    },
});

$("#CityJobSlider").owlCarousel({
    margin: 20,
    animateOut: 'linear',
    center:false,
    smartSpeed: 1000,
    touchDrag  : true,
    mouseDrag  : true, 
    autoplay: 5000,
    dots: false,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    loop: false,
    responsive: {
        0: {items: 1},
        600: {items: 3},
        1000: {items: 4}, 
        1550: {items: 5}, 
    },
});

$("#PromiseSlider").owlCarousel({
    margin: 60,
    animateOut: 'linear',
    center:false,
    smartSpeed: 1000,
    touchDrag  : true,
    mouseDrag  : true, 
    autoplay: 5000,
    dots: false,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    // navText: ["<img src='images/Arrow.png'>","<img src='images/Arrow.png'>"],
    loop: false,
    responsive: {
        0: {items: 1},
        600: {items: 1},
        1000: {items: 1}, 
    },
});

$("#Trusted").owlCarousel({
    margin: 60,
    animateOut: 'linear',
    center:false,
    smartSpeed: 1000,
    touchDrag  : true,
    mouseDrag  : true, 
    autoplay: 5000,
    dots: false,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    loop: false,
    responsive: {
        0: {items: 1},
        600: {items: 3},
        1000: {items: 6}, 
        1550: {items: 9}, 
    },
});

$("#NavSlider").owlCarousel({
    margin: 15,
    animateOut: 'linear', 
    smartSpeed: 1000,
    touchDrag  : false,
    mouseDrag  : false, 
    autoWidth:true, 
    touchDrag  : true,
    mouseDrag  : true,
    dots: false,
    nav: false,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    loop: false,
    responsive: {
        0: {items: 2},
        600: {items: 4},
        1000: {items: 7},
    },
});

// JobCategory Active Class

$(".JobCategoryIcon").click(function () {
    $(".JobCategoryIcon").removeClass("active");
    $(this).addClass("active");
});

$(".dropdown").click(function () {
    $(".dropdown").removeClass("show");
    $(this).addClass("show");
});

$("p span").click(function () { 
    $(".dropdown").removeClass("show"); 
});

$(".JobBox").click(function () {
    $(".JobBox").removeClass("active");
    $(this).addClass("active");
});

$(".FilterSearch").click(function () {
    $(this).addClass("active"); 
});

$("body").click(function () {
    $(".FilterSearch").addClass("active"); 
});

// Insight Grid 

$('.Insightgrid').masonry({
    itemSelector: '.Insight-item',
}); 


// $('.CompanyGrid').masonry({
//     itemSelector: '.Company-Item',
// }); 


$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 160) {
      $(".JobFilterArea").addClass("Fixed");
    } else {
      $(".JobFilterArea").removeClass("Fixed");
    }
});

$(document).ready(function(){
    $(".navbar-toggler").click(function(){
        $(".navbar-toggler").toggleClass("Open");
        $("body").toggleClass("MenuOpen");
        $("#Menu").toggleClass("MenuShow");
    });
});
// $(document).ready(function(){
//     $(".JobBox").click(function() {
//         $('html,body').animate({scrollTop: $("#CompanyDetailsBlock").offset().top},'slow');
//     });
// });

// Scroll Bottom to top
 
$(function() {
    $(document).on('scroll', function() {
        if ($(window).scrollTop() > 100) {
            $('.scroll-top-wrapper').addClass('show');
        } else {
            $('.scroll-top-wrapper').removeClass('show');
        } 
    });
    $('.scroll-top-wrapper').on('click', scrollToTop);
});
 

function scrollToTop() {
    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
    element = $('body');
    offset = element.offset();
    offsetTop = offset.top;
    $('html, body').animate({
        scrollTop: offsetTop
    }, 500, 'linear');
}