document.addEventListener("DOMContentLoaded", () => {

  const btn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".main-nav");

  function handleResize() {
    if (window.innerWidth >= 1000) {
      nav.classList.remove("hide");
      nav.classList.remove("open");
      btn.style.display = "none";
    } else {
      nav.classList.add("hide");
      nav.classList.remove("open");
      btn.style.display = "inline-block";
    }
  }

  btn.addEventListener("click", () => {
    nav.classList.toggle("open");
    nav.classList.toggle("hide");
  });

  nav.querySelectorAll("a").forEach(link =>
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      nav.classList.add("hide");
    })
  );

  window.addEventListener("resize", handleResize);
  handleResize();


  const gallery = document.querySelector(".gallery");
  const viewer = document.getElementById("viewer");

  function viewerTemplate(url, alt) {
    return `
      <img src="${url}" alt="${alt}" class="viewer-img">
      <button class="close-viewer" aria-label="Close">&times;</button>
    `;
  }

  gallery.addEventListener("click", e => {
    const img = e.target.closest("img");
    if (!img) return;


    const src = img.src.replace(/-sm(\.[a-z]+)$/i, '-full$1');
    const alt = img.alt || "";
    viewer.innerHTML = viewerTemplate(src, alt);
    viewer.showModal();


    viewer.querySelector(".close-viewer").addEventListener("click", () => viewer.close());
  });


  viewer.addEventListener("click", event => {
    if (event.target === viewer) viewer.close();
  });
});
