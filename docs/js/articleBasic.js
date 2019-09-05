
function mdSwitch(element) {
    debugger;
    var converter = new showdown.Converter(),
        text = $(element).prev(".md-content").value,
        html = converter.makeHtml(text);
    $(element).html(html);
}

$('.md-area').on("click", function () {
    mdSwitch($(this));
});

$('.md-area').each(function () {
    $(this).trigger('click');
});