$('.huhu_parallax').mousemove(function(e) {
    let { offsetX: x, offsetY: y } = e

    let width = $(this).width()
    let height = $(this).height()

    let xWalk = Math.round((x / width * 100) - 50)
    let yWalk = Math.round((y / height * 100) - 50)

    // BUTTON
    $(this).find('.huhu_parallax').css('transform', 'translate(' + (xWalk * 0.2) * 1.2 + '%, ' + (yWalk * 0.2) * 1.2 + '%) scale(1.05)')
    $(this).css('transform', 'translate(' + (xWalk * 0.2) * 1.2 + '% , ' + (yWalk * 0.2) * 1.2 + '%) scale(1.05)')

    // TEXT
    $(this).find('.huhu_paralax_init').css('transform', 'translate(' + (xWalk * 0.15) * 1.2 + '%, ' + (yWalk * 0.15) * 1.2 + '%) scale(1.05)')
    $(this).css('transform', 'translate(' + (xWalk * 0.15) * 1.2 + '% , ' + (yWalk * 0.2) * 1.2 + '%) scale(1.05)')

})

$('.huhu_parallax').mouseleave(function(e) {

    // BUTTON Reset
    $(this).find('.huhu_parallax').css('transform', 'translate(0, 0)')
    $(this).css('transform', 'translate(0, 0)')

    // TEXT Reset
    $(this).find('.huhu_paralax_init').css('transform', 'translate(0, 0)')
    $(this).css('transform', 'translate(0, 0)')
})

$('.huhu_parallax').click(function() {
    $(this).animate({opacity: '.8'}, 45);
    $(this).animate({opacity: '1'}, 45);
})



//
//
//
// ICON -------------------------------------------------------------------------------
//
//
//



$('.huhu_parallax_icon').mousemove(function(ei) {
    let { offsetX: x, offsetY: y } = ei

    let width = $(this).width()
    let height = $(this).height()

    let xWalk = Math.round((x / width * 100) - 50)
    let yWalk = Math.round((y / height * 100) - 50)

    // BUTTON
    $(this).find('.huhu_parallax_icon').css('transform', 'translate(' + (xWalk * 0.2) * 2 + '%, ' + (yWalk * 0.2) * 2 + '%) scale(20)')
    $(this).css('transform', 'translate(' + (xWalk * 0.2) * 2 + '% , ' + (yWalk * 0.2) * 2 + '%) scale(3)')

    // TEXT
    $(this).find('.huhu_paralax_icon_init').css('transform', 'translate(' + (xWalk * 0.85) * 1.2 + '%, ' + (yWalk * 0.85) * 1.2 + '%) scale(1.4)')
    $(this).css('transform', 'translate(' + (xWalk * 0.15) * 1.2 + '% , ' + (yWalk * 0.2) * 1.2 + '%) scale(1.4)')

})

$('.huhu_parallax_icon').mouseleave(function(ei) {

    // BUTTON Reset
    $(this).find('.huhu_parallax_icon').css('transform', 'translate(0, 0)')
    $(this).css('transform', 'translate(0, 0)')

    // TEXT Reset
    $(this).find('.huhu_paralax_icon_init').css('transform', 'translate(0, 0)')
    $(this).css('transform', 'translate(0, 0)')
})