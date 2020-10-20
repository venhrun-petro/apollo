
$(document).ready(function(){
  // console.log('1');
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  console.log(lazyImages.event);
  
  if ("IntersectionObserver" in window) {
      let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          // console.log(entry, ' netry')
          // console.log(entry.isIntersecting)
            if (entry.isIntersecting) {
              let lazyImage = entry.target;
              // console.log(lazyImage, ' lazy ');
              lazyImage.src = lazyImage.dataset.src;
              lazyImage.srcset = lazyImage.dataset.srcset;
              lazyImage.classList.remove("lazy");
              lazyImageObserver.unobserve(lazyImage);
            }else{
              // console.log(entry);
            }
            // if (entry.intersectionRatio === 1) {
            //   console.log(entry.target);
            // }
            // console.log(entry.target, ' target ');
        });
      });

      lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
      });
    } else {
        // Possibly fall back to event handlers here
        console.log('img false')
    }
 
}); 
 
 
 