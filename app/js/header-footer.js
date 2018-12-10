$(function () {
    $(".navigation-bar").mouseenter(function () {
        $(".nab-particulars").toggle(true);
        $(".navigation-bar").find("em").attr("class", "pjd pjd-jiantoushang");
    });
});
$(function () {
    $(".navigation-bar").mouseleave(function () {
        $(".nab-particulars").toggle(false);
        $(".navigation-bar").find("em").attr("class", "pjd pjd-jiantouxia");
    });
});
//网站导航//
$(function () {
    $(".merchan").mouseenter(function () {
        $(".merchan-la").toggle(true);
        $(".merchan").find("em").attr("class", "pjd pjd-jiantoushang");
    });
});
$(function () {
    $(".merchan").mouseleave(function () {
        $(".merchan-la").toggle(false);
        $(".merchan").find("em").attr("class", "pjd pjd-jiantouxia");
    });
});
//商家入驻//
$(function () {
    $(".customer-service").mouseenter(function () {
        $(".service-la").toggle(true);
        $(".customer-service").find("em").attr("class", "pjd pjd-jiantoushang");
    });
});
$(function () {
    $(".customer-service").mouseleave(function () {
        $(".service-la").toggle(false);
        $(".customer-service").find("em").attr("class", "pjd pjd-jiantouxia");
    });
});
//客户服务//
$(function () {
    $(".d-wodedingdan").mouseenter(function () {
        $(".wddd-la").toggle(true);
        $(".d-wodedingdan").find("em").attr("class", "pjd pjd-jiantoushang");
    });
});
$(function () {
    $(".d-wodedingdan").mouseleave(function () {
        $(".wddd-la").toggle(false);
        $(".d-wodedingdan").find("em").attr("class", "pjd pjd-jiantouxia");
    });
});
//我的订单//
$(function () {
    $(".d-wodeyigou").mouseenter(function () {
        $(".wdyg-la").toggle(true);
        $(".d-wodeyigou").find("em").attr("class", "pjd pjd-jiantoushang");
    });
});
$(function () {
    $(".d-wodeyigou").mouseleave(function () {
        $(".wdyg-la").toggle(false);
        $(".d-wodeyigou").find("em").attr("class", "pjd pjd-jiantouxia");
    });
});
//我的易购//
$(function () {
    $(".d-gouwuche").mouseenter(function () {
        $(".gouwuche-la").toggle(true);
        $(".d-gouwuche").find("em").attr("class", "pjd pjd-jiantoushang");
    });
});
$(function () {
    $(".d-gouwuche").mouseleave(function () {
        $(".gouwuche-la").toggle(false);
        $(".d-gouwuche").find("em").attr("class", "pjd pjd-jiantouxia");
    });
});