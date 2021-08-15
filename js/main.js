// Sticky Navbar
$(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        $('.navbar').addClass('nav-sticky');
    } else {
        $('.navbar').removeClass('nav-sticky');
    }
});



  // Initiate the wowjs
  new WOW().init();
    
// Portfolio filter
var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows'
});

$('#portfolio-filter li').on('click', function () {
    $("#portfolio-filter li").removeClass('filter-active');
    $(this).addClass('filter-active');
    portfolioIsotope.isotope({filter: $(this).data('filter')});
});

$("button").click(function(event) {
    event.preventDefault();
    var user = document.getElementById('username').value;
    alert("Dear " + user + ", we have received your message. Thank you for reaching out to us.");
  });
  
  $("button").on('click', function(){
    $('form').each(function(){
      this.reset();
    });
  });
  