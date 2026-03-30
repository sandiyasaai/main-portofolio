import { qsa } from "./dom.js";

export function setupNavigation() {
  const navigationLinks = qsa("[data-nav-link]");
  const pages = qsa("[data-page]");

  navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const targetPage = link.dataset.navLink;

      pages.forEach((page) => {
        page.classList.toggle("active", page.dataset.page === targetPage);
      });

      navigationLinks.forEach((item) => {
        item.classList.toggle("active", item === link);
      });

      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}
