const form = document.querySelector("form");
const ul = document.querySelector("ul");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let usernameInput = form.elements.username;
  let tweetInput = form.elements.tweet;
  addTweet(usernameInput.value, tweetInput.value);
  usernameInput.value = "";
  tweetInput.value = "";
});

function addTweet(username, tweet) {
  // let bTag = document.createElement("b");
  // let li = document.createElement("li");
  // bTag.append(username);
  // li.append(bTag);
  // li.append(` - ${tweet}`);
  // ul.append(li);

  ul.innerHTML += `<li><b>${username}</b> - ${tweet}</li>`;
}
