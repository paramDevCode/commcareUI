function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const menuIcon = document.getElementById("menuIcon");
    const menuText = document.getElementById("menuText");
    const commcareText = document.getElementById("commcareText");
    const sidebarTexts = document.querySelectorAll(".sidebar-text");

    sidebar.classList.toggle("w-64");
    sidebar.classList.toggle("expanded"); // Add or remove the 'expanded' class

    if (sidebar.classList.contains("w-64")) {
        menuIcon.className = "fa-regular fa-xmark";
        menuText.classList.remove("hidden");
        commcareText.classList.remove("hidden");
        sidebarTexts.forEach(el => el.classList.remove("hidden"));
    } else {
        menuIcon.className = "fa-regular fa-bars";
        menuText.classList.add("hidden");
        commcareText.classList.add("hidden");
        sidebarTexts.forEach(el => el.classList.add("hidden"));
    }
}