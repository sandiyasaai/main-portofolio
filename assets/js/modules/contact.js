import { qs, qsa } from "./dom.js";

export function setupContactForm() {
  const form = qs("[data-form]");
  const submitButton = qs("[data-form-btn]");

  if (!form || !submitButton) {
    return;
  }

  function updateButtonState() {
    if (form.checkValidity()) {
      submitButton.removeAttribute("disabled");
    } else {
      submitButton.setAttribute("disabled", "");
    }
  }

  qsa("[data-form-input]", form).forEach((input) => {
    input.addEventListener("input", updateButtonState);
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      updateButtonState();
      return;
    }

    const recipient = form.dataset.recipient;
    const formData = new FormData(form);
    const fullname = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const subject = `Portfolio inquiry from ${fullname}`;
    const body = [
      `Nama: ${fullname}`,
      `Email: ${email}`,
      "",
      "Pesan:",
      `${message}`
    ].join("\n");

    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    form.reset();
    updateButtonState();
  });

  updateButtonState();
}
