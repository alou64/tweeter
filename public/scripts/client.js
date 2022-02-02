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



const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]



$(document).ready(function() {
  renderTweets(data);

  // event listener for submit button
  $('form').submit(function(event) {
    event.preventDefault();    // prevent button from refreshing page
    const tweet = $('#tweet-text').val();
    console.log(tweet);
  });

});
