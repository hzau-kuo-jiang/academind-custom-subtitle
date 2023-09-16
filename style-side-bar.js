const courseSidebarEl = document.querySelector("#courseSidebar");
courseSidebarEl.style.minWidth = "0";
courseSidebarEl.style.width = "0";
courseSidebarEl.style.transition = "all 0.2s";

const homeEl = document.querySelector(".nav-icon-back");
homeEl.addEventListener("mouseover", () => {
  courseSidebarEl.style.minWidth = "350px";
  courseSidebarEl.style.width = "350px";
});
const settingsEl = document.querySelector(".nav-icon-settings");
settingsEl.addEventListener("mouseover", () => {
  courseSidebarEl.style.minWidth = "0";
  courseSidebarEl.style.width = "0";
});