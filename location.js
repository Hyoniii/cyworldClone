const form = document.querySelector(".search");
const input = form.querySelector("input");
const btn = document.getElementById("js-searchBtn");

function goGoogle(keyword) {
  window.location = `https://www.google.com/search?q=${keyword}`;
}

function handleSearch(event) {
  event.preventDefault();
  const keyword = input.value;
  //console.log(keyword);
  goGoogle(keyword);
}

function goSearch() {
  btn.addEventListener("click", handleSearch);
}

function init() {
  goSearch();
}

init();
