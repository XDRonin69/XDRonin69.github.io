const sliders = document.querySelectorAll(".slide-in");

const options = {
  root: null,
  // threshold:0,
  // rootMargin:
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      console.log(entry.target);
      entry.target.classList.toggle("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
options);

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});
