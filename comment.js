const commentList = document.querySelector(".js-commentList");

const commentForm = document.querySelector(".comment-form");
const commentInput = document.querySelector(".comment-input");
const commentSubmit = document.querySelector(".comment-sub");

const COMMENTS = "comments";
let comments = [];

function deleteBtn(event) {
  const target = event.target;
  const parentLi = target.parentNode;
  //console.log(parentLi);
  commentList.removeChild(parentLi);
  const cleanComments = comments.filter(function (a) {
    //console.log(a.id, parentLi.id);
    return a.id !== parseInt(parentLi.id);
  });
  comments = cleanComments;
  setComment();
}

function handleAddList(inputValue) {
  const li = document.createElement("li");
  li.classList.add("comment-list_lists");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  span.innerText = `😊${inputValue}`;
  span.classList.add("comments");
  delBtn.innerText = "✖️";
  delBtn.addEventListener("click", deleteBtn);
  li.appendChild(span);
  li.appendChild(delBtn);
  const id = comments.length + 1; // 전역변수 금지
  li.id = id;
  commentList.appendChild(li);
  const commentObj = {
    comment: inputValue,
    id: id,
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
