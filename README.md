# GALI | L'Expédition Secrète

Site vitrine promotionnel pour **GALI | L'Expédition Secrète**, un jeu de piste familial
à Lens mêlant patrimoine, exploration urbaine et supports numériques.

## Objectif du site

Le site présente l'expérience aux familles et les accompagne jusqu'à la réservation
d'un kit d'explorateur. Il doit notamment :

- raconter l'histoire de Gali et de la légendaire Lampe Cœur ;
- présenter le parcours culturel dans Lens ;
- expliquer le fonctionnement du jeu et la place du kit physique ;
- mettre en avant la collaboration entre Destination Lens-Liévin Tourisme et Asmodee ;
- présenter l'édition collector Dobble Édition Lens et le tirage au sort ;
- répondre aux questions pratiques et recueillir les réservations.

L'événement est prévu du **5 au 18 juillet 2027**.

## Public cible

Le site s'adresse principalement aux parents et aux familles, habitants de Lens ou
visiteurs, avec une expérience pensée en priorité pour les écrans mobiles.

## Technologies

- HTML, CSS et JavaScript natifs ;
- Vite ;
- Tailwind CSS v4 ;
- modules JavaScript dédiés pour l'accessibilité, les interactions, la réservation
  et l'accès au jeu.

Le projet ne nécessite pas de framework JavaScript ni de dépendance côté serveur.

## Installation

Prérequis : Node.js et npm.

```bash
npm install
```

## Commandes

Lancer le serveur de développement :

```bash
npm run dev
```

Générer la version de production :

```bash
npm run build
```

Prévisualiser la version de production :

```bash
npm run preview
```

## Organisation du projet

```text
.
├── index.html                 # Landing page principale
├── acces-jeu.html             # Accès au jeu pour les personnes déjà équipées
├── contact.html
├── confidentialite.html
├── mentions-legales.html
├── reglement-concours.html
├── public/
│   ├── images/                # Logos, affiches, photos et miniature vidéo
│   └── videos/
│       └── gali-teaser.mp4    # Bande-annonce de l'histoire de Gali
├── src/
│   ├── main.js                # Initialisation des modules
│   ├── modules/               # Fonctionnalités JavaScript
│   └── styles/main.css        # Styles et design system
└── docs/
    └── fiche_site_vitrine.md  # Cadrage, zoning et direction artistique
```

## Vidéo teaser

La vidéo est servie comme un fichier statique depuis
`public/videos/gali-teaser.mp4`. Elle est affichée dans la section teaser de la page
d'accueil avec une miniature dédiée, des contrôles natifs et une description
accessible.

## Accessibilité et responsive

Le site inclut notamment :

- un lien d'évitement ;
- des états de focus visibles ;
- des options de contraste, taille du texte et réduction des animations ;
- des textes alternatifs et descriptions pour les contenus visuels ;
- une mise en page adaptée aux mobiles, tablettes et ordinateurs.
