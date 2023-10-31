document.addEventListener("DOMContentLoaded", () => {
  /**
   * 모바일 햄버거 x표시
   */
  const burger = $(".menu-trigger");

  burger.each(function (index) {
    var $this = $(this);

    $this.on("click", function (e) {
      e.preventDefault();
      $(this).toggleClass("active-" + (index + 1));
    });
  });

  /**
   * 모바일 햄버거 버튼 click
   */

  const toggleBtn = document.querySelector(".menu-trigger");
  const menu = document.querySelector(".navbar_menu");
  const link = document.querySelector(".navbar_link");
  const navbar = document.querySelector(".navbar"); // navbar 엘리먼트 선택

  toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    link.classList.toggle("active");
    navbar.classList.toggle("active-bg"); // 햄버거 버튼 클릭 시 navbar에 'active-bg' 클래스 토글
  });

  /**
   * 스크롤시 navbar sicked 추가
   */
  const selectHeader = document.querySelector(".navbar");
  const selectToggleNav = document.querySelector(".navbar.toggle-nav");

  if (selectHeader) {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 60) {
        selectHeader.classList.add("sticked");
      } else {
        selectHeader.classList.remove("sticked");
      }
    });
  }
});
