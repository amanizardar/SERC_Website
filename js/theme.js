/////////////////////////////////////////////////////////////////////
// jQuery for page scrolling feature - requires jQuery Easing plugin
/////////////////////////////////////////////////////////////////////

$('.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top -64
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});



////////////////////////////////////////////////////////////////////////
// On-Scroll Animated Header: https://github.com/codrops/AnimatedHeader
////////////////////////////////////////////////////////////////////////

var cbpAnimatedHeader = (function() {

    var docElem = document.documentElement,
        header = document.querySelector( '.navbar-fixed-top' ),
        didScroll = false,
        changeHeaderOn = 10;

    function init() {
        window.addEventListener( 'scroll', function( event ) {
            if( !didScroll ) {
                didScroll = true;
                setTimeout( scrollPage, 250 );
            }
        }, false );
    }

    function scrollPage() {
        var sy = scrollY();
        if ( sy >= changeHeaderOn ) {
            classie.add( header, 'navbar-shrink' );
        }
        else {
            classie.remove( header, 'navbar-shrink' );
        }
        didScroll = false;
    }

    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }

    init();

})();



//////////////////////////////////////////////
// Highlight the top nav as scrolling occurs
//////////////////////////////////////////////

$('body').scrollspy({
    target: '.navbar',
    offset: 65
})



///////////////////////////////////////////
// Display loading image while page loads
///////////////////////////////////////////

// Wait for window load
$(window).load(function() {
    // Animate loader off screen
    $(".page-loader").fadeOut("slow");
});



////////////////////////////////////////////////////
// OWL Carousel: http://owlgraphic.com/owlcarousel
////////////////////////////////////////////////////

// Intro text carousel
$("#owl-intro-text").owlCarousel({
    singleItem : true,
    autoPlay : 6000,
    stopOnHover : true,
    navigation : false,
    navigationText : false,
    pagination : true
})


// Partner carousel
$("#owl-partners").owlCarousel({
    items : 4,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [980,2],
    itemsTablet: [768,2],
    autoPlay : 5000,
    stopOnHover : true,
    pagination : false
})

// Testimonials carousel
$("#owl-testimonial").owlCarousel({
    singleItem : true,
    pagination : true,
    autoHeight : true
})


////////////////////////////////////////////////////////////////////
// Stellar (parallax): https://github.com/markdalgleish/stellar.js
////////////////////////////////////////////////////////////////////

$.stellar({
    // Set scrolling to be in either one or both directions
    horizontalScrolling: false,
    verticalScrolling: true,
});



///////////////////////////////////////////////////////////
// WOW animation scroll: https://github.com/matthieua/WOW
///////////////////////////////////////////////////////////

new WOW().init();



////////////////////////////////////////////////////////////////////////////////////////////
// Counter-Up (requires jQuery waypoints.js plugin): https://github.com/bfintal/Counter-Up
////////////////////////////////////////////////////////////////////////////////////////////

$('.counter').counterUp({
    delay: 10,
    time: 2000
});



////////////////////////////////////////////////////////////////////////////////////////////
// Isotop Package
////////////////////////////////////////////////////////////////////////////////////////////
$(window).load(function() {
$('.portfolio_menu ul li').click(function(){
	$('.portfolio_menu ul li').removeClass('active_prot_menu');
	$(this).addClass('active_prot_menu');
});

var $container = $('#portfolio');
$container.isotope({
  itemSelector: '.col-sm-4',
  layoutMode: 'fitRows'
});
$('#filters').on( 'click', 'a', function() {
  var filterValue = $(this).attr('data-filter');
  $container.isotope({ filter: filterValue });
  return false;
});
});



/////////////////////////
// Scroll to top button
/////////////////////////

// Check to see if the window is top if not then display button
$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('.scrolltotop').fadeIn();
    } else {
        $('.scrolltotop').fadeOut();
    }
});

// Click event to scroll to top
$('.scrolltotop').click(function(){
    $('html, body').animate({scrollTop : 0}, 1500, 'easeInOutExpo');
    return false;
});



////////////////////////////////////////////////////////////////////
// Close mobile menu when click menu link (Bootstrap default menu)
////////////////////////////////////////////////////////////////////

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});


function magnify(imgID, zoom) {
    var img, glass, w, h, bw;
    img = document.getElementById(imgID);
    glass = document.createElement("DIV");
    glass.setAttribute("class", "img-magnifier-glass");
    img.parentElement.insertBefore(glass, img);

    glass.style.backgroundImage = "url('" + img.src + "')";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
    bw = 3;
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;
 
    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);
  
    glass.addEventListener("touchmove", moveMagnifier);
    img.addEventListener("touchmove", moveMagnifier);
    function moveMagnifier(e) {
      var pos, x, y;
      e.preventDefault();
      pos = getCursorPos(e);
      x = pos.x;
      y = pos.y;
      if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
      if (x < w / zoom) {x = w / zoom;}
      if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
      if (y < h / zoom) {y = h / zoom;}
      glass.style.left = (x - w) + "px";
      glass.style.top = (y - h) + "px";

      glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
    }
  
    function getCursorPos(e) {
      var a, x = 0, y = 0;
      e = e || window.event;
      a = img.getBoundingClientRect();
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return {x : x, y : y};
    }
  }



// Slideshow

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
} 

// End of Slideshow

// Admin Mode

function myfun()
{
    email = prompt("Enter Valid Username");
    
    if(validateEmail(email))
    {
        document.getElementById("edit").contentEditable=true;
        pass  = prompt("Enter The Password");
        alert("Welcome To the Admin Mode.\n Now You can Add/Delete/Update The Content");
    
    }
    else
    {
        alert("Please enter a valid email" )
    }
    
}
function myfun2()
{
    document.getElementById("edit").contentEditable=false;
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// End of Admin Mode