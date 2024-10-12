const projects = [
  {
    title: "Web Development Project 1",
    category: "web",
    description: "A web development project using HTML, CSS, and JavaScript.",
  },
  {
    title: "Mobile Development Project 1",
    category: "mobile",
    description: "A mobile development project using React Native.",
  },
  {
    title: "Data Science Project 1",
    category: "data",
    description: "A data science project using Python and Pandas.",
  },
  {
    title: "Web Development Project 2",
    category: "web",
    description:
      "Another web development project using HTML, CSS, and JavaScript.",
  },
  {
    title: "Web Development Project 3",
    category: "web",
    description: "A web development project using React.js.",
  },
  {
    title: "Mobile Development Project 2",
    category: "mobile",
    description: "A mobile development project using Flutter.",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const projectsContainer = document.getElementById("projects-container");
  projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className = "col s12 m6 project-card";
    projectCard.dataset.category = project.category;
    projectCard.innerHTML = `
        <div class="card">
          <div class="card-content">
            <span class="card-title">${project.title}</span>
            <p>${project.description}</p>
          </div>
        </div>
      `;
    projectsContainer.appendChild(projectCard);
  });
});
