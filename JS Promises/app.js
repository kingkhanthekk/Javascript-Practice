function delayedBGColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
}

delayedBGColor("red", 1000)
  .then(() => {
    return delayedBGColor("green", 2000);
  })
  .then(() => {
    return delayedBGColor("blue", 1000);
  })
  .then(() => {
    return delayedBGColor("orange", 2000);
  })
  .then(() => {
    delayedBGColor("violet", 1000);
  });
