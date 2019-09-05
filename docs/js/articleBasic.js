
function mdSwitch(element) {
    debugger;
    var converter = new showdown.Converter(),
        text = $($(element).prev(".md-content")[0]).val(),
        html = converter.makeHtml(text);
    $(element).html(html);
}

$('.md-area').on("click", function () {
    mdSwitch($(this));
});

$('.md-area').each(function () {
    $(this).trigger('click');
});