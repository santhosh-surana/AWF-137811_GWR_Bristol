function init() {
  startTime = new Date();

  ///having a delay to the start has fixed some issues in safari with text line breaks being off when font isn't loaded yet
  var tlStart = new TimelineMax({ onComplete: init2 });

  tlStart.to(["#main_container"], 0, { top: 0, delay: 0.1 });
  tlStart.to("#main_content", 0, { rotation: 0.1 })
}

var tl, tl2;

function init2() {
  tl = new TimelineMax({ onComplete: endTime });
  tl2 = new TimelineMax();

  addListeners();

  doAnimation();
}

function setElements() {}

function doAnimation() {
  tl2.to('#bg_1', 12, { scale: 1.15, x: "+=20", y: '-=3', ease: 'none' })

  tl.to('#main_content', 0.5, { autoAlpha: 1, ease: Power1.easeInOut })
    .to('#h1', 0.5, { autoAlpha: 1, ease: Power1.easeInOut })
    .to('#h1', 0.5, { autoAlpha: 0, ease: Power1.easeInOut }, "+=5.5")
    .to('#bg_2', 0.75, { x: 0, ease: Power1.easeInOut }, "-=0.25")
    .staggerTo(['#h2', '#cta'], 0.5, { autoAlpha: 1, ease: Power1.easeInOut }, 0.75)
}

function addListeners() {
  document
    .getElementById("default_exit")
    .addEventListener("click", bgExitHandler, false);
  document
    .getElementById("default_exit")
    .addEventListener("mouseover", ctaRollover, false);
  document
    .getElementById("default_exit")
    .addEventListener("mouseout", ctaRollout, false);
}

function bgExitHandler(e) {
  window.open(clickTag, "_blank");
}

function ctaRollover () {
  TweenMax.to('#cta', 0.25, { scale: 1.1 })
}

function ctaRollout () {
  TweenMax.to('#cta', 0.25, { scale: 1 })
}

function endTime() {
  // show total banner animation time in browser console.
  var endTime = new Date();

  console.log(
    "Animation duration: " + (endTime - startTime) / 1000 + " seconds"
  );
}
