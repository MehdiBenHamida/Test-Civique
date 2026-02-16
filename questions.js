const QUESTIONS = [
  {
    "theme": "Principes et valeurs de la République",
    "question": "Parmi les propositions suivantes, laquelle constitue une participation citoyenne ?",
    "answers": [
      "Ne pas respecter la loi",
      "Voter aux élections",
      "Refuser de payer ses impôts",
      "Ignorer les convocations administratives"
    ],
    "correct": 1
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Que garantit la liberté d’expression ?",
    "answers": [
      "Le droit d’exprimer ses opinions dans le respect de la loi",
      "Le droit d’insulter librement",
      "Le droit de diffuser de fausses informations",
      "Le droit de menacer quelqu’un"
    ],
    "correct": 0
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "À quoi sert un titre de séjour ?",
    "answers": [
      "À voyager librement dans le monde",
      "À obtenir automatiquement la nationalité française",
      "À autoriser un étranger à séjourner légalement en France",
      "À voter aux élections nationales"
    ],
    "correct": 2
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "La liberté de circulation permet à toute personne de :",
    "answers": [
      "Changer de nationalité librement",
      "Se déplacer librement sur le territoire dans le respect de la loi",
      "Refuser tout contrôle d’identité",
      "Circuler sans papiers d’identité"
    ],
    "correct": 1
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Sur quel site internet peut-on retrouver le symbole de la République française ?",
    "answers": [
      "www.amazon.fr",
      "www.gouvernement.fr",
      "www.netflix.com",
      "www.wikipedia.org"
    ],
    "correct": 1
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Complétez ces paroles de la Marseillaise : \"Aux armes […] ! Formez vos bataillons\"",
    "answers": [
      "citoyens",
      "soldats",
      "amis",
      "français"
    ],
    "correct": 0
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Complétez les paroles de la Marseillaise : \"Allons enfants de la patrie […]\"",
    "answers": [
      "la victoire est arrivée",
      "le jour de gloire est arrivé",
      "marchons vers la liberté",
      "chantons la République"
    ],
    "correct": 1
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "En application de la liberté individuelle, quelle proposition est correcte ? Une personne peut :",
    "answers": [
      "Faire justice elle-même",
      "Refuser d’obéir aux lois",
      "Choisir son mode de vie dans le respect de la loi",
      "Imposer ses choix aux autres"
    ],
    "correct": 2
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Concernant la pratique de la religion, quelle proposition est correcte ?",
    "answers": [
      "Elle est interdite en France",
      "Elle est obligatoire",
      "Elle est libre dans le respect de la loi",
      "Elle dépend de l’origine"
    ],
    "correct": 2
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "En tant que parent, peut-on refuser que son enfant participe aux cours de sport à l'école car ils sont mixtes ?",
    "answers": [
      "Oui, si on n’est pas d’accord",
      "Oui, uniquement au collège",
      "Non, l’école publique est obligatoire et mixte",
      "Oui, avec une autorisation du maire"
    ],
    "correct": 2
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Quelle est la devise de la France ?",
    "answers": [
      "Honneur et Patrie",
      "Liberté, Égalité, Fraternité",
      "Travail, Famille, Patrie",
      "Unité et Justice"
    ],
    "correct": 1
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "La répudiation de sa femme est :",
    "answers": [
      "Autorisée par la loi française",
      "Une pratique légale sous conditions",
      "Interdite par la loi française",
      "Acceptée si les deux époux sont d’accord"
    ],
    "correct": 2
  },
    {
    "theme": "Principes et valeurs de la République",
    "question": "Les impôts permettent de financer les dépenses publiques. Quelle proposition est correcte ?",
    "answers": [
      "Ils servent uniquement à payer les policiers",
      "Ils servent à financer les services publics et les infrastructures",
      "Ils sont facultatifs",
      "Ils financent uniquement les entreprises privées"
    ],
    "correct": 1
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Peut-on brûler publiquement un drapeau français ?",
    "answers": [
      "Oui, c’est un acte libre",
      "Non, c’est interdit par la loi",
      "Oui, uniquement lors de manifestations",
      "Oui, si c’est à titre artistique"
    ],
    "correct": 1
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Que fait l’État pour lutter contre les discriminations ?",
    "answers": [
      "Il impose des sanctions pénales et civiles",
      "Il ne peut rien faire",
      "Il favorise certaines religions",
      "Il ignore les plaintes individuelles"
    ],
    "correct": 0
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Que représente Marianne ?",
    "answers": [
      "La liberté et la République française",
      "La monarchie",
      "Un personnage historique du Moyen Âge",
      "Une fête nationale"
    ],
    "correct": 0
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Qu'est-ce que la liberté d'association ?",
    "answers": [
      "Le droit de former ou rejoindre des groupes, clubs ou associations",
      "L’obligation de rejoindre une association",
      "L’interdiction de créer des associations",
      "Le droit de dissoudre des associations par décret"
    ],
    "correct": 0
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Qu'est-ce que la liberté ?",
    "answers": [
      "Le droit de tout faire sans limites",
      "Le droit d’agir dans le respect de la loi",
      "L’abolition de toutes les règles",
      "Une notion religieuse uniquement"
    ],
    "correct": 1
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Qu'est-ce que la Marseillaise ?",
    "answers": [
      "Un monument",
      "L’hymne national français",
      "Un personnage historique",
      "Un drapeau"
    ],
    "correct": 1
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Sur quel document peut-on voir Marianne ?",
    "answers": [
      "Le passeport et les timbres officiels",
      "Le permis de conduire uniquement",
      "Les factures d’électricité",
      "Les tickets de cinéma"
    ],
    "correct": 0
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Un employeur refuse d’embaucher des femmes dans son entreprise. Que dit la loi ?",
    "answers": [
      "C’est légal selon la liberté de recrutement",
      "C’est interdit, c’est une discrimination",
      "C’est autorisé uniquement pour certaines professions",
      "C’est une recommandation mais pas une obligation"
    ],
    "correct": 1
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Une des valeurs de la devise républicaine est l'égalité. Qu'est-ce que cela signifie ?",
    "answers": [
      "Que tous les citoyens sont traités de la même façon devant la loi",
      "Que certains citoyens ont plus de droits",
      "Que la richesse doit être identique pour tous",
      "Que la liberté est optionnelle"
    ],
    "correct": 0
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Quelle est la place de la langue française dans la République ?",
    "answers": [
      "C’est la langue officielle de l’État",
      "Elle est facultative",
      "Elle est réservée à l’école seulement",
      "Elle peut être remplacée par toute langue étrangère"
    ],
    "correct": 0
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Quels sont des symboles officiels de la République française ?",
    "answers": [
      "Marianne, le drapeau tricolore, la Marseillaise",
      "La tour Eiffel et le Louvre",
      "Le coq et le fromage",
      "Napoléon Bonaparte"
    ],
    "correct": 0
  },
    {
    "theme": "Système institutionnel et politique",
    "question": "Qu'est-ce que l'État de droit ?",
    "answers": [
      "Un État où la loi s’applique à tous et garantit les libertés",
      "Un État dirigé par une seule personne",
      "Un État où certaines personnes sont au-dessus de la loi",
      "Un État sans lois écrites"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Le président de la République a commis un crime. Quelle proposition est correcte ?",
    "answers": [
      "Il peut être jugé comme tout citoyen après son mandat",
      "Il est protégé à vie et ne peut jamais être jugé",
      "Il peut décider lui-même de son jugement",
      "Il ne peut être jugé que par le Parlement"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "La loi est l'expression de :",
    "answers": [
      "La volonté générale",
      "La volonté du président uniquement",
      "La volonté des entreprises",
      "La volonté de la police"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quelle est la durée du mandat du conseil municipal et du maire ?",
    "answers": [
      "5 ans",
      "4 ans",
      "6 ans",
      "3 ans"
    ],
    "correct": 2
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Que garantit l’État de droit ?",
    "answers": [
      "Que la loi s’applique à tous et protège les droits",
      "Que le président décide seul des lois",
      "Que les citoyens ne paient pas d’impôts",
      "Que la police peut agir sans contrôle"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Une personne peut-elle voter à la place d'une autre ?",
    "answers": [
      "Oui, si elle a une procuration",
      "Oui, toujours",
      "Non, jamais, même avec autorisation",
      "Oui, uniquement pour les élections locales"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Est-ce que le vote est obligatoire ?",
    "answers": [
      "Non, il est libre en France",
      "Oui, pour tous les citoyens",
      "Oui, uniquement pour les élections présidentielles",
      "Non, sauf en cas de référendum"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "À la fin de son mandat, le président de la République peut-il décider de rester au pouvoir ?",
    "answers": [
      "Non, il doit passer le pouvoir selon la Constitution",
      "Oui, si le Parlement est d’accord",
      "Oui, s’il y a un référendum",
      "Oui, toujours"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qui dirige l'action du Gouvernement ?",
    "answers": [
      "Le Premier ministre",
      "Le président du Sénat",
      "Le président de l’Assemblée nationale",
      "Le Conseil constitutionnel"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qui nomme le Premier ministre ?",
    "answers": [
      "Le président de la République",
      "L’Assemblée nationale",
      "Le Sénat",
      "Le Conseil constitutionnel"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quelle est l'organisation administrative de la France ?",
    "answers": [
      "État, régions, départements, communes",
      "État et provinces uniquement",
      "État et cantons uniquement",
      "État et territoires indépendants"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qu'est-ce que le pouvoir législatif ? Le pouvoir :",
    "answers": [
      "Fait les lois",
      "Applique les lois",
      "Juge les infractions",
      "Nomine les préfets"
    ],
    "correct": 0
  },
    {
    "theme": "Système institutionnel et politique",
    "question": "Pourquoi séparer les trois pouvoirs dans une démocratie ?",
    "answers": [
      "Pour éviter la concentration des pouvoirs et protéger les libertés",
      "Pour que le président ait plus de pouvoirs",
      "Pour faciliter le travail des ministres",
      "Pour que les citoyens ne votent pas"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qui sanctionne l'auteur d'un vol ?",
    "answers": [
      "La justice",
      "Le maire",
      "Le président",
      "Le conseil municipal"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quel est le rôle du gouvernement ?",
    "answers": [
      "Diriger l’action de l’État et appliquer les lois",
      "Faire les lois",
      "Contrôler le Parlement",
      "Nommer les juges"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Que se passe-t-il si un ministre ne respecte pas la loi ?",
    "answers": [
      "Il peut être poursuivi devant la justice",
      "Rien ne peut lui arriver",
      "Le président le protège automatiquement",
      "Le Parlement le sanctionne seul"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Combien de députés composent l’Assemblée nationale ?",
    "answers": [
      "577",
      "350",
      "705",
      "450"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qui peut voter aux élections en France ?",
    "answers": [
      "Tout citoyen français majeur inscrit sur les listes électorales",
      "Tout résident, quel que soit son âge",
      "Tout citoyen européen vivant en France",
      "Tout résident étranger"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Pour combien de temps sont élus les sénateurs ?",
    "answers": [
      "6 ans",
      "5 ans",
      "4 ans",
      "3 ans"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "La séparation des pouvoirs est un principe fondamental. Quels sont les trois pouvoirs concernés ?",
    "answers": [
      "Législatif, exécutif, judiciaire",
      "Militaire, judiciaire, économique",
      "Exécutif, parlementaire, religieux",
      "Législatif, administratif, économique"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Est-ce que le président de la République a tous les pouvoirs ?",
    "answers": [
      "Non, il partage les pouvoirs avec le Parlement et le gouvernement",
      "Oui, il décide seul de tout",
      "Oui, sauf pour la justice",
      "Non, il n’a aucun pouvoir"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qui est le préfet ?",
    "answers": [
      "Le représentant de l’État dans un département",
      "Le maire de la commune",
      "Le président du conseil régional",
      "Le chef de la police municipale"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quelle condition est nécessaire pour voter aux élections ?",
    "answers": [
      "Être majeur et inscrit sur les listes électorales",
      "Être propriétaire",
      "Avoir un diplôme",
      "Être né en France"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qui dirige la commune ?",
    "answers": [
      "Le maire",
      "Le préfet",
      "Le président du département",
      "Le président de région"
    ],
    "correct": 0
  },
    {
    "theme": "Système institutionnel et politique",
    "question": "Quel est le régime politique de la France aujourd'hui ?",
    "answers": [
      "République démocratique",
      "Monarchie",
      "Dictature",
      "Empire"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qu'est-ce que l'Hôtel de Matignon ?",
    "answers": [
      "La résidence officielle du Premier ministre",
      "La résidence du président",
      "Le siège de l’Assemblée nationale",
      "Le siège du Sénat"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Le Parlement est composé :",
    "answers": [
      "De l’Assemblée nationale et du Sénat",
      "Du président et du Premier ministre",
      "Des maires et des conseillers municipaux",
      "Du Conseil constitutionnel et du Sénat"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quel est le rôle du président de la République ?",
    "answers": [
      "Garantir la Constitution, représenter la France et nommer le Premier ministre",
      "Faire toutes les lois",
      "Diriger les communes",
      "Sanctionner les tribunaux"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quel est le rôle du Premier ministre ?",
    "answers": [
      "Diriger l’action du gouvernement et appliquer les lois",
      "Présider le Sénat",
      "Rédiger les lois seul",
      "Diriger le Conseil constitutionnel"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qui est le chef du Gouvernement ?",
    "answers": [
      "Le Premier ministre",
      "Le président",
      "Le ministre de l’Intérieur",
      "Le maire"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Combien y a-t-il de régions en France ?",
    "answers": [
      "18",
      "13",
      "22",
      "25"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quel est le rôle du Défenseur des droits ?",
    "answers": [
      "Protéger les droits et lutter contre les discriminations",
      "Rédiger les lois",
      "Contrôler les maires",
      "Sanctionner les juges"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Depuis quand l'euro est-elle la monnaie unique ?",
    "answers": [
      "2002",
      "1999",
      "2010",
      "1995"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quel est le rôle principal du département ?",
    "answers": [
      "Gérer les routes, collèges et aides sociales",
      "Gérer la diplomatie",
      "Émettre la monnaie",
      "Nommer les ministres"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quel est le rôle principal des communes ?",
    "answers": [
      "Gérer l’école primaire, la voirie locale et les services de proximité",
      "Gérer les universités",
      "Diriger les hôpitaux régionaux",
      "Sanctionner les entreprises"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Combien de communes environ existe-t-il en France ?",
    "answers": [
      "35 000",
      "10 000",
      "50 000",
      "5 000"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quel traité concerne la construction de l'Union européenne ?",
    "answers": [
      "Le traité de Maastricht",
      "Le traité de Versailles",
      "Le traité de Rome",
      "Le traité de Lisbonne"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quel État a quitté l'Union européenne en 2020 ?",
    "answers": [
      "Le Royaume-Uni",
      "La Grèce",
      "L’Italie",
      "Le Danemark"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quelle est la devise de l’Union européenne ?",
    "answers": [
      "Unie dans la diversité",
      "Liberté, Égalité, Fraternité",
      "Progrès et Paix",
      "Force et Solidarité"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quel est l'hymne de l'Union européenne ?",
    "answers": [
      "L'Ode à la joie",
      "La Marseillaise",
      "God Save the Queen",
      "L’Hymne à la Liberté"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "De quoi est composé le drapeau européen ?",
    "answers": [
      "12 étoiles dorées sur fond bleu",
      "10 étoiles argentées sur fond rouge",
      "15 étoiles dorées sur fond blanc",
      "20 étoiles bleues sur fond jaune"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "De quelle couleur est le drapeau européen ?",
    "answers": [
      "Bleu avec des étoiles dorées",
      "Rouge avec des étoiles argentées",
      "Vert avec des étoiles blanches",
      "Jaune avec des étoiles bleues"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "En quelle année le traité de Maastricht, qui marque la fondation de l'Union européenne, a-t-il été signé ?",
    "answers": [
      "1992",
      "1989",
      "1995",
      "2000"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Où est le siège du Parlement européen ?",
    "answers": [
      "Strasbourg",
      "Bruxelles",
      "Luxembourg",
      "Paris"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Où est le siège de la Commission européenne ?",
    "answers": [
      "Bruxelles",
      "Strasbourg",
      "Luxembourg",
      "Amsterdam"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quel État n'est pas membre de l'Union européenne ?",
    "answers": [
      "La Norvège",
      "La France",
      "L’Allemagne",
      "L’Italie"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quand célèbre-t-on la journée de l'Europe ?",
    "answers": [
      "9 mai",
      "1er janvier",
      "21 juin",
      "14 juillet"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "À quelle fréquence les élections européennes sont-elles organisées ?",
    "answers": [
      "Tous les 5 ans",
      "Tous les 4 ans",
      "Tous les 6 ans",
      "Tous les 3 ans"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quelle condition est nécessaire pour voter aux élections européennes ?",
    "answers": [
      "Être majeur et inscrit sur les listes électorales",
      "Être résident étranger",
      "Avoir un diplôme universitaire",
      "Être fonctionnaire"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quel pays est un pays fondateur de l'Union européenne ?",
    "answers": [
      "La France",
      "L’Espagne",
      "La Suède",
      "Le Royaume-Uni"
    ],
    "correct": 0
  },
    {
    "theme": "Droits et devoirs",
    "question": "À quelle liberté la PMA fait-elle référence ?",
    "answers": [
      "La liberté de fonder une famille",
      "La liberté d’expression",
      "La liberté de circulation",
      "La liberté de réunion"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Au nom de quoi l'État justifie-t-il la restriction des droits ?",
    "answers": [
      "L’intérêt général et l’ordre public",
      "L’opinion du gouvernement",
      "Les traditions locales",
      "Les entreprises privées"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Concernant le droit de se marier, quelle proposition est correcte ?",
    "answers": [
      "Deux personnes majeures peuvent se marier librement",
      "Le mariage est réservé aux personnes riches",
      "Il faut l’autorisation du maire pour aimer quelqu’un",
      "Le mariage religieux est obligatoire"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Est-il toujours possible de divorcer ?",
    "answers": [
      "Oui, le divorce est autorisé par la loi",
      "Non, le divorce est interdit",
      "Oui, seulement après 20 ans de mariage",
      "Non, sauf accord du président"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "La peine de mort est :",
    "answers": [
      "Abolie en France",
      "Encore appliquée",
      "Réservée aux crimes graves",
      "Décidée par référendum"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Laquelle de ces citations est inscrite dans la Déclaration des Droits de l'homme et du Citoyen de 1789 ?",
    "answers": [
      "Les hommes naissent et demeurent libres et égaux en droits",
      "La France est une monarchie",
      "Le vote est obligatoire",
      "La religion est obligatoire"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Le recours à l'avortement est-il autorisé ?",
    "answers": [
      "Oui, dans un cadre légal",
      "Non, jamais",
      "Oui, uniquement à l’étranger",
      "Non, sauf autorisation judiciaire"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Que contient la Constitution ?",
    "answers": [
      "Les règles fondamentales d’organisation de l’État et les droits",
      "Les horaires des administrations",
      "Les règlements intérieurs des entreprises",
      "Les lois municipales uniquement"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Que garantit la liberté de la presse ?",
    "answers": [
      "Le droit d’informer librement dans le respect de la loi",
      "Le droit de diffamer sans sanction",
      "Le contrôle total des médias par l’État",
      "L’interdiction des journaux étrangers"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Que prévoit la Charte de l'environnement ?",
    "answers": [
      "La protection de l’environnement et le développement durable",
      "La liberté d’expression",
      "L’organisation des élections",
      "La création des communes"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Que signifie la dignité humaine ?",
    "answers": [
      "Le respect de chaque personne",
      "Le respect des biens matériels",
      "Le droit d’imposer ses idées",
      "La supériorité d’un groupe"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Que signifie le droit de manifester ?",
    "answers": [
      "Exprimer collectivement une opinion dans le respect de la loi",
      "Refuser toute autorité",
      "Occuper un bâtiment public sans autorisation",
      "Imposer ses idées par la force"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Que signifie PMA ?",
    "answers": [
      "Procréation Médicalement Assistée",
      "Protection Médicale Administrative",
      "Programme Médical Autorisé",
      "Procédure de Mariage Assistée"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Quel texte est le plus difficile à modifier ?",
    "answers": [
      "La Constitution",
      "Un arrêté municipal",
      "Un règlement intérieur",
      "Un décret simple"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Quelle liberté permet à une personne de croire en la religion de son choix ?",
    "answers": [
      "La liberté de conscience",
      "La liberté de circulation",
      "La liberté d’association",
      "La liberté de commerce"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Qu'est-ce que le droit de grève ?",
    "answers": [
      "Le droit de cesser collectivement le travail pour défendre des revendications",
      "Le droit de quitter définitivement son emploi",
      "Le droit de ne jamais travailler",
      "Le droit d’imposer ses idées par la force"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Qu'est-ce que la Constitution ?",
    "answers": [
      "La loi fondamentale qui organise les pouvoirs publics",
      "Un règlement d’entreprise",
      "Une loi locale",
      "Un traité européen"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Qui peut demander à avorter ?",
    "answers": [
      "Toute femme enceinte dans le cadre légal",
      "Seulement les femmes mariées",
      "Uniquement avec l’accord du conjoint",
      "Seulement les mineures"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Une femme majeure de nationalité française a-t-elle le droit de voter aux élections ?",
    "answers": [
      "Oui, si elle est inscrite sur les listes électorales",
      "Non",
      "Oui, uniquement aux élections municipales",
      "Seulement si elle est mariée"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Concernant l'utilisation des réseaux sociaux, quelle proposition est correcte ?",
    "answers": [
      "Les propos tenus en ligne sont soumis à la loi",
      "Tout est autorisé sur internet",
      "On peut insulter librement",
      "Les lois ne s’appliquent pas en ligne"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Jeter un mégot par terre est :",
    "answers": [
      "Interdit et passible d’amende",
      "Autorisé partout",
      "Recommandé",
      "Sans conséquence"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "L'État peut-il limiter les droits et libertés ?",
    "answers": [
      "Oui, pour protéger l’ordre public et l’intérêt général",
      "Non, jamais",
      "Oui, sans justification",
      "Seulement en période électorale"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Parmi ces actions, laquelle permet d'adopter une attitude respectueuse de l’environnement ?",
    "answers": [
      "Trier ses déchets",
      "Brûler ses ordures",
      "Jeter ses déchets dans la nature",
      "Utiliser plus d’emballages plastiques"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Quelle proposition constitue une obligation ?",
    "answers": [
      "Respecter la loi",
      "Voter à chaque élection",
      "Adhérer à une association",
      "Participer à une manifestation"
    ],
    "correct": 0
  },
    {
    "theme": "Droits et devoirs",
    "question": "Pour quel motif peut-on limiter la liberté d'expression ?",
    "answers": [
      "Pour protéger l’ordre public et les droits d’autrui",
      "Pour empêcher toute critique du gouvernement",
      "Pour interdire les débats politiques",
      "Pour limiter les opinions personnelles"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Pourquoi doit-on trier ses déchets ?",
    "answers": [
      "Pour protéger l’environnement et favoriser le recyclage",
      "Pour éviter de payer des impôts",
      "Pour décorer les rues",
      "Ce n’est pas nécessaire"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Que doit faire une victime de violences ?",
    "answers": [
      "Porter plainte et demander de l’aide",
      "Garder le silence",
      "Se faire justice elle-même",
      "Quitter le territoire"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Que doit-on faire face aux ordres des policiers ou gendarmes ?",
    "answers": [
      "Obéir dans le respect de la loi",
      "Refuser systématiquement",
      "Négocier immédiatement",
      "Ignorer les ordres"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Quel est le rôle de la police ?",
    "answers": [
      "Assurer la sécurité et maintenir l’ordre public",
      "Rédiger les lois",
      "Gérer les communes",
      "Organiser les élections"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Quel est un exemple d’assistance à personne en danger ?",
    "answers": [
      "Appeler les secours pour aider une personne blessée",
      "Filmer un accident sans intervenir",
      "Ignorer une personne en difficulté",
      "Quitter les lieux immédiatement"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Quel exemple illustre une limitation de liberté pour protéger l'intérêt général ?",
    "answers": [
      "L’interdiction de fumer dans les lieux publics",
      "L’interdiction de voter",
      "L’interdiction de se déplacer",
      "L’interdiction de travailler"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Quelle est l’attitude à avoir lorsque qu'on est témoin de violences ?",
    "answers": [
      "Prévenir les autorités",
      "Encourager la situation",
      "Rester indifférent",
      "Partager sur les réseaux sociaux"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Quelle est l'infraction la plus grave ?",
    "answers": [
      "Le crime",
      "La contravention",
      "L’amende simple",
      "Le rappel à la loi"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Quelle obligation concerne toutes les personnes résidant en France quelle que soit leur nationalité ?",
    "answers": [
      "Respecter les lois françaises",
      "Voter aux élections",
      "Faire un service militaire",
      "Adhérer à un parti politique"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Quelle proposition représente un exemple de crime ?",
    "answers": [
      "Un meurtre",
      "Un stationnement interdit",
      "Un retard de paiement",
      "Un oubli de ticket"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Quelle proposition représente un exemple de délit ?",
    "answers": [
      "Un vol",
      "Un meurtre",
      "Une contravention de stationnement",
      "Un avertissement"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Qui veille au maintien de l’ordre public ?",
    "answers": [
      "La police et la gendarmerie",
      "Le Parlement",
      "Les entreprises privées",
      "Les associations"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "S'agissant des déchets, quelle proposition est correcte ?",
    "answers": [
      "Ils doivent être triés et jetés dans des conteneurs adaptés",
      "On peut les jeter dans la rue",
      "Ils peuvent être brûlés en ville",
      "Ils ne concernent que les entreprises"
    ],
    "correct": 0
  },
    {
    "theme": "Histoire géographie et culture",
    "question": "Quel était le surnom de Louis XIV ?",
    "answers": [
      "Le Roi Soleil",
      "Le Roi Chevalier",
      "Le Roi Sage",
      "Le Roi Guerrier"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quel roi de France a été exécuté pendant la Révolution française ?",
    "answers": [
      "Louis XVI",
      "Louis XV",
      "Henri IV",
      "François Ier"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "En quelle année Napoléon Ier est-il devenu empereur ?",
    "answers": [
      "1804",
      "1789",
      "1815",
      "1799"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Lequel de ces personnages a un lien avec la République française ?",
    "answers": [
      "Marianne",
      "Napoléon III",
      "Louis XV",
      "Charlemagne"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "De quand date l'appel à la résistance du général de Gaulle ?",
    "answers": [
      "18 juin 1940",
      "8 mai 1945",
      "14 juillet 1789",
      "11 novembre 1918"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Pourquoi la Shoah est-elle étudiée à l'école ?",
    "answers": [
      "Pour transmettre la mémoire et lutter contre le racisme et l’antisémitisme",
      "Pour glorifier la guerre",
      "Pour valoriser la violence",
      "Pour remplacer l’histoire ancienne"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quel pays a été colonisé par la France ?",
    "answers": [
      "L’Algérie",
      "Le Japon",
      "La Norvège",
      "Le Brésil"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Depuis quand les Français élisent-ils le président de la République au suffrage universel direct ?",
    "answers": [
      "1962",
      "1958",
      "1945",
      "1974"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quelle est la première étape de la construction européenne en 1951 ?",
    "answers": [
      "La création de la CECA",
      "Le traité de Maastricht",
      "La création de l’euro",
      "L’entrée du Royaume-Uni"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Durant le mandat de quel président la peine de mort a-t-elle été abolie ?",
    "answers": [
      "François Mitterrand",
      "Charles de Gaulle",
      "Jacques Chirac",
      "Valéry Giscard d’Estaing"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quel régime politique a été mis en place pendant la Révolution française en 1792 ?",
    "answers": [
      "La Première République",
      "La Monarchie absolue",
      "L’Empire",
      "La Restauration"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qui était une figure de la Résistance française pendant la Seconde Guerre mondiale ?",
    "answers": [
      "Jean Moulin",
      "Napoléon Bonaparte",
      "Victor Hugo",
      "Louis XIV"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "En 1944, qu'est-ce qui a changé pour les femmes ?",
      "answers": [
        "Elles ont obtenu le droit de vote",
        "Elles sont devenues éligibles à la présidence uniquement",
        "Elles ont été exemptées d’impôts",
        "Elles ont obtenu le service militaire obligatoire"
      ],
      "correct": 0
    },
    {
      "theme": "Histoire géographie et culture",
      "question": "Quelle organisation internationale a été créée en 1945 après la Seconde Guerre mondiale ?",
      "answers": [
        "L’ONU",
        "L’OTAN",
        "L’Union européenne",
        "La Croix-Rouge"
      ],
      "correct": 0
    },
    {
      "theme": "Histoire géographie et culture",
      "question": "Quelle peine a été supprimée en 1981 ?",
      "answers": [
        "La peine de mort",
        "Le bagne",
        "Les travaux forcés",
        "L’exil"
      ],
      "correct": 0
    },
    {
      "theme": "Histoire géographie et culture",
      "question": "En quelle année l'euro est-elle devenue la monnaie utilisée en France ?",
      "answers": [
        "2002",
        "1995",
        "1999",
        "2010"
      ],
      "correct": 0
    },
    {
      "theme": "Histoire géographie et culture",
      "question": "En quelle année a commencé la Première Guerre mondiale ?",
      "answers": [
        "1914",
        "1918",
        "1939",
        "1920"
      ],
      "correct": 0
    },
    {
      "theme": "Histoire géographie et culture",
      "question": "Où a eu lieu le débarquement en 1944 ?",
      "answers": [
        "En Normandie",
        "À Marseille",
        "À Calais",
        "À Bordeaux"
      ],
      "correct": 0
    },
    {
      "theme": "Histoire géographie et culture",
      "question": "Quel continent a été le plus concerné par la décolonisation française après la Seconde Guerre mondiale ?",
      "answers": [
        "L’Afrique",
        "L’Asie",
        "L’Amérique",
        "L’Océanie"
      ],
      "correct": 0
    },
    {
      "theme": "Histoire géographie et culture",
      "question": "Que fête-t-on le 8 mai ?",
      "answers": [
        "La victoire de 1945",
        "La Révolution française",
        "L’armistice de 1918",
        "La fête nationale"
      ],
      "correct": 0
    },
    {
      "theme": "Histoire géographie et culture",
      "question": "Quelle mer ou océan borde la France métropolitaine ?",
      "answers": [
        "L’océan Atlantique",
        "La mer Noire",
        "La mer Rouge",
        "L’océan Pacifique"
      ],
      "correct": 0
    },
    {
      "theme": "Histoire géographie et culture",
      "question": "Quel pays a une frontière terrestre avec la France métropolitaine ?",
      "answers": [
        "L’Espagne",
        "Le Portugal",
        "Le Danemark",
        "La Grèce"
      ],
      "correct": 0
    },
    {
      "theme": "Histoire géographie et culture",
      "question": "Quelle ville française est un port maritime ?",
      "answers": [
        "Marseille",
        "Lyon",
        "Strasbourg",
        "Clermont-Ferrand"
      ],
      "correct": 0
    },
    {
      "theme": "Histoire géographie et culture",
      "question": "Quelle mer se situe entre la France et l'Angleterre ?",
      "answers": [
        "La Manche",
        "La mer Méditerranée",
        "La mer Baltique",
        "La mer Adriatique"
      ],
      "correct": 0
    },
    {
      "theme": "Histoire géographie et culture",
      "question": "Qu'est-ce que la France d'outre-mer ?",
      "answers": [
        "Les territoires français situés hors d’Europe",
        "Les anciennes colonies devenues indépendantes",
        "Les régions rurales françaises",
        "Les territoires européens voisins"
      ],
      "correct": 0
    },
    {
      "theme": "Histoire géographie et culture",
      "question": "Quelle chaîne de montagnes est située entre la France et l’Espagne ?",
      "answers": [
        "Les Pyrénées",
        "Les Alpes",
        "Le Jura",
        "Les Vosges"
      ],
      "correct": 0
    },
    {
      "theme": "Histoire géographie et culture",
      "question": "Quelle île française se trouve dans l'océan Indien ?",
      "answers": [
        "La Réunion",
        "La Corse",
        "Oléron",
        "Noirmoutier"
      ],
      "correct": 0
    },
    {
      "theme": "Histoire géographie et culture",
      "question": "Quelle est la population approximative de la France en 2025 ?",
      "answers": [
        "Environ 68 millions",
        "Environ 50 millions",
        "Environ 80 millions",
        "Environ 40 millions"
      ],
      "correct": 0
    },
    {
      "theme": "Histoire géographie et culture",
      "question": "Quel fleuve traverse Paris ?",
      "answers": [
        "La Seine",
        "La Loire",
        "Le Rhône",
        "La Garonne"
      ],
      "correct": 0
    },
    {
      "theme": "Histoire géographie et culture",
      "question": "Lequel de ces pays partage des frontières terrestres avec la France ?",
      "answers": [
        "L’Italie",
        "Le Royaume-Uni",
        "L’Irlande",
        "L’Islande"
      ],
      "correct": 0
    },
    {
      "theme": "Histoire géographie et culture",
      "question": "Quel pays a une frontière avec la France métropolitaine au nord-est ?",
      "answers": [
        "L’Allemagne",
        "L’Espagne",
        "L’Andorre",
        "Le Portugal"
      ],
      "correct": 0
    },
    {
      "theme": "Histoire géographie et culture",
      "question": "Où se trouvent les principales activités économiques en France ?",
      "answers": [
        "Dans les grandes villes et les régions industrielles",
        "Uniquement en zone rurale",
        "Principalement dans les montagnes",
        "Seulement sur le littoral"
      ],
      "correct": 0
    },
     {
      "question": "Parmi ces pays, lequel attire le plus de visiteurs chaque année ?",
      "answers": [
        "La France",
        "L’Italie",
        "L’Espagne",
        "Les États-Unis"
      ],
      "correct": 0
    },
    {
      "question": "Où habite la majorité des Français ?",
      "answers": [
        "En ville",
        "À la montagne",
        "À la campagne isolée",
        "À l’étranger"
      ],
      "correct": 0
    },
    {
      "question": "Quelle région est la plus peuplée ?",
      "answers": [
        "Île-de-France",
        "Bretagne",
        "Corse",
        "Bourgogne-Franche-Comté"
      ],
      "correct": 0
    },
    {
      "question": "Quelle ville française fait partie des 10 plus grandes métropoles du pays ?",
      "answers": [
        "Toulouse",
        "Annecy",
        "Poitiers",
        "Bayonne"
      ],
      "correct": 0
    },
    {
      "question": "Lequel de ces départements de France est le plus touristique ?",
      "answers": [
        "Paris",
        "Creuse",
        "Cantal",
        "Haute-Marne"
      ],
      "correct": 0
    },
    {
      "question": "Quand peut-on visiter gratuitement des lieux culturels en France ?",
      "answers": [
        "Lors des Journées européennes du patrimoine",
        "Uniquement le 14 juillet",
        "Tous les jours",
        "Seulement en été"
      ],
      "correct": 0
    },
    {
      "question": "Combien de personnes parlent français dans le monde ?",
      "answers": [
        "Environ 320 millions",
        "Environ 50 millions",
        "Environ 1 milliard",
        "Environ 100 millions"
      ],
      "correct": 0
    },
    {
      "question": "Qui était Marguerite Yourcenar ?",
      "answers": [
        "Une écrivaine française",
        "Une reine de France",
        "Une scientifique",
        "Une peintre"
      ],
      "correct": 0
    },
    {
      "question": "Quel peintre est français ?",
      "answers": [
        "Claude Monet",
        "Pablo Picasso",
        "Salvador Dalí",
        "Vincent van Gogh"
      ],
      "correct": 0
    },
    {
      "question": "Quel musée est situé à Paris ?",
      "answers": [
        "Le Louvre",
        "Le Prado",
        "Le British Museum",
        "Le MoMA"
      ],
      "correct": 0
    },
    {
      "question": "Qui était Auguste Rodin ?",
      "answers": [
        "Un sculpteur français",
        "Un président",
        "Un explorateur",
        "Un compositeur"
      ],
      "correct": 0
    },
    {
      "question": "Quel est le classement de la langue française parmi les langues les plus parlées dans le monde ?",
      "answers": [
        "Environ 5e",
        "1re",
        "10e",
        "20e"
      ],
      "correct": 0
    },
    {
      "question": "Quelle cathédrale célèbre a été en partie détruite par un incendie en 2019 ?",
      "answers": [
        "Notre-Dame de Paris",
        "Sacré-Cœur",
        "Cathédrale de Reims",
        "Cathédrale de Strasbourg"
      ],
      "correct": 0
    },
    {
      "question": "Qui était une écrivaine française célèbre ?",
      "answers": [
        "George Sand",
        "Napoléon Bonaparte",
        "Claude Monet",
        "Louis Pasteur"
      ],
      "correct": 0
    },
    {
      "question": "Qui était un célèbre musicien français ?",
      "answers": [
        "Claude Debussy",
        "William Shakespeare",
        "Léonard de Vinci",
        "Wolfgang Amadeus Mozart"
      ],
      "correct": 0
    },
    {
      "question": "Qui était Auguste Renoir ?",
      "answers": [
        "Un peintre impressionniste",
        "Un général",
        "Un roi",
        "Un écrivain"
      ],
      "correct": 0
    },
    {
      "question": "Quelle fête est française ?",
      "answers": [
        "Le 14 juillet",
        "Thanksgiving",
        "Halloween",
        "La Saint-Patrick"
      ],
      "correct": 0
    }
]
