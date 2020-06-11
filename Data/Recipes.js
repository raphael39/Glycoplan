import RecipeOverview from './../models/RecipeOverview';
import RecipeDetails from './../models/RecipeDetails';

export const Recipes = [
    new RecipeOverview('R1', 'Auberginenschnitzel & Tomatensoße', 'green'),
    new RecipeOverview('R2', 'Brokkoli-Auflauf', 'green'),
    new RecipeOverview('R3', 'Curry mit grünen Linsen', 'green'),
    new RecipeOverview('R4', 'Gefüllte Zucchini mit Quinoa', 'green'),
    new RecipeOverview('R5', 'Italienische Kürbissuppe', 'green'),
    new RecipeOverview('R6', 'Karotten-Kokos-Suppe', 'green'),
  ];
  
  export const RecipesDetailsArr = [
    new RecipeDetails(
      'R1',
      'Auberginenschnitzel & Tomatensoße',
      'green',
      [
        {
          title: 'Auberginen',
          color: 'green',
          id: 'A4',
          quantity: '2 St.',
          ratio: '360 g',
          nutrients: {
            description:
              'Die Aubergine oder Eierpflanze ist eine subtropische Pflanzenart aus Asien, die zur Gattung Nachtschatten innerhalb der Familie der Nachtschattengewächse gehört. Die Frucht wird auch Aubergine genannt oder als Eierfrucht beziehungsweise als Melanzani bezeichnet.',
            descriptionLink: 'https://de.wikipedia.org/wiki/Aubergine',
            Kalorien: 25,
            Fettgehalt: '0,2 g',
            Kohlenhydrate: '6 g',
            Protein: '1 g',
            Quelle:
              'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169228/nutrients',
          },
        },
        {
          title: 'Sahne',
          color: 'yellow',
          id: 'B73',
          quantity: '1 EL',
          ratio: '13 g',
          nutrients: {
            description:
              'Als Rahm oder Sahne wird die fetthaltige Phase der Milch bezeichnet, die beim Stehenlassen ungesäuerter Rohmilch natürlich an der Oberfläche aufschwimmt oder aus Rohmilch abzentrifugiert werden kann. Die Bezeichnungen für Sahne sind regional unterschiedlich und werden zum Teil auch nicht einheitlich verwendet.',
            descriptionLink: 'https://de.wikipedia.org/wiki/Rahm',
            Kalorien: 195,
            Fettgehalt: '19,1 g',
            Kohlenhydrate: '3,66 g',
            Protein: '2,96 g',
            Quelle:
              'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170857/nutrients',
          },
        },
        {
          title: 'Kichererbsenmehl',
          color: 'yellow',
          id: 'B46',
          quantity: '30 g',
          nutrients: {
            description:
              'Die Kichererbse, auch Echte Kicher, Römische Kicher, Venuskicher oder Felderbse genannt, ist eine Pflanzenart aus der Gattung der Kichererbsen in der Unterfamilie der Schmetterlingsblütler innerhalb der Familie der Hülsenfrüchtler. Mit der Erbse ist sie nicht näher verwandt. Sie ist eine alte Nutzpflanze.',
            descriptionLink: 'https://de.wikipedia.org/wiki/Kichererbse',
            Kalorien: 378,
            Fettgehalt: '6,04 g',
            Kohlenhydrate: '62,95 g',
            Protein: '20,47 g',
            Quelle:
              'https://fdc.nal.usda.gov/fdc-app.html#/food-details/173756/nutrients',
          },
        },
        {
          title: 'alter Pecorino',
          color: 'green',
          id: 'A312',
          quantity: '100 g gerieben',
          nutrients: {
            description:
              'z.B. Greyerzer, französisch Le Gruyère, im Deutschschweizer Sprachgebrauch einfach Gruyère ist ein halbharter bis harter Schweizer Hartkäse mit geschützter Ursprungsbezeichnung aus der Rohmilch von Kühen. Im Jahr 2016 wurden 29136 Tonnen Gruyère verkauft, davon rund 14900 Tonnen in der Schweiz. ',
            descriptionLink: 'https://de.wikipedia.org/wiki/Greyerzer',
            Kalorien: 413,
            Fettgehalt: '32 g',
            Kohlenhydrate: '0,4 g',
            Protein: '30 g',
            Quelle:
              'https://fdc.nal.usda.gov/fdc-app.html#/food-details/171242/nutrients',
          },
        },
        {
          title: 'firsche italienische Kräuter',
          color: 'green',
          id: 'A300',
          quantity: '1 El',
          Gewürz: true,
          nutrients: {
            description:
              'z.B. Greyerzer, französisch Le Gruyère, im Deutschschweizer Sprachgebrauch einfach Gruyère ist ein halbharter bis harter Schweizer Hartkäse mit geschützter Ursprungsbezeichnung aus der Rohmilch von Kühen. Im Jahr 2016 wurden 29136 Tonnen Gruyère verkauft, davon rund 14900 Tonnen in der Schweiz. ',
            descriptionLink: 'https://de.wikipedia.org/wiki/Greyerzer',
            Kalorien: 0,
            Fettgehalt: '0 g',
            Kohlenhydrate: '0 g',
            Protein: '0 g',
            Quelle:
              'https://fdc.nal.usda.gov/fdc-app.html#/food-details/171242/nutrients',
          },
        },
        {
          title: 'Meersalz',
          color: 'green',
          id: 'A399',
          quantity: '1 Prise',
          Gewürz: true,
          nutrients: {
            description:
              'z.B. Greyerzer, französisch Le Gruyère, im Deutschschweizer Sprachgebrauch einfach Gruyère ist ein halbharter bis harter Schweizer Hartkäse mit geschützter Ursprungsbezeichnung aus der Rohmilch von Kühen. Im Jahr 2016 wurden 29136 Tonnen Gruyère verkauft, davon rund 14900 Tonnen in der Schweiz. ',
            descriptionLink: 'https://de.wikipedia.org/wiki/Greyerzer',
            Kalorien: 0,
            Fettgehalt: '0 g',
            Kohlenhydrate: '0 g',
            Protein: '0 g',
            Quelle:
              'https://fdc.nal.usda.gov/fdc-app.html#/food-details/171242/nutrients',
          },
        },
        {
          title: 'frisch gemahlenen Pfeffer',
          color: 'green',
          id: 'A398',
          quantity: ' Gewürz',
          Gewürz: true,
          nutrients: {
            description:
              'z.B. Greyerzer, französisch Le Gruyère, im Deutschschweizer Sprachgebrauch einfach Gruyère ist ein halbharter bis harter Schweizer Hartkäse mit geschützter Ursprungsbezeichnung aus der Rohmilch von Kühen. Im Jahr 2016 wurden 29136 Tonnen Gruyère verkauft, davon rund 14900 Tonnen in der Schweiz. ',
            descriptionLink: 'https://de.wikipedia.org/wiki/Greyerzer',
            Kalorien: 0,
            Fettgehalt: '0 g',
            Kohlenhydrate: '0 g',
            Protein: '0 g',
            Quelle:
              'https://fdc.nal.usda.gov/fdc-app.html#/food-details/171242/nutrients',
          },
        },
        {
          title: 'Bio-Eier',
          color: 'green',
          id: 'A11',
          ratio: '60 g',
          quantity: '2 St.',
          nutrients: {
            description:
              'Das Hühnerei ist das Vogelei der Haushenne und dient biologisch der Erzeugung ihrer Nachkommenschaft. Als landwirtschaftliches Produkt wird es vom Menschen als Nahrungsmittel verwendet.',
            descriptionLink: 'https://de.wikipedia.org/wiki/H%C3%BChnerei',
            Kalorien: 155,
            Fettgehalt: '10,61 g',
            Kohlenhydrate: '1,12 g',
            Protein: '12,58 g',
            Quelle:
              'https://fdc.nal.usda.gov/fdc-app.html#/food-details/173424/nutrients',
          },
        },
        {
          title: 'Olivenöl',
          color: 'green',
          id: 'A804',
          ratio: '13 g',
          quantity: '0.5 EL',
          nutrients: {
            description:
              'Der Olivenbaum, auch Echter Ölbaum genannt, ist ein mittelgroßer, im Alter oft knorriger Baum aus der Gattung der Ölbäume, die zur Familie der Ölbaumgewächse gehört. Er wird seit dem 4. Jahrtausend v. Chr. als Nutzpflanze kultiviert.',
            descriptionLink: 'https://de.wikipedia.org/wiki/Olivenbaum',
            Kalorien: 884,
            Fettgehalt: '100 g',
            Kohlenhydrate: '0 g',
            Protein: '0 g',
            Quelle:
              'https://fdc.nal.usda.gov/fdc-app.html#/food-details/789038/nutrients',
          },
        },
        {
          title: 'Tomaten',
          color: 'green',
          id: 'A132',
          quantity: '500 g',
          nutrients: {
            description:
              'Die Tomate, in Teilen von Österreich sowie in Südtirol auch Paradeiser genannt, ist eine Pflanzenart aus der Familie der Nachtschattengewächse.',
            descriptionLink: 'https://de.wikipedia.org/wiki/Tomate',
            Kalorien: 18,
            Fettgehalt: '0,2 g',
            Kohlenhydrate: '3,89 g',
            Protein: '0,88 g',
            Quelle:
              'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170457/nutrients',
          },
        },
        {
          title: 'Zwiebeln',
          color: 'green',
          id: 'A149',
          quantity: '1 St.',
          ratio: '83 g',
          nutrients: {
            description:
              'Die Zwiebel, auch Zwiebellauch, Bolle, Zipolle, Speisezwiebel, Küchenzwiebel, Gartenzwiebel, Sommerzwiebel, Hauszwiebel oder Gemeine Zwiebel genannt, ist eine Pflanzenart aus der Gattung Lauch.',
            descriptionLink: 'https://de.wikipedia.org/wiki/Zwiebel',
            Kalorien: 40,
            Fettgehalt: '0,1 g',
            Kohlenhydrate: '9,34 g',
            Protein: '1,1 g',
            Quelle:
              'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170000/nutrients',
          },
        },
        {
          title: 'Knoblauchzehe, fein zerrieben',
          color: 'green',
          id: 'A51',
          quantity: '1 St.',

          nutrients: {
            description:
              'Knoblauch ist eine Pflanzenart aus der Gattung Lauch. Ursprünglich von Zentralasien bis zum nordöstlichen Iran beheimatet, ist sie als Kulturform heute weltweit verbreitet. Sie wird als Gewürz- und Heilpflanze genutzt.',
            descriptionLink: 'https://de.wikipedia.org/wiki/Knoblauch',
            Kalorien: 149,
            Fettgehalt: '0,5 g',
            Kohlenhydrate: '33,06 g',
            Protein: '6,36 g',
            Quelle:
              'https://fdc.nal.usda.gov/fdc-app.html#/food-details/787793/nutrients',
          },
        },
        {
          title: 'Olivenöl',
          color: 'green',
          id: 'A854',
          ratio: '13 g',
          quantity: '0.5 EL',
          nutrients: {
            description:
              'Der Olivenbaum, auch Echter Ölbaum genannt, ist ein mittelgroßer, im Alter oft knorriger Baum aus der Gattung der Ölbäume, die zur Familie der Ölbaumgewächse gehört. Er wird seit dem 4. Jahrtausend v. Chr. als Nutzpflanze kultiviert.',
            descriptionLink: 'https://de.wikipedia.org/wiki/Olivenbaum',
            Kalorien: 884,
            Fettgehalt: '100 g',
            Kohlenhydrate: '0 g',
            Protein: '0 g',
            Quelle:
              'https://fdc.nal.usda.gov/fdc-app.html#/food-details/789038/nutrients',
          },
        },
        {
          title: 'Balsamico-Essig',
          color: 'yellow',
          id: 'B7',
          ratio: '13 g',
          quantity: '1 EL',
          nutrients: {
            description:
              'Aceto balsamico oder Balsamessig ist ein Essig aus der italienischen Provinz Modena oder der Provinz Reggio Emilia. Er zeichnet sich durch eine dunkelbraune Farbe und einen süßsauren Geschmack aus. Der Name verweist auf den wohlriechenden Charakter dieses Essigs.',
            descriptionLink: 'https://de.wikipedia.org/wiki/Aceto_balsamico',
            Kalorien: 88,
            Fettgehalt: '0 g',
            Kohlenhydrate: '17,03 g',
            Protein: '0,49 g',
            Quelle:
              'https://fdc.nal.usda.gov/fdc-app.html#/food-details/172241/nutrients',
          },
        },
        {
          title: 'Chilli',
          color: 'green',
          id: 'B777',
          quantity: ' Gewürz',
          Gewürz: true,
          nutrients: {
            description:
              'Aceto balsamico oder Balsamessig ist ein Essig aus der italienischen Provinz Modena oder der Provinz Reggio Emilia. Er zeichnet sich durch eine dunkelbraune Farbe und einen süßsauren Geschmack aus. Der Name verweist auf den wohlriechenden Charakter dieses Essigs.',
            descriptionLink: 'https://de.wikipedia.org/wiki/Aceto_balsamico',
            Kalorien: 0,
            Fettgehalt: '0 g',
            Kohlenhydrate: '0 g',
            Protein: '0 g',
            Quelle:
              'https://fdc.nal.usda.gov/fdc-app.html#/food-details/172241/nutrients',
          },
        },
        {
          title: 'Salz, frisch gemahlener Pfeffer',
          color: 'green',
          id: 'B722',
          quantity: ' Gewürz',
          Gewürz: true,
          nutrients: {
            description:
              'Aceto balsamico oder Balsamessig ist ein Essig aus der italienischen Provinz Modena oder der Provinz Reggio Emilia. Er zeichnet sich durch eine dunkelbraune Farbe und einen süßsauren Geschmack aus. Der Name verweist auf den wohlriechenden Charakter dieses Essigs.',
            descriptionLink: 'https://de.wikipedia.org/wiki/Aceto_balsamico',
            Kalorien: 0,
            Fettgehalt: '0 g',
            Kohlenhydrate: '0 g',
            Protein: '0 g',
            Quelle:
              'https://fdc.nal.usda.gov/fdc-app.html#/food-details/172241/nutrients',
          },
        },
        /* '1 EL Sahne',
        'Kichererbsenmehl',
        '100g alter Pecorino',
        '1 EL firische italienische Kräuter',
        'Meersalz',
        'frisch gemahlener Pfeffer',
        '2 Eier',
        'Olivenöl',
        '500g Tomaten, enthäuten, würfeln',
        '1 Knoblauchzehe',
        '1 EL Balsamicoessig',
        'Chili',
        'Salz', */
      ],
      [
        '1. Die Auberginenscheiben in kochendem Salzwasser mit Sahne ca. 1 Minute kochen, gut abtropfen und trocken tupfen mit Küchenpapier',
        '2. In Kichererbsenmehl wenden, dann in verschlagenem Ei und zuletzt in Käseraspeln wenden, in heißem Olivenöl von beiden Seiten knusprig braten',
        '3. Für das Tomatenragout die fein gewürfelte Zwiebeln und die Knoblauchzehe glasig dünsten, frische Tomaten und Balsamico zugeben, abschmecken und mit Basilikum würzen',
      ],
      4
    ),
    new RecipeDetails(
      'R2',
      'Brokkoli-Auflauf',
      'green',
      [
        {
          title: 'Brokkoli',
          color: 'green',
          id: 'A370',
          quantity: '500 g',
          nutrients: {
            description:
              'Brokkoli oder Broccoli, auch Bröckel-, Spargel-, Winterblumen- oder Sprossenkohl genannt, ist eine mit dem Blumenkohl eng verwandte Gemüsepflanze aus der Familie der Kreuzblütengewächse.',
            descriptionLink: 'https://de.wikipedia.org/wiki/Brokkoli',
            Kalorien: 34,
            Fettgehalt: '0,37 g',
            Kohlenhydrate: '6,64 g',
            Protein: '2,82 g',
            Quelle:
              'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170379/nutrients',
          },
        },
      ],
      [
        '1. Brokkoli putzen und in Röschen teilen, Stiele schälen und in Stücke schneiden. In kochendem Salzwasser 4-6 Minuten blanchieren. In ein Sieb geben, abtropfen lassen.',
        '2. Backofen auf 200-220°C vorheizen. Die Zwiebel fein würfeln und mit den geschnittenen Champignons und dem Knoblauch in etwas Olivenöl andünsten',
        '3. Eine Auflaufform leicht einfetten, den Brokkoli hinein geben und leicht mit Pfeffer und Muskatnuss würzen',
      ],
      4
    ),
    new RecipeDetails(
      'R3',
      'Curry mit grünen Linsen',
      'green',
      [{
        title: 'grüne Linsen',
        color: 'green',
        id: 'A370',
        quantity: '500 g',
        nutrients: {
          description:
            'Die Linse oder Erve, auch Küchen-Linse genannt, ist eine Pflanzenart aus der Gattung Linsen aus der Unterfamilie Schmetterlingsblütler innerhalb der Familie der Hülsenfrüchtler. Sie stammt wahrscheinlich von der wilden Lens orientalis ab.',
          descriptionLink: 'https://de.wikipedia.org/wiki/Linse_(Botanik)',
          Kalorien: 116,
          Fettgehalt: '0,4 g',
          Kohlenhydrate: '20 g',
          Protein: '9 g',
          Quelle:
            'https://fdc.nal.usda.gov/fdc-app.html#/food-details/172421/nutrients',
        },
      },],
      ['1. Next update..'],
      4
    ),
    new RecipeDetails(
      'R4',
      'Gefüllte Zucchini mit Quinoa',
      'green',
      [{
        title: 'Quinoa',
        color: 'yellow',
        id: 'B66',
        quantity: '200 g',
        nutrients: {
          description:
            'Quinoa, auch Reismelde, ist eine Pflanzenart aus der Gattung der Gänsefüße in der Familie der Fuchsschwanzgewächse. In den Anden ist sie seit etwa 5000 Jahren als Kulturpflanze bekannt. Die Pflanzen sind anspruchslos und gedeihen bis in Höhen von 4200 m.',
          descriptionLink: 'https://de.wikipedia.org/wiki/Quinoa',
          Kalorien: 368,
          Fettgehalt: '6,07 g',
          Kohlenhydrate: '64,16 g',
          Protein: '14,12 g',
          Quelle:
            'https://fdc.nal.usda.gov/fdc-app.html#/food-details/168874/nutrients',
        },
      },],
      ['1. 1. Next update..'],
      4
    ),
    new RecipeDetails(
      'R5',
      'Italienische Kürbissuppe',
      'green',
      [{
        title: 'Zwiebeln',
        color: 'green',
        id: 'A149',
        quantity: '1 St.',
        ratio: '83 g',
        nutrients: {
          description:
            'Die Zwiebel, auch Zwiebellauch, Bolle, Zipolle, Speisezwiebel, Küchenzwiebel, Gartenzwiebel, Sommerzwiebel, Hauszwiebel oder Gemeine Zwiebel genannt, ist eine Pflanzenart aus der Gattung Lauch.',
          descriptionLink: 'https://de.wikipedia.org/wiki/Zwiebel',
          Kalorien: 40,
          Fettgehalt: '0,1 g',
          Kohlenhydrate: '9,34 g',
          Protein: '1,1 g',
          Quelle:
            'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170000/nutrients',
        },
      },],
      ['1. Next update..'],
      4
    ),
    new RecipeDetails(
      'R6',
      'Karotten-Kokos-Suppe',
      'green',
      [{
        title: 'Karotten',
        color: 'yellow',
        id: 'A149',
        quantity: '600 g',
        nutrients: {
          description:
            'Die Karotte, auch bezeichnet als Möhre, Mohrrübe, Gelbrübe, Gelbe Rübe, Rüebli, Riebli oder Wurzel ist eine nur in Kultur bekannte Form der Möhre innerhalb der Familie der Doldenblütler. Von dieser Gemüsepflanze wird fast ausschließlich die Pfahlwurzel genutzt.',
          descriptionLink: 'https://de.wikipedia.org/wiki/Karotte',
          Kalorien: 41,
          Fettgehalt: '0,24 g',
          Kohlenhydrate: '9,58 g',
          Protein: '0,93 g',
          Quelle:
            'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170393/nutrients',
        },
      },],
      ['1. Next update..'],
      4
    ),
  ];