$(function () {
    // ハンバーガーメニューの開閉
    const $menuBtn = $('.menu-btn');
    const $siteMenu = $('.site-menu');

    $menuBtn.on('click', function () {
        $siteMenu.toggleClass('active');
        $(this).toggleClass('active');
    });

    // 上へボタンを動的に追加
    if (!$('nav.floating').length) {
        const $toTopNav = $('<nav>', {
            class: 'floating'
        }).appendTo('main');

        $('<ul>').appendTo($toTopNav)
            .append(
                $('<li>').append(
                    $('<a>', {
                        href: '#',
                        text: '上へ'
                    })
                )
            );
    }

    // クリックイベント
    $(document).on('click', 'nav.floating a', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 400);
    });
});