"use strict"

$(document).ready(function() {
    $('.theme-select').click(function() {
        var newImage = $(this).data('file')
        $('#preview-theme').attr('src', newImage)
        $('.theme-select').removeClass('bg-zinc-300/5')
        $(this).removeClass('hover:bg-zinc-300/5').addClass('bg-zinc-300/5')
    })
})