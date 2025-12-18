const form = document.getElementById("login-form");
const button = document.getElementById("login-btn");
const errorModalBackdrop = document.getElementById("error-modal-backdrop");
const errorModalClose = document.getElementById("error-modal-close");

form.addEventListener("input", () => {
  const filled = form.username.value.trim() && form.password.value.trim();
  button.disabled = !filled;
});

const openErrorModal = () => {
  errorModalBackdrop.classList.add("is-visible");
};

const closeErrorModal = () => {
  errorModalBackdrop.classList.remove("is-visible");
};

errorModalClose.addEventListener("click", closeErrorModal);
errorModalBackdrop.addEventListener("click", (event) => {
  if (event.target === errorModalBackdrop) {
    closeErrorModal();
  }
});

(function () {
  // Yoooo Don't Look at this code!!!!!
  const okUserEncoded = "TFNQVS1DVEYtMjAyNQ==";
  const okPassEncoded = "TUFVSV9XT1dJRQ==";

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const u = form.username.value.trim();
    const p = form.password.value.trim();

    const userEncoded = btoa(u);
    const passEncoded = btoa(p);

    if (userEncoded === okUserEncoded && passEncoded === okPassEncoded) {
      sessionStorage.setItem("ctf_auth_ok", "1");
      window.location.href = "success.html";
    } else {
      openErrorModal();
    }
  });
})();
