function UpdateTime() {
  var currentTime = new Date().toLocaleString();
  var timeText = document.querySelector("#Time");
  timeText.innerHTML = currentTime;
}
setInterval(UpdateTime, 1000);

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

function RemoveLoadingCompletely() {
  LoadingScreen.style.display = 'none';
}

function RemoveLoading() {
  var LoadingScreen = document.querySelector(".Loading");
  LoadingScreen.classList.add('fade-out');

  setTimeout(RemoveLoadingCompletely, 2000);
}

document.addEventListener('DOMContentLoaded', function () {
  document.body.onkeyup = function (e) {
    if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
      RemoveLoading();
    }
  }
});

Loading()

/****************************************************/


// Make the DIV element draggable:

dragElement(document.getElementById("WelcomeTab"));
dragElement(document.getElementById("CalculatorTab"));
dragElement(document.getElementById("CreditTab"));

function dragElement(elmnt) {

  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  if (document.getElementById(elmnt.id + "WelcomeTab")) {

    // The header is where you move the DIV from:
    document.getElementById(elmnt.id + "WelcomeTab").onmousedown = dragMouseDown;

  } else {

    // Otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;

  }

  function dragMouseDown(e) {

    e = e || window.event;
    e.preventDefault();

    // Get the mouse position:
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
    newLeft = Math.max(0, Math.min(newLeft, window.innerWidth - elmnt.offsetWidth));
    newTop = Math.min(newTop, window.innerHeight - elmnt.offsetHeight);

    elmnt.style.top = (newTop - 120) + "px"; // offset for margin-top
    elmnt.style.left = newLeft + "px";
  }

  function closeDragElement() {

    // Stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;

  }

}

/********************************************************/


/******************************************************/

function OpenWelcomeTab() {
  var Tab = document.querySelector("#WelcomeTab")
  Tab.style.display = "flex"

  var element = document.querySelector(".Footer #WelcomeApp")
  element.style.display = "flex"

  tab.classList.remove("pop");
  void tab.offsetWidth; // forces a reflow so the animation can replay
  tab.classList.add("pop");
}


function MinimizeWelcomeTab() {
  var element = document.querySelector("#WelcomeTab")
  element.style.display = "none"
}

function CloseWelcomeTab() {
  var element = document.querySelector("#WelcomeTab")
  element.style.display = "none"

    var element = document.querySelector(".Footer #WelcomeApp")
  element.style.display = "none"
}

CloseWelcomeTab()


/* * * * * * *  * * * * * ** * * * ** * ** */

function MinimizeCalculatorTab() {
  var element = document.querySelector("#CalculatorTab")
  element.style.display = "none"
}

function CloseCalculatorTab() {
  var element = document.querySelector("#CalculatorTab")
  element.style.display = "none"

    var element = document.querySelector(".Footer #CalculatorApp")
  element.style.display = "none"
}

CloseCalculatorTab()

function OpenCalculatorTab() {
  var Tab = document.querySelector("#CalculatorTab")
  Tab.style.display = "flex"

  var element = document.querySelector(".Footer #CalculatorApp")
  element.style.display = "flex"
}

/* * * * * * *  * * * * * ** * * * ** * ** */

function MinimizeCreditTab() {
  var element = document.querySelector("#CreditTab")
  element.style.display = "none"
}

function CloseCreditTab() {
  var element = document.querySelector("#CreditTab")
  element.style.display = "none"

    var element = document.querySelector(".Footer #CreditApp")
  element.style.display = "none"
}

CloseCreditTab()

function OpenCreditTab() {
  var Tab = document.querySelector("#CreditTab")
  Tab.style.display = "flex"

  var element = document.querySelector(".Footer #CreditApp")
  element.style.display = "flex"
}