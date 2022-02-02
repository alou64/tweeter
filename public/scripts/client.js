/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// loop through tweets
// call createTweetElement for each tweet
// take return value and append to tweets container
const renderTweets = tweets => {
  for (const tweet of tweets) {
    // const tweetElement = createTweetElement(tweet);
    $('.past-tweet').append(createTweetElement(tweet));
  }
};


// returns tweet element containing entire html structure of tweet
const createTweetElement = data => {
  const $tweet = `
    <article>
      <div class="tweet-container">
      <header>
        <div>
          <img src=${data.user.avatars}>
          <span>${data.user.name}</span>
        </div>
        <b class="username">${data.user.handle}</b>
      </header>
      <p class="tweet">${data.content.text}</p>
      <footer>
        <small>${timeago.format(data.created_at)}</small>
        <div class="tweet-icons">
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
        </div>
      </footer>
      </div>
    </article>`;
  return $tweet;
};



// implement validation before sending form data to server
// check for empty form and max message length
// send appropriate alert

$(document).ready(function() {

  // event listener for submit button
  $('form').submit(function(event) {
    event.preventDefault();    // prevent button from refreshing page

    // check for empty input
    if ($('#tweet-text').val() === '') {
      alert('Enter a tweet');
      return;
    }

    // validate character limit
    if ($('#tweet-text').val().length > 140) {
      alert('Exceeded character limit');
      return;
    }

    const tweet = $(this).serialize();
    // send tweet to server
    $.post('/tweets/', tweet, function(data, status) {
      if (status === 'success') console.log('Tweet sent to server');
    });
  });

  // fetch tweets server
  const loadTweets = function() {
    $.get('http://localhost:8080/tweets', function(data, status) {
      if (status === 'success') console.log('Fetched tweets from server');
      renderTweets(data);
    });
  };

  loadTweets();

});
