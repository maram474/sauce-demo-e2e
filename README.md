🛒 SauceDemo – Cart Automation Tests (Playwright)
================================================

Projet d’automatisation Playwright (Node.js) pour tester le panier d’achat (Cart) de l’application SauceDemo avec une approche data-driven (JSON) et des tests dynamiques.

------------------------------------------------

OBJECTIF DU PROJET
------------------

Automatiser tous les scénarios critiques du panier :

- Ajout d’un produit
- Ajout de plusieurs produits
- Ajout puis suppression
- Continuer les achats
- Ajout de tous les produits puis suppression de tous
- Validation du contenu du panier

------------------------------------------------

TECHNOLOGIES UTILISÉES
---------------------

- Playwright (Test Runner)
- JavaScript (Node.js)
- JSON Data-Driven
- Fixtures & Helpers
- HTML Report

------------------------------------------------

STRUCTURE DU PROJET
------------------

cart-automation-saucedemo/
├── Fixture/
│   └── helper.js
├── Data/
│   └── cartdata_set.json
├── Tests/
│   └── cart.spec.js
├── playwright.config.js
├── package.json
└── README.md

------------------------------------------------

STRATÉGIE DE TEST
-----------------

Les tests sont générés dynamiquement depuis un fichier JSON, ce qui permet :

- Ajouter des scénarios sans modifier le code
- Réduire la duplication
- Faciliter la maintenance
- Améliorer la lisibilité
- Rendre le projet scalable

------------------------------------------------

SCÉNARIOS COUVERTS
-----------------

1. Ajouter un seul produit
2. Ajouter plusieurs produits
3. Ajouter puis retirer un produit
4. Ajouter et continuer les achats
5. Ajouter tous les produits puis retirer tous

------------------------------------------------

DONNÉES DE TEST
---------------

Fichier : Data/cartdata_set.json

Exemple :

{
  "id": "TC_01",
  "description": "Ajouter un produit au panier",
  "action": "add",
  "product_name": "Sauce Labs Backpack",
  "expected_cart_count": 1,
  "expected_items": ["Sauce Labs Backpack"]
}

------------------------------------------------

EXÉCUTION DES TESTS
------------------

Installation :

npm install
npx playwright install

Lancer les tests :

npx playwright test

Mode UI :

npx playwright test --ui

Rapport HTML :

npx playwright show-report

------------------------------------------------

RAPPORTS
--------

Rapport HTML généré automatiquement :

playwright-report/index.html

------------------------------------------------

CREDENTIALS DE TEST
-------------------

URL      : https://www.saucedemo.com
Username : standard_user
Password : secret_sauce

------------------------------------------------

TROUBLESHOOTING
---------------

Playwright non installé :

npm install
npx playwright install

Navigateur manquant :

npx playwright install chromium

------------------------------------------------

CONTEXTE
--------

Projet d’automatisation QA démontrant l’utilisation de Playwright, des tests data-driven, des fixtures et d’une structure professionnelle prête pour GitHub et portfolio.

------------------------------------------------

✅ 100 % copiable  
✅ Simple  
✅ Pro  
✅ Clair  
✅ Accepté sur GitHub
