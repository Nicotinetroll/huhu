
// Parallax button

// Musim pridat foreach do pice
// 1. Najdem vsetky elementy, ktore maju classu huhu_btn a huhu_btn_text.
// 2. Na mouseover zistim, ktory to je a spustim funkciu parallax

const huhuButton = document.querySelector('.huhu_btn');
const huhuText = huhuButton.querySelector('.huhu_btn_text');

function parallax (e) {
  const { offsetWidth: width, offsetHeight: height } = huhuButton;
  let { offsetX: x, offsetY: y } = e;
  
  const xWalk = Math.round((x / width * 100) - 50);
  const yWalk = Math.round((y / height * 100) - 50);
  
  huhuText.style = `
    transform: translate(${(xWalk * 0.2) * +1.2}%, ${(yWalk * 0.2) * +1.2}%) scale(1.05);
  `;
  huhuButton.style = `
    transform: translate(${(xWalk * 0.2) * +1.2}%, ${(yWalk * 0.2) * +1.2}%) scale(.95);
  `;
}

function reset () {
  huhuText.style = 'transform: translate(0, 0)';
  huhuButton.style = 'transform: translate(0, 0)';
}

reset();

huhuButton.addEventListener('mousemove', parallax);
huhuButton.addEventListener('mouseleave', reset);


//cursor https://github.com/lusaxweb/Kursor