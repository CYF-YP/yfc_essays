
function mdSwitch(element) {
    var converter = new showdown.Converter(),
        text = $(element).prev(".md-content"),
        html = converter.makeHtml(text);
    $(element).text(html);
}

$('#md-area').on("click", function () {
    mdSwitch($(this));
});