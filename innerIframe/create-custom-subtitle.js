function createCustomSubtitle() {
  function initMySubtitleContainer() {
    const mySubtitlesContainerEl = document.createElement("div");
    mySubtitlesContainerEl.id = "my-subtitles-container";
    mySubtitlesContainerEl.style.background = "rgba(0, 0, 0, 0.3)";
    mySubtitlesContainerEl.style.borderRadius = ".2em";
    mySubtitlesContainerEl.style.display = "flex";
    mySubtitlesContainerEl.style.flexDirection = "column-reverse";
    mySubtitlesContainerEl.style.fontSize = "2rem";
    mySubtitlesContainerEl.style.minHeight = "8em";
    mySubtitlesContainerEl.style.padding = ".2em .4em";
    return mySubtitlesContainerEl;
  }

  const mySubtitlesContainerEl = initMySubtitleContainer();

  function initMySubtitle() {
    const DUMMY_SUBTITLE_TEXT = "Dummy subtitle text";
    const mySubtitleEl = document.createElement("p");
    mySubtitleEl.id = "my-subtitle";
    mySubtitleEl.textContent = DUMMY_SUBTITLE_TEXT;
    mySubtitleEl.style.color = "#fffddd";
    return mySubtitleEl;
  }

  const mySubtitleEl = initMySubtitle();

  mySubtitlesContainerEl.appendChild(mySubtitleEl);

  const nextEl = document.querySelector("#__next");
  nextEl.style.background = "#3c3a34";
  nextEl.insertBefore(mySubtitlesContainerEl, nextEl.firstChild);
}

createCustomSubtitle();
