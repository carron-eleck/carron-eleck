document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("header nav");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
        const ouvert = nav.classList.toggle("mobile-open");
        toggle.classList.toggle("active", ouvert);
        toggle.setAttribute("aria-expanded", ouvert ? "true" : "false");
        toggle.setAttribute("aria-label", ouvert ? "Fermer le menu" : "Ouvrir le menu");
        document.body.classList.toggle("menu-open", ouvert);
    });

    nav.querySelectorAll("a").forEach((lien) => {
        lien.addEventListener("click", () => {
            nav.classList.remove("mobile-open");
            toggle.classList.remove("active");
            toggle.setAttribute("aria-expanded", "false");
            toggle.setAttribute("aria-label", "Ouvrir le menu");
            document.body.classList.remove("menu-open");
        });
    });
});
