// function to get randov color

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// references for buttons
const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};
const { startBtn, stopBtn } = refs;
// default value of timer ID
let timerId = null;

// event listeners
startBtn.addEventListener('click', onChangeColorBtn);
stopBtn.addEventListener('click', onStopColorBtn);

// function for StartBtn for changing background color where we return another function to call first changing bg color withoud delay
function onChangeColorBtn() {
  timerId = setInterval(
    (function toImmediateChangeBgColor() {
      const ourColor = getRandomHexColor();
      document.body.style.backgroundColor = `${ourColor}`;
      return toImmediateChangeBgColor;
    })(),
    1000
  );

  // set "disabled" attribute just not to let create "hell of intervals"
  startBtn.setAttribute('disabled', '');
}

// function for stopping changing bg color(remove disabled attribute for startBtn)
function onStopColorBtn() {
  clearInterval(timerId);
  startBtn.removeAttribute('disabled', '');
}
