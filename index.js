function openNewPage() {
    window.open("https://calendly.com/?utm_source=google&utm_medium=cpc&utm_campaign=Sign-Ups_Intl-Brand_EMEA-English_Search&utm_adgroup=calendly-exact-EMEA-English&utm_content=calendly-exact-EMEA-English&utm_term=calendly&utm_matchtype=e&utm_targetid=kwd-309663638777&utm_location=1000997&utm_placement=&utm_device=c&gad=1&gclid=CjwKCAjwseSoBhBXEiwA9iZtxgBJHwXvFIqSBJrdPcNVRELJIYdjlGInx2ryqBnjwtK7l0KF-k5hcRoCHsYQAvD_BwE", "_blank");
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);


