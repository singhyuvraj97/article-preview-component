let shareBarBefore = document.querySelector(".cardShareBtnBefore");
let shareBarAfter = document.querySelector(".cardShareBtnAfter");
let cardShareBtn = document.querySelector(".cardShareBtn");
let cardProfile = document.querySelector(".cardProfile");
let cardProfileClone = cardProfile.cloneNode("true");
console.log(cardProfileClone.children);

cardShareBtn.addEventListener("click", dispBar);

function dispBar() {
  console.log("share bar visible");

  if (window.matchMedia("(max-width: 810px)").matches) {
    console.log("mobile view");
    document.querySelector(".cardProfile").remove();
    let shareBar = document.createElement("div");
    shareBar.classList.add("cardProfileGray");

    let card = document.querySelector(".card");
    let shareBarTitle = document.createElement("p");
    let imgBlockOne = document.createElement("img");
    let imgBlockTwo = document.createElement("img");
    let imgBlockThree = document.createElement("img");
    let shareBtnCont = document.createElement("div");
    let shareBtnImg = document.createElement("img");

    imgBlockOne.classList.add("imgBlock");
    imgBlockTwo.classList.add("imgBlock");
    imgBlockThree.classList.add("imgBlock");
    shareBtnImg.classList.add("shareBtnImg");
    shareBtnCont.classList.add("cardShareBtn");

    shareBarTitle.innerText = "share";
    shareBtnImg.src = "./images/icon-share.svg";
    imgBlockOne.src = "./images/icon-facebook.svg";
    imgBlockTwo.src = "./images/icon-pinterest.svg";
    imgBlockThree.src = "./images/icon-twitter.svg";

    shareBar.appendChild(shareBarTitle);
    shareBtnCont.appendChild(shareBtnImg);
    shareBar.appendChild(imgBlockOne);
    shareBar.appendChild(imgBlockTwo);
    shareBar.appendChild(imgBlockThree);
    shareBar.appendChild(shareBtnCont);

    card.appendChild(shareBar);

    shareBtnCont.addEventListener("click", hideBar);
  }
  else {
    console.log("desktop view");
  }
}

function hideBar() {
  if (window.matchMedia("(max-width: 810px)").matches) {
    console.log("share bar hidden");
    document.querySelector(".cardProfileGray").remove();
    let cardBody = document.querySelector(".cardBody");
    console.log(cardBody.children);
    console.log(cardProfile.classList);
    cardBody.appendChild(cardProfileClone);
    cardProfileClone.addEventListener("click", dispBar);
  }
  else{
    console.log("desktop view");
  }
}