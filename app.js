
let cardShareBtn = document.querySelector(".cardShareBtn");
let cardProfile = document.querySelector(".cardProfile");
let cardProfileClone = cardProfile.cloneNode("true");
console.log(cardProfileClone.children);


//mobile view share button bar
if(window.matchMedia("(max-width: 810px)").matches){
  console.log("mobile view");
  cardShareBtn.addEventListener("click", dispBar);
}

//event handler for displaying share bar in mobile view 
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
}

//event handler for displaying share bar in desktop view
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
}

let flipState = 0;

//desktop view share button bar
if (window.matchMedia("(min-width: 811px)").matches){
  console.log(window.matchMedia("(min-width: 811px)"));
  console.log("desktop view");
  cardShareBtn.addEventListener("click",flipper);
}

function flipper(){
  if(flipState === 0){
    flipState++;
    console.log("flipped state = ",flipState);
    shareBarDisp();
  }
  else{
    flipState--;
    console.log("flipped state = ",flipState);
    shareBarHide();
  }
}

let shareBar = document.createElement("div");
  let shareBarTitle = document.createElement("p");
  let imgOne = document.createElement("img");
  let imgTwo = document.createElement("img");
  let imgThree = document.createElement("img");
  let shareBarAfter = document.createElement("div");

  shareBar.classList.add("cardShareBtnBefore");
  imgOne.id = "imgBlock";
  imgTwo.id = "imgBlock";
  imgThree.id = "imgBlock";
  shareBarAfter.classList.add("cardShareBtnAfter");

  shareBarTitle.innerText = "share";
  shareBarTitle.style.color = "hsl(212, 23%, 69%)";
  shareBarTitle.style.letterSpacing = "2px";
  imgOne.src = "./images/icon-facebook.svg";
  imgTwo.src = "./images/icon-twitter.svg";
  imgThree.src = "./images/icon-pinterest.svg";
  
  shareBar.appendChild(shareBarTitle);
  shareBar.appendChild(imgOne);
  shareBar.appendChild(imgTwo);
  shareBar.appendChild(imgThree);


  cardShareBtn.insertBefore(shareBar,cardShareBtn.querySelector("img"));
  cardShareBtn.appendChild(shareBarAfter);

  shareBar.style.display = "none";
  shareBarAfter.style.display = "none";

function shareBarDisp(){
  console.log("share bar displaying");
  shareBar.style.display = "flex";
  shareBarAfter.style.display = "block";
}

function shareBarHide(){
  console.log("share bar hiding");
  shareBar.style.display = "none";
  shareBarAfter.style.display = "none";

}