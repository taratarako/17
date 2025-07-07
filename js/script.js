$(function () {
    // ハンバーガーメニューの開閉
    const $menuBtn = $('.menu-btn');
    const $siteMenu = $('.site-menu');

    $menuBtn.on('click', function () {
        $siteMenu.toggleClass('active');
        $(this).toggleClass('active');
    });

    // トップへ戻るボタン（シンプルなデザイン）
    const $toTopBtn = $('<button>', {
        id: 'toTopBtn',
        text: 'トップへ戻る'
    }).css({
        position: 'fixed',
        right: '20px',
        bottom: '20px',
        padding: '15px',
        background: '#333',
        color: '#fff',
        border: 'none',
        fontSize: '14px',
        cursor: 'pointer',
        zIndex: 1000,
        display: 'none',
        opacity: 0.7
    }).appendTo('body');

    // スクロールイベント
    $(window).scroll(function () {
        // ボタンの表示/非表示
        if ($(window).scrollTop() > 100) {
            $toTopBtn.fadeIn();
        } else {
            $toTopBtn.fadeOut();
        }
        
        // スクロールに合わせてボタンを追従
        $toTopBtn.stop().animate(
            {"top": $(window).scrollTop() + $(window).height() - 100},
            500
        );
    });

    // クリックイベント
    $toTopBtn.click(function () {
        $('html, body').animate({scrollTop: 0}, 400);
        return false;
    });
});