import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Send } from 'lucide-react';
import { ReservationFormData } from '../types';
import '../styles/Reservation.css';

const Reservation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ReservationFormData>();

  const onSubmit = (data: ReservationFormData) => {
    console.log('Reservation data:', data);
    alert(`Merci ${data.name} ! Votre réservation pour ${data.guests} personne(s) le ${data.date} à ${data.time} a été enregistrée. Nous vous confirmerons par email à ${data.email}.`);
    reset();
  };

  // Horaires: Lun-Jeu 11h30-16h00 et 19h00-00h00, Sam soir 21h00-01h00, Dim 12h00-00h00
  const timeSlots = [
    '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
    '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30'
  ];

  return (
    <div className="reservation-page">
      <section className="reservation-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Réservation</h1>
            <p>Réservez votre table pour une expérience gastronomique inoubliable</p>
          </motion.div>
        </div>
      </section>

      <section className="reservation-content section">
        <div className="container">
          <div className="reservation-layout">
            {/* Information Card */}
            <motion.div
              className="reservation-info"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2>Informations Pratiques</h2>

              <div className="info-block">
                <div className="info-icon">
                  <Calendar size={24} />
                </div>
                <div>
                  <h3>Jours d'ouverture</h3>
                  <p>Lundi à Jeudi, Dimanche</p>
                  <p className="closed">Fermé Vendredi (Shabbat)</p>
                  <p>Samedi : Ouvert à partir de 21h00</p>
                </div>
              </div>

              <div className="info-block">
                <div className="info-icon">
                  <Clock size={24} />
                </div>
                <div>
                  <h3>Horaires de service</h3>
                  <p><strong>Lun-Jeu:</strong> 11h30 - 16h00 / 19h00 - 00h00</p>
                  <p><strong>Dimanche:</strong> 12h00 - 00h00 (non-stop)</p>
                  <p><strong>Samedi:</strong> 21h00 - 01h00</p>
                </div>
              </div>

              <div className="info-block">
                <div className="info-icon">
                  <Users size={24} />
                </div>
                <div>
                  <h3>Groupes & Privatisation</h3>
                  <p>Nous acceptons les réservations jusqu'à 20 personnes</p>
                  <p>Pour les grands groupes, merci de nous contacter au 01 45 74 41 30</p>
                  <p>Privatisation possible le lundi uniquement</p>
                </div>
              </div>

              <div className="casher-info">
                <h3>Restaurant Casher Certifié</h3>
                <p>
                  Notre établissement est 100% casher Halavi (produits laitiers) et supervisé
                  quotidiennement par le Beth-Din de Paris. Nous respectons strictement toutes
                  les lois de la cacherout.
                </p>
              </div>
            </motion.div>

            {/* Reservation Form */}
            <motion.div
              className="reservation-form-container"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="reservation-form">
                <h2>Formulaire de Réservation</h2>

                <div className="form-group">
                  <label htmlFor="name">Nom complet *</label>
                  <input
                    id="name"
                    type="text"
                    {...register('name', { required: 'Le nom est requis' })}
                    placeholder="Votre nom"
                  />
                  {errors.name && <span className="error">{errors.name.message}</span>}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      id="email"
                      type="email"
                      {...register('email', {
                        required: 'L\'email est requis',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Email invalide'
                        }
                      })}
                      placeholder="votre@email.com"
                    />
                    {errors.email && <span className="error">{errors.email.message}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Téléphone *</label>
                    <input
                      id="phone"
                      type="tel"
                      {...register('phone', { required: 'Le téléphone est requis' })}
                      placeholder="06 12 34 56 78"
                    />
                    {errors.phone && <span className="error">{errors.phone.message}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="date">Date *</label>
                    <input
                      id="date"
                      type="date"
                      {...register('date', { required: 'La date est requise' })}
                      min={new Date().toISOString().split('T')[0]}
                    />
                    {errors.date && <span className="error">{errors.date.message}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="time">Heure *</label>
                    <select
                      id="time"
                      {...register('time', { required: 'L\'heure est requise' })}
                    >
                      <option value="">Sélectionner...</option>
                      {timeSlots.map(slot => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                    {errors.time && <span className="error">{errors.time.message}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="guests">Nombre de personnes *</label>
                    <select
                      id="guests"
                      {...register('guests', { required: 'Le nombre de personnes est requis' })}
                    >
                      <option value="">Sélectionner...</option>
                      {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'personne' : 'personnes'}</option>
                      ))}
                    </select>
                    {errors.guests && <span className="error">{errors.guests.message}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message (optionnel)</label>
                  <textarea
                    id="message"
                    {...register('message')}
                    placeholder="Allergies, régimes spéciaux, demandes particulières..."
                    rows={4}
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-submit">
                  <Send size={20} />
                  Confirmer la réservation
                </button>

                <p className="form-note">
                  * Champs obligatoires. Vous recevrez un email de confirmation après validation de votre réservation.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservation;
