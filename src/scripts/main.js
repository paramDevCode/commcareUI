 function toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        const commcareText = document.getElementById('commcareText');
        const menuIcon = document.getElementById('menuIcon');
        const menuText = document.getElementById('menuText');
        const navItems = document.getElementById('navItems');
        const sidebarTexts = document.querySelectorAll('.sidebar-text');
        const bottomItems = document.querySelectorAll('.pb-4 > div');
        
         
        sidebar.classList.toggle('w-16');
        sidebar.classList.toggle('w-64');

        commcareText.classList.toggle('hidden');
        menuIcon.classList.toggle('fa-bars');
        menuIcon.classList.toggle('fa-xmark');
        menuText.classList.toggle('hidden');

        navItems.querySelectorAll('div').forEach(navItem => {
            navItem.classList.toggle('w-10');
            navItem.classList.toggle('w-full');
        });

        bottomItems.forEach(item => {
            item.classList.toggle('w-10');
            item.classList.toggle('w-full');
        });

        sidebarTexts.forEach(text => {
            text.classList.toggle('hidden');
        });
    }

    
function dashboardCartOpen() {
    const dropdown = document.getElementById('dropdown-content');
    dropdown.classList.toggle('hidden');
} 

document.addEventListener('htmx:load', () => {
    // Attach tab functionality for dynamically loaded components
    document.querySelectorAll('.tab-item').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.tab-item').forEach(item => item.classList.remove('active'));
            tab.classList.add('active');

            document.querySelectorAll('.tab-content').forEach(content => content.classList.add('hidden'));
            document.getElementById(tab.getAttribute('data-tab')).classList.remove('hidden');
        });
    });
});

