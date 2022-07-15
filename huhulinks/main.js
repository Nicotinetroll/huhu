const button = document.querySelector('.huhu_btn');
const text = button.querySelector('.huhu_btn_text');

function parallax (e) {
  const { offsetWidth: width, offsetHeight: height } = button;
  let { offsetX: x, offsetY: y } = e;
  
  const xWalk = Math.round((x / width * 100) - 50);
  const yWalk = Math.round((y / height * 100) - 50);
  
  text.style = `
    transform: translate(${(xWalk * 0.2) * +1.2}%, ${(yWalk * 0.2) * +1.2}%) scale(1.05);
  `;
  button.style = `
    transform: translate(${(xWalk * 0.2) * +1.2}%, ${(yWalk * 0.2) * +1.2}%) scale(0.9);
  `;
}

function reset () {
  text.style = 'transform: translate(0, 0)';
  button.style = 'transform: translate(0, 0)';
}

reset();

button.addEventListener('mousemove', parallax);
button.addEventListener('mouseleave', reset);
