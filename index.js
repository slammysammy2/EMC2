function openNewPage() {
    window.open("https://calendly.com/?utm_source=google&utm_medium=cpc&utm_campaign=Sign-Ups_Intl-Brand_EMEA-English_Search&utm_adgroup=calendly-exact-EMEA-English&utm_content=calendly-exact-EMEA-English&utm_term=calendly&utm_matchtype=e&utm_targetid=kwd-309663638777&utm_location=1000997&utm_placement=&utm_device=c&gad=1&gclid=CjwKCAjwseSoBhBXEiwA9iZtxgBJHwXvFIqSBJrdPcNVRELJIYdjlGInx2ryqBnjwtK7l0KF-k5hcRoCHsYQAvD_BwE", "_blank");
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 50;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
     
      }
    }
  }
  
  window.addEventListener("scroll", reveal);


  const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  const formData = new FormData(form);
  e.preventDefault();
  var object = {};
  formData.forEach((value, key) => {
    object[key] = value;
  });
  var json = JSON.stringify(object);
  result.innerHTML = "Please wait...";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: json
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = json.message;
        result.classList.remove("text-gray-500");
        result.classList.add("text-green-500");
      } else {
        console.log(response);
        result.innerHTML = json.message;
        result.classList.remove("text-gray-500");
        result.classList.add("text-red-500");
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Something went wrong!";
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 5000);
    });
});

document.addEventListener('DOMContentLoaded', () => {
  const carouselInner = document.querySelector('.carousel-inner');
  const carouselItems = document.querySelectorAll('.carousel-item');
  let currentIndex = 0;

  function showNextItem() {
      carouselItems[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % carouselItems.length;
      carouselItems[currentIndex].classList.add('active');
      carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  setInterval(showNextItem, 3000); // Change image every 3 seconds
});

