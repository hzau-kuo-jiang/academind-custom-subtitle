const vanillaSubtitleEl = document.querySelector(
  '[data-testid="subtitle-text"]',
);
console.log(vanillaSubtitleEl);

const videoContainerEl = document.querySelector('[data-vjs-player="true"]');
console.log(videoContainerEl);
videoContainerEl.style.height = "80vh";

const frameContainerEl = document.querySelector("#__next > div");
console.log(frameContainerEl);
frameContainerEl.style.height = "80vh";
/*
 * ********
 * */

const iframeEl = document.querySelector("iframe");
console.log(iframeEl);
iframeEl.style.height = "80vh";

const courseMainbarEl = document.querySelector(
  ".course-mainbar.lecture-content",
);
console.log(courseMainbarEl);
courseMainbarEl.style.display = "flex";
courseMainbarEl.style.flexDirection = "column";

const lectureHeadingEl = document.querySelector("#lecture_heading");
console.log(lectureHeadingEl);
lectureHeadingEl.style.order = "1";
