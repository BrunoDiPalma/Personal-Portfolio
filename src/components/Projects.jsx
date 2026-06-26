import { useState } from "react";
import userSystemImg from "../assets/user-management-system.png";
import filmtrackImg from "../assets/filmtrack.png";
import authSystemImg from "../assets/auth-system.png";

const projects = [
  {
    id: 1,
    titulo: "Auth System API",
    descricao:
      "Sistema full stack de autenticação com JWT e gerenciamento de tarefas, desenvolvido em React, Node.js, TypeScript e Prisma.",
    tecnologias: ["React", "Node.js", "TypeScript", "Prisma", "JWT"],
    image: authSystemImg,
    deployUrl: "https://auth-system-api-one.vercel.app/",
    githubUrl: "https://github.com/BrunoDiPalma/auth-system-api",
  },
  {
    id: 2,
    titulo: "Filmtrack",
    descricao:
      "Plataforma full stack para busca de filmes e gerenciamento de watchlists utilizando React, Node.js e MySQL.",
    tecnologias: ["React", "Node.js", "MySQL", "API REST"],
    image: filmtrackImg,
    deployUrl: "http://filmtrack-alpha.vercel.app/",
    githubUrl: "https://github.com/BrunoDiPalma/auth-system-api",
  },
  {
    id: 3,
    titulo: "User Management",
    descricao:
      "Sistema CRUD de usuários com autenticação JWT e operações completas de gerenciamento.",
    tecnologias: ["React", "Node.js", "JWT", "MySQL"],
    image: userSystemImg,
    deployUrl: null,
    githubUrl: "https://github.com/BrunoDiPalma/user-management-system",
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const isSelectedProject = (projectId) => selectedProject.id === projectId;
  const getLinkClassName = (url) => (!url ? "disabled" : "");

  return (
    <section id="projects">
      <h1>Projetos</h1>

      <div className="projects-layout">
        <aside className="projects-sidebar">
          {projects.map((project) => (
            <button
              key={project.id}
              type="button"
              className={`project-selector ${
                isSelectedProject(project.id) ? "active" : ""
              }`}
              onClick={() => setSelectedProject(project)}
            >
              {project.titulo}
            </button>
          ))}
        </aside>

        <div className="project-preview">
          <h2>{selectedProject.titulo}</h2>
          <p>{selectedProject.descricao}</p>

          <div className="project-stack">
            {selectedProject.tecnologias.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>

          <img
            src={selectedProject.image}
            alt={selectedProject.titulo}
            className={`project-preview-image ${
              isSelectedProject(1) ? "project-preview-image-small" : ""
            }`}
          />

          <div className="project-links">
            <a
              href={selectedProject.deployUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={getLinkClassName(selectedProject.deployUrl)}
            >
              Deploy
            </a>
            <a
              href={selectedProject.githubUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={getLinkClassName(selectedProject.githubUrl)}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
