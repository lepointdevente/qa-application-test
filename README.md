# qa-application-test

Ce projet est un cas pratique pour tester les abilités techniques d'un candidat au poste d'Ingénieur Assurance Qualité pour Lepointdevente.com.   

Il s'agit d'une simple application de recrutement faite avec les technologies nestjs et react.  
La section User Stories de ce document décrit le comportement attendu de l'application.  
## Instructions
Dans le cadre du processus de recrutement chez Lepointdevente.com, vous êtes invité à démontrer vos capacités techniques en suivant les instructions de mise en place et en rendant les différents livrables listés.  

Ces livrables peuvent être directement versionnés sur votre projet forké ou envoyé par courriel à [cette adresse](emplois@lepointdevente.com).

Une date de rendu vous sera communiquée. Rendez les livrables que vous aurez pu réaliser pendant le temps imparti même s'ils ne sont pas finalisés.   
Vos livrables seront ensuite revus par notre équipe puis discutés lors de votre entretien technique.

Les données brutes des CVs sont stockés dans le dossier `backend/datas/resumes` sous forme de fichiers .json

Pour toutes difficultés ou questions, contactez nous via courriel à [cette adresse](emplois@lepointdevente.com).

### Mise en place
* Installer node sur votre poste si ce n'est pas déjà fait https://nodejs.org/en/download/package-manager
* Faire un fork du projet https://github.com/lepointdevente/qa-application-test
* Cloner le projet forké sur votre poste
* Lancer le projet sur votre poste avec les commandes suivantes dans des terminaux différents
    * Depuis le dossier backend `npm install && npm start`
    * Depuis le dossier frontend `npm install && npm start`
* Accédez à l'application front-end via l'url http://localhost:3001
* Accédez à l'api back-end via l'url http://localhost:3000

### Livrables

* Un cahier de tests
* Bonus: Des tests fonctionnels automatisés
* Bonus: Des tests de performance
* Bonus: Des rapports de bogues, si vous en trouvez lors de vos tests

## User Stories
### User Story: En tant que recruteur, je souhaite obtenir la liste des CV pour évaluer les candidats disponibles.

**Scénario: Récupération de la liste des CV**
```gherkin
Étant donné qu'il y a plusieurs CV disponibles,
Quand je clique sur le lien "View All Resumes",
Alors je suis redirigé vers une page avec les liens vers les différents CV disponibles.
```

### User Story: En tant que recruteur, je souhaite consulter un CV spécifique pour évaluer les qualifications d'un candidat.

**Scénario: Affichage d'un CV spécifique**
```gherkin
Étant donné qu'un CV avec l'identifiant 1 existe et que je suis sur la page de liste des CV,
Quand je clique sur le lien "1",
Alors je suis redirigé vers une page qui affiche le CV avec l'identifiant 1.
```

### User Story: En tant que recruteur, je souhaite marquer un CV comme validé pour identifier les candidats qualifiés.

**Scénario: Validation d'un CV**
```gherkin
Étant donné qu'un CV avec l'identifiant 1 existe et est prêt à être validé et que je suis sur la page du CV avec l'identifiant 1,
Quand je clique sur le bouton "Validate Resume",
Alors le CV avec l'identifiant 1 est marqué comme validé.
```