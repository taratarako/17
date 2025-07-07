$(function () {
    // ハンバーガーメニューの開閉
    const $menuBtn = $('.menu-btn');
    const $siteMenu = $('.site-menu');

    $menuBtn.on('click', function () {
        $siteMenu.toggleClass('active');
        $(this).toggleClass('active');
    });

    // トップへ戻るボタン
    const $toTopBtn = $('<button>', {
        class: 'floating-button',
        text: 'トップに戻る'
    }).css({
        position: 'fixed',
        left: '20px', 
        bottom: '20px',
        padding: '10px 20px',
        background: '#4aa5f0',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        fontSize: '16px',
        cursor: 'pointer',
        zIndex: 1000,
        display: 'none',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
    }).appendTo('body');

    // スクロールイベント
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $toTopBtn.fadeIn();
            // スクロールに合わせてボタンを追従
            $toTopBtn.stop().animate(
                {bottom: Math.max(20, $(window).height() - $(window).scrollTop() - 100)},
                500
            );
        } else {
            $toTopBtn.fadeOut();
        }
    });

    // クリックイベント
    $toTopBtn.click(function () {
        $('html, body').animate({scrollTop: 0}, 400);
        return false;
    });
});