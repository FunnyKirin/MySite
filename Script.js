var doc = document.documentElement;
$(function () {
    $('.navItem').click(function () {
        $('.navItem').removeClass("navActive");
        $($(this).addClass('navActive'));
    });
});

function scroll() {
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top <= $("#Profile").position().top) {
        add($("#n1"));
    }
    else
    if (top <= $("#Education").position().top) {
        add($("#n2"));
    }
    else
    if (top <= $("#Experiences").position().top) {
        add($("#n3"));
    }
    else
    if (top <= $("#Abilities").position().top) {
        add($("#n4"));
    }
    else
    if (top <= $("#Projects").position().top) {
        add($("#n5"));
    }
}

function add(item) {
    $('.navItem').removeClass("navActive");
    $(item.addClass('navActive'));
}