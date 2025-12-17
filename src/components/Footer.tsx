import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Ôgüsto</h3>
            <p className="footer-tagline">Gastronomie Italienne Casher</p>
            <p className="footer-description">
              Restaurant italien casher à Paris 17ème. Spécialités : pizzas, pâtes, risotto, poissons frais.
              Sous supervision du Beth-Din de Paris. 100 places en salle + 60 places en terrasse.
            </p>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <ul className="contact-list">
              <li>
                <MapPin size={18} />
                <span>98 Avenue des Ternes, 75017 Paris</span>
              </li>
              <li>
                <Phone size={18} />
                <span>01 45 74 41 30</span>
              </li>
              <li>
                <Mail size={18} />
                <span>contact@ogusto.fr</span>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Horaires</h4>
            <ul className="hours-list">
              <li>
                <Clock size={18} />
                <div>
                  <p><strong>Lundi - Jeudi</strong></p>
                  <p>11h30 - 16h00 / 19h00 - 00h00</p>
                </div>
              </li>
              <li>
                <div>
                  <p><strong>Dimanche</strong></p>
                  <p>12h00 - 00h00 (non-stop)</p>
                </div>
              </li>
              <li>
                <div>
                  <p><strong>Samedi soir</strong></p>
                  <p>22h00 - 01h00</p>
                </div>
              </li>
              <li>
                <div className="closed">
                  <p><strong>Vendredi</strong></p>
                  <p>Fermé (Shabbat)</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Navigation</h4>
            <ul className="footer-links">
              <li><a href="/">Accueil</a></li>
              <li><a href="/menu">Menu</a></li>
              <li><a href="/about">À Propos</a></li>
              <li><a href="/reservation">Réservation</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Commander en ligne</h4>
            <p className="footer-description">
              Commandez nos spécialités italiennes directement en ligne via Deliveroo.
            </p>
            <a
              href="https://deliveroo.fr/en/menu/paris/ternes-maillot/o-gusto"
              target="_blank"
              rel="noopener noreferrer"
              className="deliveroo-link"
              style={{ display: 'inline-block', marginTop: '10px', padding: '10px 20px', backgroundColor: '#00CCBC', color: '#fff', textDecoration: 'none', borderRadius: '5px', fontWeight: '600' }}
            >
              Commander sur Deliveroo
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Ôgüsto. Tous droits réservés. Restaurant Casher certifié.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
