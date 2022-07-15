const button = document.querySelector('.button');
const text = button.querySelector('.button__text');

function parallax (e) {
  const { offsetWidth: width, offsetHeight: height } = button;
  let { offsetX: x, offsetY: y } = e;
  
  const xWalk = Math.round((x / width * 100) - 50);
  const yWalk = Math.round((y / height * 100) - 50);
  
  text.style = `
    transform: translate(${(xWalk * 0.08) * -1}%, ${(yWalk * 0.3) * -1}%) scale(1.1);
  `;
}

function reset () {
  text.style = 'transform: translate(0, 0)';
}

reset();

button.addEventListener('mousemove', parallax);
button.addEventListener('mouseleave', reset);
