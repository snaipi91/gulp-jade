;(function () {
    // initialize
    var pay24 = $('.js__pay24'),
        bank = $('.js__bank'),
        burger = $('.js__burger'),
        menuMobile = $('.b-menu'),
        closeMenu = $('.js__close'),
        menuNav = $('.navigation__second-wrap'),
        subLink = $('.navigation__third-link'),
        code = $("#clipboard");

    [].forEach.call(document.querySelectorAll('.b-code-snippet__copy'), function (item) {
        $(item).on("click", function(e) {
            e.preventDefault();
            var content = e.target.parentNode.querySelector('span').textContent;
            var clipboard = document.getElementById('clipboard');
            code.val(content);
            code.select();
            document.execCommand("Copy");
        });
    });

    function burgerHandler() {
        menuMobile.toggleClass('b-menu--active');
    }

    function closeMenuHandler() {
        menuMobile.removeClass('b-menu--active');
    }

    // menuNav
    //     .on('click', function (e) {
    //         e.preventDefault();
    //
    //         var _targetLink = $(e.target).find('.js__*').prevObject[0],
    //             _targetLinkLength = _targetLink.classList.length;
    //
    //         if($(e.target).hasClass('navigation__second-link')) {
    //             console.log(_targetLink.classList[_targetLinkLength-1] + '--active');
    //             $(e.target).toggleClass(_targetLink.classList[_targetLinkLength-1] + '--active');
    //
    //             if($(this).hasClass(_targetLink.classList[_targetLinkLength-1] + '--active'))
    //                 $(this).siblings('.navigation__third-wrap').hide();
    //             else
    //                 $(this).siblings('.navigation__third-wrap').show();
    //         }
    //     });

    pay24
        .on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass('js__pay24--active');

            if($(this).hasClass('js__pay24--active'))
                $(this).siblings('.navigation__third-wrap').show();
            else
                $(this).siblings('.navigation__third-wrap').hide();
        });

    bank
        .on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass('js__bank--active');

            if($(this).hasClass('js__bank--active'))
                $(this).siblings('.navigation__third-wrap').show();
            else
                $(this).siblings('.navigation__third-wrap').hide();
        });

    burger
        .on('click', burgerHandler)
        .on('touch', burgerHandler);

    closeMenu
        .on('click', closeMenuHandler)
        .on('touch', closeMenuHandler)

}());