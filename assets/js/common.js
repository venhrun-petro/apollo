
$(document).ready(function(){
  
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


    var lazyIframes = [].slice.call(document.querySelectorAll(".lazy-iframe"));

    if ("IntersectionObserver" in window) {
      let lazyIframeObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              let lazyIframe = entry.target;
              let frame = lazyIframe.dataset.iframe;

              let createIframe = document.createElement("iframe");
              createIframe.setAttribute("frameborder", "0");
              createIframe.setAttribute("allow", "autoplay; fullscreen");
              createIframe.setAttribute("allowfullscreen", "");
              createIframe.setAttribute("src", frame);
              lazyIframe.appendChild(createIframe);
              // lazyIframe.classList.add(LazyClass);
              lazyIframeObserver.unobserve(lazyIframe);
            }
        });
      });

      lazyIframes.forEach(function(lazyIframe) {
        lazyIframeObserver.observe(lazyIframe);
      });
    } else {
        // Possibly fall back to event handlers here
        console.log('img ifrmae');
    }



    // var articleVideo = document.getElementById("article-play-modal");
		// var articlePlay = document.getElementById("article-play");
		// // DOM ready, take it away
		// if(articlePlay){
		// 	articlePlay.onclick = function(){
		// 		articleVideo.classList.add('active');
		// 		let createIframe = document.createElement("iframe");
		// 		createIframe.setAttribute("frameborder", "0");
		// 		createIframe.setAttribute("allow", "autoplay; fullscreen");
		// 		createIframe.setAttribute("allowfullscreen", "");
		// 		createIframe.setAttribute("src", articleVideo.dataset.src);
		// 		articleVideo.children[0].appendChild(createIframe);
		// 		articleVideo.children[0].children[0].onclick = function(){
		// 			articleVideo.classList.remove('active');
		// 			articleVideo.children[0].removeChild(articleVideo.children[0].children[1]);
		// 		}; 
		// 	};
		// }

 
}); 
 
 
 