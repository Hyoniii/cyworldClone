const ROW = 3;
const COLUMN = 4;
const COLORS = [
  "red",
  "red",
  "orange",
  "orange",
  "green",
  "green",
  "yellow",
  "yellow",
  "white",
  "white",
  "pink",
  "pink",
];
let color = [];
let CLICKED = true;
const clickedCard = [];
const doneCard = [];
//const startTime;

function cardShuffle() {
  for (var i = 0; COLORS.length > 0; i += 1) {
    color = color.concat(
      COLORS.splice(Math.floor(Math.random() * COLORS.length), 1)
    );
  }
}

function paintColor(card) {
  //event.preventDefault();
  const target = card.target;
  //console.log(target);

  if (CLICKED && !doneCard.includes(target)) {
    target.classList.toggle("flipped");
    clickedCard.push(target);
    if (clickedCard.length == 2) {
      if (
        clickedCard[0].querySelector(".card-back").style.backgroundColor ===
        clickedCard[1].querySelector(".card-back").style.backgroundColor
      ) {
        doneCard.push(clickedCard[0]);
        doneCard.push(clickedCard[1]);
        clickedCard = [];
        document.querySelector("#wrapper").innerHTML = "";
        color = [];
        doneCard = [];
        cardShuffle();
        cardSet(ROW, COLUMN);
      }
    } else {
      // 두 카드의 색이 다르면
      CLICKED = false;
      setTimeout(function () {
        console.log(clickedCard[0]);
        //clickedCard[0].classList.remove("flipped");
        //clickedCard[1].classList.remove("flipped");
        CLICKED = true;
        //clickedCard = [];
      }, 1000);
    }
  }
}

function cardSet(ROW, COLUMN) {
  CLICKED = false;
  for (var i = 0; i < ROW * COLUMN; i += 1) {
    const card = document.createElement("div");
    card.classList.add("card");
    const cardInner = document.createElement("div");
    cardInner.classList.add("card-inner");
    const cardFront = document.createElement("div");
    cardFront.classList.add("card-front");
    const cardBack = document.createElement("div");
    cardBack.classList.add("card-back");
    cardBack.style.backgroundColor = color[i];
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);
    card.addEventListener("click", paintColor);
    //paintColor(card);
    document.querySelector("#wrapper").appendChild(card);
    document.querySelectorAll(".card").forEach(function (card, index) {
      // 초반 카드 공개
      setTimeout(function () {
        card.classList.add("flipped");
      }, 1000 + 100 * index);
    });

    setTimeout(function () {
      // 카드 감추기
      document.querySelectorAll(".card").forEach(function (card) {
        card.classList.remove("flipped");
      });
      CLICKED = true;
    }, 3000);
  }
}

function init() {
  cardShuffle();
  cardSet(ROW, COLUMN);
}
init();
