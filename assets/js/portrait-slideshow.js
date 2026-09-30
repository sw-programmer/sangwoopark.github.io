document.querySelectorAll("[data-portrait-slideshow]").forEach((portrait) => {
  const images = portrait.querySelectorAll("img");
  if (images.length < 2) return;
  let current = 0;

  portrait.addEventListener("click", () => {
    const next = (current + 1) % images.length;
    if (!images[next].complete || images[next].naturalWidth === 0) return;
    images[current].hidden = true;
    images[next].hidden = false;
    current = next;
    portrait.setAttribute("aria-label", current === 0 ? "Show alternate portrait" : "Show original portrait");
  });
});
