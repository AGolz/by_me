document.addEventListener("DOMContentLoaded", function() {
  showProject('born2beRoot');
});

function showProject(projectId) {
    var tables = document.querySelectorAll('table');
    tables.forEach(table => table.style.display = 'none');
    var selectedTable = document.getElementById(projectId);
    var menuLinks = document.querySelectorAll('.project-menu a');

    if (selectedTable) {
        selectedTable.style.display = 'table';
    }

    menuLinks.forEach(link => {
        link.style.borderBottomColor = 'transparent';
    });

    var selectedLink = document.getElementById(projectId + 'Link');
    if (selectedLink) {
        selectedLink.style.borderBottomColor = '#491617';
    }
    
    history.pushState(null, null, `#${projectId}`);
}

window.onload = function () {
    var initialFragment = window.location.hash.substring(1);
    if (initialFragment) {
        showProject(initialFragment);
    }
};
