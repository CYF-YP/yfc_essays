
function mdSwitch(element) {
    var converter = new showdown.Converter(),
        text = $(element).prev(".md-content").text(),
        html = converter.makeHtml(text);
    $(element).text(html);
}

$('.md-area').on("click", function () {
    mdSwitch($(this));
});

$('.md-area').each(function () {
    $(this).trigger('click');
});