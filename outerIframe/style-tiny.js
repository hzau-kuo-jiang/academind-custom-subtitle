function styleTinyMain() {
  const revampedLecturePlayerEl = document.querySelector(
    ".revamped_lecture_player",
  );
  revampedLecturePlayerEl.style.backgroundColor = "#3c3a34";

  const lecturePageLayoutEl = document.querySelector(".lecture-page-layout");
  lecturePageLayoutEl.style.overflow = "auto";
  lecturePageLayoutEl.style.height = "initial";
}

module.exports = styleTinyMain;
