function styleHeader() {
  const pageHeight = window.innerHeight;
  const headerEl = document.querySelector(".full-width.half-height");
  const headerHeight = headerEl.offsetHeight;
  headerEl.style.bottom = "0";
  headerEl.style.position = "absolute";
  headerEl.style.height = `${headerHeight}px`;
  headerEl.style.top = `${pageHeight - headerHeight}px`;
}

setInterval(() => {
  styleHeader();
}, 1000);

{
  const headerEl = document.querySelector(".full-width.half-height");
  const headerRect = headerEl.getBoundingClientRect();
  const pageHeight = window.innerHeight;
  const distanceToBottom = pageHeight - headerRect.bottom;
  console.log(distanceToBottom);
}
