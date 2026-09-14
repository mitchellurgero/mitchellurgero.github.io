const clock = document.querySelector("#clock");
const intro = document.querySelector("#intro");
const introFrame = document.querySelector("#intro-frame");
const skipIntro = document.querySelector("#skip-intro");
const replayIntro = document.querySelector("#replay-intro");
const introDuration = 2800;
const loadTimeout = 8000;
let introTimer;

function updateClock() {
  const now = new Date();
  clock.dateTime = now.toISOString();
  clock.textContent = now.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
}

updateClock();
window.setInterval(updateClock, 30_000);

function finishIntro() {
  window.clearTimeout(introTimer);
  intro.classList.add("is-hidden");
  window.setTimeout(() => {
    intro.hidden = true;
  }, 300);
}

function startIntro() {
  window.clearTimeout(introTimer);
  intro.hidden = false;
  intro.classList.remove("is-hidden");

  // A query value forces the self-contained CSS animation to restart on replay.
  introFrame.src = `${introFrame.dataset.src}?play=${Date.now()}`;
  introTimer = window.setTimeout(finishIntro, loadTimeout);
}

introFrame.addEventListener("load", () => {
  if (intro.hidden || introFrame.src === "about:blank") return;
  window.clearTimeout(introTimer);
  introTimer = window.setTimeout(finishIntro, introDuration);
});

skipIntro.addEventListener("click", finishIntro);
replayIntro.addEventListener("click", startIntro);

if (new URLSearchParams(window.location.search).has("skipIntro")) {
  intro.hidden = true;
} else {
  startIntro();
}
