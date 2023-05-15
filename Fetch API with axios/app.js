const button = document.querySelector("button");
const ul = document.querySelector("ul");

const headers = { headers: { Accept: "application/json" } };

const dadJoke = async () => {
  const res = await axios.get("https://icanhazdadjoke.com", headers);
  return res.data.joke;
};

const jokeGenerator = async () => {
  let newJoke = await dadJoke();
  let newLi = document.createElement("li");
  newLi.append(newJoke);
  ul.append(newLi);
};

button.addEventListener("click", () => {
  jokeGenerator();
});
