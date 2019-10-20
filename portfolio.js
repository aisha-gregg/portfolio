const elements = document.querySelectorAll(".main-container > *");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
});

elements.forEach(element => {
  element.classList.add("hide");
  observer.observe(element);
});
