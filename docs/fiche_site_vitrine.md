# Fiche de Cadrage, Zoning & Design System — Site Vitrine « L'Expédition Secrète (Lens) »

> **Usage :** Document autonome prêt à être exporté dans un autre dépôt pour démarrer rapidement le développement de la landing page promotionnelle.  
> **Objectif principal :** Convertir les **parents** (arrivant depuis une publicité sociale, une publication locale ou une affiche en ville) en **inscrits** qui réservent leur kit physique et leur accès à l'application pour le jour de l'événement.  
> **Partenaires officiels :** Destination Lens Tourisme × Asmodee  
> **Produit de collab & mécanique concours :** Jeu de piste familial hybride + édition collector limitée **Dobble Édition Lens** + inscription automatique au **grand tirage au sort** en fin de parcours.

---

## Table des matières

1. [Cadrage Stratégique, Cible Parents & Règles Anti-Spoil](#1-cadrage-stratégique-cible-parents--règles-anti-spoil)
2. [Zoning Global de la Page (Quoi, Où, Comment — Desktop & Mobile)](#2-zoning-global-de-la-page-quoi-où-comment--desktop--mobile)
3. [Spécification Détaillée Section par Section (Contenu & Affichage)](#3-spécification-détaillée-section-par-section-contenu--affichage)
4. [Direction Artistique (DA) & Règles de Styles Complètes](#4-direction-artistique-da--règles-de-styles-complètes)
5. [Composant Signature : Le « Lot Mystère Switch » (Halo Années 2000)](#5-composant-signature--le-lot-mystère-switch-halo-années-2000)
6. [Catalogue des Animations Web (Hover Desktop & Scroll)](#6-catalogue-des-animations-web-hover-desktop--scroll)
7. [Raccordement Technique entre la Vitrine et l'Application PWA](#7-raccordement-technique-entre-la-vitrine-et-lapplication-pwa)
8. [Checklist Assets (COM / Créa Num / Dev), Perf & Points à Valider](#8-checklist-assets-com--créa-num--dev-perf--points-à-valider)
9. [Annexe A — Kit d'Export Autonome (SVG de l'App & Fichiers à Copier)](#9-annexe-a--kit-dexport-autonome-svg-de-lapp--fichiers-à-copier)

---

## 1. Cadrage Stratégique, Cible Parents & Règles Anti-Spoil

### 1.1 Qui lit, analyse et convertit sur ce site ?
- **Décideur principal (90 % de la décision d'inscription) : le Parent (28–48 ans)** — habitant de Lens / du Bassin minier / des Hauts-de-France ou visiteur. Il arrive le plus souvent **sur mobile** depuis une publicité Instagram/Facebook, un relais local ou un QR code sur affiche.
- **Prescripteur : l'Enfant (6–12 ans)** — réagit au côté chasse au trésor, à la loupe d'explorateur, aux jeux de société et aux lots à gagner.

### 1.2 Les 6 questions d'un parent en moins de 30 secondes
La page répond séquentiellement à chaque objection avant de proposer le formulaire :

| Objection / Question du parent | Ce qu'il faut prouver | Où y répondre |
|---|---|---|
| **1. Est-ce un vrai événement officiel ou un bricolage ?** | Logos *Lens Tourisme × Asmodee*, vraies photos tournées à Lens (Créa Num), teaser vidéo, affiche officielle (COM). | Header + Hero + Bandeau Teaser/Affiche |
| **2. Est-ce encore « un truc où mon enfant reste scotché à un téléphone » ?** | Non : l'enfant tient la **grande carte papier et la loupe** ; le parent guide à la boussole sur téléphone (0 téléchargement d'appli). | Hero + Section Récit & Duo Famille |
| **3. Est-ce adapté à notre rythme, notre âge et notre logistique ?** | Jeu en équipe dès 6 ans, pauses libres (progression sauvegardée), animateurs sur les étapes, boussole fonctionnelle même si la 4G coupe. | Comment ça marche + Infos Pratiques & FAQ |
| **4. Qu'est-ce qu'on découvre concrètement à Lens ?** | Le patrimoine culturel et populaire de Lens raconté de façon ludique et accessible aux familles (sans ton scolaire poussiéreux). | Section Lens Autrement (Culturel & Fun) |
| **5. Pourquoi faut-il s'inscrire maintenant et pas plus tard ?** | Collab **temporaire et limitée** : boîte collector **Dobble Édition Lens** au coffre final (stock limité) + entrée automatique au **grand tirage au sort**. | Hero + Section Collab Dobble + Section Concours |
| **6. Comment récupérer le kit et jouer le jour J ?** | Formulaire court de réservation du kit (créneau à l'Office de Tourisme) + accès direct au jeu si le parent a déjà un kit en main. | CTA Hero/Sticky + Formulaire final |

### 1.3 Arbitrage Anti-Spoil : Promouvoir sans gâcher la surprise en jeu
Dans l'application mobile utilisée le jour J, le nom commercial *Dobble* et les correspondances « énigme → monument » restent cachés pour préserver l'effet coffre-fort. Sur la **vitrine destinée aux parents**, la règle est précise :

1. **Valoriser *Dobble Édition Lens* sur la vitrine parents :** les parents ont besoin de connaître la valeur concrète de l'événement pour bloquer un créneau. On met en scène l'édition collector **Dobble Édition Lens (Asmodee × Lens Tourisme)** comme la récompense exclusive à débloquer en fin de parcours, *sans montrer le QR code de retrait ni l'écran final de l'app*.
2. **Ne jamais spoiler l'ordre ni les réponses des énigmes :** dans la section présentant Lens, on montre des lieux et ambiances culturelles **dans le désordre, sans numérotation d'étape (1 à 6)** et **sans reprendre les indices des énigmes de Gali** (on ne dévoile pas *« locomotive immobile »*, *« deux géants noirs »*, etc., ni quelle énigme mène à quel monument).
3. **Teaser le gros lot du tirage au sort par le mystère :** plutôt qu'une fiche technique froide, on met en scène le **Lot Mystère Switch (halo rayons blancs années 2000 + silhouette noire + `?`)** pour créer l'effet de curiosité immédiat.

### 1.4 Ton éditorial : « Culturel mais fun, sérieux mais chaleureux »
- **À adopter :** Phrases courtes, bénéfices concrets pour la famille, fierté lensoise (*Sang et Or*, patrimoine minier vivant, aventure en plein air), zéro jargon web (`PWA`, `Livewire`, `API`, `endpoint` interdits : on dit *« s'ouvre directement dans votre navigateur, sans rien installer sur les stores »*).
- **À bannir :** Zéro emoji dans l'interface (remplacés par des icônes SVG nettes), zéro faux compte à rebours anxiogène, zéro bloc de texte encyclopédique.

---

## 2. Zoning Global de la Page (Quoi, Où, Comment — Desktop & Mobile)

### 2.1 Wireframe Macro Desktop (`>= 1024px`, largeur max `1200px`)

```text
┌─────────────────────────────────────────────────────────────────────────┐
│ [0] HEADER STICKY COMPACT (68px, fond #FAF8F5 translucide + bord 2px)   │
│  [Logo L'Expédition Secrète | Lens Tourisme × Asmodee]                  │
│  [4 ancres: L'aventure | Lens | Collector & Lots | Infos]               │
│  [Lien discret: Déjà un kit ?]   [CTA Or: Réserver notre kit]           │
├─────────────────────────────────────────────────────────────────────────┤
│ [1] HERO SECTION (Fond #FAF8F5 + trame points)                          │
│  ┌────────────────────────────────┬───────────────────────────────────┐ │
│  │ Pilule Partenaires + Dates     │  COLLAGE ÉDITORIAL (3 COUCHES)    │ │
│  │ H1 MASSIF (hwt-artz)           │  1. Grande photo terrain Créa Num │ │
│  │ Pitch parent (hybride + kit)   │     ou affiche COM (cadre N1)     │ │
│  │ [CTA Or: Réserver notre kit]   │  2. Écran Boussole smartphone     │ │
│  │ [CTA Contour: Voir le teaser]  │  3. Sticker "Édition Limitée"     │ │
│  │ 4 micro-preuves (icône + texte)│     (parallaxe légère au hover)    │ │
│  └────────────────────────────────┴───────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────────────────┤
│ [2] BANDEAU PREUVE : TEASER VIDÉO & AFFICHE OFFICIELLE (Fond #FFFFFF)   │
│  ┌───────────────────────────────────────┬───────────────────────────┐  │
│  │ Lecteur Vidéo Teaser (Créa Num, 16:9) │ Affiche COM (cliquable    │  │
│  │ Poster HD + bouton Play (charge au    │ Lightbox) + Texte alliance │  │
│  │ clic pour préserver la perf 4G)       │ Lens Tourisme × Asmodee   │  │
│  └───────────────────────────────────────┴───────────────────────────┘  │
├─────────────────────────────────────────────────────────────────────────┤
│ [3] L'HISTOIRE & LE DUO FAMILLE (Fond #FAF8F5 + trame points)           │
│  - Cartouche Légende de Gali & Lampe Cœur (Niveau 1 + encart pointillé) │
│  - Diptyque Cartes en Éventail (contenu droit + sous-cartes ±4°/±8°)    │
│    [Côté Enfant : Carte + Loupe]   |   [Côté Parent : Boussole + Scan]  │
├─────────────────────────────────────────────────────────────────────────┤
│ [4] COMMENT ÇA MARCHE ? (Fond #FDF8EC Parchemin doux)                   │
│  ┌───────────────────────────────────────┬───────────────────────────┐  │
│  │ 4 Étapes reliées (tracé pointillé) :  │ Clé Antique Verticale     │  │
│  │ 01. Réserver & retirer le kit         │ (viewBox 130x350)         │  │
│  │ 02. Observer à la loupe & scanner     │ qui s'illumine en Or      │  │
│  │ 03. Suivre la boussole & relever défi │ fragment par fragment     │  │
│  │ 04. Forger la clé & ouvrir le coffre  │ au fil du scroll / hover  │  │
│  └───────────────────────────────────────┴───────────────────────────┘  │
├─────────────────────────────────────────────────────────────────────────┤
│ [5] LENS AUTREMENT : CULTUREL & FUN (Fond #9FB8AD Sauge / #F4EBD9)      │
│  - Grille Bento asymétrique de photos Créa Num (6 ambiances lensoises   │
│    mélangées et non numérotées pour préserver 100 % du jeu)             │
├─────────────────────────────────────────────────────────────────────────┤
│ [6] LA COLLAB LIMITÉE : DOBBLE ÉDITION LENS (Fond #841818 Rouge Sang)   │
│  ┌──────────────────────────┬─────────────────────────────────────────┐ │
│  │ Socle crème + Visuel HD  │ Pilule Or: COLLAB TEMPORAIRE EXCLUSIVE  │ │
│  │ Boîte Dobble Édition Lens│ Titre H2: Dobble Édition Collector Lens │ │
│  │ (tilt 3D au hover)       │ 3 arguments + stock limité + CTA Or     │ │
│  └──────────────────────────┴─────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────────────────┤
│ [7] GRAND TIRAGE AU SORT — LOT MYSTÈRE (Fond #0A0A0A Noir profond)      │
│  ┌──────────────────────────────────┬─────────────────────────────────┐ │
│  │ SCÈNE STARBURST ANNÉES 2000      │ Pilule: 100% AUTOMATIQUE        │ │
│  │ Rayons blancs nets + Switch      │ Titre + explication inscription │ │
│  │ tout en noir + halo + grand "?"  │ 3 cartes lots (Lot N°1, Asmodee,│ │
│  │                                  │ Surprises Lens Tourisme)        │ │
│  └──────────────────────────────────┴─────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────────────────┤
│ [8] INFOS PRATIQUES & FAQ PARENTS (Fond #FAF8F5 + trame points)         │
│  - Grille 3×2 L'Essentiel (Dates, Retrait, Distance/Durée, Âge, Tarif)  │
│  - Accordéon FAQ (7 questions parentales clés, 1ère ouverte par défaut) │
├─────────────────────────────────────────────────────────────────────────┤
│ [9] INSCRIPTION & RÉSERVATION DU KIT (Fond #FAF8F5 / Carte #FFFFFF)     │
│  - Gauche: Récapitulatif "Votre Pass Expédition" + option Déjà un kit ? │
│  - Droite: Formulaire court (5 champs + RGPD/Règlement) -> Confirmation │
├─────────────────────────────────────────────────────────────────────────┤
│ [10] FOOTER INSTITUTIONNEL (Fond #1A1A1A)                               │
│  - Logos officiels, Règlement Concours, RGPD, Mentions, Contact OT      │
└─────────────────────────────────────────────────────────────────────────┘
```

### 2.2 Règles Responsive Mobile (`< 768px` — Prioritaire pour trafic pub sociale)
1. **Header :** logo/nom court à gauche + CTA compact `Réserver` à droite uniquement (pas de menu burger lourd si non indispensable, ou tiroir minimaliste).
2. **Hero :** badge collab + H1 + pitch + boutons empilés en pleine largeur **au-dessus** du visuel collage (le bouton d'action doit rester visible au premier écran mobile sans scroller).
3. **Cartes en éventail (Section 3) :** les sous-cartes décoratives passent à `±2deg` (au lieu de `±4deg`) avec `overflow-x: clip` sur la section parente pour éviter tout débordement horizontal.
4. **Comment ça marche (Section 4) :** timeline verticale à gauche, Clé Antique compactée en bandeau horizontal/latéral ou au bas de la section déjà dorée au passage.
5. **Galerie Lens (Section 5) :** carrousel horizontal fluide (`display: flex; overflow-x: auto; scroll-snap-type: x mandatory;`) plutôt qu'une longue colonne de 6 grandes photos.
6. **Lot Mystère Switch (Section 7) :** la scène starburst s'affiche **au-dessus** du texte concours pour créer le choc visuel dès l'entrée dans la bande noire.
7. **Barre CTA flottante mobile (optionnelle) :** pilule fixe en bas d'écran (`Réserver notre kit`) qui apparaît une fois le Hero dépassé et disparaît automatiquement dès que `#inscription` entre dans le viewport (via `IntersectionObserver`).

### 2.3 Matrice Quoi / Où / Comment / Pourquoi

| # | Quoi montrer (Information clé) | Où | Comment l'afficher | Pourquoi (Conversion Parent) |
|---|---|---|---|---|
| 0 | Caution officielle + accès direct | Header sticky | Barre translucide `68px`, logos + 4 ancres + CTA Or | Rassurer dès 0,5s et offrir une sortie rapide |
| 1 | Proposition de valeur complète + urgence limitée | Hero (Above the fold) | Grille asymétrique texte + collage 3 couches | Comprendre en 3s : quoi, pour qui, pourquoi maintenant |
| 2 | Preuve terrain réelle (vidéo + affiche) | Bandeau blanc | Lecteur 16:9 click-to-load + affiche COM zoomable | Lever le doute « site amateur » grâce aux assets Créa Num/COM |
| 3 | Scénario + partage des rôles Enfant/Parent | Zone Papier | Cartouche Gali + 2 cartes avec sous-cartes éventail | Rassurer sur la place du téléphone vs carte papier + loupe |
| 4 | Déroulé étape par étape sans friction | Bande Parchemin | 4 cartes reliées + Clé Antique verticale animée | Prouver que le jeu est simple du retrait kit au coffre |
| 5 | Richesse culturelle & fun de Lens (non spoilée) | Bande Sauge `#9FB8AD` | Bento photos Créa Num + tag `PATRIMOINE • LENS` | Donner un sens culturel à la sortie familiale |
| 6 | Produit exclusif : **Dobble Édition Lens** | Bande Sang `#841818` | Visuel boîte/cartes tilt 3D + 3 puces stock limité | Créer la désirabilité produit et l'urgence |
| 7 | Gros lot mystère & tirage au sort automatique | Bande Noire `#0A0A0A` | Starburst rayons blancs 2000s + Switch noire + `?` | Effet waouh mémorable + dernière impulsion d'inscription |
| 8 | Réponses logistiques exactes (âge, trajet, 4G, météo) | Zone Papier | Grille 3×2 scannable + accordéon FAQ | Lever les derniers freins avant le formulaire |
| 9 | Réservation créneau retrait kit + accès jour J | Carte finale `#inscription` | Récap Pass + formulaire court 5 champs | Transformer l'intérêt en réservation concrète |
| 10 | Cadre légal & partenaires officiels | Footer `#1A1A1A` | Mentions, RGPD, Règlement jeu-concours obligatoire | Conformité légale France + crédibilité institutionnelle |

---

## 3. Spécification Détaillée Section par Section (Contenu & Affichage)

### `[0]` Header Sticky Minimaliste
- **Hauteur :** `68px` desktop, `60px` mobile. Fond `rgba(250, 248, 245, 0.92)` avec `backdrop-filter: blur(8px)` et `border-bottom: 2px solid #1A1A1A`.
- **Gauche :** Titre court *« L'Expédition Secrète »* (`hwt-artz`, `#841818`) + pilule partenaires `Lens Tourisme × Asmodee`.
- **Centre (desktop `>= 960px`) :** 4 ancres courtes : `L'aventure` (`#aventure`), `Lens en jeu` (`#lens`), `Collector & Lots` (`#collab`), `Infos & FAQ` (`#infos`).
- **Droite :** Lien texte discret `Déjà un kit ?` (vers le domaine de l'app jour J) + bouton `.btn-expedition--gold` compact `Réserver mon kit`.

### `[1]` Hero Section — « Un Hero qui tabasse » (`#hero`)
- **Grille Desktop :** `grid-template-columns: 1.12fr 0.88fr; gap: 48px; align-items: center;`.
- **Colonne gauche (Message & Action) :**
  1. **Badge d'exclusivité (Niveau 2) :** Pilule blanche bordée `#1A1A1A` avec logos `Lens Tourisme × Asmodee` + pastille `#841818` texte `#FFFFFF` : `COLLAB TEMPORAIRE | ÉDITION LIMITÉE [DATES À CONFIRMER]`.
  2. **Titre H1 (`hwt-artz`, `clamp(38px, 4.8vw, 64px)`, `line-height: 1.02`) :**
     - *Option A (Recommandée parents) :* `LENS DEVIENT VOTRE TERRAIN D'AVENTURE EN FAMILLE` (avec `TERRAIN D'AVENTURE` souligné/surligné en `#F4B316`).
     - *Option B (Plus épique) :* `REFORGEZ LA CLÉ DE GALI. REMPORTEZ LE TRÉSOR DE LENS.`
  3. **Sous-titre (`18px`, `#374151`, `line-height: 1.55`, `max-width: 56ch`) :**
     > Partez à la recherche de **6 fragments de clé** à travers Lens grâce à un **vrai kit d'explorateur** (grande carte illustrée + loupe) et votre téléphone. À la clé : le collector limité **Dobble Édition Lens** et votre entrée automatique au **grand tirage au sort** !
  4. **Paire de CTA :**
     - Primaire (`.btn-expedition--gold`, grand format) : `Réserver notre kit →` (ancre `#inscription`)
     - Secondaire (`.btn-expedition--outline`) : `[Icône Play SVG] Voir le teaser` (ancre `#teaser` ou ouverture modale vidéo)
  5. **4 micro-preuves (grille `2×2` ou ligne wrap, icône SVG trait fin `#841818` + `13px` bold) :**
     - `Dès 6 ans • En famille (2 à 5 joueurs)`
     - `Kit physique + navigateur (0 appli à installer)`
     - `6 escales culturelles & animateurs sur place`
     - `Stock limité • Tirage au sort inclus`
- **Colonne droite (Collage Éditorial 3 couches — non générique) :**
  - `.hero-collage` : conteneur relatif (`min-height: 440px` desktop) superposant :
    1. **Cadre principal (`.card-l1`, ombre décalée `8px 8px 0 #1A1A1A`, rotation `-1.5deg`) :** Grande photo terrain des Créa Num (famille avec carte et loupe dans Lens) ou visuel central de l'affiche COM.
    2. **Mockup Smartphone flottant (bas-gauche, `z-index: 3`) :** Vraie capture de l'écran Boussole Sang & Or de l'app dans un cadre téléphone `#1A1A1A`.
    3. **Sticker rond collector (haut-droite, `z-index: 4`, fond `#F4B316`, bord `#1A1A1A`) :** `DOBBLE LENS + TIRAGE AU SORT • ÉDITION LIMITÉE` animé en léger balancement `.idle-sway` (`±6deg`).

### `[2]` Bandeau Preuve — Vidéo Teaser (Créa Num) & Affiche (COM) (`#teaser`)
- **Fond :** `#FFFFFF`, bordures haute et basse `2.5px solid #1A1A1A` (coupure éditoriale franche).
- **Layout Desktop (`1.38fr 1fr`, `gap: 32px`) :**
  - **Gauche — Lecteur Vidéo Teaser (16:9) :** Cadre `#0A0A0A`, `border: 3px solid #1A1A1A`, `border-radius: 20px`, `box-shadow: 0 6px 0 #1A1A1A`. Vignette `.webp` de haute qualité + bouton Play `#F4B316` central + étiquette coin haut gauche `TEASER OFFICIEL | TOURNÉ À LENS`. **Chargement au clic (Facade Pattern)** : le fichier `<video>` ou iframe n'est injecté qu'au clic pour éviter de charger 10–15 Mo dès l'ouverture sur 4G.
  - **Droite — Carte « L'Affiche & La Collab Officielle » :** Miniature de l'**affiche officielle COM** (cliquable pour ouvrir une Lightbox plein écran) + encart court :
    - Titre (`hwt-artz`, `#841818`) : `QUAND LE PATRIMOINE RENCONTRE LE JEU`
    - Texte (3 lignes max) expliquant l'alliance éphémère entre **Destination Lens Tourisme** et **Asmodee** pour faire redécouvrir la ville en famille.
    - Pied de carte avec les deux logos officiels propres.

### `[3]` L'Histoire & Le Duo Famille (`#aventure`)
- **Fond :** `.bg-expedition-paper` (`#FAF8F5` + micro-points `#D1D5DB`).
- **Sous-bloc 3.A — La Légende de la Lampe Cœur :**
  - Conteneur `.card-l1` horizontal centré (`max-width: 960px`), avec à gauche l'emblème **Lampe Cœur** (ou illustration de **Gali**) et à droite un encart `.card-l3` (`border: 1.5px dashed #D97706`, fond `#FDF8EC`) :
  - **Texte fidèle au canon de l'app :**
    > **L'histoire à vivre ensemble :** Dans le grenier de son grand-père mineur, le jeune **Gali** a retrouvé une note jaunie, une loupe et la pièce de départ d'une **clé antique** censée rallumer la légendaire **Lampe Cœur**, une gaillette de charbon magique qui fait briller l'histoire de Lens. Pour ouvrir le coffre secret, votre équipe doit retrouver les **6 fragments manquants** cachés en ville !
- **Sous-bloc 3.B — Le Duo Complémentaire (Cartes en éventail fidèles à l'app) :**
  - *Important pour la lisibilité parents :* On reprend exactement la structure de `hub.blade.php` — **deux sous-cartes décoratives inclinées (`-4deg` et `+4deg`) derrière chaque carte horizontale bien droite (`0deg`)** (le texte reste parfaitement horizontal et lisible ; seules les cartes d'arrière-plan s'écartent au survol desktop !).
  - **Carte 1 — Côté Enfant : L'Explorateur de terrain** (fond `#FFFBEB`) :
    - *En main :* La grande carte papier illustrée de Lens et la loupe du kit.
    - *Son rôle :* Déchiffrer les indices de Gali à la loupe sur le papier, observer l'architecture autour de lui et participer aux défis sur place. **L'enfant ne passe pas sa sortie les yeux sur un écran.**
  - **Carte 2 — Côté Parent : Le Guide à la boussole** (fond `#F4EBD9`) :
    - *En main :* Son smartphone (directement dans le navigateur, sans application à installer).
    - *Son rôle :* Scanner le repère trouvé par l'enfant sur la carte papier, guider la marche avec la boussole Sang & Or (qui reste active même si la 4G hésite) et lire les anecdotes historiques du Carnet de Gali.

### `[4]` Comment ça marche ? — La Boucle en 4 Étapes
- **Fond :** `#FDF8EC` avec bordures haute/basse `2px solid #1A1A1A`.
- **Layout Desktop (`1.45fr 0.55fr`, `gap: 40px`, `align-items: center`) :**
  - **Gauche — Grille `2×2` des 4 étapes (`.card-l2` numérotées `01` à `04`, pastille `#841818` texte `#F4B316`, portant respectivement `data-forge-step="1"`, `"2"`, `"4"`, `"6"`) :**
    1. **01 | Réservez & retirez votre kit** (`data-forge-step="1"`) — Choisissez votre jour en ligne puis récupérez votre carte papier illustrée et votre loupe au point d'accueil (Office de Tourisme de Lens).
    2. **02 | Cherchez à la loupe & scannez la carte** (`data-forge-step="2"`) — L'app donne l'énigme de Gali sans révéler le lieu. L'enfant le repère sur la carte à la loupe ; vous scannez son QR code sur le papier pour activer la destination.
    3. **03 | Marchez à la boussole & jouez sur place** (`data-forge-step="4"`) — Suivez la pointe jaune or jusqu'au site, retrouvez l'animateur de l'étape pour un mini-défi familial et scannez son badge pour gagner un **fragment de clé en or**.
    4. **04 | Reforgez la clé & ouvrez le coffre** (`data-forge-step="6"`) — Une fois les 6 fragments assemblés, la **Lampe Cœur** se rallume : présentez votre QR code trésor pour repartir avec l'édition collector et être **automatiquement inscrit au tirage au sort**.
  - **Droite — Clé Antique Verticale Interactive :**
    - Reprend le SVG vertical de l'app (`viewBox="0 0 130 350"`, fourni en [Annexe A](#9-annexe-a--kit-dexport-autonome-svg-de-lapp--fichiers-à-copier)) : la pièce de départ du grenier est déjà dorée, et les 6 fragments brisés passent progressivement du gris `#D1D5DB` à l'or `#F4B316` au scroll ou au survol des cartes !

### `[5]` Lens Autrement — Culturel mais Fun (Strictement Anti-Spoil) (`#lens`)
- **Fond :** Bande **Vert Sauge `#9FB8AD`** (contraste apaisant qui valorise le côté patrimoine et casse la répétition rouge/jaune), cartes `.card-l1` fond `#F4EBD9` / `#FFFFFF`.
- **Règle Anti-Spoil appliquée :**
  - **Aucune numérotation d'étape (pas de `1..6`)**, **ordre mélangé** par rapport au parcours réel, et **aucune phrase d'indice** du jeu. On vend l'ambiance culturelle et la diversité de Lens en famille.
- **Layout Desktop :** Grille Bento asymétrique (`2` grandes cartes `col-span-2` ou format large + `4` cartes moyennes) avec vraies photos **Créa Num**, effet zoom doux sur la photo au hover et étiquette bas de carte :
  - *Carte A :* **Le Louvre-Lens & son parc** — *Quand l'art contemporain rayonne sur une ancienne fosse minière.* (`PATRIMOINE • LENS`)
  - *Carte B :* **La ferveur Sang et Or** — *Découvrir l'âme populaire autour du stade Bollaert-Delelis.* (`CULTURE POPULAIRE • LENS`)
  - *Carte C :* **Les sommets du bassin minier** — *Prendre de la hauteur du côté des terrils de Loos-en-Gohelle, classés à l'UNESCO.* (`NATURE & UNESCO`)
  - *Carte D :* **Façades Art déco & cœur de ville** — *Lever les yeux sur les briques sculptées et la mémoire des corons.* (`ARCHITECTURE • LENS`)
  - *Carte E :* **Une gare hors du commun** — *Un monument emblématique des années 1920 au charme ferroviaire unique.* (`HISTOIRE • LENS`)
  - *Carte F :* **Place Jean-Jaurès & Office de Tourisme** — *Le camp de base chaleureux pour lancer et fêter votre expédition.* (`ACCUEIL • LENS`)
  - *(Note équipe : si vous voulez garder encore plus de mystère sur certains monuments exacts dès la vitrine, remplacez les noms des lieux par des titres thématiques purement visuels accompagnés des photos Créa Num.)*

### `[6]` La Collab Limitée — Dobble Édition Lens (`#collab`)
- **Fond :** **Rouge Sang `#841818`** avec micro-trame discrète `rgba(255, 255, 255, 0.07)`.
- **Layout Desktop (`45% / 55%`, max-width `1120px`) :**
  - **Colonne gauche (Showcase Produit) :** Socle crème `#FFFBEB` bordé `#1A1A1A` avec ombre décalée `8px 8px 0 #1A1A1A`, mettant en scène le packshot studio du **Dobble Édition Lens** (+ 2/3 cartes étalées montrant des symboles locaux : lampe cœur, terril, casque de mineur...). Au hover desktop : inclinaison 3D douce de la boîte.
  - **Colonne droite (Argumentaire Rareté & Conversion) :**
    - Pilule Or `#F4B316` texte `#1A1A1A` : `COLLABORATION TEMPORAIRE EXCLUSIVE`
    - Titre H2 (`hwt-artz`, `#FFFFFF` + accent `#F4B316`) : `REPARTEZ AVEC LE DOBBLE ÉDITION COLLECTOR LENS`
    - 3 points clés (puces checkmark `#F4B316`) :
      - **Édition locale inédite Lens Tourisme × Asmodee :** des symboles 100 % lensois introuvables en magasin.
      - **Remis à l'ouverture du coffre final :** terminez les 6 étapes et présentez votre QR code de victoire à l'Office de Tourisme *(dans la limite des stocks disponibles — [CONDITION EXACTEMENT 1 BOÎTE / ÉQUIPE À CONFIRMER])*.
      - **Disponible uniquement pendant l'événement :** aucune réédition prévue après le **[DATES À CONFIRMER]**.
    - CTA Or : `Réserver notre kit avant rupture →`

### `[7]` Le Grand Tirage au Sort — Scène « Lot Mystère Switch » (`#concours`)
*(Spécification technique et code complet prêt à copier en [Section 5](#5-composant-signature--le-lot-mystère-switch-halo-années-2000).)*

- **Fond :** **Noir profond `#0A0A0A`** pour faire exploser le contraste des rayons blancs nets.
- **Layout Desktop (`1fr 1fr`, `gap: 48px`, `align-items: center`) :**
  - **Colonne gauche — Scène « Lot Mystère » :**
    - Disque de **rayons blancs bien nets** façon reveal/pub TV années 2000 sur fond noir.
    - **Silhouette tout en noir** d'une console portable avec manettes latérales détachables (format Switch immédiatement reconnaissable à la forme, avec léger halo blanc arrière pour détacher les contours).
    - **Grand `?` jaune or `#F4B316`** centré sur la silhouette.
    - Légende : `INDICE LOT N°1 : DE QUOI JOUER EN FAMILLE À LA MAISON… ET PARTOUT AILLEURS !`
  - **Colonne droite — Règles du Concours & Autres Lots :**
    - Pilule Or : `TIRAGE AU SORT • 100% AUTOMATIQUE`
    - Titre H2 (`hwt-artz`, `#FFFFFF` + `#F4B316`) : `TERMINEZ L'EXPÉDITION, PARTICIPEZ AU GRAND TIRAGE AU SORT !`
    - Explication limpide :
      > Dès que votre équipe réunit les 6 fragments de clé et rallume la Lampe Cœur, elle est **automatiquement inscrite** au grand tirage au sort avec l'email de l'équipe. **Aucun bulletin papier à remplir.**
    - **Grille de 3 cartes lots (fond `#161616`, bordure `rgba(255,255,255,0.2)` / accent `#F4B316`) :**
      1. `Grand Lot Mystère` — *Indice ci-contre : de quoi réunir petits et grands devant la télé ou en voyage.*
      2. `Coffrets de jeux Asmodee` — *Des classiques familiaux pour prolonger vos soirées jeux.*
      3. `Surprises Lens Tourisme` — *[À AJUSTER SELON DOTATION OFFICIELLE].*
    - Mention légale courte : *« Participation gratuite dès l'expédition complétée — tirage le [DATE À CONFIRMER]. Règlement complet en pied de page. »*

### `[8]` Infos Pratiques & FAQ Parents (`#infos`)
- **Fond :** `.bg-expedition-paper` (`#FAF8F5` + micro-points).
- **Sous-bloc 8.A — L'Essentiel en 1 coup d'œil (Grille `3×2` de `.card-l2`) :**
  1. **Dates :** `[5 au 18 juillet 2027 — À CONFIRMER]`
  2. **Départ & Retrait du kit :** Office de Tourisme de Lens (Place Jean-Jaurès) • `[Horaires à confirmer]`
  3. **Distance, Durée & Rythme :** `[DURÉE & LOGISTIQUE TERRILS À CONFIRMER]` — *Note technique issue des coordonnées actuelles de l'app : les 6 étapes cumulées représentent ~8,6 km à vol d'oiseau (~10 km réels à pied en incluant l'aller-retour vers les Terrils de Loos-en-Gohelle). Ne promettez « 1h30–2h » que si les familles utilisent un transport (bus Tadao / voiture / vélo) pour l'étape des Terrils ou si le point d'épreuve est rapproché ; sinon affichez honnêtement « Demi-journée (~3h à 4h à pied avec pauses) — fractionnable grâce à la sauvegarde en ligne ».*
  4. **Âge & Équipe :** Idéal dès 6 ans en famille (2 à 5 joueurs par kit)
  5. **Tarif :** `[Gratuit sur inscription / Tarif ou caution loupe à confirmer]`
  6. **Matériel requis :** 1 smartphone chargé avec connexion Internet + appareil photo (aucune appli à télécharger)
- **Sous-bloc 8.B — Accordéon FAQ Parents (7 questions, 1ère ouverte par défaut) :**
  1. *Faut-il télécharger une application sur App Store ou Google Play ?* → Non, tout fonctionne directement dans Chrome ou Safari depuis le lien/QR remis avec votre kit.
  2. *Que se passe-t-il si la 4G capte mal pendant le parcours ?* → La boussole et la distance GPS continuent hors ligne entre deux monuments ; seul le scan de validation des QR codes utilise Internet.
  3. *Le parcours est-il adapté aux jeunes enfants et aux poussettes ?* → Le cœur de ville, la Gare, Bollaert et le parc du Louvre-Lens sont accessibles à pied/poussette. *[À PRÉCISER : indiquer clairement l'accessibilité du point de rendez-vous exact de l'animateur sur l'étape Terrils de Loos-en-Gohelle + les options bus/voiture si besoin.]*
  4. *Peut-on faire une pause en route ou étaler l'aventure ?* → Oui, votre progression (fragments de clé et anecdotes) reste enregistrée sur votre compte d'équipe.
  5. *Que faire en cas de pluie ou de mauvais temps ?* → *[À CONFIRMER : maintien avec vêtements adaptés / report sur autre jour de l'événement / plan B accueil.]*
  6. *Comment fonctionne le tirage au sort ?* → Validation des 6 fragments = inscription automatique de l'email d'équipe au grand tirage au sort.
  7. *J'ai déjà récupéré mon kit : comment ouvrir le jeu maintenant ?* → Cliquez sur le lien direct d'accès au jeu (fourni dans le kit et en haut/bas de page) sans refaire de réservation.

### `[9]` Formulaire Court de Réservation du Kit (`#inscription`)
- **Fond :** Carte maîtresse `.card-l1` centrée (`max-width: 980px`) en 2 colonnes :
  - **Gauche (Récapitulatif « Votre Pass Expédition » — fond `#FDF8EC`) :**
    - Liste à icônes SVG : `1 Kit Explorateur physique (carte + loupe)` • `Accès direct au guide boussole` • `Participation coffre collector & tirage au sort`.
    - Mention honnête de rareté : *« Stock limité pendant la collab — réservez votre jour de retrait pour garantir votre kit. »*
    - Lien secondaire en bas : *« Vous êtes déjà à Lens avec votre kit en main ? Accéder directement au jeu → »*
  - **Droite (Formulaire court — 5 champs max) :**
    1. Prénom & Nom du parent (ou Nom d'équipe) (`text`, requis)
    2. Adresse email du parent (`email`, requis — *sert au pass kit et au contact gagnant du tirage au sort*)
    3. Jour souhaité de retrait (`select` des jours ouverts de l'événement)
    4. Créneau indicatif (`Matin 10h–12h30` / `Après-midi 13h30–17h`)
    5. Taille de l'équipe / nombre d'enfants (`select`)
    - Case à cocher RGPD + acceptation du règlement du jeu-concours (obligatoire).
    - CTA géant pleine largeur (`.btn-expedition--gold`) : `RÉSERVER MON KIT & MON ACCÈS →`
  - **État Confirmation :** Encart `#DCFCE7` bordé `#1A1A1A` texte `#15803D` confirmant le jour, le lieu de retrait (Office de Tourisme) et le lien vers l'application du jour J.

### `[10]` Footer Institutionnel
- **Fond :** `#1A1A1A`, texte `#E5E7EB`, liens hover `#F4B316`.
- **Contenu :** Logos officiels *Lens Tourisme × Asmodee* (sur cartouche blanc `#FFFFFF`), dates de l'événement, lien direct *« Déjà inscrit ? Lancer le jeu »*, et 4 liens obligatoires : `Mentions légales`, `Confidentialité (RGPD)`, `Règlement du jeu-concours`, `Contact Office de Tourisme`.

---

## 4. Direction Artistique (DA) & Règles de Styles Complètes

### 4.1 Comment reprendre la DA de l'app tout en faisant « Sérieux & Pro »
L'application mobile utilise un style néo-brutaliste ludique (`hwt-artz`, bordures noires épaisses, ombres dures). Transposé tel quel en plein écran desktop, ce style peut sembler « enfantin ». Pour garder l'identité immédiate de l'app **sans passer pour une blague** :
1. **La vraie photo et la vidéo dominent le haut de page :** l'app mobile repose sur des SVG car elle tourne hors contexte visuel ; la vitrine met en avant les **photos terrain Créa Num**, la **vidéo teaser** et l'**affiche COM**. Les SVG (`Lampe Cœur`, `Clé`, `Boussole`) servent d'emblèmes et de schémas explicatifs.
2. **Bordures calibrées pour le desktop :** `3px` réservés au cadre Hero, au lecteur vidéo, aux CTA et cartes maîtresses Niveau 1 ; `2px` sur les cartes internes Niveau 2 ; `border-radius` sobre (`14px–20px`).
3. **`hwt-artz` dosée avec retenue :** uniquement sur H1, H2, grands chiffres (`01..04`) et labels CTA en majuscules. Tout le reste (H3 éditoriaux, badges longs, paragraphes parents, FAQ, formulaire) reste en **`Nunito`** très lisible (`16px–18px`, `line-height: 1.55`, `max-width: 62ch`).
4. **Ruptures de fond rythmées :** alternance maîtrisée **Papier `#FAF8F5`** → **Blanc `#FFFFFF`** → **Papier** → **Parchemin `#FDF8EC`** → **Sauge `#9FB8AD`** → **Sang `#841818`** → **Noir `#0A0A0A`** → **Papier**.
5. **Zéro emoji dans l'UI :** uniquement des pictogrammes SVG nets au trait `#1A1A1A`.

### 4.2 Typographies Officielles (Adobe Typekit — Identique à l'app)
À inclure dans le `<head>` du futur projet :
```html
<link rel="preconnect" href="https://use.typekit.net" crossorigin>
<link rel="preconnect" href="https://p.typekit.net" crossorigin>
<link rel="stylesheet" href="https://use.typekit.net/msd2zjt.css">
```

| Rôle | Variable & Famille | Graisses | Règles |
|---|---|---|---|
| **Display** | `--font-display`: `"hwt-artz", "Impact", sans-serif` | `700` normal | H1, H2, CTA principaux, numéros d'étapes. `text-transform: uppercase`, `letter-spacing: 0.02em` à `0.04em`. |
| **Corps & UI** | `--font-body`: `"nunito", system-ui, -apple-system, sans-serif` | `400`, `600`, `700`, `800` | Paragraphes `16px–18px` (`line-height: 1.55`), formulaires, FAQ, badges `700/800`. |

### 4.3 Palette Chromatique Complète

| Token CSS | Hex | Usage exact |
|---|---|---|
| `--color-paper` | `#FAF8F5` | Fond papier principal avec trame de points |
| `--color-dot-grid` | `#D1D5DB` | Points de `1.5px` espacés de `20px` |
| `--color-surface` | `#FFFFFF` | Cartes Niveau 1, bandeau vidéo/affiche, champs formulaire |
| `--color-parchment-light` | `#FDF8EC` | Encarts récit Gali, section Comment ça marche |
| `--color-parchment` | `#F4EBD9` | Blocs patrimoine, carte Parent, fond boussole/clé |
| `--color-gold-glow` | `#FFFBEB` | Fond doux carte Enfant, socle packshot Dobble |
| `--color-gold-soft` | `#FEF3C7` | Pilules de réassurance, halos clairs d'icônes |
| `--color-blood` | `#841818` | Sang de Lens : titres forts, section Collab Dobble, boutons secondaires |
| `--color-crimson` | `#B91C1C` | Accents urgence, repère Nord |
| `--color-gold` | `#F4B316` | Or éclatant : CTA conversion #1, surlignages, clé complète |
| `--color-amber-border` | `#D97706` | Bordures pointillées Niveau 3 (`1.5px dashed`) |
| `--color-amber-text` | `#92400E` | Texte ambre lisible sur fond crème/parchemin |
| `--color-amber-text-deep` | `#78350F` | Légendes sombres sur fond parchemin `#F4EBD9` |
| `--color-sage` | `#9FB8AD` | Bande patrimoine Lens & cercle extérieur boussole |
| `--color-ink` | `#1A1A1A` | Bordures franches, ombres portées dures, texte titres & CTA Or |
| `--color-text-muted` | `#374151` | Paragraphes principaux sur fond clair |
| `--color-text-subtle` | `#4B5563` | Sous-textes, aides de champs |
| `--color-neutral-card` | `#E5E7EB` | Cartes d'arrière-plan du jeu en éventail |
| `--color-stage-dark` | `#0A0A0A` | Scène Grand Tirage au Sort (halo années 2000) & lecteur vidéo |
| `--color-success` | `#15803D` | Texte confirmation formulaire |
| `--color-success-soft` | `#DCFCE7` | Fond carte confirmation réservation |
| `--color-error` | `#DC2626` | Messages de validation formulaire |

> **Contraste WCAG obligatoire :** Sur Or (`#F4B316`), texte toujours en `#1A1A1A` (jamais blanc). Sur Sang (`#841818`), texte `#FFFFFF` ou `#F4B316` uniquement en grand format/badge. Sur Noir (`#0A0A0A`), texte `#FFFFFF` ou `#F4B316`.

### 4.4 Système d'Élévation Néo-Brutaliste à 3 Niveaux
1. **Niveau 1 (`.card-l1` & CTA autonomes) :** `border: 3px solid #1A1A1A`, `box-shadow: 0 6px 0 #1A1A1A` (ou `8px 8px 0 #1A1A1A` sur cadres photo/affiche éditoriaux).
2. **Niveau 2 (`.card-l2` & pilules) :** `border: 2px solid #1A1A1A`, **AUCUNE ombre portée**.
3. **Niveau 3 (`.card-l3` notes & légendes) :** fond `#FDF8EC`, `border: 1.5px dashed #D97706`, **AUCUNE ombre portée**.

### 4.5 Feuille de style de base complète (`tokens.css`)
*(Autonome, prête à copier : inclut padding/tailles réelles des boutons, cartes, éventail et collage Hero.)*

```css
:root {
  --font-display: "hwt-artz", "Impact", sans-serif;
  --font-body: "nunito", system-ui, -apple-system, sans-serif;

  --color-paper: #FAF8F5;
  --color-dot-grid: #D1D5DB;
  --color-surface: #FFFFFF;
  --color-parchment-light: #FDF8EC;
  --color-parchment: #F4EBD9;
  --color-gold-glow: #FFFBEB;
  --color-gold-soft: #FEF3C7;

  --color-blood: #841818;
  --color-crimson: #B91C1C;
  --color-gold: #F4B316;
  --color-amber-border: #D97706;
  --color-amber-text: #92400E;
  --color-amber-text-deep: #78350F;
  --color-sage: #9FB8AD;

  --color-ink: #1A1A1A;
  --color-text: #1A1A1A;
  --color-text-muted: #374151;
  --color-text-subtle: #4B5563;
  --color-neutral-card: #E5E7EB;
  --color-stage-dark: #0A0A0A;

  --color-success: #15803D;
  --color-success-soft: #DCFCE7;
  --color-error: #DC2626;

  --radius-card: 20px;
  --radius-subcard: 14px;
  --radius-btn: 14px;
  --shadow-l1: 0 6px 0 #1A1A1A;
  --shadow-l1-offset: 8px 8px 0 #1A1A1A;
  --shadow-btn: 0 4px 0 #1A1A1A;
  --shadow-btn-hover: 0 7px 0 #1A1A1A;
}

*, *::before, *::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: var(--font-body);
  color: var(--color-text);
  background-color: var(--color-paper);
  line-height: 1.55;
}

/* Fond signature papier d'exploration */
.bg-expedition-paper {
  background-color: var(--color-paper);
  background-image: radial-gradient(var(--color-dot-grid) 1.5px, transparent 1.5px);
  background-size: 20px 20px;
}

/* Conteneur éditorial standard */
.section-wrap {
  padding: 80px 24px;
  overflow-x: clip;
}
.section-wrap[id],
section[id] {
  scroll-margin-top: 84px;
}
.section-inner {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
@media (max-width: 767px) {
  .section-wrap {
    padding: 52px 16px;
  }
  .section-wrap[id],
  section[id] {
    scroll-margin-top: 76px;
  }
}

/* Boutons tactiles néo-brutalistes */
.btn-expedition {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 24px;
  font-family: var(--font-display);
  font-size: 19px;
  line-height: 1.1;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  border: 3px solid var(--color-ink);
  border-radius: var(--radius-btn);
  box-shadow: var(--shadow-btn);
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.16s cubic-bezier(0.22, 1, 0.36, 1),
              box-shadow 0.16s cubic-bezier(0.22, 1, 0.36, 1),
              background-color 0.16s ease;
}
.btn-expedition--sm {
  padding: 10px 16px;
  font-size: 15px;
  border-width: 2.5px;
}
.btn-expedition--gold {
  background-color: var(--color-gold);
  color: var(--color-ink);
}
.btn-expedition--blood {
  background-color: var(--color-blood);
  color: #FFFFFF;
}
.btn-expedition--outline {
  background-color: var(--color-surface);
  color: var(--color-ink);
}
@media (hover: hover) {
  .btn-expedition:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-btn-hover);
  }
}
.btn-expedition:active {
  transform: translateY(3px);
  box-shadow: 0 1px 0 var(--color-ink);
}

/* Cartes 3 Niveaux */
.card-l1 {
  background: var(--color-surface);
  border: 3px solid var(--color-ink);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-l1);
  padding: 28px;
}
.card-l2 {
  background: var(--color-surface);
  border: 2px solid var(--color-ink);
  border-radius: var(--radius-subcard);
  padding: 20px;
}
.card-l3 {
  background: var(--color-parchment-light);
  border: 1.5px dashed var(--color-amber-border);
  border-radius: var(--radius-subcard);
  padding: 16px;
}

/* Signature Cartes en Éventail : wrapper .fan-deck autour d'une .card-l1 */
.fan-deck {
  position: relative;
  z-index: 0;
}
.fan-deck > .card-l1,
.fan-deck > .card-l2 {
  position: relative;
  z-index: 1;
}
.fan-deck::before,
.fan-deck::after {
  content: "";
  position: absolute;
  inset: 0;
  background: var(--color-neutral-card);
  border: 2px solid var(--color-ink);
  border-radius: var(--radius-card);
  transform-origin: bottom center;
  z-index: 0;
  transition: transform 0.28s cubic-bezier(0.22, 1, 0.36, 1);
}
.fan-deck::before { transform: rotate(-4deg); }
.fan-deck::after  { transform: rotate(4deg); }
@media (hover: hover) {
  .fan-deck:hover::before { transform: rotate(-7.5deg) translateX(-4px); }
  .fan-deck:hover::after  { transform: rotate(7.5deg) translateX(4px); }
}
@media (max-width: 767px) {
  .fan-deck::before { transform: rotate(-2deg); }
  .fan-deck::after  { transform: rotate(2deg); }
}

/* Animation badge/sticker Hero */
@keyframes idle-sway {
  0%, 100% { transform: rotate(-6deg); }
  50% { transform: rotate(6deg); }
}
.idle-sway {
  animation: idle-sway 3s ease-in-out infinite;
}
```

> **Variante Tailwind CSS v4 (`@theme` à coller dans `app.css` si le futur projet utilise Tailwind) :**
> ```css
> @theme {
>   --font-display: "hwt-artz", "Impact", sans-serif;
>   --font-sans: "nunito", system-ui, -apple-system, sans-serif;
>   --font-body: "nunito", system-ui, -apple-system, sans-serif;
>   --color-paper: #FAF8F5;
>   --color-dot-grid: #D1D5DB;
>   --color-parchment: #F4EBD9;
>   --color-parchment-light: #FDF8EC;
>   --color-blood: #841818;
>   --color-crimson: #B91C1C;
>   --color-gold: #F4B316;
>   --color-gold-glow: #FFFBEB;
>   --color-gold-soft: #FEF3C7;
>   --color-sage: #9FB8AD;
>   --color-ink: #1A1A1A;
>   --color-neutral-card: #E5E7EB;
>   --color-stage-dark: #0A0A0A;
> }
> ```

---

## 5. Composant Signature : Le « Lot Mystère Switch » (Halo Années 2000)

Spécification validée par rendu navigateur (`Chrome desktop + 360px mobile`) :
- **Fond noir `#0A0A0A`** sans démarcation ovale parasite (`radial-gradient(closest-side, ...)` sur `inset: 0`).
- **18 rayons blancs vectoriels SVG nets** (zéro crénelage diagonal) contenus dans un carré centré (`aspect-ratio: 1 / 1`) masqué doucement aux bords (`closest-side`).
- **Silhouette unifiée tout en noir** d'une console portable à deux manettes latérales + gâchettes L/R + liserés discrets, détachée par un **halo blanc arrière** (`feDropShadow`).
- **Grand `?` centré** en `hwt-artz` (`#F4B316` avec contour `#FFFFFF` net).
- **Hover desktop fluide sans saut d'angle :** la vitesse de rotation accélère via Web Animations API (`updatePlaybackRate`), tandis que seule la console s'incline (`scale(1.05) rotate(-1.5deg)`) en gardant la pilule d'indice horizontale et lisible.

```html
<!-- Composant : Lot Mystère Switch (Halo Années 2000) -->
<div class="mystery-stage" tabindex="0" aria-label="Grand lot mystère à gagner au tirage au sort">
  <!-- Disque de 18 rayons blancs vectoriels nets en rotation -->
  <div class="mystery-starburst-wrap" aria-hidden="true">
    <svg class="mystery-starburst-svg" viewBox="-200 -200 400 400" xmlns="http://www.w3.org/2000/svg">
      <g fill="rgba(255, 255, 255, 0.95)">
        <polygon points="0,0 239.4,-17.6 239.4,17.6"/>
        <polygon points="0,0 230.9,65.3 218.9,98.4"/>
        <polygon points="0,0 194.7,140.4 172.1,167.3"/>
        <polygon points="0,0 134.9,198.5 104.5,216.1"/>
        <polygon points="0,0 58.9,232.7 24.3,238.8"/>
        <polygon points="0,0 -24.3,238.8 -58.9,232.7"/>
        <polygon points="0,0 -104.5,216.1 -134.9,198.5"/>
        <polygon points="0,0 -172.1,167.3 -194.7,140.4"/>
        <polygon points="0,0 -218.9,98.4 -230.9,65.3"/>
        <polygon points="0,0 -239.4,17.6 -239.4,-17.6"/>
        <polygon points="0,0 -230.9,-65.3 -218.9,-98.4"/>
        <polygon points="0,0 -194.7,-140.4 -172.1,-167.3"/>
        <polygon points="0,0 -134.9,-198.5 -104.5,-216.1"/>
        <polygon points="0,0 -58.9,-232.7 -24.3,-238.8"/>
        <polygon points="0,0 24.3,-238.8 58.9,-232.7"/>
        <polygon points="0,0 104.5,-216.1 134.9,-198.5"/>
        <polygon points="0,0 172.1,-167.3 194.7,-140.4"/>
        <polygon points="0,0 218.9,-98.4 230.9,-65.3"/>
      </g>
    </svg>
  </div>

  <!-- Halo blanc central sans bordure ovale dure -->
  <div class="mystery-core-glow" aria-hidden="true"></div>

  <!-- Silhouette noire Switch + Grand "?" centré -->
  <div class="mystery-silhouette-wrap">
    <svg class="mystery-switch-svg" viewBox="0 0 380 184" width="380" height="184" role="img"
      aria-label="Silhouette mystère d'une console portable avec deux manettes latérales">
      <defs>
        <filter id="mysteryRim" x="-18%" y="-22%" width="136%" height="144%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#FFFFFF" flood-opacity="0.92" />
          <feDropShadow dx="0" dy="0" stdDeviation="2" flood-color="#FFFFFF" flood-opacity="0.75" />
        </filter>
      </defs>

      <g filter="url(#mysteryRim)">
        <!-- Gâchettes L & R -->
        <path d="M26 30 C26 21 38 16 58 16 L70 16 L70 28 L26 34 Z" fill="#050505" stroke="rgba(255,255,255,0.55)" stroke-width="1.5" />
        <path d="M354 30 C354 21 342 16 322 16 L310 16 L310 28 L354 34 Z" fill="#050505" stroke="rgba(255,255,255,0.55)" stroke-width="1.5" />

        <!-- Silhouette unifiée tout en noir -->
        <path d="M62 22 C33 22 18 39 18 66 L18 118 C18 145 33 162 62 162 L318 162 C347 162 362 145 362 118 L362 66 C362 39 347 22 318 22 Z"
          fill="#050505" stroke="rgba(255,255,255,0.75)" stroke-width="2.2" />

        <!-- Liserés discrets de séparation des manettes -->
        <line x1="78" y1="23" x2="78" y2="161" stroke="rgba(255,255,255,0.22)" stroke-width="1.5" />
        <line x1="302" y1="23" x2="302" y2="161" stroke="rgba(255,255,255,0.22)" stroke-width="1.5" />

        <!-- Reliefs subtils sticks & boutons (ton sur ton) -->
        <circle cx="48" cy="64" r="11.5" fill="#080808" stroke="rgba(255,255,255,0.16)" stroke-width="1.3" />
        <circle cx="48" cy="102" r="3.2" fill="rgba(255,255,255,0.12)" />
        <circle cx="40" cy="110" r="3.2" fill="rgba(255,255,255,0.12)" />
        <circle cx="56" cy="110" r="3.2" fill="rgba(255,255,255,0.12)" />
        <circle cx="48" cy="118" r="3.2" fill="rgba(255,255,255,0.12)" />
        <rect x="55" y="132" width="8" height="8" rx="1.5" fill="rgba(255,255,255,0.12)" />

        <circle cx="332" cy="56" r="3.2" fill="rgba(255,255,255,0.12)" />
        <circle cx="324" cy="64" r="3.2" fill="rgba(255,255,255,0.12)" />
        <circle cx="340" cy="64" r="3.2" fill="rgba(255,255,255,0.12)" />
        <circle cx="332" cy="72" r="3.2" fill="rgba(255,255,255,0.12)" />
        <circle cx="332" cy="108" r="11.5" fill="#080808" stroke="rgba(255,255,255,0.16)" stroke-width="1.3" />
        <circle cx="318" cy="136" r="4.2" fill="rgba(255,255,255,0.12)" />
      </g>

      <!-- Grand "?" central -->
      <text x="190" y="124" text-anchor="middle" class="mystery-qmark"
        font-family="'hwt-artz', 'Impact', sans-serif" font-size="98" font-weight="700"
        fill="#F4B316" stroke="#FFFFFF" stroke-width="3.5" paint-order="stroke fill">?</text>
    </svg>

    <span class="mystery-hint-badge">Indice : un format qui se reconnaît entre mille...</span>
  </div>
</div>
```

```css
.mystery-stage {
  position: relative;
  width: 100%;
  max-width: 480px;
  min-height: 270px;
  padding: 26px 18px 22px;
  margin: 0 auto;
  background: #0A0A0A;
  border: 2.5px solid rgba(255, 255, 255, 0.22);
  border-radius: 22px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.75);
  isolation: isolate;
}

.mystery-starburst-wrap {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 145%;
  aspect-ratio: 1 / 1;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 0;
  -webkit-mask-image: radial-gradient(closest-side, #000 32%, rgba(0, 0, 0, 0.78) 62%, transparent 98%);
  mask-image: radial-gradient(closest-side, #000 32%, rgba(0, 0, 0, 0.78) 62%, transparent 98%);
}

.mystery-starburst-svg {
  width: 100%;
  height: 100%;
  display: block;
  animation: starburst-spin 42s linear infinite;
  will-change: transform;
}

.mystery-core-glow {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: radial-gradient(
    closest-side at 50% 46%,
    rgba(255, 255, 255, 0.95) 0%,
    rgba(255, 255, 255, 0.52) 36%,
    rgba(255, 255, 255, 0.14) 64%,
    transparent 95%
  );
  pointer-events: none;
  transition: transform 0.35s ease;
}

.mystery-silhouette-wrap {
  position: relative;
  z-index: 2;
  width: min(90%, 360px);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mystery-switch-svg {
  width: 100%;
  height: auto;
  display: block;
  overflow: visible;
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}

.mystery-qmark {
  transform-origin: 190px 96px;
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), filter 0.25s ease;
}

.mystery-hint-badge {
  margin-top: 14px;
  padding: 6px 14px;
  background: rgba(10, 10, 10, 0.94);
  color: #FFFFFF;
  border: 1.5px solid #F4B316;
  border-radius: 9999px;
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.02em;
  text-align: center;
  line-height: 1.3;
  transition: transform 0.25s ease, background-color 0.25s ease, color 0.25s ease;
}

@media (hover: hover) {
  .mystery-stage:hover .mystery-core-glow,
  .mystery-stage:focus-visible .mystery-core-glow {
    transform: scale(1.1);
  }
  .mystery-stage:hover .mystery-switch-svg,
  .mystery-stage:focus-visible .mystery-switch-svg {
    transform: scale(1.05) rotate(-1.5deg);
  }
  .mystery-stage:hover .mystery-qmark,
  .mystery-stage:focus-visible .mystery-qmark {
    transform: scale(1.12);
    filter: drop-shadow(0 0 10px rgba(244, 179, 22, 0.85));
  }
  .mystery-stage:hover .mystery-hint-badge,
  .mystery-stage:focus-visible .mystery-hint-badge {
    background: #F4B316;
    color: #1A1A1A;
    transform: translateY(-2px);
  }
}

@keyframes starburst-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

```js
// Accélération fluide des rayons au survol sans aucun saut d'angle CSS
document.querySelectorAll('.mystery-stage').forEach((stage) => {
  const starburst = stage.querySelector('.mystery-starburst-svg');
  const setSpeed = (rate) => {
    const anim = starburst?.getAnimations?.()[0];
    if (anim?.updatePlaybackRate) anim.updatePlaybackRate(rate);
  };
  stage.addEventListener('pointerenter', () => setSpeed(2.4));
  stage.addEventListener('pointerleave', () => setSpeed(1));
  stage.addEventListener('focusin', () => setSpeed(2.4));
  stage.addEventListener('focusout', () => setSpeed(1));
});
```

---

## 6. Catalogue des Animations Web (Hover Desktop & Scroll)

L'app mobile privilégiait les états `:active` tactiles. Sur la vitrine web, on ajoute de la profondeur desktop tout en respectant strictement `prefers-reduced-motion`.

| Élément | Déclencheur | Effet exact | Règle de sobriété |
|---|---|---|---|
| **`.btn-expedition`** | `:hover` desktop | `translateY(-3px)` + ombre de `4px` → `7px`. | Rapide (`160ms`), aucun rebond infini. |
| **Collage Hero** | Mouvement souris (`mousemove` desktop) | Léger décalage parallaxe (`±6px`) entre photo, mockup smartphone et sticker. | Désactivé sous `1024px` et si `reduced-motion`. |
| **`.fan-deck` (Duo Famille)** | `:hover` sur la carte | Les deux cartes grises d'arrière-plan s'ouvrent de `±4deg` vers `±7.5deg`. | Le texte de la carte centrale reste droit (`0deg`). |
| **Photos Lens (Section 5)** | `:hover` sur la tuile | L'image zoome doucement (`scale(1.05)`) dans un cadre `overflow: hidden` et l'étiquette passe Or `#F4B316`. | Aucune translation de carte voisine. |
| **Boîte Dobble Lens** | `:hover` | `transform: perspective(700px) rotateY(-6deg) rotateZ(-2deg) scale(1.04)`. | Transition `0.3s cubic-bezier(0.22, 1, 0.36, 1)`. |
| **Lot Mystère Switch** | Continu + `:hover` | Rayons SVG `42s` → `2.4x` au hover sans saut + halo agrandi + `?` lumineux. | Rotation lente, zéro flash stroboscopique. |
| **Clé Antique (Section 4)** | Scroll + `:hover` étapes | Les 6 fragments brisés passent du gris `#D1D5DB` à l'or `#F4B316` avec éclat `keyShardSnap`. | Tous les fragments visibles d'office si `reduced-motion`. |
| **Blocs `[data-reveal]`** | Scroll (`IntersectionObserver`) | Entrée douce `translateY(20px)` → `0` + `opacity` (stagger `70ms`). | Déclenché une seule fois (`unobserve`). |
| **CTA Mobile Sticky** | Scroll (`#hero` / `#inscription`) | Pilule fixe en bas (`< 768px`) apparaissant après `#hero` et masquée dès l'entrée de `#inscription`. | Masqué sur desktop (`>= 768px`) et sans translation si `reduced-motion`. |

### Code JS complet (Scroll Reveal + Clé Antique au Scroll + CTA Mobile Sticky)

```html
<!-- Hook HTML du CTA Mobile Sticky (à placer avant </body> ; requiert id="hero" et id="inscription") -->
<div id="mobile-sticky-cta" class="mobile-sticky-cta" aria-hidden="true" inert>
  <a href="#inscription" class="btn-expedition btn-expedition--gold mobile-sticky-cta__btn">
    Réserver notre kit →
  </a>
</div>
```

```js
document.addEventListener('DOMContentLoaded', () => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealEls = document.querySelectorAll('[data-reveal]');
  const keyShards = document.querySelectorAll('[data-key-shard]');

  const forgeUpTo = (upTo) => {
    keyShards.forEach((shard) => {
      if (Number(shard.getAttribute('data-key-shard')) <= upTo) {
        shard.classList.add('is-forged');
      }
    });
  };

  if (prefersReduced || !('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('is-revealed'));
    keyShards.forEach((el) => el.classList.add('is-forged'));
  } else {
    // 1. Apparition douce des sections / cartes
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.getAttribute('data-reveal-delay') || '0';
            entry.target.style.transitionDelay = `${delay}ms`;
            entry.target.classList.add('is-revealed');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -36px 0px' }
    );
    revealEls.forEach((el) => revealObserver.observe(el));

    // 2. Forge progressive des fragments de la Clé Antique (scroll & survol des 4 cartes data-forge-step="1|2|4|6")
    const stepTriggers = document.querySelectorAll('[data-forge-step]');
    if (stepTriggers.length && keyShards.length) {
      const forgeObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              forgeUpTo(Number(entry.target.getAttribute('data-forge-step')) || 0);
              forgeObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.45 }
      );
      stepTriggers.forEach((el) => {
        forgeObserver.observe(el);
        el.addEventListener('pointerenter', (event) => {
          if (event.pointerType !== 'touch') {
            forgeUpTo(Number(el.getAttribute('data-forge-step')) || 0);
          }
        });
        el.addEventListener('focusin', () => {
          forgeUpTo(Number(el.getAttribute('data-forge-step')) || 0);
        });
      });
    }
  }

  // 3. CTA Mobile Sticky : apparaît une fois #hero dépassé et reste masqué dès que #inscription est visible ou déjà dépassé
  const stickyCta = document.getElementById('mobile-sticky-cta');
  const heroSection = document.getElementById('hero');
  const inscriptionSection = document.getElementById('inscription');

  if (stickyCta && heroSection && inscriptionSection) {
    let rafPending = false;

    const syncStickyCta = () => {
      rafPending = false;
      const heroRect = heroSection.getBoundingClientRect();
      const inscriptionRect = inscriptionSection.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const isPastHero = heroRect.bottom <= 0;
      const isInscriptionReachedOrPassed = inscriptionRect.top < viewportHeight;
      const shouldShow = isPastHero && !isInscriptionReachedOrPassed;

      stickyCta.classList.toggle('is-visible', shouldShow);
      stickyCta.setAttribute('aria-hidden', String(!shouldShow));
      if ('inert' in stickyCta) {
        stickyCta.inert = !shouldShow;
      }
    };

    const scheduleStickySync = () => {
      if (rafPending) return;
      rafPending = true;
      window.requestAnimationFrame(syncStickyCta);
    };

    syncStickyCta();
    window.addEventListener('scroll', scheduleStickySync, { passive: true });
    window.addEventListener('resize', scheduleStickySync, { passive: true });

    if ('IntersectionObserver' in window) {
      const stickyObserver = new IntersectionObserver(scheduleStickySync, { threshold: 0 });
      stickyObserver.observe(heroSection);
      stickyObserver.observe(inscriptionSection);
    }
  }
});
```

```css
[data-reveal] {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}
[data-reveal].is-revealed {
  opacity: 1;
  transform: translateY(0);
}

/* Éclat et transition dorée des fragments de la Clé Antique */
@keyframes keyShardSnap {
  0% {
    transform: scale(0.86) translateY(-6px);
    filter: drop-shadow(0 0 0 rgba(244, 179, 22, 0));
  }
  45% {
    transform: scale(1.06) translateY(0);
    filter: drop-shadow(0 0 12px rgba(244, 179, 22, 0.9));
  }
  100% {
    transform: scale(1) translateY(0);
    filter: drop-shadow(0 0 0 rgba(244, 179, 22, 0));
  }
}

.antique-key-svg,
svg:has([data-key-shard]) {
  overflow: visible;
}
[data-key-shard] {
  transform-box: fill-box;
  transform-origin: center;
}
[data-key-shard] path.shard-fill {
  fill: #D1D5DB;
  stroke: #6B7280;
  transition: fill 0.4s ease, stroke 0.4s ease;
}
[data-key-shard].is-forged {
  animation: keyShardSnap 0.9s cubic-bezier(0.22, 1, 0.36, 1) 1 forwards;
}
[data-key-shard].is-forged path.shard-fill {
  fill: #F4B316;
  stroke: #1A1A1A;
}

/* CTA Mobile Sticky (pilule fixe en bas d'écran < 768px) */
.mobile-sticky-cta {
  position: fixed;
  left: 16px;
  right: 16px;
  bottom: calc(14px + env(safe-area-inset-bottom, 0px));
  z-index: 45;
  display: flex;
  justify-content: center;
  pointer-events: none;
  visibility: hidden;
  opacity: 0;
  transform: translateY(calc(100% + 24px + env(safe-area-inset-bottom, 0px)));
  transition:
    transform 0.28s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.22s ease,
    visibility 0s linear 0.28s;
}
.mobile-sticky-cta.is-visible {
  pointer-events: auto;
  visibility: visible;
  opacity: 1;
  transform: translateY(0);
  transition:
    transform 0.28s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.22s ease,
    visibility 0s linear 0s;
}
.mobile-sticky-cta__btn {
  width: 100%;
  max-width: 420px;
  border-radius: 9999px;
  padding: 13px 22px;
  font-size: 17px;
  box-shadow: var(--shadow-l1);
}
@media (min-width: 768px) {
  .mobile-sticky-cta {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  [data-reveal] { opacity: 1; transform: none; transition: none; }
  [data-key-shard].is-forged { animation: none !important; }
  [data-key-shard] path.shard-fill { transition: none; }
  .mobile-sticky-cta,
  .mobile-sticky-cta.is-visible { transition: none; transform: none; }
  .mystery-starburst-svg, .idle-sway { animation: none !important; }
  .mystery-core-glow,
  .mystery-switch-svg,
  .mystery-qmark,
  .mystery-hint-badge,
  .fan-deck::before,
  .fan-deck::after { transition: none; }
  * { scroll-behavior: auto !important; }
}
```

---

## 7. Raccordement Technique entre la Vitrine et l'Application PWA

> **État constaté dans le dépôt actuel de l'application (`expedition-lens`) :**  
> - Les routes de l'app sont `/` (`GameRouter`) et `/test-qr` (outil interne).  
> - Le composant `App\Livewire\Auth\LoginRegister` crée le compte d'équipe (`name`, `team_name`, `email`, `password` min 6 caractères, `avatar='gali'`, `reward_token`, `current_step=1`, `phase='GUESSING_LOCATION'`) uniquement au moment où la famille démarre le jeu. Il n'existe **pas** de module de réservation de créneau/kit dans l'app.

Pour connecter la vitrine de pré-inscription à l'app dans un délai court :

### Option A — Découplée & Rapide (Recommandée si délai court)
1. Le site vitrine gère uniquement la **réservation du kit physique** (via formulaire léger côté vitrine, webhook email ou formulaire externe stylisé).
2. Le parent reçoit par email son **récapitulatif de créneau** pour retirer son kit à l'Office de Tourisme + le **lien d'accès à l'application** (`https://[domaine-app]/`).
3. Le jour J, le parent ouvre ce lien (ou scanne le QR imprimé dans le kit) et crée son compte d'équipe en 15 secondes dans l'app avant de lancer la boussole.

### Option B — Synchronisée (Si base/API partagée avec Laravel)
1. Le formulaire vitrine envoie une requête vers une future API Laravel créant la ligne `users` + une table `kit_reservations` (`pickup_date`, `pickup_slot`, `kids_count`).
2. Le jour J, le parent clique directement sur *« Connexion équipe »* dans l'app avec ses identifiants déjà créés.

---

## 8. Checklist Assets (COM / Créa Num / Dev), Perf & Points à Valider

### 8.1 Assets à récupérer auprès des pôles

| Pôle | Asset demandé | Format & Spécification recommandée |
|---|---|---|
| **COM** | Affiche officielle de l'événement | `.webp` haute définition (version pleine pour Lightbox + vignette) |
| **COM** | Visuels du **Dobble Édition Lens** | Packshot boîte + 2/3 cartes étalées (`.webp` fond transparent) |
| **COM** | Textes légaux & Règlement du tirage au sort | Page ou PDF hébergé (obligatoire pour un jeu-concours en France) |
| **Créa Num** | **Vidéo Teaser** de l'événement | `.mp4` (H.264) + `.webm` (< 12 Mo pour 4G) + poster `.webp` (`1280×720`) + sous-titres `.vtt` |
| **Créa Num** | Photos terrain à Lens (6–8 clichés) | Familles/explorateurs, carte + loupe en main, sites de Lens (`.webp` < 250 Ko chacune) |
| **App / Dev** | Capture smartphone de la Boussole | Capture réelle de l'app en Phase B (`WALKING_TO_TARGET`) pour le mockup du Hero |

### 8.2 SEO & Social Ads (Trafic parents depuis Facebook / Instagram)
- **OpenGraph & WhatsApp :** `og:title`, `og:description`, `og:image` (`1200×630` reprenant l'affiche + collab) pour que tout partage entre parents génère une vignette propre.
- **Performance mobile :** `loading="lazy"` sur toutes les images sous le Hero, poids images optimisés en `.webp`, vidéo chargée uniquement au clic.
- **Données structurées :** JSON-LD `Event` avec lieu Lens, dates officielles et organisateur Lens Tourisme.

### 8.3 Points `[À CONFIRMER]` avec l'équipe avant mise en ligne
- [ ] **Dates définitives :** valider *« 5 au 18 juillet 2027 »* (mentionné dans `storytelling.pdf`) ou ajuster selon calendrier réel.
- [ ] **Distance réelle & durée annoncée :** les 6 coordonnées GPS actuelles de l'app totalisent **~8,6 km à vol d'oiseau (~10 km à pied en incluant les Terrils de Loos-en-Gohelle et le retour à l'Office de Tourisme)**. Confirmer s'il s'agit d'un parcours demi-journée (~3h–4h à pied) ou si un transport (bus Tadao / voiture) est conseillé pour l'étape Terrils afin d'afficher une durée exacte aux parents !
- [ ] **Tarif / Gratuité / Caution :** kit gratuit sur réservation ou payant / caution pour la loupe ?
- [ ] **Lieu et horaires exacts de retrait du kit :** Office de Tourisme de Lens (Place Jean-Jaurès) et plages horaires d'ouverture.
- [ ] **Accessibilité poussettes / météo :** préciser l'accessibilité du point animateur sur l'étape Terrils et le plan B pluie.
- [ ] **Quota & dotation officielle :** stock de boîtes *Dobble Édition Lens* (1 par équipe ayant terminé les 6 étapes ?) et liste légale exacte des lots du tirage au sort (valider l'usage de la silhouette Switch).
- [ ] **Canal technique d'inscription :** Option A (formulaire vitrine indépendant) vs Option B (API commune Laravel).

---

## 9. Annexe A — Kit d'Export Autonome (SVG de l'App & Fichiers à Copier)

Pour démarrer le nouveau dépôt sans revenir fouiller dans `expedition-lens` :

### 9.1 Fichiers statiques à copier depuis `public/` de l'app
- `public/lens-tourisme-logo-e1673958887436.webp` (Logo Lens Tourisme)
- `public/asmodee_logo.webp` (Logo Asmodee)
- `public/icon.svg` (Icône / favicon de l'expédition)

### 9.2 SVG de l'Emblème « Lampe Cœur » (Section 3.A)

```html
<svg viewBox="0 0 32 32" width="40" height="40" fill="none" aria-hidden="true">
  <path d="M11 6 H21" stroke="#1A1A1A" stroke-width="2.4" stroke-linecap="round"/>
  <path d="M13 6 V9 H19 V6" stroke="#1A1A1A" stroke-width="2" fill="#9CA3AF"/>
  <rect x="9" y="9" width="14" height="14" rx="3" fill="#FFFBEB" stroke="#1A1A1A" stroke-width="2.2"/>
  <path d="M16 20.5 C16 20.5 11.5 17.5 11.5 14.3 C11.5 12.8 12.7 11.8 14 11.8 C14.9 11.8 15.6 12.3 16 13 C16.4 12.3 17.1 11.8 18 11.8 C19.3 11.8 20.5 12.8 20.5 14.3 C20.5 17.5 16 20.5 16 20.5 Z" fill="#F4B316" stroke="#841818" stroke-width="1.5"/>
  <rect x="8" y="23" width="16" height="4" rx="1.5" fill="#841818" stroke="#1A1A1A" stroke-width="2"/>
</svg>
```

### 9.3 SVG de la « Clé Antique Verticale à 6 Fragments » (Section 4)
*(Base du grenier déjà dorée ; les groupes `data-key-shard="1..6"` s'illuminent via la classe `.is-forged` au scroll.)*

```html
<svg class="antique-key-svg" viewBox="0 0 130 350" width="130" height="350" role="img" aria-label="Clé antique de Gali à 6 fragments">
  <!-- Silhouette métallique de base -->
  <path d="M 52 12 C 58 12 62 17 60 23 C 80 26 94 46 94 74 C 94 94 82 108 69 114 L 66 121 L 73 127 L 65 135 L 71 143 L 63 152 L 63 262 L 114 262 L 114 277 L 95 277 L 95 290 L 116 290 L 116 307 L 89 307 L 89 318 L 107 318 L 107 330 L 63 330 L 63 335 Q 63 343 52 343 Q 41 343 41 335 L 41 152 L 33 143 L 39 135 L 31 127 L 38 121 L 35 114 C 22 108 10 92 10 66 C 10 42 24 26 44 23 C 42 17 46 12 52 12 Z M 52 54 C 43 44 29 52 30 68 C 32 80 45 89 52 96 C 59 89 69 81 72 72 C 73 69 74 66 74 63 C 74 49 60 44 52 54 Z"
    fill="#D1D5DB" fill-rule="evenodd" stroke="#6B7280" stroke-width="2.2" stroke-linejoin="round" />

  <!-- Pièce du grenier (toujours dorée) -->
  <g>
    <path d="M 52 12 C 58 12 62 17 60 23 L 57 34 L 51 41 L 52 54 C 43 44 29 52 30 68 L 21 63 L 17 71 L 10 66 C 10 42 24 26 44 23 C 42 17 46 12 52 12 Z"
      fill="#F4B316" stroke="#1A1A1A" stroke-width="2" stroke-linejoin="round" />
    <path d="M 21 53 C 22 39 33 30 46 28" fill="none" stroke="#FEF3C7" stroke-width="2" stroke-linecap="round" />
  </g>

  <!-- 6 fragments à forger au scroll -->
  <g data-key-shard="1">
    <path class="shard-fill" d="M 60 23 C 80 26 94 46 94 74 L 85 78 L 80 68 L 72 72 C 73 69 74 66 74 63 C 74 49 60 44 52 54 L 51 41 L 57 34 L 60 23 Z" stroke-width="1.8" stroke-linejoin="round" />
  </g>
  <g data-key-shard="2">
    <path class="shard-fill" d="M 10 66 L 17 71 L 21 63 L 30 68 C 32 80 45 89 52 96 C 59 89 69 81 72 72 L 80 68 L 85 78 L 94 74 C 94 94 82 108 69 114 L 56 122 L 49 115 L 35 114 C 22 108 10 92 10 66 Z" stroke-width="1.8" stroke-linejoin="round" />
  </g>
  <g data-key-shard="3">
    <path class="shard-fill" d="M 35 114 L 49 115 L 56 122 L 69 114 L 66 121 L 73 127 L 65 135 L 71 143 L 63 152 L 63 178 L 55 171 L 49 184 L 41 166 L 41 152 L 33 143 L 39 135 L 31 127 L 38 121 L 35 114 Z" stroke-width="1.8" stroke-linejoin="round" />
  </g>
  <g data-key-shard="4">
    <path class="shard-fill" d="M 41 166 L 49 184 L 55 171 L 63 178 L 63 224 L 54 238 L 47 229 L 41 242 L 41 166 Z" stroke-width="1.8" stroke-linejoin="round" />
  </g>
  <g data-key-shard="5">
    <path class="shard-fill" d="M 41 242 L 47 229 L 54 238 L 63 224 L 63 262 L 74 262 L 71 276 L 78 290 L 69 306 L 75 320 L 68 330 L 63 330 L 63 335 Q 63 343 52 343 Q 41 343 41 335 L 41 242 Z" stroke-width="1.8" stroke-linejoin="round" />
  </g>
  <g data-key-shard="6">
    <path class="shard-fill" d="M 74 262 L 114 262 L 114 277 L 95 277 L 95 290 L 116 290 L 116 307 L 89 307 L 89 318 L 107 318 L 107 330 L 68 330 L 75 320 L 69 306 L 78 290 L 71 276 L 74 262 Z" stroke-width="1.8" stroke-linejoin="round" />
  </g>
</svg>
```
