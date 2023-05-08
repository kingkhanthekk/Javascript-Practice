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

// The below code only works for the codes that are written before running the code

// const lis = document.querySelectorAll("li");
// for (let li of lis) {
//   li.addEventListener("click", () => {
//     li.remove();
//   });
// }

// The below code can delete all the lists in the ul

ul.addEventListener("click", (e) => {
  e.target.remove();
});
