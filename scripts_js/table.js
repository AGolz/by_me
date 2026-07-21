document.addEventListener("DOMContentLoaded", function () {
    const hash = window.location.hash.substring(1);
    showProject(document.getElementById(hash) ? hash : "Arctic_UAV");
});

window.addEventListener("hashchange", function () {
    const hash = window.location.hash.substring(1);
    if (document.getElementById(hash)) {
        showProject(hash);
    }
});

function showProject(projectId) {
  var tables = document.querySelectorAll('table');
  
  tables.forEach(function (table) {
    table.classList.remove('table-visible');
    table.classList.add('table-hidden');
  });
  
  var selectedTable = document.getElementById(projectId);
  selectedTable.classList.remove('table-hidden');
  selectedTable.classList.add('table-visible');
  
  setTimeout(function () {
    tables.forEach(function (table) {
      if (table.id !== projectId) {
        table.style.display = 'none';
      }
    });
    
    selectedTable.style.display = 'table';
  }, 500);
}
