function observingLessonChange() {
  const targetElement = document.querySelector(".lecture-page-layout");
  const config = { childList: true, subtree: false };

  function styleTiny() {
    const courseMainbarEl = document.querySelector(".course-mainbar");
    courseMainbarEl.style.padding = ".25rem";
    courseMainbarEl.style.backgroundColor = "#3c3a34";

    const lectureAttachmentEl = document.querySelector(".lecture-attachment");
    lectureAttachmentEl.style.margin = "0";

    const wistiaResponsivePaddingEl = document.querySelector(
      ".wistia_responsive_padding",
    );
    wistiaResponsivePaddingEl.style.height = "85vh";
  }

  styleTiny();

  function removeUnnecessaryMain() {
    const videoOptionsEl = document.querySelector(".video-options");
    videoOptionsEl?.remove();

    const lectureContentCompleteButtonEl = document.querySelector(
      "#lecture_content_complete_button",
    );
    lectureContentCompleteButtonEl?.remove();

    const lectureHeadingEl = document.querySelector("#lecture_heading");
    lectureHeadingEl?.remove();
  }

  removeUnnecessaryMain();

  function operateRemovedNode(removedNode) {
    if (
      removedNode.classList &&
      removedNode.classList.contains("course-mainbar")
    ) {
      styleTiny();
      removeUnnecessaryMain();
    }
  }

  function observerCallback(mutationsList) {
    mutationsList.forEach((mutation) => {
      if (mutation.type === "childList") {
        mutation.removedNodes.forEach(operateRemovedNode);
      }
    });
  }

  const observer = new MutationObserver(observerCallback);

  observer.observe(targetElement, config);
}

module.exports = observingLessonChange;
