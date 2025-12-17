import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Contactez-nous</h1>
            <p>Nous sommes à votre écoute</p>
          </motion.div>
        </div>
      </section>

      <section className="contact-content section">
        <div className="container">
          <div className="contact-layout">
            {/* Contact Information */}
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2>Informations de Contact</h2>

              <div className="contact-card">
                <div className="contact-icon">
                  <MapPin size={24} />
                </div>
                <div className="contact-details">
                  <h3>Adresse</h3>
                  <p>98 Avenue des Ternes</p>
                  <p>75017 Paris, France</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <Phone size={24} />
                </div>
                <div className="contact-details">
                  <h3>Téléphone</h3>
                  <p>01 45 74 41 30</p>
                  <p className="small">Lundi - Jeudi: 11h30 - 00h00</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <Mail size={24} />
                </div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <p>contact@ogusto.fr</p>
                  <p>reservation@ogusto.fr</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <Clock size={24} />
                </div>
                <div className="contact-details">
                  <h3>Horaires d'ouverture</h3>
                  <div className="hours">
                    <div className="hour-row">
                      <span className="day">Lundi - Jeudi</span>
                      <span className="time">11h30 - 16h / 19h - 00h</span>
                    </div>
                    <div className="hour-row">
                      <span className="day">Dimanche</span>
                      <span className="time">12h - 00h (non-stop)</span>
                    </div>
                    <div className="hour-row">
                      <span className="day">Samedi soir</span>
                      <span className="time">22h - 01h</span>
                    </div>
                    <div className="hour-row closed">
                      <span className="day">Vendredi</span>
                      <span className="time">Fermé (Shabbat)</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map Section */}
            <motion.div
              className="contact-map"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="map-container">
                <div className="map-placeholder">
                  <MapPin size={60} />
                  <h3>Ôgüsto</h3>
                  <p>98 Avenue des Ternes, 75017 Paris</p>
                </div>
              </div>

              <div className="directions">
                <h3>Comment nous trouver</h3>
                <ul>
                  <li><strong>Métro:</strong> Neuilly Porte Maillot (Ligne 1)</li>
                  <li><strong>Bus:</strong> Arrêt Avenue des Ternes</li>
                  <li><strong>Voiturier:</strong> Disponible le soir uniquement</li>
                  <li><strong>Capacité:</strong> 100 places en salle + 60 en terrasse</li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            className="additional-info"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="info-box">
              <h3>Réservations</h3>
              <p>
                Pour réserver une table, vous pouvez utiliser notre formulaire en ligne ou nous
                appeler directement. Nous vous recommandons de réserver à l'avance, surtout pour
                les groupes de plus de 4 personnes.
              </p>
            </div>

            <div className="info-box">
              <h3>Événements Privés & Traiteur</h3>
              <p>
                Notre restaurant est disponible pour vos événements privés (privatisation possible le lundi uniquement).
                Service traiteur pour Brit Milah, Bar/Bat Mitzvah, mariages.
                Livraison à partir de 20€ : Paris 8ème, 16ème, 17ème, Courbevoie, Levallois-Perret, Neuilly-sur-Seine.
              </p>
            </div>

            <div className="info-box">
              <h3>Commander en ligne</h3>
              <p>
                Envie de déguster nos spécialités italiennes casher chez vous ? Commandez facilement
                en ligne via Deliveroo et profitez de nos délicieux plats livrés directement à votre porte.
              </p>
              <a
                href="https://deliveroo.fr/en/menu/paris/ternes-maillot/o-gusto"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ display: 'inline-block', marginTop: '15px', padding: '12px 30px', backgroundColor: '#00CCBC', color: '#fff', textDecoration: 'none', borderRadius: '5px', fontWeight: '600' }}
              >
                Commander sur Deliveroo
              </a>
            </div>

            <div className="info-box">
              <h3>Questions & Suggestions</h3>
              <p>
                Votre satisfaction est notre priorité. N'hésitez pas à nous contacter pour toute
                question, suggestion ou commentaire. Nous serons ravis de vous répondre dans les
                plus brefs délais.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
