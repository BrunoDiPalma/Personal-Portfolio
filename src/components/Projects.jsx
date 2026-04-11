import userSystemImg from "../assets/user-management-system.png";
import filmtrackImg from "../assets/filmtrack.png";

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

        <div className="project-card">
          <h3>Filmtrack</h3>
          <p>
            Plataforma fullstack para busca de filmes com integração a API REST
            e gerenciamento de lista personalizada (watchlist). Frontend hospedado na Vercel
            e backend com banco de dados no Railway.
          </p>
          <a
            href="http://filmtrack-alpha.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Ver Projeto</span>
            <img src={filmtrackImg} alt="Filmtrack image" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
