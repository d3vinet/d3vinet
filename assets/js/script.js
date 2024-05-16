// Menu
function toggleNav() {
    var x = document.getElementById("mynav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }

document.addEventListener("DOMContentLoaded", function () {
// Get the page container element
const pageContainer = document.getElementById("page-container"); 
// Apply the transition effect on page load
    pageContainer.style.opacity = 1;
    pageContainer.style.transform = "translateY(0)";
});
  
  

// Smooth scrolling for browsers that don't support scroll-behavior
if (!('scrollBehavior' in document.documentElement.style)) {
  // Smooth scroll function
  function smoothScroll(target) {
      var targetElement = document.querySelector(target);
      var targetPosition = targetElement.offsetTop;
      var startPosition = window.pageYOffset;
      var distance = targetPosition - startPosition;
      var duration = 1000; // Adjust scroll duration here (in milliseconds)
      var start = null;

      // Animation function
      function scrollAnimation(currentTime) {
          if (start === null) start = currentTime;
          var timeElapsed = currentTime - start;
          var scroll = ease(timeElapsed, startPosition, distance, duration);
          window.scrollTo(0, scroll);
          if (timeElapsed < duration) requestAnimationFrame(scrollAnimation);
      }

      // Easing function (you can use different easing functions here)
      function ease(t, b, c, d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
      }

      // Start animation
      requestAnimationFrame(scrollAnimation);
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          var target = this.getAttribute('href');
          smoothScroll(target);
      });
  });
} 

// toast
document.getElementById("copyBtn").addEventListener("click", function() {
  // Copy Bitcoin address to clipboard
  const bitcoinAddress = "1J5Uawv5rACM6hiyabxqnfwSrE9BCYWMYL"; // Replace this with your actual Bitcoin address
  navigator.clipboard.writeText(bitcoinAddress).then(function() {
      // Show toast message
      var toast = document.getElementById("toast");
      toast.style.display = "block";
      setTimeout(function() {
          toast.style.display = "none";
      }, 5000); // 5 seconds
  }, function(err) {
      console.error('Failed to copy: ', err);
  });
});
