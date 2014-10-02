/**
Chipkoo.js is free and open source jquery plugin used to fix table headers. https://github.com/anirudhvarma12/chipkoojs
**/
(function ($) {
    $.fn.chipkoo = function () {
        var $head = $(this).find("tr:first-child");
        var $dataRow = $(this).find("tr").eq(1);
        var lengthArray = new Array();
        $dataRow.children().each(function () {
            lengthArray.push($(this).outerWidth());
        });
        for (var i = 0; i < lengthArray.length; i++) {
            $head.children().eq(i).innerWidth(lengthArray[i]);
        }
        $head.css({
            "position": "fixed"
        });
        var height = $head.outerHeight();
        var className = "js-chipkoo";
        $("<tr class='" + className + "'></tr>").insertAfter($head);
        $("." + className).height(height);
        $("." + className).css("visiblity", "hidden");
        return this;
    };
}(jQuery));