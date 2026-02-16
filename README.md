# 🇫🇷 Simulation Test Civique - Quiz de Préparation

[English version below](#-french-civic-test---preparation-quiz)

## 📋 Description

Cette application web est conçue pour vous aider à **préparer le test civique français** requis pour l'obtention de la carte de résident ou de la nationalité française. Elle propose une simulation réaliste du test officiel avec 40 questions chronométrées sur les principes et valeurs de la République française.

## ✨ Fonctionnalités

- **40 questions aléatoires** sélectionnées parmi une base de 161 questions
- **Timer de 45 minutes** pour simuler les conditions réelles du test
- **Navigation fluide** entre les questions (Précédent/Suivant)
- **Résultats immédiats** avec indication de réussite (≥32/40 requis)
- **Correction détaillée** affichant toutes les bonnes réponses
- **Design élégant** aux couleurs du drapeau français
- **Aucun serveur requis** - fonctionne directement dans votre navigateur

## 🚀 Comment utiliser

### Méthode 1 : Ouverture directe (Recommandé)

1. Téléchargez tous les fichiers du projet
2. Double-cliquez sur `index.html`
3. Le quiz s'ouvre dans votre navigateur par défaut
4. Le test démarre automatiquement

### Méthode 2 : Avec un serveur local

```bash
# Depuis le dossier du projet
python3 -m http.server 8000

# Puis ouvrez dans votre navigateur :
# http://localhost:8000
```

## 📖 Déroulement du test

1. **Début du test** : Le chronomètre de 45 minutes démarre automatiquement
2. **Répondre aux questions** : Sélectionnez une réponse pour chaque question
3. **Navigation** : Utilisez les boutons "Précédent" et "Suivant" pour naviguer
4. **Validation** : À la dernière question, cliquez sur "Valider le test"
5. **Résultats** : Consultez votre score et la correction complète

## ✅ Critères de réussite

- **Score minimum requis** : 32 bonnes réponses sur 40 (80%)
- **Temps imparti** : 45 minutes maximum
- **Type de questions** : QCM (4 choix possibles par question)

## 📁 Structure du projet

```
test_civique/
├── index.html          # Page principale
├── style.css           # Styles et design
├── script.js           # Logique du quiz
├── questions.js        # Base de données de 161 questions
├── .gitignore          # Fichiers ignorés par Git
└── README.md           # Ce fichier
```

## 🛠️ Technologies utilisées

- **HTML5** - Structure de la page
- **CSS3** - Design moderne avec gradients et animations
- **JavaScript (Vanilla)** - Logique du quiz, timer, navigation
- Aucune dépendance externe requise

## 🎨 Caractéristiques techniques

- Questions randomisées à chaque session
- Réponses mélangées pour éviter les patterns
- Animations fluides sans glitches
- Design responsive (mobile, tablette, desktop)
- Sauvegarde temporaire des réponses pendant la navigation

## 📝 Thèmes couverts

Les questions portent sur les **principes et valeurs de la République française** :
- Liberté, Égalité, Fraternité
- Laïcité et séparation des Églises et de l'État
- Droits et devoirs citoyens
- Histoire et symboles de la République
- Institutions françaises

## 🔄 Recommencer

Utilisez le bouton **"Recommencer"** en haut à droite pour :
- Réinitialiser le timer à 45 minutes
- Générer un nouveau set de 40 questions
- Effacer vos réponses précédentes

## 📄 Licence

Ce projet est fourni à des fins éducatives pour la préparation au test civique français.

---

# 🇬🇧 French Civic Test - Preparation Quiz

## 📋 Description

This web application is designed to help you **prepare for the French civic test** required to obtain a residence card or French nationality. It offers a realistic simulation of the official test with 40 timed questions on the principles and values of the French Republic.

## ✨ Features

- **40 random questions** selected from a database of 161 questions
- **45-minute timer** to simulate real test conditions
- **Smooth navigation** between questions (Previous/Next)
- **Immediate results** with pass/fail indication (≥32/40 required)
- **Detailed correction** showing all correct answers
- **Elegant design** featuring French flag colors
- **No server required** - works directly in your browser

## 🚀 How to Use

### Method 1: Direct Opening (Recommended)

1. Download all project files
2. Double-click on `index.html`
3. The quiz opens in your default browser
4. The test starts automatically

### Method 2: With a Local Server

```bash
# From the project folder
python3 -m http.server 8000

# Then open in your browser:
# http://localhost:8000
```

## 📖 Test Process

1. **Test Start**: The 45-minute timer starts automatically
2. **Answer Questions**: Select an answer for each question
3. **Navigation**: Use "Previous" and "Next" buttons to navigate
4. **Validation**: On the last question, click "Validate Test"
5. **Results**: View your score and complete correction

## ✅ Passing Criteria

- **Minimum required score**: 32 correct answers out of 40 (80%)
- **Time limit**: 45 minutes maximum
- **Question type**: Multiple choice (4 options per question)

## 📁 Project Structure

```
test_civique/
├── index.html          # Main page
├── style.css           # Styles and design
├── script.js           # Quiz logic
├── questions.js        # Database of 161 questions
├── .gitignore          # Git ignored files
└── README.md           # This file
```

## 🛠️ Technologies Used

- **HTML5** - Page structure
- **CSS3** - Modern design with gradients and animations
- **JavaScript (Vanilla)** - Quiz logic, timer, navigation
- No external dependencies required

## 🎨 Technical Features

- Randomized questions for each session
- Shuffled answers to avoid patterns
- Smooth animations without glitches
- Responsive design (mobile, tablet, desktop)
- Temporary answer storage during navigation

## 📝 Topics Covered

Questions focus on **French Republic principles and values**:
- Liberty, Equality, Fraternity
- Secularism and separation of Church and State
- Citizens' rights and duties
- History and symbols of the Republic
- French institutions

## 🔄 Restart

Use the **"Restart"** button in the top right to:
- Reset the timer to 45 minutes
- Generate a new set of 40 questions
- Clear your previous answers

## 📄 License

This project is provided for educational purposes to prepare for the French civic test.

---

**Bonne chance ! / Good luck!** 🍀

