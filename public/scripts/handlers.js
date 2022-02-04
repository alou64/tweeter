// handle get request
const loadTweets = () => {
  // hide alerts
  $('#tweet-alert').hide();

  $.get('http://localhost:8080/tweets', function(data, status) {
    if (status === 'success') console.log('Fetched tweets from server');
    renderTweets(data);
  });
};


// handle post request
const sendTweet = () => {
  // event listener for submit button
  $('form').submit(function(event) {
    // prevent button from refreshing page
    event.preventDefault();

    // check for empty input
    if ($('#tweet-text').val() === '') {
      alertTweet('Enter a tweet');
      return;
    }

    // validate character limit
    if ($('#tweet-text').val().length > 140) {
      alertTweet('Exceeded character limit');
      return;
    }

    // serialize tweet
    const tweet = $(this).serialize();

    // send tweet to server
    $.post('/tweets/', tweet, function(data, status) {
      if (status === 'success') console.log('Tweet sent to server');
      // clear text area and load the tweets
      $('#tweet-text').val('');
      loadTweets();
    });
  });
};
