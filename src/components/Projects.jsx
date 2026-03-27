import userSystemImg from "../assets/user-management-system.png";

function Projects() {
  return (
    <section id="projects">
      <h1>Projetos</h1>

      <div className="projects-container">
        <div className="project-card">
          <h3>User Management</h3>
          <p>
            Sistema completo de gerenciamento de usuários (CRUD) com
            autenticação segura. Permite cadastro, edição e exclusão de usuários
            integrado a banco de dados. Tecnologias: Node.js, Express, MySQL,
            React, JWT e bcrypt.
          </p>
          <a
            href="https://github.com/BrunoDiPalma/user-management-system"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Ver Projeto</span>
            <img src={userSystemImg} alt="User Management System" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
