import content from "../data/content.js";
import { renderPage } from "./modules/render.js";
import { setupSidebar } from "./modules/sidebar.js";
import { setupNavigation } from "./modules/navigation.js";
import { setupPortfolio } from "./modules/portfolio.js";
import { setupContactForm } from "./modules/contact.js";

renderPage(content);
setupSidebar();
setupNavigation();
setupPortfolio(content.portfolio);
setupContactForm();
