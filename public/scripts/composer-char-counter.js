$(document).ready(function() => {
  console.log('ready!');

  $('#tweet-text').on('input', function() {
    let remainingChars = 140 - $(this).val().length;
    if (remainingChars < 1) {
      $('.counter').css('color', 'red');
    } else {
      $('.counter').css('color', 'black');
    }
    $('.counter').text(remainingChars);
  });

});
