const business = {
  phoneDisplay: "(88) 9211-6914",
  phoneInternational: "558892116914",
  whatsappMessage: "Olá! Vim pelo site e gostaria de fazer um orçamento de móveis planejados."
};

const revealSelector = [
  ".hero-photo",
  ".services",
  ".projects",
  ".process",
  ".location",
  ".final-cta",
  ".service-grid article",
  ".project-card",
  ".process li",
  ".map-card"
].join(", ");

const encodedMessage = encodeURIComponent(business.whatsappMessage);
const whatsappUrl = `https://wa.me/${business.phoneInternational}?text=${encodedMessage}`;
const phoneText = document.querySelector("#phoneText");
const animatedItems = document.querySelectorAll(revealSelector);

document.querySelectorAll('a[href^="https://wa.me/"]').forEach((link) => {
  link.href = whatsappUrl;
});

if (phoneText) {
  phoneText.textContent = business.phoneDisplay;
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -40px"
    }
  );

  animatedItems.forEach((item, index) => {
    item.classList.add("reveal");
    item.style.transitionDelay = `${Math.min(index * 55, 280)}ms`;
    observer.observe(item);
  });
} else {
  animatedItems.forEach((item) => {
    item.classList.add("is-visible");
  });
}
