var WelcomeTabCounter = 1;
var WelcomeTab = true;

function RemoveFooterWelcomeApp() { 
var Tab = document.querySelector("#FooterWelcomeApp");
    Tab.style.display = "none"
    WelcomeTab = false;
}

RemoveFooterWelcomeApp();

const WelcomeTabTemplate = document.querySelector("#WelcomeTabTemplate");

const WelcomeTabPage = WelcomeTabTemplate
  .firstElementChild
  .cloneNode(true);

WelcomeTabTemplate.remove();

function OpenWelcomeTab() {
  WelcomeTab = true;

  const WelcomeTab = WelcomeTabPage.cloneNode(true);

  WelcomeTab.id = "WelcomeTab" + WelcomeTabCounter;

  const CloseButton = WelcomeTab.querySelector("#CloseButton");

  CloseButton.onclick = function () {
    WelcomeTab.remove();
    RemoveFooterWelcomeApp();
  };

  document.body.appendChild(WelcomeTab);

  dragElement(WelcomeTab);

  if (WelcomeTab) {
    var Tab = document.querySelector("#FooterWelcomeApp");
    Tab.style.display = "flex"
  }

  WelcomeTabCounter++;
}




/****************************************************/

var CalculatorTabCounter = 1;

const CalculatorTabTemplate = document.querySelector("#CalculatorTabTemplate");

const CalculatorTabHTML = CalculatorTabTemplate
  .firstElementChild
  .cloneNode(true);

CalculatorTabTemplate.remove();

function OpenCalculatorTab() {

  const CalculatorTab = CalculatorTabHTML.cloneNode(true);

  CalculatorTab.id = "CalculatorTab" + CalculatorTabCounter;

  const CloseButton = CalculatorTab.querySelector("#CloseButton");

  CloseButton.onclick = function () {
    CalculatorTab.remove();
  };

  document.body.appendChild(CalculatorTab);

  dragElement(CalculatorTab);

  CalculatorTabCounter++;
}

/****************************************************/

var CreditTabCounter = 1;

const CreditTabTemplate = document.querySelector("#CreditTabTemplate");

const CreditTabHTML = CreditTabTemplate
  .firstElementChild
  .cloneNode(true);

CreditTabTemplate.remove();

function OpenCreditTab() {

  const CreditTab = CreditTabHTML.cloneNode(true);

  CreditTab.id = "CreditTab" + CreditTabCounter;

  const CloseButton = CreditTab.querySelector("#CloseButton");

  CloseButton.onclick = function () {
    CreditTab.remove();
  };

  document.body.appendChild(CreditTab);

  dragElement(CreditTab);

  CreditTabCounter++;
}

/****************************************************/

function UpdateTime() {

  var currentTime = new Date().toLocaleString();

  var timeText = document.querySelector("#Time");

  timeText.innerHTML = currentTime;
}

setInterval(UpdateTime, 1000);


/****************************************************/

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function Loading() {
  const h1 = document.querySelector(".Loading h1");

  await delay(800);
  h1.innerText = "欢迎";
  await delay(800);
  h1.innerText = "مرحباً";
  await delay(800);
  h1.innerText = "स्वागत है";
  await delay(800);
  h1.innerText = "Добро пожаловать";
  await delay(800);
  h1.innerText = "ようこそ";
  await delay(800);
  h1.innerText = "환영합니다";
  await delay(800);
  h1.innerText = "Welcome";
}

Loading();

/****************************************************/

function RemoveLoadingCompletely() {

  var LoadingScreen = document.querySelector(".Loading");

  LoadingScreen.style.display = "none";
}


function RemoveLoading() {

  var LoadingScreen = document.querySelector(".Loading");

  if (!LoadingScreen) return;

  LoadingScreen.classList.add("fade-out");

  setTimeout(RemoveLoadingCompletely, 2000);
}


document.addEventListener("DOMContentLoaded", function () {

  document.body.onkeyup = function (e) {

    if (e.key == " " || e.code == "Space" || e.keyCode == 32) {

      RemoveLoading();

    }

  };

});


/****************************************************/

function dragElement(elmnt) {

  var pos1 = 0;
  var pos2 = 0;
  var pos3 = 0;
  var pos4 = 0;


  if (document.getElementById(elmnt.id + "header")) {

    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;

  } else {

    elmnt.onmousedown = dragMouseDown;

  }


  function dragMouseDown(e) {

    e = e || window.event;

    e.preventDefault();

    pos3 = e.clientX;
    pos4 = e.clientY;

    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;

  }


  function elementDrag(e) {

    e = e || window.event;

    e.preventDefault();

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;

    pos3 = e.clientX;
    pos4 = e.clientY;

    let newTop = elmnt.offsetTop - pos2;
    let newLeft = elmnt.offsetLeft - pos1;

    const headerHeight = 120;

    newTop = Math.max(newTop, headerHeight);

    newLeft = Math.max(
      0,
      Math.min(
        newLeft,
        window.innerWidth - elmnt.offsetWidth
      )
    );

    newTop = Math.min(
      newTop,
      window.innerHeight - elmnt.offsetHeight
    );

    elmnt.style.top = (newTop - 120) + "px";

    elmnt.style.left = newLeft + "px";

  }


  function closeDragElement() {

    document.onmouseup = null;
    document.onmousemove = null;

  }

}