$(document).ready(function () { 
    inithoverStamp();
//    initAjaxFunctionality();
})

function inithoverStamp(){
    var item = $(".spotlightThumb");

    item.mouseenter(function () {
        var curStamp = $(this).find(".hoverStamp img");

        curStamp.animate({
            height: '130px'
        }, 200);
    })

    item.mouseleave(function () {
        var curStamp = $(this).find(".hoverStamp img");

        curStamp.animate({   
            height: '240px'
            }, 200);
    })


}

/*function initAjaxFunctionality(){
    var navItems = $("#nav li a");

    var prevPage;

    navItems.each(function () {
        $(this).click(function () {
            prevPage = splitHash(location.hash);
            location.hash = $(this).attr("href");
            var newHash = splitHash(location.hash);

            if (prevPage != newHash) {
                ajaxCall(newHash);
            };
        })
    })

    window.onhashchange = function () {
        newHash = splitHash(location.hash);
        ajaxCall(newHash);
    }

    ajaxCall(splitHash(location.hash));
};*/
/*
function splitHash(str){
    if (str == "") {
        str = "#!home"
    }
    var splitHash = str.split("#");
    splitHash = splitHash[1];
    splitHash = splitHash.split("!");
    return splitHash[1];    
}*/

/*
function ajaxCall(curIndex){
    var viewport = $("#viewport");
    var ajaxSpacer = $("#ajaxSpacer");
    viewport.empty();

    if(curIndex == undefined || curIndex == ""){
        curIndex = "home";
    }

    viewport.css('opacity', 0);
    viewport.load("pages/" + curIndex + ".html", function () {
        viewport.animate({ 'opacity': 1 });
    });

    */
/*$.ajax({
        type: "get",
        url: "pages/" + curIndex + ".html",
        datatype: "text",
        success: function (data) {
            viewport.hide();
            viewport.html(data);
            viewport.fadeIn(200);
        },
        error: function (jqXHR, status, error) {
            console.log(error);
        }
    });*//*

}*/
