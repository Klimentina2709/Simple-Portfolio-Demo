document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll("select");
  M.FormSelect.init(elems);

  const filterSelect = document.getElementById("category-filter");
  filterSelect.addEventListener("change", filterProjects);
});

function filterProjects() {
  const category = document.getElementById("category-filter").value;
  const projects = document.querySelectorAll(".project-card");
  projects.forEach((project) => {
    if (category === "all" || project.dataset.category === category) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
}
