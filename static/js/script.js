//  SKILLS PROGRESS BAR ANIMATION

$('#skills').on('mouseover', function() {
  $('.front-end').css('width', '70%');
  $('.back-end').css('width', '55%');
  $('.cs-fund').css('width', '50%');
  $('.tools').css('width', '80%');
});

$('#skills-link').on('click', function() {
  $('.front-end').css('width', '70%');
  $('.back-end').css('width', '55%');
  $('.cs-fund').css('width', '50%');
  $('.tools').css('width', '80%');
});

$(window).on('keydown', function() {
  $('.front-end').css('width', '70%');
  $('.back-end').css('width', '55%');
  $('.cs-fund').css('width', '50%');
  $('.tools').css('width', '80%');
});


// SCROLLSPY 

// $(document).ready(function() {
//     $("body").scrollspy({
//         target: "#myNavbar",
//         offset: 70
//     })
// });