// escape function to prevent XSS attack
const escape = str => {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
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
      <p class="tweet">${escape(data.content.text)}</p>
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


// create tweet element for each tweet and append to tweets container
const renderTweets = tweets => {
  // emoty tweet area before loading tweets
  $('#past-tweet').empty();

  for (const tweet of tweets) {
    $('#past-tweet').prepend(createTweetElement(tweet));
  }
};


// display and hide alert
const alertTweet = message => {
  // replace text in alert
  $('#alert-text').text(message);

  // slide down alert, slide up when button clicked
  $('#tweet-alert').slideDown(300, () => {
    $('#submit-tweet').on('click', () => {
      $('#tweet-alert').slideUp(300);
    });
  });
};
