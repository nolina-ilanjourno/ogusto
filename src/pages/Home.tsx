import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { UtensilsCrossed, Award, Clock } from 'lucide-react';
import { restaurantImages } from '../data/images';
import '../styles/Home.css';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${restaurantImages.hero})` }}>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">Bienvenue chez Ôgüsto</h1>
            <p className="hero-subtitle">L'excellence de la gastronomie italienne casher</p>
            <div className="hero-buttons">
              <Link to="/menu" className="btn btn-primary">
                Découvrir le Menu
              </Link>
              <Link to="/reservation" className="btn btn-secondary">
                Réserver une Table
              </Link>
              <a
                href="https://deliveroo.fr/en/menu/paris/ternes-maillot/o-gusto"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-deliveroo"
                style={{ backgroundColor: '#00CCBC', color: '#fff' }}
              >
                Commander en ligne
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features">
        <div className="container">
          <div className="features-grid">
            <motion.div className="feature-card" {...fadeInUp}>
              <div className="feature-icon">
                <UtensilsCrossed size={40} />
              </div>
              <h3>Cuisine Authentique</h3>
              <p>Des recettes traditionnelles italiennes préparées avec passion et savoir-faire</p>
            </motion.div>

            <motion.div
              className="feature-card"
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="feature-icon">
                <Award size={40} />
              </div>
              <h3>Certifié Casher</h3>
              <p>Restaurant 100% casher certifié, respectant toutes les traditions</p>
            </motion.div>

            <motion.div
              className="feature-card"
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="feature-icon">
                <Clock size={40} />
              </div>
              <h3>Produits Frais</h3>
              <p>Ingrédients sélectionnés quotidiennement pour une fraîcheur optimale</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section about-preview">
        <div className="container">
          <div className="about-preview-content">
            <motion.div
              className="about-preview-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2>Notre Histoire</h2>
              <p>
                Ôgüsto est né de la passion pour la cuisine italienne et le respect des traditions casher.
                Nous combinons authenticité et excellence pour vous offrir une expérience gastronomique unique.
              </p>
              <p>
                Chaque plat est préparé avec des ingrédients soigneusement sélectionnés et un savoir-faire
                transmis de génération en génération.
              </p>
              <Link to="/about" className="btn btn-outline">
                En savoir plus
              </Link>
            </motion.div>

            <motion.div
              className="about-preview-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={restaurantImages.about}
                alt="Restaurant Ôgüsto - Intérieur"
                className="about-image"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deliveroo Section */}
      <section className="section" style={{ backgroundColor: '#E8F5F4' }}>
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Envie de commander en ligne ?</h2>
            <p>Retrouvez nos spécialités italiennes casher livrées directement chez vous via Deliveroo</p>
            <a
              href="https://deliveroo.fr/en/menu/paris/ternes-maillot/o-gusto"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-large"
              style={{ backgroundColor: '#00CCBC', color: '#fff' }}
            >
              Commander sur Deliveroo
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Réservez votre table dès maintenant</h2>
            <p>Vivez une expérience culinaire inoubliable dans notre restaurant</p>
            <Link to="/reservation" className="btn btn-primary btn-large">
              Faire une réservation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
