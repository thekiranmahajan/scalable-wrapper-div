const scalableWrapper = document.querySelector(".scalable-wrapper");

const adjustWrapper = () => {
  const aspectRatio = 16 / 9;
  const padding = 5;

  let width = window.innerWidth - padding * 2;
  let height = window.innerHeight - padding * 2;

  if (width / height > aspectRatio) {
    width = height * aspectRatio;
  } else {
    height = width / aspectRatio;
  }
  scalableWrapper.style.width = `${width}px`;
  scalableWrapper.style.height = `${height}px`;


  const baseFontSize = 16;
  const scalingFactor = width / 800;
  const adjustedFontSize = baseFontSize * scalingFactor;

  scalableWrapper.style.fontSize = `${adjustedFontSize}px`;
};

adjustWrapper();
window.addEventListener("resize", adjustWrapper);
