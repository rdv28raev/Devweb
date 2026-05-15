document.addEventListener("DOMContentLoaded", () => {
  const topMenu = document.getElementById("topMenu");
  const loginBtn = document.getElementById("loginbutton");
  const signupBtn = document.getElementById("signupbutton");
  const logoutBtn = document.getElementById("logoutbutton");

  function updateMenu() {
    const user = localStorage.getItem("loggedInUser");
    if (user) {
      // Use visibility instead of display none
      topMenu.style.visibility = "visible";
      loginBtn.style.display = "none";
      signupBtn.style.display = "none";
      logoutBtn.style.display = "inline-block";
    } else {
      topMenu.style.visibility = "hidden";
      loginBtn.style.display = "inline-block";
      signupBtn.style.display = "inline-block";
      logoutBtn.style.display = "none";
    }
  }

  updateMenu();

  // Determine the correct path based on current location
  const isInSubfolder = window.location.pathname.includes('/html/');
  const loginPath = isInSubfolder ? 'login.html' : 'html/login.html';
  const signupPath = isInSubfolder ? 'signup.html' : 'html/signup.html';

  loginBtn.addEventListener("click", () => window.location.href = loginPath);
  signupBtn.addEventListener("click", () => window.location.href = signupPath);
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("loggedInUser");
    updateMenu();
  });
});
