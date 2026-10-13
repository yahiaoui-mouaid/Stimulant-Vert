# Stimulant Vert® — Site vitrine (Frontend uniquement)

Site vitrine moderne et entièrement responsive pour **Stimulant Vert®**, fertilisant
liquide organique fabriqué en Algérie.

> « From Algeria... for a greener and healthier world »

## ✅ Frontend uniquement — aucun backend

Ce projet est **purement frontend**. Il n'y a :

- **aucun** serveur, API, base de données ou système d'authentification,
- **aucun** envoi de données vers l'arrière-plan.

Le formulaire de contact est **de démonstration** : cliquer sur **« Envoyer »** ne
transmet aucune donnée. Un message interne s'affiche et invite le visiteur à utiliser
directement les coordonnées affichées (email `mailto:`, téléphone `tel:`).

## 🚀 Démarrage

```bash
pnpm install
pnpm dev
```

Le site est disponible sur l'URL affichée par Vite (par défaut `http://localhost:5173`).

Build de production :

```bash
pnpm build
pnpm preview
```

## 🧩 Stack

- **React 19** + **Vite 7**
- **Tailwind CSS 4** (via `@tailwindcss/vite`)
- **lucide-react** pour les icônes
- Polices : *Plus Jakarta Sans* (titres) et *Inter* (texte)

## 📁 Structure des composants

```
src/
├─ App.jsx                 # assemblage des sections
├─ main.jsx                # point d'entrée
├─ index.css               # thème Tailwind + animations
├─ data/site.js            # contenu centralisé (FR, coordonnées, liens)
├─ hooks/
│  └─ useScrollReveal.js   # reveal au scroll, navbar au scroll, lock scroll
└─ components/
   ├─ Navbar.jsx           # navigation sticky + menu mobile animé
   ├─ Hero.jsx             # bannière + mockup bouteille + drapeau algérien
   ├─ About.jsx            # à propos + 5 atouts
   ├─ Benefits.jsx         # "Pourquoi Stimulant Vert® ?" (6 cartes)
   ├─ Product.jsx          # le produit + fiches info (1L, composition, dosage…)
   ├─ Applications.jsx     # 6 cultures (légumes, fruits, céréales, palmiers…)
   ├─ WhyChooseUs.jsx      # section verte "Better Soil / Better Plants / Greener Tomorrow"
   ├─ Contact.jsx          # coordonnées + formulaire frontend-only
   └─ Footer.jsx           # pied de page
```

## 🎨 Identité visuelle

- Vert agricole profond (`#0c3b21`), vert moyen (`#259547`), menthe claire, beige chaud
- Coins arrondis, ombres douces, dégradés verts, formes organiques
- Mockups de bouteille en SVG vectoriel (`src/components/Bottle.jsx`)
- Animations légères : reveal au scroll, zoom doux sur images, élévation des cartes

## 🖼️ Crédits images

Les photographies sont des photos libres de droits (Unsplash et Wikimedia/Flickr, CC).
Voir `public/images/image-credits.json` pour la liste détaillée et les licences.


© 2026 Stimulant Vert. Tous droits réservés.
