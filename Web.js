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

    // Calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;

    pos3 = e.clientX;
    pos4 = e.clientY;

    // Calculate new position:
    let newTop = elmnt.offsetTop - pos2;
    let newLeft = elmnt.offsetLeft - pos1;

    // Header height
    const headerHeight = 120;

    // Don't let the tab enter the header
    newTop = Math.max(newTop, headerHeight);

    // Don't let the tab leave the left/right side
    newLeft = Math.max(
      0,
      Math.min(newLeft, window.innerWidth - elmnt.offsetWidth)
    );

    // Don't let the tab leave the bottom
    newTop = Math.min(
      newTop,
      window.innerHeight - elmnt.offsetHeight
    );

    // Apply position
    elmnt.style.top = newTop + "px";
    elmnt.style.left = newLeft + "px";

  }

  function closeDragElement() {

    // Stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;

  }

}

function CloseTab() {
  var element = document.querySelector("#Tab")

  element.style.display = "none"
}

function OpenWelcomeTab() {
  

  var Tab = document.querySelector("#WelcomeTab")
  Tab.style.display = "flex"
}

function CloseWelcomeTab() {
  var element = document.querySelector("#WelcomeTab")

  element.style.display = "none"
}

CloseWelcomeTab()