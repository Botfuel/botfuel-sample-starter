const obs = new MutationObserver((mutations) => {
  // Find mutations where js script appended to dom
  console.log('mutations', mutations);
});

// define what element should be observed by the observer
// and what types of mutations trigger the callback
obs.observe(document, {
  childList: true,
});
