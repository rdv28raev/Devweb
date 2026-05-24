document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("signupForm");

  form?.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Extract page data
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmpassword").value;

    // Validate password
    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas !");
      return;
    }
    if (password.length < 6) {
      alert("Le mot de passe doit être au moin 7 charactères");
      return;
    }

    //Validate email
    if (!email.includes("@") || !email.includes(".")) {
      alert ("L'email n'est pas valide")
      return;
    }

    // Check if username is already taken in Supabase
    const { data: existingUser, error: lookupError } = await window.supabaseClient
      .from("Utilisateur")
      .select("id")
      .eq("nom", username)
      .maybeSingle();

    if (lookupError) {
      console.error("Lookup failed:", lookupError);
      alert("Erreur de connexion à la base de données");
      return;
    }
    if (existingUser) {
      alert("Nom d'utilisateur existe déjà");
      return;
    }

    //Insert the new user into Supabase
  const { error: insertError } = await window.supabaseClient
    .from("Utilisateur")
    .insert({ nom: username, email, mot_de_passe: password});

    if (insertError) {
      console.error("Insert failed:", insertError);
      alert("Erreur d'inscription: " + insertError.message)
      return;
    }
    localStorage.setItem("loggedInUser", email);

    alert("Inscription réussie !");
    window.location.href = "../index.html";
  });
});
