import reactImg from "../assets/react-img.png";
import NodeImg from "../assets/node-img.png";
import sqlImg from "../assets/mysql-img.png";
import jsImg from "../assets/javascript-img.png";
import gitImg from "../assets/github-img.png";

function About() {
  return (
    <section id="about">
      <h1>Sobre mim</h1>

      <p className="about-text">
        Estudante de Análise e Desenvolvimento de Sistemas com foco em
        desenvolvimento web. Experiência prática em projetos utilizando
        JavaScript, React, Node.js e MySQL para construção de aplicações
        full stack e APIs REST.
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

        <div className="bottom-row">
          <div className="stack-card">
            <img src={sqlImg} alt="MySQL" />
            <h3>MySQL</h3>
          </div>

          <div className="stack-card">
            <img src={gitImg} alt="Git" />
            <h3>GitHub</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
