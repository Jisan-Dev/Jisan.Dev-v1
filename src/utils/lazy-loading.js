const lazyLoading = () => {
  const lazyImgs = document.querySelectorAll('.lazy');

  const observer = new IntersectionObserver((entries, observer) => {
    // console.log(entries);
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // console.log(entry.target);
        let img = entry.target;
        // img.src = img.dataset.src;  //previously used placeholder image as src in html img tag & the original src as data-src
        img.classList.remove('loading');
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });

  lazyImgs.forEach((img) => {
    observer.observe(img);
  });
};

export default lazyLoading;
