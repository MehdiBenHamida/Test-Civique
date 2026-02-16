const QUESTIONS = [
  {
    "theme": "Principes et valeurs de la République",
    "question": "À quoi correspond la date du 14 juillet ?",
    "answers": [
      "À la fin de la Première Guerre mondiale",
      "À la fête nationale française",
      "À la fête du travail",
      "À la fête de la musique"
    ],
    "correct": 1
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Quel est le nom de l'hymne national ?",
    "answers": [
      "La Marseillaise",
      "Le Chant des Partisans",
      "La Carmagnole",
      "La Madelon"
    ],
    "correct": 0
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Quelle est la date de la fête nationale française ?",
    "answers": [
      "14 juillet",
      "1er janvier",
      "25 décembre",
      "1er mai"
    ],
    "correct": 0
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Quelle est la devise de la République française ?",
    "answers": [
      "Liberté, égalité, fraternité",
      "Paix, travail, justice",
      "Force, honneur, fraternité",
      "Unité, solidarité, liberté"
    ],
    "correct": 0
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Quelle est la langue officielle de la République française ?",
    "answers": [
      "Le français",
      "L’anglais",
      "L’espagnol",
      "L’allemand"
    ],
    "correct": 0
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Quelle liberté permet à chacun d’exprimer ses idées ?",
    "answers": [
      "La liberté d’expression",
      "La liberté de circulation",
      "La liberté religieuse",
      "La liberté de réunion"
    ],
    "correct": 0
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Quelles sont les couleurs du drapeau français ?",
    "answers": [
      "Bleu, blanc, rouge",
      "Vert, blanc, rouge",
      "Bleu, jaune, rouge",
      "Noir, blanc, rouge"
    ],
    "correct": 0
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Qu'est-ce qui est traditionnellement organisé sur les Champs Élysées le 14 juillet pour célébrer la fête nationale ?",
    "answers": [
      "Un défilé militaire",
      "Une foire commerciale",
      "Une course cycliste",
      "Un concert de musique classique"
    ],
    "correct": 0
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Qui est Marianne ?",
    "answers": [
      "Un symbole de la République française",
      "Une chanteuse célèbre",
      "Un personnage de roman",
      "Une ville française"
    ],
    "correct": 0
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Lequel de ces symboles représente officiellement la République française ?",
    "answers": [
      "Le drapeau tricolore",
      "La Tour Eiffel",
      "Le coq gaulois seulement en dessin",
      "La statue de la Liberté"
    ],
    "correct": 0
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Où peut-on voir la devise de la République ?",
    "answers": [
      "Sur les bâtiments publics",
      "Sur les billets de cinéma",
      "Dans les livres de recettes",
      "Sur les panneaux publicitaires"
    ],
    "correct": 0
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Quels sont des symboles officiels de la République française ?",
    "answers": [
      "Le drapeau, la Marseillaise, Marianne",
      "Le Mont Blanc et la Tour Eiffel",
      "Le coq uniquement",
      "La devise et le Louvre"
    ],
    "correct": 0
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Qu’est-ce que l’égalité ?",
    "answers": [
      "Le fait que tous les citoyens aient les mêmes droits",
      "Le fait que chacun peut faire ce qu’il veut",
      "Le fait que certains ont plus de droits",
      "Le fait de choisir ses lois"
    ],
    "correct": 0
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Que signifie la liberté ?",
    "answers": [
      "Pouvoir agir sans nuire aux autres et selon la loi",
      "Pouvoir faire tout ce que l’on veut",
      "Être libre de payer ou non ses impôts",
      "Pouvoir ignorer les règles de circulation"
    ],
    "correct": 0
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Que signifie le mot \"fraternité\" dans la devise française ?",
    "answers": [
      "Solidarité et entraide entre citoyens",
      "Famille seulement",
      "Amitié avec les voisins",
      "Relations commerciales"
    ],
    "correct": 0
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Quel animal est un symbole de la France ?",
    "answers": [
      "Le coq",
      "Le lion",
      "L’aigle",
      "Le cheval"
    ],
    "correct": 0
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
      "La Statue de la Liberté",
      "Le Mont Saint-Michel",
      "Le drapeau tricolore",
      "La Tour de Pise"
    ],
    "correct": 2
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Le principe d’égalité signifie que :",
    "answers": [
      "Tous les citoyens sont égaux devant la loi",
      "On peut discriminer selon l’âge",
      "Les riches ont plus de libertés",
      "Certains citoyens ont plus de droits que d’autres"
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
      "Non, mais seulement à l’école",
      "Oui, si c’est un membre de la famille",
      "Oui, si c’est sur les réseaux sociaux",
      "Non, c’est interdit par la loi"
    ],
    "correct": 3
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
      "1789",
      "1848",
      "1958",
      "1871"
    ],
    "correct": 2
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Le régime de la France est :",
    "answers": [
      "Monarchique",
      "Républicain",
      "Fédéral",
      "Communiste"
    ],
    "correct": 1
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Parmi les propositions suivantes, laquelle constitue une participation citoyenne ?",
    "answers": [
      "Voter aux élections",
      "Ignorer les convocations administratives",
      "Ne pas respecter la loi",
      "Refuser de payer ses impôts"
    ],
    "correct": 0
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Que garantit la liberté d’expression ?",
    "answers": [
      "Le droit de diffuser de fausses informations",
      "Le droit d’exprimer ses opinions dans le respect de la loi",
      "Le droit de menacer quelqu’un",
      "Le droit d’insulter librement"
    ],
    "correct": 1
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Que garantit la liberté d’expression ?",
    "answers": [
      "Le droit de dire ce que l’on pense dans le respect des lois",
      "Le droit de tout faire sans limite",
      "L’obligation de suivre l’opinion du gouvernement",
      "L’interdiction de critiquer les institutions"
    ],
    "correct": 0
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "À quoi sert un titre de séjour ?",
    "answers": [
      "À voter aux élections nationales",
      "À autoriser un étranger à séjourner légalement en France",
      "À voyager librement dans le monde",
      "À obtenir automatiquement la nationalité française"
    ],
    "correct": 1
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "La liberté de circulation permet à toute personne de :",
    "answers": [
      "Refuser tout contrôle d’identité",
      "Circuler sans papiers d’identité",
      "Se déplacer librement sur le territoire dans le respect de la loi",
      "Changer de nationalité librement"
    ],
    "correct": 2
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Sur quel site internet peut-on retrouver le symbole de la République française ?",
    "answers": [
      "www.gouvernement.fr",
      "www.wikipedia.org",
      "www.amazon.fr",
      "www.netflix.com"
    ],
    "correct": 0
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Complétez ces paroles de la Marseillaise : \"Aux armes […] ! Formez vos bataillons\"",
    "answers": [
      "soldats",
      "français",
      "amis",
      "citoyens"
    ],
    "correct": 3
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
      "Imposer ses choix aux autres",
      "Refuser d’obéir aux lois",
      "Faire justice elle-même",
      "Choisir son mode de vie dans le respect de la loi"
    ],
    "correct": 3
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Concernant la pratique de la religion, quelle proposition est correcte ?",
    "answers": [
      "Elle est obligatoire",
      "Elle dépend de l’origine",
      "Elle est libre dans le respect de la loi",
      "Elle est interdite en France"
    ],
    "correct": 2
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "En tant que parent, peut-on refuser que son enfant participe aux cours de sport à l'école car ils sont mixtes ?",
    "answers": [
      "Oui, si on n’est pas d’accord",
      "Oui, avec une autorisation du maire",
      "Oui, uniquement au collège",
      "Non, l’école publique est obligatoire et mixte"
    ],
    "correct": 3
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Quelle est la devise de la France ?",
    "answers": [
      "Travail, Famille, Patrie",
      "Honneur et Patrie",
      "Unité et Justice",
      "Liberté, Égalité, Fraternité"
    ],
    "correct": 3
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "La répudiation de sa femme est :",
    "answers": [
      "Acceptée si les deux époux sont d’accord",
      "Interdite par la loi française",
      "Une pratique légale sous conditions",
      "Autorisée par la loi française"
    ],
    "correct": 1
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Les impôts permettent de financer les dépenses publiques. Quelle proposition est correcte ?",
    "answers": [
      "Ils financent uniquement les entreprises privées",
      "Ils servent à financer les services publics et les infrastructures",
      "Ils servent uniquement à payer les policiers",
      "Ils sont facultatifs"
    ],
    "correct": 1
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Peut-on brûler publiquement un drapeau français ?",
    "answers": [
      "Oui, c’est un acte libre",
      "Non, c’est interdit par la loi",
      "Oui, si c’est à titre artistique",
      "Oui, uniquement lors de manifestations"
    ],
    "correct": 1
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Que fait l’État pour lutter contre les discriminations ?",
    "answers": [
      "Il impose des sanctions pénales et civiles",
      "Il favorise certaines religions",
      "Il ne peut rien faire",
      "Il ignore les plaintes individuelles"
    ],
    "correct": 0
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Que représente Marianne ?",
    "answers": [
      "La liberté et la République française",
      "Une fête nationale",
      "Un personnage historique du Moyen Âge",
      "La monarchie"
    ],
    "correct": 0
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Qu'est-ce que la liberté d'association ?",
    "answers": [
      "L’obligation de rejoindre une association",
      "Le droit de dissoudre des associations par décret",
      "L’interdiction de créer des associations",
      "Le droit de former ou rejoindre des groupes, clubs ou associations"
    ],
    "correct": 3
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Qu'est-ce que la liberté ?",
    "answers": [
      "L’abolition de toutes les règles",
      "Le droit de tout faire sans limites",
      "Le droit d’agir dans le respect de la loi",
      "Une notion religieuse uniquement"
    ],
    "correct": 2
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Qu'est-ce que la Marseillaise ?",
    "answers": [
      "Un monument",
      "Un personnage historique",
      "L’hymne national français",
      "Un drapeau"
    ],
    "correct": 2
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Sur quel document peut-on voir Marianne ?",
    "answers": [
      "Le passeport et les timbres officiels",
      "Les factures d’électricité",
      "Les tickets de cinéma",
      "Le permis de conduire uniquement"
    ],
    "correct": 0
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Un employeur refuse d’embaucher des femmes dans son entreprise. Que dit la loi ?",
    "answers": [
      "C’est interdit, c’est une discrimination",
      "C’est légal selon la liberté de recrutement",
      "C’est autorisé uniquement pour certaines professions",
      "C’est une recommandation mais pas une obligation"
    ],
    "correct": 0
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Une des valeurs de la devise républicaine est l'égalité. Qu'est-ce que cela signifie ?",
    "answers": [
      "Que la richesse doit être identique pour tous",
      "Que tous les citoyens sont traités de la même façon devant la loi",
      "Que la liberté est optionnelle",
      "Que certains citoyens ont plus de droits"
    ],
    "correct": 1
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Quelle est la place de la langue française dans la République ?",
    "answers": [
      "Elle est réservée à l’école seulement",
      "Elle est facultative",
      "Elle peut être remplacée par toute langue étrangère",
      "C’est la langue officielle de l’État"
    ],
    "correct": 3
  },
  {
    "theme": "Principes et valeurs de la République",
    "question": "Quels sont des symboles officiels de la République française ?",
    "answers": [
      "Napoléon Bonaparte",
      "Le coq et le fromage",
      "Marianne, le drapeau tricolore, la Marseillaise",
      "La tour Eiffel et le Louvre"
    ],
    "correct": 2
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qu'est-ce que l'État de droit ?",
    "answers": [
      "Un État sans lois écrites",
      "Un État où la loi s’applique à tous et garantit les libertés",
      "Un État où certaines personnes sont au-dessus de la loi",
      "Un État dirigé par une seule personne"
    ],
    "correct": 1
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Le président de la République a commis un crime. Quelle proposition est correcte ?",
    "answers": [
      "Il peut être jugé comme tout citoyen après son mandat",
      "Il est protégé à vie et ne peut jamais être jugé",
      "Il ne peut être jugé que par le Parlement",
      "Il peut décider lui-même de son jugement"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "La loi est l'expression de :",
    "answers": [
      "La volonté de la police",
      "La volonté générale",
      "La volonté des entreprises",
      "La volonté du président uniquement"
    ],
    "correct": 1
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qui nomme le Premier ministre ?",
    "answers": [
      "Le Parlement",
      "Le Président de la République",
      "Le Conseil constitutionnel",
      "Les citoyens"
    ],
    "correct": 1
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Le Parlement est composé :",
    "answers": [
      "Du Sénat et de l'Assemblée nationale",
      "Du Président et du Gouvernement",
      "Des maires et des préfets",
      "Du Conseil constitutionnel"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qu'est-ce que le pouvoir exécutif ? Le pouvoir :",
    "answers": [
      "Qui applique les lois",
      "Qui vote les lois",
      "Qui juge les litiges",
      "Qui organise les élections"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Les dirigeants sont élus par les citoyens dans :",
    "answers": [
      "Les élections",
      "Les nominations royales",
      "Le Conseil constitutionnel",
      "Les assemblées municipales uniquement"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "A-t-on le droit de ne pas respecter une loi ?",
    "answers": [
      "Non, la loi doit être respectée",
      "Oui, si elle ne plaît pas",
      "Oui, seulement à l'école",
      "Non, sauf pour les ministres"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qui doit respecter la loi ?",
    "answers": [
      "Tous les citoyens et les autorités",
      "Seulement les citoyens",
      "Seulement le Président",
      "Seulement les députés"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quel est le rôle de l'autorité judiciaire ?",
    "answers": [
      "Rendre la justice et appliquer les lois",
      "Faire les lois",
      "Nommer le Premier ministre",
      "Gérer le budget de l'État"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quel pouvoir détient un juge ? Le pouvoir :",
    "answers": [
      "De juger et trancher les litiges",
      "De voter les lois",
      "D’exécuter les décisions du Président",
      "De diriger la police nationale"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quelle est la durée du mandat du conseil municipal et du maire ?",
    "answers": [
      "3 ans",
      "6 ans",
      "5 ans",
      "4 ans"
    ],
    "correct": 1
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Que garantit l’État de droit ?",
    "answers": [
      "Que les citoyens ne paient pas d’impôts",
      "Que le président décide seul des lois",
      "Que la loi s’applique à tous et protège les droits",
      "Que la police peut agir sans contrôle"
    ],
    "correct": 2
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Une personne peut-elle voter à la place d'une autre ?",
    "answers": [
      "Oui, si elle a une procuration",
      "Non, jamais, même avec autorisation",
      "Oui, toujours",
      "Oui, uniquement pour les élections locales"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Est-ce que le vote est obligatoire ?",
    "answers": [
      "Non, sauf en cas de référendum",
      "Oui, uniquement pour les élections présidentielles",
      "Oui, pour tous les citoyens",
      "Non, il est libre en France"
    ],
    "correct": 3
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "À la fin de son mandat, le président de la République peut-il décider de rester au pouvoir ?",
    "answers": [
      "Non, il doit passer le pouvoir selon la Constitution",
      "Oui, toujours",
      "Oui, si le Parlement est d’accord",
      "Oui, s’il y a un référendum"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qui dirige l'action du Gouvernement ?",
    "answers": [
      "Le Conseil constitutionnel",
      "Le président du Sénat",
      "Le président de l’Assemblée nationale",
      "Le Premier ministre"
    ],
    "correct": 3
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
      "État, régions, départements, communes",
      "État et territoires indépendants",
      "État et cantons uniquement"
    ],
    "correct": 1
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qu'est-ce que le pouvoir législatif ? Le pouvoir :",
    "answers": [
      "Applique les lois",
      "Fait les lois",
      "Nomine les préfets",
      "Juge les infractions"
    ],
    "correct": 1
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Pour combien de temps est élu le président de la République française ?",
    "answers": [
      "7 ans",
      "5 ans",
      "4 ans",
      "6 ans"
    ],
    "correct": 1
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Pour combien de temps sont élus les députés ?",
    "answers": [
      "6 ans",
      "5 ans",
      "4 ans",
      "3 ans"
    ],
    "correct": 1
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Pour combien de temps sont élus les sénateurs ?",
    "answers": [
      "6 ans",
      "5 ans",
      "4 ans",
      "7 ans"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qui possède le pouvoir exécutif ?",
    "answers": [
      "Le Parlement",
      "Le Président et le Gouvernement",
      "Le Conseil constitutionnel",
      "Les députés"
    ],
    "correct": 1
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quelle condition est nécessaire pour voter aux élections ?",
    "answers": [
      "Avoir 18 ans et être inscrit sur les listes électorales",
      "Être marié",
      "Payer ses impôts",
      "Avoir un diplôme"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Que signifie « suffrage universel » ?",
    "answers": [
      "Tous les citoyens peuvent voter",
      "Seules les personnes riches votent",
      "Seules les personnes instruites votent",
      "Seules certaines régions votent"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Concernant les partis politiques, quelle proposition est correcte ?",
    "answers": [
      "Ils présentent des candidats aux élections et défendent des idées",
      "Ils font appliquer les lois",
      "Ils nomment le président",
      "Ils jugent les citoyens"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quel est le rôle des députés ?",
    "answers": [
      "Voter les lois et contrôler le Gouvernement",
      "Nommer les juges",
      "Diriger les communes",
      "Gérer le budget européen"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "La séparation des pouvoirs est un principe fondamental. Quels sont les trois pouvoirs concernés ?",
    "answers": [
      "Législatif, exécutif, judiciaire",
      "Président, Premier ministre, Parlement",
      "Députés, sénateurs, maires",
      "Ministres, préfets, juges"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qui possède le pouvoir législatif ?",
    "answers": [
      "Le Parlement",
      "Le Président",
      "Le Gouvernement",
      "Le Conseil constitutionnel"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qui sanctionne l'auteur d'un vol ?",
    "answers": [
      "Le juge",
      "Le maire",
      "Le Président",
      "Le Premier ministre"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qui élit les députés ?",
    "answers": [
      "Les citoyens inscrits sur les listes électorales",
      "Le Sénat",
      "Le Président",
      "Le Conseil constitutionnel"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qui vote les lois ?",
    "answers": [
      "Le Parlement",
      "Le Président",
      "Le Premier ministre",
      "Les citoyens"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qui réside au palais de l'Élysée ?",
    "answers": [
      "Le Président de la République",
      "Le Premier ministre",
      "Le Président de l’Assemblée",
      "Le maire de Paris"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Combien y a-t-il de départements en France ?",
    "answers": [
      "101",
      "95",
      "120",
      "80"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qui représente l'État dans un département ?",
    "answers": [
      "Le préfet",
      "Le maire",
      "Le Président du département",
      "Le député"
    ],
    "correct": 0
  },
    {
    "theme": "Système institutionnel et politique",
    "question": "Qui dirige la commune ?",
    "answers": [
      "Le maire",
      "Le président de la République",
      "Le préfet",
      "Le député"
    ],
    "correct": 0
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
      "Le représentant de l’État dans le département",
      "Le président du département",
      "Le maire",
      "Le député"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quel est le rôle du Parlement ?",
    "answers": [
      "Voter les lois et contrôler le Gouvernement",
      "Nommer les ministres",
      "Rendre la justice",
      "Gérer les finances locales"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quel est le régime politique de la France aujourd'hui ?",
    "answers": [
      "République",
      "Monarchie",
      "Empire",
      "Fédéralisme"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Combien d'États font partie de l'Union européenne au 1er janvier 2025 ?",
    "answers": [
      "27",
      "25",
      "30",
      "28"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quel État n'est pas membre de l'Union européenne ?",
    "answers": [
      "Norvège",
      "France",
      "Allemagne",
      "Italie"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quelle condition est nécessaire pour voter aux élections européennes ?",
    "answers": [
      "Être citoyen européen et inscrit sur les listes électorales",
      "Avoir 16 ans",
      "Résider uniquement en France",
      "Avoir un emploi"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Pourquoi séparer les trois pouvoirs dans une démocratie ?",
    "answers": [
      "Pour éviter la concentration des pouvoirs et protéger les libertés",
      "Pour faciliter le travail des ministres",
      "Pour que les citoyens ne votent pas",
      "Pour que le président ait plus de pouvoirs"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qui sanctionne l'auteur d'un vol ?",
    "answers": [
      "Le maire",
      "La justice",
      "Le président",
      "Le conseil municipal"
    ],
    "correct": 1
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quel est le rôle du gouvernement ?",
    "answers": [
      "Contrôler le Parlement",
      "Nommer les juges",
      "Diriger l’action de l’État et appliquer les lois",
      "Faire les lois"
    ],
    "correct": 2
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
      "350",
      "450",
      "577",
      "705"
    ],
    "correct": 2
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qui peut voter aux élections en France ?",
    "answers": [
      "Tout résident, quel que soit son âge",
      "Tout citoyen français majeur inscrit sur les listes électorales",
      "Tout citoyen européen vivant en France",
      "Tout résident étranger"
    ],
    "correct": 1
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Pour combien de temps sont élus les sénateurs ?",
    "answers": [
      "6 ans",
      "3 ans",
      "4 ans",
      "5 ans"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "La séparation des pouvoirs est un principe fondamental. Quels sont les trois pouvoirs concernés ?",
    "answers": [
      "Législatif, administratif, économique",
      "Exécutif, parlementaire, religieux",
      "Militaire, judiciaire, économique",
      "Législatif, exécutif, judiciaire"
    ],
    "correct": 3
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Est-ce que le président de la République a tous les pouvoirs ?",
    "answers": [
      "Oui, sauf pour la justice",
      "Non, il partage les pouvoirs avec le Parlement et le gouvernement",
      "Oui, il décide seul de tout",
      "Non, il n’a aucun pouvoir"
    ],
    "correct": 1
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qui est le préfet ?",
    "answers": [
      "Le maire de la commune",
      "Le chef de la police municipale",
      "Le président du conseil régional",
      "Le représentant de l’État dans un département"
    ],
    "correct": 3
  },
    {
    "theme": "Système institutionnel et politique",
    "question": "L'autorité judiciaire est exercée par :",
    "answers": [
      "Les avocats",
      "Les juges et magistrats",
      "Le Parlement",
      "Le Président de la République"
    ],
    "correct": 1
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Que se passe-t-il si un ministre ne respecte pas la loi ?",
    "answers": [
      "Il peut être poursuivi et sanctionné",
      "Il est automatiquement réélu",
      "Il peut continuer sans problème",
      "Il est nommé Président"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qui est élu lors des élections législatives ?",
    "answers": [
      "Les députés",
      "Les sénateurs",
      "Le Président de la République",
      "Les maires"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Combien de députés composent l’Assemblée nationale ?",
    "answers": [
      "577",
      "350",
      "200",
      "705"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quand sont élus les sénateurs ?",
    "answers": [
      "Tous les trois ans pour moitié",
      "Tous les cinq ans",
      "Tous les dix ans",
      "Tous les deux ans"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qui est élu lors des élections municipales ?",
    "answers": [
      "Les conseillers municipaux",
      "Le Président de la République",
      "Les députés européens",
      "Les préfets"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qui est élu lors des élections présidentielles ?",
    "answers": [
      "Le Président de la République",
      "Le Premier ministre",
      "Les sénateurs",
      "Les députés"
    ],
    "correct": 0
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
      "Être majeur et inscrit sur les listes électorales",
      "Avoir un diplôme",
      "Être propriétaire",
      "Être né en France"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qui dirige la commune ?",
    "answers": [
      "Le préfet",
      "Le maire",
      "Le président du département",
      "Le président de région"
    ],
    "correct": 1
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quel est le régime politique de la France aujourd'hui ?",
    "answers": [
      "Empire",
      "République démocratique",
      "Dictature",
      "Monarchie"
    ],
    "correct": 1
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Qu'est-ce que l'Hôtel de Matignon ?",
    "answers": [
      "Le siège du Sénat",
      "La résidence du président",
      "La résidence officielle du Premier ministre",
      "Le siège de l’Assemblée nationale"
    ],
    "correct": 2
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Le Parlement est composé :",
    "answers": [
      "Des maires et des conseillers municipaux",
      "Du président et du Premier ministre",
      "Du Conseil constitutionnel et du Sénat",
      "De l’Assemblée nationale et du Sénat"
    ],
    "correct": 3
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quel est le rôle du président de la République ?",
    "answers": [
      "Diriger les communes",
      "Faire toutes les lois",
      "Garantir la Constitution, représenter la France et nommer le Premier ministre",
      "Sanctionner les tribunaux"
    ],
    "correct": 2
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
      "Le président",
      "Le maire",
      "Le Premier ministre",
      "Le ministre de l’Intérieur"
    ],
    "correct": 2
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Combien y a-t-il de régions en France ?",
    "answers": [
      "25",
      "22",
      "18",
      "13"
    ],
    "correct": 2
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quel est le rôle du Défenseur des droits ?",
    "answers": [
      "Sanctionner les juges",
      "Rédiger les lois",
      "Protéger les droits et lutter contre les discriminations",
      "Contrôler les maires"
    ],
    "correct": 2
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Depuis quand l'euro est-elle la monnaie unique ?",
    "answers": [
      "1995",
      "1999",
      "2002",
      "2010"
    ],
    "correct": 2
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quel est le rôle principal du département ?",
    "answers": [
      "Nommer les ministres",
      "Gérer la diplomatie",
      "Gérer les routes, collèges et aides sociales",
      "Émettre la monnaie"
    ],
    "correct": 2
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quel est le rôle principal des communes ?",
    "answers": [
      "Diriger les hôpitaux régionaux",
      "Gérer les universités",
      "Gérer l’école primaire, la voirie locale et les services de proximité",
      "Sanctionner les entreprises"
    ],
    "correct": 2
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Combien de communes environ existe-t-il en France ?",
    "answers": [
      "35 000",
      "10 000",
      "5 000",
      "50 000"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quel traité concerne la construction de l'Union européenne ?",
    "answers": [
      "Le traité de Maastricht",
      "Le traité de Lisbonne",
      "Le traité de Versailles",
      "Le traité de Rome"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quel État a quitté l'Union européenne en 2020 ?",
    "answers": [
      "L’Italie",
      "La Grèce",
      "Le Royaume-Uni",
      "Le Danemark"
    ],
    "correct": 2
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quelle est la devise de l’Union européenne ?",
    "answers": [
      "Progrès et Paix",
      "Unie dans la diversité",
      "Force et Solidarité",
      "Liberté, Égalité, Fraternité"
    ],
    "correct": 1
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quel est l'hymne de l'Union européenne ?",
    "answers": [
      "La Marseillaise",
      "L’Hymne à la Liberté",
      "L'Ode à la joie",
      "God Save the Queen"
    ],
    "correct": 2
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "De quoi est composé le drapeau européen ?",
    "answers": [
      "15 étoiles dorées sur fond blanc",
      "12 étoiles dorées sur fond bleu",
      "10 étoiles argentées sur fond rouge",
      "20 étoiles bleues sur fond jaune"
    ],
    "correct": 1
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "De quelle couleur est le drapeau européen ?",
    "answers": [
      "Bleu avec des étoiles dorées",
      "Jaune avec des étoiles bleues",
      "Vert avec des étoiles blanches",
      "Rouge avec des étoiles argentées"
    ],
    "correct": 0
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "En quelle année le traité de Maastricht, qui marque la fondation de l'Union européenne, a-t-il été signé ?",
    "answers": [
      "1992",
      "2000",
      "1989",
      "1995"
    ],
    "correct": 0
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
      "Amsterdam",
      "Luxembourg",
      "Bruxelles",
      "Strasbourg"
    ],
    "correct": 2
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
      "14 juillet",
      "9 mai",
      "1er janvier",
      "21 juin"
    ],
    "correct": 1
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "À quelle fréquence les élections européennes sont-elles organisées ?",
    "answers": [
      "Tous les 4 ans",
      "Tous les 3 ans",
      "Tous les 5 ans",
      "Tous les 6 ans"
    ],
    "correct": 2
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quelle condition est nécessaire pour voter aux élections européennes ?",
    "answers": [
      "Avoir un diplôme universitaire",
      "Être résident étranger",
      "Être majeur et inscrit sur les listes électorales",
      "Être fonctionnaire"
    ],
    "correct": 2
  },
  {
    "theme": "Système institutionnel et politique",
    "question": "Quel pays est un pays fondateur de l'Union européenne ?",
    "answers": [
      "La Suède",
      "L’Espagne",
      "Le Royaume-Uni",
      "La France"
    ],
    "correct": 3
  },
  {
    "theme": "Droits et devoirs",
    "question": "À quelle liberté la PMA fait-elle référence ?",
    "answers": [
      "La liberté de fonder une famille",
      "La liberté de circulation",
      "La liberté de réunion",
      "La liberté d’expression"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Au nom de quoi l'État justifie-t-il la restriction des droits ?",
    "answers": [
      "L’opinion du gouvernement",
      "Les entreprises privées",
      "L’intérêt général et l’ordre public",
      "Les traditions locales"
    ],
    "correct": 2
  },
  {
    "theme": "Droits et devoirs",
    "question": "Concernant le droit de se marier, quelle proposition est correcte ?",
    "answers": [
      "Deux personnes majeures peuvent se marier librement",
      "Il faut l’autorisation du maire pour aimer quelqu’un",
      "Le mariage est réservé aux personnes riches",
      "Le mariage religieux est obligatoire"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Est-il toujours possible de divorcer ?",
    "answers": [
      "Non, sauf accord du président",
      "Oui, le divorce est autorisé par la loi",
      "Non, le divorce est interdit",
      "Oui, seulement après 20 ans de mariage"
    ],
    "correct": 1
  },
  {
    "theme": "Droits et devoirs",
    "question": "La peine de mort est :",
    "answers": [
      "Décidée par référendum",
      "Abolie en France",
      "Réservée aux crimes graves",
      "Encore appliquée"
    ],
    "correct": 1
  },
  {
    "theme": "Droits et devoirs",
    "question": "Laquelle de ces citations est inscrite dans la Déclaration des Droits de l'homme et du Citoyen de 1789 ?",
    "answers": [
      "Le vote est obligatoire",
      "La France est une monarchie",
      "La religion est obligatoire",
      "Les hommes naissent et demeurent libres et égaux en droits"
    ],
    "correct": 3
  },
  {
    "theme": "Droits et devoirs",
    "question": "Le recours à l'avortement est-il autorisé ?",
    "answers": [
      "Non, jamais",
      "Oui, dans un cadre légal",
      "Non, sauf autorisation judiciaire",
      "Oui, uniquement à l’étranger"
    ],
    "correct": 1
  },
  {
    "theme": "Droits et devoirs",
    "question": "Que contient la Constitution ?",
    "answers": [
      "Les règles fondamentales d’organisation de l’État et les droits",
      "Les lois municipales uniquement",
      "Les règlements intérieurs des entreprises",
      "Les horaires des administrations"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Que garantit la liberté de la presse ?",
    "answers": [
      "Le droit de diffamer sans sanction",
      "L’interdiction des journaux étrangers",
      "Le droit d’informer librement dans le respect de la loi",
      "Le contrôle total des médias par l’État"
    ],
    "correct": 2
  },
  {
    "theme": "Droits et devoirs",
    "question": "Que prévoit la Charte de l'environnement ?",
    "answers": [
      "La liberté d’expression",
      "L’organisation des élections",
      "La protection de l’environnement et le développement durable",
      "La création des communes"
    ],
    "correct": 2
  },
  {
    "theme": "Droits et devoirs",
    "question": "Que signifie la dignité humaine ?",
    "answers": [
      "Le respect de chaque personne",
      "La supériorité d’un groupe",
      "Le respect des biens matériels",
      "Le droit d’imposer ses idées"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Que signifie le droit de manifester ?",
    "answers": [
      "Occuper un bâtiment public sans autorisation",
      "Refuser toute autorité",
      "Exprimer collectivement une opinion dans le respect de la loi",
      "Imposer ses idées par la force"
    ],
    "correct": 2
  },
  {
    "theme": "Droits et devoirs",
    "question": "Que signifie PMA ?",
    "answers": [
      "Procréation Médicalement Assistée",
      "Procédure de Mariage Assistée",
      "Programme Médical Autorisé",
      "Protection Médicale Administrative"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Quel texte est le plus difficile à modifier ?",
    "answers": [
      "La Constitution",
      "Un décret simple",
      "Un règlement intérieur",
      "Un arrêté municipal"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Quelle liberté permet à une personne de croire en la religion de son choix ?",
    "answers": [
      "La liberté de conscience",
      "La liberté de commerce",
      "La liberté d’association",
      "La liberté de circulation"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Qu'est-ce que le droit de grève ?",
    "answers": [
      "Le droit de quitter définitivement son emploi",
      "Le droit de cesser collectivement le travail pour défendre des revendications",
      "Le droit d’imposer ses idées par la force",
      "Le droit de ne jamais travailler"
    ],
    "correct": 1
  },
  {
    "theme": "Droits et devoirs",
    "question": "Qu'est-ce que la Constitution ?",
    "answers": [
      "Un règlement d’entreprise",
      "La loi fondamentale qui organise les pouvoirs publics",
      "Une loi locale",
      "Un traité européen"
    ],
    "correct": 1
  },
  {
    "theme": "Droits et devoirs",
    "question": "Qui peut demander à avorter ?",
    "answers": [
      "Seulement les mineures",
      "Seulement les femmes mariées",
      "Toute femme enceinte dans le cadre légal",
      "Uniquement avec l’accord du conjoint"
    ],
    "correct": 2
  },
  {
    "theme": "Droits et devoirs",
    "question": "Une femme majeure de nationalité française a-t-elle le droit de voter aux élections ?",
    "answers": [
      "Non",
      "Oui, si elle est inscrite sur les listes électorales",
      "Seulement si elle est mariée",
      "Oui, uniquement aux élections municipales"
    ],
    "correct": 1
  },
  {
    "theme": "Droits et devoirs",
    "question": "Concernant l'utilisation des réseaux sociaux, quelle proposition est correcte ?",
    "answers": [
      "On peut insulter librement",
      "Les lois ne s’appliquent pas en ligne",
      "Tout est autorisé sur internet",
      "Les propos tenus en ligne sont soumis à la loi"
    ],
    "correct": 3
  },
  {
    "theme": "Droits et devoirs",
    "question": "Jeter un mégot par terre est :",
    "answers": [
      "Sans conséquence",
      "Autorisé partout",
      "Recommandé",
      "Interdit et passible d’amende"
    ],
    "correct": 3
  },
  {
    "theme": "Droits et devoirs",
    "question": "L'État peut-il limiter les droits et libertés ?",
    "answers": [
      "Seulement en période électorale",
      "Oui, pour protéger l’ordre public et l’intérêt général",
      "Oui, sans justification",
      "Non, jamais"
    ],
    "correct": 1
  },
  {
    "theme": "Droits et devoirs",
    "question": "Parmi ces actions, laquelle permet d'adopter une attitude respectueuse de l’environnement ?",
    "answers": [
      "Utiliser plus d’emballages plastiques",
      "Trier ses déchets",
      "Brûler ses ordures",
      "Jeter ses déchets dans la nature"
    ],
    "correct": 1
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
      "Pour empêcher toute critique du gouvernement",
      "Pour limiter les opinions personnelles",
      "Pour interdire les débats politiques",
      "Pour protéger l’ordre public et les droits d’autrui"
    ],
    "correct": 3
  },
  {
    "theme": "Droits et devoirs",
    "question": "Pourquoi doit-on trier ses déchets ?",
    "answers": [
      "Pour éviter de payer des impôts",
      "Pour protéger l’environnement et favoriser le recyclage",
      "Ce n’est pas nécessaire",
      "Pour décorer les rues"
    ],
    "correct": 1
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
      "Refuser systématiquement",
      "Négocier immédiatement",
      "Ignorer les ordres",
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
      "Rédiger les lois",
      "Organiser les élections"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Quel est un exemple d’assistance à personne en danger ?",
    "answers": [
      "Appeler les secours pour aider une personne blessée",
      "Ignorer une personne en difficulté",
      "Quitter les lieux immédiatement",
      "Filmer un accident sans intervenir"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Quel exemple illustre une limitation de liberté pour protéger l'intérêt général ?",
    "answers": [
      "L’interdiction de travailler",
      "L’interdiction de voter",
      "L’interdiction de se déplacer",
      "L’interdiction de fumer dans les lieux publics"
    ],
    "correct": 3
  },
  {
    "theme": "Droits et devoirs",
    "question": "Quelle est l’attitude à avoir lorsque qu'on est témoin de violences ?",
    "answers": [
      "Prévenir les autorités",
      "Partager sur les réseaux sociaux",
      "Encourager la situation",
      "Rester indifférent"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Quelle est l'infraction la plus grave ?",
    "answers": [
      "Le crime",
      "Le rappel à la loi",
      "L’amende simple",
      "La contravention"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "Quelle obligation concerne toutes les personnes résidant en France quelle que soit leur nationalité ?",
    "answers": [
      "Voter aux élections",
      "Faire un service militaire",
      "Adhérer à un parti politique",
      "Respecter les lois françaises"
    ],
    "correct": 3
  },
  {
    "theme": "Droits et devoirs",
    "question": "Quelle proposition représente un exemple de crime ?",
    "answers": [
      "Un retard de paiement",
      "Un oubli de ticket",
      "Un meurtre",
      "Un stationnement interdit"
    ],
    "correct": 2
  },
  {
    "theme": "Droits et devoirs",
    "question": "Quelle proposition représente un exemple de délit ?",
    "answers": [
      "Un meurtre",
      "Un avertissement",
      "Une contravention de stationnement",
      "Un vol"
    ],
    "correct": 3
  },
  {
    "theme": "Droits et devoirs",
    "question": "Qui veille au maintien de l’ordre public ?",
    "answers": [
      "La police et la gendarmerie",
      "Le Parlement",
      "Les associations",
      "Les entreprises privées"
    ],
    "correct": 0
  },
  {
    "theme": "Droits et devoirs",
    "question": "S'agissant des déchets, quelle proposition est correcte ?",
    "answers": [
      "Ils doivent être triés et jetés dans des conteneurs adaptés",
      "Ils peuvent être brûlés en ville",
      "On peut les jeter dans la rue",
      "Ils ne concernent que les entreprises"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quel était le surnom de Louis XIV ?",
    "answers": [
      "Le Roi Sage",
      "Le Roi Guerrier",
      "Le Roi Soleil",
      "Le Roi Chevalier"
    ],
    "correct": 2
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quel roi de France a été exécuté pendant la Révolution française ?",
    "answers": [
      "Louis XV",
      "Louis XVI",
      "Henri IV",
      "François Ier"
    ],
    "correct": 1
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "En quelle année Napoléon Ier est-il devenu empereur ?",
    "answers": [
      "1789",
      "1799",
      "1815",
      "1804"
    ],
    "correct": 3
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Lequel de ces personnages a un lien avec la République française ?",
    "answers": [
      "Marianne",
      "Charlemagne",
      "Napoléon III",
      "Louis XV"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "De quand date l'appel à la résistance du général de Gaulle ?",
    "answers": [
      "14 juillet 1789",
      "18 juin 1940",
      "11 novembre 1918",
      "8 mai 1945"
    ],
    "correct": 1
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Pourquoi la Shoah est-elle étudiée à l'école ?",
    "answers": [
      "Pour remplacer l’histoire ancienne",
      "Pour transmettre la mémoire et lutter contre le racisme et l’antisémitisme",
      "Pour glorifier la guerre",
      "Pour valoriser la violence"
    ],
    "correct": 1
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quel pays a été colonisé par la France ?",
    "answers": [
      "L’Algérie",
      "Le Brésil",
      "Le Japon",
      "La Norvège"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Depuis quand les Français élisent-ils le président de la République au suffrage universel direct ?",
    "answers": [
      "1962",
      "1945",
      "1958",
      "1974"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quelle est la première étape de la construction européenne en 1951 ?",
    "answers": [
      "L’entrée du Royaume-Uni",
      "Le traité de Maastricht",
      "La création de l’euro",
      "La création de la CECA"
    ],
    "correct": 3
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Durant le mandat de quel président la peine de mort a-t-elle été abolie ?",
    "answers": [
      "Jacques Chirac",
      "Valéry Giscard d’Estaing",
      "François Mitterrand",
      "Charles de Gaulle"
    ],
    "correct": 2
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quel régime politique a été mis en place pendant la Révolution française en 1792 ?",
    "answers": [
      "L’Empire",
      "La Monarchie absolue",
      "La Restauration",
      "La Première République"
    ],
    "correct": 3
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
      "Elles ont été exemptées d’impôts",
      "Elles sont devenues éligibles à la présidence uniquement",
      "Elles ont obtenu le service militaire obligatoire",
      "Elles ont obtenu le droit de vote"
    ],
    "correct": 3
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quelle organisation internationale a été créée en 1945 après la Seconde Guerre mondiale ?",
    "answers": [
      "La Croix-Rouge",
      "L’ONU",
      "L’OTAN",
      "L’Union européenne"
    ],
    "correct": 1
  },
   {
    "theme": "Histoire géographie et culture",
    "question": "En quelle année a débuté la Révolution française ?",
    "answers": [
      "1776",
      "1789",
      "1792",
      "1804"
    ],
    "correct": 1
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qui était Napoléon Ier ?",
    "answers": [
      "Roi de France",
      "Empereur de France",
      "Président de la République",
      "Général anglais"
    ],
    "correct": 1
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Lequel de ces personnages historiques est français ?",
    "answers": [
      "George Washington",
      "Winston Churchill",
      "Napoléon Bonaparte",
      "Joan of Arc"
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
      "Une révolution en Russie",
      "Une loi française sur l’éducation",
      "Le génocide des Juifs pendant la Seconde Guerre mondiale",
      "Une guerre civile française"
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
      "Louis XIV",
      "Jules Ferry",
      "Charles de Gaulle",
      "Napoléon Ier"
    ],
    "correct": 1
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quand a eu lieu la Seconde Guerre mondiale ?",
    "answers": [
      "1914-1918",
      "1789-1799",
      "1939-1945",
      "1804-1815"
    ],
    "correct": 2
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quand a eu lieu la Première Guerre mondiale ?",
    "answers": [
      "1914-1918",
      "1939-1945",
      "1804-1815",
      "1789-1799"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "En quelle année a été créée la Communauté Économique Européenne (CEE) ?",
    "answers": [
      "1957",
      "1958",
      "1945",
      "1963"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Le 11 novembre est un jour férié. À quoi correspond cette date ?",
    "answers": [
      "Armistice de la Première Guerre mondiale",
      "Fête nationale",
      "Fin de la Seconde Guerre mondiale",
      "Commémoration de Napoléon"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qui a été le premier Président élu sous la Ve République ?",
    "answers": [
      "Charles de Gaulle",
      "François Mitterrand",
      "Jules Ferry",
      "Napoléon Ier"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "En quelle année l'esclavage a-t-il été aboli définitivement en France ?",
    "answers": [
      "1848",
      "1789",
      "1794",
      "1815"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Depuis quelle année l'école publique est-elle gratuite ?",
    "answers": [
      "1881",
      "1792",
      "1905",
      "1870"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Combien y a-t-il eu de républiques en France ?",
    "answers": [
      "Cinq",
      "Quatre",
      "Trois",
      "Six"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qui était le roi de France au moment de la Révolution française ?",
    "answers": [
      "Louis XVI",
      "Louis XIV",
      "Napoléon Ier",
      "Charles X"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qui a fondé la Ve République ?",
    "answers": [
      "François Mitterrand",
      "Charles de Gaulle",
      "Jules Ferry",
      "Louis XVI"
    ],
    "correct": 1
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Que célèbre-t-on le 14 juillet ?",
    "answers": [
      "La prise de la Bastille",
      "La fin de la Seconde Guerre mondiale",
      "L’armistice de 1918",
      "La naissance de Napoléon Ier"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quelle guerre a eu lieu entre 1914 et 1918 ?",
    "answers": [
      "La Première Guerre mondiale",
      "La Guerre de Cent Ans",
      "La Révolution française",
      "La Seconde Guerre mondiale"
    ],
    "correct": 0
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
      "La Loire",
      "Le Rhin",
      "Le Danube",
      "Le Rhône uniquement"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quelle ville est française ?",
    "answers": [
      "Lyon",
      "Berlin",
      "Madrid",
      "Rome"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quel océan borde la côte ouest française ?",
    "answers": [
      "L’océan Atlantique",
      "La mer Méditerranée",
      "La Manche",
      "La mer du Nord"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qu'est-ce que Paris ?",
    "answers": [
      "La capitale de la France",
      "Une île française",
      "Un fleuve",
      "Un département d’outre-mer"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quelle est la capitale de la France ?",
    "answers": [
      "Lyon",
      "Marseille",
      "Paris",
      "Bordeaux"
    ],
    "correct": 2
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Sur quel continent se situe la France métropolitaine ?",
    "answers": [
      "Europe",
      "Asie",
      "Afrique",
      "Amérique"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quelle île est un département d'outre-mer français ?",
    "answers": [
      "Réunion",
      "Madagascar",
      "Sicile",
      "Corse"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Combien y a-t-il de régions en France métropolitaine ?",
    "answers": [
      "13",
      "15",
      "12",
      "18"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quelle ville est un grand port maritime ?",
    "answers": [
      "Marseille",
      "Lille",
      "Strasbourg",
      "Toulouse"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quelle est la mer au sud de la France métropolitaine ?",
    "answers": [
      "La mer Méditerranée",
      "La Manche",
      "La mer du Nord",
      "L’océan Atlantique"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quelle ville est située au bord de la mer Méditerranée ?",
    "answers": [
      "Nice",
      "Paris",
      "Strasbourg",
      "Lyon"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Où se situe la Corse ?",
    "answers": [
      "Dans la mer Méditerranée",
      "Dans l’océan Atlantique",
      "En Italie",
      "Au large du Portugal"
    ],
    "correct": 0
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
      "Poète français",
      "Peintre français",
      "Écrivain anglais",
      "Musicien"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qui était George Sand ?",
    "answers": [
      "Écrivaine française",
      "Actrice française",
      "Peintre française",
      "Poétesse anglaise"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qui était Simone de Beauvoir ?",
    "answers": [
      "Philosophe et écrivaine française",
      "Chanteuse",
      "Peintre",
      "Actrice"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qui était Albert Camus ?",
    "answers": [
      "Écrivain et philosophe français",
      "Poète anglais",
      "Peintre français",
      "Musicien"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qui était Paul Cézanne ?",
    "answers": [
      "Peintre français",
      "Écrivain français",
      "Poète",
      "Musicien"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qui était Marc Chagall ?",
    "answers": [
      "Peintre et artiste français",
      "Écrivain français",
      "Musicien",
      "Poète"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qui était Joséphine Baker ?",
    "answers": [
      "Chanteuse et danseuse française",
      "Peintre française",
      "Écrivaine française",
      "Philosophe française"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qui était une chanteuse française célèbre ?",
    "answers": [
      "Édith Piaf",
      "George Sand",
      "Simone de Beauvoir",
      "Albert Camus"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qu'est-ce que le Louvre ?",
    "answers": [
      "Un musée à Paris",
      "Un château en Normandie",
      "Une bibliothèque à Lyon",
      "Un opéra à Marseille"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qui était Jean de La Fontaine ?",
    "answers": [
      "Fabuliste et écrivain français",
      "Poète anglais",
      "Peintre français",
      "Musicien"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quel écrivain est français ?",
    "answers": [
      "Victor Hugo",
      "William Shakespeare",
      "Mark Twain",
      "Ernest Hemingway"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Dans quelle ville se trouve la tour Eiffel ?",
    "answers": [
      "Paris",
      "Lyon",
      "Marseille",
      "Nice"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quand célèbre-t-on Noël ?",
    "answers": [
      "25 décembre",
      "1er janvier",
      "14 juillet",
      "31 octobre"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quelle peine a été supprimée en 1981 ?",
    "answers": [
      "Le bagne",
      "L’exil",
      "La peine de mort",
      "Les travaux forcés"
    ],
    "correct": 2
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "En quelle année l'euro est-elle devenue la monnaie utilisée en France ?",
    "answers": [
      "1995",
      "1999",
      "2002",
      "2010"
    ],
    "correct": 2
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "En quelle année a commencé la Première Guerre mondiale ?",
    "answers": [
      "1918",
      "1914",
      "1920",
      "1939"
    ],
    "correct": 1
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Où a eu lieu le débarquement en 1944 ?",
    "answers": [
      "À Bordeaux",
      "En Normandie",
      "À Calais",
      "À Marseille"
    ],
    "correct": 1
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quel continent a été le plus concerné par la décolonisation française après la Seconde Guerre mondiale ?",
    "answers": [
      "L’Asie",
      "L’Océanie",
      "L’Amérique",
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
      "Le Danemark",
      "L’Espagne",
      "La Grèce"
    ],
    "correct": 2
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quelle ville française est un port maritime ?",
    "answers": [
      "Strasbourg",
      "Marseille",
      "Clermont-Ferrand",
      "Lyon"
    ],
    "correct": 1
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quelle mer se situe entre la France et l'Angleterre ?",
    "answers": [
      "La mer Adriatique",
      "La mer Méditerranée",
      "La mer Baltique",
      "La Manche"
    ],
    "correct": 3
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qu'est-ce que la France d'outre-mer ?",
    "answers": [
      "Les territoires français situés hors d’Europe",
      "Les régions rurales françaises",
      "Les anciennes colonies devenues indépendantes",
      "Les territoires européens voisins"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quelle chaîne de montagnes est située entre la France et l’Espagne ?",
    "answers": [
      "Les Alpes",
      "Les Vosges",
      "Le Jura",
      "Les Pyrénées"
    ],
    "correct": 3
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quelle île française se trouve dans l'océan Indien ?",
    "answers": [
      "La Corse",
      "La Réunion",
      "Oléron",
      "Noirmoutier"
    ],
    "correct": 1
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quelle est la population approximative de la France en 2025 ?",
    "answers": [
      "Environ 40 millions",
      "Environ 50 millions",
      "Environ 68 millions",
      "Environ 80 millions"
    ],
    "correct": 2
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quel fleuve traverse Paris ?",
    "answers": [
      "Le Rhône",
      "La Loire",
      "La Seine",
      "La Garonne"
    ],
    "correct": 2
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Lequel de ces pays partage des frontières terrestres avec la France ?",
    "answers": [
      "Le Royaume-Uni",
      "L’Italie",
      "L’Islande",
      "L’Irlande"
    ],
    "correct": 1
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quel pays a une frontière avec la France métropolitaine au nord-est ?",
    "answers": [
      "L’Andorre",
      "L’Espagne",
      "L’Allemagne",
      "Le Portugal"
    ],
    "correct": 2
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Où se trouvent les principales activités économiques en France ?",
    "answers": [
      "Uniquement en zone rurale",
      "Dans les grandes villes et les régions industrielles",
      "Principalement dans les montagnes",
      "Seulement sur le littoral"
    ],
    "correct": 1
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Parmi ces pays, lequel attire le plus de visiteurs chaque année ?",
    "answers": [
      "L’Espagne",
      "Les États-Unis",
      "La France",
      "L’Italie"
    ],
    "correct": 2
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Où habite la majorité des Français ?",
    "answers": [
      "À l’étranger",
      "À la campagne isolée",
      "En ville",
      "À la montagne"
    ],
    "correct": 2
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quelle région est la plus peuplée ?",
    "answers": [
      "Bretagne",
      "Bourgogne-Franche-Comté",
      "Corse",
      "Île-de-France"
    ],
    "correct": 3
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quelle ville française fait partie des 10 plus grandes métropoles du pays ?",
    "answers": [
      "Bayonne",
      "Poitiers",
      "Toulouse",
      "Annecy"
    ],
    "correct": 2
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Lequel de ces départements de France est le plus touristique ?",
    "answers": [
      "Paris",
      "Cantal",
      "Haute-Marne",
      "Creuse"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quand peut-on visiter gratuitement des lieux culturels en France ?",
    "answers": [
      "Uniquement le 14 juillet",
      "Lors des Journées européennes du patrimoine",
      "Tous les jours",
      "Seulement en été"
    ],
    "correct": 1
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Combien de personnes parlent français dans le monde ?",
    "answers": [
      "Environ 320 millions",
      "Environ 1 milliard",
      "Environ 50 millions",
      "Environ 100 millions"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qui était Marguerite Yourcenar ?",
    "answers": [
      "Une écrivaine française",
      "Une scientifique",
      "Une reine de France",
      "Une peintre"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
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
    "theme": "Histoire géographie et culture",
    "question": "Quel peintre est français ?",
    "answers": [
      "Salvador Dalí",
      "Claude Monet",
      "Frida Kahlo",
      "Edvard Munch"
    ],
    "correct": 1
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quel musée est situé à Paris ?",
    "answers": [
      "Le Prado",
      "Le British Museum",
      "Le Louvre",
      "Le MoMA"
    ],
    "correct": 2
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qui était Auguste Rodin ?",
    "answers": [
      "Un président",
      "Un sculpteur français",
      "Un compositeur",
      "Un explorateur"
    ],
    "correct": 1
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quel est le classement de la langue française parmi les langues les plus parlées dans le monde ?",
    "answers": [
      "1re",
      "Environ 5e",
      "10e",
      "20e"
    ],
    "correct": 1
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
      "George Sand",
      "Louis Pasteur",
      "Napoléon Bonaparte"
    ],
    "correct": 1
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qui était une écrivaine française célèbre ?",
    "answers": [
      "Jane Austen",
      "Simone de Beauvoir",
      "Virginia Woolf",
      "Emily Dickinson"
    ],
    "correct": 1
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qui était une écrivaine française célèbre ?",
    "answers": [
      "Marguerite Duras",
      "Isabel Allende",
      "Toni Morrison",
      "Agatha Christie"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qui était une écrivaine française célèbre ?",
    "answers": [
      "Colette",
      "Mary Shelley",
      "Louisa May Alcott",
      "Astrid Lindgren"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qui était un célèbre musicien français ?",
    "answers": [
      "Léonard de Vinci",
      "Claude Debussy",
      "Wolfgang Amadeus Mozart",
      "William Shakespeare"
    ],
    "correct": 1
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qui était un célèbre musicien français ?",
    "answers": [
      "Antonio Vivaldi",
      "Jean-Jacques Goldman",
      "Johann Sebastian Bach",
      "Elton John"
    ],
    "correct": 1
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qui était un célèbre musicien français ?",
    "answers": [
      "Serge Gainsbourg",
      "Bob Dylan",
      "Freddie Mercury",
      "Bruce Springsteen"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Qui était Auguste Renoir ?",
    "answers": [
      "Un peintre impressionniste",
      "Un roi",
      "Un général",
      "Un écrivain"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quelle fête est française ?",
    "answers": [
      "La Saint-Patrick",
      "Thanksgiving",
      "Le 14 juillet",
      "Halloween"
    ],
    "correct": 2
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quelle fête est française ?",
    "answers": [
      "La Fête de la Musique",
      "Le Carnaval de Rio",
      "Oktoberfest",
      "Mardi Gras américain"
    ],
    "correct": 0
  },
  {
    "theme": "Histoire géographie et culture",
    "question": "Quelle fête est française ?",
    "answers": [
      "La Fête des Lumières à Lyon",
      "Thanksgiving",
      "St. Patrick’s Day",
      "Hanukkah"
    ],
    "correct": 0
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Quel mariage est reconnu par l'État ?",
    "answers": [
      "Le mariage religieux",
      "Le mariage civil célébré en mairie",
      "Le mariage coutumier",
      "Le mariage célébré à l'étranger sans transcription"
    ],
    "correct": 1
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Auprès de quelle institution les parents peuvent-ils inscrire leur enfant à l'école publique ?",
    "answers": [
      "À la mairie",
      "À la préfecture",
      "Au commissariat",
      "À la caisse d’allocations familiales"
    ],
    "correct": 0
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Auprès de quelle institution les parents peuvent-ils inscrire leur enfant à l'école publique ?",
    "answers": [
      "Au centre des impôts",
      "À la mairie de leur lieu de résidence",
      "À la préfecture de région",
      "Au tribunal judiciaire"
    ],
    "correct": 1
  },
  {
    "theme": "Vivre dans la société française",
    "question": "En cas de divorce, qui exerce l'autorité parentale ?",
    "answers": [
      "Le père uniquement",
      "La mère uniquement",
      "Les deux parents sauf décision contraire du juge",
      "Les grands-parents"
    ],
    "correct": 2
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Quelle aide permet aux personnes qui ont des difficultés financières d'avoir un avocat ?",
    "answers": [
      "L'aide juridictionnelle",
      "Le RSA",
      "La sécurité sociale",
      "La prime d’activité"
    ],
    "correct": 0
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Où faut-il déclarer la naissance d'un enfant ?",
    "answers": [
      "À la CAF",
      "À la mairie du lieu de naissance",
      "À la préfecture",
      "Au tribunal"
    ],
    "correct": 1
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
      "Avoir réussi le code de la route",
      "Être âgé de 30 ans minimum",
      "Avoir un emploi stable",
      "Avoir suivi un stage de premiers secours"
    ],
    "correct": 0
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Un bail locatif est valide s'il est :",
    "answers": [
      "Oral uniquement",
      "Signé par le locataire seulement",
      "Écrit et signé par le propriétaire et le locataire",
      "Validé par un voisin"
    ],
    "correct": 2
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Un bail locatif est valide s'il est :",
    "answers": [
      "Rédigé par écrit et signé par les deux parties",
      "Verbal uniquement entre le locataire et le propriétaire",
      "Signé uniquement par le locataire",
      "Approuvé par le syndic de copropriété"
    ],
    "correct": 0
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Où peut-on déposer un lave-vaisselle cassé ?",
    "answers": [
      "Dans la rue",
      "À la déchetterie",
      "Dans un parc public",
      "À la mairie"
    ],
    "correct": 1
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Quel numéro d'urgence permet d'appeler la police ?",
    "answers": [
      "15",
      "18",
      "17",
      "112"
    ],
    "correct": 2
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Concernant l'accès aux soins, quelle proposition est correcte ?",
    "answers": [
      "Il est réservé uniquement aux personnes qui travaillent",
      "Il dépend du revenu",
      "Toute personne peut avoir accès aux soins",
      "Il est interdit aux étrangers"
    ],
    "correct": 2
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Concernant l'accès aux soins, quelle proposition est correcte ?",
    "answers": [
      "Tout le monde peut accéder aux soins en France, selon les règles de l'Assurance maladie",
      "Seules les personnes payant des impôts peuvent accéder aux soins",
      "Les soins sont réservés aux adultes",
      "L'accès aux soins est limité aux résidents depuis plus de 5 ans"
    ],
    "correct": 0
  },
  {
    "theme": "Vivre dans la société française",
    "question": "À qui est accessible la contraception ?",
    "answers": [
      "Uniquement aux femmes mariées",
      "À toute personne qui en fait la demande",
      "Seulement aux hommes",
      "Uniquement avec l’accord des parents"
    ],
    "correct": 1
  },
  {
    "theme": "Vivre dans la société française",
    "question": "À qui est accessible la contraception ?",
    "answers": [
      "Seulement aux femmes mariées",
      "À toute personne qui en fait la demande",
      "Uniquement aux adolescents avec autorisation parentale",
      "Seulement aux couples mariés"
    ],
    "correct": 1
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Qu’est-ce que le principe de confidentialité dans le domaine de la santé ?",
    "answers": [
      "Les informations médicales peuvent être partagées librement",
      "Les informations médicales sont publiques",
      "Les informations médicales sont protégées et ne peuvent être divulguées sans accord",
      "Les médecins doivent informer l’employeur"
    ],
    "correct": 2
  },
  {
    "theme": "Vivre dans la société française",
    "question": "L'inscription à l'Assurance maladie est :",
    "answers": [
      "Obligatoire pour toute personne résidant en France",
      "Réservée aux retraités",
      "Facultative",
      "Interdite aux étudiants"
    ],
    "correct": 0
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Qui peut demander un congé parental d'éducation ?",
    "answers": [
      "Seulement la mère",
      "Seulement le père",
      "Les deux parents",
      "Les grands-parents"
    ],
    "correct": 2
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Quelles sont les affaires traitées par le conseil de prud'hommes ?",
    "answers": [
      "Les conflits entre employeur et salarié",
      "Les divorces",
      "Les affaires pénales",
      "Les litiges entre voisins"
    ],
    "correct": 0
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Travailler sans être déclaré est :",
    "answers": [
      "Autorisé si l’employeur est d’accord",
      "Illégal",
      "Obligatoire pour les étudiants",
      "Conseillé pour éviter les impôts"
    ],
    "correct": 1
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Lorsqu'un employeur veut qu'un salarié travaille plus longtemps que la durée prévue dans le contrat de travail :",
    "answers": [
      "Il peut l’imposer sans condition",
      "Il doit respecter la loi et l’accord du salarié selon les règles en vigueur",
      "Il peut le faire sans rémunération supplémentaire",
      "Il n’a pas besoin d’en informer le salarié"
    ],
    "correct": 1
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Lorsqu'un employeur veut qu'un salarié travaille plus longtemps que la durée prévue dans le contrat de travail :",
    "answers": [
      "Il n’a pas besoin d’en informer le salarié",
      "Il peut le faire sans rémunération supplémentaire",
      "Il doit respecter la loi et l’accord du salarié selon les règles en vigueur",
      "Il peut l’imposer sans condition"
    ],
    "correct": 2
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Quelle est la mission de France Travail ?",
    "answers": [
      "Verser les retraites",
      "Aider à trouver un emploi et accompagner les demandeurs d’emploi",
      "Contrôler les impôts",
      "Gérer les écoles"
    ],
    "correct": 1
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Dans une entreprise, le droit syndical permet :",
    "answers": [
      "D’interdire les discussions",
      "De représenter et défendre les intérêts des salariés",
      "De remplacer la direction",
      "De fixer les salaires sans négociation"
    ],
    "correct": 1
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Dans une entreprise, le droit syndical permet :",
    "answers": [
      "De fixer les salaires sans négociation",
      "D’interdire les discussions",
      "De représenter et défendre les intérêts des salariés",
      "De remplacer la direction"
    ],
    "correct": 2
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Dans une entreprise, le droit de grève autorise :",
    "answers": [
      "À cesser le travail pour défendre des revendications professionnelles",
      "À quitter définitivement son emploi",
      "À ne jamais respecter le contrat de travail",
      "À refuser toute discussion avec l’employeur"
    ],
    "correct": 0
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Dans une entreprise, le droit de grève autorise :",
    "answers": [
      "À quitter définitivement son emploi",
      "À cesser le travail pour défendre des revendications professionnelles",
      "À refuser toute discussion avec l’employeur",
      "À ne jamais respecter le contrat de travail"
    ],
    "correct": 1
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Quelles sont les conditions pour toucher les allocations chômage ?",
    "answers": [
      "N’avoir jamais travaillé",
      "Être inscrit comme demandeur d’emploi et avoir travaillé un minimum de temps",
      "Être étudiant",
      "Avoir plus de 60 ans uniquement"
    ],
    "correct": 1
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Quelles sont les conditions pour toucher les allocations chômage ?",
    "answers": [
      "Avoir plus de 60 ans uniquement",
      "Être inscrit comme demandeur d’emploi et avoir travaillé un minimum de temps",
      "Être étudiant",
      "N’avoir jamais travaillé"
    ],
    "correct": 1
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Qu'est-ce que l'école maternelle ?",
    "answers": [
      "Une école obligatoire pour les adultes",
      "Une école pour apprendre un métier",
      "Une école pour les enfants avant l'école élémentaire",
      "Une école militaire"
    ],
    "correct": 2
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Comment s'appelle le diplôme passé par les élèves à la fin du collège ?",
    "answers": [
      "Le baccalauréat",
      "Le certificat d’études",
      "Le brevet",
      "Le CAP"
    ],
    "correct": 2
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Les parents d'élève ont le droit de :",
    "answers": [
      "Choisir les notes de leur enfant",
      "Participer aux réunions et aux élections des représentants",
      "Modifier les programmes scolaires",
      "Décider seuls des sanctions"
    ],
    "correct": 1
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Qui peut manger à la cantine scolaire ?",
    "answers": [
      "Seulement les enseignants",
      "Tous les habitants du quartier",
      "Les élèves inscrits dans l’établissement",
      "Uniquement les élèves boursiers"
    ],
    "correct": 2
  },
  {
    "theme": "Vivre dans la société française",
    "question": "À quel âge commence l'instruction obligatoire des enfants ?",
    "answers": [
      "3 ans",
      "4 ans",
      "5 ans",
      "6 ans"
    ],
    "correct": 0
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Quel est l'âge de la majorité ?",
    "answers": [
      "16 ans",
      "21 ans",
      "17 ans",
      "18 ans"
    ],
    "correct": 3
  },
  {
    "theme": "Vivre dans la société française",
    "question": "À l'école, il est interdit aux parents de :",
    "answers": [
      "Participer aux réunions",
      "Respecter le règlement intérieur",
      "Porter atteinte au principe de laïcité",
      "Voter aux élections des représentants"
    ],
    "correct": 2
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Quel motif d'absence est accepté par l'école ?",
    "answers": [
      "Partir en vacances hors période scolaire",
      "Une maladie avec justification",
      "Rester à la maison sans raison",
      "Faire du shopping"
    ],
    "correct": 1
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Quel motif d'absence est accepté par l'école ?",
    "answers": [
      "Rendez-vous médical justifié",
      "Vacances familiales non prévues",
      "Sortie au cinéma sans autorisation",
      "Fête d’anniversaire entre amis"
    ],
    "correct": 0
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Des parents ne respectent pas l'obligation d'instruction pour leurs enfants. Quelle sanction maximale risquent-ils ?",
    "answers": [
      "Une simple remarque",
      "Une amende et/ou une peine prévue par la loi",
      "La suppression du droit de vote",
      "Aucune sanction"
    ],
    "correct": 1
  },
  {
    "theme": "Vivre dans la société française",
    "question": "Quand ont lieu les vacances scolaires de Noël ?",
    "answers": [
      "En octobre",
      "En juillet",
      "Fin décembre",
      "En mars"
    ],
    "correct": 2
  },
  {
    "theme": "Vivre dans la société française",
    "question": "À l'école, un enfant en situation de handicap :",
    "answers": [
      "Ne peut pas être scolarisé",
      "Peut être scolarisé avec des aménagements adaptés",
      "Doit obligatoirement rester à domicile",
      "Est exclu des activités scolaires"
    ],
    "correct": 1
  }
];
