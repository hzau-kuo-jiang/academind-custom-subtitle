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

const mySubtitlesContainerEl = document.createElement("div");
mySubtitlesContainerEl.id = "my-subtitles-container";
mySubtitlesContainerEl.style.background = "rgba(0, 0, 0, 0.3)";
mySubtitlesContainerEl.style.borderRadius = ".2em";
mySubtitlesContainerEl.style.display = "flex";
mySubtitlesContainerEl.style.flexDirection = "column-reverse";
mySubtitlesContainerEl.style.fontSize = "2rem";
mySubtitlesContainerEl.style.minHeight = "8em";
mySubtitlesContainerEl.style.padding = ".2em .4em";

const DUMMY_SUBTITLE_TEXT = "Dummy subtitle text";
const mySubtitleEl = document.createElement("p");
mySubtitleEl.id = "my-subtitle";
mySubtitleEl.textContent = DUMMY_SUBTITLE_TEXT;
mySubtitleEl.style.color = "#fffddd";

mySubtitlesContainerEl.appendChild(mySubtitleEl);

const insertTargetEl = document.querySelector("#__next");
insertTargetEl.insertBefore(mySubtitlesContainerEl, insertTargetEl.firstChild);

setInterval(() => {
  const subtitleEl = document.querySelector('[data-testid="subtitle-text"]');
  const nowSubtitleText = subtitleEl.textContent;
  const oldSubtitleText = mySubtitleEl.textContent;
  if (nowSubtitleText !== oldSubtitleText) {
    mySubtitleEl.textContent = nowSubtitleText;
  }
}, 1000);
