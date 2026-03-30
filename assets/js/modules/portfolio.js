import { escapeHtml, qs, qsa } from "./dom.js";

export function setupPortfolio(portfolio) {
  const projects = portfolio.projects ?? [];

  const select = qs("[data-select]");
  const selectValue = qs("[data-select-value]");
  const filterList = qs("[data-filter-list]");
  const selectList = qs("[data-select-list]");
  const projectList = qs("[data-project-list]");

  const modalContainer = qs("[data-portfolio-modal-container]");
  const overlay = qs("[data-portfolio-overlay]");
  const closeButton = qs("[data-portfolio-modal-close-btn]");
  const modalImage = qs("[data-portfolio-modal-img]");
  const modalTitle = qs("[data-portfolio-modal-title]");
  const modalCategory = qs("[data-portfolio-modal-category]");
  const modalLink = qs("[data-portfolio-modal-link]");
  const modalLinkLabel = qs("[data-portfolio-modal-link-label]");
  const modalBody = qs("[data-portfolio-modal-text]");

  let selectedCategory = "all";
  let lastFocusedElement = null;

  function setSelectExpanded(expanded) {
    if (!select) {
      return;
    }

    select.classList.toggle("active", expanded);
    select.setAttribute("aria-expanded", String(expanded));
  }

  function filterProjects(categoryValue) {
    selectedCategory = categoryValue;

    qsa("[data-filter-item]").forEach((item) => {
      const matches = categoryValue === "all" || item.dataset.category === categoryValue;
      item.classList.toggle("active", matches);
      item.hidden = !matches;
    });

    qsa("[data-filter-btn]").forEach((button) => {
      button.classList.toggle("active", button.dataset.categoryValue === categoryValue);
    });

    qsa("[data-select-item]").forEach((button) => {
      const option = button.closest('[role="option"]');

      if (option) {
        option.setAttribute("aria-selected", String(button.dataset.categoryValue === categoryValue));
      }
    });

    const activeButton = qs(`[data-filter-btn][data-category-value="${CSS.escape(categoryValue)}"]`);

    if (activeButton && selectValue) {
      selectValue.textContent = activeButton.textContent.trim();
    }

    setSelectExpanded(false);
  }

  function openModal(projectId, trigger) {
    const project = projects.find((item) => item.id === projectId);

    if (!project || !modalContainer || !overlay) {
      return;
    }

    lastFocusedElement = trigger || document.activeElement;

    if (modalImage) {
      modalImage.src = project.image;
      modalImage.alt = project.alt;
    }

    if (modalTitle) {
      modalTitle.textContent = project.title;
    }

    if (modalCategory) {
      modalCategory.textContent = project.category;
    }

    if (modalLink) {
      modalLink.href = project.url;
    }

    if (modalLinkLabel) {
      modalLinkLabel.textContent = project.urlLabel || "Buka proyek";
    }

    if (modalBody) {
      modalBody.innerHTML = project.description
        .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
        .join("");
    }

    modalContainer.hidden = false;
    modalContainer.scrollTop = 0;
    modalContainer.classList.add("active");
    overlay.classList.add("active");
    document.body.classList.add("modal-open");

    closeButton?.focus();
  }

  function closeModal() {
    if (!modalContainer || !overlay) {
      return;
    }

    modalContainer.classList.remove("active");
    overlay.classList.remove("active");
    modalContainer.hidden = true;
    document.body.classList.remove("modal-open");

    if (lastFocusedElement instanceof HTMLElement) {
      lastFocusedElement.focus();
    }
  }

  select?.addEventListener("click", () => {
    setSelectExpanded(!select.classList.contains("active"));
  });

  filterList?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter-btn]");

    if (!button) {
      return;
    }

    filterProjects(button.dataset.categoryValue);
  });

  selectList?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-select-item]");

    if (!button) {
      return;
    }

    filterProjects(button.dataset.categoryValue);
  });

  projectList?.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-project-trigger]");

    if (!trigger) {
      return;
    }

    openModal(trigger.dataset.projectId, trigger);
  });

  closeButton?.addEventListener("click", closeModal);
  overlay?.addEventListener("click", closeModal);

  document.addEventListener("click", (event) => {
    if (select && !event.target.closest("[data-select]") && !event.target.closest("[data-select-list]")) {
      setSelectExpanded(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (modalContainer?.classList.contains("active")) {
        closeModal();
        return;
      }

      if (select?.classList.contains("active")) {
        setSelectExpanded(false);
      }
    }
  });

  if (projects.length > 0) {
    filterProjects(selectedCategory);
  }
}
