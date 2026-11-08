// Mobile menu toggle and current-year footer. No other scripts on the site.
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".menu-btn");
  if (btn) btn.addEventListener("click", () => {
    const open = document.body.classList.toggle("menu-open");
    btn.setAttribute("aria-expanded", String(open));
  });
  document.querySelectorAll(".sidebar a").forEach(a =>
    a.addEventListener("click", () => document.body.classList.remove("menu-open")));
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
});
