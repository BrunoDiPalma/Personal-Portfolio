import pixelArt from "../assets/pixel-art-v2.png";

function Hero() {
  return (
    <section id="hero">
      <div className="content">
        <h2>Olá! Eu sou</h2>
        <h1>Bruno Di Palma</h1>
        <h2>Desenvolvedor Full Stack</h2>
        <h2>Estudante de Ciência da Computação</h2>
        <div className="avatar-container">
          <img src={pixelArt} alt="Bruno pixel art" className="pixel-avatar" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
