const QUESTIONS = [
  {
    "theme": "Principes et valeurs de la République",
    "question": "À quoi correspond la date du 14 juillet ?",
    "answers": [
      "À la fête de la musique",
      "À la fête du travail",
      "À la fête nationale française",
      "À la fin de la Première Guerre mondiale"
    ],
    "correct": 2
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Quel est le nom de l'hymne national ?",
    "answers": [
      "Le Chant des Partisans",
      "La Marseillaise",
      "La Carmagnole",
      "La Madelon"
    ],
    "correct": 1
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Quelle est la date de la fête nationale française ?",
    "answers": [
      "1er mai",
      "14 juillet",
      "1er janvier",
      "25 décembre"
    ],
    "correct": 1
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Quelle est la devise de la République française ?",
    "answers": [
      "Force, honneur, fraternité",
      "Paix, travail, justice",
      "Unité, solidarité, liberté",
      "Liberté, égalité, fraternité"
    ],
    "correct": 3
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Quelle est la langue officielle de la République française ?",
    "answers": [
      "L’espagnol",
      "L’anglais",
      "L’allemand",
      "Le français"
    ],
    "correct": 3
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Quelle liberté permet à chacun d’exprimer ses idées ?",
    "answers": [
      "La liberté religieuse",
      "La liberté de circulation",
      "La liberté de réunion",
      "La liberté d’expression"
    ],
    "correct": 3
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Quelles sont les couleurs du drapeau français ?",
    "answers": [
      "Bleu, jaune, rouge",
      "Bleu, blanc, rouge",
      "Vert, blanc, rouge",
      "Noir, blanc, rouge"
    ],
    "correct": 1
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Qu'est-ce qui est traditionnellement organisé sur les Champs Élysées le 14 juillet pour célébrer la fête nationale ?",
    "answers": [
      "Une foire commerciale",
      "Une course cycliste",
      "Un concert de musique classique",
      "Un défilé militaire"
    ],
    "correct": 3
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Qui est Marianne ?",
    "answers": [
      "Une chanteuse célèbre",
      "Une ville française",
      "Un symbole de la République française",
      "Un personnage de roman"
    ],
    "correct": 2
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Lequel de ces symboles représente officiellement la République française ?",
    "answers": [
      "Le coq gaulois seulement en dessin",
      "La Tour Eiffel",
      "La statue de la Liberté",
      "Le drapeau tricolore"
    ],
    "correct": 3
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Où peut-on voir la devise de la République ?",
    "answers": [
      "Sur les billets de cinéma",
      "Dans les livres de recettes",
      "Sur les panneaux publicitaires",
      "Sur les bâtiments publics"
    ],
    "correct": 3
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Quels sont des symboles officiels de la République française ?",
    "answers": [
      "Le Mont Blanc et la Tour Eiffel",
      "Le coq uniquement",
      "Le drapeau, la Marseillaise, Marianne",
      "La devise et le Louvre"
    ],
    "correct": 2
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Qu’est-ce que l’égalité ?",
    "answers": [
      "Le fait de choisir ses lois",
      "Le fait que tous les citoyens aient les mêmes droits",
      "Le fait que chacun peut faire ce qu’il veut",
      "Le fait que certains ont plus de droits"
    ],
    "correct": 1
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Que signifie la liberté ?",
    "answers": [
      "Pouvoir faire tout ce que l’on veut",
      "Pouvoir ignorer les règles de circulation",
      "Être libre de payer ou non ses impôts",
      "Pouvoir agir sans nuire aux autres et selon la loi"
    ],
    "correct": 3
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Que signifie le mot \"fraternité\" dans la devise française ?",
    "answers": [
      "Famille seulement",
      "Amitié avec les voisins",
      "Relations commerciales",
      "Solidarité et entraide entre citoyens"
    ],
    "correct": 3
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Quel animal est un symbole de la France ?",
    "answers": [
      "L’aigle",
      "Le cheval",
      "Le coq",
      "Le lion"
    ],
    "correct": 2
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Quel est l’un des rôles des associations ?",
    "answers": [
      "Proposer des activités et défendre des causes",
      "Créer des lois",
      "Gérer les impôts",
      "Remplacer l’État"
    ],
    "correct": 0
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Quel est l’un des symboles de la République française ?",
    "answers": [
      "Le Mont Saint-Michel",
      "La Statue de la Liberté",
      "La Tour de Pise",
      "Le drapeau tricolore"
    ],
    "correct": 3
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Le principe d’égalité signifie que :",
    "answers": [
      "Tous les citoyens sont égaux devant la loi",
      "On peut discriminer selon l’âge",
      "Certains citoyens ont plus de droits que d’autres",
      "Les riches ont plus de libertés"
    ],
    "correct": 0
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "\"Liberté, égalité, fraternité\", c’est :",
    "answers": [
      "Une chanson populaire",
      "La devise de la République française",
      "Un slogan politique récent",
      "Une fête traditionnelle"
    ],
    "correct": 1
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "A-t-on le droit d'insulter publiquement quelqu’un parce qu’il est différent (handicap, apparence physique, sexe…) ?",
    "answers": [
      "Non, c’est interdit par la loi",
      "Oui, si c’est sur les réseaux sociaux",
      "Oui, si c’est un membre de la famille",
      "Non, mais seulement à l’école"
    ],
    "correct": 0
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Certains métiers peuvent-ils être réservés aux hommes ?",
    "answers": [
      "Oui, pour les emplois de direction",
      "Oui, seulement dans le secteur militaire",
      "Non, tous les métiers sont ouverts à tous",
      "Oui, certains métiers physiques"
    ],
    "correct": 2
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "De quand date la Constitution de la Ve République ?",
    "answers": [
      "1848",
      "1789",
      "1958",
      "1871"
    ],
    "correct": 2
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Le régime de la France est :",
    "answers": [
      "Républicain",
      "Monarchique",
      "Communiste",
      "Fédéral"
    ],
    "correct": 0
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Parmi les propositions suivantes, laquelle constitue une participation citoyenne ?",
    "answers": [
      "Refuser de payer ses impôts",
      "Ne pas respecter la loi",
      "Voter aux élections",
      "Ignorer les convocations administratives"
    ],
    "correct": 2
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
    "question": "Que garantit la liberté d’expression ?",
    "answers": [
      "L’obligation de suivre l’opinion du gouvernement",
      "Le droit de dire ce que l’on pense dans le respect des lois",
      "Le droit de tout faire sans limite",
      "L’interdiction de critiquer les institutions"
    ],
    "correct": 1
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "À quoi sert un titre de séjour ?",
    "answers": [
      "À autoriser un étranger à séjourner légalement en France",
      "À voyager librement dans le monde",
      "À obtenir automatiquement la nationalité française",
      "À voter aux élections nationales"
    ],
    "correct": 0
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "La liberté de circulation permet à toute personne de :",
    "answers": [
      "Circuler sans papiers d’identité",
      "Refuser tout contrôle d’identité",
      "Changer de nationalité librement",
      "Se déplacer librement sur le territoire dans le respect de la loi"
    ],
    "correct": 3
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Sur quel site internet peut-on retrouver le symbole de la République française ?",
    "answers": [
      "www.netflix.com",
      "www.gouvernement.fr",
      "www.wikipedia.org",
      "www.amazon.fr"
    ],
    "correct": 1
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Complétez ces paroles de la Marseillaise : \"Aux armes […] ! Formez vos bataillons\"",
    "answers": [
      "amis",
      "français",
      "soldats",
      "citoyens"
    ],
    "correct": 3
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Complétez les paroles de la Marseillaise : \"Allons enfants de la patrie […]\"",
    "answers": [
      "chantons la République",
      "le jour de gloire est arrivé",
      "marchons vers la liberté",
      "la victoire est arrivée"
    ],
    "correct": 1
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "En application de la liberté individuelle, quelle proposition est correcte ? Une personne peut :",
    "answers": [
      "Choisir son mode de vie dans le respect de la loi",
      "Faire justice elle-même",
      "Imposer ses choix aux autres",
      "Refuser d’obéir aux lois"
    ],
    "correct": 0
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Concernant la pratique de la religion, quelle proposition est correcte ?",
    "answers": [
      "Elle dépend de l’origine",
      "Elle est interdite en France",
      "Elle est obligatoire",
      "Elle est libre dans le respect de la loi"
    ],
    "correct": 3
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "En tant que parent, peut-on refuser que son enfant participe aux cours de sport à l'école car ils sont mixtes ?",
    "answers": [
      "Non, l’école publique est obligatoire et mixte",
      "Oui, uniquement au collège",
      "Oui, avec une autorisation du maire",
      "Oui, si on n’est pas d’accord"
    ],
    "correct": 0
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Quelle est la devise de la France ?",
    "answers": [
      "Liberté, Égalité, Fraternité",
      "Honneur et Patrie",
      "Unité et Justice",
      "Travail, Famille, Patrie"
    ],
    "correct": 0
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "La répudiation de sa femme est :",
    "answers": [
      "Acceptée si les deux époux sont d’accord",
      "Une pratique légale sous conditions",
      "Interdite par la loi française",
      "Autorisée par la loi française"
    ],
    "correct": 2
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Les impôts permettent de financer les dépenses publiques. Quelle proposition est correcte ?",
    "answers": [
      "Ils servent à financer les services publics et les infrastructures",
      "Ils servent uniquement à payer les policiers",
      "Ils sont facultatifs",
      "Ils financent uniquement les entreprises privées"
    ],
    "correct": 0
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Peut-on brûler publiquement un drapeau français ?",
    "answers": [
      "Non, c’est interdit par la loi",
      "Oui, c’est un acte libre",
      "Oui, si c’est à titre artistique",
      "Oui, uniquement lors de manifestations"
    ],
    "correct": 0
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Que fait l’État pour lutter contre les discriminations ?",
    "answers": [
      "Il ignore les plaintes individuelles",
      "Il ne peut rien faire",
      "Il impose des sanctions pénales et civiles",
      "Il favorise certaines religions"
    ],
    "correct": 2
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
      "L’obligation de rejoindre une association",
      "Le droit de dissoudre des associations par décret",
      "Le droit de former ou rejoindre des groupes, clubs ou associations",
      "L’interdiction de créer des associations"
    ],
    "correct": 2
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Qu'est-ce que la liberté ?",
    "answers": [
      "Le droit d’agir dans le respect de la loi",
      "Une notion religieuse uniquement",
      "L’abolition de toutes les règles",
      "Le droit de tout faire sans limites"
    ],
    "correct": 0
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Qu'est-ce que la Marseillaise ?",
    "answers": [
      "L’hymne national français",
      "Un monument",
      "Un personnage historique",
      "Un drapeau"
    ],
    "correct": 0
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
      "C’est autorisé uniquement pour certaines professions",
      "C’est une recommandation mais pas une obligation",
      "C’est interdit, c’est une discrimination"
    ],
    "correct": 3
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
      "Elle peut être remplacée par toute langue étrangère",
      "Elle est facultative",
      "C’est la langue officielle de l’État",
      "Elle est réservée à l’école seulement"
    ],
    "correct": 2
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Quels sont des symboles officiels de la République française ?",
    "answers": [
      "Le coq et le fromage",
      "Napoléon Bonaparte",
      "La tour Eiffel et le Louvre",
      "Marianne, le drapeau tricolore, la Marseillaise"
    ],
    "correct": 3
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qu'est-ce que l'État de droit ?",
    "answers": [
      "Un État sans lois écrites",
      "Un État où certaines personnes sont au-dessus de la loi",
      "Un État dirigé par une seule personne",
      "Un État où la loi s’applique à tous et garantit les libertés"
    ],
    "correct": 3
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Le président de la République a commis un crime. Quelle proposition est correcte ?",
    "answers": [
      "Il peut être jugé comme tout citoyen après son mandat",
      "Il peut décider lui-même de son jugement",
      "Il ne peut être jugé que par le Parlement",
      "Il est protégé à vie et ne peut jamais être jugé"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "La loi est l'expression de :",
    "answers": [
      "La volonté des entreprises",
      "La volonté du président uniquement",
      "La volonté générale",
      "La volonté de la police"
    ],
    "correct": 2
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qui nomme le Premier ministre ?",
    "answers": [
      "Les citoyens",
      "Le Conseil constitutionnel",
      "Le Parlement",
      "Le Président de la République"
    ],
    "correct": 3
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Le Parlement est composé :",
    "answers": [
      "Du Président et du Gouvernement",
      "Des maires et des préfets",
      "Du Sénat et de l'Assemblée nationale",
      "Du Conseil constitutionnel"
    ],
    "correct": 2
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qu'est-ce que le pouvoir exécutif ? Le pouvoir :",
    "answers": [
      "Qui applique les lois",
      "Qui organise les élections",
      "Qui juge les litiges",
      "Qui vote les lois"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Les dirigeants sont élus par les citoyens dans :",
    "answers": [
      "Les élections",
      "Les assemblées municipales uniquement",
      "Le Conseil constitutionnel",
      "Les nominations royales"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "A-t-on le droit de ne pas respecter une loi ?",
    "answers": [
      "Oui, seulement à l'école",
      "Oui, si elle ne plaît pas",
      "Non, la loi doit être respectée",
      "Non, sauf pour les ministres"
    ],
    "correct": 2
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qui doit respecter la loi ?",
    "answers": [
      "Seulement le Président",
      "Seulement les députés",
      "Tous les citoyens et les autorités",
      "Seulement les citoyens"
    ],
    "correct": 2
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quel est le rôle de l'autorité judiciaire ?",
    "answers": [
      "Rendre la justice et appliquer les lois",
      "Faire les lois",
      "Gérer le budget de l'État",
      "Nommer le Premier ministre"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quel pouvoir détient un juge ? Le pouvoir :",
    "answers": [
      "De diriger la police nationale",
      "D’exécuter les décisions du Président",
      "De juger et trancher les litiges",
      "De voter les lois"
    ],
    "correct": 2
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quelle est la durée du mandat du conseil municipal et du maire ?",
    "answers": [
      "3 ans",
      "6 ans",
      "4 ans",
      "5 ans"
    ],
    "correct": 1
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Que garantit l’État de droit ?",
    "answers": [
      "Que le président décide seul des lois",
      "Que la loi s’applique à tous et protège les droits",
      "Que les citoyens ne paient pas d’impôts",
      "Que la police peut agir sans contrôle"
    ],
    "correct": 1
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Une personne peut-elle voter à la place d'une autre ?",
    "answers": [
      "Oui, toujours",
      "Oui, si elle a une procuration",
      "Non, jamais, même avec autorisation",
      "Oui, uniquement pour les élections locales"
    ],
    "correct": 1
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Est-ce que le vote est obligatoire ?",
    "answers": [
      "Oui, pour tous les citoyens",
      "Oui, uniquement pour les élections présidentielles",
      "Non, sauf en cas de référendum",
      "Non, il est libre en France"
    ],
    "correct": 3
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "À la fin de son mandat, le président de la République peut-il décider de rester au pouvoir ?",
    "answers": [
      "Oui, si le Parlement est d’accord",
      "Oui, toujours",
      "Non, il doit passer le pouvoir selon la Constitution",
      "Oui, s’il y a un référendum"
    ],
    "correct": 2
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qui dirige l'action du Gouvernement ?",
    "answers": [
      "Le Conseil constitutionnel",
      "Le président du Sénat",
      "Le Premier ministre",
      "Le président de l’Assemblée nationale"
    ],
    "correct": 2
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qui nomme le Premier ministre ?",
    "answers": [
      "Le Conseil constitutionnel",
      "L’Assemblée nationale",
      "Le Sénat",
      "Le président de la République"
    ],
    "correct": 3
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quelle est l'organisation administrative de la France ?",
    "answers": [
      "État et provinces uniquement",
      "État et territoires indépendants",
      "État, régions, départements, communes",
      "État et cantons uniquement"
    ],
    "correct": 2
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qu'est-ce que le pouvoir législatif ? Le pouvoir :",
    "answers": [
      "Fait les lois",
      "Juge les infractions",
      "Nomine les préfets",
      "Applique les lois"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Pour combien de temps est élu le président de la République française ?",
    "answers": [
      "4 ans",
      "6 ans",
      "5 ans",
      "7 ans"
    ],
    "correct": 2
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Pour combien de temps sont élus les députés ?",
    "answers": [
      "5 ans",
      "6 ans",
      "3 ans",
      "4 ans"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Pour combien de temps sont élus les sénateurs ?",
    "answers": [
      "5 ans",
      "6 ans",
      "7 ans",
      "4 ans"
    ],
    "correct": 1
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qui possède le pouvoir exécutif ?",
    "answers": [
      "Le Président et le Gouvernement",
      "Le Conseil constitutionnel",
      "Le Parlement",
      "Les députés"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quelle condition est nécessaire pour voter aux élections ?",
    "answers": [
      "Payer ses impôts",
      "Avoir un diplôme",
      "Être marié",
      "Avoir 18 ans et être inscrit sur les listes électorales"
    ],
    "correct": 3
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Que signifie « suffrage universel » ?",
    "answers": [
      "Tous les citoyens peuvent voter",
      "Seules les personnes instruites votent",
      "Seules certaines régions votent",
      "Seules les personnes riches votent"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Concernant les partis politiques, quelle proposition est correcte ?",
    "answers": [
      "Ils présentent des candidats aux élections et défendent des idées",
      "Ils nomment le président",
      "Ils jugent les citoyens",
      "Ils font appliquer les lois"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quel est le rôle des députés ?",
    "answers": [
      "Voter les lois et contrôler le Gouvernement",
      "Diriger les communes",
      "Nommer les juges",
      "Gérer le budget européen"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "La séparation des pouvoirs est un principe fondamental. Quels sont les trois pouvoirs concernés ?",
    "answers": [
      "Ministres, préfets, juges",
      "Président, Premier ministre, Parlement",
      "Législatif, exécutif, judiciaire",
      "Députés, sénateurs, maires"
    ],
    "correct": 2
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qui possède le pouvoir législatif ?",
    "answers": [
      "Le Parlement",
      "Le Gouvernement",
      "Le Conseil constitutionnel",
      "Le Président"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qui sanctionne l'auteur d'un vol ?",
    "answers": [
      "Le maire",
      "Le Président",
      "Le Premier ministre",
      "Le juge"
    ],
    "correct": 3
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qui élit les députés ?",
    "answers": [
      "Le Conseil constitutionnel",
      "Le Sénat",
      "Les citoyens inscrits sur les listes électorales",
      "Le Président"
    ],
    "correct": 2
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qui vote les lois ?",
    "answers": [
      "Le Premier ministre",
      "Le Parlement",
      "Le Président",
      "Les citoyens"
    ],
    "correct": 1
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qui réside au palais de l'Élysée ?",
    "answers": [
      "Le maire de Paris",
      "Le Président de l’Assemblée",
      "Le Président de la République",
      "Le Premier ministre"
    ],
    "correct": 2
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Combien y a-t-il de départements en France ?",
    "answers": [
      "95",
      "80",
      "120",
      "101"
    ],
    "correct": 3
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qui représente l'État dans un département ?",
    "answers": [
      "Le maire",
      "Le Président du département",
      "Le député",
      "Le préfet"
    ],
    "correct": 3
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qui dirige la commune ?",
    "answers": [
      "Le député",
      "Le président de la République",
      "Le préfet",
      "Le maire"
    ],
    "correct": 3
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Est-ce que le président de la République a tous les pouvoirs ?",
    "answers": [
      "Non, les pouvoirs sont séparés",
      "Oui, il peut tout faire",
      "Oui, sauf pour les lois",
      "Non, il ne peut pas nommer le Premier ministre"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qui est le préfet ?",
    "answers": [
      "Le président du département",
      "Le représentant de l’État dans le département",
      "Le député",
      "Le maire"
    ],
    "correct": 1
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quel est le rôle du Parlement ?",
    "answers": [
      "Gérer les finances locales",
      "Voter les lois et contrôler le Gouvernement",
      "Nommer les ministres",
      "Rendre la justice"
    ],
    "correct": 1
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quel est le régime politique de la France aujourd'hui ?",
    "answers": [
      "Fédéralisme",
      "Monarchie",
      "République",
      "Empire"
    ],
    "correct": 2
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Combien d'États font partie de l'Union européenne au 1er janvier 2025 ?",
    "answers": [
      "28",
      "27",
      "25",
      "30"
    ],
    "correct": 1
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quel État n'est pas membre de l'Union européenne ?",
    "answers": [
      "Allemagne",
      "France",
      "Norvège",
      "Italie"
    ],
    "correct": 2
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quelle condition est nécessaire pour voter aux élections européennes ?",
    "answers": [
      "Résider uniquement en France",
      "Être citoyen européen et inscrit sur les listes électorales",
      "Avoir un emploi",
      "Avoir 16 ans"
    ],
    "correct": 1
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Pourquoi séparer les trois pouvoirs dans une démocratie ?",
    "answers": [
      "Pour faciliter le travail des ministres",
      "Pour que le président ait plus de pouvoirs",
      "Pour que les citoyens ne votent pas",
      "Pour éviter la concentration des pouvoirs et protéger les libertés"
    ],
    "correct": 3
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qui sanctionne l'auteur d'un vol ?",
    "answers": [
      "La justice",
      "Le président",
      "Le conseil municipal",
      "Le maire"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quel est le rôle du gouvernement ?",
    "answers": [
      "Faire les lois",
      "Diriger l’action de l’État et appliquer les lois",
      "Nommer les juges",
      "Contrôler le Parlement"
    ],
    "correct": 1
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Que se passe-t-il si un ministre ne respecte pas la loi ?",
    "answers": [
      "Le Parlement le sanctionne seul",
      "Il peut être poursuivi devant la justice",
      "Le président le protège automatiquement",
      "Rien ne peut lui arriver"
    ],
    "correct": 1
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Combien de députés composent l’Assemblée nationale ?",
    "answers": [
      "350",
      "577",
      "705",
      "450"
    ],
    "correct": 1
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qui peut voter aux élections en France ?",
    "answers": [
      "Tout citoyen européen vivant en France",
      "Tout résident, quel que soit son âge",
      "Tout résident étranger",
      "Tout citoyen français majeur inscrit sur les listes électorales"
    ],
    "correct": 3
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Pour combien de temps sont élus les sénateurs ?",
    "answers": [
      "6 ans",
      "4 ans",
      "5 ans",
      "3 ans"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "La séparation des pouvoirs est un principe fondamental. Quels sont les trois pouvoirs concernés ?",
    "answers": [
      "Législatif, administratif, économique",
      "Législatif, exécutif, judiciaire",
      "Militaire, judiciaire, économique",
      "Exécutif, parlementaire, religieux"
    ],
    "correct": 1
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Est-ce que le président de la République a tous les pouvoirs ?",
    "answers": [
      "Non, il n’a aucun pouvoir",
      "Non, il partage les pouvoirs avec le Parlement et le gouvernement",
      "Oui, sauf pour la justice",
      "Oui, il décide seul de tout"
    ],
    "correct": 1
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qui est le préfet ?",
    "answers": [
      "Le représentant de l’État dans un département",
      "Le chef de la police municipale",
      "Le maire de la commune",
      "Le président du conseil régional"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "L'autorité judiciaire est exercée par :",
    "answers": [
      "Le Parlement",
      "Les juges et magistrats",
      "Les avocats",
      "Le Président de la République"
    ],
    "correct": 1
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Que se passe-t-il si un ministre ne respecte pas la loi ?",
    "answers": [
      "Il est automatiquement réélu",
      "Il est nommé Président",
      "Il peut être poursuivi et sanctionné",
      "Il peut continuer sans problème"
    ],
    "correct": 2
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qui est élu lors des élections législatives ?",
    "answers": [
      "Les députés",
      "Les maires",
      "Les sénateurs",
      "Le Président de la République"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Combien de députés composent l’Assemblée nationale ?",
    "answers": [
      "350",
      "200",
      "705",
      "577"
    ],
    "correct": 3
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quand sont élus les sénateurs ?",
    "answers": [
      "Tous les cinq ans",
      "Tous les dix ans",
      "Tous les deux ans",
      "Tous les trois ans pour moitié"
    ],
    "correct": 3
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qui est élu lors des élections municipales ?",
    "answers": [
      "Le Président de la République",
      "Les conseillers municipaux",
      "Les préfets",
      "Les députés européens"
    ],
    "correct": 1
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qui est élu lors des élections présidentielles ?",
    "answers": [
      "Les sénateurs",
      "Le Premier ministre",
      "Le Président de la République",
      "Les députés"
    ],
    "correct": 2
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "À partir de quel âge a-t-on le droit de voter ?",
    "answers": [
      "18 ans",
      "16 ans",
      "21 ans",
      "20 ans"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quelle condition est nécessaire pour voter aux élections ?",
    "answers": [
      "Être propriétaire",
      "Avoir un diplôme",
      "Être né en France",
      "Être majeur et inscrit sur les listes électorales"
    ],
    "correct": 3
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qui dirige la commune ?",
    "answers": [
      "Le président de région",
      "Le préfet",
      "Le maire",
      "Le président du département"
    ],
    "correct": 2
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quel est le régime politique de la France aujourd'hui ?",
    "answers": [
      "Monarchie",
      "Empire",
      "République démocratique",
      "Dictature"
    ],
    "correct": 2
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qu'est-ce que l'Hôtel de Matignon ?",
    "answers": [
      "Le siège du Sénat",
      "La résidence officielle du Premier ministre",
      "Le siège de l’Assemblée nationale",
      "La résidence du président"
    ],
    "correct": 1
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Le Parlement est composé :",
    "answers": [
      "Des maires et des conseillers municipaux",
      "Du président et du Premier ministre",
      "De l’Assemblée nationale et du Sénat",
      "Du Conseil constitutionnel et du Sénat"
    ],
    "correct": 2
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quel est le rôle du président de la République ?",
    "answers": [
      "Faire toutes les lois",
      "Diriger les communes",
      "Sanctionner les tribunaux",
      "Garantir la Constitution, représenter la France et nommer le Premier ministre"
    ],
    "correct": 3
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quel est le rôle du Premier ministre ?",
    "answers": [
      "Rédiger les lois seul",
      "Présider le Sénat",
      "Diriger le Conseil constitutionnel",
      "Diriger l’action du gouvernement et appliquer les lois"
    ],
    "correct": 3
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qui est le chef du Gouvernement ?",
    "answers": [
      "Le maire",
      "Le président",
      "Le ministre de l’Intérieur",
      "Le Premier ministre"
    ],
    "correct": 3
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Combien y a-t-il de régions en France ?",
    "answers": [
      "25",
      "13",
      "18",
      "22"
    ],
    "correct": 2
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quel est le rôle du Défenseur des droits ?",
    "answers": [
      "Sanctionner les juges",
      "Contrôler les maires",
      "Protéger les droits et lutter contre les discriminations",
      "Rédiger les lois"
    ],
    "correct": 2
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Depuis quand l'euro est-elle la monnaie unique ?",
    "answers": [
      "1995",
      "2002",
      "1999",
      "2010"
    ],
    "correct": 1
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quel est le rôle principal du département ?",
    "answers": [
      "Gérer les routes, collèges et aides sociales",
      "Nommer les ministres",
      "Gérer la diplomatie",
      "Émettre la monnaie"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quel est le rôle principal des communes ?",
    "answers": [
      "Gérer les universités",
      "Gérer l’école primaire, la voirie locale et les services de proximité",
      "Sanctionner les entreprises",
      "Diriger les hôpitaux régionaux"
    ],
    "correct": 1
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Combien de communes environ existe-t-il en France ?",
    "answers": [
      "5 000",
      "50 000",
      "10 000",
      "35 000"
    ],
    "correct": 3
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quel traité concerne la construction de l'Union européenne ?",
    "answers": [
      "Le traité de Rome",
      "Le traité de Maastricht",
      "Le traité de Versailles",
      "Le traité de Lisbonne"
    ],
    "correct": 1
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quel État a quitté l'Union européenne en 2020 ?",
    "answers": [
      "Le Danemark",
      "L’Italie",
      "Le Royaume-Uni",
      "La Grèce"
    ],
    "correct": 2
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quelle est la devise de l’Union européenne ?",
    "answers": [
      "Liberté, Égalité, Fraternité",
      "Force et Solidarité",
      "Unie dans la diversité",
      "Progrès et Paix"
    ],
    "correct": 2
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quel est l'hymne de l'Union européenne ?",
    "answers": [
      "God Save the Queen",
      "L’Hymne à la Liberté",
      "L'Ode à la joie",
      "La Marseillaise"
    ],
    "correct": 2
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "De quoi est composé le drapeau européen ?",
    "answers": [
      "12 étoiles dorées sur fond bleu",
      "20 étoiles bleues sur fond jaune",
      "10 étoiles argentées sur fond rouge",
      "15 étoiles dorées sur fond blanc"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "De quelle couleur est le drapeau européen ?",
    "answers": [
      "Vert avec des étoiles blanches",
      "Bleu avec des étoiles dorées",
      "Rouge avec des étoiles argentées",
      "Jaune avec des étoiles bleues"
    ],
    "correct": 1
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "En quelle année le traité de Maastricht, qui marque la fondation de l'Union européenne, a-t-il été signé ?",
    "answers": [
      "2000",
      "1992",
      "1995",
      "1989"
    ],
    "correct": 1
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Où est le siège du Parlement européen ?",
    "answers": [
      "Bruxelles",
      "Paris",
      "Strasbourg",
      "Luxembourg"
    ],
    "correct": 2
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Où est le siège de la Commission européenne ?",
    "answers": [
      "Strasbourg",
      "Luxembourg",
      "Bruxelles",
      "Amsterdam"
    ],
    "correct": 2
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quel État n'est pas membre de l'Union européenne ?",
    "answers": [
      "L’Allemagne",
      "La Norvège",
      "La France",
      "L’Italie"
    ],
    "correct": 1
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quand célèbre-t-on la journée de l'Europe ?",
    "answers": [
      "9 mai",
      "1er janvier",
      "14 juillet",
      "21 juin"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "À quelle fréquence les élections européennes sont-elles organisées ?",
    "answers": [
      "Tous les 3 ans",
      "Tous les 4 ans",
      "Tous les 6 ans",
      "Tous les 5 ans"
    ],
    "correct": 3
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quelle condition est nécessaire pour voter aux élections européennes ?",
    "answers": [
      "Avoir un diplôme universitaire",
      "Être majeur et inscrit sur les listes électorales",
      "Être résident étranger",
      "Être fonctionnaire"
    ],
    "correct": 1
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quel pays est un pays fondateur de l'Union européenne ?",
    "answers": [
      "L’Espagne",
      "Le Royaume-Uni",
      "La France",
      "La Suède"
    ],
    "correct": 2
  },
  {
    "theme": "Droits et devoirs",
    "question": "À quelle liberté la PMA fait-elle référence ?",
    "answers": [
      "La liberté d’expression",
      "La liberté de réunion",
      "La liberté de fonder une famille",
      "La liberté de circulation"
    ],
    "correct": 2
  },
  {
    "theme": "Droits et devoirs",
    "question": "Comment s’appelle la Constitution actuelle de la France ?",
    "answers": [
      "La Constitution de la Cinquième République",
      "La Constitution de la Quatrième République",
      "La Charte de 1814",
      "Le Code civil"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Comment s'appelle le texte qui énonce les droits et devoirs des personnes résidant en France ?",
    "answers": [
      "La Déclaration des droits de l’homme et du citoyen",
      "Le Code de la route",
      "Le règlement intérieur des écoles",
      "Le Code du commerce"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Concernant les droits individuels, quelle proposition est correcte ?",
    "answers": [
      "Ils s’appliquent uniquement aux citoyens français",
      "Ils s’appliquent à toute personne en France",
      "Ils sont réservés aux majeurs",
      "Ils dépendent du revenu"
    ],
    "correct": 1
  },
  {
    "theme": "Droits et devoirs",
    "question": "De quelle année date la Déclaration des droits de l’homme et du citoyen ?",
    "answers": [
      "1789",
      "1792",
      "1848",
      "1958"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Lequel de ces droits est un droit fondamental ?",
    "answers": [
      "Le droit aux vacances",
      "La liberté d’expression",
      "Le droit de conduire",
      "Le droit à une aide financière"
    ],
    "correct": 1
  },
  {
    "theme": "Droits et devoirs",
    "question": "Parmi ces textes, lequel garantit les droits et libertés en France ?",
    "answers": [
      "La Constitution",
      "Le Code de la route",
      "Le règlement municipal",
      "Le contrat de travail"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Qu’est-ce que la liberté d’expression ?",
    "answers": [
      "Le droit de tout dire sans limite",
      "Le droit d’exprimer ses opinions dans le respect de la loi",
      "Le droit d’insulter librement",
      "Le droit de ne pas respecter les autres"
    ],
    "correct": 1
  },
  {
    "theme": "Droits et devoirs",
    "question": "Quel droit permet à une personne de se défendre devant la justice ?",
    "answers": [
      "Le droit au logement",
      "Le droit de grève",
      "Le droit à un procès équitable",
      "Le droit de vote"
    ],
    "correct": 2
  },
  {
    "theme": "Droits et devoirs",
    "question": "Quel est le texte fondateur établissant en France les droits et les devoirs de chaque citoyen ?",
    "answers": [
      "La Déclaration des droits de l’homme et du citoyen",
      "Le Code civil",
      "La Constitution européenne",
      "Le Code pénal"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Quel texte a été adopté pendant la Révolution française ?",
    "answers": [
      "La Constitution de 1958",
      "La Déclaration des droits de l’homme et du citoyen",
      "Le Code du travail",
      "La Charte de l’environnement"
    ],
    "correct": 1
  },
  {
    "theme": "Droits et devoirs",
    "question": "Quelle liberté permet à une personne de ne pas avoir de religion ?",
    "answers": [
      "La liberté d’association",
      "La liberté de conscience",
      "La liberté de circulation",
      "La liberté de la presse"
    ],
    "correct": 1
  },
  {
    "theme": "Droits et devoirs",
    "question": "Une femme peut avorter :",
    "answers": [
      "Jamais",
      "Seulement avec l’accord du mari",
      "Dans le cadre prévu par la loi",
      "Uniquement à l’étranger"
    ],
    "correct": 2
  },
  {
    "theme": "Droits et devoirs",
    "question": "Est-il toujours possible de divorcer ?",
    "answers": [
      "Non, c’est interdit",
      "Oui, selon les conditions prévues par la loi",
      "Seulement après 10 ans de mariage",
      "Uniquement avec l’accord des parents"
    ],
    "correct": 1
  },
  {
    "theme": "Droits et devoirs",
    "question": "La peine de mort est :",
    "answers": [
      "Encore appliquée",
      "Suspendue temporairement",
      "Interdite en France",
      "Réservée aux crimes graves"
    ],
    "correct": 2
  },
  {
    "theme": "Droits et devoirs",
    "question": "Concernant les limites aux libertés individuelles, quelle proposition est correcte ?",
    "answers": [
      "Il n’existe aucune limite",
      "Elles peuvent être limitées pour protéger l’ordre public et les droits d’autrui",
      "Elles dépendent uniquement du maire",
      "Elles concernent seulement les étrangers"
    ],
    "correct": 1
  },
  {
    "theme": "Droits et devoirs",
    "question": "En France, est-ce légal d'être marié à plusieurs personnes en même temps ?",
    "answers": [
      "Oui, si toutes les personnes sont d’accord",
      "Oui, avec l’autorisation du juge",
      "Non, la polygamie est interdite",
      "Seulement pour les étrangers"
    ],
    "correct": 2
  },
  {
    "theme": "Droits et devoirs",
    "question": "Faut-il réduire ses déchets ?",
    "answers": [
      "Non, ce n’est pas nécessaire",
      "Oui, pour protéger l’environnement",
      "Seulement en ville",
      "Uniquement si la mairie l’impose"
    ],
    "correct": 1
  },
  {
    "theme": "Droits et devoirs",
    "question": "Jeter une bouteille dans la rue est :",
    "answers": [
      "Autorisé",
      "Un geste écologique",
      "Interdit et sanctionné",
      "Accepté si la rue est vide"
    ],
    "correct": 2
  },
  {
    "theme": "Droits et devoirs",
    "question": "Pourquoi les libertés individuelles peuvent-elles être limitées ?",
    "answers": [
      "Pour protéger l’ordre public et les droits des autres",
      "Pour supprimer les opinions différentes",
      "Pour favoriser certaines personnes",
      "Sans raison particulière"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Que doit faire une personne en cas d’accident ?",
    "answers": [
      "Quitter les lieux",
      "Appeler les secours et porter assistance",
      "Publier une photo sur les réseaux sociaux",
      "Attendre qu’une autre personne intervienne"
    ],
    "correct": 1
  },
  {
    "theme": "Droits et devoirs",
    "question": "Que permet la citoyenneté française ?",
    "answers": [
      "De ne pas respecter la loi",
      "De voter et d’être éligible",
      "D’éviter les impôts",
      "De travailler uniquement dans la fonction publique"
    ],
    "correct": 1
  },
  {
    "theme": "Droits et devoirs",
    "question": "Que risque une personne qui ne respecte pas la loi ?",
    "answers": [
      "Aucune conséquence",
      "Une récompense",
      "Des sanctions pénales ou civiles",
      "Un simple avertissement sans suite"
    ],
    "correct": 2
  },
  {
    "theme": "Droits et devoirs",
    "question": "Quel est le rôle de la gendarmerie ?",
    "answers": [
      "Rendre la justice",
      "Maintenir l’ordre et assurer la sécurité",
      "Voter les lois",
      "Soigner les blessés"
    ],
    "correct": 1
  },
  {
    "theme": "Droits et devoirs",
    "question": "Quel est le rôle de la police ?",
    "answers": [
      "Maintenir l’ordre et protéger les personnes",
      "Voter les lois",
      "Rédiger la Constitution",
      "Collecter les impôts"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Qu'est-ce qu'une infraction ?",
    "answers": [
      "Un droit fondamental",
      "Un acte interdit par la loi",
      "Une aide sociale",
      "Un devoir civique"
    ],
    "correct": 1
  },
  {
    "theme": "Droits et devoirs",
    "question": "Comment peut-on réduire ses déchets ?",
    "answers": [
      "En jetant tout dans la nature",
      "En brûlant ses déchets",
      "En triant et recyclant",
      "En les cachant dans un sac"
    ],
    "correct": 2
  },
  {
    "theme": "Droits et devoirs",
    "question": "Déposer une machine à laver cassée sur le trottoir est :",
    "answers": [
      "Autorisé",
      "Interdit et sanctionné",
      "Encouragé",
      "Accepté le week-end"
    ],
    "correct": 1
  },
  {
    "theme": "Droits et devoirs",
    "question": "En quoi consiste la traite des êtres humains ?",
    "answers": [
      "Un échange culturel",
      "L’exploitation de personnes par la contrainte ou la tromperie",
      "Un contrat de travail légal",
      "Une aide humanitaire"
    ],
    "correct": 1
  },
  {
    "theme": "Droits et devoirs",
    "question": "Que doit faire une victime de violences ?",
    "answers": [
      "Garder le silence",
      "Se rendre responsable des faits",
      "Demander de l’aide et porter plainte",
      "Quitter le pays"
    ],
    "correct": 2
  },
  {
    "theme": "Droits et devoirs",
    "question": "Quelle est l'infraction la plus grave ?",
    "answers": [
      "La contravention",
      "Le délit",
      "Le crime",
      "L’avertissement"
    ],
    "correct": 2
  },
  {
    "theme": "Droits et devoirs",
    "question": "Au nom de quoi l'État justifie-t-il la restriction des droits ?",
    "answers": [
      "L’intérêt général et l’ordre public",
      "Les traditions locales",
      "Les entreprises privées",
      "L’opinion du gouvernement"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Concernant le droit de se marier, quelle proposition est correcte ?",
    "answers": [
      "Le mariage religieux est obligatoire",
      "Deux personnes majeures peuvent se marier librement",
      "Il faut l’autorisation du maire pour aimer quelqu’un",
      "Le mariage est réservé aux personnes riches"
    ],
    "correct": 1
  },
  {
    "theme": "Droits et devoirs",
    "question": "Est-il toujours possible de divorcer ?",
    "answers": [
      "Non, le divorce est interdit",
      "Non, sauf accord du président",
      "Oui, le divorce est autorisé par la loi",
      "Oui, seulement après 20 ans de mariage"
    ],
    "correct": 2
  },
  {
    "theme": "Droits et devoirs",
    "question": "La peine de mort est :",
    "answers": [
      "Encore appliquée",
      "Abolie en France",
      "Réservée aux crimes graves",
      "Décidée par référendum"
    ],
    "correct": 1
  },
  {
    "theme": "Droits et devoirs",
    "question": "Laquelle de ces citations est inscrite dans la Déclaration des Droits de l'homme et du Citoyen de 1789 ?",
    "answers": [
      "La France est une monarchie",
      "Le vote est obligatoire",
      "La religion est obligatoire",
      "Les hommes naissent et demeurent libres et égaux en droits"
    ],
    "correct": 3
  },
  {
    "theme": "Droits et devoirs",
    "question": "Le recours à l'avortement est-il autorisé ?",
    "answers": [
      "Oui, dans un cadre légal",
      "Oui, uniquement à l’étranger",
      "Non, sauf autorisation judiciaire",
      "Non, jamais"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Que contient la Constitution ?",
    "answers": [
      "Les horaires des administrations",
      "Les règlements intérieurs des entreprises",
      "Les lois municipales uniquement",
      "Les règles fondamentales d’organisation de l’État et les droits"
    ],
    "correct": 3
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
      "La liberté d’expression",
      "La protection de l’environnement et le développement durable",
      "La création des communes",
      "L’organisation des élections"
    ],
    "correct": 1
  },
  {
    "theme": "Droits et devoirs",
    "question": "Que signifie la dignité humaine ?",
    "answers": [
      "Le respect de chaque personne",
      "Le droit d’imposer ses idées",
      "La supériorité d’un groupe",
      "Le respect des biens matériels"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Que signifie le droit de manifester ?",
    "answers": [
      "Imposer ses idées par la force",
      "Refuser toute autorité",
      "Exprimer collectivement une opinion dans le respect de la loi",
      "Occuper un bâtiment public sans autorisation"
    ],
    "correct": 2
  },
  {
    "theme": "Droits et devoirs",
    "question": "Que signifie PMA ?",
    "answers": [
      "Protection Médicale Administrative",
      "Procréation Médicalement Assistée",
      "Programme Médical Autorisé",
      "Procédure de Mariage Assistée"
    ],
    "correct": 1
  },
  {
    "theme": "Droits et devoirs",
    "question": "Quel texte est le plus difficile à modifier ?",
    "answers": [
      "Un règlement intérieur",
      "La Constitution",
      "Un décret simple",
      "Un arrêté municipal"
    ],
    "correct": 1
  },
  {
    "theme": "Droits et devoirs",
    "question": "Quelle liberté permet à une personne de croire en la religion de son choix ?",
    "answers": [
      "La liberté de commerce",
      "La liberté de circulation",
      "La liberté de conscience",
      "La liberté d’association"
    ],
    "correct": 2
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
      "Une loi locale",
      "La loi fondamentale qui organise les pouvoirs publics",
      "Un règlement d’entreprise",
      "Un traité européen"
    ],
    "correct": 1
  },
  {
    "theme": "Droits et devoirs",
    "question": "Qui peut demander à avorter ?",
    "answers": [
      "Seulement les femmes mariées",
      "Seulement les mineures",
      "Uniquement avec l’accord du conjoint",
      "Toute femme enceinte dans le cadre légal"
    ],
    "correct": 3
  },
  {
    "theme": "Droits et devoirs",
    "question": "Une femme majeure de nationalité française a-t-elle le droit de voter aux élections ?",
    "answers": [
      "Non",
      "Oui, si elle est inscrite sur les listes électorales",
      "Oui, uniquement aux élections municipales",
      "Seulement si elle est mariée"
    ],
    "correct": 1
  },
  {
    "theme": "Droits et devoirs",
    "question": "Concernant l'utilisation des réseaux sociaux, quelle proposition est correcte ?",
    "answers": [
      "On peut insulter librement",
      "Les propos tenus en ligne sont soumis à la loi",
      "Tout est autorisé sur internet",
      "Les lois ne s’appliquent pas en ligne"
    ],
    "correct": 1
  },
  {
    "theme": "Droits et devoirs",
    "question": "Jeter un mégot par terre est :",
    "answers": [
      "Autorisé partout",
      "Recommandé",
      "Interdit et passible d’amende",
      "Sans conséquence"
    ],
    "correct": 2
  },
  {
    "theme": "Droits et devoirs",
    "question": "L'État peut-il limiter les droits et libertés ?",
    "answers": [
      "Oui, sans justification",
      "Non, jamais",
      "Seulement en période électorale",
      "Oui, pour protéger l’ordre public et l’intérêt général"
    ],
    "correct": 3
  },
  {
    "theme": "Droits et devoirs",
    "question": "Parmi ces actions, laquelle permet d'adopter une attitude respectueuse de l’environnement ?",
    "answers": [
      "Utiliser plus d’emballages plastiques",
      "Jeter ses déchets dans la nature",
      "Trier ses déchets",
      "Brûler ses ordures"
    ],
    "correct": 2
  },
  {
    "theme": "Droits et devoirs",
    "question": "Quelle proposition constitue une obligation ?",
    "answers": [
      "Voter à chaque élection",
      "Adhérer à une association",
      "Participer à une manifestation",
      "Respecter la loi"
    ],
    "correct": 3
  },
  {
    "theme": "Droits et devoirs",
    "question": "Pour quel motif peut-on limiter la liberté d'expression ?",
    "answers": [
      "Pour interdire les débats politiques",
      "Pour protéger l’ordre public et les droits d’autrui",
      "Pour limiter les opinions personnelles",
      "Pour empêcher toute critique du gouvernement"
    ],
    "correct": 1
  },
  {
    "theme": "Droits et devoirs",
    "question": "Pourquoi doit-on trier ses déchets ?",
    "answers": [
      "Pour éviter de payer des impôts",
      "Pour décorer les rues",
      "Ce n’est pas nécessaire",
      "Pour protéger l’environnement et favoriser le recyclage"
    ],
    "correct": 3
  },
  {
    "theme": "Droits et devoirs",
    "question": "Que doit faire une victime de violences ?",
    "answers": [
      "Quitter le territoire",
      "Garder le silence",
      "Se faire justice elle-même",
      "Porter plainte et demander de l’aide"
    ],
    "correct": 3
  },
  {
    "theme": "Droits et devoirs",
    "question": "Que doit-on faire face aux ordres des policiers ou gendarmes ?",
    "answers": [
      "Ignorer les ordres",
      "Refuser systématiquement",
      "Négocier immédiatement",
      "Obéir dans le respect de la loi"
    ],
    "correct": 3
  },
  {
    "theme": "Droits et devoirs",
    "question": "Quel est le rôle de la police ?",
    "answers": [
      "Assurer la sécurité et maintenir l’ordre public",
      "Gérer les communes",
      "Organiser les élections",
      "Rédiger les lois"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Quel est un exemple d’assistance à personne en danger ?",
    "answers": [
      "Ignorer une personne en difficulté",
      "Appeler les secours pour aider une personne blessée",
      "Quitter les lieux immédiatement",
      "Filmer un accident sans intervenir"
    ],
    "correct": 1
  },
  {
    "theme": "Droits et devoirs",
    "question": "Quel exemple illustre une limitation de liberté pour protéger l'intérêt général ?",
    "answers": [
      "L’interdiction de fumer dans les lieux publics",
      "L’interdiction de se déplacer",
      "L’interdiction de travailler",
      "L’interdiction de voter"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Quelle est l’attitude à avoir lorsque qu'on est témoin de violences ?",
    "answers": [
      "Rester indifférent",
      "Prévenir les autorités",
      "Partager sur les réseaux sociaux",
      "Encourager la situation"
    ],
    "correct": 1
  },
  {
    "theme": "Droits et devoirs",
    "question": "Quelle est l'infraction la plus grave ?",
    "answers": [
      "La contravention",
      "Le crime",
      "L’amende simple",
      "Le rappel à la loi"
    ],
    "correct": 1
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
      "Un retard de paiement",
      "Un oubli de ticket",
      "Un stationnement interdit"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Quelle proposition représente un exemple de délit ?",
    "answers": [
      "Un vol",
      "Un avertissement",
      "Une contravention de stationnement",
      "Un meurtre"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Qui veille au maintien de l’ordre public ?",
    "answers": [
      "Les entreprises privées",
      "La police et la gendarmerie",
      "Le Parlement",
      "Les associations"
    ],
    "correct": 1
  },
  {
    "theme": "Droits et devoirs",
    "question": "S'agissant des déchets, quelle proposition est correcte ?",
    "answers": [
      "On peut les jeter dans la rue",
      "Ils doivent être triés et jetés dans des conteneurs adaptés",
      "Ils ne concernent que les entreprises",
      "Ils peuvent être brûlés en ville"
    ],
    "correct": 1
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quel était le surnom de Louis XIV ?",
    "answers": [
      "Le Roi Soleil",
      "Le Roi Chevalier",
      "Le Roi Guerrier",
      "Le Roi Sage"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quel roi de France a été exécuté pendant la Révolution française ?",
    "answers": [
      "Louis XV",
      "François Ier",
      "Henri IV",
      "Louis XVI"
    ],
    "correct": 3
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "En quelle année Napoléon Ier est-il devenu empereur ?",
    "answers": [
      "1789",
      "1804",
      "1815",
      "1799"
    ],
    "correct": 1
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Lequel de ces personnages a un lien avec la République française ?",
    "answers": [
      "Marianne",
      "Louis XV",
      "Charlemagne",
      "Napoléon III"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "De quand date l'appel à la résistance du général de Gaulle ?",
    "answers": [
      "18 juin 1940",
      "11 novembre 1918",
      "14 juillet 1789",
      "8 mai 1945"
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
      "Le Brésil",
      "La Norvège",
      "L’Algérie",
      "Le Japon"
    ],
    "correct": 2
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Depuis quand les Français élisent-ils le président de la République au suffrage universel direct ?",
    "answers": [
      "1945",
      "1974",
      "1958",
      "1962"
    ],
    "correct": 3
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quelle est la première étape de la construction européenne en 1951 ?",
    "answers": [
      "Le traité de Maastricht",
      "La création de l’euro",
      "L’entrée du Royaume-Uni",
      "La création de la CECA"
    ],
    "correct": 3
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Durant le mandat de quel président la peine de mort a-t-elle été abolie ?",
    "answers": [
      "François Mitterrand",
      "Valéry Giscard d’Estaing",
      "Jacques Chirac",
      "Charles de Gaulle"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quel régime politique a été mis en place pendant la Révolution française en 1792 ?",
    "answers": [
      "La Monarchie absolue",
      "La Première République",
      "L’Empire",
      "La Restauration"
    ],
    "correct": 1
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qui était une figure de la Résistance française pendant la Seconde Guerre mondiale ?",
    "answers": [
      "Louis XIV",
      "Jean Moulin",
      "Victor Hugo",
      "Napoléon Bonaparte"
    ],
    "correct": 1
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "En 1944, qu'est-ce qui a changé pour les femmes ?",
    "answers": [
      "Elles ont obtenu le service militaire obligatoire",
      "Elles ont été exemptées d’impôts",
      "Elles ont obtenu le droit de vote",
      "Elles sont devenues éligibles à la présidence uniquement"
    ],
    "correct": 2
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quelle organisation internationale a été créée en 1945 après la Seconde Guerre mondiale ?",
    "answers": [
      "La Croix-Rouge",
      "L’OTAN",
      "L’Union européenne",
      "L’ONU"
    ],
    "correct": 3
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "En quelle année a débuté la Révolution française ?",
    "answers": [
      "1776",
      "1804",
      "1789",
      "1792"
    ],
    "correct": 2
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qui était Napoléon Ier ?",
    "answers": [
      "Président de la République",
      "Roi de France",
      "Général anglais",
      "Empereur de France"
    ],
    "correct": 3
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Lequel de ces personnages historiques est français ?",
    "answers": [
      "Winston Churchill",
      "Franklin D. Roosevelt",
      "Napoléon Bonaparte",
      "George Washington"
    ],
    "correct": 2
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Dans quelle République est-on aujourd'hui ?",
    "answers": [
      "Quatrième République",
      "Cinquième République",
      "Troisième République",
      "Deuxième République"
    ],
    "correct": 1
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qu'est-ce que la Shoah ?",
    "answers": [
      "Une guerre civile française",
      "Une loi française sur l’éducation",
      "Le génocide des Juifs pendant la Seconde Guerre mondiale",
      "Une révolution en Russie"
    ],
    "correct": 2
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quel pays ou région du monde a été colonisé par la France ?",
    "answers": [
      "Japon",
      "Norvège",
      "Algérie",
      "Canada anglophone"
    ],
    "correct": 2
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qui a rendu l’école gratuite, laïque et obligatoire ?",
    "answers": [
      "Jules Ferry",
      "Louis XIV",
      "Charles de Gaulle",
      "Napoléon Ier"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quand a eu lieu la Seconde Guerre mondiale ?",
    "answers": [
      "1914-1918",
      "1939-1945",
      "1804-1815",
      "1789-1799"
    ],
    "correct": 1
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quand a eu lieu la Première Guerre mondiale ?",
    "answers": [
      "1789-1799",
      "1939-1945",
      "1804-1815",
      "1914-1918"
    ],
    "correct": 3
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "En quelle année a été créée la Communauté Économique Européenne (CEE) ?",
    "answers": [
      "1958",
      "1963",
      "1945",
      "1957"
    ],
    "correct": 3
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Le 11 novembre est un jour férié. À quoi correspond cette date ?",
    "answers": [
      "Armistice de la Première Guerre mondiale",
      "Fin de la Seconde Guerre mondiale",
      "Commémoration de Napoléon",
      "Fête nationale"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qui a été le premier Président élu sous la Ve République ?",
    "answers": [
      "Charles de Gaulle",
      "Jules Ferry",
      "François Mitterrand",
      "Napoléon Ier"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "En quelle année l'esclavage a-t-il été aboli définitivement en France ?",
    "answers": [
      "1794",
      "1815",
      "1848",
      "1789"
    ],
    "correct": 2
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Depuis quelle année l'école publique est-elle gratuite ?",
    "answers": [
      "1905",
      "1792",
      "1870",
      "1881"
    ],
    "correct": 3
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Combien y a-t-il eu de républiques en France ?",
    "answers": [
      "Cinq",
      "Quatre",
      "Six",
      "Trois"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qui était le roi de France au moment de la Révolution française ?",
    "answers": [
      "Louis XVI",
      "Charles X",
      "Napoléon Ier",
      "Louis XIV"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qui a fondé la Ve République ?",
    "answers": [
      "Jules Ferry",
      "Charles de Gaulle",
      "Louis XVI",
      "François Mitterrand"
    ],
    "correct": 1
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Que célèbre-t-on le 14 juillet ?",
    "answers": [
      "La naissance de Napoléon Ier",
      "L’armistice de 1918",
      "La prise de la Bastille",
      "La fin de la Seconde Guerre mondiale"
    ],
    "correct": 2
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quelle guerre a eu lieu entre 1914 et 1918 ?",
    "answers": [
      "La Guerre de Cent Ans",
      "La Seconde Guerre mondiale",
      "La Première Guerre mondiale",
      "La Révolution française"
    ],
    "correct": 2
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Pourquoi l’année 1958 est importante pour la France ?",
    "answers": [
      "Création de la Ve République",
      "Abolition de l’esclavage",
      "Début de la Révolution française",
      "Fin de la Seconde Guerre mondiale"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quel fleuve coule en France ?",
    "answers": [
      "Le Danube",
      "Le Rhin",
      "Le Rhône uniquement",
      "La Loire"
    ],
    "correct": 3
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quelle ville est française ?",
    "answers": [
      "Berlin",
      "Madrid",
      "Lyon",
      "Rome"
    ],
    "correct": 2
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quel océan borde la côte ouest française ?",
    "answers": [
      "L’océan Atlantique",
      "La Manche",
      "La mer Méditerranée",
      "La mer du Nord"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qu'est-ce que Paris ?",
    "answers": [
      "Un fleuve",
      "La capitale de la France",
      "Un département d’outre-mer",
      "Une île française"
    ],
    "correct": 1
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quelle est la capitale de la France ?",
    "answers": [
      "Marseille",
      "Bordeaux",
      "Paris",
      "Lyon"
    ],
    "correct": 2
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Sur quel continent se situe la France métropolitaine ?",
    "answers": [
      "Europe",
      "Amérique",
      "Afrique",
      "Asie"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quelle île est un département d'outre-mer français ?",
    "answers": [
      "Corse",
      "Sicile",
      "Madagascar",
      "Réunion"
    ],
    "correct": 3
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Combien y a-t-il de régions en France métropolitaine ?",
    "answers": [
      "13",
      "12",
      "18",
      "15"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quelle ville est un grand port maritime ?",
    "answers": [
      "Marseille",
      "Toulouse",
      "Lille",
      "Strasbourg"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quelle est la mer au sud de la France métropolitaine ?",
    "answers": [
      "La mer du Nord",
      "La mer Méditerranée",
      "L’océan Atlantique",
      "La Manche"
    ],
    "correct": 1
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quelle ville est située au bord de la mer Méditerranée ?",
    "answers": [
      "Lyon",
      "Strasbourg",
      "Paris",
      "Nice"
    ],
    "correct": 3
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Où se situe la Corse ?",
    "answers": [
      "En Italie",
      "Dans la mer Méditerranée",
      "Dans l’océan Atlantique",
      "Au large du Portugal"
    ],
    "correct": 1
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quelle chaîne de montagnes est située entre la France et l'Italie ?",
    "answers": [
      "Les Alpes",
      "Les Pyrénées",
      "Le Massif central",
      "Les Vosges"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qui était Molière ?",
    "answers": [
      "Un dramaturge et comédien français",
      "Un peintre",
      "Un romancier",
      "Un philosophe"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qui était Charles Baudelaire ?",
    "answers": [
      "Écrivain anglais",
      "Poète français",
      "Peintre français",
      "Musicien"
    ],
    "correct": 1
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qui était George Sand ?",
    "answers": [
      "Poétesse anglaise",
      "Écrivaine française",
      "Actrice française",
      "Peintre française"
    ],
    "correct": 1
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qui était Simone de Beauvoir ?",
    "answers": [
      "Actrice",
      "Peintre",
      "Chanteuse",
      "Philosophe et écrivaine française"
    ],
    "correct": 3
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qui était Albert Camus ?",
    "answers": [
      "Écrivain et philosophe français",
      "Musicien",
      "Peintre français",
      "Poète anglais"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qui était Paul Cézanne ?",
    "answers": [
      "Poète",
      "Musicien",
      "Écrivain français",
      "Peintre français"
    ],
    "correct": 3
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qui était Marc Chagall ?",
    "answers": [
      "Musicien",
      "Poète",
      "Peintre et artiste français",
      "Écrivain français"
    ],
    "correct": 2
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qui était Joséphine Baker ?",
    "answers": [
      "Philosophe française",
      "Chanteuse et danseuse française",
      "Peintre française",
      "Écrivaine française"
    ],
    "correct": 1
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qui était une chanteuse française célèbre ?",
    "answers": [
      "Albert Camus",
      "Édith Piaf",
      "George Sand",
      "Simone de Beauvoir"
    ],
    "correct": 1
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qu'est-ce que le Louvre ?",
    "answers": [
      "Une bibliothèque à Lyon",
      "Un château en Normandie",
      "Un musée à Paris",
      "Un opéra à Marseille"
    ],
    "correct": 2
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qui était Jean de La Fontaine ?",
    "answers": [
      "Musicien",
      "Fabuliste et écrivain français",
      "Peintre français",
      "Poète anglais"
    ],
    "correct": 1
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quel écrivain est français ?",
    "answers": [
      "William Shakespeare",
      "Victor Hugo",
      "Mark Twain",
      "Ernest Hemingway"
    ],
    "correct": 1
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Dans quelle ville se trouve la tour Eiffel ?",
    "answers": [
      "Marseille",
      "Lyon",
      "Paris",
      "Nice"
    ],
    "correct": 2
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quand célèbre-t-on Noël ?",
    "answers": [
      "31 octobre",
      "1er janvier",
      "14 juillet",
      "25 décembre"
    ],
    "correct": 3
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quelle peine a été supprimée en 1981 ?",
    "answers": [
      "Les travaux forcés",
      "L’exil",
      "La peine de mort",
      "Le bagne"
    ],
    "correct": 2
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "En quelle année l'euro est-elle devenue la monnaie utilisée en France ?",
    "answers": [
      "2010",
      "1999",
      "1995",
      "2002"
    ],
    "correct": 3
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "En quelle année a commencé la Première Guerre mondiale ?",
    "answers": [
      "1918",
      "1920",
      "1939",
      "1914"
    ],
    "correct": 3
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Où a eu lieu le débarquement en 1944 ?",
    "answers": [
      "En Normandie",
      "À Calais",
      "À Bordeaux",
      "À Marseille"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quel continent a été le plus concerné par la décolonisation française après la Seconde Guerre mondiale ?",
    "answers": [
      "L’Amérique",
      "L’Océanie",
      "L’Asie",
      "L’Afrique"
    ],
    "correct": 3
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Que fête-t-on le 8 mai ?",
    "answers": [
      "La fête nationale",
      "L’armistice de 1918",
      "La Révolution française",
      "La victoire de 1945"
    ],
    "correct": 3
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quelle mer ou océan borde la France métropolitaine ?",
    "answers": [
      "La mer Noire",
      "L’océan Atlantique",
      "La mer Rouge",
      "L’océan Pacifique"
    ],
    "correct": 1
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quel pays a une frontière terrestre avec la France métropolitaine ?",
    "answers": [
      "Le Portugal",
      "La Grèce",
      "Le Danemark",
      "L’Espagne"
    ],
    "correct": 3
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quelle ville française est un port maritime ?",
    "answers": [
      "Strasbourg",
      "Clermont-Ferrand",
      "Marseille",
      "Lyon"
    ],
    "correct": 2
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quelle mer se situe entre la France et l'Angleterre ?",
    "answers": [
      "La mer Baltique",
      "La Manche",
      "La mer Adriatique",
      "La mer Méditerranée"
    ],
    "correct": 1
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qu'est-ce que la France d'outre-mer ?",
    "answers": [
      "Les régions rurales françaises",
      "Les territoires français situés hors d’Europe",
      "Les territoires européens voisins",
      "Les anciennes colonies devenues indépendantes"
    ],
    "correct": 1
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quelle chaîne de montagnes est située entre la France et l’Espagne ?",
    "answers": [
      "Les Vosges",
      "Le Jura",
      "Les Alpes",
      "Les Pyrénées"
    ],
    "correct": 3
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quelle île française se trouve dans l'océan Indien ?",
    "answers": [
      "Noirmoutier",
      "La Réunion",
      "La Corse",
      "Oléron"
    ],
    "correct": 1
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quelle est la population approximative de la France en 2025 ?",
    "answers": [
      "Environ 50 millions",
      "Environ 80 millions",
      "Environ 68 millions",
      "Environ 40 millions"
    ],
    "correct": 2
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quel fleuve traverse Paris ?",
    "answers": [
      "La Seine",
      "La Garonne",
      "Le Rhône",
      "La Loire"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Lequel de ces pays partage des frontières terrestres avec la France ?",
    "answers": [
      "L’Islande",
      "L’Irlande",
      "L’Italie",
      "Le Royaume-Uni"
    ],
    "correct": 2
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quel pays a une frontière avec la France métropolitaine au nord-est ?",
    "answers": [
      "Le Portugal",
      "L’Andorre",
      "L’Allemagne",
      "L’Espagne"
    ],
    "correct": 2
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Où se trouvent les principales activités économiques en France ?",
    "answers": [
      "Principalement dans les montagnes",
      "Seulement sur le littoral",
      "Dans les grandes villes et les régions industrielles",
      "Uniquement en zone rurale"
    ],
    "correct": 2
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Parmi ces pays, lequel attire le plus de visiteurs chaque année ?",
    "answers": [
      "Les États-Unis",
      "L’Espagne",
      "L’Italie",
      "La France"
    ],
    "correct": 3
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Où habite la majorité des Français ?",
    "answers": [
      "À la montagne",
      "En ville",
      "À la campagne isolée",
      "À l’étranger"
    ],
    "correct": 1
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quelle région est la plus peuplée ?",
    "answers": [
      "Bourgogne-Franche-Comté",
      "Bretagne",
      "Corse",
      "Île-de-France"
    ],
    "correct": 3
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quelle ville française fait partie des 10 plus grandes métropoles du pays ?",
    "answers": [
      "Poitiers",
      "Bayonne",
      "Toulouse",
      "Annecy"
    ],
    "correct": 2
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Lequel de ces départements de France est le plus touristique ?",
    "answers": [
      "Creuse",
      "Haute-Marne",
      "Paris",
      "Cantal"
    ],
    "correct": 2
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quand peut-on visiter gratuitement des lieux culturels en France ?",
    "answers": [
      "Uniquement le 14 juillet",
      "Lors des Journées européennes du patrimoine",
      "Seulement en été",
      "Tous les jours"
    ],
    "correct": 1
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Combien de personnes parlent français dans le monde ?",
    "answers": [
      "Environ 50 millions",
      "Environ 320 millions",
      "Environ 1 milliard",
      "Environ 100 millions"
    ],
    "correct": 1
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qui était Marguerite Yourcenar ?",
    "answers": [
      "Une scientifique",
      "Une reine de France",
      "Une peintre",
      "Une écrivaine française"
    ],
    "correct": 3
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quel peintre est français ?",
    "answers": [
      "Salvador Dalí",
      "Pablo Picasso",
      "Claude Monet",
      "Vincent van Gogh"
    ],
    "correct": 2
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quel peintre est français ?",
    "answers": [
      "Salvador Dalí",
      "Frida Kahlo",
      "Claude Monet",
      "Edvard Munch"
    ],
    "correct": 2
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quel musée est situé à Paris ?",
    "answers": [
      "Le Prado",
      "Le MoMA",
      "Le British Museum",
      "Le Louvre"
    ],
    "correct": 3
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qui était Auguste Rodin ?",
    "answers": [
      "Un compositeur",
      "Un explorateur",
      "Un sculpteur français",
      "Un président"
    ],
    "correct": 2
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quel est le classement de la langue française parmi les langues les plus parlées dans le monde ?",
    "answers": [
      "10e",
      "1re",
      "Environ 5e",
      "20e"
    ],
    "correct": 2
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quelle cathédrale célèbre a été en partie détruite par un incendie en 2019 ?",
    "answers": [
      "Sacré-Cœur",
      "Cathédrale de Reims",
      "Cathédrale de Strasbourg",
      "Notre-Dame de Paris"
    ],
    "correct": 3
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qui était une écrivaine française célèbre ?",
    "answers": [
      "Claude Monet",
      "Louis Pasteur",
      "George Sand",
      "Napoléon Bonaparte"
    ],
    "correct": 2
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qui était une écrivaine française célèbre ?",
    "answers": [
      "Emily Dickinson",
      "Jane Austen",
      "Virginia Woolf",
      "Simone de Beauvoir"
    ],
    "correct": 3
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qui était une écrivaine française célèbre ?",
    "answers": [
      "Marguerite Duras",
      "Agatha Christie",
      "Isabel Allende",
      "Toni Morrison"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qui était une écrivaine française célèbre ?",
    "answers": [
      "Louisa May Alcott",
      "Mary Shelley",
      "Astrid Lindgren",
      "Colette"
    ],
    "correct": 3
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qui était un célèbre musicien français ?",
    "answers": [
      "William Shakespeare",
      "Léonard de Vinci",
      "Claude Debussy",
      "Wolfgang Amadeus Mozart"
    ],
    "correct": 2
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qui était un célèbre musicien français ?",
    "answers": [
      "Jean-Jacques Goldman",
      "Johann Sebastian Bach",
      "Elton John",
      "Antonio Vivaldi"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qui était un célèbre musicien français ?",
    "answers": [
      "Serge Gainsbourg",
      "Bruce Springsteen",
      "Freddie Mercury",
      "Bob Dylan"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qui était Auguste Renoir ?",
    "answers": [
      "Un écrivain",
      "Un peintre impressionniste",
      "Un roi",
      "Un général"
    ],
    "correct": 1
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quelle fête est française ?",
    "answers": [
      "Thanksgiving",
      "La Saint-Patrick",
      "Halloween",
      "Le 14 juillet"
    ],
    "correct": 3
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quelle fête est française ?",
    "answers": [
      "Mardi Gras américain",
      "Le Carnaval de Rio",
      "La Fête de la Musique",
      "Oktoberfest"
    ],
    "correct": 2
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quelle fête est française ?",
    "answers": [
      "St. Patrick’s Day",
      "La Fête des Lumières à Lyon",
      "Hanukkah",
      "Thanksgiving"
    ],
    "correct": 1
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Quel mariage est reconnu par l'État ?",
    "answers": [
      "Le mariage célébré à l'étranger sans transcription",
      "Le mariage civil célébré en mairie",
      "Le mariage coutumier",
      "Le mariage religieux"
    ],
    "correct": 1
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Auprès de quelle institution les parents peuvent-ils inscrire leur enfant à l'école publique ?",
    "answers": [
      "Au commissariat",
      "À la préfecture",
      "À la caisse d’allocations familiales",
      "À la mairie"
    ],
    "correct": 3
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Auprès de quelle institution les parents peuvent-ils inscrire leur enfant à l'école publique ?",
    "answers": [
      "À la préfecture de région",
      "Au tribunal judiciaire",
      "Au centre des impôts",
      "À la mairie de leur lieu de résidence"
    ],
    "correct": 3
  },
  {
    "theme": "Vivre dans la société française",
    "question": "En cas de divorce, qui exerce l'autorité parentale ?",
    "answers": [
      "La mère uniquement",
      "Les deux parents sauf décision contraire du juge",
      "Les grands-parents",
      "Le père uniquement"
    ],
    "correct": 1
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Quelle aide permet aux personnes qui ont des difficultés financières d'avoir un avocat ?",
    "answers": [
      "La sécurité sociale",
      "La prime d’activité",
      "L'aide juridictionnelle",
      "Le RSA"
    ],
    "correct": 2
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Où faut-il déclarer la naissance d'un enfant ?",
    "answers": [
      "À la préfecture",
      "À la CAF",
      "À la mairie du lieu de naissance",
      "Au tribunal"
    ],
    "correct": 2
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Quelle est l'une des conditions pour passer l'examen du permis de conduire ?",
    "answers": [
      "Avoir 25 ans",
      "Être marié",
      "Avoir l’âge minimum requis",
      "Être propriétaire d’un véhicule"
    ],
    "correct": 2
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Quelle est l'une des conditions pour passer l'examen du permis de conduire ?",
    "answers": [
      "Être âgé de 30 ans minimum",
      "Avoir un emploi stable",
      "Avoir réussi le code de la route",
      "Avoir suivi un stage de premiers secours"
    ],
    "correct": 2
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Un bail locatif est valide s'il est :",
    "answers": [
      "Oral uniquement",
      "Écrit et signé par le propriétaire et le locataire",
      "Signé par le locataire seulement",
      "Validé par un voisin"
    ],
    "correct": 1
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Un bail locatif est valide s'il est :",
    "answers": [
      "Approuvé par le syndic de copropriété",
      "Verbal uniquement entre le locataire et le propriétaire",
      "Rédigé par écrit et signé par les deux parties",
      "Signé uniquement par le locataire"
    ],
    "correct": 2
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Où peut-on déposer un lave-vaisselle cassé ?",
    "answers": [
      "Dans un parc public",
      "À la mairie",
      "Dans la rue",
      "À la déchetterie"
    ],
    "correct": 3
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Quel numéro d'urgence permet d'appeler la police ?",
    "answers": [
      "15",
      "18",
      "112",
      "17"
    ],
    "correct": 3
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Concernant l'accès aux soins, quelle proposition est correcte ?",
    "answers": [
      "Toute personne peut avoir accès aux soins",
      "Il est interdit aux étrangers",
      "Il est réservé uniquement aux personnes qui travaillent",
      "Il dépend du revenu"
    ],
    "correct": 0
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Concernant l'accès aux soins, quelle proposition est correcte ?",
    "answers": [
      "L'accès aux soins est limité aux résidents depuis plus de 5 ans",
      "Tout le monde peut accéder aux soins en France, selon les règles de l'Assurance maladie",
      "Seules les personnes payant des impôts peuvent accéder aux soins",
      "Les soins sont réservés aux adultes"
    ],
    "correct": 1
  },
  {
    "theme": "Vivre dans la société française",
    "question": "À qui est accessible la contraception ?",
    "answers": [
      "Seulement aux hommes",
      "À toute personne qui en fait la demande",
      "Uniquement aux femmes mariées",
      "Uniquement avec l’accord des parents"
    ],
    "correct": 1
  },
  {
    "theme": "Vivre dans la société française",
    "question": "À qui est accessible la contraception ?",
    "answers": [
      "Uniquement aux adolescents avec autorisation parentale",
      "Seulement aux couples mariés",
      "Seulement aux femmes mariées",
      "À toute personne qui en fait la demande"
    ],
    "correct": 3
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Qu’est-ce que le principe de confidentialité dans le domaine de la santé ?",
    "answers": [
      "Les informations médicales sont publiques",
      "Les informations médicales sont protégées et ne peuvent être divulguées sans accord",
      "Les informations médicales peuvent être partagées librement",
      "Les médecins doivent informer l’employeur"
    ],
    "correct": 1
  },
  {
    "theme": "Vivre dans la société française",
    "question": "L'inscription à l'Assurance maladie est :",
    "answers": [
      "Obligatoire pour toute personne résidant en France",
      "Interdite aux étudiants",
      "Réservée aux retraités",
      "Facultative"
    ],
    "correct": 0
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Qui peut demander un congé parental d'éducation ?",
    "answers": [
      "Seulement la mère",
      "Seulement le père",
      "Les grands-parents",
      "Les deux parents"
    ],
    "correct": 3
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Quelles sont les affaires traitées par le conseil de prud'hommes ?",
    "answers": [
      "Les divorces",
      "Les affaires pénales",
      "Les litiges entre voisins",
      "Les conflits entre employeur et salarié"
    ],
    "correct": 3
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Travailler sans être déclaré est :",
    "answers": [
      "Autorisé si l’employeur est d’accord",
      "Obligatoire pour les étudiants",
      "Conseillé pour éviter les impôts",
      "Illégal"
    ],
    "correct": 3
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Lorsqu'un employeur veut qu'un salarié travaille plus longtemps que la durée prévue dans le contrat de travail :",
    "answers": [
      "Il n’a pas besoin d’en informer le salarié",
      "Il peut l’imposer sans condition",
      "Il peut le faire sans rémunération supplémentaire",
      "Il doit respecter la loi et l’accord du salarié selon les règles en vigueur"
    ],
    "correct": 3
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Lorsqu'un employeur veut qu'un salarié travaille plus longtemps que la durée prévue dans le contrat de travail :",
    "answers": [
      "Il peut l’imposer sans condition",
      "Il n’a pas besoin d’en informer le salarié",
      "Il peut le faire sans rémunération supplémentaire",
      "Il doit respecter la loi et l’accord du salarié selon les règles en vigueur"
    ],
    "correct": 3
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Quelle est la mission de France Travail ?",
    "answers": [
      "Verser les retraites",
      "Contrôler les impôts",
      "Aider à trouver un emploi et accompagner les demandeurs d’emploi",
      "Gérer les écoles"
    ],
    "correct": 2
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Dans une entreprise, le droit syndical permet :",
    "answers": [
      "De fixer les salaires sans négociation",
      "De représenter et défendre les intérêts des salariés",
      "De remplacer la direction",
      "D’interdire les discussions"
    ],
    "correct": 1
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Dans une entreprise, le droit syndical permet :",
    "answers": [
      "De représenter et défendre les intérêts des salariés",
      "D’interdire les discussions",
      "De remplacer la direction",
      "De fixer les salaires sans négociation"
    ],
    "correct": 0
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Dans une entreprise, le droit de grève autorise :",
    "answers": [
      "À ne jamais respecter le contrat de travail",
      "À quitter définitivement son emploi",
      "À cesser le travail pour défendre des revendications professionnelles",
      "À refuser toute discussion avec l’employeur"
    ],
    "correct": 2
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Dans une entreprise, le droit de grève autorise :",
    "answers": [
      "À refuser toute discussion avec l’employeur",
      "À quitter définitivement son emploi",
      "À ne jamais respecter le contrat de travail",
      "À cesser le travail pour défendre des revendications professionnelles"
    ],
    "correct": 3
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Quelles sont les conditions pour toucher les allocations chômage ?",
    "answers": [
      "N’avoir jamais travaillé",
      "Avoir plus de 60 ans uniquement",
      "Être étudiant",
      "Être inscrit comme demandeur d’emploi et avoir travaillé un minimum de temps"
    ],
    "correct": 3
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Quelles sont les conditions pour toucher les allocations chômage ?",
    "answers": [
      "Être étudiant",
      "Être inscrit comme demandeur d’emploi et avoir travaillé un minimum de temps",
      "Avoir plus de 60 ans uniquement",
      "N’avoir jamais travaillé"
    ],
    "correct": 1
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Qu'est-ce que l'école maternelle ?",
    "answers": [
      "Une école militaire",
      "Une école pour les enfants avant l'école élémentaire",
      "Une école obligatoire pour les adultes",
      "Une école pour apprendre un métier"
    ],
    "correct": 1
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Comment s'appelle le diplôme passé par les élèves à la fin du collège ?",
    "answers": [
      "Le brevet",
      "Le CAP",
      "Le baccalauréat",
      "Le certificat d’études"
    ],
    "correct": 0
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Les parents d'élève ont le droit de :",
    "answers": [
      "Modifier les programmes scolaires",
      "Participer aux réunions et aux élections des représentants",
      "Choisir les notes de leur enfant",
      "Décider seuls des sanctions"
    ],
    "correct": 1
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Qui peut manger à la cantine scolaire ?",
    "answers": [
      "Uniquement les élèves boursiers",
      "Seulement les enseignants",
      "Tous les habitants du quartier",
      "Les élèves inscrits dans l’établissement"
    ],
    "correct": 3
  },
  {
    "theme": "Vivre dans la société française",
    "question": "À quel âge commence l'instruction obligatoire des enfants ?",
    "answers": [
      "5 ans",
      "3 ans",
      "6 ans",
      "4 ans"
    ],
    "correct": 1
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Quel est l'âge de la majorité ?",
    "answers": [
      "16 ans",
      "18 ans",
      "17 ans",
      "21 ans"
    ],
    "correct": 1
  },
  {
    "theme": "Vivre dans la société française",
    "question": "À l'école, il est interdit aux parents de :",
    "answers": [
      "Respecter le règlement intérieur",
      "Voter aux élections des représentants",
      "Participer aux réunions",
      "Porter atteinte au principe de laïcité"
    ],
    "correct": 3
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Quel motif d'absence est accepté par l'école ?",
    "answers": [
      "Faire du shopping",
      "Rester à la maison sans raison",
      "Une maladie avec justification",
      "Partir en vacances hors période scolaire"
    ],
    "correct": 2
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Quel motif d'absence est accepté par l'école ?",
    "answers": [
      "Vacances familiales non prévues",
      "Rendez-vous médical justifié",
      "Sortie au cinéma sans autorisation",
      "Fête d’anniversaire entre amis"
    ],
    "correct": 1
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Des parents ne respectent pas l'obligation d'instruction pour leurs enfants. Quelle sanction maximale risquent-ils ?",
    "answers": [
      "Une simple remarque",
      "La suppression du droit de vote",
      "Aucune sanction",
      "Une amende et/ou une peine prévue par la loi"
    ],
    "correct": 3
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Quand ont lieu les vacances scolaires de Noël ?",
    "answers": [
      "Fin décembre",
      "En juillet",
      "En mars",
      "En octobre"
    ],
    "correct": 0
  },
  {
    "theme": "Vivre dans la société française",
    "question": "À l'école, un enfant en situation de handicap :",
    "answers": [
      "Peut être scolarisé avec des aménagements adaptés",
      "Ne peut pas être scolarisé",
      "Doit obligatoirement rester à domicile",
      "Est exclu des activités scolaires"
    ],
    "correct": 0
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Quel numéro d'urgence permet d'appeler le SAMU ?",
    "answers": ["15", "17", "18", "112"],
    "correct": 0
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Quel numéro d'urgence permet d'appeler les pompiers ?",
    "answers": ["15", "18", "17", "112"],
    "correct": 1
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Après avoir obtenu le permis de conduire, que faut-il faire pour pouvoir conduire sa voiture ?",
    "answers": [
      "Acheter une vignette écologique uniquement",
      "Souscrire une assurance automobile",
      "Demander l’autorisation à la mairie",
      "Passer un autre examen"
    ],
    "correct": 1
  },
  {
    "theme": "Vivre dans la société française",
    "question": "À quelles conditions un mariage est-il reconnu juridiquement ?",
    "answers": [
      "S'il est célébré à l'église",
      "S'il est célébré à la mairie",
      "S'il est déclaré entre amis",
      "S'il est annoncé dans un journal"
    ],
    "correct": 1
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Quand faut-il déclarer son enfant au service d'état civil de la mairie ?",
    "answers": [
      "Dans les 3 jours suivant la naissance",
      "Dans le mois suivant la naissance",
      "Avant les 6 mois de l’enfant",
      "À la première rentrée scolaire"
    ],
    "correct": 0
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Le travail non déclaré est :",
    "answers": [
      "Autorisé si l’employeur est d’accord",
      "Légal pour les étudiants",
      "Interdit par la loi",
      "Accepté pour les petits emplois"
    ],
    "correct": 2
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Que doit faire un employeur pour fixer un salaire ?",
    "answers": [
      "Respecter au minimum le SMIC et la convention collective",
      "Fixer librement sans règle",
      "Demander l’autorisation du maire",
      "S’aligner uniquement sur les concurrents"
    ],
    "correct": 0
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Qu'est-ce que le SMIC ?",
    "answers": [
      "Une aide sociale",
      "Le salaire minimum légal",
      "Un impôt obligatoire",
      "Une prime exceptionnelle"
    ],
    "correct": 1
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Quelle est la première démarche à réaliser pour chercher un emploi ?",
    "answers": [
      "S’inscrire à France Travail",
      "Attendre une proposition",
      "Demander à la mairie",
      "Créer immédiatement une entreprise"
    ],
    "correct": 0
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Quelle est la durée légale du temps de travail par semaine ?",
    "answers": [
      "32 heures",
      "40 heures",
      "35 heures",
      "39 heures obligatoires"
    ],
    "correct": 2
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Qui est aidé par France Travail ?",
    "answers": [
      "Les retraités uniquement",
      "Les demandeurs d’emploi",
      "Les touristes",
      "Les élèves du primaire"
    ],
    "correct": 1
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Une personne étrangère en situation régulière peut créer son entreprise :",
    "answers": [
      "Jamais",
      "Seulement après 10 ans",
      "Oui, sous certaines conditions",
      "Uniquement avec l’accord du maire"
    ],
    "correct": 2
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Une femme peut-elle créer son entreprise ?",
    "answers": [
      "Oui",
      "Non",
      "Seulement si elle est mariée",
      "Seulement après 30 ans"
    ],
    "correct": 0
  },
  {
    "theme": "Vivre dans la société française",
    "question": "À partir de quel âge un mineur peut-il travailler ?",
    "answers": [
      "14 ans",
      "15 ans",
      "16 ans",
      "18 ans"
    ],
    "correct": 2
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Auprès de quel organisme faut-il demander le remboursement des frais de santé ?",
    "answers": [
      "La mairie",
      "La CAF",
      "L’Assurance Maladie",
      "La préfecture"
    ],
    "correct": 2
  },
   {
    "theme": "Vivre dans la société française",
    "question": "Qu’est-ce qu’un numéro d’urgence ?",
    "answers": [
      "Un numéro pour prendre rendez-vous à la mairie",
      "Un numéro gratuit pour contacter rapidement les secours",
      "Un numéro pour payer ses impôts",
      "Un numéro réservé aux professionnels"
    ],
    "correct": 1
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Concernant l'accès aux soins, quelle proposition est correcte ?",
    "answers": [
      "Les soins sont réservés aux personnes qui travaillent",
      "L’accès aux soins dépend du revenu uniquement",
      "Toute personne a droit à l’accès aux soins",
      "Les étrangers n’ont pas accès aux soins"
    ],
    "correct": 2
  },
  {
    "theme": "Vivre dans la société française",
    "question": "En cas de problème de santé non urgent, à qui faut-il s’adresser en premier ?",
    "answers": [
      "Aux urgences de l’hôpital",
      "À son médecin traitant",
      "À la police",
      "À la mairie"
    ],
    "correct": 1
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Quel est le rôle du médecin traitant ?",
    "answers": [
      "Délivrer un permis de conduire",
      "Orienter le patient dans son parcours de soins",
      "Fixer le montant des impôts",
      "Décider des allocations familiales"
    ],
    "correct": 1
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Dans quelles situations doit-on se rendre aux urgences de l'hôpital ?",
    "answers": [
      "Pour un simple renouvellement d’ordonnance",
      "En cas de situation grave ou urgente",
      "Pour demander un certificat scolaire",
      "Pour obtenir un arrêt de travail sans consultation"
    ],
    "correct": 1
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Quel est l’objectif des vaccinations obligatoires ?",
    "answers": [
      "Protéger uniquement les adultes",
      "Éviter les contrôles médicaux",
      "Protéger la population contre certaines maladies",
      "Remplacer les traitements médicaux"
    ],
    "correct": 2
  },
  {
    "theme": "Vivre dans la société française",
    "question": "À quoi sert la carte Vitale ?",
    "answers": [
      "À payer les impôts",
      "À justifier son identité à l’école",
      "À faciliter le remboursement des soins",
      "À voter aux élections"
    ],
    "correct": 2
  },
  {
    "theme": "Vivre dans la société française",
    "question": "À quoi sert une mutuelle santé ?",
    "answers": [
      "À remplacer l’Assurance Maladie",
      "À compléter le remboursement des frais de santé",
      "À financer les retraites",
      "À payer les impôts"
    ],
    "correct": 1
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Jusqu'à quel âge l'école est-elle obligatoire ?",
    "answers": [
      "14 ans",
      "16 ans",
      "18 ans",
      "12 ans"
    ],
    "correct": 1
  },
  {
    "theme": "Vivre dans la société française",
    "question": "L'autorité parentale prévoit l'obligation :",
    "answers": [
      "D’inscrire l’enfant à l’école et d’assurer son éducation",
      "De laisser l’enfant décider seul",
      "De payer une taxe spéciale",
      "D’inscrire l’enfant uniquement à des activités sportives"
    ],
    "correct": 0
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Pour qui l'école est-elle obligatoire ?",
    "answers": [
      "Pour tous les enfants de 3 à 16 ans",
      "Seulement pour les garçons",
      "Uniquement pour les citoyens français",
      "Pour les enfants de plus de 6 ans uniquement"
    ],
    "correct": 0
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Quel diplôme obtient-on à la fin du lycée ?",
    "answers": [
      "Le brevet",
      "Le CAP",
      "Le baccalauréat",
      "La licence"
    ],
    "correct": 2
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Dans quels établissements scolaires vont les élèves après l'école élémentaire ?",
    "answers": [
      "À l’université",
      "Au collège",
      "Au lycée directement",
      "En apprentissage obligatoire"
    ],
    "correct": 1
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Pour qui l'école est elle obligatoire ?",
    "answers": [
      "Pour tous les enfants résidant en France de 3 à 16 ans",
      "Uniquement pour les enfants français",
      "Seulement pour les filles",
      "Pour les enfants dont les parents travaillent"
    ],
    "correct": 0
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Un enfant inscrit à l'école :",
    "answers": [
      "Peut venir seulement quand il veut",
      "Doit être présent et assidu",
      "N’est pas obligé de faire ses devoirs",
      "Peut quitter l’école sans prévenir"
    ],
    "correct": 1
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Les enfants qui ne parlent pas français :",
    "answers": [
      "Ne peuvent pas aller à l’école",
      "Doivent attendre d’apprendre le français seuls",
      "Bénéficient d’un accompagnement pour apprendre le français",
      "Sont orientés automatiquement vers une autre école"
    ],
    "correct": 2
  }
];
