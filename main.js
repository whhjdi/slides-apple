var allButtons = $('#buttons>span')
for (let i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', function (x) {
        let index = $(x.currentTarget).index()
        var px = index * (-720)
        n = index
        $('.imgs').css({
            transform: 'translate(' + px + 'px)'
        })
        activeButton(allButtons.eq(n))
    })
}

function activeButton($Button) {
    $Button
        .addClass('red')
        .siblings('.red').removeClass('red')
}