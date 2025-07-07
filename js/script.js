// ハンバーガーメニューの開閉（20250623を参考）
document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-btn');
    const siteMenu = document.querySelector('.site-menu');

    if (menuBtn && siteMenu) {
        menuBtn.addEventListener('click', function () {
            siteMenu.classList.toggle('active');
            menuBtn.classList.toggle('active');
        });
    }

    // ページトップへ戻るボタン
    const toTopBtn = document.createElement('button');
    toTopBtn.textContent = '▲ トップへ';
    toTopBtn.id = 'toTopBtn';
    toTopBtn.style.position = 'fixed';
    toTopBtn.style.right = '30px';
    toTopBtn.style.bottom = '30px';
    toTopBtn.style.display = 'none';
    toTopBtn.style.padding = '10px 18px';
    toTopBtn.style.background = '#24211b';
    toTopBtn.style.color = '#fff';
    toTopBtn.style.border = 'none';
    toTopBtn.style.borderRadius = '30px';
    toTopBtn.style.fontSize = '1rem';
    toTopBtn.style.cursor = 'pointer';
    toTopBtn.style.zIndex = '1000';
    document.body.appendChild(toTopBtn);

    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) {
            toTopBtn.style.display = 'block';
        } else {
            toTopBtn.style.display = 'none';
        }
    });

    toTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});