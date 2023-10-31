document.addEventListener("DOMContentLoaded", function () {
  /* Carousel */
  $(".gallery-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 2500,
    autoplayTimeout: 7000, // 3초마다 움직이게 설정
    margin: 25,
    loop: true,
    center: true,
    dots: false,
    nav: true,
    navText: [
      '<i class="fa-solid fa-arrow-left"></i>',
      '<i class="fa-solid fa-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  /* 모달 창 열기 스크립트 */
  const modal = document.querySelector(".modal");
  const openModalLinks = document.querySelectorAll(".open-modal");
  const modalImage = document.querySelector("#modal-image");
  const modalClose = document.querySelector(".modal-close");

  openModalLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      modalImage.src = this.getAttribute("href");
      modal.style.display = "block";

      // 추가: 모달 열 때 이미지 확대
      modalImage.style.width = "100%"; // 이미지를 모달 창 너비로 확대
    });
  });

  modalClose.addEventListener("click", function () {
    modal.style.display = "none";
    modalImage.style.width = ""; // 모달 닫을 때 이미지 크기 원래대로 복원
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      modalImage.style.width = ""; // 모달 닫을 때 이미지 크기 원래대로 복원
    }
  });

  AOS.init();
});
