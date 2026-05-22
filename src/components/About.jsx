import reactImg from "../assets/react-img.png";
import NodeImg from "../assets/node-img.png";
import sqlImg from "../assets/mysql-img.png";
import jsImg from "../assets/javascript-img.png";
import gitImg from "../assets/github-img.png";
import tsImg from "../assets/typescript-img.png";

function About() {
  return (
    <section id="about">
      <h1>Sobre mim</h1>

      <p className="about-text">
        Estudante de Análise e Desenvolvimento de Sistemas com foco em
        desenvolvimento web e construção de aplicações full stack. Possuo
        experiência prática em projetos utilizando JavaScript, TypeScript,
        React, Node.js e MySQL, incluindo desenvolvimento de APIs REST. Também
        aplico conceitos como validação com Zod, criptografia com bcrypt e
        autenticação via JWT.
      </p>

      <div className="stacks">
        <div className="stack-card">
          <img src={jsImg} alt="JavaScript" />
          <h3>JavaScript</h3>
        </div>

        <div className="stack-card">
          <img src={reactImg} alt="React" />
          <h3>React</h3>
        </div>

        <div className="stack-card">
          <img src={NodeImg} alt="Node.js" />
          <h3>Node.js</h3>
        </div>

        <div className="stack-card">
          <img src={tsImg} alt="JavaScript" />
          <h3>TypeScript</h3>
        </div>

        <div className="stack-card">
          <img src={sqlImg} alt="MySQL" />
          <h3>MySQL</h3>
        </div>

        <div className="stack-card">
          <img src={gitImg} alt="Git" />
          <h3>GitHub</h3>
        </div>
      </div>
    </section>
  );
}

export default About;
