const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach((item) => {
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  });
});

// const width = 6.43 / Math.sqrt(Math.pow(20 / 9, 2) + 1);
// const height = (20 / 9) * width.toFixed(2);

// const dpi = 409 / 160;
// const dp = 1080 / dpi.toFixed(2);

// console.log(width);
// console.log(height);
// console.log(dpi);
// console.log(dp);
