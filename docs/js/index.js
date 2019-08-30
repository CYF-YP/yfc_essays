$(function(){
    // var vConsole = new VConsole();
    $('#navHome').on('click', function() {
        $("#mainContent").load("template/articleList.html");
    });
    $('#navHome').trigger('click');
});