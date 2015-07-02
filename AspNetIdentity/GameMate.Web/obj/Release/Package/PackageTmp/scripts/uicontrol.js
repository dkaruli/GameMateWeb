$(document).ready(function () {
    $("#navbar li a").click(function (event) {
        // check if window is small enough so dropdown is created
        $(".navbar-collapse").removeClass("in").addClass("collapse");
    });
});