# Handoff : mascotte Ludigo « Zoé » + gamme de couleurs

## Overview
Ludigo est une app de chasses au trésor / quêtes pour enfants (cible 6-8 ans, jouable en famille).
Ce bundle livre :
1. **Zoé**, la mascotte retenue — une loupe vivante — dessinée comme icône d'app et déclinée en trois humeurs réutilisables dans l'app (curieuse, malicieuse = donne un indice, fière = trésor trouvé).
2. **La gamme de couleurs Ludigo** dérivée de cette mascotte, avec les rôles UI et les paires de contraste validées.
3. **Lumi**, une seconde piste (lanterne vivante, bleu nuit / ambre) conservée en parallèle — non retenue pour l'icône, réutilisable comme thème nuit ou seconde mascotte.

## About the Design Files
Les fichiers de ce bundle sont des **références de design réalisées en HTML** : des prototypes qui montrent l'intention visuelle exacte, **pas du code de production à copier tel quel**.
La tâche est de **recréer ces designs dans l'environnement existant de l'app** (React Native, SwiftUI, Flutter, React web… selon le codebase) avec ses patterns et sa librairie de composants. Si aucun environnement n'existe encore, choisir le framework le plus adapté au projet et y implémenter les designs.

Les mascottes sont dessinées en CSS pur (formes positionnées en absolu, `border-radius`, `clip-path: path()`, dégradés radiaux). **En production, la bonne cible est un SVG** (ou un composant vectoriel natif) : les chemins et coordonnées ci-dessous sont donnés dans un système 340×340 directement transposable en `viewBox="0 0 340 340"`.

## Fidelity
**High-fidelity.** Couleurs, géométries, rayons et proportions sont définitifs et doivent être reproduits au pixel. Seule la technique de rendu doit changer (CSS → SVG / vectoriel natif).

## Screens / Views

### 1. Icône d'app — Zoé (fichier `Loupe Icon.dc.html`)
- **Purpose** : icône de l'app sur l'écran d'accueil ; sert aussi d'avatar de la mascotte dans l'app.
- **Canvas** : 340 × 340 px, `border-radius: 78px`, `overflow: hidden` (masque iOS/Android appliqué par-dessus ; tous les éléments doivent rester à ≥ 22px du bord).
- **Ordre de superposition** (du fond vers l'avant) :
  1. **Fond** — 340×340, `radial-gradient(66% 60% at 50% 40%, #1C6B53 0%, #145244 58%, #0D3B30 100%)` sur base `#12503F`.
  2. **Cercle décoratif** — 290×290 centré en (170, 150), `border: 2px solid rgba(160,240,215,0.14)`, `border-radius: 50%`.
  3. **Manche** — rectangle 36 × 196, `border-radius: 18px`, `#C98A4D`, pivot **au centre de la lentille (170, 146)** (`transform-origin: top center`, `rotate(-38deg)`). Son axe passe donc par le centre de la lentille : c'est ce qui fait lire « vraie loupe ». La partie interne (0 → 106px, soit le rayon de la monture) est masquée par la monture dessinée après.
     - Reflet : 9 × 62, `border-radius: 5px`, `rgba(255,255,255,0.2)`, à (6, 118) dans le repère du manche.
     - Bague de préhension : 36 × 26, `#A86C34`, à (0, 128) dans le repère du manche.
  4. **Monture** — cercle 212 × 212 à (62, 40), `#39C3A2`.
  5. **Lentille** — cercle 180 × 180 à (78, 56), `#EAFAF4`, `overflow: hidden`. Contenu (coordonnées **relatives à la lentille**) :
     - Volume : `radial-gradient(72% 62% at 44% 38%, #FFFFFF 0%, #E4F6EE 60%, #CFEADE 100%)`.
     - Reflet : 56 × 96 à (14, 12), `border-radius: 50%`, `linear-gradient(150deg, rgba(255,255,255,0.9), rgba(255,255,255,0))`, `rotate(26deg)`.
     - Joues (optionnelles, prop `blush`) : 46 × 30 à (22, 110) et (112, 110), `radial-gradient(closest-side, rgba(255,132,96,0.4), transparent)`.
     - Œil gauche : 36 × 42 à (36, 62), `border-radius: 50%`, `#123A30` + reflet 13 × 13 à (44, 70), `#EAFAF4`.
     - Œil droit : idem à (108, 62) / reflet (116, 70).
     - Clin d'œil (humeur « malicieuse ») : remplace l'œil droit — 40 × 22 à (106, 72), `border-top: 11px solid #123A30`, `border-radius: 26px 26px 0 0`.
     - Bouche par défaut (croissant) : 58 × 32 à (60, 118), `#123A30`,
       `clip-path: path('M2,2 C6,20 15,29 29,29 C43,29 52,20 56,2 C50,15 41,21 29,21 C17,21 8,15 2,2 Z')`.
     - Bouche « fière » (rire) : 62 × 46 à (58, 114), `#123A30`,
       `clip-path: path('M3,7 C16,0 46,0 59,7 C59,32 47,45 31,45 C15,45 3,32 3,7 Z')`
       + langue 30 × 20 à (74, 140), `border-radius: 10px 10px 15px 15px`, `#FF7A6B`.
  6. **Étincelles** (prop `sparks`) — cercles `#A7F0D8` : 12px à (40, 274), 9px à (296, 78), 8px à (36, 64).
- **Ce qu'il ne faut pas ajouter** : ni bras, ni mains (testés puis retirés — ils cassaient la lecture de la loupe et sortaient du masque). Zoé s'exprime par les yeux, la bouche et le mouvement du manche.

### 2. Humeurs de la mascotte (dans l'app)
Un seul asset paramétré, trois états :
| Humeur | Déclencheur produit | Différences |
|---|---|---|
| `curieux` (défaut) | idle, écran d'accueil, en marche | 2 yeux ouverts + bouche croissant |
| `malicieux` | Zoé donne un indice | œil droit en clin d'œil + bouche croissant |
| `fier` | trésor trouvé / étape validée | 2 yeux ouverts + bouche ouverte + langue |
Props additionnelles : `blush` (joues, défaut activé), `sparks` (étincelles, défaut activé — les couper quand la mascotte est posée sur un fond clair).

### 3. Page de référence (fichier `Ludigo Loupe.dc.html`)
Planche de présentation : icône 340px, contrôle de lisibilité à 120 / 76 / 44 px, les trois humeurs, et comparaison avec Lumi. Sert de cible visuelle pour la recette.

### 4. Gamme de couleurs (fichier `Ludigo Palette.dc.html`)
Nuancier complet avec rôles UI et paires de contraste validées. Voir « Design Tokens ».

## Interactions & Behavior
Les fichiers livrés sont statiques ; comportements attendus côté app :
- **Idle** : léger flottement de la mascotte, ±4px verticaux, 2,4 s, `ease-in-out`, en boucle.
- **Indice** : passage en `malicieux`, petite bascule du manche (rotation -38° → -30° → -38°, 500 ms, `cubic-bezier(0.34,1.56,0.64,1)`), étincelles qui apparaissent en cascade (délais 0 / 80 / 160 ms).
- **Célébration** : passage en `fier`, scale 1 → 1.12 → 1 (450 ms, ressort), étincelles `#FFC94D` projetées.
- **Échec / réessai** : rester en `curieux`, secousse horizontale ±6px, 300 ms — ne jamais dessiner de mascotte triste ou fâchée (public 6-8 ans).
- **Transitions d'humeur** : croisement de 120 ms, jamais de coupe sèche.
- **Réglages système** : respecter `prefers-reduced-motion` (supprimer flottement et ressorts, garder les changements d'état).
- **Hit target** : si la mascotte est tapable (demander un indice), zone tactile ≥ 44 × 44 px.

## State Management
- `mascotMood: 'curious' | 'playful' | 'proud'` — piloté par les événements de quête (indice demandé, étape validée).
- `sparksEnabled: boolean` — dérivé du fond de l'écran hôte (sombre = true).
- `reduceMotion: boolean` — depuis les préférences système.
Aucun fetch requis : l'asset est local.

## Design Tokens

### Couleurs — noyau
| Token | Hex | Usage |
|---|---|---|
| `forest-950` | #0D3B30 | vignette, ombres, bords d'écran |
| `forest-900` | #12503F | fond d'écran de jeu, barres, fond de l'icône |
| `forest-800` | #145244 | étape intermédiaire du dégradé de fond |
| `forest-700` | #1C6B53 | cartes sur fond sombre, halo |
| `mint-700` | #1F8F77 | menthe sur fond clair : texte, liens, état pressé |
| `mint-500` | #39C3A2 | mascotte (monture), bouton primaire, progression |
| `mint-300` | #6FDCC0 | survol / états actifs de la menthe |
| `mint-200` | #A7F0D8 | étincelles, texte secondaire sur forest |
| `lens-50` | #EAFAF4 | lentille, bulles d'indice, surfaces claires |
| `lens-100` | #E4F6EE | volume de la lentille |
| `lens-200` | #CFEADE | bord bas de la lentille |
| `ink-900` | #123A30 | yeux, bouche, texte sur surfaces claires |
| `brass-500` | #C98A4D | manche, objets de quête, badges |
| `brass-700` | #A86C34 | bague du manche, ombre du laiton |

### Couleurs — signaux
| Token | Hex | Usage |
|---|---|---|
| `gold-400` | #FFC94D | trésor trouvé, étoiles, célébration |
| `coral-400` | #FF8460 | joues (à 40% d'opacité), chaleur, « presque ! » |
| `coral-500` | #FF7A6B | langue de la mascotte |
| `alert-600` | #D9503F | erreur, temps écoulé (usage rare) |
| `paper-100` | #F4F1E8 | écrans hors-jeu (réglages, espace parents) |
| `text-900` | #2B2519 | texte sur paper |
| `text-600` | #5C5647 | texte secondaire sur paper |
| `text-500` | #6A6354 | labels, légendes sur paper (minimum lisible) |

### Contraste
Paires validées (≥ 4.5:1) : lens-50 ou mint-200 sur forest-900 ; ink-900 sur lens-50 ; forest-950 sur mint-500 ; text-900 sur gold-400 ; text-500 sur paper-100.
À éviter : blanc pur sur mint-500 (~2.1:1) ; mint-500 en couleur de texte sur paper-100 (~2.3:1) → utiliser mint-700.

### Rayons
`radius-app-icon: 78px` (sur 340) · `radius-xl: 50px` · `radius-lg: 18px` · `radius-md: 16px` · `radius-pill: 999px`.
Règle : la monture et la lentille sont des cercles parfaits, tout le reste est généreusement arrondi — aucun angle vif dans l'app.

### Espacement
Échelle 4 : 4 / 8 / 12 / 16 / 24 / 32 / 40 / 48 px.

### Typographie
Nunito (700 et 900 utilisés ; 400 pour le corps de texte long).
- Titre écran : 38-40px / 900 / line-height 1.05
- Titre de section : 12px / 900 / `letter-spacing: 0.18em` / majuscules
- Corps : 16px / 400-700 / line-height 1.55
- Légende : 13-14px / 700
Minimum absolu 13px ; jamais moins de 16px pour une consigne de jeu lue par un enfant.

### Ombres
`shadow-icon: 0 22px 44px rgba(18,80,63,0.30)` · `shadow-card: 0 3px 10px rgba(43,37,25,0.08)` · `shadow-float: 0 16px 32px rgba(18,80,63,0.28)`.

## Assets
Aucune image bitmap, aucune icône tierce, aucune police hors Nunito (Google Fonts). Tout est vectoriel / CSS et redessinable en SVG à partir des coordonnées ci-dessus. Les exports d'icône (1024, 512, 192, 180, 120, 76, 44 px) se génèrent depuis le SVG 340×340 — vérifier la lisibilité à 44px : la monture menthe et les deux yeux doivent rester identifiables.

## Files
| Fichier | Contenu |
|---|---|
| `Loupe Icon.dc.html` | **La mascotte retenue** : icône + humeurs paramétrables |
| `Ludigo Loupe.dc.html` | Planche de présentation Zoé (icône, tailles réelles, humeurs, comparaison) |
| `Ludigo Palette.dc.html` | Nuancier complet, rôles et contrastes |
| `Lumi Icon.dc.html` | Piste secondaire : lanterne vivante (bleu nuit / ambre) |
| `Ludigo Lumi.dc.html` | Planche de présentation Lumi + 6 formes de bouche |
| `support.js` | Runtime nécessaire pour ouvrir les fichiers `.dc.html` dans un navigateur |

Ouvrir n'importe quel `.dc.html` directement dans un navigateur (garder `support.js` à côté).

## Palette secondaire — Lumi
Bleu nuit `#22376B` / `#35569A`, ambre `#E39A2C`, verre `#FFD977` / `#FFF0BD`, encre `#22376B`.
Utilisable comme thème « nuit » ou pour une seconde mascotte — **ne jamais mélanger** vert et bleu nuit dans un même écran.
