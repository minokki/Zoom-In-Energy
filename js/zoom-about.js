$(document).ready(function () {
  // 탭 기능 활성화
  $("#myTab a").on("click", function (e) {
    e.preventDefault();
    $(this).tab("show");
    AOS.refresh();
    AOS.init();
  });
  $(".nav-link").on("click", function () {
    AOS.refresh();
    AOS.init();
  });
  AOS.init();
});
