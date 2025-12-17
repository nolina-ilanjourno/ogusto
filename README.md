# Ôgüsto - Restaurant Casher Italien

Site web moderne pour le restaurant Ôgüsto, spécialisé dans la gastronomie italienne casher.

## Caractéristiques

- Design moderne et responsive
- Navigation fluide avec React Router
- Animations élégantes avec Framer Motion
- Menu interactif avec filtres par catégorie
- Formulaire de réservation avec validation (React Hook Form)
- Thème personnalisé avec les couleurs du restaurant (#053161 et #CFA058)
- 100% TypeScript pour la sécurité du code

## Technologies Utilisées

- React 18
- TypeScript
- Vite
- React Router DOM
- Framer Motion
- React Hook Form
- Lucide React (icônes)

## Installation

```bash
npm install
```

## Développement

Pour lancer le serveur de développement :

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

## Build

Pour créer une version de production :

```bash
npm run build
```

## Structure du Projet

```
src/
├── components/          # Composants réutilisables
│   ├── Header.tsx
│   └── Footer.tsx
├── pages/              # Pages de l'application
│   ├── Home.tsx
│   ├── Menu.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── Reservation.tsx
├── styles/             # Fichiers CSS
├── data/               # Données (menu, etc.)
├── types/              # Types TypeScript
├── App.tsx             # Composant principal
└── main.tsx            # Point d'entrée
```

## Fonctionnalités

### Page d'Accueil
- Hero section avec présentation du restaurant
- Mise en avant des valeurs (cuisine authentique, certification casher, produits frais)
- Aperçu de l'histoire du restaurant
- Call-to-action pour réservation

### Menu
- Affichage des plats par catégories (Antipasti, Primi, Secondi, Dolci, Bevande)
- Filtrage interactif par catégorie
- Indication des prix et certification casher
- Design responsive

### Réservation
- Formulaire complet avec validation
- Sélection de date et heure
- Nombre de convives
- Informations pratiques sur les horaires
- Message de confirmation

### À Propos
- Histoire du restaurant
- Valeurs et engagement
- Information sur la certification casher
- Présentation de l'équipe

### Contact
- Informations de contact complètes
- Horaires d'ouverture
- Plan d'accès
- Informations sur les événements privés

## Personnalisation

### Couleurs
Les couleurs principales sont définies dans `src/styles/index.css` :
- Bleu marine : #053161
- Or : #CFA058

### Menu
Pour modifier le menu, éditez le fichier `src/data/menuData.ts`

## License

Tous droits réservés - Ôgüsto Restaurant
