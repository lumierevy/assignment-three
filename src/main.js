window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  const displayNavigation = nav.offsetTop;

  if (window.scrollY > displayNavigation) {
    nav.classList.add("backdrop-blur-lg", "border-b-[1px]");
  } else {
    nav.classList.remove("backdrop-blur-lg", "border-b-[1px]");
  }
});
