function showProject(projectId) {
  var tables = document.querySelectorAll('table');

  tables.forEach(function (table) {
    table.classList.remove('fade-in');
    table.classList.add('fade-out');
  });

  var selectedTable = document.getElementById(projectId);
  selectedTable.classList.remove('fade-out');
  selectedTable.classList.add('fade-in');

  history.pushState(null, null, `#${projectId}`);
}

window.addEventListener('popstate', function () {
  var currentFragment = window.location.hash.substring(1);
  showProject(currentFragment);
});

window.onload = function () {
  var initialFragment = window.location.hash.substring(1);
  if (initialFragment) {
    showProject(initialFragment);
  }
};
