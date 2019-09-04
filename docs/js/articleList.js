$(function () {
    $('.customJump').on('click', function (event) {
        event.preventDefault(); // 阻止默认事件
        event.stopPropagation(); // 阻止冒泡
        href = $(this).attr("href");
        if (href) {
            $("#mainContent").load("template/" + href.slice(2));
        }
    });

    $('.ownJump').on('click', function(event) {
        event.preventDefault(); // 阻止默认事件
        event.stopPropagation(); // 阻止冒泡
        href = $(this).attr("href");
        if (href) {
            $(this).parent('.article-box').load("template/" + href.slice(2));
        }
    });
    $('.ownJump').each(function() {
        $(this).trigger("click");
    });
});
