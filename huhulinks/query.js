$(function() {
    const huhuButton2 = document.querySelectorAll('.huhu_btn');
    const huhuText2 = document.querySelector('.huhu_btn_text');

    $(function huhuParallax(e){
        const { offsetWidth: width, offsetHeight: height } = huhuButton2;
        let { offsetX: x, offsetY: y } = e;

        // Pohyb
        const xPohyb = Math.round((x / width * 100) - 50);
        const yPohyb = Math.round((y / height * 100) - 50);

        // Transformacia
        huhuText2.style = `transform: translate(${(xPohyb * 0.2) * +1.2}%, ${(yPohyb * 0.2) * +1.2}%) scale(1.05);`;
        huhuButton2.style = `transform: translate(${(xPohyb * 0.2) * +1.2}%, ${(yPohyb * 0.2) * +1.2}%) scale(.95);`;
    });
});