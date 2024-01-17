document.addEventListener("DOMContentLoaded", function() {
  showProject('born2beRoot');
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
  
  history.pushState(null, null, `#${projectId}`);
}

window.onload = function () {
    var initialFragment = window.location.hash.substring(1);
    if (initialFragment) {
        showProject(initialFragment);
    }
};
