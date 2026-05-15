document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form?.addEventListener("submit", (e) => {
    e.preventDefault();

    //Get data from page
    const emailOrUsername = document.getElementById("login-email-or-username").value.trim();
    const password = document.getElementById("loginPassword").value;

    // Search for existed user
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const found = users.find(elem => ( elem.email === emailOrUsername || elem.username === emailOrUsername )  && elem.password === password);

    if (found) {
      // Login user.
      localStorage.setItem("loggedInUser", emailOrUsername);
      window.location.href = "../index.html";
    } else {
      alert("L'un des informations ne sont pas corrects");
    }
  });
});
