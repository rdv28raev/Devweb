document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form?.addEventListener("submit", async (e) => {
    e.preventDefault();

    const emailOrUsername = document.getElementById("login-email-or-username").value.trim();
    const password = document.getElementById("loginPassword").value;

    // Decide which column to search based on what the user typed
    const isEmail = emailOrUsername.includes("@");
    const column = isEmail ? "email" : "nom";

    // Look up the user in Supabase
    const { data: user, error: loginError } = await window.supabaseClient
      .from("Utilisateur")
      .select("id, nom, email")
      .eq(column, emailOrUsername)
      .eq("mot_de_passe", password)
      .maybeSingle();

    if (loginError) {
      console.error("Login lookup failed:", loginError);
      alert("Erreur de connexion à la base de données");
      return;
    }

    if (user) {
      localStorage.setItem("loggedInUser", user.nom);
      window.location.href = "../index.html";
    } else {
      alert("L'un des informations ne sont pas corrects");
    }
  });
});
