$('.huhu_btn').hover(function(e){

    const huhuButton = $(this);
    const huhuText = $(huhuButton).children('.huhu_btn_text');

    const { offsetWidth: width, offsetHeight: height } = huhuButton;
    let { offsetX: x, offsetY: y } = e;

    const xWalk = Math.round((x / $(this).width() * 100) - 50);
    const yWalk = Math.round((y / $(this).height() * 100) - 50);

    


    // DEBUG
    console.log( $(e) );
    


})