function loadImg() {
    var bgImage = new Image();
    bgImage.src = "./img/bg.jpg";    
}

window.onload = function () {
    // var vConsole = new VConsole();
    $('.bg').css("background-image","url(" + loadImg() +")");

    $('#navHome').on('click', function () {
        $("#mainContent").load("template/articleList.html");
    });
    $('#navHome').trigger('click');

    var toolTip = new toolTips({
        element: ".nav-item"
    });
}