const MY_SUBTITLE_ID = "my-subtitle";
const SUBTITLE_CONTAINER_ID = "subtitle-container";

function getSubtitleEl() {
  return document.querySelector('[data-testid="subtitle-text"]');
}

function hideSubtitle(subtitleEl) {
  subtitleEl.style.opacity = 0;
}

function getSubtitleText(subtitleEl) {
  return subtitleEl.textContent;
}

function initSubtitleContainerEl() {
  const subtitleContainerEl = document.createElement("div");
  subtitleContainerEl.id = SUBTITLE_CONTAINER_ID;
  subtitleContainerEl.style.position = "relative";
  subtitleContainerEl.style.width = "100%";
  subtitleContainerEl.style.height = "100%";
  return subtitleContainerEl;
}

function styleMySubtitleEl() {
  const mySubtitleEl = document.getElementById(MY_SUBTITLE_ID);
  mySubtitleEl.style.position = "fixed";
  mySubtitleEl.style.top = "0";
  mySubtitleEl.style.left = "0";
  mySubtitleEl.style.zIndex = "99999";
  mySubtitleEl.style.backgroundColor = "white";
  mySubtitleEl.style.padding = "0.5rem";
  mySubtitleEl.style.fontSize = "1.5rem";
  mySubtitleEl.style.fontWeight = "bold";
  mySubtitleEl.style.color = "black";
  mySubtitleEl.style.border = "1px solid black";
  mySubtitleEl.style.borderRadius = "0.5rem";
  mySubtitleEl.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.26)";
}

function removeOldMySubtitleEl() {
  const oldMySubtitleEl = document.getElementById(MY_SUBTITLE_ID);
  if (oldMySubtitleEl) {
    oldMySubtitleEl.remove();
  }
}

function checkRemoveNecessary(oldSubtitleText, newSubtitleText) {
  return oldSubtitleText !== newSubtitleText;
}

function createMySubtitleEl(subtitleText) {
  const mySubtitleEl = document.createElement("div");
  mySubtitleEl.id = MY_SUBTITLE_ID;
  mySubtitleEl.textContent = subtitleText;
  styleMySubtitleEl(mySubtitleEl);
  return mySubtitleEl;
}

function main() {
  // hideSubtitle(getSubtitleEl());
  let nowSubtitleText = "";

  setInterval(() => {
    const subtitleEl = getSubtitleEl();
    const newSubtitleText = getSubtitleText(subtitleEl);
    if (newSubtitleText !== nowSubtitleText) {
      console.log(newSubtitleText);
      nowSubtitleText = newSubtitleText;
    }
  }, 100);
}

main();
