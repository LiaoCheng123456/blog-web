// the index entrance function
$(function () {
    // /**
    //  * 鼠标移入文章上面
    //  */
    // $(".article_content").mouseover(function () {
    //     articleDivChangeColor($(this), 1)
    // });
    //
    // /**
    //  * 鼠标移除文章上面
    //  */
    // $(".article_content").mouseout(function () {
    //     articleDivChangeColor($(this), 2)
    // });
    //
    // /*
    //  鼠标滑进文章上面，div变色
    //  */
    // function articleDivChangeColor(element, type) {
    //     if (type == 1) {
    //         $(element).addClass("article_content_active");
    //         $(".article_content_active .article_content_left > img").css({
    //             "transform": "scale(1.05)",
    //             "transition" : "all .5s"
    //         })
    //     } else {
    //         $(element).removeClass("article_content_active");
    //         $(".article_content .article_content_left > img").css({
    //             "transform": "scale(1.0)"
    //         })
    //     }
    // }

    /**
     * 鼠标移入搜索按钮
     */
    $(".search img").mouseover(function () {
        searchMouseOver($(this),"../images/index/searchActive.png");
    });

    /**
     * 鼠标移出搜索按钮
     */
    $(".search img").mouseout(function () {
        searchMouseOver($(this),"../images/index/search.png");
    });

    /**
     * 鼠标点击搜索按钮
     */
    $(".search img").click(function () {
        $(".search_input").toggle(300, function () {
            $(".search_input input").focus();
        });
    });

    /**
     * 失去焦点，隐藏
     */
    $(".search_input input").blur(function () {
        $(".search_input").css({
            "display":"none"
        });
    });
    /**
     * 搜索框移入更改图片
     */
    function searchMouseOver(element, imageUrl) {
        $(element).attr("src", imageUrl);
    }
    //
    //
    // $.get("http://localhost:8888/article/getarticlelist",function(data,status){
    //     console.log("Data: " + data + "\nStatus: " + status);
    // });
});

/*
 鼠标滑进文章上面，div变色
 */
function articleDivChangeColor(element, type) {
    if (type == 1) {
        $(element).addClass("article_content_active");
        $(".article_content_active .article_content_left > img").css({
            "transform": "scale(1.05)",
            "transition" : "all .5s"
        })
    } else {
        $(element).removeClass("article_content_active");
        $(".article_content .article_content_left > img").css({
            "transform": "scale(1.0)"
        })
    }
}
