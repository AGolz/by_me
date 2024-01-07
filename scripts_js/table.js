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
}
