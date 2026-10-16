# Ludigo — handoff

Dernière mise à jour : 16 octobre 2026. Écrit pour qu'une session Claude fraîche (autre compte, ou Claude Design) puisse reprendre sans contexte préalable.

## En une phrase

Chasse au trésor hors-ligne pour familles : on choisit un **type** de lieu (montagne, musée d'art, ville), l'app propose un carnet d'une quarantaine de « trouvailles » à repérer/toucher/écouter/faire, écrit et vérifié à la main (jamais généré par une IA à l'usage). Le contenu ne dépend jamais d'une adresse précise, seulement du type de lieu, ce qui permet de fonctionner n'importe où dans le monde sans base de POI ni backend.

## ✅ Nom tranché : Ludigo (06/09/2026)

Historique : "Trésors d'ici" (nom d'origine) jugé nul → renommé "Findaro" le 03/08 → toujours jugé naze/pas moderne le 18/08, brainstorm autour du thème "ouvrir l'œil"/garder l'attention (Watchling, Beholda, Ogglo proposés) → conversation interrompue avant tranchage → reprise le 06/09 sur un nouveau compte/ordinateur (voir ce handoff), nouvelles pistes proposées (Lynko, Glimpsy, Keeno) puis **Jessica a tranché pour "Ludigo"** (résonance avec "ludique"/latin "ludo" = jouer — pas de conflit trouvé sur l'App Store ni en marque déposée lors d'une recherche web rapide, à confirmer directement dans App Store Connect).

**Bundle ID conservé tel quel : `com.nighthawkscode.findaro`** (choix explicite de Jessica le 06/09 — invisible aux utilisateurs, évite de repasser par Certificates/Identifiers/Profiles). Ne pas le renommer sauf demande explicite future.

**Renommage local effectué le 06/09** dans : `index.html` (title + h1), `manifest.webmanifest` (name/short_name), `package.json` (name), `capacitor.config.json` (appName, appId inchangé), `ios/App/App/Info.plist` (CFBundleDisplayName), puis `www/` et `ios/App/App/public/` resynchronisés via `npx cap sync ios`.

## ✅ Mascotte "Zoé" + nouvelle charte couleur appliquées (06-07/09/2026)

Jessica a livré un dossier de design `design_handoff_ludigo_mascotte/` (fichiers `.dc.html` + `README.md`) avec la mascotte **Zoé** (une loupe vivante, 3 humeurs : curieux/malicieux/fier) et la palette dérivée (vert forêt `#12503F`/`#0D3B30`, menthe `#39C3A2`/`#1F8F77`, lentille `#EAFAF4`, laiton `#C98A4D`). Une seconde piste "Lumi" (lanterne, bleu nuit/ambre) est conservée en réserve mais non intégrée.

**Appliqué dans `index.html`** :
- Tokens `:root` recolorés : `--hero`→`#12503F`, `--hero-deep`→`#0D3B30`, `--hero-soft`/`--sur-hero`→`#EAFAF4`, `--paper`→`#F1F7F4` (léger tint menthe), `--ombre-celeb` recalculée. Les couleurs de famille (`--fam-ouvre/sens/faire`) et `--rare` (or) sont restées **inchangées** — décision volontaire pour limiter le scope, à rediscuter si Jessica veut plus de cohérence (le teal `--fam-sens` est proche du nouveau vert hero).
- Fonction JS `zoeHTML(mood, opts)` / `zoeBox(sizePx, mood, opts)` ajoutée (juste après `SVG_TYPO`) : reproduit la mascotte en HTML/CSS absolu (même technique que le fichier de design), pas de conversion SVG dans l'app — fidèle au pixel.
- Badge d'en-tête (accueil) : mini Zoé "curieux" à la place de l'ancienne icône loupe simple.
- Écran de palier (`celebrerPalier`) : Zoé "fier" ajoutée au-dessus de l'anneau de progression, classe `.zoe-palier`.
- Écran diplôme (`ecranFin`) : Zoé "fier" ajoutée au-dessus de l'anneau final, classe `.zoe-fin`.
- Couleurs codées en dur alignées sur la nouvelle palette (confettis, badge, accents de l'écran de palier).

**Icône de l'app régénérée** : nouvelle icône 1024×1024 dessinée en SVG à partir des coordonnées exactes du spec (`icones/src/icone.svg`), rastérisée via `qlmanage` + `sips` (même méthode que la précédente icône, cf. section Claude Design). Fichiers remplacés : `icones/icone-{180,192,512,1024}.png`, `ios/App/App/Assets.xcassets/AppIcon.appiconset/AppIcon-512@2x.png`. Écran de lancement (`Splash.imageset`, 3 fichiers 2732×2732) régénéré en aplat uni `#F1F7F4`.

**Reste à faire côté design** :
- Vérifier/décider si les couleurs de famille et le or "rare" doivent aussi évoluer pour plus de cohérence avec le vert.
- `npx cap sync ios` pas encore relancé avec succès sur cette machine (Capacitor CLI exige Node ≥22, cette machine n'avait que Node 20 — installation de `node@22` via Homebrew en cours au moment de la rédaction). Une fois fait : rebuild Xcode + test sur simulateur/iPhone pour valider le rendu natif (le rendu web local a été vérifié dans un navigateur, pas encore in situ dans la WebView iOS).
- Mettre à jour les visuels du dossier de lancement / captures d'écran App Store si déjà préparés avec l'ancienne palette Findaro.

**Reste à faire côté nom** :
- Renommer la fiche App Store Connect ("Findaro : chasses aux trésors" → "Ludigo : chasses aux trésors" ou équivalent, App Information > Name) et vérifier la dispo exacte du nom à ce moment-là.
- Le dossier de lancement (artifact Claude séparé avec les textes marketing prêts à copier-coller) référence encore "Findaro" — à régénérer ou corriger à la main si toujours accessible.
- La politique de confidentialité est hébergée sur `https://findaro-legal.vercel.app` — l'URL elle-même n'a pas besoin de changer pour la review Apple, mais le texte de la page mentionne peut-être "Findaro" à l'intérieur, à vérifier.
- Icône : loupe + étincelle sur dégradé bleu pétrole, pas de texte dedans — aucun impact du renommage.

## ✅ Publiée sur l'App Store le 10/09/2026

**Ludigo : chasses aux trésors**, v1.0 (build 1), en ligne depuis le 10/09/2026 : https://apps.apple.com/fr/app/ludigo-chasses-aux-tr%C3%A9sors/id6797957916 (Apple ID `6797957916`). Au 16/10/2026 : 1 note (5★). La version publiée correspond au commit qui suit cette mise à jour (lien de confidentialité in-app, In-App Review, `DEVELOPMENT_TEAM = BF83B6KTNS`, langue de développement `fr`).

Historique de la préparation (gardé pour mémoire) :


En cours de remplissage dans App Store Connect, dans cet ordre :
1. ✅ Compte Apple Developer actif, statut DSA à répondre (recommandé : non-trader, app gratuite sans monétisation)
2. ✅ Bundle ID `com.nighthawkscode.findaro` enregistré dans Certificates, Identifiers & Profiles
3. ✅ Fiche app créée (nom "Findaro : chasses aux trésors", SKU `findaro-ios`, langue FR)
4. ✅ Sous-titre saisi : "Animez vos sorties enfants" (voir note ci-dessus sur le nom en discussion)
5. ✅ Age rating : répondu "None"/"No" partout → 4+
6. ✅ Politique de confidentialité rédigée et **hébergée en ligne : https://findaro-legal.vercel.app** (compte Vercel perso, scope `maison-sereine` — déployé le 18/08, page statique dans `~/Documents/projects/findaro-legal/index.html`, zéro dépendance)
7. ✅ **App Store Connect rempli** : coller l'URL de confidentialité (onglet App Privacy, en haut de page — pas toujours au même endroit selon la version de l'UI, sinon dans App Information > General Information), Content Rights (répondre Non), Copyright (`2026 Jessica Robert`), Pricing (gratuit), App Privacy questionnaire ("No, we do not collect data from this app" → Publish), puis pour la version 1.0 : captures d'écran, description, mots-clés, texte promo, URL de support, notes pour la review.
8. ✅ **Lien in-app vers la politique de confidentialité** : ajouté sur l'accueil d'`index.html` (obligatoire selon la règle Apple 5.1.1(i), pas juste dans la fiche App Store Connect).
9. ✅ Xcode : configurer Signing & Capabilities (choisir l'équipe, `DEVELOPMENT_TEAM` pas encore renseigné dans le projet), tester sur un iPhone physique (seul le simulateur a été testé), puis archiver et uploader.

**Toutes les valeurs prêtes à copier-coller (nom, sous-titre, mots-clés, description longue, texte promo, notes de review, accroches marketing, brief visuels pour les captures d'écran)** sont dans [`ASO.md`](./ASO.md) à la racine du repo (régénéré le 07/09/2026 avec le nom Ludigo, après que le kit précédent — un artifact Claude publié séparément sous le nom Findaro — soit devenu inaccessible depuis ce compte). Il manque encore le texte complet de la politique de confidentialité (déjà en ligne sur `https://findaro-legal.vercel.app`, à vérifier/adapter au nom Ludigo) et la checklist de soumission cochable.

## Décisions produit clés (dans l'ordre chronologique de découverte)

- **Zéro génération IA dans le produit final.** Les carnets sont écrits et vérifiés à l'avance par Jessica + Claude, jamais générés à l'usage. Raisons : supprime le risque de fait faux, condition nécessaire pour démarcher des musées (contenu vérifié, pas halluciné). L'app est donc 100 % statique, sans backend, sans API, hors-ligne par nature.
- **Contenu basé sur le TYPE de lieu, jamais une adresse précise.** C'est toute la thèse produit : coût marginal nul par endroit, couverture mondiale, pas de base de POI à maintenir.
- **3 carnets par typologie (A/B/C), rotation puis choix explicite.** Chaque carnet ~40-44 trouvailles, thématiquement mélangées (pas de carnet spécialisé par domaine — retour explicite de Jessica : "fini les carnets à thème", chaque carnet doit être un mix complet comme l'original de Gourette).
- **Aucun mécanisme de mot à deviner / coffre / énigme.** Pivot majeur du 31/07 : uniquement une liste de trouvailles cochables, toujours facultatives, jamais bloquantes. Simplifie l'app et résout au passage le problème d'universalité mondiale (une rareté régionale improbable devient un simple bonus).
- **Points calibrés par difficulté réelle** (échelle 5 à 30), pas un barème plat par famille. Structure de données : chaque trouvaille = tuple `[texte, points]`.
- **Leave No Trace** : jamais d'item qui fait ramasser/déplacer des éléments naturels.
- **Choix explicite du carnet A/B/C + statut visible** (Pas commencé / En cours / Terminé ✓), demandé par Jessica le 03/08. Modèle de données : `S.progres[typoId][carnetId]` conserve la progression de chaque carnet **indéfiniment** (contrairement à l'ancien modèle qui l'effaçait en changeant de sortie).
- **Design : une seule couleur héroïne** (bleu pétrole `#0C6A85`/`#084E63`), pas un système à 5 teintes saturées (rejeté). Or `#B07C10` réservé exclusivement aux trouvailles rares ★. Chaque famille de trouvailles a un fond teinté distinct (zones visuelles, pas juste un liseré). Un seul thème clair, pas de sélecteur clair/sombre (sur-ingénierie rejetée explicitement).
- **UI ultra simple** : carte de trouvaille = une ligne, clic = fond teinté + texte barré, pas de case à cocher séparée. Règle de fabrication retenue : préférer systématiquement l'option la plus simple visuellement.
- **Fonctionnalité de partage du diplôme retirée** (03/08, demande de Jessica) — plus de bouton, plus de dépendance `@capacitor/share`.
- **Description marketing** : ton enthousiaste/bénéfice (pas juste fonctionnel), ouvrir sur "où que vous soyez dans le monde" dès la première phrase, jamais l'affirmation "rien n'est généré par une IA" côté contenu marketing (c'est *faux* dans l'absolu — le contenu a été écrit avec l'aide de Claude puis vérifié/corrigé par Jessica ; la promesse honnête et différenciante est plutôt "chaque trouvaille est fixée à l'avance et vérifiée, jamais générée à la volée pendant que vous jouez").

## Architecture technique

- Répertoire : `~/Documents/projects/chasse-tresor-valentin`
- App statique HTML/CSS/JS pur, un seul fichier `index.html` (~66 Ko), pas de framework, pas de build step pour le web
- `sw.js` : service worker cache-first pour la version PWA/web (gitignoré du chemin natif — voir plus bas, inerte dans l'app native)
- `www/` : copie propre servie à Capacitor (webDir), à resynchroniser après chaque modif d'`index.html` (`cp index.html www/` puis `npx cap sync ios`)
- `ios/App/App.xcworkspace` : projet Xcode généré par Capacitor — **toujours ouvrir le `.xcworkspace`, jamais le `.xcodeproj`** (CocoaPods)
- Wrapper natif : **Capacitor**, choisi pour conserver ~95 % du code JS/CSS existant sans réécriture native
- Plugins Capacitor actifs : App (bouton retour Android), Haptics, SplashScreen, StatusBar, **In-App Review** (`@capacitor-community/in-app-review`, ajouté 15/09/2026 — demande native de notation déclenchée une seule fois, au premier carnet terminé par utilisateur, voir `demanderAvis()` dans `index.html`)
- Bundle ID actuel : `com.nighthawkscode.findaro` (voir section nom en suspens ci-dessus)
- Repo public GitHub `nighthawkscode/chasse-tresor-valentin` (nom de repo pas encore renommé pour matcher, non bloquant)
- **Zéro réseau, zéro tracking** : pas de fetch actif dans l'app native (le service worker ne s'active que sous `https:`, jamais sous le schéma `capacitor://` de l'app iOS — vérifié dans le code)

## Environnement machine (mis à jour le 04/08/2026)

- **macOS Tahoe 26.6** et **Xcode 26.6** installés avec succès (après une vraie galère : Xcode 26 exige un composant système `CoreDevice.framework` à jour, réparé via `sudo xcodebuild -runFirstLaunch` ; puis le runtime simulateur iOS 26.5 a nécessité plusieurs tentatives à cause de conflits de "duplicate" côté CoreSimulator, résolu en supprimant proprement les doublons avec `xcrun simctl runtime delete <uuid>` avant de retélécharger).
- Simulateur de référence : **iPhone 17 Pro Max** (runtime iOS 26.5), créé pour matcher la taille de capture d'écran obligatoire App Store (6,9", 1320×2868 px) — l'ancien iPhone 16 Pro (iOS 18.0) ne convient plus pour les captures.
- Build confirmé fonctionnel de bout en bout avec cette config (`npx cap sync ios` puis build Xcode).
- **`DEVELOPMENT_TEAM` pas encore configuré** dans le projet Xcode (signature en mode Automatic sans équipe sélectionnée) — première chose à faire avant d'archiver.

## Pièges à ne pas reproduire

1. **Simulateur Claude Code : coordonnées en points, pas en pixels.** iPhone 16 Pro = 402×874 pt. Une valeur qui dépasse ces bornes fait atterrir le tap sur un geste système de bord (retour/switcher) au lieu de la WebView — ressemble à une app gelée. Toujours estimer en % de la capture puis multiplier par les dimensions réelles en points.
2. **WKWebView/Capacitor cache l'ancien build après un rebuild.** Toujours `xcrun simctl uninstall <UDID> <bundleId>` avant de relancer pour tester, sinon on croit à un bug qui n'est qu'un cache non invalidé.
3. **Ne jamais imbriquer un élément interactif dans un autre élément cliquable** (bug réel trouvé : bouton "Recommencer" imbriqué dans la carte cliquable de l'accueil = clic peu fiable au toucher sur WebKit/iOS). Utiliser un `<div role="button">` comme conteneur englobant.
4. **CocoaPods obligatoire, jamais Swift Package Manager** pour ce projet (`npx cap add ios --packagemanager Cocoapods`) — SPM par défaut produit des erreurs de version entre plugins et core Capacitor.
5. **CocoaPods a besoin de `LANG=en_US.UTF-8 LC_ALL=en_US.UTF-8`** sinon `Encoding::CompatibilityError`. `pod` est installé en user-gem (`~/.gem/ruby/2.6.0/bin`), pas dans le PATH par défaut.
6. **Après un `xcrun simctl runtime delete`, toujours vérifier `xcrun simctl runtime list` avant de retélécharger** — des doublons orphelins côté CoreSimulator peuvent bloquer l'installation d'un nouveau runtime avec une erreur "Duplicate of X".
7. Serveur HTTP local (`python3 -m http.server`) plutôt qu'ouverture directe en `file://` pour tester la version web — le navigateur sert les fichiers `file://` comme des instantanés figés.

## Prochaines étapes

La v1.0 est publiée (10/09/2026). La phase suivante vise l'attractivité (téléchargements) et la qualité de l'expérience parents/enfants, avant toute monétisation. La roadmap produit détaillée est à reprendre de la conversation du 16/10/2026 ; premiers chantiers : relever les chiffres App Store Connect (impressions, conversion, téléchargements), puis itérer sur la fiche (texte promo, test A/B des captures) et sur le contenu (nouveaux types de lieux fréquents).

## Claude Design

Aucun projet Claude Design créé pour Findaro à ce jour (contrairement à Omilo qui a "Omilo Design System"). L'icône (loupe + étincelle sur dégradé bleu pétrole) a été générée directement en PNG via un SVG source + `qlmanage` (pas de projet Figma/Claude Design impliqué).
