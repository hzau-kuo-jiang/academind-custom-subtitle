const observingLessonChange = require("./observing-lesson-change");
const styleHeaderMain = require("./style-header");
const styleSideBarMain = require("./style-side-bar");
const styleTinyMain = require("./style-tiny");

function main() {
  styleHeaderMain();
  styleSideBarMain();
  styleTinyMain();
  observingLessonChange();
}

main();