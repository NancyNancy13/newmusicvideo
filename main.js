// the endpoints: https://musicvideo-418b.restdb.io/rest/musicvideo
// the API key: 6231a362dced170e8c83a2d2

const url = "https://musicvideo-418b.restdb.io/rest/musicvideo";
const options = {
  headers: {
    "x-apikey": "6231a362dced170e8c83a2d2",
  },
};
fetch(url, options)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    showMusicList(data);
  });
function showMusicList(data) {
  console.log(data);
  data.forEach(showMusic);
}
function showMusic(music) {
  // grabbing the template
  const template = document.querySelector("#myTemplate").content;
  // copying the template
  const copy = template.cloneNode(true);

  copy.querySelector("img").src = `${music.images}`;
  copy.querySelector(".song").textContent = `${music.songname}`;
  copy.querySelector(".singer").textContent = `${music.singer}`;
  copy.querySelector("h4").textContent = `${music.views}`;

  // grabing parent
  const parent = document.querySelector("main");
  // append
  parent.appendChild(copy);
}

// adding filter
function myFunction() {
  document.querySelector("#myDropdown").classList.toggle("show");
}
