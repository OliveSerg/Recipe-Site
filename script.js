$(document).ready(function() {
  console.log("Script included!");

  $('button').click(function() {
    $('#main-nav').toggle()
  })

  $('.item').click(function() {
    $(this).toggleClass('checked')
  })

  $('.image').click(function() {
    if(!$(this).hasClass('bacon-pancakes')) {
      $(this).addClass('bacon-pancakes')
      $(this).siblings().removeClass('bacon-pancakes')
    }
  })
})
