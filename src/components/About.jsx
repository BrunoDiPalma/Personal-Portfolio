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
        desenvolvimento full stack. Desenvolvo aplicações web utilizando React,
        TypeScript, Node.js, Prisma e bancos de dados. Também possuo experiência
        com autenticação JWT, criptografia com bcrypt, APIs REST e versionamento
        com Git.
      </p>

      <p>
        Atualmente busco oportunidades de estágio ou desenvolvimento júnior para
        continuar evoluindo como desenvolvedor Full Stack.
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
