const refs = {
  body: document.querySelector('body'),
  buttonStart: document.querySelector('button[data-start]'),
  buttonStop: document.querySelector('button[data-stop]'),
};

let timerId = null;

refs.buttonStart.addEventListener('click', onButtonStartClick);
refs.buttonStop.addEventListener('clicl', onButtonStopClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onButtonStartClick(evt) {
  evt.preventDefault();
  refs.buttonStart.disabled = true;
  timerId = setInterval(() => {
    const colorEl = getRandomHexColor();
    refs.body.style.backgroundColor = colorEl;
  }, 1000);
}

function onButtonStopClick(e) {
  refs.buttonStart.disabled = false;
  clearInterval(timerId);
}
