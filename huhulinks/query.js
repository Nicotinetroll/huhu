$('.huhu_parallax').mousemove(function(e) {
    let { offsetX: x, offsetY: y } = e

    let width = $(this).width()
    let height = $(this).height()

    let xWalk = Math.round((x / width * 100) - 50)
    let yWalk = Math.round((y / height * 100) - 50)

    // BUTTON
    $(this).find('.huhu_parallax').css('transform', 'translate(' + (xWalk * 20.) * 1.2 + '%, ' + (yWalk * 0.2) * 1.2 + '%) scale(1.05)')
    $(this).css('transform', 'translate(' + (xWalk * 0.2) * 1.2 + '% , ' + (yWalk * 0.2) * 1.2 + '%) scale(1.05)')

    // TEXT
    $(this).find('.huhu_btn_text').css('transform', 'translate(' + (xWalk * 0.15) * 1.2 + '%, ' + (yWalk * 0.15) * 1.2 + '%) scale(1.05)')
    $(this).css('transform', 'translate(' + (xWalk * 0.15) * 1.2 + '% , ' + (yWalk * 0.2) * 1.2 + '%) scale(1.05)')

})

$('.huhu_parallax').mouseleave(function(e) {

    // BUTTON Reset
    $(this).find('.huhu_parallax').css('transform', 'translate(0, 0)')
    $(this).css('transform', 'translate(0, 0)')

    // TEXT Reset
    $(this).find('.huhu_btn_text').css('transform', 'translate(0, 0)')
    $(this).css('transform', 'translate(0, 0)')
})