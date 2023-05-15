const form = document.querySelector("#searchForm");
const section = document.querySelector("#shows");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    let query = form.elements.query.value;
    let config = { params: { q: query } };
    let res = await axios.get("https://api.tvmaze.com/search/shows", config);
    showImages(res.data);
    form.elements.query.value = "";
  } catch {
    console.log("Error!");
  }
});

async function showImages(shows) {
  for (item of shows) {
    if (item.show.image) {
      let img = document.createElement("img");
      img.src = item.show.image.medium;
      section.append(img);
    }
  }
}
