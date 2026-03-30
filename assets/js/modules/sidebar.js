import { qs } from "./dom.js";

export function setupSidebar() {
  const sidebar = qs("[data-sidebar]");
  const button = qs("[data-sidebar-btn]");

  if (!sidebar || !button) {
    return;
  }

  const desktopQuery = window.matchMedia("(min-width: 1250px)");

  function syncSidebarState() {
    const isDesktop = desktopQuery.matches;
    const isAvailable = button.dataset.available !== "false";

    sidebar.classList.toggle("active", isDesktop);
    button.hidden = isDesktop || !isAvailable;
    button.setAttribute("aria-expanded", String(isDesktop));
  }

  button.addEventListener("click", () => {
    if (desktopQuery.matches) {
      return;
    }

    const expanded = !sidebar.classList.contains("active");
    sidebar.classList.toggle("active", expanded);
    button.setAttribute("aria-expanded", String(expanded));
  });

  if (typeof desktopQuery.addEventListener === "function") {
    desktopQuery.addEventListener("change", syncSidebarState);
  } else {
    desktopQuery.addListener(syncSidebarState);
  }

  syncSidebarState();
}
