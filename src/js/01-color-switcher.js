function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};
const { startBtn, stopBtn } = refs;

startBtn.addEventListener('click', onChangeColorBtn);

function onChangeColorBtn() {
  const timerId = setInterval(() => {
    const ourColor = getRandomHexColor();
    document.body.style.backgroundColor = `${ourColor}`;
  }, 3000);
}
