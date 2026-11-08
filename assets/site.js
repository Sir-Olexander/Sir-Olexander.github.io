// Mobile menu, light/dark toggle, current-year footer. No other scripts on the site.
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".menu-btn");
  if (btn) btn.addEventListener("click", () => {
    const open = document.body.classList.toggle("menu-open");
    btn.setAttribute("aria-expanded", String(open));
  });
  document.querySelectorAll(".sidebar a").forEach(a =>
    a.addEventListener("click", () => document.body.classList.remove("menu-open")));
  document.querySelectorAll(".theme-btn").forEach(b => b.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  }));
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
});
