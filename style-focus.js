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

const iframeEl = document.querySelector("iframe");
console.log(iframeEl);
iframeEl.style.height = "80vh";
