/* =====================================================
   🔐 PROTECTION DU SITE — CONNEXION OBLIGATOIRE
===================================================== */
document.documentElement.classList.add("auth-checking");

(async () => {
    try {
        const { data: { user }, error } =
            await supabaseClient.auth.getUser();

        if (error || !user) {
            window.location.replace("connexion.html");
            return;
        }

        document.documentElement.classList.remove("auth-checking");
    } catch (error) {
        console.error("Erreur de vérification :", error);
        window.location.replace("connexion.html");
    }
})();
