// ;防止跟其他js压缩时报错
; (function (window, document) {
    // 开启严格模式
    "use strict";

    function toolTips(options) {
        var self = this;
        if (!options) {
            throw new Error("请传入配置参数");
        }
        self = Object.assign(self, options);
        self.element = document.querySelectorAll(self.element);
        self.addToolTip(self.element);
    };

    // 原型链上提供方法
    toolTips.prototype = {
        addToolTip: function (element) {
            if (element && element.length > 0) {
                $(element).each(function() {
                    if (this.title) {
                        var temTitle = this.title; //把title的赋给自定义属性 myTilte ，屏蔽自带提示
                        var deviation = 30; //提示偏移量
                        $(this).mouseover(function (e) {
                            this.title = "";
                            var temHtml = '<div class="tooltip" id="tooltip">' + temTitle + '</div>';
                            $("body").append(temHtml);
                            $("#tooltip").css({
                                left: (e.pageX + deviation) + "px",
                                top: deviation.pageY + "px",
                                opacity: "1"
                            }).show(250) //设置提示框的坐标，并显示
                        }).mouseout(function () {
                            this.title = temTitle; //重新设置title
                            $("#tooltip").remove()
                        }).mousemove(function (e) {
                            $("#tooltip").css({
                                left: (e.pageX + deviation) + "px",
                                top: e.pageY + "px"
                            });
                        });
                    }
                });
            }
        }
    };

    // 兼容CommonJs规范
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = toolTips;
    };

    // 兼容AMD/CMD规范
    if (typeof define === 'function') define(function () {
        return toolTips;
    });

    // 注册全局变量,兼容使用script标签引入插件
    window.toolTips = toolTips;
})(window, document);