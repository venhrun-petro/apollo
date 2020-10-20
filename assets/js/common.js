
$(document).ready(function(){
  // console.log('1');
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
 
  
  if ("IntersectionObserver" in window) {
      let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              let lazyImage = entry.target;
              lazyImage.src = lazyImage.dataset.src;
              lazyImage.srcset = lazyImage.dataset.srcset;
              lazyImage.classList.remove("lazy");
              lazyImageObserver.unobserve(lazyImage);
            }
        });
      });

      lazyImages.forEach(function(lazyImage) {
          lazyImageObserver.observe(lazyImage);
      });
    } else {
        // Possibly fall back to event handlers here
        console.log('img false')
    }

    var lazyVideos = [].slice.call(document.querySelectorAll(".lazy-video"));

    if ("IntersectionObserver" in window) {
      let lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              let lazyImage = entry.target;
              let LazyClass = lazyImage.dataset.video;
              lazyImage.classList.add(LazyClass);
              lazyVideoObserver.unobserve(lazyImage);
            }
        });
      });

      lazyVideos.forEach(function(lazyVideo) {
        lazyVideoObserver.observe(lazyVideo);
      });
    } else {
        // Possibly fall back to event handlers here
        console.log('img false')
    }
 
}); 
 
 
 