/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
//
// const $tweet = $(`<article>helloooo</article>`);


// function takes in a tweet object
// returns a tweet <article> element containing the entuire html structure of the tweet


const createTweetElement = data => {
  const markup = `
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
        <small>10 days ago</small>
        <div class="tweet-icons">
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
        </div>
      </footer>
      </div>
    </article>`;
  return markup;
};


const data = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
 }

//
// createTweetElement(data);
const $tweet = createTweetElement(data);
// console.log($tweet);
// $('.past-tweet').append($tweet);

$(document).ready(function() {
  $('.past-tweet').append($tweet);
});
// $(document).ready(function() {
//   createTweetElement(data);
// });
