import { motion } from 'framer-motion';
import { ChefHat, Heart, Award, Leaf } from 'lucide-react';
import { restaurantImages } from '../data/images';
import '../styles/About.css';

const About = () => {
  const values = [
    {
      icon: <ChefHat size={40} />,
      title: 'Savoir-Faire Traditionnel',
      description: 'Nos chefs perpétuent les traditions culinaires italiennes avec passion et authenticité.'
    },
    {
      icon: <Heart size={40} />,
      title: 'Cuisine avec Amour',
      description: 'Chaque plat est préparé avec soin et dévouement pour vous offrir le meilleur.'
    },
    {
      icon: <Award size={40} />,
      title: 'Certification Casher',
      description: 'Restaurant 100% casher Halavi certifié, sous supervision du Beth-Din de Paris.'
    },
    {
      icon: <Leaf size={40} />,
      title: 'Produits Frais',
      description: 'Nous sélectionnons quotidiennement les meilleurs ingrédients pour votre santé.'
    }
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>À Propos d'Ôgüsto</h1>
            <p>Une histoire de passion, de tradition et d'excellence</p>
          </motion.div>
        </div>
      </section>

      <section className="section about-story">
        <div className="container">
          <motion.div
            className="story-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="story-text">
              <h2>Notre Histoire</h2>
              <p>
                Ôgüsto est un restaurant italien casher situé au cœur du 17ème arrondissement de Paris,
                au 98 Avenue des Ternes. Nous vous accueillons dans un cadre élégant et chaleureux avec
                100 places en salle et 60 places en terrasse.
              </p>
              <p>
                Notre établissement combine l'excellence de la gastronomie italienne traditionnelle avec
                le respect strict des lois de la cacherout, sous la supervision du Beth-Din de Paris.
                Spécialisé dans les pizzas au feu de bois, les pâtes fraîches, les risottos crémeux
                et les poissons frais, nous proposons également nos célèbres tiramisus et profiteroles maison.
              </p>
              <p>
                Notre équipe de chefs talentueux travaille avec passion pour créer des plats qui
                célèbrent la richesse de la cuisine italienne, en utilisant uniquement des ingrédients
                de première qualité et en respectant les traditions culinaires ancestrales.
              </p>
            </div>

            <div className="story-image">
              <img
                src={restaurantImages.gallery[0]}
                alt="Restaurant Ôgüsto - Intérieur"
                className="story-photo"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Nos Valeurs</h2>
          </motion.div>

          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section casher-section">
        <div className="container">
          <motion.div
            className="casher-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Engagement Casher</h2>
            <div className="casher-details">
              <div className="casher-block">
                <h3>Certification Beth-Din de Paris</h3>
                <p>
                  Notre restaurant est certifié casher Halavi (produits laitiers) et supervisé
                  quotidiennement par le Beth-Din de Paris. Nous respectons strictement toutes
                  les lois de la cacherout dans la préparation et le service de nos plats.
                </p>
              </div>
              <div className="casher-block">
                <h3>Horaires Shabbat</h3>
                <p>
                  Par respect pour le Shabbat, notre établissement est fermé le vendredi.
                  Nous sommes ouverts le samedi soir à partir de 22h00 et le dimanche en service
                  continu de 12h à minuit.
                </p>
              </div>
              <div className="casher-block">
                <h3>Qualité & Traçabilité</h3>
                <p>
                  Tous nos produits sont soigneusement sélectionnés et certifiés casher. Nous
                  travaillons avec des fournisseurs de confiance pour garantir la traçabilité et
                  la qualité de chaque ingrédient.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section gallery-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Notre Restaurant</h2>
            <p className="gallery-intro">
              Découvrez l'ambiance chaleureuse et élégante de notre établissement
            </p>
          </motion.div>

          <div className="gallery-grid">
            {restaurantImages.gallery.slice(0, 6).map((image, index) => (
              <motion.div
                key={index}
                className="gallery-item"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img src={image} alt={`Ôgüsto ${index + 1}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section team-section">
        <div className="container">
          <motion.div
            className="team-description"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Notre Équipe</h2>
            <p>
              Notre brigade de cuisine est composée de chefs expérimentés qui ont à cœur de
              perpétuer les traditions culinaires italiennes. En salle, notre équipe accueillante
              veille à ce que chaque moment passé chez Ôgüsto soit mémorable.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
