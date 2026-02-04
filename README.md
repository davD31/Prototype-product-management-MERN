# 🛍️ Product Management MERN

Application web fullstack de gestion de produits avec interface moderne Chakra UI et architecture MERN complète.

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-24-339933?style=flat&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-7-47A248?style=flat&logo=mongodb)
![Express](https://img.shields.io/badge/Express-5-000000?style=flat&logo=express)

## 📸 Aperçu

### Page d'Accueil
*[Ajoutez un screenshot ici]*

### Création de Produit
*[Ajoutez un screenshot ici]*

### Liste des Produits
*[Ajoutez un screenshot ici]*

### Mode Sombre
*[Ajoutez un screenshot ici]*

## ✨ Fonctionnalités

- ✅ **CRUD complet** : Create, Read, Update, Delete des produits
- 🎨 **Interface moderne** avec Chakra UI v3
- 🌓 **Mode sombre/clair** avec persistance
- 📱 **Design responsive** adapté à tous les écrans
- 🔔 **Notifications toast** pour les actions utilisateur
- ⚡ **Gestion d'état** optimisée avec Zustand
- 🔄 **Mise à jour en temps réel** de l'interface
- 🎯 **Navigation fluide** avec React Router v6

## 🛠️ Technologies

### Frontend
- React 18.3.1
- Chakra UI 3.30.0
- Zustand (state management)
- React Router DOM 6.28.0
- React Hot Toast
- Lucide React (icônes)
- Vite (build tool)

### Backend
- Node.js 24.12.0
- Express 5.2.1
- MongoDB 7.0.0
- Mongoose 9.0.2
- dotenv (variables d'environnement)

## 📦 Installation

### Prérequis
- Node.js (v18 ou supérieur)
- MongoDB Atlas account (ou MongoDB local)
- npm ou yarn

### Installation complète
```bash
# Cloner le repository
git clone https://github.com/davD31/Prototype-product-management-MERN.git
cd Prototype-product-management-MERN

# Installer les dépendances racine et frontend
npm install
cd frontend && npm install
cd ..
```

### Configuration

Créez un fichier `.env` dans le dossier `backend/` :
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
NODE_ENV=development
```

### Lancement en développement

**Option 1 : Deux serveurs séparés (recommandé pour le développement)**

Terminal 1 - Backend :
```bash
cd backend
npm run dev
```
Accessible sur `http://localhost:5000`

Terminal 2 - Frontend :
```bash
cd frontend
npm run dev
```
Accessible sur `http://localhost:5173`

**Option 2 : Build de production**
```bash
# Build du frontend
npm run build

# Lancement en production
npm run start
```
Accessible sur `http://localhost:5000`

## 🚀 Déploiement

### Frontend sur Vercel
1. Push votre code sur GitHub
2. Importez le projet sur [Vercel](https://vercel.com)
3. Configurez :
   - Framework: Vite
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `dist`

### Backend sur Render
1. Créez un nouveau Web Service sur [Render](https://render.com)
2. Connectez votre repository GitHub
3. Configurez :
   - Build Command: `npm install`
   - Start Command: `npm run start`
   - Variables d'environnement: `MONGO_URI`, `NODE_ENV=production`

## 📂 Structure du projet
```
product-management-mern/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   └── product.model.js
│   ├── routes/
│   │   └── product.route.js
│   ├── controllers/
│   │   └── product.controller.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   └── ui/
│   │   ├── Pages/
│   │   │   ├── HomePage.jsx
│   │   │   └── CreatePage.jsx
│   │   ├── store/
│   │   │   └── product.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
└── package.json
```

## 🎯 API Endpoints

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/products` | Récupérer tous les produits |
| GET | `/api/products/:id` | Récupérer un produit spécifique |
| POST | `/api/products` | Créer un nouveau produit |
| PUT | `/api/products/:id` | Mettre à jour un produit |
| DELETE | `/api/products/:id` | Supprimer un produit |

## 🔧 Scripts disponibles

### Racine du projet
- `npm run dev` : Lance le backend en mode développement
- `npm run build` : Build le frontend pour la production
- `npm run start` : Lance le serveur en mode production

### Frontend
- `npm run dev` : Lance le serveur de développement Vite
- `npm run build` : Build pour la production
- `npm run preview` : Prévisualise le build de production

## 📝 Fonctionnalités futures

- [ ] Authentification utilisateur
- [ ] Upload d'images pour les produits
- [ ] Système de catégories
- [ ] Filtres et tri avancés
- [ ] Pagination
- [ ] Recherche en temps réel
- [ ] Export des données (CSV, PDF)

## 👨‍💻 Auteur

**David DINH**
- GitHub: [@davD31](https://github.com/davD31)
- Projet réalisé dans le cadre de la formation MIAGE L3

## 📄 Licence

Ce projet est un projet personnel - Portfolio

---

💡 **Note** : Ce projet a été développé pour démontrer les compétences en développement fullstack MERN et est destiné à être inclus dans un portfolio professionnel.
