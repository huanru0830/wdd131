
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".menu-btn");
    const nav = document.querySelector(".main-nav");
  
    btn.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  
    nav.querySelectorAll("a").forEach(link =>
      link.addEventListener("click", () => {
        nav.classList.remove("open");
      })
    );
  });
  