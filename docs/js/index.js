window.onload = function () {
    // var vConsole = new VConsole();
    $('#navHome').on('click', function () {
        $("#mainContent").load("template/articleList.html");
    });
    $('#navHome').trigger('click');

    var toolTip = new toolTips({
        element: ".nav-item"
    });
}