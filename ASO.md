# ASO Ludigo — kit prêt à coller dans App Store Connect

Rédigé le 7 septembre 2026, après le renommage Findaro → Ludigo. Remplace tout kit ASO antérieur (celui référencé dans `HANDOFF.md` comme "artifact Claude publié séparément" n'était plus accessible depuis ce compte — ce fichier vit désormais dans le repo pour ne plus jamais être perdu).

Toutes les valeurs ci-dessous sont vérifiées caractère par caractère contre les limites Apple (script Python, pas de comptage à l'œil).

# v1.1 — destination Trajet (16/10/2026, pour les vacances de la Toussaint)

À coller dans App Store Connect pour la version 1.1. Longueurs vérifiées par script.

**Nouveautés de cette version (What's New, 4000 car. max)** — 301 car. :
```
Nouveau : la destination Trajet !
Voiture, train ou car : 3 nouveaux carnets de 44 trouvailles à repérer par la fenêtre, pour transformer les longs trajets de vacances en chasse au trésor. Pensé pour se jouer les yeux dehors (idéal contre le mal des transports) et sans jamais distraire le conducteur.
```

**Texte promotionnel (170 car. max, modifiable sans revalidation)** — en deux temps, pour ne jamais annoncer Trajet avant que la v1.1 soit en ligne :

1. **Dès maintenant, sur la v1.0** (147 car.) :
```
Vacances de la Toussaint : chaque balade, chaque musée devient une chasse au trésor ! Prêt en 10 secondes, 100 % hors ligne, zéro pub, zéro compte.
```
2. **Dès que la v1.1 est validée** (142 car.) :
```
Nouveau pour les vacances : le carnet Trajet ! En voiture ou en train, fini le « on arrive quand ? ». 100 % hors ligne, zéro pub, zéro compte.
```
Après les vacances (03/11), retirer la mention « vacances ». Rappel : ce texte n'est pas indexé par la recherche, il sert seulement à convaincre sur la fiche.

**Événement intégré « Spécial vacances » (App Store Connect > Événements intégrés)**

- Nom (30 car. max), 27 car. : `Chasse au trésor en voiture`. Variante plus « événement » : `Spécial vacances : en route !` (29 car.).
- Description courte (50 car. max), 42 car. : `Fini le « on arrive quand ? » des vacances`
- Description longue (120 car. max), 117 car. : `Voiture, train ou car : 3 carnets de trouvailles à repérer par la fenêtre pour occuper les enfants. 100 % hors ligne.`
- Type de badge : **Mise à jour majeure** (Major Update). Objectif : attirer de nouveaux utilisateurs, pertinent pour tous.
- Dates : début dès la validation de la v1.1, fin le 02/11/2026 au soir (fin des vacances de la Toussaint). Publication possible jusqu'à 14 jours avant le début.
- Visuels : carte 16:9 et page détail 9:16 (vérifier les tailles exactes demandées dans App Store Connect). Idée : Zoé sur le capot d'une voiture, route et éoliennes, sans texte incrusté important.
- L'événement ne peut être en ligne que si la v1.1 (qui contient Trajet) l'est : le soumettre avec la version ou juste après sa validation.

**Nom (30 car. max)** — 25 car. Singulier, comme les parents le tapent :
```
Ludigo : chasse au trésor
```

**Sous-titre (30 car. max)** — 29 car. (choix de Jessica du 16/10/2026) :
```
Jeu de piste balade & voiture
```
Pourquoi « balade » plutôt que « rando » : plus large (parc, forêt, ville, pas seulement la montagne) et plus naturel pour des familles avec de jeunes enfants. « Jeu de piste » reste en entier, c'est l'expression la plus précieuse. Apple ignore « & ». Alternatives écartées : `Jeu de piste : rando, voiture` (29 car.), `Jeu de piste en rando, voiture` (tournure bancale).

**Mots-clés français (100 car. max)** — 98 car. Aucun mot répété du nom ou du sous-titre (`balade`, passé dans le sous-titre, est remplacé par `rando`, qu'Apple ne relie pas toujours à `randonnée`). Jamais `gratuit` ni aucune mention de prix : interdit par la règle 2.3.7 des App Review Guidelines (pas d'information tarifaire dans les métadonnées). Attention, l'ancien champ de la v1.0 contenait `gratuit`, d'où son retrait :
```
randonnée,rando,sortie,enfant,vacances,occuper,montagne,trajet,musée,ville,activité,rallye,famille
```

**Données Apple Ads (relevé du 16/10/2026, France, popularité sur 5)** : `jeux enfants` 2/5 ; tout le reste à 1/5 : chasse au trésor, chasse aux trésors, jeu de piste, jeu voiture enfant, jeux voiture, jeux pour la voiture, occuper enfant, randonnée, rando, activité enfant… Pour comparaison, `alltrails` 3/5 et `instagram` 5/5. L'échelle est trop grossière pour départager nos mots-clés, mais elle montre que **toute la niche a un volume de recherche faible sur l'App Store** : l'ASO seul ne suffira pas, l'acquisition hors App Store (Google, Pinterest, réseaux sociaux) est indispensable. Les requêtes suggérées contiennent souvent l'âge (« jeu enfant 5 ans »). Enchère suggérée par Apple : 2,46 € par tap (cher pour une app gratuite non monétisée).

**Localisation Anglais (Royaume-Uni), indexée aussi sur l'App Store français** (selon les guides ASO d'Appfigures et AppTweak, non confirmé par Apple) : ouvrir cette langue dans App Store Connect et y mettre des mots **français**, pour avoir 100 caractères de mots-clés en plus. Mots-clés (99 car.) :
```
enquête,découverte,promenade,visite,nature,observation,dehors,train,autoroute,route,week-end,loisir
```
Nom de cette localisation (29 car.) : `Ludigo : jeu de piste famille` · Sous-titre (26 car.) : `Chasse aux trésors enfants`

**Description longue (live)** : corriger la faute « CHASSE AU TRÉSORS » → « CHASSE AU TRÉSOR ».

**Description longue** : dans la v3 ci-dessous, remplacer « Montagne, Musée d'art ou Ville » par « Montagne, Musée d'art, Ville ou Trajet », et « 9 carnets différents (3 par type de lieu) » par « 12 carnets différents (3 par type de lieu) ». Ajouter « un long trajet en voiture » à la liste du paragraphe POUR QUI.

**Captures d'écran** : ajouter si possible une capture de l'écran Trajet (liste de trouvailles « Une plaque d'immatriculation d'un autre pays », « Un tunnel »…) avec le titre « Même les longs trajets deviennent une aventure. »

---

## Nom (App Information > Name, 30 car. max)

```
Ludigo : chasses aux trésors
```
28 caractères.

## Sous-titre (App Information > Subtitle, 30 car. max) — 3 options

| # | Texte | Car. | Angle |
|---|---|---|---|
| 1 | `Rando & musée : jeu sans écran` | 30 | Mots-clés + bénéfice écran |
| 2 | `Sorties enfants, la magie en +` | 30 | Émotionnel / bénéfice |
| 3 | `Occupe les enfants en sortie` | 28 | Douleur parent, requête directe |

**Recommandation : option 3.** « Occuper les enfants » est une requête tapée telle quelle par les parents (Google et App Store) — c'est le pain point n°1, formulé avec ses propres mots, pas une reformulation marketing. Elle est aussi la plus courte, donc la plus lisible sur petit écran de recherche.

## Texte promotionnel (Promotional Text, 170 car. max, modifiable sans revalidation)

```
Montagne, musée ou ville : transformez chaque sortie en chasse au trésor. 100 % hors ligne, zéro pub, zéro compte. Prêt en 10 secondes.
```
135 caractères.

## Mots-clés (Keywords, 100 car. max, séparés par des virgules sans espace)

**Important — comment fonctionne la recherche App Store** : contrairement à Google Play, Apple n'indexe que 3 champs pour le classement dans les résultats de recherche — le Nom, le Sous-titre, et ce champ Mots-clés. **La description longue n'est jamais utilisée pour le classement**, elle ne sert qu'à convaincre une fois que la fiche est déjà ouverte. Inutile donc de « caser des mots-clés » dans la description — tout l'effort d'optimisation se joue sur ces 3 champs.

```
randonnée,balade,sortie,famille,enfant,vacances,occuper,montagne,trésor,ville,gratuit,musée,nature
```
98 caractères. Historique des ajustements du 07/09/2026 :
- **musée** avait disparu de partout (ni dans le nom, ni dans le sous-titre finalement retenu, ni dans cette liste — un vrai trou vu que musée est un des 3 piliers produit) → ajouté.
- **offline** retiré (choix de Jessica : les parents cherchent par activité — « occuper les enfants » — pas par caractéristique technique comme « offline »).
- **nature** réintroduit dans l'espace libéré par le retrait d'offline (générique mais remplit le champ sans rien coûter — à retirer si un mot plus pertinent vient à l'esprit).

Ne répète volontairement pas les mots déjà présents dans le nom/sous-titre retenu (Ludigo, chasse, trésors, occupe, enfants, sortie) — Apple les indexe déjà depuis ces champs, les répéter ici serait un gaspillage des 100 caractères.

## Description longue (4000 car. max)

**v3 (07/09/2026, version de Jessica, retenue)** — pain point placé juste à la limite de la coupure iOS (~170 car.), preuve par exemples réels vérifiés contre `index.html` :

```
Où que vous soyez dans le monde, en pleine montagne, dans un musée d'art ou au fil d'une rue, Ludigo transforme la prochaine sortie en famille en CHASSE AU TRÉSOR.

Fini le « on peut rentrer maintenant ? » au bout de dix minutes. Avec Zoé, la mascotte-loupe curieuse de Ludigo, vos enfants ont une vraie raison d'observer, d'écouter et d'avancer : près de 40 trouvailles à repérer, toucher, écouter ou réaliser à chaque carnet, et des points à gagner pour chacune.
Trouver un caillou qui brille, écouter les sons qui nous entourent, faire une photo rigolote, faire deviner une œuvre à sa famille juste en la décrivant...autant de trouvailles et de défis qui feront de chaque sortie une aventure partagée.

COMMENT ÇA MARCHE
Choisissez le type de lieu, Montagne, Musée d'art ou Ville, et Ludigo propose aussitôt un carnet de TROUVAILLES adapté et de DÉFIS à réaliser.
Inutile d'indiquer où vous êtes : le contenu s'appuie sur le type de lieu (montagne, ville, musée), jamais sur une adresse précise.

Résultat, Ludigo fonctionne N'IMPORTE OÙ DANS LE MONDE, sans connexion, sans GPS, sans wifi à chercher au fond d'une vallée.

POURQUOI LES PARENTS L'ADOPTENT
• Prêt en 10 secondes : pas de compte, pas de réglages, pas de préparation
• 100 % hors ligne : fonctionne même sans réseau, en pleine montagne comme en sous-sol de musée
• 9 carnets différents (3 par type de lieu) : de quoi ne jamais retomber sur la même chasse
• Zéro publicité, zéro compte, zéro donnée collectée. Ludigo ne suit rien et ne vend rien

POUR QUI
Dès 4 ans, à jouer en famille pour découvrir les lieux sous un autre angle et vivre une aventure ensemble. Le compagnon idéal pour occuper petits et grands pendant une randonnée, une visite au musée, une balade en ville ou une sortie de vacances.

Avec Ludigo, chaque sortie devient une enquête. À vous de jouer.
```
1836 caractères. Les exemples concrets (« un caillou qui brille », « faire deviner une œuvre en la décrivant »…) ont été vérifiés mot pour mot contre le contenu réel du jeu dans `index.html` — ce ne sont pas des exemples inventés.

**Remarque éditoriale en suspens** : 4 mots en MAJUSCULES dans le corps du texte (CHASSE AU TRÉSOR, TROUVAILLES, DÉFIS, N'IMPORTE OÙ DANS LE MONDE) se mélangent visuellement avec les titres de section (COMMENT ÇA MARCHE, etc.), eux aussi en majuscules — dilue la hiérarchie. Pas corrigé, en attente d'arbitrage de Jessica (garder tel quel, ou ne garder qu'une seule emphase).

**Historique** : la v2 (pain point en toute première phrase, « On peut rentrer maintenant ? ») a été remplacée par cette v3 à la demande de Jessica. Coupé des deux versions par rapport à la v1 initiale : la ligne « chaque trouvaille écrite et vérifiée à l'avance » (différenciateur de confiance, cf. `HANDOFF.md`) et la ligne Leave No Trace — aucune des deux n'est fausse, juste sacrifiées pour la concision.

## Notes pour la review Apple (App Review Information > Notes)

```
Ludigo est une application 100 % hors ligne, sans compte utilisateur, sans collecte de données et sans publicité. Tout le contenu (carnets de « trouvailles ») est statique, écrit et vérifié à l'avance — l'app ne fait aucun appel réseau, aucun backend, aucune IA embarquée.

Pour tester : à l'accueil, choisir un type de lieu (Montagne, Musée d'art ou Ville), puis un carnet ; cocher quelques trouvailles pour voir la progression, les paliers de célébration (25/50/75/100 %) et l'écran diplôme en fin de carnet. Aucune identification ni compte n'est nécessaire.
```

## Accroches marketing (hors fiche App Store — captures d'écran, réseaux sociaux, page de renvoi)

À utiliser comme titres de capture d'écran ou légendes, pas dans les champs App Store Connect eux-mêmes :

- « Ils ne demanderont plus de rentrer. »
- « Chaque sortie devient une aventure. »
- « L'appli qui donne envie de marcher. »
- « Où que vous soyez, l'aventure commence. »

---

# Brief visuels — captures d'écran App Store (à donner à Claude Design)

## Objectif
Produire un jeu de captures d'écran App Store qui vend le bénéfice parent (occuper/motiver les enfants en sortie, sans écran donné à l'enfant, ça marche partout) — pas une suite de captures brutes de l'UI. Chaque écran = 1 promesse + 1 visuel qui la prouve.

## Contraintes techniques
- **Format de référence : iPhone 17 Pro Max, 1320 × 2868 px, portrait** (device déjà configuré sur cette machine pour matcher ce gabarit — voir `HANDOFF.md`, section « Environnement machine »). Vérifier au moment de l'upload dans App Store Connect si un second jeu de tailles est encore exigé (les règles Apple bougent régulièrement) — au pire, ce jeu 6,9″ sert de source pour dériver les autres tailles.
- 4 écrans obligatoires + 1 optionnel (voir plus bas), entre le minimum recommandé de 3 et le maximum de 10.
- Texte à l'écran en français uniquement (une seule locale prévue pour le lancement).
- Fond persos + device frame ou plein cadre (bleed) au choix de Claude Design selon ce qui rend le mieux avec la mascotte — pas de contrainte imposée ici.

## Style visuel — rappel des tokens Ludigo
Repartir de `design_handoff_ludigo_mascotte/README.md` (déjà dans ce repo) : mascotte Zoé (3 humeurs : curieux / malicieux / fier), palette forêt/menthe (`forest-900 #12503F`, `mint-500 #39C3A2`, `lens-50 #EAFAF4`, `brass-500 #C98A4D`, `gold-400 #FFC94D`), typographie Nunito (700/900 pour les titres). Un design canvas existant, **« Accueil Ludigo »**, a déjà été publié comme Artifact Claude et peut servir de base/point de départ pour composer ces captures plutôt que de repartir de zéro — lien à retrouver via la liste des Artifacts si besoin.

## v2 (07/09/2026, retravaillé avec Jessica — la v1 ci-dessous jugée pas assez vendeuse)

**Changement principal : les écrans 1 et 2 partagent un seul et même visuel panoramique**, coupé en deux. Au lieu de deux captures isolées, c'est une seule scène large qui continue visuellement de l'écran 1 à l'écran 2 dans la galerie App Store — ça donne plus d'espace pour dérouler le message en deux temps (l'accroche, puis la mécanique) sans que chaque écran ait l'air de se répéter.

**Construction technique du panorama** : Claude Design compose une scène unique à **2640 × 2868 px** (deux fois la largeur du format de référence 1320 × 2868, même hauteur), avec la mascotte/scène positionnée pour que la coupure au centre (à 1320 px) tombe à un endroit naturel de la composition (pas en plein milieu d'un visage ou d'un texte). Exporter ensuite en deux fichiers 1320 × 2868 : moitié gauche = écran 1, moitié droite = écran 2.

### Les écrans

1. **Accroche (moitié gauche du panorama)** — Zoé en grand sur la scène panoramique (montagne/musée/ville suggérés en une seule composition, pas trois vignettes séparées). Titre principal : **« Des chasses au trésor, où que vous soyez. »** Sous-titre, plus petit : « Ils ne demanderont plus de rentrer. » — le titre porte la promesse (c'est un jeu de chasse au trésor, universel), le sous-titre porte la douleur parent, en support.
2. **Choix du lieu (moitié droite du panorama)** — suite visuelle de l'écran 1, avec les 3 cartes Montagne / Musée d'art / Ville qui apparaissent en surimpression ou en bas de la même scène. Titre : **« Choisissez votre lieu, l'aventure commence. »**
3. **Le jeu, preuve par l'exemple** — liste de trouvailles avec quelques cases cochées + compteur de points visible, entourée de 2-3 pastilles/illustrations reprenant des trouvailles réelles (mêmes exemples vérifiés que la description : « un caillou qui brille », « une photo rigolote », « décrire une œuvre sans la nommer ») pour prouver la spécificité du contenu, pas juste l'affirmer. Titre : **« Des dizaines de trouvailles et défis à réaliser en famille. »**
4. **La durée / les souvenirs** — écran plus émotionnel que fonctionnel : Zoé fière + confettis (moment de palier), ou un montage suggérant plusieurs sorties différentes (montagne puis musée puis ville) pour montrer que ça se rejoue. Titre : **« Des heures d'exploration, des souvenirs en famille. »** (alternatives si besoin : « Des heures dehors, des souvenirs pour la vie. » / « Des souvenirs qui durent, bien après la sortie. »)
5. **Confiance parent** *(optionnel, à garder ou couper selon la place)* — écran 100 % marketing, pas une capture d'app, avec 4 pictos : hors ligne / zéro pub / zéro compte / contenu vérifié à la main. Titre : « Fait pour rassurer les parents. » Lève l'objection silencieuse (« encore une appli qui va pister mes enfants ») — un problème différent de « pas assez vendeur », donc gardé à part : à inclure si on va jusqu'à 5-6 écrans, à couper si on préfère rester sur les 4 premiers, plus courts et plus punchy.

## v1 (7 écrans, remplacée — gardée pour mémoire)

<details>
<summary>Ancienne version, jugée pas assez vendeuse par Jessica</summary>

1. **Accroche** — Zoé (humeur curieuse) en grand sur fond forest-900, scène suggérant une sortie (montagne/musée/ville en silhouette ou en trois vignettes). Titre : « Ils ne demanderont plus de rentrer. » Sous-titre optionnel : « La chasse au trésor qui marche partout. »
2. **Choix du lieu** — capture (recomposée) de l'écran de sélection Montagne / Musée d'art / Ville. Titre : « Montagne, musée, ville : Ludigo s'adapte. » Message implicite : zéro préparation, ça marche où que vous soyez.
3. **Le jeu** — liste de trouvailles avec quelques cases cochées + compteur de points bien visible. Titre : « Près de 40 trouvailles à repérer. » Sous-titre : « Regarder, écouter, toucher, faire. »
4. **La célébration** — écran de palier avec Zoé fière + confettis. Titre : « Chaque étape se fête. » Capture l'émotion, pas juste la fonctionnalité.
5. **Le diplôme** — écran de fin de carnet. Titre : « Un diplôme à la fin de chaque carnet. » Sous-titre : « Et 9 carnets à découvrir, jamais la même chasse deux fois. »
6. **Confiance parent** — écran dédié (pas une capture d'app, un écran 100 % marketing) avec 4 pictos : hors ligne / zéro pub / zéro compte / contenu vérifié à la main. Titre : « Fait pour rassurer les parents. »

</details>

## Icône de l'app
Déjà finalisée et intégrée (icône Zoé 1024×1024, voir `HANDOFF.md`) — aucun brief supplémentaire nécessaire pour l'icône elle-même.

---

# Google (SEO) — relevé Google Trends du 16/10/2026

France, 5 dernières années, intérêt moyen relatif (100 = pic du terme le plus cherché du lot) : `activité enfant` 48 · `chasse au trésor` 34 · `jeu de piste` 13 · `jeux voiture enfant` 4 · `occuper les enfants` ~1.

- `chasse au trésor` culmine à **Pâques** (avril) et en été : c'est le pic de l'année.
- `activité enfant` culmine **pendant les vacances scolaires** (Toussaint jusqu'à 80, février, juillet).
- `jeux voiture enfant` est faible et culmine en novembre-décembre : intention « jouets / jeux vidéo de voiture », pas « jeux pendant le trajet ». À ne pas viser tel quel.
- Trends ne donne que des volumes **relatifs**. Pour des volumes absolus : Google Keyword Planner (compte Google Ads gratuit, à créer par Jessica).
