const targetElement = document.querySelector(".lecture-page-layout");

const config = { childList: true, subtree: false };

const observer = new MutationObserver((mutationsList) => {
  for (let mutation of mutationsList) {
    if (mutation.type === "childList") {
      mutation.removedNodes.forEach((removedNode) => {
        if (
          removedNode.classList &&
          removedNode.classList.contains("course-mainbar")
        ) {
          const courseMainbarEl = document.querySelector(".course-mainbar");
          courseMainbarEl.style.padding = ".25rem";
          courseMainbarEl.style.backgroundColor = "#3c3a34";
        }
      });
    }
  }
});

observer.observe(targetElement, config);
