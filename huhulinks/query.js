$('.huhu_btn').mouseover(function parallax(e){

    const huhuButton = $(this);
    const huhuText = $(huhuButton).children('.huhu_btn_text');

    const { offsetWidth: width, offsetHeight: height } = huhuButton;
    let { offsetX: x, offsetY: y } = e;

    const xWalk = Math.round((x / width * 100) - 50);
    const yWalk = Math.round((y / height * 100) - 50);


    // DEBUG
    console.log( huhuButton );
    console.log( huhuText );
    console.log( xWalk );
    


})