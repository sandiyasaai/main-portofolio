import { escapeHtml, qs, setHidden } from "./dom.js";

function renderProfile(profile) {
  const avatar = qs("[data-profile-avatar]");
  const name = qs("[data-profile-name]");
  const title = qs("[data-profile-title]");
  const contactsList = qs("[data-contacts-list]");
  const socialList = qs("[data-social-list]");
  const socialSeparator = qs("[data-social-separator]");
  const sidebarButton = qs("[data-sidebar-btn]");

  if (avatar) {
    avatar.src = profile.avatar;
    avatar.alt = profile.avatarAlt;
  }

  if (name) {
    name.textContent = profile.name;
    name.setAttribute("title", profile.name);
  }

  if (title) {
    title.textContent = profile.title;
  }

  if (contactsList) {
    contactsList.innerHTML = (profile.contacts ?? []).map((item) => {
      const valueMarkup = item.href
        ? `<a href="${escapeHtml(item.href)}" class="contact-link"${item.external ? ' target="_blank" rel="noopener noreferrer"' : ""}>${escapeHtml(item.value)}</a>`
        : `<span class="contact-link">${escapeHtml(item.value)}</span>`;

      return `
        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="${escapeHtml(item.icon)}"></ion-icon>
          </div>
          <div class="contact-info">
            <p class="contact-title">${escapeHtml(item.label)}</p>
            ${valueMarkup}
          </div>
        </li>
      `;
    }).join("");
  }

  if (socialList) {
    const socials = profile.socials ?? [];
    const hasSocials = socials.length > 0;

    socialList.innerHTML = hasSocials
      ? socials.map((item) => `
          <li class="social-item">
            <a href="${escapeHtml(item.href)}" class="social-link" aria-label="${escapeHtml(item.label)}"${item.external ? ' target="_blank" rel="noopener noreferrer"' : ""}>
              <ion-icon name="${escapeHtml(item.icon)}"></ion-icon>
            </a>
          </li>
        `).join("")
      : "";

    setHidden(socialList, !hasSocials);
    setHidden(socialSeparator, !hasSocials);
  }

  if (sidebarButton) {
    const hasExtraInfo = (profile.contacts?.length ?? 0) > 0 || (profile.socials?.length ?? 0) > 0;
    sidebarButton.dataset.available = String(hasExtraInfo);
    sidebarButton.hidden = !hasExtraInfo;
  }
}

function renderAbout(profile, services) {
  const aboutText = qs("[data-about-text]");
  const servicesList = qs("[data-services-list]");

  if (aboutText) {
    aboutText.innerHTML = (profile.about ?? [])
      .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
      .join("");
  }

  if (servicesList) {
    servicesList.innerHTML = (services ?? []).map((service) => `
      <li class="service-item">
        <div class="service-icon-box">
          <img src="${escapeHtml(service.icon)}" alt="${escapeHtml(service.alt)}" width="40">
        </div>
        <div class="service-content-box">
          <h4 class="h4 service-item-title">${escapeHtml(service.title)}</h4>
          <p class="service-item-text">${escapeHtml(service.description)}</p>
        </div>
      </li>
    `).join("");
  }
}

function renderResume(resume) {
  const educationSection = qs("[data-education-section]");
  const educationList = qs("[data-education-list]");
  const experienceSection = qs("[data-experience-section]");
  const experienceList = qs("[data-experience-list]");
  const skillsSection = qs("[data-skills-section]");
  const skillsList = qs("[data-skills-list]");

  if (educationSection && educationList) {
    const education = resume.education ?? [];

    educationList.innerHTML = education.map((item) => `
      <li class="timeline-item">
        <h4 class="h4 timeline-item-title">${escapeHtml(item.title)}</h4>
        <span>${escapeHtml(item.period)}</span>
        <p class="timeline-text">${escapeHtml(item.description)}</p>
      </li>
    `).join("");

    setHidden(educationSection, education.length === 0);
  }

  if (experienceSection && experienceList) {
    const experience = resume.experience ?? [];

    experienceList.innerHTML = experience.map((item) => `
      <li class="timeline-item">
        <h4 class="h4 timeline-item-title">${escapeHtml(item.title)}</h4>
        <span>${escapeHtml(item.period)}</span>
        <p class="timeline-text">${escapeHtml(item.description)}</p>
      </li>
    `).join("");

    setHidden(experienceSection, experience.length === 0);
  }

  if (skillsSection && skillsList) {
    const skills = resume.skills ?? [];

    skillsList.innerHTML = skills.map((skill) => `
      <li class="skills-item">
        <div class="title-wrapper">
          <h4 class="h5">${escapeHtml(skill.name)}</h4>
          <data value="${skill.value}">${skill.value}%</data>
        </div>
        <div class="skill-progress-bg">
          <div class="skill-progress-fill" style="width: ${skill.value}%;"></div>
        </div>
      </li>
    `).join("");

    setHidden(skillsSection, skills.length === 0);
  }
}

function getProjectCategories(projects) {
  return ["All", ...new Set(projects.map((project) => project.category))];
}

function renderPortfolio(portfolio) {
  const filterList = qs("[data-filter-list]");
  const selectList = qs("[data-select-list]");
  const selectValue = qs("[data-select-value]");
  const projectList = qs("[data-project-list]");

  const projects = portfolio.projects ?? [];
  const categories = getProjectCategories(projects);

  if (filterList) {
    filterList.innerHTML = categories.map((category, index) => `
      <li class="filter-item">
        <button type="button" data-filter-btn data-category-value="${escapeHtml(category.toLowerCase())}"${index === 0 ? ' class="active"' : ""}>
          ${escapeHtml(category)}
        </button>
      </li>
    `).join("");
  }

  if (selectList) {
    selectList.innerHTML = categories.map((category) => `
      <li class="select-item" role="option" aria-selected="false">
        <button type="button" data-select-item data-category-value="${escapeHtml(category.toLowerCase())}">
          ${escapeHtml(category)}
        </button>
      </li>
    `).join("");
  }

  if (selectValue) {
    selectValue.textContent = categories[0];
  }

  if (projectList) {
    projectList.innerHTML = projects.map((project) => `
      <li class="project-item active" data-filter-item data-category="${escapeHtml(project.category.toLowerCase())}">
        <button class="project-card" type="button" data-project-trigger data-project-id="${escapeHtml(project.id)}">
          <figure class="project-img">
            <div class="project-item-icon-box">
              <ion-icon name="eye-outline"></ion-icon>
            </div>
            <img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.alt)}" loading="lazy">
          </figure>
          <h3 class="project-title">${escapeHtml(project.title)}</h3>
          <p class="project-category project-summary">${escapeHtml(project.summary)}</p>
        </button>
      </li>
    `).join("");
  }
}

function renderContact(contact) {
  const title = qs("[data-contact-copy-title]");
  const text = qs("[data-contact-copy-text]");
  const link = qs("[data-contact-copy-link]");
  const form = qs("[data-form]");

  if (title) {
    title.textContent = contact.title;
  }

  if (text) {
    text.textContent = contact.description;
  }

  if (link) {
    link.textContent = contact.email;
    link.href = `mailto:${contact.email}`;
  }

  if (form) {
    form.dataset.recipient = contact.email;
  }
}

export function renderPage(content) {
  document.documentElement.lang = content.site.lang || document.documentElement.lang;
  document.title = content.site.title || document.title;

  renderProfile(content.profile);
  renderAbout(content.profile, content.services);
  renderResume(content.resume);
  renderPortfolio(content.portfolio);
  renderContact(content.contact);
}
