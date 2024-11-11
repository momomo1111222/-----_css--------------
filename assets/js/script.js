//ドキュメント　（html)の準備が整った段階で実行
$(function() {
    //同等の意味下の方が同党  $('#header-btn').click(() => {})
        $('#header-btn').on('click', () => {
            $('body').toggleClass('is-openMenu');
        })
})
