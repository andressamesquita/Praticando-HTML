$.get('/html/header.html',function(data) {
    var header = $(data).filter('.header');
    $('body').prepend(header);
    $('#show-button').hide();
});

$.get('/html/vertical-menu.html',function(data) {
    var menu = $(data).filter('.vertical-menu');
    $("#conteudo").prepend(menu);
});

function resize(){
    var tamanho = $('body').height();
    var tamanho2 = $('#header').height();
    $('#conteudo').css('height', tamanho - tamanho2);
}

window.onresize = function(){
    resize();
}
$(document).ready(function(){
    resize();
});