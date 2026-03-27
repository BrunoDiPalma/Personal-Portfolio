import pixelArt from "../assets/pixel-art.png"

function Hero() {
  return (
    <section id="hero">
      <img src={pixelArt} className="hero-img" alt="Background pixel art" />
      <div className="content">
        <h2>Olá! Eu sou</h2>
        <h1>Bruno Di Palma</h1>
        <h2>Estudante de Análise e Desenvolvimento de Sistemas</h2>
      </div>
    </section>
  );
}

export default Hero;
