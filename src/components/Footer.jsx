import linkedinImg from "../assets/linkedin-img.png";
import whatsappImg from "../assets/whatsapp-img.png";
import gitImg from "../assets/github-img.png";
import emailImg from "../assets/e-mail-img.png";

function Footer() {
  return (
    <section id="footer">
      <h1>Contato</h1>
      <div className="contact-container">
        <div className="contacts-card">
          <a
            href="https://www.linkedin.com/in/bruno-di-palma-camargo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinImg} alt="Linkedin" />
            <span>LinkedIn</span>
          </a>
        </div>
        <div className="contacts-card">
          <a
            href="https://wa.me/5511957536857"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsappImg} alt="WhatsApp" />
            <span>WhatsApp</span>
          </a>
        </div>
        <div className="contacts-card">
          <a
            href="https://github.com/BrunoDiPalma"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gitImg} alt="GitHub" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
      <div className="email-container">
        <div className="email-card">
          <a href="mailto:brunocamargo2010@live.com">
            <img src={emailImg} alt="E-mail" />
            <span>E-mail</span>
            <p>brunocamargo2010@live.com</p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
