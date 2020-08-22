const searchForm = document.querySelector(".search");
const searchInput = searchForm.querySelector("input");
const searchBtn = document.getElementById("js-searchBtn");

function goGoogle(keyword) {
  window.location = `https://www.google.com/search?q=${keyword}`;
}

function handleSearch(event) {
  event.preventDefault();
  const keyword = searchInput.value;
  //console.log(keyword);
  goGoogle(keyword);
}

function goSearch() {
  searchBtn.addEventListener("click", handleSearch);
}

function init() {
  goSearch();
}

init();
