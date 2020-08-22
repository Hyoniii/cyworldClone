const commentList = document.querySelector(".js-commentList");

const commentForm = document.querySelector(".comment-form");
const commentInput = document.querySelector(".comment-input");
const commentSubmit = document.querySelector(".comment-sub");

const COMMENTS = "comments";
const comments = [];

function handleAddList(inputValue) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = `😊${inputValue}`;
  span.classList.add("comments");
  li.appendChild(span);

  commentList.appendChild(li);
  const commentObj = {
    comment: inputValue,
  };
  comments.push(commentObj);
  setComment();
}

function handleInput(event) {
  event.preventDefault();
  const inputValue = commentInput.value;
  //console.log(inputValue);
  handleAddList(inputValue);
  commentInput.value = "";
}

function handleSubmit() {
  commentSubmit.addEventListener("click", handleInput);
}

function setComment() {
  localStorage.setItem(COMMENTS, JSON.stringify(comments));
}

function getComment() {
  const loadedCommnets = localStorage.getItem(COMMENTS);
  if (loadedCommnets !== null) {
    const parsedComments = JSON.parse(loadedCommnets);
    parsedComments.forEach(function (comment) {
      handleAddList(comment.comment);
    });
  }
}

function init() {
  getComment();
  handleSubmit();
}

init();
