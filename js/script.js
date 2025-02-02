"use strict"

$(document).ready(function() {
    $('#toggle-menu').on('click', function () {
        $('#menu-list').slideToggle(300)
    })

    $('.theme-select').click(function() {
        var newImage = $(this).data('file')
        $('#preview-theme').attr('src', newImage)
        $('.theme-select').removeClass('bg-zinc-300/5')
        $(this).removeClass('hover:bg-zinc-300/5').addClass('bg-zinc-300/5')
    })
})