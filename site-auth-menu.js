document.addEventListener("DOMContentLoaded", async () => {
    const lienEspace = document.getElementById("espace-utilisateur");
    const lienDevis = document.getElementById("lien-devis");
    const boutonDevis = document.getElementById("bouton-demande-devis");
    if (!lienEspace) return;

    lienEspace.textContent = "Connexion";
    lienEspace.href = "connexion.html";
    if (!window.supabaseClient) return;

    try {
        const { data: { user } } = await supabaseClient.auth.getUser();
        if (!user) return;

        const { data: profil } = await supabaseClient
            .from("profiles")
            .select("role")
            .eq("id", user.id)
            .single();

        if (profil?.role === "admin") {
            lienEspace.textContent = "Dashboard";
            lienEspace.href = "dashboard.html";
            if (lienDevis) lienDevis.style.display = "none";
            if (boutonDevis) boutonDevis.style.display = "none";
        } else {
            lienEspace.textContent = "Mon espace";
            lienEspace.href = "client.html";
        }
    } catch (error) {
        console.error("Erreur menu utilisateur :", error);
    }
});
