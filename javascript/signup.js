import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

//  Récupère ces infos dans ton dashboard Supabase (URL + publishable/anon key)
const SUPABASE_URL = "Mettrel'URL copiée sur Supabase ici";
const SUPABASE_KEY = "Mettre la clé publique de votre projet Supabase ici";
document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("signupForm");

  form?.addEventListener("submit", (e) => {
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

    // Validate user does not exist
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.some(elem => elem.username === username)){
       document.getElementById("username").value = "";
      alert("Nom d'utilisateur existe déjà");
      return;
    }

    // Add new user to local storage
    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedInUser", email);

    alert("Inscription réussie !");
    window.location.href = "../index.html";
  });
});
