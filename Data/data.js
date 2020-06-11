import shoppingLIst from './../models/shoppinList';
import RecipeOverview from './../models/RecipeOverview';
import RecipeDetails from './../models/RecipeDetails';

export const SHOPPINGITEMS = [];

export const GlycoListeData = [
  {
    title: 'Agar Agar',
    color: 'green',
    id: 'A1',
    nutrients: {
      description:
        'Agar, auch Agar-Agar, Agartang, Japanischer Fischleim, Kanten, oder auch Chinesische oder Japanische Gelatine genannt, ist ein Galactose-Polymer, das Gallerte bilden kann. Die Grundeinheiten des Agars sind Agarose und sulfatiertes Agaropektin. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Agar',
      Kalorien: 26,
      Kohlenhydrate: '7 g',
      Protein: '0,5 g',
      Fettgehalt: '0 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169280/nutrients',
    },
  },
  {
    title: 'Algen',
    color: 'green',
    id: 'A2',
    nutrients: {
      description:
        'Algen, besonders Seetang, werden vor allem in Ostasien, Polynesien und in Küstenregionen Europas und Amerikas als Lebensmittel verzehrt. Je nach Art sind sie nahezu geschmacklos oder haben einen würzig-salzigen Geschmack. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Algen_(Lebensmittel)',
      Kalorien: 306,
      Fettgehalt: '0,3 g',
      Kohlenhydrate: '81 g',
      Protein: '6 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170090/nutrients',
    },
  },
  {
    title: 'Alpkäse',
    color: 'green',
    id: 'A3',
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
    title: 'Auberginen',
    color: 'green',
    id: 'A4',
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
    title: 'Austernpilz',
    color: 'green',
    id: 'A5',
    nutrients: {
      description:
        'Aus dem Englischen übersetzt-Pleurotus ostreatus, der Perlenausternpilz oder Baumausternpilz, ist ein gewöhnlicher Speisepilz. Es wurde erstmals im Ersten Weltkrieg in Deutschland als Subsistenzmaßnahme angebaut und wird heute weltweit kommerziell für Lebensmittel angebaut. Es ist verwandt mit dem ähnlich kultivierten Austernpilz.',
      descriptionLink: 'https://en.wikipedia.org/wiki/Pleurotus_ostreatus',
      Kalorien: 35,
      Fettgehalt: '0,2 g',
      Kohlenhydrate: '2,6 g',
      Protein: '3,5 g',
      Quelle: 'https://eatsmarter.de/lexikon/warenkunde/pilze/austernpilze',
    },
  },
  {
    title: 'Avocado',
    color: 'green',
    id: 'A6',
    nutrients: {
      description:
        'Die Avocado ist eine Pflanzenart aus der Familie der Lorbeergewächse. Die Frucht ist aus botanischer Sicht eine Beere und hat historisch viele andere, heute seltene Bezeichnungen wie etwa Avocadobirne, Alligatorbirne oder Butterfrucht erhalten.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Avocado',
      Kalorien: 160,
      Fettgehalt: '15 g',
      Kohlenhydrate: '9 g',
      Protein: '2 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/171705/nutrients',
    },
  },
  {
    title: 'Avocado-Öl',
    color: 'green',
    id: 'A7',
    nutrients: {
      description:
        'Avocadoöl ist ein Pflanzenöl, das aus den Früchten des Avocadobaums gewonnen wird. Es ist wie das Olivenöl ein Fruchtfleischöl, das Mesokarp enthält bis zu 30 % Fett, wobei der Fettgehalt der verschiedenen Kultivare stark schwankt.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Avocado%C3%B6l',
      Kalorien: 884,
      Fettgehalt: '100 g',
      Kohlenhydrate: '0 g',
      Protein: '0 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/173573/nutrients',
    },
  },
  {
    title: 'Bachforelle',
    color: 'green',
    id: 'A8',
    nutrients: {
      description:
        'Die Bachforelle ist ein zu den Salmoniden zählender Raubfisch und eine Unterart der Forelle. Sie ist der Leitfisch der Forellenregion und wird auch Flussforelle, Bergforelle oder Fario genannt. Kleinwüchsige Bachforellen in nahrungsarmen Gewässern werden als Steinforellen bezeichnet.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Bachforelle',
      Kalorien: 119,
      Fettgehalt: '3,46 g',
      Kohlenhydrate: '0 g',
      Protein: '20,48 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/175154/nutrients',
    },
  },
  {
    title: 'Bambussprossen',
    color: 'green',
    id: 'A9',
    nutrients: {
      description:
        'Aus dem Englischen übersetzt-Bambussprossen oder Bambussprossen sind die essbaren Triebe vieler Bambusarten, einschließlich Bambusa vulgaris und Phyllostachys edulis. Sie werden als Gemüse in zahlreichen asiatischen Gerichten und Brühen verwendet.',
      descriptionLink: 'https://en.wikipedia.org/wiki/Bamboo_shoot',
      Kalorien: 27,
      Fettgehalt: '0,3 g',
      Kohlenhydrate: '5 g',
      Protein: '2,6 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169210/nutrients',
    },
  },
  {
    title: 'Bataviasalat',
    color: 'green',
    id: 'A10',
    nutrients: {
      description:
        'Als Eisbergsalat, auch Eissalat, werden mehrere Sorten des Gartensalats (Lactuca sativa var. capitata nidus tenerimma) mit fest geschlossenen Köpfen bezeichnet (Kopfsalat). Sie gehören zusammen mit dem Bataviasalat, einer älteren Form mit nach oben geöffneten Köpfen, zur Crisphead-Gruppe.[1] Die Sprossachse ist stark gestaucht, die Blätter überlappen sich und bilden einen dichten, rundlichen „Kopf“. Verzehrt werden beim Eisbergsalat die inneren Blätter.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Eisbergsalat#Geschichtef',
      Kalorien: 14,
      Fettgehalt: '0,14 g',
      Kohlenhydrate: '2,97 g',
      Protein: '0,9 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169248/nutrients',
    },
  },
  {
    title: 'Bio-Eier',
    color: 'green',
    id: 'A11',
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
    title: 'Blumenkohl',
    color: 'green',
    id: 'A12',
    nutrients: {
      description:
        'Blumenkohl, auch Karfiol, Käsekohl, Blütenkohl, Traubenkohl, Minarett-Kohl oder Italienischer Kohl genannt, ist eine Zuchtsorte des Gemüsekohls mit fleischigen, in einem Kopf zusammenstehenden Blütensprossen, die als Gemüse gegessen werden.',
      descriptionLink: 'https://de.wikipedia.org/wiki/H%C3%BChnerei',
      Kalorien: 25,
      Fettgehalt: '0,3 g',
      Kohlenhydrate: '5 g',
      Protein: '1,9 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169986/nutrients',
    },
  },
  {
    title: 'Braunhirse (wild)',
    color: 'green',
    id: 'A13',
    nutrients: {
      description:
        'Braunhirse ist die rotorange Form der Rispenhirse aus der Gattung Rispenhirsen innerhalb der Familie der Süßgräser. Andere Trivialnamen für das Spelzgetreide Braunhirse sind Rothirse oder im Englischen Red Millet, Common Millet, Proso Millet.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Braunhirse',
      Kalorien: 315,
      Fettgehalt: '2,6 g',
      Kohlenhydrate: '64,2 g',
      Protein: '8,6 g',
      Quelle:
        'https://www.yazio.com/de/kalorientabelle/braunhirse-fein-gemahlen-himmelbauer.html',
    },
  },
  {
    title: 'Brokkoli',
    color: 'green',
    id: 'A14',
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
  {
    title: 'Brombeeren',
    color: 'green',
    id: 'A15',
    nutrients: {
      description:
        'Die Brombeeren sind eine Sektion aus der umfangreichen und weltweit verbreiteten Pflanzengattung Rubus innerhalb der Familie der Rosengewächse. Die Sektion umfasst mehrere tausend Arten, allein in Europa wurden mehr als 2000 Arten beschrieben. Die Früchte werden als Obst verwendet.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Brombeeren',
      Kalorien: 43,
      Fettgehalt: '0,5 g',
      Kohlenhydrate: '10 g',
      Protein: '1,4 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/173946/nutrients',
    },
  },
  {
    title: 'Brunnenkresse',
    color: 'green',
    id: 'A16',
    nutrients: {
      description:
        'Die Echte Brunnenkresse oder Brunnenkresse, auch Wasserkresse genannt, ist eine als Gemüse verwendete Pflanzenart aus der Gattung der Brunnenkressen der Kreuzblütengewächse. Ihr Name ist in Bezug auf ihren Standort abgeleitet von mittelhochdeutsch brunne.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Echte_Brunnenkresse',
      Kalorien: 11,
      Fettgehalt: '0,1 g',
      Kohlenhydrate: '1,3 g',
      Protein: '2,3 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170068/nutrients',
    },
  },
  {
    title: 'Buchweizenmehl',
    color: 'green',
    id: 'A17',
    nutrients: {
      description:
        'Der Echte Buchweizen, auch Gemeiner Buchweizen, ist eine Pflanzenart aus der Gattung Buchweizen in der Familie der Knöterichgewächse. Manchmal wird er auch in die Gattung Polygonum eingeordnet. Buchweizen ist ein Pseudogetreide.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Echter_Buchweizen',
      Kalorien: 335,
      Fettgehalt: '3,1 g',
      Kohlenhydrate: '70,59 g',
      Protein: '12,62 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170687/nutrients',
    },
  },
  {
    title: 'Champignos',
    color: 'green',
    id: 'A18',
    nutrients: {
      description:
        'Die Champignons, zu deutsch auch Egerlinge oder Angerlinge, sind eine Pilzgattung aus der Familie der Champignonverwandten. Die Typusart ist der Wiesen-Champignon.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Champignons',
      Kalorien: 22,
      Fettgehalt: '0,3 g',
      Kohlenhydrate: '3,3 g',
      Protein: '3,1 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169251/nutrients',
    },
  },
  {
    title: 'Chicoree',
    color: 'green',
    id: 'A19',
    nutrients: {
      description:
        'Chicorée gehören zur Varietät Cichorium intybus var. foliosum der Art Gemeine Wegwarte. Sie gehören zur Familie der Korbblütler. Chicorée bildet eine Rübe und eine dem Boden aufliegende Blattrosette.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Chicor%C3%A9e',
      Kalorien: 23,
      Fettgehalt: '0,3 g',
      Kohlenhydrate: '4,7 g',
      Protein: '1,7 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169992/nutrients',
    },
  },
  {
    title: 'Chinakohl',
    color: 'green',
    id: 'A20',
    nutrients: {
      description:
        'Chinakohl, auch Pekingkohl, Japankohl, Selleriekohl genannt, ist eine Gemüsepflanze. Chinakohl bildet einen festen, ovalen bis schmal zylindrischen Kopf mit einem Gewicht von ca. 1–3 kg. Seine Blätter sind meist gelbgrün und haben breite, weiße, leicht gekrauste Blattrippen. Von Chinakohl gibt es viele Cultivare.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Chinakohl',
      Kalorien: 12,
      Fettgehalt: '0,2 g',
      Kohlenhydrate: '2,2 g',
      Protein: '1,1 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/168572/nutrients',
    },
  },
  {
    title: 'Couscous (Buchweizen)',
    color: 'green',
    id: 'A21',
    nutrients: {
      description:
        'Couscous, Cous Cous oder Kuskus ist ein Gericht der nordafrikanischen Küche. Die Grundlage besteht aus befeuchtetem und zu Kügelchen zerriebenem Grieß aus Hartweizen, Gerste oder Hirse. Der Grieß wird zum Garen nicht gekocht, sondern über kochendem Wasser oder einem kochenden Gericht gedämpft.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Couscous',
      Kalorien: 335,
      Fettgehalt: '3,1 g',
      Kohlenhydrate: '70,59 g',
      Protein: '12,62 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170687/nutrients',
    },
  },
  {
    title: 'Couscous (Hirse)',
    color: 'green',
    id: 'A22',
    nutrients: {
      description:
        'Couscous, Cous Cous oder Kuskus ist ein Gericht der nordafrikanischen Küche. Die Grundlage besteht aus befeuchtetem und zu Kügelchen zerriebenem Grieß aus Hartweizen, Gerste oder Hirse. Der Grieß wird zum Garen nicht gekocht, sondern über kochendem Wasser oder einem kochenden Gericht gedämpft.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Couscous',
      Kalorien: 378,
      Fettgehalt: '4,22 g',
      Kohlenhydrate: '72,85 g',
      Protein: '11,02 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169702/nutrients',
    },
  },
  {
    title: 'Dinkelgras',
    color: 'green',
    id: 'A23',
    nutrients: {
      description:
        'Dinkelgras zählt zu den dunkelgrünen Blattgemüsen und zeichnet sich durch eine ausgewogene Kombination an wertvollen Inhaltsstoffen aus.',
      descriptionLink: 'https://de.wikipedia.org',
      Kalorien: 283,
      Fettgehalt: '4,7 g',
      Kohlenhydrate: '26 g',
      Protein: '18 g',
      Quelle:
        'https://www.sanos-online.de/de/shop/dinkelgras/bio-dinkelgras-pulver,-dose,-100-g-detail',
    },
  },
  {
    title: 'Eichblattsalat',
    color: 'green',
    id: 'A24',
    nutrients: {
      description:
        'Schnittsalat, Pflücksalat oder Blattsalat ist eine Sorte des Gartensalats, ein Blattgemüse, das in frischem Zustand unerhitzt gegessen wird.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Schnittsalat',
      Kalorien: 15,
      Fettgehalt: '0,15 g',
      Kohlenhydrate: '2,87 g',
      Protein: '1,36 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169249/nutrients',
    },
  },
  {
    title: 'Eisbergsalat',
    color: 'green',
    id: 'A25',
    nutrients: {
      description:
        'Als Eisbergsalat, auch Eissalat, werden mehrere Sorten des Gartensalats mit fest geschlossenen Köpfen bezeichnet. Sie gehören zusammen mit dem Bataviasalat, einer älteren Form mit nach oben geöffneten Köpfen, zur Crisphead-Gruppe.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Eisbergsalat',
      Kalorien: 14,
      Fettgehalt: '0,1 g',
      Kohlenhydrate: '3 g',
      Protein: '0,9 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169248/nutrients',
    },
  },
  {
    title: 'Endivien',
    color: 'green',
    id: 'A26',
    nutrients: {
      description:
        'BeschreibungDie Endivie gehört zur Gattung der Wegwarten und ist ein typischer Spätsommersalat. Sie wächst in humusreichen Böden in sonniger Lage und hat einen mittleren Nährstoffbedarf. Die Endivie wurde durch den Verein zur Erhaltung der Nutzpflanzenvielfalt e.V. zum „Gemüse des Jahres“ 2005 in Deutschland gewählt.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Endivie',
      Kalorien: 17,
      Fettgehalt: '0,2 g',
      Kohlenhydrate: '3,35 g',
      Protein: '1,25 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/168412/nutrients',
    },
  },
  {
    title: 'Erdmandelflocken',
    color: 'green',
    id: 'A27',
    nutrients: {
      description:
        'Die Erdmandel, auch als Tigernuss bekannt, ist eine Pflanzenart der Gattung Zypergräser in der Familie der Sauergrasgewächse. Sie ist in den Tropen und Subtropen bis nach Nordamerika beheimatet. Als historischer deutschsprachiger Trivialname ist auch die Bezeichnung Erdnuss belegt.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Erdmandel',
      Kalorien: 400,
      Fettgehalt: '23,33 g',
      Kohlenhydrate: '63,33 g',
      Protein: '6,67 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/501475/nutrients',
    },
  },
  {
    title: 'Feldsalat',
    color: 'green',
    id: 'A28',
    nutrients: {
      description:
        'Der Gewöhnliche Feldsalat, österreichisch Vogerlsalat, schweizerisch Nüsslisalat, auch Ackersalat, Mausohrsalat, Nüsschen, Nüssler, Schafmäulchen, Sonnewirbele und Rapunzel genannt, ist eine Pflanzenart der Gattung Feldsalat und gehört zur Unterfamilie der Baldriangewächse.',
      descriptionLink:
        'https://de.wikipedia.org/wiki/Gew%C3%B6hnlicher_Feldsalat',
      Kalorien: 11,
      Fettgehalt: '0,2 g',
      Kohlenhydrate: '2 g',
      Protein: '1,1 g',
      Quelle: 'http://www.fitbit.com/foods/Feldsalat+roh/2631626',
    },
  },
  {
    title: 'Fenchel',
    color: 'green',
    id: 'A29',
    nutrients: {
      description:
        'Der Fenchel ist die einzige Pflanzenart der Gattung Foeniculum innerhalb der Familie der Doldenblütler. Es ist eine heute weltweit verbreitete Gemüse-, Gewürz- und Heilpflanze. Eine alte deutsche Bezeichnung für mehrere würzige Doldenblütler ist Köppernickel. Fenchel wurde zur Arzneipflanze des Jahres 2009 gekürt. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Fenchel',
      Kalorien: 31,
      Fettgehalt: '0,2 g',
      Kohlenhydrate: '7 g',
      Protein: '1,2 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169385/nutrients',
    },
  },
  {
    title: 'Galactose',
    color: 'green',
    id: 'A30',
    nutrients: {
      description:
        'Die Galactose, kurz Gal, auch Galaktose oder auch Schleimzucker, ist eine natürlich vorkommende chemische Verbindung aus der Gruppe der Monosaccharide. Galactose kommt z.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Galactose',
      Kalorien: 400,
      Fettgehalt: '0 g',
      Kohlenhydrate: '100 g',
      Protein: '0 g',
      Quelle:
        'https://www.medpex.de/leistungssteigerung/d-galactose-pulver-p11644982?ai=350&gclid=Cj0KCQjwzZj2BRDVARIsABs3l9KsYNx4bJKn-3jfple70HH3OCuMC2XXeAeciedfq-UPMcof4W0i8AQaAjrGEALw_wcB',
    },
  },
  {
    title: 'Galgant',
    color: 'green',
    id: 'A31',
    nutrients: {
      description:
        'Der Echte Galgant, auch Galgantwurzel, Kleiner Galgant, Galgant oder Siam-Galgant genannt, ist eine Pflanzenart, die zur Familie der Ingwergewächse gehört. Er wird als Gewürz- und Heilpflanze verwendet und ist eine von vier ingwerartigen Pflanzen, die als Galgant bezeichnet werden.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Echter_Galgant',
      Kalorien: 50,
      Fettgehalt: '1 g',
      Kohlenhydrate: '8 g',
      Protein: '1 g',
      Quelle: 'https://eatsmarter.de/lexikon/warenkunde/gewuerze/galgant',
    },
  },
  {
    title: 'Ghee-Butter',
    color: 'green',
    id: 'A32',
    nutrients: {
      description:
        'Ghee ist ein dem Butterschmalz verwandtes Produkt und gehört in der indischen und pakistanischen Küche zu den wichtigsten Speisefetten. Es handelt sich dabei um Fett, welches in der Regel aus Butter durch verschiedene Verfahren gewonnen wird.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Ghee',
      Kalorien: 897,
      Fettgehalt: '99 g',
      Kohlenhydrate: '0,5 g',
      Protein: '0,2 g',
      Quelle: 'https://fddb.mobi/de/bioland_ghee_geklaerte_butter.html',
    },
  },
  {
    title: 'Grapefruit',
    color: 'green',
    id: 'A33',
    nutrients: {
      description:
        'Die Grapefruit, selten auch Adamsapfel oder Paradiesapfel genannt, ist die Frucht des Grapefruitbaumes, einer Zitruspflanze, die ein subtropischer Baum aus der Familie der Rautengewächse ist. Sie ist eine Kreuzung, die aus der Orange und Pampelmuse entstanden ist.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Grapefruit',
      Kalorien: 32,
      Fettgehalt: '0,1 g',
      Kohlenhydrate: '8,08 g',
      Protein: '0,63 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/786546/nutrients',
    },
  },
  {
    title: 'Grüne Bohnen',
    color: 'green',
    id: 'A34',
    nutrients: {
      description:
        'BeschreibungDie Gartenbohne, auch Grüne Bohne, Schnittbohne oder österreichisch Fisole, ist eine Pflanzenart aus der Unterfamilie der Schmetterlingsblütler. Sie ist in Deutschland fast immer mit dem Ausdruck „Bohne“ gemeint, der sich aber auch auf viele andere Nutzpflanzenarten beziehen kann.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Gartenbohne',
      Kalorien: 31,
      Fettgehalt: '0,22 g',
      Kohlenhydrate: '6,97 g',
      Protein: '1,83 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169961/nutrients',
    },
  },
  {
    title: 'Gurken',
    color: 'green',
    id: 'A35',
    nutrients: {
      description:
        'Die Gurke, auch als Kukumer und Gartengurke bezeichnet, ist eine Art der Gattung Gurken aus der Familie der Kürbisgewächse. Sie gehört zu den wirtschaftlich bedeutendsten Gemüsearten.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Gurke',
      Kalorien: 12,
      Fettgehalt: '0,16 g',
      Kohlenhydrate: '2,16 g',
      Protein: '0,59 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/787791/nutrients',
    },
  },
  {
    title: 'Hafergras',
    color: 'green',
    id: 'A36',
    nutrients: {
      description:
        'Die Wald-Trespe, auch genauer Späte Wald-Trespe, Hafergras, Wildhafer oder Wilde Waldtrespe genannt, ist eine formenreiche Pflanzenart aus der Gattung Trespen innerhalb der Familie der Süßgräser.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Wald-Trespe',
      Kalorien: 310,
      Fettgehalt: '5,4 g',
      Kohlenhydrate: '17,6 g',
      Protein: '31,9 g',
      Quelle:
        'https://www.piowald.com/superfoods/bio-hafergras/263/bio-hafergras-250g-pulver?c=271',
    },
  },
  {
    title: 'Hafermilch',
    color: 'green',
    id: 'A37',
    nutrients: {
      description:
        'Hafermilch ist eine Form der Getreidemilch aus Saat-Hafer. „Hafermilch“ ist hierbei eine umgangssprachliche, keine offizielle Bezeichnung, denn Milchersatz darf in der EU nicht mit der Bezeichnung Milch in Verkehr gebracht werden.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Hafermilch',
      Kalorien: 46,
      Fettgehalt: '1,2 g',
      Kohlenhydrate: '7,8 g',
      Protein: '0,9 g',
      Quelle:
        'https://eatsmarter.de/ernaehrung/wie-gesund-ist/hafermilch-kalorien-und-naehrwerte',
    },
  },
  {
    title: 'Hanföl',
    color: 'green',
    id: 'A38',
    nutrients: {
      description:
        'Hanföl ist ein fettes Pflanzenöl, das aus den Samen des Nutzhanfs gewonnen wird. Es wird oft mit anderen öligen Hanfprodukten verwechselt, von denen es abgegrenzt werden muss. Hanföl ist ein Speiseöl und darf daher nicht mit dem ätherischen Hanföl oder dem Haschischöl verwechselt werden.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Hanf%C3%B6l',
      Kalorien: 897,
      Fettgehalt: '100 g',
      Kohlenhydrate: '0 g',
      Protein: '0 g',
      Quelle: 'https://oelerini.com/hanfoel',
    },
  },
  {
    title: 'Hanfsamen',
    color: 'green',
    id: 'A39',
    nutrients: {
      description:
        'Hanf ist eine Pflanzengattung innerhalb der Familie der Hanfgewächse. Hanf zählt zu den ältesten Nutzpflanzen der Erde. Die einzelnen Bestandteile der Pflanze werden ungenauerweise ebenfalls als Hanf bezeichnet. Aus diesen Pflanzenteilen können jeweils sehr verschiedene Produkte hergestellt werden: Seile, Speiseöl, ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Hanf',
      Kalorien: 533,
      Fettgehalt: '48,75 g',
      Kohlenhydrate: '8,67 g',
      Protein: '31,56 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170148/nutrients',
    },
  },
  {
    title: 'Heidelbeeren',
    color: 'green',
    id: 'A40',
    nutrients: {
      description:
        'Die Heidelbeere ist eine Art aus der Gattung der Heidelbeeren in der Familie der Heidekrautgewächse. Ihre Verwendung als Beerenobst bzw. Waldfrucht färbt aufgrund des dunklen Fruchtfleisches Zähne und Zunge blau.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Heidelbeere',
      Kalorien: 57,
      Fettgehalt: '0,3 g',
      Kohlenhydrate: '14 g',
      Protein: '0,7 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/171711/nutrients',
    },
  },
  {
    title: 'Heilbutt',
    color: 'green',
    id: 'A41',
    nutrients: {
      description:
        'Der Heilbutt oder Weißer Heilbutt kommt im Nordatlantik vor und ist mit bis zu 300 cm Körperlänge und bis zu 400 kg Gewicht die größte Art der Plattfische. Ein Heilbutt kann bis zu 50 Jahre alt werden. Trotz seines Namens zählt diese Gattung nicht zu der Familie der Butte, sondern zu den Schollen.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Heilbutt',
      Kalorien: 95,
      Fettgehalt: '1,6 g',
      Kohlenhydrate: ' g',
      Protein: '20 g',
      Quelle: 'https://eatsmarter.de/lexikon/warenkunde/fisch/weisser-heilbutt',
    },
  },
  {
    title: 'Hering',
    color: 'green',
    id: 'A42',
    nutrients: {
      description:
        'Der Atlantische Hering ist einer der häufigsten Fische der Welt, einer der bedeutendsten Speisefische und gehört zur Gattung der Echten Heringe. Er wird seit Menschengedenken besonders an seinen Laichplätzen gefangen. Viele Städte wurden in der Nähe der Laichplätze und Durchzugsgebiete gegründet',
      descriptionLink: 'https://de.wikipedia.org/wiki/Atlantischer_Hering',
      Kalorien: 231,
      Fettgehalt: '17,8 g',
      Kohlenhydrate: '0 g',
      Protein: '18,2 g',
      Quelle:
        'http://www.ernaehrung.de/lebensmittel/de/T102100/Hering-roh-Fischzuschnitt.php',
    },
  },
  {
    title: 'Himbeeren (rot/gelb)',
    color: 'green',
    id: 'A43',
    nutrients: {
      description:
        'Die Himbeere ist eine Pflanzenart aus der Untergattung Idaeobatus in der Gattung Rubus innerhalb der Familie der Rosengewächse. Die vielfältige Nutzung der Pflanze durch den Menschen spiegelt sich in zahlreichen regionalen Volksbezeichnungen wider.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Himbeere',
      Kalorien: 52,
      Fettgehalt: '0,65 g',
      Kohlenhydrate: '11,94 g',
      Protein: '1,2 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/167755/nutrients',
    },
  },
  {
    title: 'Ingwer',
    color: 'green',
    id: 'A44',
    nutrients: {
      description:
        'Der Ingwer, auch Ingber, Imber, Immerwurzel und Ingwerwurzel genannt, ist eine Pflanzenart aus der Gattung Ingwer innerhalb der Familie der Ingwergewächse. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Ingwer',
      Kalorien: 80,
      Fettgehalt: '0,8 g',
      Kohlenhydrate: '18 g',
      Protein: '1,8 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169231/nutrients',
    },
  },
  {
    title: 'Joghurt (Ziege/Schaf)',
    color: 'green',
    id: 'A45',
    nutrients: {
      description:
        'Joghurt ist ein Nahrungsmittel, das aus durch Milchsäurebakterien verdickter Milch hergestellt ist. Es wird als Naturjoghurt ohne Zusätze sowie mit Zusätzen wie Zucker oder Obstbestandteilen in verschiedenen Geschmacksrichtungen vermarktet. Naturjoghurt hat in seiner originären Substanz einen säuerlichen Geschmack.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Joghurt',
      Kalorien: 78,
      Fettgehalt: '5 g',
      Kohlenhydrate: '3,7 g',
      Protein: '4,7 g',
      Quelle:
        'https://www.wikifit.de/kalorientabelle/sonstiges/ziegenjoghurt-natur',
    },
  },
  {
    title: 'Johannisbeeren (rot/weiß/schwarz)',
    color: 'green',
    id: 'A46',
    nutrients: {
      description:
        'Die Johannisbeeren, in Bayern, Österreich und Südtirol die Ribisl, in der Schweiz Meertrübeli, Trübeli oder Ribiseli, sind die einzige Pflanzengattung in der Familie der Stachelbeergewächse. Sie umfasst die im Deutschen als Johannisbeere und Stachelbeere bezeichneten Arten.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Johannisbeeren',
      Kalorien: 35,
      Fettgehalt: '1 g',
      Kohlenhydrate: '5,4 g',
      Protein: '0,5 g',
      Quelle:
        'https://eatsmarter.de/ernaehrung/wie-gesund-ist/johannisbeeren-kalorien-und-naehrwerte',
    },
  },
  {
    title: 'Kabeljau',
    color: 'green',
    id: 'A47',
    nutrients: {
      description:
        'Der Kabeljau oder Dorsch ist ein Meeresfisch, der in Teilen des Nordatlantiks und des Nordpolarmeers sowie in der Ostsee verbreitet ist. Der Kabeljau kam früher in sehr großen Mengen im Nordatlantik vor. Er gehört zu den wichtigsten Speisefischen und ist von großer fischereiwirtschaftlicher Bedeutung.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Kabeljau',
      Kalorien: 82,
      Fettgehalt: '0,67 g',
      Kohlenhydrate: '0 g',
      Protein: '17,81 g',
      Quelle: 'https://www.fitnessletter.de/kalorien/kabeljau/',
    },
  },
  {
    title: 'Kaffee, Espresso',
    color: 'green',
    id: 'A48',
    nutrients: {
      description:
        'Espresso ist eine aus Mailand stammende Kaffeezubereitungsart, bei der heißes Wasser mit hohem Druck durch sehr fein gemahlenes Kaffeemehl aus gerösteten Kaffeebohnen gepresst wird.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Espresso',
      Kalorien: 9,
      Fettgehalt: '0,2 g',
      Kohlenhydrate: '1,7 g',
      Protein: '0,1 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/171891/nutrients',
    },
  },
  {
    title: 'Kakaopulver',
    color: 'green',
    id: 'A49',
    nutrients: {
      description:
        'Als Kakaopulver bezeichnet man durch Pulverisieren von teilweise entfetteter Kakaomasse gewonnene Erzeugnisse. Dazu gehört nur Kakaopulver ohne Zusatz von Zucker oder anderen Süßmitteln.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Kakaopulver',
      Kalorien: 228,
      Fettgehalt: '14 g',
      Kohlenhydrate: '58 g',
      Protein: '20 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169593/nutrients',
    },
  },
  {
    title: 'Kapstachelbeeren',
    color: 'green',
    id: 'A50',
    nutrients: {
      description:
        'Die Kapstachelbeere, nach dem botanischen Gattungsnamen oft verkürzt Physalis, aber auch Andenbeere, Andenkirsche und Peruanische Blasenkirsche, seltener Judenkirsche, genannt, ist eine Pflanzenart aus der Gattung der Blasenkirschen in der Familie der Nachtschattengewächse. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Kapstachelbeere',
      Kalorien: 53,
      Fettgehalt: '0,7 g',
      Kohlenhydrate: '11,2 g',
      Protein: '1,9 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/173043/nutrients',
    },
  },
  {
    title: 'Knoblauch',
    color: 'green',
    id: 'A51',
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
    title: 'Kohlarten (alle)',
    color: 'green',
    id: 'A52',
    nutrients: {
      description:
        'Kohl bildet eine Gattung der Familie der Kreuzblütler. Viele wichtige Kulturpflanzen gehören zu dieser Gattung. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Kohl',
      Kalorien: 32,
      Fettgehalt: '0,61 g',
      Kohlenhydrate: '5,42 g',
      Protein: '3,02 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170406/nutrients',
    },
  },
  {
    title: 'Kohlrabi',
    color: 'green',
    id: 'A53',
    nutrients: {
      description:
        'Der Kohlrabi, auch Oberkohlrabi, Oberrübe, Kohlrübe, Rübkohl, Stängelrübe und Luftkohlrabi ist eine Gemüsepflanze. Er ist eine der vielen Zuchtformen des Gemüsekohls. Genutzt wird hier die verdickte, oberirdische Sprossachse.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Kohlrabi',
      Kalorien: 27,
      Fettgehalt: '0,1 g',
      Kohlenhydrate: '6 g',
      Protein: '1,7 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/168424/nutrients',
    },
  },
  {
    title: 'Kokosmehl',
    color: 'green',
    id: 'A54',
    nutrients: {
      description:
        'Die Kokospalme oder Kokosnusspalme (Cocos nucifera) ist ein tropisches Palmengewächs, an dem die Kokosnuss wächst. Cocos nucifera ist die einzige Art der Gattung. Es gibt verschiedene Sorten. Kokospalmen werden seit mindestens 3000 Jahren angebaut. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Kokospalme',
      Kalorien: 354,
      Fettgehalt: '16,5 g',
      Kohlenhydrate: '17 g',
      Protein: '17 g',
      Quelle:
        'https://www.bmi-rechner.net/kalorien-naehrwerte/kalorien-kokosmehl.htm',
    },
  },
  {
    title: 'Kokosmilch (ohne Zucker)',
    color: 'green',
    id: 'A55',
    nutrients: {
      description:
        'Die Kokospalme oder Kokosnusspalme (Cocos nucifera) ist ein tropisches Palmengewächs, an dem die Kokosnuss wächst. Cocos nucifera ist die einzige Art der Gattung. Es gibt verschiedene Sorten. Kokospalmen werden seit mindestens 3000 Jahren angebaut.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Kokospalme',
      Kalorien: 31,
      Fettgehalt: '2,08 g',
      Kohlenhydrate: '2,92 g',
      Protein: '0,21 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/781126/nutrients',
    },
  },
  {
    title: 'Kokosnuss',
    color: 'green',
    id: 'A56',
    nutrients: {
      description:
        'Die Kokospalme oder Kokosnusspalme (Cocos nucifera) ist ein tropisches Palmengewächs, an dem die Kokosnuss wächst. Cocos nucifera ist die einzige Art der Gattung. Es gibt verschiedene Sorten. Kokospalmen werden seit mindestens 3000 Jahren angebaut.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Kokospalme',
      Kalorien: 354,
      Fettgehalt: '33,49 g',
      Kohlenhydrate: '15,23 g',
      Protein: '3,33 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/784378/nutrients',
    },
  },
  {
    title: 'Kokosnusswasser (Dr. Martins)',
    color: 'green',
    id: 'A57',
    nutrients: {
      description:
        'Die Kokospalme oder Kokosnusspalme (Cocos nucifera) ist ein tropisches Palmengewächs, an dem die Kokosnuss wächst. Cocos nucifera ist die einzige Art der Gattung. Es gibt verschiedene Sorten. Kokospalmen werden seit mindestens 3000 Jahren angebaut.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Kokospalme',
      Kalorien: 11,
      Fettgehalt: '0 g',
      Kohlenhydrate: '2,9 g',
      Protein: '0 g',
      Quelle:
        'https://dr-martins.com/de/product/coco-water-pure-fairtrade-330ml/',
    },
  },
  {
    title: 'Kokosöl/Kokosfett',
    color: 'green',
    id: 'A58',
    nutrients: {
      description:
        'Die Kokospalme oder Kokosnusspalme (Cocos nucifera) ist ein tropisches Palmengewächs, an dem die Kokosnuss wächst. Cocos nucifera ist die einzige Art der Gattung. Es gibt verschiedene Sorten. Kokospalmen werden seit mindestens 3000 Jahren angebaut.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Kokospalme',
      Kalorien: 892,
      Fettgehalt: '99,06 g',
      Kohlenhydrate: '0 g',
      Protein: '0 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/789034/nutrients',
    },
  },
  {
    title: 'Kopfsalat',
    color: 'green',
    id: 'A59',
    nutrients: {
      description:
        'Kopfsalat, in Österreich auch Häuptlsalat genannt, ist eine Sortengruppe des Gartensalats. Die Sprossachse ist stark gestaucht, so dass die Blätter einen dichten, rundlichen „Kopf“ bilden. Verzehrt werden beim Kopfsalat die Blätter meist roh.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Kopfsalat',
      Kalorien: 11,
      Fettgehalt: '0,2 g',
      Kohlenhydrate: '1,1 g',
      Protein: '1,3 g',
      Quelle: 'https://www.wikifit.de/kalorientabelle/gemuese/kopfsalat',
    },
  },
  {
    title: 'Kräutertee',
    color: 'green',
    id: 'A60',
    nutrients: {
      description:
        'Kräutertees werden wie Früchtetees als Tee bezeichnet, dürfen aber nach dem Lebensmittelrecht nur als teeähnliche Erzeugnisse deklariert werden. Hierunter versteht man aromatische Aufgussgetränke, die aus frischen oder getrockneten Pflanzenteilen, z. B.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Kr%C3%A4utertee',
      Kalorien: 0,
      Fettgehalt: '0 g',
      Kohlenhydrate: '0 g',
      Protein: '0 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/171946/nutrients',
    },
  },
  {
    title: 'Lamm (Bioqualität)',
    color: 'green',
    id: 'A61',
    nutrients: {
      description:
        'Aus dem Englischen übersetzt-Lamm, Hogget und Hammel, im Allgemeinen Schaffleisch, sind das Fleisch von Hausschafen, Ovis Aries. Ein Schaf im ersten Jahr ist ein Lamm und sein Fleisch ist auch Lamm. Ein Schaf im zweiten Jahr und sein Fleisch sind hogget. Älteres Schaffleisch ist Hammel.',
      descriptionLink: 'https://en.wikipedia.org/wiki/Lamb_and_mutton',
      Kalorien: 294,
      Fettgehalt: '20,94 g',
      Kohlenhydrate: '0 g',
      Protein: '24,52 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/172480/nutrients',
    },
  },
  {
    title: 'Lauch',
    color: 'green',
    id: 'A62',
    nutrients: {
      description:
        'Lauch, auch Porree, Breitlauch, Winterlauch, Welschzwiebel, Gemeiner Lauch, Spanischer Lauch, Aschlauch, Fleischlauch genannt, ist eine Sortengruppe des aus dem Mittelmeerraum stammenden Ackerlauchs. Dieses Gemüse zählt zur Gattung Allium in der Unterfamilie der Lauchgewächse.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Lauch',
      Kalorien: 61,
      Fettgehalt: '0,3 g',
      Kohlenhydrate: '14 g',
      Protein: '1,5 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169246/nutrients',
    },
  },
  {
    title: 'Leinöl',
    color: 'green',
    id: 'A63',
    nutrients: {
      description:
        'Leinöl ist ein Pflanzenöl, das aus Leinsamen, den reifen Samen des Flachs, gewonnen wird. Rohleinöl ist Leinöl ohne Zusatz weiterer Öle oder sonstiger Stoffe. Zur Ölgewinnung werden außer dem eigentlichen Öllein auch andere Lein-Arten verwendet.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Leinsamen',
      Kalorien: 884,
      Fettgehalt: '100 g',
      Kohlenhydrate: '0 g',
      Protein: '0 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/167702/nutrients',
    },
  },
  {
    title: 'Leinsamen',
    color: 'green',
    id: 'A64',
    nutrients: {
      description:
        'Als Leinsamen (von mittelhochdeutsch līnsāme), häufig auch Leinsaat (von mittelhochdeutsch līnsat) genannt, werden die Samen des Flachses (Gemeiner Lein, Linum usitatissimum) bezeichnet.',
      descriptionLink: '',
      Kalorien: 534,
      Fettgehalt: '42,16 g',
      Kohlenhydrate: '28,88 g',
      Protein: '18,29 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169414/nutrients',
    },
  },
  {
    title: 'Leinsamenöl',
    color: 'green',
    id: 'A65',
    nutrients: {
      description:
        'Leinöl ist ein Pflanzenöl, das aus Leinsamen, den reifen Samen des Flachs, gewonnen wird. Rohleinöl ist Leinöl ohne Zusatz weiterer Öle oder sonstiger Stoffe. Zur Ölgewinnung werden außer dem eigentlichen Öllein auch andere Lein-Arten verwendet.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Leinsamen',
      Kalorien: 884,
      Fettgehalt: '100 g',
      Kohlenhydrate: '0 g',
      Protein: '0 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/167702/nutrients',
    },
  },
  {
    title: 'Linsen',
    color: 'green',
    id: 'A66',
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
  },
  {
    title: 'Lollo Rosso',
    color: 'green',
    id: 'A67',
    nutrients: {
      description:
        'Lollo rossa (im deutschen Sprachraum oft Lollo rosso). typische Mischanbauweise in zwei Farben. Schnittsalat, Pflücksalat oder Blattsalat (Lactuca sativa var. crispa)',
      descriptionLink: 'https://de.wikipedia.org/wiki/Schnittsalat',
      Kalorien: 21,
      Fettgehalt: '0,1 g',
      Kohlenhydrate: '2 g',
      Protein: '1 g',
      Quelle: 'https://eatsmarter.de/lexikon/warenkunde/salat/lollo-rosso',
    },
  },
  {
    title: 'Löwenzahn',
    color: 'green',
    id: 'A68',
    nutrients: {
      description:
        'Löwenzahn (Taraxacum) ist eine Pflanzengattung innerhalb der Familie der Korbblütler (Asteraceae). Ihre bekannteste Art ist der auch in Mitteleuropa sehr häufig vorkommende Gewöhnliche Löwenzahn, die „Pusteblume“, „Butter-“ oder „Kuhblume“. Die Gattung Taraxacum ist nicht zu verwechseln mit der in deutscher Sprache meist gleich benannten und sehr ähnlichen Gattung Leontodon innerhalb derselben Familie.',
      descriptionLink:
        'https://de.wikipedia.org/wiki/L%C3%B6wenzahn_(Taraxacum)',
      Kalorien: 35,
      Fettgehalt: '0,62 g',
      Kohlenhydrate: '2,44 g',
      Protein: '3,13 g',
      Quelle:
        'http://www.ernaehrung.de/lebensmittel/de/G262100/Loewenzahn-roh.php',
    },
  },
  {
    title: 'Macadamia-Nussöl',
    color: 'green',
    id: 'A69',
    nutrients: {
      description:
        'Macadamia ist eine Pflanzengattung in der Familie der Silberbaumgewächse. Sie ist vor allem durch die Frucht der beiden Arten Macadamia integrifolia und Macadamia tetraphylla bekannt, deren Samen Macadamianuss genannt wird.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Macadamia',
      Kalorien: 819,
      Fettgehalt: '91 g',
      Kohlenhydrate: '0 g',
      Protein: '0 g',
      Quelle:
        'http://www.ernaehrung.de/lebensmittel/de/FAUSER67/Vitaquell-Bio-Macadamianussoel-.php',
    },
  },
  {
    title: 'Macadamianüsse',
    color: 'green',
    id: 'A70',
    nutrients: {
      description:
        'Macadamia ist eine Pflanzengattung in der Familie der Silberbaumgewächse. Sie ist vor allem durch die Frucht der beiden Arten Macadamia integrifolia und Macadamia tetraphylla bekannt, deren Samen Macadamianuss genannt wird.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Macadamia',
      Kalorien: 716,
      Fettgehalt: '76,08 g',
      Kohlenhydrate: '12,83 g',
      Protein: '7,79 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/784381/nutrients',
    },
  },
  {
    title: 'Makrele',
    color: 'green',
    id: 'A71',
    nutrients: {
      description:
        'Die Makrele ist ein in Küstengewässern lebender Schwarmfisch. Sie fressen Plankton und Fischbrut von Heringen, Dorschen oder Sprotten. Populationen der Makrele kommen in den Küstengewässern Nordamerikas, im offenen Nordostatlantik, in der Nordsee, im Mittelmeer und im Schwarzen Meer vor.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Makrele',
      Kalorien: 262,
      Fettgehalt: '18 g',
      Kohlenhydrate: '0 g',
      Protein: '24 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/175120/nutrients',
    },
  },
  {
    title: 'Mandelmilch',
    color: 'green',
    id: 'A72',
    nutrients: {
      description:
        'Der Mandelbaum ist eine Pflanzenart der Gattung Prunus in der Familie der Rosengewächse. Seine Samen, die Mandeln, genannt auch Mandelkerne, werden als Nahrungsmittel und Kosmetikum genutzt.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Mandelbaum',
      Kalorien: 47,
      Fettgehalt: '2,9 g',
      Kohlenhydrate: '3,8 g',
      Protein: '0,9 g',
      Quelle: 'https://eatsmarter.de/lexikon/warenkunde/superfood/mandelmilch',
    },
  },
  {
    title: 'Mandeln Bioqualität',
    color: 'green',
    id: 'A73',
    nutrients: {
      description:
        'Der Mandelbaum ist eine Pflanzenart der Gattung Prunus in der Familie der Rosengewächse. Seine Samen, die Mandeln, genannt auch Mandelkerne, werden als Nahrungsmittel und Kosmetikum genutzt.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Mandelbaum',
      Kalorien: 589,
      Fettgehalt: '53 g',
      Kohlenhydrate: '5,7 g',
      Protein: '24 g',
      Quelle: 'https://www.foodspring.de/magazine/mandeln',
    },
  },
  {
    title: 'Mandelöl',
    color: 'green',
    id: 'A74',
    nutrients: {
      description:
        'Der Mandelbaum ist eine Pflanzenart der Gattung Prunus in der Familie der Rosengewächse. Seine Samen, die Mandeln, genannt auch Mandelkerne, werden als Nahrungsmittel und Kosmetikum genutzt.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Mandelbaum',
      Kalorien: 884,
      Fettgehalt: '100 g',
      Kohlenhydrate: '0 g',
      Protein: '0 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/789033/nutrients',
    },
  },
  {
    title: 'Mangold',
    color: 'green',
    id: 'A75',
    nutrients: {
      description:
        'Mangold, deutschschweizerisch auch Krautstiel genannt, ist eine Gemüse­pflanze. Sie ist eine Kulturform der Rübe, verwandt mit der Zuckerrübe, der Futterrübe und der Roten Rübe, und stammt von der an Küstensäumen wachsenden Wilden Rübe oder See-Mangold ab.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Mangold',
      Kalorien: 19,
      Fettgehalt: '0,2 g',
      Kohlenhydrate: '3,74 g',
      Protein: '1,8 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/787213/nutrients',
    },
  },
  {
    title: 'Mannose',
    color: 'green',
    id: 'A76',
    nutrients: {
      description:
        'Mannose, in biochemischer Darstellung häufig mit Man abgekürzt, ist ein Epimer der Glucose, genauer gesagt ein C2-Epimer. Als D-Mannose ist es eine natürliche Hexose und Baustein zahlreicher pflanzlicher Polysaccharide (Mannane). Im Organismus ist es hauptsächlich Bestandteil von Membranen. Bezogen auf Saccharose hat eine 10%ige Lösung eine Süßkraft von 59 %.[5]',
      descriptionLink: 'https://de.wikipedia.org/wiki/Mannose',
      Kalorien: 398,
      Fettgehalt: '0 g',
      Kohlenhydrate: '99,5 g',
      Protein: '0 g',
      Quelle:
        'http://www.ernaehrung.de/lebensmittel/de/SHS1101/D-Mannose-%28Mischung%29-Nutricia-Metabolics.php',
    },
  },
  {
    title: 'Marmelade (selbstgemacht mit Agar Agar, Galactose)',
    color: 'green',
    id: 'A77',
    nutrients: {
      description:
        'Marmelade ist die traditionelle Bezeichnung für einen Brotaufstrich, der aus mit Zucker eingekochten Früchten hergestellt wird, ohne dass Fruchtstücke im Fertigprodukt sichtbar bleiben.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Marmelade',
      Kalorien: 0,
      Fettgehalt: '000 g',
      Kohlenhydrate: '000 g',
      Protein: '000 g',
      Quelle: '',
    },
  },
  {
    title: 'Maulbeeren (getrocknet)',
    color: 'green',
    id: 'A78',
    nutrients: {
      description:
        'Die Maulbeeren oder Maulbeerbäume sind wie die Feigen eine Pflanzengattung in der Familie der Maulbeergewächse.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Maulbeeren',
      Kalorien: 43,
      Fettgehalt: '0,4 g',
      Kohlenhydrate: '10 g',
      Protein: '1,4 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169913/nutrients',
    },
  },
  {
    title: 'Meerettich (frisch)',
    color: 'green',
    id: 'A79',
    nutrients: {
      description:
        'Der Meerrettich, als größerer „Rettich“ zu mittelhochdeutsch/althochdeutsch mēr, gehört zur Familie der Kreuzblütengewächse. Die Wurzel der Meerrettichpflanze wird als Gemüse, Gewürz oder in der Pflanzenheilkunde verwendet. Mit den Rettichen der Gattung Raphanus ist er nicht näher verwandt.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Meerrettich',
      Kalorien: 64,
      Fettgehalt: '0,3 g',
      Kohlenhydrate: '11,6 g',
      Protein: '2,8 g',
      Quelle: 'https://www.vitamine.com/lebensmittel/meerrettich/',
    },
  },
  {
    title: 'Milch (Schaf, Ziege)',
    color: 'green',
    id: 'A80',
    nutrients: {
      description: 'Ziegenmilch ist die Milch von Hausziegen.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Ziegenmilch',
      Kalorien: 69,
      Fettgehalt: '4,1 g',
      Kohlenhydrate: '4,5 g',
      Protein: '3,6 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/171278/nutrients',
    },
  },
  {
    title: 'Mohn',
    color: 'green',
    id: 'A81',
    nutrients: {
      description:
        'Mohn ist eine Pflanzengattung aus der Familie der Mohngewächse mit weltweit zwischen 50 und 120 Arten. Eine Kulturpflanze ist der Schlafmohn. Die leuchtend roten Blüten des in Mitteleuropa wilden Klatschmohns blühen ab Ende Mai und kennzeichnen den Beginn des Frühsommers.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Mohn',
      Kalorien: 525,
      Fettgehalt: '41,56 g',
      Kohlenhydrate: '28,13 g',
      Protein: '17,99 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/171330/nutrients',
    },
  },
  {
    title: 'Morcheln',
    color: 'green',
    id: 'A82',
    nutrients: {
      description: 'Die Morcheln sind eine Gattung der Schlauchpilze.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Morcheln',
      Kalorien: 15,
      Fettgehalt: '0,32 g',
      Kohlenhydrate: '0,5 g',
      Protein: '2,48 g',
      Quelle: 'https://www.vitamine.com/lebensmittel/morchel/',
    },
  },
  {
    title: 'Oliven',
    color: 'green',
    id: 'A83',
    nutrients: {
      description:
        'Der Olivenbaum, auch Echter Ölbaum genannt, ist ein mittelgroßer, im Alter oft knorriger Baum aus der Gattung der Ölbäume, die zur Familie der Ölbaumgewächse gehört. Er wird seit dem 4. Jahrtausend v. Chr. als Nutzpflanze kultiviert.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Olivenbaum',
      Kalorien: 115,
      Fettgehalt: '11 g',
      Kohlenhydrate: '6 g',
      Protein: '0,8 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169094/nutrients',
    },
  },
  {
    title: 'Olivenöl',
    color: 'green',
    id: 'A84',
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
    title: 'Papaya',
    color: 'green',
    id: 'A85',
    nutrients: {
      description:
        'Papaya, auch Melonenbaum oder Papayabaum genannt, ist die einzige Art der Pflanzengattung Carica innerhalb der Familie der Melonenbaumgewächse. Die Wildform kommt vom südlichen Mexiko bis Costa Rica vor. Die Kulturform ist eine wichtige tropische Nutzpflanze. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Papaya',
      Kalorien: 43,
      Fettgehalt: '0,26 g',
      Kohlenhydrate: '10,82 g',
      Protein: '0,47 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169926/nutrients',
    },
  },
  {
    title: 'Papaya (getrocknet)',
    color: 'green',
    id: 'A86',
    nutrients: {
      description:
        'Papaya, auch Melonenbaum oder Papayabaum genannt, ist die einzige Art der Pflanzengattung Carica innerhalb der Familie der Melonenbaumgewächse. Die Wildform kommt vom südlichen Mexiko bis Costa Rica vor. Die Kulturform ist eine wichtige tropische Nutzpflanze. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Papaya',
      Kalorien: 296,
      Fettgehalt: '0,86 g',
      Kohlenhydrate: '75,46 g',
      Protein: '1,55 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/786612/nutrients',
    },
  },
  {
    title: 'Paprika',
    color: 'green',
    id: 'A87',
    nutrients: {
      description:
        'Die Pflanzengattung Paprika (Capsicum) gehört zur Familie der Nachtschattengewächse (Solanaceae). Sie ist vor allem wegen ihrer Früchte bekannt, die als Gemüse und Gewürz verwendet werden. Je nach Größe, Farbe und Geschmack sowie Schärfe werden für viele Sorten besondere Namen wie Chili, Spanischer Pfeffer, Peperoni, Peperoncini oder Pfefferoni gebraucht. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Paprika',
      Kalorien: 31,
      Fettgehalt: '0,3 g',
      Kohlenhydrate: '6,03 g',
      Protein: '0,99 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/787812/nutrients',
    },
  },
  {
    title: 'Paranüsse',
    color: 'green',
    id: 'A88',
    nutrients: {
      description:
        'Der Paranussbaum gehört zu den Topffruchtbaumgewächsen. Den botanischen Gattungsnamen Bertholletia erhielt der Baum zu Ehren des französischen Chemikers Claude Louis Berthollet.',
      descriptionLink: 'Wikipedia',
      Kalorien: 656,
      Fettgehalt: '66 g',
      Kohlenhydrate: '12 g',
      Protein: '14 g',
      Quelle: 'https://fdc.nal.usda.gov/fdc-app.html#/?query=ndbNumber:12078',
    },
  },
  {
    title: 'Pfifferlinge',
    color: 'green',
    id: 'A89',
    nutrients: {
      description:
        'Der Echte Pfifferling, Eierschwamm oder Rehling, auch Eierschwämmchen, in Österreich und Bayern Eierschwammerl und Reherl, in Franken Gelberle, in Sachsen Gelchen, in der Schweiz auch Eierschwämmli genannt, ist ein essbarer Pilz aus der Familie der Pfifferlingsverwandten.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Echter_Pfifferling',
      Kalorien: 32,
      Fettgehalt: '0,53 g',
      Kohlenhydrate: '6,86 g',
      Protein: '1,49 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/168422/nutrients',
    },
  },
  {
    title: 'Pistazien (bio)',
    color: 'green',
    id: 'A90',
    nutrients: {
      description:
        'Der Pistazienbaum oder vereinfacht Pistazie ist eine Pflanzenart innerhalb der Familie der Sumachgewächse. Zur Unterscheidung von den anderen Arten der Gattung Pistazien wird sie genauer Echte Pistazie genannt und ihre Steinfrucht Pistazie.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Pistazie',
      Kalorien: 562,
      Fettgehalt: '45 g',
      Kohlenhydrate: '28 g',
      Protein: '20 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170184/nutrients',
    },
  },
  {
    title: 'Portulak',
    color: 'green',
    id: 'A91',
    nutrients: {
      description:
        'Der Portulak, auch Gemüse-Portulak oder Sommerportulak genannt, ist eine Pflanzenart aus der Gattung Portulak. Sie ist in den gemäßigten Zonen weltweit verbreitet und wird gelegentlich als Gemüse oder Gewürz verwendet.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Portulak',
      Kalorien: 20,
      Fettgehalt: '0,4 g',
      Kohlenhydrate: '3,4 g',
      Protein: '2 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169274/nutrients',
    },
  },
  {
    title: 'Postelein',
    color: 'green',
    id: 'A92',
    nutrients: {
      description:
        'Das Gewöhnliche Tellerkraut, auch Kuba-Spinat, Winterportulak oder Postelein bzw. Winterpostelein genannt, ist eine Pflanzenart aus der Gattung Tellerkräuter innerhalb der Familie der Quellkrautgewächse. Sie ist ursprünglich im Westen Nordamerikas beheimatet, in Mittel- und Westeuropa tritt sie als Neophyt auf. ',
      descriptionLink:
        'https://de.wikipedia.org/wiki/Gew%C3%B6hnliches_Tellerkraut',
      Kalorien: 20,
      Fettgehalt: '0,4 g',
      Kohlenhydrate: '3,4 g',
      Protein: '2 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169274/nutrients',
    },
  },
  {
    title: 'Preiselbeeren (frisch)',
    color: 'green',
    id: 'A93',
    nutrients: {
      description:
        'Die Preiselbeere ist eine Pflanzenart aus der Gattung der Heidelbeeren. Sie ist in Eurasien und Nordamerika weit verbreitet. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Preiselbeere',
      Kalorien: 41,
      Fettgehalt: '0,53 g',
      Kohlenhydrate: '6,22 g',
      Protein: '0,28 g',
      Quelle:
        'http://www.ernaehrung.de/lebensmittel/de/F401000/Preiselbeere---Kronsbeere.php',
    },
  },
  {
    title: 'Quark (Ziege, Schaf)',
    color: 'green',
    id: 'A94',
    nutrients: {
      description:
        'Quark, auch Weißkäse, österreichisch bzw. bairisch Topfen, süddeutsch/südost- und westösterreichisch Schotten, ist das aus der Milch durch Zugabe von Lab oder durch bakterielle Bildung von Milchsäure ausgefällte Milcheiweiß.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Quark_(Milchprodukt)',
      Kalorien: 176,
      Fettgehalt: '14 g',
      Kohlenhydrate: '3,3 g',
      Protein: '9,1 g',
      Quelle: 'http://das-ist-drin.de/Heirler-Ziegen-Quark-180-g--429876/',
    },
  },
  {
    title: 'Radicchio',
    color: 'green',
    id: 'A95',
    nutrients: {
      description:
        'Der Radicchio ist eine Kulturform der Gemeinen Wegwarte, die als Gemüse oder Salat genutzt wird. Die verschiedenen Sorten wurden früher vor allem in Italien angebaut, woraus sich die regionalen Bezeichnungen herleiten.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Radicchio',
      Kalorien: 16,
      Fettgehalt: '0,2 g',
      Kohlenhydrate: '1,5 g',
      Protein: '1,2 g',
      Quelle:
        'https://www.yazio.com/de/kalorientabelle/radicchio-zichorie-roh.html',
    },
  },
  {
    title: 'Radieschen',
    color: 'green',
    id: 'A96',
    nutrients: {
      description:
        'Das Radieschen, auch Radies genannt, selten Monatsrettich, eine Sorte des Garten-Rettichs, ist eine Nutzpflanze aus der Familie der Kreuzblütengewächse. Die bis zu etwa vier Zentimeter dicke Speicherknolle schmeckt scharf, ist innen weiß und außen zumeist weinrot bis rot.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Radieschen',
      Kalorien: 16,
      Fettgehalt: '0,1 g',
      Kohlenhydrate: '2 g',
      Protein: '1 g',
      Quelle:
        'https://eatsmarter.de/ernaehrung/wie-gesund-ist/radieschen-kalorien-und-naehrwerte',
    },
  },
  {
    title: 'Rapsöl',
    color: 'green',
    id: 'A97',
    nutrients: {
      description:
        'Rapsöl oder Rüböl ist ein pflanzliches Öl, welches aus den Samen vom Raps oder seltener auch von dem nahen Verwandten, dem Ölrübsen, gewonnen wird. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Raps%C3%B6l',
      Kalorien: 884,
      Fettgehalt: '100 g',
      Kohlenhydrate: '0 g',
      Protein: '0 g',
      Quelle: 'https://www.yazio.com/de/kalorientabelle/raps-oel-rapsoel.html',
    },
  },
  {
    title: 'Reishi (Ganodernum lucidum)',
    color: 'green',
    id: 'A98',
    nutrients: {
      description:
        'Der Glänzende Lackporling ist ein Pilz aus der Familie der Lackporlingsverwandten. ',
      descriptionLink:
        'https://de.wikipedia.org/wiki/Gl%C3%A4nzender_Lackporling',
      Kalorien: 39,
      Fettgehalt: '0,5 g',
      Kohlenhydrate: '6 g',
      Protein: '2,3 g',
      Quelle:
        'https://www.weightguard.de/kalorientabelle/30_pilze/1900_reishi.html',
    },
  },
  {
    title: 'Rettich',
    color: 'green',
    id: 'A99',
    nutrients: {
      description:
        'Die Rettiche bilden eine Pflanzengattung in der Familie der Kreuzblütengewächse. Es gibt etwa drei Arten, die überwiegend im Mittelmeerraum beheimatet sind. Mit dem als Gewürz verwendeten Meerrettich sind sie nicht näher verwandt.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Rettiche',
      Kalorien: 18,
      Fettgehalt: '0,15 g',
      Kohlenhydrate: '2,39 g',
      Protein: '1,05 g',
      Quelle:
        'http://www.ernaehrung.de/lebensmittel/de/G681100/Rettich-weiss-roh.php',
    },
  },
  {
    title: 'Rhabarber',
    color: 'green',
    id: 'A100',
    nutrients: {
      description:
        'Der Rhabarber, genauer Gewöhnlicher Rhabarber, auch Gemüse-Rhabarber oder Krauser Rhabarber, ist eine Pflanzenart aus der Familie der Knöterichgewächse. Die geschälten oder ungeschälten Blattstiele dieser Nutzpflanze werden unter anderem zu Kompott, Konfitüren, Kuchen und auch zu Saft verarbeitet.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Gemeiner_Rhabarber',
      Kalorien: 21,
      Fettgehalt: '0,2 g',
      Kohlenhydrate: '4,5 g',
      Protein: '0,9 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/167758/nutrients',
    },
  },
  {
    title: 'Ribose',
    color: 'green',
    id: 'A101',
    nutrients: {
      description:
        'Ribose ist ein Zucker mit fünf Kohlenstoff-Atomen, eine Pentose, und kommt als D-Ribose in der Natur häufig vor, während die enantiomere L-Ribose nur geringe Bedeutung hat. D-Ribose ist Bestandteil der Bausteine von Ribonukleinsäure.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Ribose',
      Kalorien: 400,
      Fettgehalt: '0 g',
      Kohlenhydrate: '100 g',
      Protein: '0 g',
      Quelle:
        'https://shop.apotal.de/images/products/apotal/lmiv/10330477_lmiv.pdf',
    },
  },
  {
    title: 'Röhrling',
    color: 'green',
    id: 'A102',
    nutrients: {
      description:
        'Als Röhrlinge werden Pilzarten bezeichnet, deren in Hut und Stiel gegliederte Fruchtkörper auf der Hutunterseite ein röhrlingsartiges Hymenophor aufweisen. Sie gehören verschiedenen Familien an: Dickröhrlingsverwandte Schmierröhrlingsverwandte',
      descriptionLink: 'https://de.wikipedia.org/wiki/R%C3%B6hrlinge',
      Kalorien: 27,
      Fettgehalt: '0,4 g',
      Kohlenhydrate: '0,5 g',
      Protein: '4,5 g',
      Quelle: 'https://www.speisepilze.eu/pilze/maronen.pdf',
    },
  },
  {
    title: 'Römischer Salat',
    color: 'green',
    id: 'A103',
    nutrients: {
      description:
        'Römersalat, auch Römischer oder Romana-Salat, Lattuga, Kochsalat, Bindesalat ist eine Varietät der Pflanzenart Gartensalat',
      descriptionLink: 'https://de.wikipedia.org/wiki/R%C3%B6mersalat',
      Kalorien: 17,
      Fettgehalt: '0,3 g',
      Kohlenhydrate: '3,29 g',
      Protein: '1,23 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169247/nutrients',
    },
  },
  {
    title: 'Rotbarsch',
    color: 'green',
    id: 'A104',
    nutrients: {
      description:
        'Der Rotbarsch oder Goldbarsch ist ein Meeresfisch des nördlichen Atlantik und ein bekannter Speisefisch.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Rotbarsch',
      Kalorien: 105,
      Fettgehalt: '3,9 g',
      Kohlenhydrate: '0 g',
      Protein: '17,2 g',
      Quelle:
        'https://www.yazio.com/de/kalorientabelle/rotbarsch-rotbarschfilet.html',
    },
  },
  {
    title: 'Rucola',
    color: 'green',
    id: 'A105',
    nutrients: {
      description:
        'Als Rucola werden verschiedene Pflanzenarten aus der Familie der Kreuzblütengewächse gehandelt. Rucola wird hauptsächlich als Salatpflanze angebaut. Im deutschsprachigen Raum ursprünglich als Rauke bekannt, aber in Vergessenheit geraten, wurden die Pflanzen unter ihrem italienischen Namen wieder populär.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Rucola',
      Kalorien: 30,
      Fettgehalt: '0,7 g',
      Kohlenhydrate: '2,1 g',
      Protein: '2,6 g',
      Quelle: 'https://www.yazio.com/de/kalorientabelle/rucola-roh-frisch.html',
    },
  },
  {
    title: 'Rucola-Sprossen',
    color: 'green',
    id: 'A106',
    nutrients: {
      description:
        'Als Rucola werden verschiedene Pflanzenarten aus der Familie der Kreuzblütengewächse gehandelt. Rucola wird hauptsächlich als Salatpflanze angebaut. Im deutschsprachigen Raum ursprünglich als Rauke bekannt, aber in Vergessenheit geraten, wurden die Pflanzen unter ihrem italienischen Namen wieder populär.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Rucola',
      Kalorien: 25,
      Fettgehalt: '1 g',
      Kohlenhydrate: '2 g',
      Protein: '2,6 g',
      Quelle: 'https://sprossenwelt.de/keimsaaten/rucolasprossen/',
    },
  },
  {
    title: 'Saibling',
    color: 'green',
    id: 'A107',
    nutrients: {
      description:
        'Die Saiblinge sind eine Gattung aus der Familie der Lachsfische. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Saiblinge',
      Kalorien: 96,
      Fettgehalt: '2 g',
      Kohlenhydrate: '0 g',
      Protein: '19 g',
      Quelle: 'https://eatsmarter.de/lexikon/warenkunde/fisch/saibling',
    },
  },
  {
    title: 'Sanddorn',
    color: 'green',
    id: 'A108',
    nutrients: {
      description:
        'Sanddorn, auch Fasanbeer, Haffdorn, Seedorn und häufig „Zitrone des Nordens“ genannt, ist eine Pflanzenart aus der Gattung der Sanddorne innerhalb der Familie der Ölweidengewächse. Der botanische Gattungsname Hippophae enthält die beiden griechischen Wörter hippos und phaes. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Sanddorn',
      Kalorien: 86,
      Fettgehalt: '7,1 g',
      Kohlenhydrate: '3,29 g',
      Protein: '1,42 g',
      Quelle: 'https://www.vitamine.com/lebensmittel/sanddorn/',
    },
  },
  {
    title: 'Sardine',
    color: 'green',
    id: 'A109',
    nutrients: {
      description:
        'Die Sardine, auch Atlantische oder Europäische Sardine genannt, ist die einzige Art der Gattung Sardina in der Familie der Heringe. Sie ist ein bedeutender Speisefisch. Ihr Vorkommen erstreckt sich vom nordöstlichen Atlantik und der Nordsee bis zum Senegal.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Sardine',
      Kalorien: 1,
      Fettgehalt: '11,45 g',
      Kohlenhydrate: '0 g',
      Protein: '24,62 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/175139/nutrients',
    },
  },
  {
    title: 'Sauerampfer',
    color: 'green',
    id: 'A110',
    nutrients: {
      description:
        'Der Wiesen-Sauerampfer, auch Sauerampfer, Sauerlump oder Suurampfere genannt, ist eine Pflanzenart, die zur Familie der Knöterichgewächse gehört. Er wird als Wildgemüse und Heilpflanze verwendet. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Wiesen-Sauerampfer',
      Kalorien: 26,
      Fettgehalt: '0,36 g',
      Kohlenhydrate: '1,16 g',
      Protein: '3,19 g',
      Quelle:
        'http://www.ernaehrung.de/lebensmittel/de/G263100/Sauerampfer-roh.php',
    },
  },
  {
    title: 'Sauerkraut',
    color: 'green',
    id: 'A111',
    nutrients: {
      description:
        'Sauerkraut oder Sauerkohl ist durch Milchsäuregärung konservierter Weißkohl oder Spitzkohl und wird meist gekocht als Beilage verzehrt. Es gilt international als eines der bekanntesten deutschen Nationalgerichte.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Sauerkraut',
      Kalorien: 19,
      Fettgehalt: '0,14 g',
      Kohlenhydrate: '4,28 g',
      Protein: '0,91 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169279/nutrients',
    },
  },
  {
    title: 'Schafkäse',
    color: 'green',
    id: 'A112',
    nutrients: {
      description:
        'Schafskäse oder Schafkäse ist Käse, hauptsächlich Weichkäse, aus Schafmilch. Schafskäse unterscheidet sich vor allem durch den stärkeren Geruch und Geschmack von Käse aus Kuhmilch.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Schafsk%C3%A4se',
      Kalorien: 284,
      Fettgehalt: '24,1 g',
      Kohlenhydrate: '0,8 g',
      Protein: '15,7 g',
      Quelle:
        'https://www.yazio.com/de/kalorientabelle/schafskaese-feta-hirtenkaese.html',
    },
  },
  {
    title: 'Schellfisch',
    color: 'green',
    id: 'A113',
    nutrients: {
      description:
        'Der Schellfisch ist ein Speisefisch aus der Familie der Dorsche, der in Meeren der gemäßigten Zonen vorkommt.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Schellfisch',
      Kalorien: 90,
      Fettgehalt: '0,7 g',
      Kohlenhydrate: '0 g',
      Protein: '20,7 g',
      Quelle: 'https://www.yazio.com/de/kalorientabelle/schellfisch-gar.html',
    },
  },
  {
    title: 'Scholle',
    color: 'green',
    id: 'A115',
    nutrients: {
      description:
        'Die Scholle oder der Goldbutt gehört zur Ordnung der Plattfische sowie zur Familie der Schollen und ist ein Speisefisch.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Scholle_(Fisch)',
      Kalorien: 86,
      Fettgehalt: '1,9 g',
      Kohlenhydrate: '0 g',
      Protein: '17,1 g',
      Quelle: 'https://www.yazio.com/de/kalorientabelle/scholle.html',
    },
  },
  {
    title: 'Schwarzer Reis',
    color: 'green',
    id: 'A116',
    nutrients: {
      description:
        'Aus dem Englischen übersetzt-Schwarzer Reis ist eine Reihe von Reissorten der Art Oryza sativa L., von denen einige Klebreis sind. Zu den Sorten gehören indonesischer schwarzer Reis, philippinischer Balatinaw-Reis und thailändischer schwarzer Jasminreis.',
      descriptionLink: 'https://en.wikipedia.org/wiki/Black_rice',
      Kalorien: 356,
      Fettgehalt: '3,33 g',
      Kohlenhydrate: '75,56 g',
      Protein: '8,89 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/356561/nutrients',
    },
  },
  {
    title: 'Schwertfisch',
    color: 'green',
    id: 'A117',
    nutrients: {
      description:
        'Der Schwertfisch ist ein großer, räuberisch lebender Knochenfisch, der weltweit in gemäßigt warmen bis tropischen Meeren anzutreffen ist. Er lebt im offenen Ozean, nähert sich nur wenig den Küsten und ernährt sich von anderen Fischen und von Kopffüßern.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Schwertfisch',
      Kalorien: 172,
      Fettgehalt: '7,93 g',
      Kohlenhydrate: '0 g',
      Protein: '23,45 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/173704/nutrients',
    },
  },
  {
    title: 'Seezunge',
    color: 'green',
    id: 'A118',
    nutrients: {
      description:
        'Die Seezunge gehört zur Ordnung der Plattfische und ist einer der begehrtesten und teuersten Speisefische.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Seezunge',
      Kalorien: 83,
      Fettgehalt: '1,4 g',
      Kohlenhydrate: '0 g',
      Protein: '17,5 g',
      Quelle: 'https://eatsmarter.de/lexikon/warenkunde/fisch/seezunge',
    },
  },
  {
    title: 'Sellerie',
    color: 'green',
    id: 'A119',
    nutrients: {
      description:
        'Sellerie (Apium)[1][2] ist eine Gattung in der Familie der Doldenblütler (Apiaceae) mit 30 Arten. Insbesondere der Echte Sellerie, meist einfach Sellerie genannt, findet als Nutz- und Heilpflanze Verwendung.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Sellerie',
      Kalorien: 14,
      Fettgehalt: '0,17 g',
      Kohlenhydrate: '2,97 g',
      Protein: '0,69 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169988/nutrients',
    },
  },
  {
    title: 'Senfpulver',
    color: 'green',
    id: 'A120',
    nutrients: {
      description:
        'Senf ist ein scharfes Gewürz, das aus den Samenkörnern des Weißen, Braunen und des Schwarzen Senfs hergestellt wird. Gebräuchlich sind sowohl reine Senfkörner, Senfpulver und vor allem die aus den mehr oder weniger fein gemahlenen Samen und weiteren Zutaten bereitete Würzpaste, genannt „Tafelsenf“ oder „Mostrich“.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Senf',
      Kalorien: 347,
      Fettgehalt: '6,4 g',
      Kohlenhydrate: '48,3 g',
      Protein: '23 g',
      Quelle: 'https://www.naehrwertrechner.de/naehrwerte/R278011/Senfpulver',
    },
  },
  {
    title: 'Sesamöl',
    color: 'green',
    id: 'A121',
    nutrients: {
      description:
        'Sesamöl wird aus den Samen des Sesams gewonnen. Das helle, aus den naturbelassenen Samen gewonnene Öl ist blassgelb und weitgehend geruchs- und geschmacksneutral – es dient vor allem in der asiatischen und orientalischen Küche als Speiseöl. Daneben wird es zur Margarineherstellung verwendet.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Sesam%C3%B6l',
      Kalorien: 884,
      Fettgehalt: '100 g',
      Kohlenhydrate: '0 g',
      Protein: '0 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/171016/nutrients',
    },
  },
  {
    title: 'Sesamsamen',
    color: 'green',
    id: 'A122',
    nutrients: {
      description:
        'Sesam ist eine Pflanzenart aus der Familie der Sesamgewächse. Er ist eine weit verbreitete Kulturpflanze und vermutlich eine der ältesten Ölpflanzen der Welt.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Sesam',
      Kalorien: 573,
      Fettgehalt: '49,67 g',
      Kohlenhydrate: '23,45 g',
      Protein: '17,73 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170150/nutrients',
    },
  },
  {
    title: 'Sojasprossen',
    color: 'green',
    id: 'A123',
    nutrients: {
      description:
        'Die Sojabohne, häufig auch einfach als Soja bezeichnet, ist eine Pflanzenart aus der Unterfamilie Schmetterlingsblütler innerhalb der Familie der Hülsenfrüchtler. Der Anbau der Nutzpflanze Sojabohne ist seit 3050 v. Chr. in Japan und zumindest seit 1550 v. Chr. in Korea und China als Nahrungspflanze nachgewiesen.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Sojabohne',
      Kalorien: 122,
      Fettgehalt: '6,7 g',
      Kohlenhydrate: '9,57 g',
      Protein: '13,09 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169284/nutrients',
    },
  },
  {
    title: 'Spargel',
    color: 'green',
    id: 'A124',
    nutrients: {
      description:
        'Gemüsespargel oder Gemeiner Spargel ist eine von ca. 220 Arten aus der Gattung Spargel. Umgangssprachlich wird er meist kurz Spargel genannt. Gegessen werden die jungen Triebe.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Gem%C3%BCsespargel',
      Kalorien: 20,
      Fettgehalt: '0,12 g',
      Kohlenhydrate: '3,88 g',
      Protein: '2,2 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/168389/nutrients',
    },
  },
  {
    title: 'Spinat',
    color: 'green',
    id: 'A125',
    nutrients: {
      description:
        'Der Echte Spinat, auch Gemüsespinat, Gartenspinat oder kurz Spinat genannt, ist eine Pflanzenart aus der Gattung Spinat innerhalb der Familie der Fuchsschwanzgewächse. Diese Kulturform entstand wohl in Südwestasien und wird hauptsächlich als Blattgemüse verwendet.',
      descriptionLink: 'Wikipedia',
      Kalorien: 23,
      Fettgehalt: '0,39 g',
      Kohlenhydrate: '3,63 g',
      Protein: '2,86 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/168462/nutrients',
    },
  },
  {
    title: 'Stachelbeeren',
    color: 'green',
    id: 'A126',
    nutrients: {
      description:
        'Die Stachelbeere ist eine Pflanzenart aus der Gattung Ribes innerhalb der Familie der Stachelbeergewächse. Sie besitzt ein weites Verbreitungsgebiet in Eurasien und Nordafrika. Die Sorten liefern Obst.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Stachelbeere',
      Kalorien: 43,
      Fettgehalt: '0,15 g',
      Kohlenhydrate: '7,06 g',
      Protein: '0,8 g',
      Quelle:
        'http://www.ernaehrung.de/lebensmittel/de/F305100/Stachelbeere-roh.php',
    },
  },
  {
    title: 'Steinpilze',
    color: 'green',
    id: 'A127',
    nutrients: {
      description:
        'Die Steinpilze bilden eine Sektion in der Gattung Dickröhrlinge. Die Arten werden aufgrund der schwierigen Unterscheidbarkeit für Laien häufig unter diesem Namen zusammengefasst.',
      descriptionLink: 'Wikipedia',
      Kalorien: 121,
      Fettgehalt: '10,376 g',
      Kohlenhydrate: '2,2 g',
      Protein: '4,8 g',
      Quelle: 'https://www.vitamine.com/lebensmittel/steinpilze/',
    },
  },
  {
    title: 'Stockschwäcmmchen',
    color: 'green',
    id: 'A128',
    nutrients: {
      description:
        'Die Stockschwämmchen sind eine Pilzgattung aus der Familie der Träuschlingsverwandten. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Stockschw%C3%A4mmchen',
      Kalorien: 24,
      Fettgehalt: '0,5 g',
      Kohlenhydrate: '2,2 g',
      Protein: '1,3 g',
      Quelle:
        'http://www.ernaehrung.de/lebensmittel/de/EDEKA185/Stockschwaemmchen,-EDEKA.php',
    },
  },
  {
    title: 'Tagatose',
    color: 'green',
    id: 'A129',
    nutrients: {
      description:
        'Tagatose ist ein Monosaccharid mit sechs Kohlenstoff-Atomen. Dieser Zucker gehört zur Gruppe der Ketohexosen. D-Tagatose eignet sich als Süßstoff, da er – verglichen mit Fructose – bei 92 % Süßkraft nur 38 % des physiologischen Brennwerts besitzt.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Tagatose',
      Kalorien: 400,
      Fettgehalt: '0 g',
      Kohlenhydrate: '100 g',
      Protein: '0 g',
      Quelle:
        'https://www.gesundheitsmanufaktur.de/gesundo/tagatose-d-tagatose-suessungsmittel',
    },
  },
  {
    title: 'Tee (schwarz, grün, weiß)',
    color: 'green',
    id: 'A130',
    nutrients: {
      description:
        'Tee im eigentlichen Sinne ist ein heißes Aufgussgetränk, das in der Hauptsache aus den Blättern und Blattknospen der Teepflanze zubereitet wird. Einige Spezialtees enthalten auch Stängel. Tee ist ein Genussmittel. Tee enthält, je nach Pflanzenteil bis zu 4,5 % Coffein.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Tee',
      Kalorien: 1,
      Fettgehalt: '0 g',
      Kohlenhydrate: '0,17 g',
      Protein: '0,06 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/174873/nutrients',
    },
  },
  {
    title: 'Thunfisch',
    color: 'green',
    id: 'A131',
    nutrients: {
      description:
        'Thunfische bezeichnen eine Gattung großer Raubfische, die in allen tropischen, subtropischen und gemäßigten Meeren vorkommt. Sie gehören zu den wichtigsten Speisefischen und sind von großer fischereiwirtschaftlicher Bedeutung. Einige der acht Arten sind inzwischen durch Überfischung gefährdet.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Thunfische',
      Kalorien: 130,
      Fettgehalt: '0,59 g',
      Kohlenhydrate: '0 g',
      Protein: '29,15 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/172006/nutrients',
    },
  },
  {
    title: 'Tomaten',
    color: 'green',
    id: 'A132',
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
    title: 'Tomatenmark',
    color: 'green',
    id: 'A133',
    nutrients: {
      description:
        'Tomatenmark, in Ostösterreich Paradeismark, in der Schweiz Tomatenpüree, ist eine aus Tomaten hergestellte Paste, die in der Küche vor allem zur Herstellung von Saucen verwendet wird.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Tomatenmark',
      Kalorien: 43,
      Fettgehalt: '0,5 g',
      Kohlenhydrate: '5,55 g',
      Protein: '2,3 g',
      Quelle:
        'http://www.ernaehrung.de/lebensmittel/de/R160000/Tomatenmark.php',
    },
  },
  {
    title: 'Walnüsse',
    color: 'green',
    id: 'A134',
    nutrients: {
      description:
        'Aus dem Englischen übersetzt-Eine Walnuss ist die Nuss eines Baumes der Gattung Juglans, insbesondere der persischen oder englischen Walnuss Juglans regia. Eine Walnuss ist der essbare Samen einer Steinfrucht und somit keine echte botanische Nuss. Es wird üblicherweise als Nuss konsumiert',
      descriptionLink: 'https://en.wikipedia.org/wiki/Walnut',
      Kalorien: 654,
      Fettgehalt: '65,21 g',
      Kohlenhydrate: '13,71 g',
      Protein: '15,23 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170187/nutrients',
    },
  },
  {
    title: 'Walnussöl',
    color: 'green',
    id: 'A135',
    nutrients: {
      description:
        'Walnussöl ist ein hochwertiges Pflanzenöl aus reifen, teilweise auch gerösteten Samen von Walnüssen. Es ist von blass-grünlichgelber bis strohgelber Farbe, relativ dünnflüssig, hat einen intensiven, nussigen Geschmack und zeichnet sich durch einen besonders hohen Gehalt an Triglyceriden ungesättigter Fettsäuren aus.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Walnuss%C3%B6l',
      Kalorien: 884,
      Fettgehalt: '100 g',
      Kohlenhydrate: '0 g',
      Protein: '0 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/171030/nutrients',
    },
  },
  {
    title: 'Wasser',
    color: 'green',
    id: 'A136',
    nutrients: {
      description:
        'Wasser ist eine chemische Verbindung aus den Elementen Sauerstoff und Wasserstoff. Wasser ist als Flüssigkeit durchsichtig, weitgehend farb-, geruch- und geschmacklos. Es kommt in zwei Isomeren vor, die sich im Kernspin der beiden Wasserstoffatome unterscheiden.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Wasser',
      Kalorien: 0,
      Fettgehalt: '0 g',
      Kohlenhydrate: '0 g',
      Protein: '0 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/175096/nutrients',
    },
  },
  {
    title: 'Weizengras',
    color: 'green',
    id: 'A137',
    nutrients: {
      description:
        'nicht verfügbar, nächster Treffer: Als Weizengrassaft wird die Flüssigkeit bezeichnet, die heraustritt, wenn die jungen Triebe von Weichweizen (Triticum aestivum) nach wenigen Tagen (vor der Knotenbilung für neue Blätter – Jointing Stage) geerntet und danach gepresst werden.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Weizengrassaft',
      Kalorien: 213,
      Fettgehalt: '1,9 g',
      Kohlenhydrate: '2,3 g',
      Protein: '14,8 g',
      Quelle: 'https://fddb.mobi/de/naturprodukt_weizengras_pulver.html',
    },
  },
  {
    title: 'Wild (Rücken und Filet, Bioqualität)',
    color: 'green',
    id: 'A138',
    nutrients: {
      description:
        'Wild, teilweise auch deutlicher als Jagdwild bezeichnet, ist ein Sammelbegriff für die im Zusammenhang mit Jagd relevanten Säugetiere und Vögel. Der Begriff „Wild“ grenzt sich damit gegen den des Wildtieres ab, der allgemein alle freilebenden Tiere umfasst.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Wild',
      Kalorien: 104,
      Fettgehalt: '1,88 g',
      Kohlenhydrate: '0 g',
      Protein: '21,78 g',
      Quelle:
        'https://xn--diten-vergleichen-rqb.de/naehrwert-tabelle/tabelle-wild.php',
    },
  },
  {
    title: 'Wildkräuter',
    color: 'green',
    id: 'A139',
    nutrients: {
      description:
        'Der Begriff Wildkräuter bezeichnet krautige Wildpflanzen, vor allem in der direkten Umgebung des Menschen, in Gärten, Ackerland und Saumbiotopen.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Wildkraut',
      Kalorien: 39,
      Fettgehalt: '0 g',
      Kohlenhydrate: '0 g',
      Protein: '8 g',
      Quelle: 'https://www.yazio.com/de/kalorientabelle/giersch-frisch.html',
    },
  },
  {
    title: 'Wildlachs',
    color: 'green',
    id: 'A140',
    nutrients: {
      description:
        'Der Atlantische Lachs gehört zur Gattung der Lachse und lebt größtenteils im Atlantischen Ozean. Im Spätherbst ziehen die Lachse jedoch weit die Flüsse Europas und Nordamerikas hinauf, um an den Oberläufen zu laichen. Die Fische können bis zu 1,5 Meter lang werden und benötigen zum Laichen Kiesgründe.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Atlantischer_Lachs',
      Kalorien: 142,
      Fettgehalt: '6,34 g',
      Kohlenhydrate: '0 g',
      Protein: '19,84 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/173686/nutrients',
    },
  },
  {
    title: 'Wirsing',
    color: 'green',
    id: 'A141',
    nutrients: {
      description:
        'Wirsing, auch Wirsingkohl, Welschkohl, Welschkraut, Savoyen, Savoyerkohl, Bayerisch Wirsching, im Rheinland Schavur, schweizerdeutsch Wirz oder Köhli und in Österreich einfach nur Kohl genannt, ist ein Kopfkohl und eine Kulturvarietät des Gemüsekohls. Er zeichnet sich durch kraus gewellte Blätter aus.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Wirsing',
      Kalorien: 27,
      Fettgehalt: '0,1 g',
      Kohlenhydrate: '6,1 g',
      Protein: '2 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170388/nutrients',
    },
  },
  {
    title: 'Xylose',
    color: 'green',
    id: 'A142',
    nutrients: {
      description:
        'Xylose ist eine Aldopentose, eine Zuckerart mit fünf Kohlenstoff-Atomen und einer Aldehydgruppe als funktioneller Gruppe, die unter anderem bei der Hydrolyse von Holzgummi mit verdünnten Säuren entsteht. Aus ihr wird der Zuckeraustauschstoff Xylit hergestellt.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Xylose',
      Kalorien: 400,
      Fettgehalt: '0 g',
      Kohlenhydrate: '100 g',
      Protein: '0 g',
      Quelle: '',
    },
  },
  {
    title: 'Zander',
    color: 'green',
    id: 'A143',
    nutrients: {
      description:
        'Der Zander, auch Sander, Schill, Hechtbarsch, Zahnmaul oder Fogasch genannt, gehört zur Familie der Barsche. Er ist der größte im Süßwasser lebende Barschartige Europas. Er lebt in Europa vom Stromgebiet des Rheins bis zum Ural und in Westasien in der nordwestlichen Türkei und rund um das Kaspische Meer.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Zander',
      Kalorien: 90,
      Fettgehalt: '1 g',
      Kohlenhydrate: '0 g',
      Protein: '19 g',
      Quelle: 'https://www.wikifit.de/kalorientabelle/fisch/zander',
    },
  },
  {
    title: 'Ziegenkäse',
    color: 'green',
    id: 'A144',
    nutrients: {
      description:
        'Ziegenkäse ist Käse aus Ziegenmilch. Es gibt, wie auch bei Käse aus Kuhmilch, eine große Bandbreite von unterschiedlichen Sorten. Nicht jede Sorte wird zu 100 % aus Ziegenmilch hergestellt, oft ist Kuh- oder Schafsmilch untergemischt.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Ziegenk%C3%A4se',
      Kalorien: 364,
      Fettgehalt: '29,84 g',
      Kohlenhydrate: '0,12 g',
      Protein: '21,58 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/173433/nutrients',
    },
  },
  {
    title: 'Zimt',
    color: 'green',
    id: 'A145',
    nutrients: {
      description:
        'Der Zimt, veraltet auch Zimmet, Echter Zimt, ist ein Gewürz aus der getrockneten Rinde des Ceylon-Zimtbaums und verschiedener anderer Zimtbäume der Gattung Cinnamomum.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Zimt',
      Kalorien: 247,
      Fettgehalt: '1,24 g',
      Kohlenhydrate: '80,59 g',
      Protein: '3,99 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/171320/nutrients',
    },
  },
  {
    title: 'Zitrone',
    color: 'green',
    id: 'A146',
    nutrients: {
      description:
        'Die Zitrone oder Limone ist die etwa faustgroße Frucht des Zitronenbaums aus der Gattung der Zitruspflanzen. Es handelt sich um eine Gruppe von Sorten, die aus einer Kreuzung zwischen Bitterorange und Zitronatzitrone entstanden ist, wahrscheinlich im Norden Indiens.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Zitrone',
      Kalorien: 0,
      Fettgehalt: '0,3 g',
      Kohlenhydrate: '9,32 g',
      Protein: '1,1 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/167746/nutrients',
    },
  },
  {
    title: 'Zucchini',
    color: 'green',
    id: 'A147',
    nutrients: {
      description:
        'Die Zucchini, in der Deutschschweiz Zucchetti, sind eine Unterart des Gartenkürbisses und gehören zur Pflanzenfamilie der Kürbisgewächse. Zucchini sind einhäusig, das heißt, männliche und weibliche Geschlechtsorgane befinden sich in getrennten Blüten, aber an einer Pflanze.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Zucchini',
      Kalorien: 17,
      Fettgehalt: '0,32 g',
      Kohlenhydrate: '3,11 g',
      Protein: '1,21 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169291/nutrients',
    },
  },
  {
    title: 'Zuckerhut/Fleischkraut',
    color: 'green',
    id: 'A148',
    nutrients: {
      description:
        'Bei Fleischkraut, meist Zuckerhut (italienisch Pan di Zucchero, englisch Sugar Loaf, französisch Chicorée Pain De Sucre) genannt, handelt es sich um eine Form der Zichorie (Cichorium intybus var. foliosum; hier mit dem Zusatz f. cylindricum). Der Name Zuckerhut stammt von der Wuchsform, die einem Zuckerhut ähnelt, hat jedoch nichts mit dem Geschmack zu tun. Er bildet längliche, lockere Köpfe, vergleichbar mit Römersalat, auch als Bindesalat bekannt',
      descriptionLink: 'https://de.wikipedia.org/wiki/Fleischkraut',
      Kalorien: 16,
      Fettgehalt: '0,22 g',
      Kohlenhydrate: '1,5 g',
      Protein: '1,2 g',
      Quelle:
        'http://www.ernaehrung.de/lebensmittel/de/G109000/Zuckerhutsalat.php',
    },
  },
  {
    title: 'Zwiebeln',
    color: 'green',
    id: 'A149',
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
    title: 'Amaranth',
    color: 'yellow',
    id: 'B1',
    nutrients: {
      description:
        'Amarant, auch Fuchsschwanz genannt, manchmal auch Amaranth geschrieben, ist eine Pflanzengattung innerhalb der Familie der Fuchsschwanzgewächse. Die 60 bis 98 Arten sind fast weltweit verbreitet.',
      descriptionLink:
        'https://de.wikipedia.org/wiki/Amarant_(Pflanzengattung)',
      Kalorien: 371,
      Fettgehalt: '7,02 g',
      Kohlenhydrate: '65,25 g',
      Protein: '13,56 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170682/nutrients',
    },
  },
  {
    title: 'Ananas',
    color: 'yellow',
    id: 'B2',
    nutrients: {
      description:
        'Die Ananas ist eine Pflanzenart aus der Familie der Bromeliengewächse. Sie ist ursprünglich in Amerika heimisch und wird heute weltweit in den tropischen Gebieten als Obstpflanze angebaut. Sie bildet fleischige Fruchtstände, die frisch verzehrt oder zu Konserven und Saft verarbeitet werden.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Ananas',
      Kalorien: 50,
      Fettgehalt: '0,12 g',
      Kohlenhydrate: '13,12 g',
      Protein: '0,54 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169124/nutrients',
    },
  },
  {
    title: 'Apfel',
    color: 'yellow',
    id: 'B3',
    nutrients: {
      description:
        'Aus dem Englischen übersetzt-Ein Apfel ist eine essbare Frucht, die von einem Apfelbaum produziert wird. Apfelbäume werden weltweit kultiviert und sind die am weitesten verbreitete Art in der Gattung Malus. Der Baum stammt ursprünglich aus Zentralasien, wo sein wilder Vorfahr Malus sieversii noch heute gefunden wird.',
      descriptionLink: 'https://en.wikipedia.org/wiki/Apple',
      Kalorien: 52,
      Fettgehalt: '0,17 g',
      Kohlenhydrate: '13,81 g',
      Protein: '0,26 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/171688/nutrients',
    },
  },
  {
    title: 'Aprikosen',
    color: 'yellow',
    id: 'B4',
    nutrients: {
      description:
        'Aus dem Englischen übersetzt-Eine Aprikose ist eine Frucht oder der Baum, der die Frucht mehrerer Arten der Gattung Prunus trägt.',
      descriptionLink: 'https://en.wikipedia.org/wiki/Apricot',
      Kalorien: 48,
      Fettgehalt: '0,39 g',
      Kohlenhydrate: '11,12 g',
      Protein: '1,4 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/171697/nutrients',
    },
  },
  {
    title: 'Arganöl',
    color: 'yellow',
    id: 'B5',
    nutrients: {
      description:
        'Das Arganöl ist ein Speiseöl, das aus den Samenplättchen der reifen Beerenfrucht des Arganbaums durch Pressung gewonnen wird. Die ausschließlich im Südwesten Marokkos gelegenen Gebiete der Arganeraie wurde im Jahr 1998 durch die UNESCO zum Biosphärenreservat erklärt.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Argan%C3%B6l',
      Kalorien: 900,
      Fettgehalt: '100 g',
      Kohlenhydrate: '0 g',
      Protein: '0 g',
      Quelle: 'https://www.yazio.com/de/kalorientabelle/arganoel.html',
    },
  },
  {
    title: 'Aroniabeeren',
    color: 'yellow',
    id: 'B6',
    nutrients: {
      description:
        'Die Apfelbeeren sind eine Pflanzengattung innerhalb der Familie der Rosengewächse. Die nur drei Arten stammen ursprünglich aus dem östlichen Nordamerika und wachsen dort als Strauch von ein bis zwei Metern Höhe. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Apfelbeeren',
      Kalorien: 96,
      Fettgehalt: '1,5 g',
      Kohlenhydrate: '18 g',
      Protein: '1,9 g',
      Quelle:
        'https://www.yazio.com/de/kalorientabelle/apfelbeeren-aroniabeeren-frisch.html',
    },
  },
  {
    title: 'Balsamico-Essig',
    color: 'yellow',
    id: 'B7',
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
    title: 'Basmati (Vollkorn)',
    color: 'yellow',
    id: 'B8',
    nutrients: {
      description:
        'Aus dem Englischen übersetzt-Basmati ist eine Sorte von langem, schlankkörnigem aromatischem Reis, der traditionell vom indischen Subkontinent stammt. Von 2018 bis 2019 exportierte Indien auf 65% des Basmatireismarktes in Übersee, während Pakistan den Rest ausmachte. Viele Länder verwenden im Inland angebaute Basmatireispflanzen.',
      descriptionLink: 'https://en.wikipedia.org/wiki/Basmati',
      Kalorien: 351,
      Fettgehalt: '0,3 g',
      Kohlenhydrate: '76 g',
      Protein: '8,9 g',
      Quelle:
        'https://www.wikifit.de/kalorientabelle/reisprodukte/basmati-reis',
    },
  },
  {
    title: 'Biofleisch',
    color: 'yellow',
    id: 'B9',
    nutrients: {
      description:
        'Als Bio-Lebensmittel werden Lebensmittel aus der ökologischen Landwirtschaft bezeichnet. Der Begriff ist in der EU gesetzlich definiert. Diese Produkte müssen aus ökologisch kontrolliertem Anbau stammen, dürfen nicht gentechnisch verändert sein und werden ohne Einsatz von chemisch-synthetischen Pflanzenschutzmitteln, Kunstdünger oder Klärschlamm angebaut. Tierische Produkte stammen von Tieren, die artgerecht gemäß EG-Öko-Verordnung[1] gehalten werden und in der Regel nicht mit Antibiotika und Wachstumshormonen behandelt wurden',
      descriptionLink: 'https://de.wikipedia.org/wiki/Bio-Lebensmittel',
      Kalorien: 0,
      Fettgehalt: '13,6 g',
      Kohlenhydrate: '0,5 g',
      Protein: '19,7 g',
      Quelle:
        'https://www.naehrwertrechner.de/naehrwerte/U010111/Rind+Hackfleisch+frisch',
    },
  },
  {
    title: 'Birne',
    color: 'yellow',
    id: 'B10',
    nutrients: {
      description:
        'Die Birnen bilden eine Pflanzengattung, die zu den Kernobstgewächsen in der Familie der Rosengewächse gehört.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Birnen',
      Kalorien: 57,
      Fettgehalt: '0,14 g',
      Kohlenhydrate: '15,23 g',
      Protein: '0,36 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169118/nutrients',
    },
  },
  {
    title: 'Brottrunk',
    color: 'yellow',
    id: 'B11',
    nutrients: {
      description:
        'Brottrunk ist ein flüssiges Lebensmittel der Firma Kanne Brottrunk GmbH & Co. KG, einem Familienunternehmen aus Lünen, das von dem Brottrunk-Erfinder, dem Bäckermeister Wilhelm Kanne sen., geführt wurde. Brottrunk wird durch Milchsäuregärung aus einem speziellen biologischen Vollkornsauerteigbrot gewonnen.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Brottrunk',
      Kalorien: 6,
      Fettgehalt: '0,1 g',
      Kohlenhydrate: '0,06 g',
      Protein: '0,2 g',
      Quelle: 'https://eatsmarter.de/lexikon/warenkunde/getraenke/brottrunk',
    },
  },
  {
    title: 'Buchweizen',
    color: 'yellow',
    id: 'B12',
    nutrients: {
      description:
        'Der Echte Buchweizen, auch Gemeiner Buchweizen, ist eine Pflanzenart aus der Gattung Buchweizen in der Familie der Knöterichgewächse. Manchmal wird er auch in die Gattung Polygonum eingeordnet. Buchweizen ist ein Pseudogetreide. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Echter_Buchweizen',
      Kalorien: 335,
      Fettgehalt: '3,1 g',
      Kohlenhydrate: '70,59 g',
      Protein: '12,62 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170687/nutrients',
    },
  },
  {
    title: 'Büffelfleisch',
    color: 'yellow',
    id: 'B13',
    nutrients: {
      description:
        'Als Büffel bezeichnet man in der deutschen Sprache mehrere Arten von afrikanischen und asiatischen Rindern, die zu den Gattungen Bubalus und Syncerus gehören. Darunter sind der asiatische Wasserbüffel und der afrikanische Kaffernbüffel am bekanntesten.',
      descriptionLink: 'https://de.wikipedia.org/wiki/B%C3%BCffel',
      Kalorien: 99,
      Fettgehalt: '1,37 g',
      Kohlenhydrate: '0 g',
      Protein: '20,39 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/175299/nutrients',
    },
  },
  {
    title: 'Butter',
    color: 'yellow',
    id: 'B14',
    nutrients: {
      description:
        'Butter ist ein meist aus dem Rahm von Milch hergestelltes Streichfett. Überwiegend wird Butter aus Kuhmilch hergestellt, es gibt jedoch auch Butter aus Schafmilch und Ziegenmilch.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Butter',
      Kalorien: 717,
      Fettgehalt: '81,11 g',
      Kohlenhydrate: '0,06 g',
      Protein: '0,85 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/173430/nutrients',
    },
  },
  {
    title: 'Cranberry (getrocknet ohne Zucker)',
    color: 'yellow',
    id: 'B15',
    nutrients: {
      description:
        'Die Großfrüchtige Moosbeere – niederdeutsch Kraanbeere oder Kranbeere – ist vor allem unter der englischen Bezeichnung Cranberry bekannt. Sie ist eine Pflanzenart aus der Gattung der Heidelbeeren in der Familie der Heidekrautgewächse.',
      descriptionLink:
        'https://de.wikipedia.org/wiki/Gro%C3%9Ffr%C3%BCchtige_Moosbeere',
      Kalorien: 46,
      Fettgehalt: '0,13 g',
      Kohlenhydrate: '11,97 g',
      Protein: '0,46 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/171722/nutrients',
    },
  },
  {
    title: 'Cranberry-Saft/Muttersaft',
    color: 'yellow',
    id: 'B16',
    nutrients: {
      description:
        'Die Großfrüchtige Moosbeere – niederdeutsch Kraanbeere oder Kranbeere – ist vor allem unter der englischen Bezeichnung Cranberry bekannt. Sie ist eine Pflanzenart aus der Gattung der Heidelbeeren in der Familie der Heidekrautgewächse.',
      descriptionLink:
        'https://de.wikipedia.org/wiki/Gro%C3%9Ffr%C3%BCchtige_Moosbeere',
      Kalorien: 46,
      Fettgehalt: '0,13 g',
      Kohlenhydrate: '12,2 g',
      Protein: '0,39 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/168117/nutrients',
    },
  },
  {
    title: 'Datteln',
    color: 'yellow',
    id: 'B18',
    nutrients: {
      description:
        'Die Echte Dattelpalme (Phoenix dactylifera) ist eine Pflanzenart der Gattung Dattelpalmen (Phoenix) in der Familie der Palmengewächse (Arecaceae). Ihre Früchte werden Datteln genannt. Die echte Dattelpalme ist eine alte orientalische Kulturpflanze, deren menschliche Nutzung sich bis in die Archive von Mesopotamien zurückverfolgen lässt.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Echte_Dattelpalme',
      Kalorien: 282,
      Fettgehalt: '0,39 g',
      Kohlenhydrate: '75,03 g',
      Protein: '2,45 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/171726/nutrients',
    },
  },
  {
    title: 'Dinkel (Bio-Qualität)',
    color: 'yellow',
    id: 'B19',
    nutrients: {
      description:
        'Dinkel oder Spelz ist eine Getreideart aus der Gattung des Weizens und ein enger Verwandter des heutigen Weichweizens. Es gibt sehr viele Mischformen und Übergänge zwischen „modernem“ Weizen und Dinkel, weil beide in manchen Regionen gemeinsam angebaut und auch miteinander gekreuzt wurden. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Dinkel',
      Kalorien: 338,
      Fettgehalt: '2,43 g',
      Kohlenhydrate: '70,19 g',
      Protein: '14,57 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169745/nutrients',
    },
  },
  {
    title: 'Dinkelbrot',
    color: 'yellow',
    id: 'B20',
    nutrients: {
      description:
        'Als Dinkelbrot bezeichnet man ein Brot, das vorwiegend aus Dinkelmehl oder Dinkelschrot gebacken wird. Einige Staaten kennen Vorschriften über die Zusammensetzung des Brotes, damit es als Dinkelbrot bezeichnet werden darf. In Deutschland muss ein Dinkelbrot aus mindestens 90 % Dinkelmahlerzeugnissen erstellt werden. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Dinkelbrot',
      Kalorien: 242,
      Fettgehalt: '3,5 g',
      Kohlenhydrate: '39,5 g',
      Protein: '10,4 g',
      Quelle: 'https://www.yazio.com/de/kalorientabelle/dinkelbrot.html',
    },
  },
  {
    title: 'Einkorn (Ur-Dinkel)',
    color: 'yellow',
    id: 'B21',
    nutrients: {
      description: '',
      descriptionLink: '',
      Kalorien: 0,
      Fettgehalt: ' g',
      Kohlenhydrate: ' g',
      Protein: ' g',
      Quelle: '',
    },
  },
  {
    title: 'Emmermehl (Ur-Weizen)',
    color: 'yellow',
    id: 'B22',
    nutrients: {
      description:
        'Einkorn, auch Blicken oder Kleiner Spelz genannt, ist eine der ältesten domestizierten Getreidearten. Einkorn stammt vom wilden Weizen ab, der im Gegensatz zu Einkorn eine brüchige Ährchengabel hat.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Einkorn',
      Kalorien: 320,
      Fettgehalt: '2,6 g',
      Kohlenhydrate: '62 g',
      Protein: '19 g',
      Quelle: 'https://eatsmarter.de/lexikon/warenkunde/getreide/einkorn',
    },
  },
  {
    title: 'Erdbeeren',
    color: 'yellow',
    id: 'B23',
    nutrients: {
      description:
        'Die Erdbeeren sind eine Gattung in der Unterfamilie der Rosoideae innerhalb der Familie der Rosengewächse. Zur Gattung Fragaria gehören ungefähr zwanzig Arten, meistens in den gemäßigten Zonen der Nordhalbkugel vorkommend, und verschiedene Unterarten; daneben gibt es viele hybride Formen mit zahlreichen Kultursorten.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Erdbeeren',
      Kalorien: 32,
      Fettgehalt: '0,3 g',
      Kohlenhydrate: '7,68 g',
      Protein: '0,67 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/167762/nutrients',
    },
  },
  {
    title: 'Erytrithol',
    color: 'yellow',
    id: 'B24',
    nutrients: {
      description:
        'Erythrit ist eine süß schmeckende Verbindung und gehört chemisch zu den Zuckeralkoholen. Es stellt die meso-Form des optisch aktiven Threit dar und wird als Zuckeraustauschstoff verwendet. Es besitzt etwa 50–70 Prozent der Süßkraft von Zucker.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Erythrit',
      Kalorien: 0,
      Fettgehalt: '0 g',
      Kohlenhydrate: '100 g',
      Protein: '0 g',
      Quelle:
        'https://buxtrade.de/de/sweetener/erythritol-erythrit-zuckerersatz-kalorienfrei',
    },
  },
  {
    title: 'Essig',
    color: 'yellow',
    id: 'B25',
    nutrients: {
      description:
        'Essig ist ein sauer schmeckendes Würz- und Konservierungsmittel, das durch Fermentation alkoholhaltiger Flüssigkeiten mit Essigsäurebakterien hergestellt wird. Essig ist im Wesentlichen eine verdünnte Lösung von Essigsäure in Wasser.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Essig',
      Kalorien: 18,
      Fettgehalt: '0 g',
      Kohlenhydrate: '0,04 g',
      Protein: '0 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/172237/nutrients',
    },
  },
  {
    title: 'Esskastanien/Maronen',
    color: 'yellow',
    id: 'B26',
    nutrients: {
      description:
        'Die Edelkastanie, auch Esskastanie genannt, ist der einzige europäische Vertreter der Gattung Kastanien aus der Familie der Buchengewächse. Die Edelkastanie ist ein sommergrüner Baum und bildet stärkereiche Nussfrüchte. In Süd- und Westeuropa wird sie wegen dieser essbaren Früchte und als Holzlieferant angebaut.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Edelkastanie',
      Kalorien: 196,
      Fettgehalt: '1,25 g',
      Kohlenhydrate: '44,17 g',
      Protein: '1,63 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170575/nutrients',
    },
  },
  {
    title: 'Früchtetee',
    color: 'yellow',
    id: 'B27',
    nutrients: {
      description:
        'Früchtetee ist ein teeähnliches Aufgussgetränk. Es gibt klassische Früchtetees aus einer einzigen Pflanzenart, wie Hagebuttentee, und Mischungen aus verschiedenen Früchten.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Fr%C3%BCchtetee',
      Kalorien: 3,
      Fettgehalt: '0 g',
      Kohlenhydrate: '0,8 g',
      Protein: '0,2 g',
      Quelle:
        'https://fddb.info/db/de/lebensmittel/durchschnittswert_fruechtetee/index.html',
    },
  },
  {
    title: 'Fruchtsaft, ftisch gepresst (Beere, Grapefruit)',
    color: 'yellow',
    id: 'B28',
    nutrients: {
      description:
        'Aus dem Englischen übersetzt-Grapefruitsaft ist der Saft von Grapefruits. Es ist reich an Vitamin C und reicht von süß-sauer bis sehr sauer. Zu den Variationen gehören weiße Grapefruit, rosa Grapefruit und rubinroter Grapefruitsaft.',
      descriptionLink: 'https://en.wikipedia.org/wiki/Grapefruit_juice',
      Kalorien: 39,
      Fettgehalt: '0,1 g',
      Kohlenhydrate: '9,2 g',
      Protein: '0,5 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/167774/nutrients',
    },
  },
  {
    title: 'Gojibeeren (getrocknet)',
    color: 'yellow',
    id: 'B29',
    nutrients: {
      description:
        'Aus dem Englischen übersetzt-Goji, Goji-Beere oder Wolfsbeere ist die Frucht von Lycium barbarum oder Lycium chinense, zwei eng verwandten Boxthornarten aus der Familie der Nachtschattengewächse, Solanaceae.',
      descriptionLink: 'https://en.wikipedia.org/wiki/Goji',
      Kalorien: 349,
      Fettgehalt: '0,39 g',
      Kohlenhydrate: '77,06 g',
      Protein: '14,26 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/173032/nutrients',
    },
  },
  {
    title: 'Granatapfel',
    color: 'yellow',
    id: 'B30',
    nutrients: {
      description:
        'Der Granatapfel ist eine Pflanzenart, die der Familie der Weiderichgewächse zugerechnet wird. Die aus zwei Arten bestehende Gattung Punica bildet alleine die Unterfamilie Punicoideae S.A.Graham, Thorne & Reveal, manche Autoren führen sie auch noch als eigene monotypische Familie Punicaceae Horan.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Granatapfel',
      Kalorien: 83,
      Fettgehalt: '1,17 g',
      Kohlenhydrate: '18,7 g',
      Protein: '1,67 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169134/nutrients',
    },
  },
  {
    title: 'Guarkenmehl',
    color: 'yellow',
    id: 'B31',
    nutrients: {
      description:
        'Guaran, auch Guargummi genannt, ist ein Pflanzengummi. Die chemische Verbindung aus der Gruppe der Polysaccharide ist Hauptbestandteil von Guarkernmehl. Guaran wird unter anderem als Lebensmittelzusatzstoff E 412 verwendet. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Guaran',
      Kalorien: 29,
      Fettgehalt: '0,8 g',
      Kohlenhydrate: '0 g',
      Protein: '5 g',
      Quelle:
        'https://www.yazio.com/de/kalorientabelle/guarkernmehl-getreideersatz-bindemittel.html',
    },
  },
  {
    title: 'Haferflocken (kernige)',
    color: 'yellow',
    id: 'B32',
    nutrients: {
      description:
        'Haferflocken sind ein Grundnahrungsmittel, das aus Saat-Hafer hergestellt wird. Sie werden aus dem vollen Korn hergestellt und es werden nur nicht-essbare Teile entfernt, damit sind sie Vollkorn.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Haferflocken',
      Kalorien: 373,
      Fettgehalt: '6,7 g',
      Kohlenhydrate: '59,5 g',
      Protein: '13,2 g',
      Quelle:
        'https://www.yazio.com/de/kalorientabelle/hafer-haferflocken-kernige.html',
    },
  },
  {
    title: 'Hefe',
    color: 'yellow',
    id: 'B33',
    nutrients: {
      description:
        'Backhefe, auch Bierhefe, Bäckerhefe, Bärme, norddeutsch Gest, bairisch Germ, lat.-wiss. Saccharomyces cerevisiae, umgangssprachlich kurz Hefe, gehört zu den Hefen und ist eine Knospungs-Hefe.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Backhefe',
      Kalorien: 105,
      Fettgehalt: '1,9 g',
      Kohlenhydrate: '18,1 g',
      Protein: '8,4 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/175042/nutrients',
    },
  },
  {
    title: 'Hefeflocken',
    color: 'yellow',
    id: 'B34',
    nutrients: {
      description:
        'Nährhefe ist eine durch Hitze inaktivierte Hefe, die einen relativ hohen Nährwert und vor allem einen hohen Gehalt an Vitamin B hat. Sie wird unter anderem als Nährhefeflocken oder als Pulver verkauft, und ist eine der typischen Zutaten der vegetarischen und veganen Küche.',
      descriptionLink: 'https://de.wikipedia.org/wiki/N%C3%A4hrhefe',
      Kalorien: 491,
      Fettgehalt: '7,5 g',
      Kohlenhydrate: '54 g',
      Protein: '37,5 g',
      Quelle:
        'https://www.yazio.com/de/kalorientabelle/hefeflocken-rapunzel.html',
    },
  },
  {
    title: 'Hirse',
    color: 'yellow',
    id: 'B35',
    nutrients: {
      description:
        'Hirse ist eine Sammelbezeichnung für kleinfrüchtiges Spelzgetreide mit 10–12 Gattungen. Sie gehören zur Familie der Süßgräser. Der früher auch männlich gebrauchte Name Hirse stammt aus dem Altgermanischen und ist von einem indogermanischen Wort für „Sättigung, Nährung, Nahrhaftigkeit“ abgeleitet.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Hirse',
      Kalorien: 378,
      Fettgehalt: '4,22 g',
      Kohlenhydrate: '72,85 g',
      Protein: '11,02 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169702/nutrients',
    },
  },
  {
    title: 'Holunderbeere',
    color: 'yellow',
    id: 'B36',
    nutrients: {
      description:
        'Die Holunder bilden eine Pflanzengattung in der Familie der Moschuskrautgewächse. Die Gattung enthält weltweit etwas mehr als zehn Arten, von denen drei in Mitteleuropa heimisch sind.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Holunder',
      Kalorien: 73,
      Fettgehalt: '0,5 g',
      Kohlenhydrate: '18,4 g',
      Protein: '0,66 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/171727/nutrients',
    },
  },
  {
    title: 'Honigmelone',
    color: 'yellow',
    id: 'B37',
    nutrients: {
      description:
        'Die Zuckermelone oder Melone ist eine aus den Tropen und Subtropen stammende Pflanzenart, deren Beerenfrüchte als Obst genutzt werden. Sie ist eine Art aus der Gattung der Gurken, daher mit der Gurke näher verwandt als mit der Wassermelone, die jedoch wie die Zuckermelone zur Familie der Kürbisgewächse gehört.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Zuckermelone',
      Kalorien: 34,
      Fettgehalt: '0,19 g',
      Kohlenhydrate: '8,16 g',
      Protein: '0,84 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169092/nutrients',
    },
  },
  {
    title: 'Inulin',
    color: 'yellow',
    id: 'B38',
    nutrients: {
      description:
        'nulin ist ein Gemisch von Polysacchariden aus Fructosebausteinen mit einer Kettenlänge von bis zu 100 Monomeren und einem endständigen Glucoserest. Es zählt zu den Fructanen.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Inulin',
      Kalorien: 210,
      Fettgehalt: '0 g',
      Kohlenhydrate: '8 g',
      Protein: '0 g',
      Quelle:
        'https://www.fitmart.de/Low-Carb/Ballaststoffe/ESN-Inulin-500g.html',
    },
  },
  {
    title: 'Isomaltulose/Isomaltose',
    color: 'yellow',
    id: 'B39',
    nutrients: {
      description:
        'Isomaltose ist eine chemische Verbindung aus der Gruppe der Disaccharide. Sie ähnelt der Maltose, jedoch mit einer α--Bindung anstelle der α--Bindung. Beide Zuckerarten sind reduzierende Zucker. Sie entsteht unter anderem bei der Verdauung von Stärke und Glycogen im Darm.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Isomaltose',
      Kalorien: 378,
      Fettgehalt: '0 g',
      Kohlenhydrate: '100 g',
      Protein: '0 g',
      Quelle:
        'http://www.foodplaner.de/kalorientabelle-isomaltulose+nutrion+dicount+germany-170375-my%20food.html',
    },
  },
  {
    title: 'Johannisbrotmehl',
    color: 'yellow',
    id: 'B40',
    nutrients: {
      description:
        'Der Johannisbrotbaum bzw. in Österreich Bockshörndlbaum, auch Karubenbaum oder Karobbaum genannt, ist eine Pflanzenart aus der Unterfamilie der Johannisbrotgewächse innerhalb der Familie der Hülsenfrüchtler. Diese Art kommt im Mittelmeerraum und Vorderasien vor.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Johannisbrotbaum',
      Kalorien: 202,
      Fettgehalt: '1,4 g',
      Kohlenhydrate: '7,3 g',
      Protein: '4,5 g',
      Quelle:
        'http://www.ernaehrung.de/lebensmittel/de/R465000/Johannisbrotkernmehl.php',
    },
  },
  {
    title: 'Jostabeere',
    color: 'yellow',
    id: 'B41',
    nutrients: {
      description:
        'Die Jostabeere oder Josta, in Süddeutschland oft Jochelbeere, in Österreich auch Rigatze oder Joglbeere, ist ein Beerenobst; es ist als Additionsbastard hauptsächlich aus den beiden Arten Schwarze Johannisbeere und Stachelbeere entstanden, auch die nordamerikanische Art Ribes divaricatum wurde eingekreuzt.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Jostabeere',
      Kalorien: 47,
      Fettgehalt: '0,2 g',
      Kohlenhydrate: '8,5 g',
      Protein: '0,9 g',
      Quelle: 'https://ernaehrungstagebuch-deluxe.de/kalorien/jostabeere/15309',
    },
  },
  {
    title: 'Kamut',
    color: 'yellow',
    id: 'B42',
    nutrients: {
      description:
        'Aus dem Englischen übersetzt-Khorasan-Weizen oder orientalischer Weizen, im Handel als Kamut bekannt, ist eine tetraploide Weizenart. Es ist ein alter Getreidetyp; Khorasan bezieht sich auf eine historische Region im heutigen Afghanistan und im Iran im Nordosten und in Teilen Zentralasiens.',
      descriptionLink: 'https://en.wikipedia.org/wiki/Khorasan_wheat',
      Kalorien: 346,
      Fettgehalt: '2,4 g',
      Kohlenhydrate: '61,7 g',
      Protein: '14,8 g',
      Quelle:
        'http://www.ernaehrung.de/lebensmittel/de/DAVERT168/KAMUT-Khorasan-Weizen,-Davert.php',
    },
  },
  {
    title: 'Karotten',
    color: 'yellow',
    id: 'B43',
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
  },
  {
    title: 'Kartoffeln, rot',
    color: 'yellow',
    id: 'B44',
    nutrients: {
      description:
        'Die Kartoffel, in Teilen Deutschlands, Österreichs und der Schweiz auch als Erdapfel, Erdbirne, Potaten oder Grundbirne und im restlichen deutschsprachigen Raum unter verschiedenen Regionalnamen wie Potacke bekannt, ist eine Nutzpflanze aus der Familie der Nachtschattengewächse.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Kartoffel',
      Kalorien: 70,
      Fettgehalt: '0,14 g',
      Kohlenhydrate: '15,9 g',
      Protein: '1,89 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170029/nutrients',
    },
  },
  {
    title: 'Kastanienmehl',
    color: 'yellow',
    id: 'B45',
    nutrients: {
      description:
        'Die Edelkastanie, auch Esskastanie genannt, ist der einzige europäische Vertreter der Gattung Kastanien aus der Familie der Buchengewächse. Die Edelkastanie ist ein sommergrüner Baum und bildet stärkereiche Nussfrüchte. In Süd- und Westeuropa wird sie wegen dieser essbaren Früchte und als Holzlieferant angebaut.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Edelkastanie',
      Kalorien: 325,
      Fettgehalt: '3 g',
      Kohlenhydrate: '64,1 g',
      Protein: '3,9 g',
      Quelle:
        'http://www.ernaehrung.de/lebensmittel/de/HANNE003/Kastanienmehl---glutenfrei,-Hanneforth.php',
    },
  },
  {
    title: 'Kichererbsen',
    color: 'yellow',
    id: 'B46',
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
    title: 'Kiwi',
    color: 'yellow',
    id: 'B47',
    nutrients: {
      description:
        'Als Kiwi, Kiwifrucht oder Chinesische Stachelbeere bezeichnet man die Beerenfrucht mehrerer Arten der Strahlengriffel. Ursprünglich stammen alle Kiwiarten aus Ostasien. Die Frucht bezeichnet man als "die Kiwi", wohingegen der Vogel "der Kiwi" ist.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Kiwifrucht',
      Kalorien: 61,
      Fettgehalt: '0,52 g',
      Kohlenhydrate: '14,66 g',
      Protein: '1,14 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/168153/nutrients',
    },
  },
  {
    title: 'Kokosblütenzucker',
    color: 'yellow',
    id: 'B48',
    nutrients: {
      description:
        'Aus dem Englischen übersetzt-Kokosnusszucker ist ein Palmzucker, der aus dem Saft des Blütenknospenstiels der Kokospalme hergestellt wird. Andere Arten von Palmzucker werden aus der Kithul-Palme, der Palmyra-Palme, der Dattelpalme, der Zuckerdattelpalme, der Sagopalme oder der Zuckerpalme hergestellt. ',
      descriptionLink: 'https://en.wikipedia.org/wiki/Coconut_sugar',
      Kalorien: 384,
      Fettgehalt: '0,5 g',
      Kohlenhydrate: '94 g',
      Protein: '1 g',
      Quelle:
        'https://www.bmi-rechner.net/kalorien-naehrwerte/kalorien-kokosbluetenzucker.htm',
    },
  },
  {
    title: 'Kürbis',
    color: 'yellow',
    id: 'B49',
    nutrients: {
      description:
        'Die Kürbisse bilden eine Pflanzengattung aus der Familie der Kürbisgewächse. Fünf Arten werden kultiviert: Cucurbita argyrosperma, Feigenblatt-Kürbis, Riesen-Kürbis, Moschus-Kürbis und Garten-Kürbis.',
      descriptionLink: 'https://de.wikipedia.org/wiki/K%C3%BCrbisse',
      Kalorien: 26,
      Fettgehalt: '0,1 g',
      Kohlenhydrate: '6,5 g',
      Protein: '1 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/168448/nutrients',
    },
  },
  {
    title: 'Kürbiskernöl',
    color: 'yellow',
    id: 'B50',
    nutrients: {
      description:
        'Aus dem Englischen übersetzt-Ein Kürbiskern, in Nordamerika auch als Pepita bekannt, ist der essbare Samen eines Kürbises oder bestimmter anderer Kürbissorten. Die Samen sind typischerweise flach und asymmetrisch oval, haben eine weiße äußere Schale und sind hellgrün gefärbt, nachdem die Schale entfernt wurde.',
      descriptionLink: 'https://en.wikipedia.org/wiki/Pumpkin_seed',
      Kalorien: 884,
      Fettgehalt: '100 g',
      Kohlenhydrate: '0 g',
      Protein: '0 g',
      Quelle:
        'http://www.ernaehrung.de/lebensmittel/de/Q250000/Kuerbiskernoel.php',
    },
  },
  {
    title: 'lactosefreie Milchprodukte',
    color: 'yellow',
    id: 'B51',
    nutrients: {
      description:
        'Lactose, Milchzucker oder Laktose ist ein in Milch enthaltener Zucker. Das Disaccharid besteht aus den beiden Molekülen D-Galactose und D-Glucose, die über eine β-1,4-glycosidische Bindung miteinander verbunden sind.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Lactose',
      Kalorien: 67,
      Fettgehalt: '3,8 g',
      Kohlenhydrate: '4,8 g',
      Protein: '3,3 g',
      Quelle: 'https://www.minusl.de/produkte/minusl-frische-milch-38/',
    },
  },
  {
    title: 'Limetten',
    color: 'yellow',
    id: 'B52',
    nutrients: {
      description:
        'Als Limette bezeichnet man mehrere Arten von Zitrusfrüchten.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Limette',
      Kalorien: 30,
      Fettgehalt: '0,2 g',
      Kohlenhydrate: '10,54 g',
      Protein: '0,7 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/168155/nutrients',
    },
  },
  {
    title: 'Mais',
    color: 'yellow',
    id: 'B53',
    nutrients: {
      description:
        'Mais, in Teilen Österreichs und Altbayerns auch Kukuruz genannt, ist eine Pflanzenart innerhalb der Familie der Süßgräser. Das Getreide stammt ursprünglich aus Mexiko und ist eine einhäusig getrenntgeschlechtige C₄-Pflanze. Wirtschaftlich bedeutend ist die Unterart Zea mays subsp. mays.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Mais',
      Kalorien: 365,
      Fettgehalt: '4,74 g',
      Kohlenhydrate: '74,26 g',
      Protein: '9,42 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170288/nutrients',
    },
  },
  {
    title: 'Maisnudeln',
    color: 'yellow',
    id: 'B54',
    nutrients: {
      description:
        'Mais, in Teilen Österreichs und Altbayerns auch Kukuruz genannt, ist eine Pflanzenart innerhalb der Familie der Süßgräser. Das Getreide stammt ursprünglich aus Mexiko und ist eine einhäusig getrenntgeschlechtige C₄-Pflanze. Wirtschaftlich bedeutend ist die Unterart Zea mays subsp. mays.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Mais',
      Kalorien: 350,
      Fettgehalt: '0,5 g',
      Kohlenhydrate: '76,8 g',
      Protein: '5,9 g',
      Quelle: 'https://www.yazio.com/de/kalorientabelle/maisnudeln-spar.html',
    },
  },
  {
    title: 'Mandarinen',
    color: 'yellow',
    id: 'B55',
    nutrients: {
      description:
        'Mandarine bezeichnet sowohl eine Zitruspflanze aus der Familie der Rautengewächse als auch die orangenfarbene Frucht derselben.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Mandarine',
      Kalorien: 53,
      Fettgehalt: '0,31 g',
      Kohlenhydrate: '13,34 g',
      Protein: '0,81 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169105/nutrients',
    },
  },
  {
    title: 'Mandelmus',
    color: 'yellow',
    id: 'B56',
    nutrients: {
      description:
        'Der Mandelbaum ist eine Pflanzenart der Gattung Prunus in der Familie der Rosengewächse. Seine Samen, die Mandeln, genannt auch Mandelkerne, werden als Nahrungsmittel und Kosmetikum genutzt.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Mandelbaum',
      Kalorien: 649,
      Fettgehalt: '57,4 g',
      Kohlenhydrate: '5 g',
      Protein: '23,4 g',
      Quelle: 'https://www.rapunzel.de/bio-produkt-mandelmus--130100.html',
    },
  },
  {
    title: 'Mango',
    color: 'yellow',
    id: 'B57',
    nutrients: {
      description:
        'Die Mango ist eine Pflanzenart aus der Gattung Mangos innerhalb der Familie Sumachgewächse. Sie wird häufig kultiviert, liefert Obst sowie Öl und wird als Heilpflanze verwendet.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Mango',
      Kalorien: 62,
      Fettgehalt: '0,4 g',
      Kohlenhydrate: '12,5 g',
      Protein: '0,6 g',
      Quelle:
        'https://www.plantura.garden/leserfragen-2/obst/mango-kalorien-und-naehrwerte',
    },
  },
  {
    title: 'Mango (getrocknet)',
    color: 'yellow',
    id: 'B58',
    nutrients: {
      description:
        'Die Mango ist eine Pflanzenart aus der Gattung Mangos innerhalb der Familie Sumachgewächse. Sie wird häufig kultiviert, liefert Obst sowie Öl und wird als Heilpflanze verwendet.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Mango',
      Kalorien: 319,
      Fettgehalt: '1,18 g',
      Kohlenhydrate: '78,58 g',
      Protein: '2,45 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/786611/nutrients',
    },
  },
  {
    title: 'Mate-Tee',
    color: 'yellow',
    id: 'B59',
    nutrients: {
      description:
        'Der Mate-Tee oder Mate, Matetee, Jesuiten-, Missions-, Paraguay- oder Paranatee, spanisch Yerba-Mate, portugiesisch Erva Mate, Chimarrão, ist ein Aufgussgetränk aus den kleingeschnittenen trockenen Blättern des Mate-Strauchs Ilex paraguariensis. Das Getränk ist in Südamerika verbreitet.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Mate-Tee',
      Kalorien: 0,
      Fettgehalt: '0 g',
      Kohlenhydrate: '0 g',
      Protein: '0,1 g',
      Quelle:
        'http://www.ernaehrung.de/lebensmittel/de/N611000/Mate-Tee-(Getraenk).php',
    },
  },
  {
    title: 'Mu-Err',
    color: 'yellow',
    id: 'B60',
    nutrients: {
      description:
        'Das Judasohr ist ein nahezu weltweit verbreiteter Pilz. Eine ähnliche Art mit ostasiatischer Verbreitung wird als Mu-Err, Black Fungus, Holunderpilz oder -schwamm, Ohrlappenpilz oder Wolkenohrenpilz bezeichnet, der in vielen Gerichten der asiatischen und speziell auch der chinesischen Küche verwendet wird.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Judasohr',
      Kalorien: 25,
      Fettgehalt: '0,1 g',
      Kohlenhydrate: '5,4 g',
      Protein: '0,9 g',
      Quelle: 'https://fddb.mobi/de/naturprodukt_mu-err_pilze_frisch.html',
    },
  },
  {
    title: 'Orange',
    color: 'yellow',
    id: 'B61',
    nutrients: {
      description:
        'Die Orange, nördlich der Speyerer Linie auch Apfelsine genannt, ist ein immergrüner Baum, im Speziellen wird auch dessen Frucht so genannt. Der gültige botanische Name der Orange ist Citrus × sinensis L., damit gehört sie zur Gattung der Zitruspflanzen in der Familie der Rautengewächse.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Orange_(Frucht)',
      Kalorien: 46,
      Fettgehalt: '0,21 g',
      Kohlenhydrate: '11,54 g',
      Protein: '0,7 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169918/nutrients',
    },
  },
  {
    title: 'Passionsfrucht/Maracuja',
    color: 'yellow',
    id: 'B62',
    nutrients: {
      description:
        'Passiflora edulis ist eine Art aus der zu den Passionsblumengewächsen zählenden Gattung der Passionsblumen. Das Art-Epitheton edulis bedeutet „essbar“. Innerhalb der Art werden verschiedene Sorten und Formen unterschieden, unter denen forma edulis und forma flavicarpa die wirtschaftlich größte Bedeutung haben.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Passiflora_edulis',
      Kalorien: 97,
      Fettgehalt: '0,7 g',
      Kohlenhydrate: '23,38 g',
      Protein: '2,2 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169108/nutrients',
    },
  },
  {
    title: 'Pastinaken',
    color: 'yellow',
    id: 'B63',
    nutrients: {
      description:
        'Der Pastinak, auch die Pastinake, ist eine Pflanzenart aus der Gattung der Pastinaken in der Familie der Doldenblütler. Als Wildform gilt Pastinaca sativa subsp. sativa var. pratensis; die Kulturform Gemüse-Pastinak wird als Pastinaca sativa subsp. sativa var. sativa bezeichnet.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Pastinak',
      Kalorien: 75,
      Fettgehalt: '0,3 g',
      Kohlenhydrate: '17,99 g',
      Protein: '1,2 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170417/nutrients',
    },
  },
  {
    title: 'Pfirsich',
    color: 'yellow',
    id: 'B64',
    nutrients: {
      description:
        'Der Pfirsich ist eine Pflanzenart aus der Gattung Prunus innerhalb der Familie der Rosengewächse. Seine Früchte werden Pfirsiche genannt und zählen zum Steinobst.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Pfirsich',
      Kalorien: 39,
      Fettgehalt: '0,25 g',
      Kohlenhydrate: '9,54 g',
      Protein: '0,91 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169928/nutrients',
    },
  },
  {
    title: 'Pilzmischung (tiefgekühlt)',
    color: 'yellow',
    id: 'B65',
    nutrients: {
      description:
        'Die Pilze bilden das dritte große Reich eukaryotischer Lebewesen neben den Tieren und den Pflanzen. Sie sind wie die Pflanzen, zu denen sie lange gerechnet wurden, sesshaft, können jedoch keine Photosynthese treiben.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Pilze',
      Kalorien: 22,
      Fettgehalt: '0,34 g',
      Kohlenhydrate: '3,26 g',
      Protein: '3,09 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169251/nutrients',
    },
  },
  {
    title: 'Quinoa',
    color: 'yellow',
    id: 'B66',
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
  },
  {
    title: 'Quitte (verarbeitet) Mus, Gelee',
    color: 'yellow',
    id: 'B67',
    nutrients: {
      description:
        'Die Quitte ist die einzige Pflanzenart der Gattung Cydonia und gehört zur Untertribus der Kernobstgewächse innerhalb der Familie der Rosengewächse. Sie wird als Obstbaum kultiviert.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Quitte',
      Kalorien: 57,
      Fettgehalt: '0,1 g',
      Kohlenhydrate: '15,3 g',
      Protein: '0,4 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/168163/nutrients',
    },
  },
  {
    title: 'Reginbrot reiner Roggen',
    color: 'yellow',
    id: 'B68',
    nutrients: {
      description:
        'Roggen ist eine in den gemäßigten Breiten verbreitete Getreideart aus der Familie der Süßgräser. Er liefert auch auf leichteren oder sandigen Böden und an kühleren oder feuchten Standorten noch gute Erträge. In Europa wird häufig Winterroggen angebaut, während Sommerroggen eine untergeordnete Bedeutung hat.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Roggen',
      Kalorien: 259,
      Fettgehalt: '3,3 g',
      Kohlenhydrate: '48,3 g',
      Protein: '8,5 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/172684/nutrients',
    },
  },
  {
    title: 'Reismilch',
    color: 'yellow',
    id: 'B69',
    nutrients: {
      description:
        'Reismilch ist eine Form der Getreidemilch. Sie wird aus Reis hergestellt und darf daher in der EU nicht als Milch verkauft werden, und wird daher u. a. als „Reis Drink“ vermarktet.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Reismilch',
      Kalorien: 47,
      Fettgehalt: '0,97 g',
      Kohlenhydrate: '9,17 g',
      Protein: '0,28 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/171942/nutrients',
    },
  },
  {
    title: 'Rind (Rücken und Filet, Bioqualität',
    color: 'yellow',
    id: 'B70',
    nutrients: {
      description:
        'Als Rindfleisch bezeichnet man im deutschsprachigen Raum allgemein das Fleisch verschiedener Hausrindrassen, das nach der Schlachtung von Tieren aus der Rinderproduktion erzeugt wird. In der Warenkunde wird auch das Fleisch von Wildrindern hinzugezählt, während dies in der Speisenlehre zum Wildfleisch gerechnet wird.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Rindfleisch',
      Kalorien: 250,
      Fettgehalt: '15,41 g',
      Kohlenhydrate: '0 g',
      Protein: '25,93 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/174032/nutrients',
    },
  },
  {
    title: 'roter Reis',
    color: 'yellow',
    id: 'B71',
    nutrients: {
      description:
        'Als Reis werden die Getreidekörner der Pflanzenarten Oryza sativa und Oryza glaberrima bezeichnet. Oryza sativa wird weltweit in vielen Ländern angebaut, Oryza glaberrima in Westafrika. Zur Gattung Reis gehören außer diesen beiden Reispflanzen noch weitere 17 Arten, die aber nicht domestiziert wurden.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Reis',
      Kalorien: 350,
      Fettgehalt: '1,7 g',
      Kohlenhydrate: '75 g',
      Protein: '7,5 g',
      Quelle:
        'http://www.ernaehrung.de/lebensmittel/de/DAVERT048/Roter-Reis,-Davert.php',
    },
  },
  {
    title: 'Rotwein',
    color: 'yellow',
    id: 'B72',
    nutrients: {
      description:
        'Rotwein ist ein aus blauen Weintrauben hergestellter Wein. Neben der Art der verwendeten Trauben unterscheidet er sich auch im Herstellungsprozess vom Weißwein oder Roséwein. Ein Rotwein entsteht durch Mazeration oder Digestion.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Rotwein',
      Kalorien: 85,
      Fettgehalt: '0 g',
      Kohlenhydrate: '2,61 g',
      Protein: '0,07 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/173190/nutrients',
    },
  },
  {
    title: 'Sahne',
    color: 'yellow',
    id: 'B73',
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
    title: 'Salami (Bio-Qualität)',
    color: 'yellow',
    id: 'B74',
    nutrients: {
      description:
        'Die Salami ist eine europäische Rohwurstsorte aus Schweinefleisch und anderen Fleischsorten.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Salami',
      Kalorien: 336,
      Fettgehalt: '25,9 g',
      Kohlenhydrate: '2,4 g',
      Protein: '21,85 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/172936/nutrients',
    },
  },
  {
    title: 'Sanddornsaft',
    color: 'yellow',
    id: 'B75',
    nutrients: {
      description:
        'Sanddorn, auch Fasanbeer, Haffdorn, Seedorn und häufig „Zitrone des Nordens“ genannt, ist eine Pflanzenart aus der Gattung der Sanddorne innerhalb der Familie der Ölweidengewächse. Der botanische Gattungsname Hippophae enthält die beiden griechischen Wörter hippos und phaes.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Sanddorn',
      Kalorien: 58,
      Fettgehalt: '0,9 g',
      Kohlenhydrate: '14 g',
      Protein: '0,1 g',
      Quelle:
        'https://www.yazio.com/de/kalorientabelle/sanddornsaft-libehna.html',
    },
  },
  {
    title: 'Schokolade (ab 90% Kakao-Anteil)',
    color: 'yellow',
    id: 'B76',
    nutrients: {
      description:
        'Bitterschokolade ist Schokolade mit hohem Kakaoanteil. Andere Bezeichnungen sind Feinherb, Edelbitter, Zartbitter, dunkle oder schwarze Schokolade.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Bitterschokolade',
      Kalorien: 592,
      Fettgehalt: '55 g',
      Kohlenhydrate: '14 g',
      Protein: '10 g',
      Quelle:
        'https://www.yazio.com/de/kalorientabelle/excellence-mild-90-cacao-lindt.html',
    },
  },
  {
    title: 'Senf (Dijon ohne Zucker)',
    color: 'yellow',
    id: 'B77',
    nutrients: {
      description:
        'Senf ist ein scharfes Gewürz, das aus den Samenkörnern des Weißen, Braunen und des Schwarzen Senfs hergestellt wird. Gebräuchlich sind sowohl reine Senfkörner, Senfpulver und vor allem die aus den mehr oder weniger fein gemahlenen Samen und weiteren Zutaten bereitete Würzpaste, genannt „Tafelsenf“ oder „Mostrich“.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Senf',
      Kalorien: 60,
      Fettgehalt: '3,34 g',
      Kohlenhydrate: '5,83 g',
      Protein: '3,74 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/172234/nutrients',
    },
  },
  {
    title: 'Shitake',
    color: 'yellow',
    id: 'B78',
    nutrients: {
      description:
        'Der Shiitake oder Shii-Take ist eine Pilzart aus der Familie der Omphalotaceae. Klassisch wurde er unter den Ritterlingsverwandten oder den Stielporlingsartigen eingereiht. Der japanische Name Shiitake bedeutet Pilz, der am Pasania-Baum wächst; der Pilz wird im Deutschen daher auch Pasaniapilz genannt.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Shiitake',
      Kalorien: 34,
      Fettgehalt: '0,49 g',
      Kohlenhydrate: '6,79 g',
      Protein: '2,24 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169242/nutrients',
    },
  },
  {
    title: 'Sojaprodukte (fermentiert, Sprossen)',
    color: 'yellow',
    id: 'B79',
    nutrients: {
      description:
        'Die Sojabohne, häufig auch einfach als Soja bezeichnet, ist eine Pflanzenart aus der Unterfamilie Schmetterlingsblütler innerhalb der Familie der Hülsenfrüchtler. Der Anbau der Nutzpflanze Sojabohne ist seit 3050 v. Chr. in Japan und zumindest seit 1550 v. Chr. in Korea und China als Nahrungspflanze nachgewiesen. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Sojabohne',
      Kalorien: 446,
      Fettgehalt: '19,94 g',
      Kohlenhydrate: '30,16 g',
      Protein: '36,49 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/174270/nutrients',
    },
  },
  {
    title: 'Truthahn- und Hähnchenbrust (ohne Haut, Bioqualität)',
    color: 'yellow',
    id: 'B80',
    nutrients: {
      description:
        'Das Truthuhn ist eine in Nordamerika beheimatete Art der Truthühner. Es wird auch Wildtruthuhn oder Wildes Truthuhn genannt und ist die größte Art der Hühnervögel. Bereits von indianischen Völkern wurde es domestiziert und ist somit die Stammform des Haustruthuhns, der Pute.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Truthuhn',
      Kalorien: 144,
      Fettgehalt: '5,64 g',
      Kohlenhydrate: '0,14 g',
      Protein: '21,64 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/171081/nutrients',
    },
  },
  {
    title: 'Waldstaudenkorn (Ur-Roggen)',
    color: 'yellow',
    id: 'B81',
    nutrients: {
      description:
        'Waldstaudenroggen ist eine alte Getreide-Sorte, die zur Pflanzenart Roggen aus der Familie der Süßgräser gehört.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Waldstaudenroggen',
      Kalorien: 162,
      Fettgehalt: '1 g',
      Kohlenhydrate: '30 g',
      Protein: '4 g',
      Quelle:
        'https://www.myfitnesspal.com/de/food/calories/zur-ck-zum-ursprung-waldstaudenroggen-209939081',
    },
  },
  {
    title: 'Wasabi-Meerettich',
    color: 'yellow',
    id: 'B82',
    nutrients: {
      description:
        'Wasabi, auch Japanischer Meerrettich oder Wassermeerrettich genannt, ist eine Pflanzenart aus der Familie der Kreuzblütengewächse. Die Rhizome werden in der japanischen Küche als scharfes Gewürz verwendet. Als Wildpflanze ist die Art in sumpfigem Gelände am Rand von Fließgewässern in Japan heimisch.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Wasabi',
      Kalorien: 83,
      Fettgehalt: '0,4 g',
      Kohlenhydrate: '14,1 g',
      Protein: '2,9 g',
      Quelle:
        'https://www.yazio.com/de/kalorientabelle/wasabi-japanischer-meerrettich-frisch.html',
    },
  },
  {
    title: 'Weiße Bohnen',
    color: 'yellow',
    id: 'B83',
    nutrients: {
      description:
        'Als Bohne bezeichnet man sowohl die runden, teils länglichen oder nierenförmigen Samen als auch die sie umgebende Hülse mitsamt den eingeschlossenen Samen und ebenfalls die gesamte solche Samen bildende Pflanze aus der Familie der Hülsenfrüchtler.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Bohne',
      Kalorien: 333,
      Fettgehalt: '0,85 g',
      Kohlenhydrate: '60,27 g',
      Protein: '23,36 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/175202/nutrients',
    },
  },
  {
    title: 'Weißwein',
    color: 'yellow',
    id: 'B84',
    nutrients: {
      description:
        'Weißwein ist ein Wein, der durch die alkoholische Gärung von Weintrauben entsteht. Die Farbe der Beerenhaut kann dabei sowohl hellgelb, gelbgrün, grün, grau, graurot und rot sein. Das Fruchtfleisch enthält nur wenig Farbstoffe.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Wei%C3%9Fwein',
      Kalorien: 82,
      Fettgehalt: '0 g',
      Kohlenhydrate: '2,6 g',
      Protein: '0,07 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/174837/nutrients',
    },
  },
  {
    title: 'Wild (freilaufend)',
    color: 'yellow',
    id: 'B86',
    nutrients: {
      description:
        'Wild, teilweise auch deutlicher als Jagdwild bezeichnet, ist ein Sammelbegriff für die im Zusammenhang mit Jagd relevanten Säugetiere und Vögel. Der Begriff „Wild“ grenzt sich damit gegen den des Wildtieres ab, der allgemein alle freilebenden Tiere umfasst.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Wild',
      Kalorien: 104,
      Fettgehalt: '1,88 g',
      Kohlenhydrate: '0 g',
      Protein: '21,78 g',
      Quelle:
        'https://xn--diten-vergleichen-rqb.de/naehrwert-tabelle/tabelle-wild.php',
    },
  },
  {
    title: 'Wildreis',
    color: 'yellow',
    id: 'B87',
    nutrients: {
      description:
        'Der Wasserreis ist eine Pflanzengattung innerhalb der Familie der Süßgräser. Die etwa vier Arten sind in Nordamerika und Ostasien verbreitet. Die Pflanzen wachsen oft bestandsbildend an Fluss-, See- und Teichufern. Die Früchte einiger Arten werden wie Reiskörner verwendet. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Wasserreis',
      Kalorien: 357,
      Fettgehalt: '1,08 g',
      Kohlenhydrate: '74,9 g',
      Protein: '14,73 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169726/nutrients',
    },
  },
  {
    title: 'Xylit/Xylitol (Birkenzucker)',
    color: 'yellow',
    id: 'B88',
    nutrients: {
      description:
        'Xylit ist ein Trivialname für ein Stereoisomer des Zuckeralkohols Pentanpentol. Als Lebensmittelzusatzstoff trägt es die Bezeichnung und dient als Zuckeraustauschstoff. Die Entdeckung geht auf den späteren Nobelpreisträger Emil Fischer zurück.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Xylit',
      Kalorien: 240,
      Fettgehalt: '0 g',
      Kohlenhydrate: '100 g',
      Protein: '0 g',
      Quelle:
        'https://www.bmi-rechner.net/kalorien-naehrwerte/kalorien-xylit-birkenzucker.htm',
    },
  },
  {
    title: 'Apfelsaft',
    color: 'red',
    id: 'C1',
    nutrients: {
      description:
        'Apfelsaft ist ein Fruchtsaft, der durch Pressung von Äpfeln gewonnen wird. Um 1 Liter Apfelsaft zu gewinnen, benötigt man etwa 1,3 kg Äpfel. Im großen Maßstab geschieht dies in Keltereien. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Apfelsaft',
      Kalorien: 46,
      Fettgehalt: '0,13 g',
      Kohlenhydrate: '11,3 g',
      Protein: '0,1 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/173933/nutrients',
    },
  },
  {
    title: 'Bananen',
    color: 'red',
    id: 'C2',
    nutrients: {
      description:
        'Aus dem Englischen übersetzt-Eine Banane ist eine längliche, essbare Frucht - botanisch eine Beere -, die von verschiedenen Arten großer krautiger Blütenpflanzen der Gattung Musa produziert wird. In einigen Ländern können zum Kochen verwendete Bananen als "Kochbananen" bezeichnet werden, was sie von Dessertbananen unterscheidet.',
      descriptionLink: 'https://en.wikipedia.org/wiki/Banana',
      Kalorien: 89,
      Fettgehalt: '0,33 g',
      Kohlenhydrate: '22,84 g',
      Protein: '1,09 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/173944/nutrients',
    },
  },
  {
    title: 'Bier',
    color: 'red',
    id: 'C3',
    nutrients: {
      description:
        'Bier ist ein Getränk, das durch Gärung aus stärkehaltigen Stoffen gewonnen und nicht destilliert wird. Bei der Herstellung des meist kohlensäurehaltigen Getränks werden oft Hopfen oder andere Würzstoffe zugesetzt, etwa Früchte, Kräuter wie Grut oder andere Gewürze. Wein und Bier entstehen durch Gärung von Zucker.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Bier',
      Kalorien: 43,
      Fettgehalt: '0 g',
      Kohlenhydrate: '3,55 g',
      Protein: '0,46 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/168746/nutrients',
    },
  },
  {
    title: 'Cashewnüsse',
    color: 'red',
    id: 'C4',
    nutrients: {
      description:
        'Der Cashewbaum, auch Kaschubaum, Acajoubaum oder Nierenbaum genannt, ist ein zur Familie der Sumachgewächse gehöriger Baum. Er wächst in tropischem Klima und trägt Cashewäpfel und Cashewkerne. Portugiesen entdeckten diesen Baum als erste Europäer im Nordosten Brasiliens.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Cashew',
      Kalorien: 533,
      Fettgehalt: '43,85 g',
      Kohlenhydrate: '30,19 g',
      Protein: '18,22 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170162/nutrients',
    },
  },
  {
    title: 'Chips',
    color: 'red',
    id: 'C5',
    nutrients: {
      description:
        'Kartoffelchips, kurz oft Chips, in der Schweiz auch Pommes-Chips, in Österreich früher, heute nur noch gelegentlich, Rohscheiben genannt, sind ein scheibenförmiges Nahrungsmittel. Sie bestehen aus dünnen, frittierten oder gebackenen Kartoffelscheiben.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Kartoffelchips',
      Kalorien: 536,
      Fettgehalt: '34,6 g',
      Kohlenhydrate: '52,9 g',
      Protein: '7 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170649/nutrients',
    },
  },
  {
    title: 'Couscous (Weizen)',
    color: 'red',
    id: 'C6',
    nutrients: {
      description:
        'Couscous, Cous Cous oder Kuskus ist ein Gericht der nordafrikanischen Küche. Die Grundlage besteht aus befeuchtetem und zu Kügelchen zerriebenem Grieß aus Hartweizen, Gerste oder Hirse. Der Grieß wird zum Garen nicht gekocht, sondern über kochendem Wasser oder einem kochenden Gericht gedämpft.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Couscous',
      Kalorien: 376,
      Fettgehalt: '0,64 g',
      Kohlenhydrate: '77,43 g',
      Protein: '0,64 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169699/nutrients',
    },
  },
  {
    title: 'Erdnüsse',
    color: 'red',
    id: 'C7',
    nutrients: {
      description:
        'Die Erdnuss ist eine Pflanzenart in der Unterfamilie der Schmetterlingsblütler innerhalb der Familie der Hülsenfrüchtler. Die Frucht der Erdnuss ist botanisch gesehen eine Hülsenfrucht, die sich entwicklungsgeschichtlich zur Nuss gewandelt hat.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Erdnuss',
      Kalorien: 567,
      Fettgehalt: '49,24 g',
      Kohlenhydrate: '16,13 g',
      Protein: '25,8 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/172430/nutrients',
    },
  },
  {
    title: 'Erdnusöl',
    color: 'red',
    id: 'C8',
    nutrients: {
      description:
        'Erdnussöl ist das aus den Samen der Erdnuss gepresste Pflanzenöl. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Erdnuss%C3%B6l',
      Kalorien: 884,
      Fettgehalt: '100 g',
      Kohlenhydrate: '0 g',
      Protein: '0 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/171410/nutrients',
    },
  },
  {
    title: 'Fastfood (Hamburger, Pizza)',
    color: 'red',
    id: 'C9',
    nutrients: {
      description:
        'Ein Hamburger ist ein warmes Schnell- oder Fertiggericht und der Standardartikel vieler Fast-Food-Ketten. Es besteht aus einem speziellen Brötchen, dem Bun, das mit verschiedenen Belägen, hauptsächlich jedoch einer gegrillten Scheibe aus Rinderhackfleisch, belegt wird. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Hamburger',
      Kalorien: 264,
      Fettgehalt: '10,09 g',
      Kohlenhydrate: '30,28 g',
      Protein: '12,92 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170717/nutrients',
    },
  },
  {
    title: 'Feigen',
    color: 'red',
    id: 'C10',
    nutrients: {
      description:
        'Die Echte Feige, kurz auch Feige genannt, ist eine Pflanzenart aus der Gattung der Feigen. Sie zählt zu den ältesten domestizierten Nutzpflanzen und wird vor allem im gesamten Mittelmeerraum angebaut. Sie hat wie alle Feigen eine komplexe Bestäubungsökologie.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Echte_Feige',
      Kalorien: 74,
      Fettgehalt: '0,3 g',
      Kohlenhydrate: '19,18 g',
      Protein: '0,75 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/173021/nutrients',
    },
  },
  {
    title: 'firsch gepresster Fruchsaft',
    color: 'red',
    id: 'C11',
    nutrients: {
      description:
        'Fruchtsaft, spezieller auch Obstsaft, ist ein aus Früchten einer oder mehrerer Fruchtarten gewonnenes flüssiges Erzeugnis, das für die menschliche Ernährung bestimmt ist. Der Fruchtgehalt muss 100 % betragen. Es wird zwischen Direktsaft und Fruchtsaft aus Konzentrat unterschieden.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Fruchtsaft',
      Kalorien: 46,
      Fettgehalt: '0,13 g',
      Kohlenhydrate: '11,3 g',
      Protein: '0,1 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/173933/nutrients',
    },
  },
  {
    title: 'frittierte Speisen',
    color: 'red',
    id: 'C12',
    nutrients: {
      description:
        'Frittieren oder Ausbacken ist eine dem Braten verwandte Garmethode, bei der Lebensmittel in heißem Fett schwimmend gebacken werden. Anders als beim Braten wird das Gargut beim Frittieren vor allem durch Wärmeleitung auf der ganzen Oberfläche erhitzt.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Frittieren',
      Kalorien: 312,
      Fettgehalt: '14,73 g',
      Kohlenhydrate: '41,44 g',
      Protein: '3,43 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170698/nutrients',
    },
  },
  {
    title: 'Fruchtnektar',
    color: 'red',
    id: 'C13',
    nutrients: {
      description:
        'Aus dem Englischen übersetzt-Nektare sind eine Art kohlensäurefreies Erfrischungsgetränk, das durch Verwirren des Fruchtfleisches hergestellt wird. In einigen Ländern unterscheidet die Getränkeindustrie Nektare von Getränken, die als "Saft" gekennzeichnet sind.',
      descriptionLink: 'https://en.wikipedia.org/wiki/Nectar_(drink)',
      Kalorien: 56,
      Fettgehalt: '0,45 g',
      Kohlenhydrate: '13,63 g',
      Protein: '0,17 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/171704/nutrients',
    },
  },
  {
    title: 'Fruchtsaftkonzentration',
    color: 'red',
    id: 'C14',
    nutrients: {
      description:
        'Ein Konzentrat, besonders bei Flüssigkeiten auch Essenz, ist ein Stoff – ein Pulver bzw. eine Flüssigkeit – ohne oder mit einem geringen Anteil an zusätzlichen Füllstoffen, im Falle einer Flüssigkeit von Lösungsmitteln. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Konzentrat',
      Kalorien: 0,
      Fettgehalt: '1,34 g',
      Kohlenhydrate: '53,19 g',
      Protein: '3,04 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/168217/nutrients',
    },
  },
  {
    title: 'Gerste',
    color: 'red',
    id: 'C15',
    nutrients: {
      description:
        'Die Gerste ist eine Pflanzenart aus der Gattung der Gersten innerhalb der Familie der Süßgräser. Sie ist eine der wichtigsten Getreide-Arten. Sie wurde vor ca. 10.000 Jahren im Gebiet des Fruchtbaren Halbmondes von der Wildgerste gewonnen und domestiziert. Mit „Gerste“ werden zudem die Samen der Pflanze bezeichnet.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Gerste',
      Kalorien: 354,
      Fettgehalt: '2,3 g',
      Kohlenhydrate: '73,48 g',
      Protein: '12,48 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170283/nutrients',
    },
  },
  {
    title: 'Gnochhi (Fertigprodukt)',
    color: 'red',
    id: 'C16',
    nutrients: {
      description:
        'Nocken oder Nockerln, italienisch Gnocchi, sind eiförmige oder spätzleähnlich geformte Teigmassen der süddeutschen und Alpenküche; sie sind aber auch in angrenzenden Ländern bekannt.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Nocken_(Gericht)',
      Kalorien: 154,
      Fettgehalt: '0,5 g',
      Kohlenhydrate: '31,9 g',
      Protein: '3,6 g',
      Quelle: 'https://www.yazio.com/de/kalorientabelle/gnocchi-nocken.html',
    },
  },
  {
    title: 'Hafer',
    color: 'red',
    id: 'C17',
    nutrients: {
      description:
        'Hafer ist eine Pflanzengattung in der Familie der Süßgräser. Eine Art, der Saat-Hafer, wird als Getreide angebaut und wie dessen Samen umgangssprachlich ebenfalls „Hafer“ genannt.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Hafer',
      Kalorien: 379,
      Fettgehalt: '6,52 g',
      Kohlenhydrate: '67,7 g',
      Protein: '13,15 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/785758/nutrients',
    },
  },
  {
    title: 'Hagebutte',
    color: 'red',
    id: 'C18',
    nutrients: {
      description:
        'Als Hagebutten bezeichnet man die ungiftigen Sammelnussfrüchte verschiedener Rosenarten, besonders der Hunds-Rose. Als Hagebutten werden landläufig auch die Wildrosen, oder Heckenrosen, selbst bezeichnet, an denen die Früchte wachsen.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Hagebutte',
      Kalorien: 162,
      Fettgehalt: '0,34 g',
      Kohlenhydrate: '38,22 g',
      Protein: '1,6 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/168998/nutrients',
    },
  },
  {
    title: 'Hähnchenbrust mit Haut',
    color: 'red',
    id: 'C19',
    nutrients: {
      description:
        'Das Haushuhn, kurz auch Huhn genannt, ist eine Zuchtform des Bankivahuhns, eines Wildhuhns aus Südostasien, und gehört zur Familie der Fasanenartigen. Landwirtschaftlich zählen sie zum Geflügel. Das männliche Haushuhn nennt man Hahn oder Gockel, den kastrierten Hahn Kapaun.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Haushuhn',
      Kalorien: 239,
      Fettgehalt: '13,6 g',
      Kohlenhydrate: '0 g',
      Protein: '27,3 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/171450/nutrients',
    },
  },
  {
    title: 'Hähnchenschlegel',
    color: 'red',
    id: 'C20',
    nutrients: {
      description:
        'Das Haushuhn, kurz auch Huhn genannt, ist eine Zuchtform des Bankivahuhns, eines Wildhuhns aus Südostasien, und gehört zur Familie der Fasanenartigen. Landwirtschaftlich zählen sie zum Geflügel. Das männliche Haushuhn nennt man Hahn oder Gockel, den kastrierten Hahn Kapaun.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Haushuhn',
      Kalorien: 178,
      Fettgehalt: '11,4 g',
      Kohlenhydrate: '0 g',
      Protein: '18,1 g',
      Quelle:
        'http://www.foodplaner.de/kalorientabelle-fleisch+++huehnerkeule+gebraten+selbst+gemacht-75618-my%20food.html',
    },
  },
  {
    title: 'Haselnüsse',
    color: 'red',
    id: 'C21',
    nutrients: {
      description:
        'Aus dem Englischen übersetzt-Die Haselnuss ist die Nuss der Hasel und umfasst daher alle Nüsse, die von Arten der Gattung Corylus stammen, insbesondere die Nüsse der Art Corylus avellana. Es ist auch als Cobnut oder Haselnuss je nach Art bekannt. Ein Kolben ist ungefähr kugelförmig bis oval, etwa 15 bis 25 mm lang und 10 bis 15 mm im Durchmesser. ',
      descriptionLink: 'https://en.wikipedia.org/wiki/Hazelnut',
      Kalorien: 628,
      Fettgehalt: '60,75 g',
      Kohlenhydrate: '16,7 g',
      Protein: '14,95 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170581/nutrients',
    },
  },
  {
    title: 'Honig',
    color: 'red',
    id: 'C22',
    nutrients: {
      description:
        'Honig ist ein von Honigbienen zur eigenen Nahrungsvorsorge erzeugtes und vom Menschen genutztes Lebensmittel aus dem Nektar von Blüten oder den zuckerhaltigen Ausscheidungsprodukten verschiedener Insekten, dem sogenannten Honigtau.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Honig',
      Kalorien: 304,
      Fettgehalt: '0 g',
      Kohlenhydrate: '82,4 g',
      Protein: '0,3 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169640/nutrients',
    },
  },
  {
    title: 'Joghurt (Kuh)',
    color: 'red',
    id: 'C23',
    nutrients: {
      description:
        'Joghurt ist ein Nahrungsmittel, das aus durch Milchsäurebakterien verdickter Milch hergestellt ist. Es wird als Naturjoghurt ohne Zusätze sowie mit Zusätzen wie Zucker oder Obstbestandteilen in verschiedenen Geschmacksrichtungen vermarktet. Naturjoghurt hat in seiner originären Substanz einen säuerlichen Geschmack.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Joghurt',
      Kalorien: 65,
      Fettgehalt: '3,5 g',
      Kohlenhydrate: '5 g',
      Protein: '3,4 g',
      Quelle:
        'https://www.bmi-rechner.net/kalorien-naehrwerte/kalorien-joghurt.htm',
    },
  },
  {
    title: 'Kaki',
    color: 'red',
    id: 'C24',
    nutrients: {
      description:
        'Aus dem Englischen übersetzt-Die Persimone ist die essbare Frucht einer Reihe von Baumarten der Gattung Diospyros. Am weitesten verbreitet ist die asiatische oder japanische Persimone Diospyros kaki. Diospyros gehört zur Familie der Ebenaceae, und eine Reihe von Nicht-Persimmon-Arten der Gattung werden für Ebenholz angebaut.',
      descriptionLink: 'https://en.wikipedia.org/wiki/Persimmon',
      Kalorien: 127,
      Fettgehalt: '0,4 g',
      Kohlenhydrate: '33,5 g',
      Protein: '0,8 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169943/nutrients',
    },
  },
  {
    title: 'Käse (Kuh)',
    color: 'red',
    id: 'C25',
    nutrients: {
      description:
        'Käse ist ein festes Milcherzeugnis, das – bis auf wenige Ausnahmen – durch Gerinnen aus einem Eiweißanteil der Milch, dem Kasein, gewonnen wird. Es ist das älteste Verfahren zur Haltbarmachung von Milch und deren Erzeugnissen. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/K%C3%A4se',
      Kalorien: 403,
      Fettgehalt: '33,31 g',
      Kohlenhydrate: '3,37 g',
      Protein: '22,87 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/173414/nutrients',
    },
  },
  {
    title: 'Kaugummi',
    color: 'red',
    id: 'C26',
    nutrients: {
      description:
        'Der oder das Kaugummi ist eine leicht verformbare, meist süß, manchmal auch scharf oder sauer schmeckende Masse in einer Portionsverpackung, auf der oft einige Stunden lang gekaut werden kann, ohne dass sie zerfällt.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Kaugummi',
      Kalorien: 360,
      Fettgehalt: '0,3 g',
      Kohlenhydrate: '96,7 g',
      Protein: '0 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/168771/nutrients',
    },
  },
  {
    title: 'Kirschen',
    color: 'red',
    id: 'C27',
    nutrients: {
      description:
        'Aus dem Englischen übersetzt-Eine Kirsche ist die Frucht vieler Pflanzen der Gattung Prunus und eine fleischige Steinfrucht. Kommerzielle Kirschen werden aus Sorten verschiedener Arten wie dem süßen Prunus avium und dem sauren Prunus cerasus gewonnen.',
      descriptionLink: 'https://en.wikipedia.org/wiki/Cherry',
      Kalorien: 50,
      Fettgehalt: '0,3 g',
      Kohlenhydrate: '12,18 g',
      Protein: '1 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/173954/nutrients',
    },
  },
  {
    title: 'lactosefreie Kuhmilchprodukte',
    color: 'red',
    id: 'C28',
    nutrients: {
      description:
        'Lactose, Milchzucker oder Laktose ist ein in Milch enthaltener Zucker. Das Disaccharid besteht aus den beiden Molekülen D-Galactose und D-Glucose, die über eine β-1,4-glycosidische Bindung miteinander verbunden sind.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Lactose',
      Kalorien: 67,
      Fettgehalt: '3,8 g',
      Kohlenhydrate: '4,8 g',
      Protein: '3,3 g',
      Quelle: 'https://www.minusl.de/produkte/minusl-frische-milch-38/',
    },
  },
  {
    title: 'Leberwurst',
    color: 'red',
    id: 'C29',
    nutrients: {
      description:
        'Als Leberwurst bezeichnet man in Deutschland unterschiedliche, meist streichfähige Kochwurstsorten. Der Name leitet sich von der Zutat Leber ab, welche mit anderen Lebensmitteln zu Wurst verarbeitet wird.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Leberwurst',
      Kalorien: 305,
      Fettgehalt: '25,45 g',
      Kohlenhydrate: '5,89 g',
      Protein: '12,38 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/174596/nutrients',
    },
  },
  {
    title: 'Limonaden',
    color: 'red',
    id: 'C30',
    nutrients: {
      description:
        'Die Limonade, umgangssprachlich verkürzt die oder das Limo, ist ein alkoholfreies, gesüßtes und meist mit Kohlensäure versetztes Erfrischungsgetränk mit oder ohne Fruchtauszügen auf der Basis von Wasser, das ausschließlich natürliche Zutaten enthalten darf.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Limonade',
      Kalorien: 40,
      Fettgehalt: '0,04 g',
      Kohlenhydrate: '10,42 g',
      Protein: '0,07 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/173217/nutrients',
    },
  },
  {
    title: 'Litschi',
    color: 'red',
    id: 'C31',
    nutrients: {
      description:
        'Der Litschibaum oder Litchibaum ist die einzige Art der Pflanzengattung Litchi innerhalb der Familie der Seifenbaumgewächse.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Litschibaum',
      Kalorien: 66,
      Fettgehalt: '0,44 g',
      Kohlenhydrate: '16,53 g',
      Protein: '0,83 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169086/nutrients',
    },
  },
  {
    title: 'Lupinenmehl',
    color: 'red',
    id: 'C32',
    nutrients: {
      description:
        'Die Lupinen, selten auch Wolfsbohne oder Feigbohne genannt, sind eine Pflanzengattung in der Unterfamilie der Schmetterlingsblütler innerhalb der Familie der Hülsenfrüchtler. Zur gleichen Familie gehören beispielsweise Erbse, Kichererbse und Erdnuss.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Lupinen',
      Kalorien: 342,
      Fettgehalt: '9,1 g',
      Kohlenhydrate: '9,5 g',
      Protein: '40 g',
      Quelle: 'https://www.rapunzel.de/bio-produkt-lupinenmehl--700985.html',
    },
  },
  {
    title: 'Malz',
    color: 'red',
    id: 'C33',
    nutrients: {
      description:
        'Malz ist kurz gekeimtes und wieder getrocknetes Getreide. Dieser Vorgang bildet und aktiviert Enzyme im Getreide, die z. B. für das Bierbrauen notwendig sind. Ein Teil der Stärke wird dabei in kleinere Moleküle zerlegt.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Malz',
      Kalorien: 281,
      Fettgehalt: '1 g',
      Kohlenhydrate: '63 g',
      Protein: '4 g',
      Quelle: 'https://www.naehrwertrechner.de/naehrwerte/L213111/Biomalz',
    },
  },
  {
    title: 'Margarine',
    color: 'red',
    id: 'C34',
    nutrients: {
      description:
        'Margarine, Kunstbutter oder Oleomargarin ist ein industriell hergestelltes Streichfett. Sie dient als Ersatz für Butter und Schmalz. Ihr gesundheitlicher Wert ist Gegenstand kontroverser Debatten.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Margarine',
      Kalorien: 717,
      Fettgehalt: '80,71 g',
      Kohlenhydrate: '0,7 g',
      Protein: '0,16 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/173585/nutrients',
    },
  },
  {
    title: 'Marmelade (fertig gekauft)',
    color: 'red',
    id: 'C35',
    nutrients: {
      description:
        'Marmelade ist die traditionelle Bezeichnung für einen Brotaufstrich, der aus mit Zucker eingekochten Früchten hergestellt wird, ohne dass Fruchtstücke im Fertigprodukt sichtbar bleiben. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Marmelade',
      Kalorien: 246,
      Fettgehalt: '0 g',
      Kohlenhydrate: '66,3 g',
      Protein: '0,3 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/168819/nutrients',
    },
  },
  {
    title: 'Milch (Kuh, laktosefrei)',
    color: 'red',
    id: 'C36',
    nutrients: {
      description:
        'Milch ist eine weiße, trübe Emulsion bzw. kolloidale Dispersion von Proteinen, Milchzucker und Milchfett in Wasser. Der Mensch nutzt die Milch vieler domestizierter Tiere als Nahrungsmittel, insbesondere als Getränk. Gebildet wird sie in den Milchdrüsen von Säugetieren, die damit ihre Neugeborenen nähren.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Milch',
      Kalorien: 0,
      Fettgehalt: ' g',
      Kohlenhydrate: ' g',
      Protein: ' g',
      Quelle: '',
    },
  },
  {
    title: 'Milch (Kuh)',
    color: 'red',
    id: 'C37',
    nutrients: {
      description:
        'Milch ist eine weiße, trübe Emulsion bzw. kolloidale Dispersion von Proteinen, Milchzucker und Milchfett in Wasser. Der Mensch nutzt die Milch vieler domestizierter Tiere als Nahrungsmittel, insbesondere als Getränk. Gebildet wird sie in den Milchdrüsen von Säugetieren, die damit ihre Neugeborenen nähren.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Milch',
      Kalorien: 61,
      Fettgehalt: '3,25 g',
      Kohlenhydrate: '4,8 g',
      Protein: '3,15 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/781084/nutrients',
    },
  },
  {
    title: 'Mirabellen',
    color: 'red',
    id: 'C38',
    nutrients: {
      description:
        'Die Mirabelle, auch als Gelbe Zwetschge bezeichnet, ist eine Unterart der Pflaume. Die Mirabelle wird von Laien oft mit der ihr in Größe und Gestalt ähnlich sehenden Kirschpflaume verwechselt.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Mirabelle',
      Kalorien: 67,
      Fettgehalt: '0,2 g',
      Kohlenhydrate: '14 g',
      Protein: '0,73 g',
      Quelle:
        'http://www.ernaehrung.de/lebensmittel/de/F224100/Mirabelle-roh.php',
    },
  },
  {
    title: 'Müsli',
    color: 'red',
    id: 'C39',
    nutrients: {
      description:
        'Müsli [ˈmyːsli] ist eine Zubereitung aus Haferflocken und weiteren Produkten auf Getreidebasis sowie Obst beziehungsweise Trockenobst, die mit Milch, Sojamilch, Joghurt oder Fruchtsaft üblicherweise zum Frühstück gegessen wird.',
      descriptionLink: 'https://de.wikipedia.org/wiki/M%C3%BCsli',
      Kalorien: 394,
      Fettgehalt: '2,93 g',
      Kohlenhydrate: '86,63 g',
      Protein: '6,01 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/173889/nutrients',
    },
  },
  {
    title: 'Nudeln (Weizen)',
    color: 'red',
    id: 'C40',
    nutrients: {
      description:
        'Nudel ist ein Oberbegriff für eine Vielfalt von gegarten Speisen aus einem Teig meist auf der Basis von gemahlenem Getreide, von denen ein großer Teil heute unter Teigwaren eingeordnet wird. Nudeln können verschiedenste Form und Größe aufweisen und mit sehr unterschiedlichen Zutaten hergestellt sein.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Nudel_(Lebensmittel)',
      Kalorien: 384,
      Fettgehalt: '4,44 g',
      Kohlenhydrate: '71,27 g',
      Protein: '14,16 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169755/nutrients',
    },
  },
  {
    title: 'Orangensaft',
    color: 'red',
    id: 'C41',
    nutrients: {
      description:
        'Orangensaft oder Apfelsinensaft ist ein Fruchtsaft, der durch Auspressen von Orangen hergestellt wird. In Deutschland wird er umgangssprachlich oft als O-Saft bezeichnet. Orangensaft ist der meistgetrunkene Saft der Welt und steht für 50 % des Gesamtkonsums an Fruchtsäften. Weltweit werden pro Jahr rund 12 Mrd.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Orangensaft',
      Kalorien: 45,
      Fettgehalt: '0,2 g',
      Kohlenhydrate: '10,4 g',
      Protein: '0,7 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169098/nutrients',
    },
  },
  {
    title: 'Pizza',
    color: 'red',
    id: 'C42',
    nutrients: {
      description:
        'Pizza ist ein vor dem Backen würzig belegtes Fladenbrot aus einfachem Hefeteig aus der italienischen Küche. Die heutige international verbreitete Variante mit Tomatensauce und Käse als Basis stammt vermutlich aus Neapel.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Pizza',
      Kalorien: 266,
      Fettgehalt: '9,69 g',
      Kohlenhydrate: '33,33 g',
      Protein: '11,39 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/173292/nutrients',
    },
  },
  {
    title: 'Quark (Kuh)',
    color: 'red',
    id: 'C43',
    nutrients: {
      description:
        'Quark, auch Weißkäse, österreichisch bzw. bairisch Topfen, süddeutsch/südost- und westösterreichisch Schotten, ist das aus der Milch durch Zugabe von Lab oder durch bakterielle Bildung von Milchsäure ausgefällte Milcheiweiß.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Quark_(Milchprodukt)',
      Kalorien: 159,
      Fettgehalt: '11,4 g',
      Kohlenhydrate: '2,6 g',
      Protein: '11,1 g',
      Quelle:
        'http://www.ernaehrung.de/lebensmittel/de/M713500/Quark-mind.-40-Fett-i.-Tr..php',
    },
  },
  {
    title: 'Reis',
    color: 'red',
    id: 'C44',
    nutrients: {
      description:
        'Als Reis werden die Getreidekörner der Pflanzenarten Oryza sativa und Oryza glaberrima bezeichnet. Oryza sativa wird weltweit in vielen Ländern angebaut, Oryza glaberrima in Westafrika. Zur Gattung Reis gehören außer diesen beiden Reispflanzen noch weitere 17 Arten, die aber nicht domestiziert wurden.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Reis',
      Kalorien: 360,
      Fettgehalt: '0,58 g',
      Kohlenhydrate: '79,84 g',
      Protein: '6,61 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169760/nutrients',
    },
  },
  {
    title: 'Roggen',
    color: 'red',
    id: 'C45',
    nutrients: {
      description:
        'Roggen ist eine in den gemäßigten Breiten verbreitete Getreideart aus der Familie der Süßgräser. Er liefert auch auf leichteren oder sandigen Böden und an kühleren oder feuchten Standorten noch gute Erträge. In Europa wird häufig Winterroggen angebaut, während Sommerroggen eine untergeordnete Bedeutung hat.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Roggen',
      Kalorien: 326,
      Fettgehalt: '1,7 g',
      Kohlenhydrate: '60,73 g',
      Protein: '9,5 g',
      Quelle: 'http://www.ernaehrung.de/lebensmittel/de/C120000/Roggen-roh.php',
    },
  },
  {
    title: 'Salami (keine-Bio-Qualität)',
    color: 'red',
    id: 'C46',
    nutrients: {
      description:
        'Die Salami ist eine europäische Rohwurstsorte aus Schweinefleisch und anderen Fleischsorten.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Salami',
      Kalorien: 336,
      Fettgehalt: '25,9 g',
      Kohlenhydrate: '2,4 g',
      Protein: '21,85 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/172936/nutrients',
    },
  },
  {
    title: 'Schinken',
    color: 'red',
    id: 'C47',
    nutrients: {
      description:
        'Schinken hat mehrere Bedeutungen. Das Wort bezeichnete ursprünglich das „Bein“ im Sinne von „Knochen“. Gemeinsam mit „Schenkel“ stammt es von der indoeuropäischen Wurzel [s]keng für „schief, krumm“ ab. Der Name der Krankheit Skoliose ist gleichen Ursprungs.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Schinken',
      Kalorien: 180,
      Fettgehalt: '11,15 g',
      Kohlenhydrate: '3,65 g',
      Protein: '16,3 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/172946/nutrients',
    },
  },
  {
    title: 'Schokocreme',
    color: 'red',
    id: 'C48',
    nutrients: {
      description:
        'Schokolade ist ein Lebens- und Genussmittel, dessen wesentliche Bestandteile Kakaoerzeugnisse und Zuckerarten, im Falle von Milchschokolade auch Milcherzeugnisse sind. Schokolade wird in reiner Form genossen und als Halbfertigprodukt weiterverarbeitet.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Schokolade',
      Kalorien: 541,
      Fettgehalt: '29,73 g',
      Kohlenhydrate: '62,16 g',
      Protein: '5,41 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/789138/nutrients',
    },
  },
  {
    title: 'Schokolade (weniger als 90% Kakao, Vollmich etc.',
    color: 'red',
    id: 'C49',
    nutrients: {
      description:
        'Schokolade ist ein Lebens- und Genussmittel, dessen wesentliche Bestandteile Kakaoerzeugnisse und Zuckerarten, im Falle von Milchschokolade auch Milcherzeugnisse sind. Schokolade wird in reiner Form genossen und als Halbfertigprodukt weiterverarbeitet.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Schokolade',
      Kalorien: 535,
      Fettgehalt: '29,66 g',
      Kohlenhydrate: '59,4 g',
      Protein: '7,65 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/167587/nutrients',
    },
  },
  {
    title: 'Schweinefleisch',
    color: 'red',
    id: 'C50',
    nutrients: {
      description:
        'Schweinefleisch ist ein Sammelbegriff für die zum Verzehr geeigneten Teile des Hausschweins. In Europa und Ostasien ist Schweinefleisch die am häufigsten gegessene Fleischart.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Schweinefleisch',
      Kalorien: 242,
      Fettgehalt: '13,92 g',
      Kohlenhydrate: '0 g',
      Protein: '27,32 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/167820/nutrients',
    },
  },
  {
    title: 'Softdrinks (Cola, Limonade, Energiegetränke, Sportgetränke)',
    color: 'red',
    id: 'C51',
    nutrients: {
      description:
        'Als Erfrischungsgetränke produziert die Lebensmittelindustrie verschiedene Kaltgetränke, die meist kohlensäurehaltig und süß-sauer aromatisiert sind.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Erfrischungsgetr%C3%A4nk',
      Kalorien: 41,
      Fettgehalt: '0 g',
      Kohlenhydrate: '10,58 g',
      Protein: '0 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/174851/nutrients',
    },
  },
  {
    title: 'Sojaprodukte (nicht fermentiert)',
    color: 'red',
    id: 'C52',
    nutrients: {
      description:
        'Die Sojabohne, häufig auch einfach als Soja bezeichnet, ist eine Pflanzenart aus der Unterfamilie Schmetterlingsblütler innerhalb der Familie der Hülsenfrüchtler. Der Anbau der Nutzpflanze Sojabohne ist seit 3050 v. Chr. in Japan und zumindest seit 1550 v. Chr. in Korea und China als Nahrungspflanze nachgewiesen.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Sojabohne',
      Kalorien: 446,
      Fettgehalt: '19,94 g',
      Kohlenhydrate: '30,16 g',
      Protein: '36,49 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/174270/nutrients',
    },
  },
  {
    title: 'Spirituosen',
    color: 'red',
    id: 'C53',
    nutrients: {
      description:
        'Liköre sind aromatische Spirituosen mit relativ hohem Zuckergehalt. Der Alkoholgehalt liegt normalerweise bei 15 bis 35 % Vol, es gibt aber auch stärkere und schwächere Liköre, zum Beispiel Chartreuse verte mit 55 % Vol oder Aperol mit 11 oder 15 % Vol. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Lik%C3%B6r',
      Kalorien: 250,
      Fettgehalt: '0 g',
      Kohlenhydrate: '0,1 g',
      Protein: '0 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/171919/nutrients',
    },
  },
  {
    title: 'Stevia-Produkte',
    color: 'red',
    id: 'C54',
    nutrients: {
      description:
        'Stevia ist ein aus der Pflanze Stevia rebaudiana gewonnenes Stoffgemisch, das als Süßstoff verwendet wird. Es besteht hauptsächlich aus Steviolglycosiden, wie dem Diterpenglycosid Steviosid, Rebaudiosid A und sieben bis zehn weiteren Steviolglycosiden. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Stevia',
      Kalorien: 371,
      Fettgehalt: '0 g',
      Kohlenhydrate: '92,8 g',
      Protein: '0 g',
      Quelle:
        'https://www.fitforfun.de/abnehmen/gesund-essen/stevia-was-bringt-der-neue-suessstoff_aid_12701.html',
    },
  },
  {
    title: 'Sushi-Reis',
    color: 'red',
    id: 'C55',
    nutrients: {
      description:
        'Sushi ist ein japanisches Gericht aus erkaltetem, gesäuertem Reis, ergänzt um Zutaten wie rohen oder geräucherten Fisch, rohe Meeresfrüchte, Nori, Gemüse, Tofuvarianten und Ei. Die Zusammenstellung variiert nach Art und Rezept. Sushi wird in mundgerechten Stücken optisch ansprechend zubereitet serviert.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Sushi',
      Kalorien: 113,
      Fettgehalt: '0,2 g',
      Kohlenhydrate: '25 g',
      Protein: '2,1 g',
      Quelle:
        'https://www.weightguard.de/kalorientabelle/17_getreide/1173_sushireis-gekocht-ohne-lzusatz.html',
    },
  },
  {
    title: 'Süßigkeiten',
    color: 'red',
    id: 'C56',
    nutrients: {
      description:
        'Eine Süßware, auch Süßigkeit, ist ein festes oder halbfestes Lebensmittel, das einen hohen Anteil an Zucker enthält. Sie zählt nicht zu den Grundnahrungsmitteln. Süßwaren werden üblicherweise von Zuckerbäckern hergestellt, Süßspeisen hingegen von Köchen bzw. von einem Pâtissier.',
      descriptionLink: 'https://de.wikipedia.org/wiki/S%C3%BC%C3%9Fware',
      Kalorien: 382,
      Fettgehalt: '8,1 g',
      Kohlenhydrate: '77 g',
      Protein: '4,6 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/167974/nutrients',
    },
  },
  {
    title: 'Süßkartoffeln',
    color: 'red',
    id: 'C57',
    nutrients: {
      description:
        'Die Süßkartoffel ist eine Nutzpflanze, die zu der Familie der Windengewächse in der Ordnung der Nachtschattenartigen gehört. Vor allem die unterirdischen Speicherwurzeln, teilweise die Laubblätter, werden als Nahrungsmittel genutzt.',
      descriptionLink: 'https://de.wikipedia.org/wiki/S%C3%BC%C3%9Fkartoffel',
      Kalorien: 86,
      Fettgehalt: '0,05 g',
      Kohlenhydrate: '20,12 g',
      Protein: '1,57 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/168482/nutrients',
    },
  },
  {
    title: 'Süßstoff',
    color: 'red',
    id: 'C58',
    nutrients: {
      description:
        'Süßstoffe sind synthetisch hergestellte oder natürliche Ersatzstoffe z. B. aus Süßstoffpflanzen für Zucker, die dessen Süßkraft erheblich übertreffen. Sie haben keinen oder einen sehr geringen physiologischen Brennwert.',
      descriptionLink: 'https://de.wikipedia.org/wiki/S%C3%BC%C3%9Fstoff',
      Kalorien: 347,
      Fettgehalt: '0 g',
      Kohlenhydrate: '84,77 g',
      Protein: '2,06 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170675/nutrients',
    },
  },
  {
    title: 'Trauben',
    color: 'red',
    id: 'C59',
    nutrients: {
      description:
        'Weintrauben sind die Fruchtstände der Weinreben, insbesondere die der Edlen Weinrebe. Die einzelnen Früchte des Fruchtstandes heißen Weinbeeren. Umgangssprachlich wird zwischen Beere und Traube nicht immer sauber unterschieden.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Weintraube',
      Kalorien: 67,
      Fettgehalt: '0,35 g',
      Kohlenhydrate: '17,15 g',
      Protein: '0,63 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/174682/nutrients',
    },
  },
  {
    title: 'Wassermelone',
    color: 'red',
    id: 'C60',
    nutrients: {
      description:
        'Die Wassermelone ist eine aus Afrika stammende Nutzpflanze, die heute weltweit in warmen Regionen angebaut wird. Die Wildform wird auch Tsamma-Melone genannt. Andere Bezeichnungen sind: Angurie, Arbuse, Pasteke und Zitrullengurke.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Wassermelone',
      Kalorien: 30,
      Fettgehalt: '0,15 g',
      Kohlenhydrate: '7,55 g',
      Protein: '0,61 g',
      Quelle: 'https://fdc.nal.usda.gov/fdc-app.html#/?query=ndbNumber:9326',
    },
  },
  {
    title: 'Weintrauben',
    color: 'red',
    id: 'C61',
    nutrients: {
      description:
        'Weintrauben sind die Fruchtstände der Weinreben, insbesondere die der Edlen Weinrebe. Die einzelnen Früchte des Fruchtstandes heißen Weinbeeren. Umgangssprachlich wird zwischen Beere und Traube nicht immer sauber unterschieden.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Weintraube',
      Kalorien: 67,
      Fettgehalt: '0,35 g',
      Kohlenhydrate: '17,15 g',
      Protein: '0,63 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/174682/nutrients',
    },
  },
  {
    title: 'Weißer Zucker',
    color: 'red',
    id: 'C62',
    nutrients: {
      description:
        'Als Zucker wird neben verschiedenen anderen Zuckerarten ein süß schmeckendes, kristallines Lebens- und Würzmittel bezeichnet, das aus Pflanzen gewonnen wird und hauptsächlich aus Saccharose besteht. Hauptquellen sind Zuckerrohr, Zuckerrübe und die transgene Zuckerrübe H7-1. 2018 wurden weltweit etwa 275 Mio.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Zucker',
      Kalorien: 387,
      Fettgehalt: '0 g',
      Kohlenhydrate: '99,98 g',
      Protein: '0 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169655/nutrients',
    },
  },
  {
    title: 'Weizen, Weizen-Produkte, Weißbrot',
    color: 'red',
    id: 'C63',
    nutrients: {
      description:
        'Als Weizen wird eine Reihe von Pflanzenarten der Süßgräser der Gattung Triticum bezeichnet. Als Getreide werden vor allem zwei Arten angebaut: Weichweizen und Hartweizen.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Weizen',
      Kalorien: 342,
      Fettgehalt: '1,71 g',
      Kohlenhydrate: '75,9 g',
      Protein: '11,31 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169719/nutrients',
    },
  },
  {
    title: 'Zucker, alternative Süßungsmittel',
    color: 'red',
    id: 'C64',
    nutrients: {
      description:
        'Als Zucker wird neben verschiedenen anderen Zuckerarten ein süß schmeckendes, kristallines Lebens- und Würzmittel bezeichnet, das aus Pflanzen gewonnen wird und hauptsächlich aus Saccharose besteht. Hauptquellen sind Zuckerrohr, Zuckerrübe und die transgene Zuckerrübe H7-1. 2018 wurden weltweit etwa 275 Mio.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Zucker',
      Kalorien: 387,
      Fettgehalt: '0 g',
      Kohlenhydrate: '99,98 g',
      Protein: '0 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169655/nutrients',
    },
  },
];

export const green = [
  {
    title: 'Agar Agar',
    color: 'green',
    id: 'A1',
    nutrients: {
      description:
        'Agar, auch Agar-Agar, Agartang, Japanischer Fischleim, Kanten, oder auch Chinesische oder Japanische Gelatine genannt, ist ein Galactose-Polymer, das Gallerte bilden kann. Die Grundeinheiten des Agars sind Agarose und sulfatiertes Agaropektin. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Agar',
      Kalorien: 26,
      Kohlenhydrate: '7 g',
      Protein: '0,5 g',
      Fettgehalt: '0 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169280/nutrients',
    },
  },
  {
    title: 'Algen',
    color: 'green',
    id: 'A2',
    nutrients: {
      description:
        'Algen, besonders Seetang, werden vor allem in Ostasien, Polynesien und in Küstenregionen Europas und Amerikas als Lebensmittel verzehrt. Je nach Art sind sie nahezu geschmacklos oder haben einen würzig-salzigen Geschmack. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Algen_(Lebensmittel)',
      Kalorien: 306,
      Fettgehalt: '0,3 g',
      Kohlenhydrate: '81 g',
      Protein: '6 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170090/nutrients',
    },
  },
  {
    title: 'Alpkäse',
    color: 'green',
    id: 'A3',
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
    title: 'Auberginen',
    color: 'green',
    id: 'A4',
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
    title: 'Austernpilz',
    color: 'green',
    id: 'A5',
    nutrients: {
      description:
        'Aus dem Englischen übersetzt-Pleurotus ostreatus, der Perlenausternpilz oder Baumausternpilz, ist ein gewöhnlicher Speisepilz. Es wurde erstmals im Ersten Weltkrieg in Deutschland als Subsistenzmaßnahme angebaut und wird heute weltweit kommerziell für Lebensmittel angebaut. Es ist verwandt mit dem ähnlich kultivierten Austernpilz.',
      descriptionLink: 'https://en.wikipedia.org/wiki/Pleurotus_ostreatus',
      Kalorien: 35,
      Fettgehalt: '0,2 g',
      Kohlenhydrate: '2,6 g',
      Protein: '3,5 g',
      Quelle: 'https://eatsmarter.de/lexikon/warenkunde/pilze/austernpilze',
    },
  },
  {
    title: 'Avocado',
    color: 'green',
    id: 'A6',
    nutrients: {
      description:
        'Die Avocado ist eine Pflanzenart aus der Familie der Lorbeergewächse. Die Frucht ist aus botanischer Sicht eine Beere und hat historisch viele andere, heute seltene Bezeichnungen wie etwa Avocadobirne, Alligatorbirne oder Butterfrucht erhalten.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Avocado',
      Kalorien: 160,
      Fettgehalt: '15 g',
      Kohlenhydrate: '9 g',
      Protein: '2 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/171705/nutrients',
    },
  },
  {
    title: 'Avocado-Öl',
    color: 'green',
    id: 'A7',
    nutrients: {
      description:
        'Avocadoöl ist ein Pflanzenöl, das aus den Früchten des Avocadobaums gewonnen wird. Es ist wie das Olivenöl ein Fruchtfleischöl, das Mesokarp enthält bis zu 30 % Fett, wobei der Fettgehalt der verschiedenen Kultivare stark schwankt.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Avocado%C3%B6l',
      Kalorien: 884,
      Fettgehalt: '100 g',
      Kohlenhydrate: '0 g',
      Protein: '0 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/173573/nutrients',
    },
  },
  {
    title: 'Bachforelle',
    color: 'green',
    id: 'A8',
    nutrients: {
      description:
        'Die Bachforelle ist ein zu den Salmoniden zählender Raubfisch und eine Unterart der Forelle. Sie ist der Leitfisch der Forellenregion und wird auch Flussforelle, Bergforelle oder Fario genannt. Kleinwüchsige Bachforellen in nahrungsarmen Gewässern werden als Steinforellen bezeichnet.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Bachforelle',
      Kalorien: 119,
      Fettgehalt: '3,46 g',
      Kohlenhydrate: '0 g',
      Protein: '20,48 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/175154/nutrients',
    },
  },
  {
    title: 'Bambussprossen',
    color: 'green',
    id: 'A9',
    nutrients: {
      description:
        'Aus dem Englischen übersetzt-Bambussprossen oder Bambussprossen sind die essbaren Triebe vieler Bambusarten, einschließlich Bambusa vulgaris und Phyllostachys edulis. Sie werden als Gemüse in zahlreichen asiatischen Gerichten und Brühen verwendet.',
      descriptionLink: 'https://en.wikipedia.org/wiki/Bamboo_shoot',
      Kalorien: 27,
      Fettgehalt: '0,3 g',
      Kohlenhydrate: '5 g',
      Protein: '2,6 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169210/nutrients',
    },
  },
  {
    title: 'Bataviasalat',
    color: 'green',
    id: 'A10',
    nutrients: {
      description:
        'Als Eisbergsalat, auch Eissalat, werden mehrere Sorten des Gartensalats (Lactuca sativa var. capitata nidus tenerimma) mit fest geschlossenen Köpfen bezeichnet (Kopfsalat). Sie gehören zusammen mit dem Bataviasalat, einer älteren Form mit nach oben geöffneten Köpfen, zur Crisphead-Gruppe.[1] Die Sprossachse ist stark gestaucht, die Blätter überlappen sich und bilden einen dichten, rundlichen „Kopf“. Verzehrt werden beim Eisbergsalat die inneren Blätter.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Eisbergsalat#Geschichtef',
      Kalorien: 14,
      Fettgehalt: '0,14 g',
      Kohlenhydrate: '2,97 g',
      Protein: '0,9 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169248/nutrients',
    },
  },
  {
    title: 'Bio-Eier',
    color: 'green',
    id: 'A11',
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
    title: 'Blumenkohl',
    color: 'green',
    id: 'A12',
    nutrients: {
      description:
        'Blumenkohl, auch Karfiol, Käsekohl, Blütenkohl, Traubenkohl, Minarett-Kohl oder Italienischer Kohl genannt, ist eine Zuchtsorte des Gemüsekohls mit fleischigen, in einem Kopf zusammenstehenden Blütensprossen, die als Gemüse gegessen werden.',
      descriptionLink: 'https://de.wikipedia.org/wiki/H%C3%BChnerei',
      Kalorien: 25,
      Fettgehalt: '0,3 g',
      Kohlenhydrate: '5 g',
      Protein: '1,9 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169986/nutrients',
    },
  },
  {
    title: 'Braunhirse (wild)',
    color: 'green',
    id: 'A13',
    nutrients: {
      description:
        'Braunhirse ist die rotorange Form der Rispenhirse aus der Gattung Rispenhirsen innerhalb der Familie der Süßgräser. Andere Trivialnamen für das Spelzgetreide Braunhirse sind Rothirse oder im Englischen Red Millet, Common Millet, Proso Millet.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Braunhirse',
      Kalorien: 315,
      Fettgehalt: '2,6 g',
      Kohlenhydrate: '64,2 g',
      Protein: '8,6 g',
      Quelle:
        'https://www.yazio.com/de/kalorientabelle/braunhirse-fein-gemahlen-himmelbauer.html',
    },
  },
  {
    title: 'Brokkoli',
    color: 'green',
    id: 'A14',
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
  {
    title: 'Brombeeren',
    color: 'green',
    id: 'A15',
    nutrients: {
      description:
        'Die Brombeeren sind eine Sektion aus der umfangreichen und weltweit verbreiteten Pflanzengattung Rubus innerhalb der Familie der Rosengewächse. Die Sektion umfasst mehrere tausend Arten, allein in Europa wurden mehr als 2000 Arten beschrieben. Die Früchte werden als Obst verwendet.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Brombeeren',
      Kalorien: 43,
      Fettgehalt: '0,5 g',
      Kohlenhydrate: '10 g',
      Protein: '1,4 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/173946/nutrients',
    },
  },
  {
    title: 'Brunnenkresse',
    color: 'green',
    id: 'A16',
    nutrients: {
      description:
        'Die Echte Brunnenkresse oder Brunnenkresse, auch Wasserkresse genannt, ist eine als Gemüse verwendete Pflanzenart aus der Gattung der Brunnenkressen der Kreuzblütengewächse. Ihr Name ist in Bezug auf ihren Standort abgeleitet von mittelhochdeutsch brunne.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Echte_Brunnenkresse',
      Kalorien: 11,
      Fettgehalt: '0,1 g',
      Kohlenhydrate: '1,3 g',
      Protein: '2,3 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170068/nutrients',
    },
  },
  {
    title: 'Buchweizenmehl',
    color: 'green',
    id: 'A17',
    nutrients: {
      description:
        'Der Echte Buchweizen, auch Gemeiner Buchweizen, ist eine Pflanzenart aus der Gattung Buchweizen in der Familie der Knöterichgewächse. Manchmal wird er auch in die Gattung Polygonum eingeordnet. Buchweizen ist ein Pseudogetreide.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Echter_Buchweizen',
      Kalorien: 335,
      Fettgehalt: '3,1 g',
      Kohlenhydrate: '70,59 g',
      Protein: '12,62 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170687/nutrients',
    },
  },
  {
    title: 'Champignos',
    color: 'green',
    id: 'A18',
    nutrients: {
      description:
        'Die Champignons, zu deutsch auch Egerlinge oder Angerlinge, sind eine Pilzgattung aus der Familie der Champignonverwandten. Die Typusart ist der Wiesen-Champignon.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Champignons',
      Kalorien: 22,
      Fettgehalt: '0,3 g',
      Kohlenhydrate: '3,3 g',
      Protein: '3,1 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169251/nutrients',
    },
  },
  {
    title: 'Chicoree',
    color: 'green',
    id: 'A19',
    nutrients: {
      description:
        'Chicorée gehören zur Varietät Cichorium intybus var. foliosum der Art Gemeine Wegwarte. Sie gehören zur Familie der Korbblütler. Chicorée bildet eine Rübe und eine dem Boden aufliegende Blattrosette.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Chicor%C3%A9e',
      Kalorien: 23,
      Fettgehalt: '0,3 g',
      Kohlenhydrate: '4,7 g',
      Protein: '1,7 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169992/nutrients',
    },
  },
  {
    title: 'Chinakohl',
    color: 'green',
    id: 'A20',
    nutrients: {
      description:
        'Chinakohl, auch Pekingkohl, Japankohl, Selleriekohl genannt, ist eine Gemüsepflanze. Chinakohl bildet einen festen, ovalen bis schmal zylindrischen Kopf mit einem Gewicht von ca. 1–3 kg. Seine Blätter sind meist gelbgrün und haben breite, weiße, leicht gekrauste Blattrippen. Von Chinakohl gibt es viele Cultivare.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Chinakohl',
      Kalorien: 12,
      Fettgehalt: '0,2 g',
      Kohlenhydrate: '2,2 g',
      Protein: '1,1 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/168572/nutrients',
    },
  },
  {
    title: 'Couscous (Buchweizen)',
    color: 'green',
    id: 'A21',
    nutrients: {
      description:
        'Couscous, Cous Cous oder Kuskus ist ein Gericht der nordafrikanischen Küche. Die Grundlage besteht aus befeuchtetem und zu Kügelchen zerriebenem Grieß aus Hartweizen, Gerste oder Hirse. Der Grieß wird zum Garen nicht gekocht, sondern über kochendem Wasser oder einem kochenden Gericht gedämpft.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Couscous',
      Kalorien: 335,
      Fettgehalt: '3,1 g',
      Kohlenhydrate: '70,59 g',
      Protein: '12,62 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170687/nutrients',
    },
  },
  {
    title: 'Couscous (Hirse)',
    color: 'green',
    id: 'A22',
    nutrients: {
      description:
        'Couscous, Cous Cous oder Kuskus ist ein Gericht der nordafrikanischen Küche. Die Grundlage besteht aus befeuchtetem und zu Kügelchen zerriebenem Grieß aus Hartweizen, Gerste oder Hirse. Der Grieß wird zum Garen nicht gekocht, sondern über kochendem Wasser oder einem kochenden Gericht gedämpft.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Couscous',
      Kalorien: 378,
      Fettgehalt: '4,22 g',
      Kohlenhydrate: '72,85 g',
      Protein: '11,02 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169702/nutrients',
    },
  },
  {
    title: 'Dinkelgras',
    color: 'green',
    id: 'A23',
    nutrients: {
      description:
        'Dinkelgras zählt zu den dunkelgrünen Blattgemüsen und zeichnet sich durch eine ausgewogene Kombination an wertvollen Inhaltsstoffen aus.',
      descriptionLink: 'https://de.wikipedia.org',
      Kalorien: 283,
      Fettgehalt: '4,7 g',
      Kohlenhydrate: '26 g',
      Protein: '18 g',
      Quelle:
        'https://www.sanos-online.de/de/shop/dinkelgras/bio-dinkelgras-pulver,-dose,-100-g-detail',
    },
  },
  {
    title: 'Eichblattsalat',
    color: 'green',
    id: 'A24',
    nutrients: {
      description:
        'Schnittsalat, Pflücksalat oder Blattsalat ist eine Sorte des Gartensalats, ein Blattgemüse, das in frischem Zustand unerhitzt gegessen wird.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Schnittsalat',
      Kalorien: 15,
      Fettgehalt: '0,15 g',
      Kohlenhydrate: '2,87 g',
      Protein: '1,36 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169249/nutrients',
    },
  },
  {
    title: 'Eisbergsalat',
    color: 'green',
    id: 'A25',
    nutrients: {
      description:
        'Als Eisbergsalat, auch Eissalat, werden mehrere Sorten des Gartensalats mit fest geschlossenen Köpfen bezeichnet. Sie gehören zusammen mit dem Bataviasalat, einer älteren Form mit nach oben geöffneten Köpfen, zur Crisphead-Gruppe.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Eisbergsalat',
      Kalorien: 14,
      Fettgehalt: '0,1 g',
      Kohlenhydrate: '3 g',
      Protein: '0,9 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169248/nutrients',
    },
  },
  {
    title: 'Endivien',
    color: 'green',
    id: 'A26',
    nutrients: {
      description:
        'BeschreibungDie Endivie gehört zur Gattung der Wegwarten und ist ein typischer Spätsommersalat. Sie wächst in humusreichen Böden in sonniger Lage und hat einen mittleren Nährstoffbedarf. Die Endivie wurde durch den Verein zur Erhaltung der Nutzpflanzenvielfalt e.V. zum „Gemüse des Jahres“ 2005 in Deutschland gewählt.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Endivie',
      Kalorien: 17,
      Fettgehalt: '0,2 g',
      Kohlenhydrate: '3,35 g',
      Protein: '1,25 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/168412/nutrients',
    },
  },
  {
    title: 'Erdmandelflocken',
    color: 'green',
    id: 'A27',
    nutrients: {
      description:
        'Die Erdmandel, auch als Tigernuss bekannt, ist eine Pflanzenart der Gattung Zypergräser in der Familie der Sauergrasgewächse. Sie ist in den Tropen und Subtropen bis nach Nordamerika beheimatet. Als historischer deutschsprachiger Trivialname ist auch die Bezeichnung Erdnuss belegt.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Erdmandel',
      Kalorien: 400,
      Fettgehalt: '23,33 g',
      Kohlenhydrate: '63,33 g',
      Protein: '6,67 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/501475/nutrients',
    },
  },
  {
    title: 'Feldsalat',
    color: 'green',
    id: 'A28',
    nutrients: {
      description:
        'Der Gewöhnliche Feldsalat, österreichisch Vogerlsalat, schweizerisch Nüsslisalat, auch Ackersalat, Mausohrsalat, Nüsschen, Nüssler, Schafmäulchen, Sonnewirbele und Rapunzel genannt, ist eine Pflanzenart der Gattung Feldsalat und gehört zur Unterfamilie der Baldriangewächse.',
      descriptionLink:
        'https://de.wikipedia.org/wiki/Gew%C3%B6hnlicher_Feldsalat',
      Kalorien: 11,
      Fettgehalt: '0,2 g',
      Kohlenhydrate: '2 g',
      Protein: '1,1 g',
      Quelle: 'http://www.fitbit.com/foods/Feldsalat+roh/2631626',
    },
  },
  {
    title: 'Fenchel',
    color: 'green',
    id: 'A29',
    nutrients: {
      description:
        'Der Fenchel ist die einzige Pflanzenart der Gattung Foeniculum innerhalb der Familie der Doldenblütler. Es ist eine heute weltweit verbreitete Gemüse-, Gewürz- und Heilpflanze. Eine alte deutsche Bezeichnung für mehrere würzige Doldenblütler ist Köppernickel. Fenchel wurde zur Arzneipflanze des Jahres 2009 gekürt. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Fenchel',
      Kalorien: 31,
      Fettgehalt: '0,2 g',
      Kohlenhydrate: '7 g',
      Protein: '1,2 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169385/nutrients',
    },
  },
  {
    title: 'Galactose',
    color: 'green',
    id: 'A30',
    nutrients: {
      description:
        'Die Galactose, kurz Gal, auch Galaktose oder auch Schleimzucker, ist eine natürlich vorkommende chemische Verbindung aus der Gruppe der Monosaccharide. Galactose kommt z.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Galactose',
      Kalorien: 400,
      Fettgehalt: '0 g',
      Kohlenhydrate: '100 g',
      Protein: '0 g',
      Quelle:
        'https://www.medpex.de/leistungssteigerung/d-galactose-pulver-p11644982?ai=350&gclid=Cj0KCQjwzZj2BRDVARIsABs3l9KsYNx4bJKn-3jfple70HH3OCuMC2XXeAeciedfq-UPMcof4W0i8AQaAjrGEALw_wcB',
    },
  },
  {
    title: 'Galgant',
    color: 'green',
    id: 'A31',
    nutrients: {
      description:
        'Der Echte Galgant, auch Galgantwurzel, Kleiner Galgant, Galgant oder Siam-Galgant genannt, ist eine Pflanzenart, die zur Familie der Ingwergewächse gehört. Er wird als Gewürz- und Heilpflanze verwendet und ist eine von vier ingwerartigen Pflanzen, die als Galgant bezeichnet werden.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Echter_Galgant',
      Kalorien: 50,
      Fettgehalt: '1 g',
      Kohlenhydrate: '8 g',
      Protein: '1 g',
      Quelle: 'https://eatsmarter.de/lexikon/warenkunde/gewuerze/galgant',
    },
  },
  {
    title: 'Ghee-Butter',
    color: 'green',
    id: 'A32',
    nutrients: {
      description:
        'Ghee ist ein dem Butterschmalz verwandtes Produkt und gehört in der indischen und pakistanischen Küche zu den wichtigsten Speisefetten. Es handelt sich dabei um Fett, welches in der Regel aus Butter durch verschiedene Verfahren gewonnen wird.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Ghee',
      Kalorien: 897,
      Fettgehalt: '99 g',
      Kohlenhydrate: '0,5 g',
      Protein: '0,2 g',
      Quelle: 'https://fddb.mobi/de/bioland_ghee_geklaerte_butter.html',
    },
  },
  {
    title: 'Grapefruit',
    color: 'green',
    id: 'A33',
    nutrients: {
      description:
        'Die Grapefruit, selten auch Adamsapfel oder Paradiesapfel genannt, ist die Frucht des Grapefruitbaumes, einer Zitruspflanze, die ein subtropischer Baum aus der Familie der Rautengewächse ist. Sie ist eine Kreuzung, die aus der Orange und Pampelmuse entstanden ist.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Grapefruit',
      Kalorien: 32,
      Fettgehalt: '0,1 g',
      Kohlenhydrate: '8,08 g',
      Protein: '0,63 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/786546/nutrients',
    },
  },
  {
    title: 'Grüne Bohnen',
    color: 'green',
    id: 'A34',
    nutrients: {
      description:
        'BeschreibungDie Gartenbohne, auch Grüne Bohne, Schnittbohne oder österreichisch Fisole, ist eine Pflanzenart aus der Unterfamilie der Schmetterlingsblütler. Sie ist in Deutschland fast immer mit dem Ausdruck „Bohne“ gemeint, der sich aber auch auf viele andere Nutzpflanzenarten beziehen kann.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Gartenbohne',
      Kalorien: 31,
      Fettgehalt: '0,22 g',
      Kohlenhydrate: '6,97 g',
      Protein: '1,83 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169961/nutrients',
    },
  },
  {
    title: 'Gurken',
    color: 'green',
    id: 'A35',
    nutrients: {
      description:
        'Die Gurke, auch als Kukumer und Gartengurke bezeichnet, ist eine Art der Gattung Gurken aus der Familie der Kürbisgewächse. Sie gehört zu den wirtschaftlich bedeutendsten Gemüsearten.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Gurke',
      Kalorien: 12,
      Fettgehalt: '0,16 g',
      Kohlenhydrate: '2,16 g',
      Protein: '0,59 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/787791/nutrients',
    },
  },
  {
    title: 'Hafergras',
    color: 'green',
    id: 'A36',
    nutrients: {
      description:
        'Die Wald-Trespe, auch genauer Späte Wald-Trespe, Hafergras, Wildhafer oder Wilde Waldtrespe genannt, ist eine formenreiche Pflanzenart aus der Gattung Trespen innerhalb der Familie der Süßgräser.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Wald-Trespe',
      Kalorien: 310,
      Fettgehalt: '5,4 g',
      Kohlenhydrate: '17,6 g',
      Protein: '31,9 g',
      Quelle:
        'https://www.piowald.com/superfoods/bio-hafergras/263/bio-hafergras-250g-pulver?c=271',
    },
  },
  {
    title: 'Hafermilch',
    color: 'green',
    id: 'A37',
    nutrients: {
      description:
        'Hafermilch ist eine Form der Getreidemilch aus Saat-Hafer. „Hafermilch“ ist hierbei eine umgangssprachliche, keine offizielle Bezeichnung, denn Milchersatz darf in der EU nicht mit der Bezeichnung Milch in Verkehr gebracht werden.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Hafermilch',
      Kalorien: 46,
      Fettgehalt: '1,2 g',
      Kohlenhydrate: '7,8 g',
      Protein: '0,9 g',
      Quelle:
        'https://eatsmarter.de/ernaehrung/wie-gesund-ist/hafermilch-kalorien-und-naehrwerte',
    },
  },
  {
    title: 'Hanföl',
    color: 'green',
    id: 'A38',
    nutrients: {
      description:
        'Hanföl ist ein fettes Pflanzenöl, das aus den Samen des Nutzhanfs gewonnen wird. Es wird oft mit anderen öligen Hanfprodukten verwechselt, von denen es abgegrenzt werden muss. Hanföl ist ein Speiseöl und darf daher nicht mit dem ätherischen Hanföl oder dem Haschischöl verwechselt werden.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Hanf%C3%B6l',
      Kalorien: 897,
      Fettgehalt: '100 g',
      Kohlenhydrate: '0 g',
      Protein: '0 g',
      Quelle: 'https://oelerini.com/hanfoel',
    },
  },
  {
    title: 'Hanfsamen',
    color: 'green',
    id: 'A39',
    nutrients: {
      description:
        'Hanf ist eine Pflanzengattung innerhalb der Familie der Hanfgewächse. Hanf zählt zu den ältesten Nutzpflanzen der Erde. Die einzelnen Bestandteile der Pflanze werden ungenauerweise ebenfalls als Hanf bezeichnet. Aus diesen Pflanzenteilen können jeweils sehr verschiedene Produkte hergestellt werden: Seile, Speiseöl, ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Hanf',
      Kalorien: 533,
      Fettgehalt: '48,75 g',
      Kohlenhydrate: '8,67 g',
      Protein: '31,56 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170148/nutrients',
    },
  },
  {
    title: 'Heidelbeeren',
    color: 'green',
    id: 'A40',
    nutrients: {
      description:
        'Die Heidelbeere ist eine Art aus der Gattung der Heidelbeeren in der Familie der Heidekrautgewächse. Ihre Verwendung als Beerenobst bzw. Waldfrucht färbt aufgrund des dunklen Fruchtfleisches Zähne und Zunge blau.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Heidelbeere',
      Kalorien: 57,
      Fettgehalt: '0,3 g',
      Kohlenhydrate: '14 g',
      Protein: '0,7 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/171711/nutrients',
    },
  },
  {
    title: 'Heilbutt',
    color: 'green',
    id: 'A41',
    nutrients: {
      description:
        'Der Heilbutt oder Weißer Heilbutt kommt im Nordatlantik vor und ist mit bis zu 300 cm Körperlänge und bis zu 400 kg Gewicht die größte Art der Plattfische. Ein Heilbutt kann bis zu 50 Jahre alt werden. Trotz seines Namens zählt diese Gattung nicht zu der Familie der Butte, sondern zu den Schollen.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Heilbutt',
      Kalorien: 95,
      Fettgehalt: '1,6 g',
      Kohlenhydrate: ' g',
      Protein: '20 g',
      Quelle: 'https://eatsmarter.de/lexikon/warenkunde/fisch/weisser-heilbutt',
    },
  },
  {
    title: 'Hering',
    color: 'green',
    id: 'A42',
    nutrients: {
      description:
        'Der Atlantische Hering ist einer der häufigsten Fische der Welt, einer der bedeutendsten Speisefische und gehört zur Gattung der Echten Heringe. Er wird seit Menschengedenken besonders an seinen Laichplätzen gefangen. Viele Städte wurden in der Nähe der Laichplätze und Durchzugsgebiete gegründet',
      descriptionLink: 'https://de.wikipedia.org/wiki/Atlantischer_Hering',
      Kalorien: 231,
      Fettgehalt: '17,8 g',
      Kohlenhydrate: '0 g',
      Protein: '18,2 g',
      Quelle:
        'http://www.ernaehrung.de/lebensmittel/de/T102100/Hering-roh-Fischzuschnitt.php',
    },
  },
  {
    title: 'Himbeeren (rot/gelb)',
    color: 'green',
    id: 'A43',
    nutrients: {
      description:
        'Die Himbeere ist eine Pflanzenart aus der Untergattung Idaeobatus in der Gattung Rubus innerhalb der Familie der Rosengewächse. Die vielfältige Nutzung der Pflanze durch den Menschen spiegelt sich in zahlreichen regionalen Volksbezeichnungen wider.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Himbeere',
      Kalorien: 52,
      Fettgehalt: '0,65 g',
      Kohlenhydrate: '11,94 g',
      Protein: '1,2 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/167755/nutrients',
    },
  },
  {
    title: 'Ingwer',
    color: 'green',
    id: 'A44',
    nutrients: {
      description:
        'Der Ingwer, auch Ingber, Imber, Immerwurzel und Ingwerwurzel genannt, ist eine Pflanzenart aus der Gattung Ingwer innerhalb der Familie der Ingwergewächse. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Ingwer',
      Kalorien: 80,
      Fettgehalt: '0,8 g',
      Kohlenhydrate: '18 g',
      Protein: '1,8 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169231/nutrients',
    },
  },
  {
    title: 'Joghurt (Ziege/Schaf)',
    color: 'green',
    id: 'A45',
    nutrients: {
      description:
        'Joghurt ist ein Nahrungsmittel, das aus durch Milchsäurebakterien verdickter Milch hergestellt ist. Es wird als Naturjoghurt ohne Zusätze sowie mit Zusätzen wie Zucker oder Obstbestandteilen in verschiedenen Geschmacksrichtungen vermarktet. Naturjoghurt hat in seiner originären Substanz einen säuerlichen Geschmack.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Joghurt',
      Kalorien: 78,
      Fettgehalt: '5 g',
      Kohlenhydrate: '3,7 g',
      Protein: '4,7 g',
      Quelle:
        'https://www.wikifit.de/kalorientabelle/sonstiges/ziegenjoghurt-natur',
    },
  },
  {
    title: 'Johannisbeeren (rot/weiß/schwarz)',
    color: 'green',
    id: 'A46',
    nutrients: {
      description:
        'Die Johannisbeeren, in Bayern, Österreich und Südtirol die Ribisl, in der Schweiz Meertrübeli, Trübeli oder Ribiseli, sind die einzige Pflanzengattung in der Familie der Stachelbeergewächse. Sie umfasst die im Deutschen als Johannisbeere und Stachelbeere bezeichneten Arten.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Johannisbeeren',
      Kalorien: 35,
      Fettgehalt: '1 g',
      Kohlenhydrate: '5,4 g',
      Protein: '0,5 g',
      Quelle:
        'https://eatsmarter.de/ernaehrung/wie-gesund-ist/johannisbeeren-kalorien-und-naehrwerte',
    },
  },
  {
    title: 'Kabeljau',
    color: 'green',
    id: 'A47',
    nutrients: {
      description:
        'Der Kabeljau oder Dorsch ist ein Meeresfisch, der in Teilen des Nordatlantiks und des Nordpolarmeers sowie in der Ostsee verbreitet ist. Der Kabeljau kam früher in sehr großen Mengen im Nordatlantik vor. Er gehört zu den wichtigsten Speisefischen und ist von großer fischereiwirtschaftlicher Bedeutung.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Kabeljau',
      Kalorien: 82,
      Fettgehalt: '0,67 g',
      Kohlenhydrate: '0 g',
      Protein: '17,81 g',
      Quelle: 'https://www.fitnessletter.de/kalorien/kabeljau/',
    },
  },
  {
    title: 'Kaffee, Espresso',
    color: 'green',
    id: 'A48',
    nutrients: {
      description:
        'Espresso ist eine aus Mailand stammende Kaffeezubereitungsart, bei der heißes Wasser mit hohem Druck durch sehr fein gemahlenes Kaffeemehl aus gerösteten Kaffeebohnen gepresst wird.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Espresso',
      Kalorien: 9,
      Fettgehalt: '0,2 g',
      Kohlenhydrate: '1,7 g',
      Protein: '0,1 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/171891/nutrients',
    },
  },
  {
    title: 'Kakaopulver',
    color: 'green',
    id: 'A49',
    nutrients: {
      description:
        'Als Kakaopulver bezeichnet man durch Pulverisieren von teilweise entfetteter Kakaomasse gewonnene Erzeugnisse. Dazu gehört nur Kakaopulver ohne Zusatz von Zucker oder anderen Süßmitteln.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Kakaopulver',
      Kalorien: 228,
      Fettgehalt: '14 g',
      Kohlenhydrate: '58 g',
      Protein: '20 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169593/nutrients',
    },
  },
  {
    title: 'Kapstachelbeeren',
    color: 'green',
    id: 'A50',
    nutrients: {
      description:
        'Die Kapstachelbeere, nach dem botanischen Gattungsnamen oft verkürzt Physalis, aber auch Andenbeere, Andenkirsche und Peruanische Blasenkirsche, seltener Judenkirsche, genannt, ist eine Pflanzenart aus der Gattung der Blasenkirschen in der Familie der Nachtschattengewächse. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Kapstachelbeere',
      Kalorien: 53,
      Fettgehalt: '0,7 g',
      Kohlenhydrate: '11,2 g',
      Protein: '1,9 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/173043/nutrients',
    },
  },
  {
    title: 'Knoblauch',
    color: 'green',
    id: 'A51',
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
    title: 'Kohlarten (alle)',
    color: 'green',
    id: 'A52',
    nutrients: {
      description:
        'Kohl bildet eine Gattung der Familie der Kreuzblütler. Viele wichtige Kulturpflanzen gehören zu dieser Gattung. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Kohl',
      Kalorien: 32,
      Fettgehalt: '0,61 g',
      Kohlenhydrate: '5,42 g',
      Protein: '3,02 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170406/nutrients',
    },
  },
  {
    title: 'Kohlrabi',
    color: 'green',
    id: 'A53',
    nutrients: {
      description:
        'Der Kohlrabi, auch Oberkohlrabi, Oberrübe, Kohlrübe, Rübkohl, Stängelrübe und Luftkohlrabi ist eine Gemüsepflanze. Er ist eine der vielen Zuchtformen des Gemüsekohls. Genutzt wird hier die verdickte, oberirdische Sprossachse.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Kohlrabi',
      Kalorien: 27,
      Fettgehalt: '0,1 g',
      Kohlenhydrate: '6 g',
      Protein: '1,7 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/168424/nutrients',
    },
  },
  {
    title: 'Kokosmehl',
    color: 'green',
    id: 'A54',
    nutrients: {
      description:
        'Die Kokospalme oder Kokosnusspalme (Cocos nucifera) ist ein tropisches Palmengewächs, an dem die Kokosnuss wächst. Cocos nucifera ist die einzige Art der Gattung. Es gibt verschiedene Sorten. Kokospalmen werden seit mindestens 3000 Jahren angebaut. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Kokospalme',
      Kalorien: 354,
      Fettgehalt: '16,5 g',
      Kohlenhydrate: '17 g',
      Protein: '17 g',
      Quelle:
        'https://www.bmi-rechner.net/kalorien-naehrwerte/kalorien-kokosmehl.htm',
    },
  },
  {
    title: 'Kokosmilch (ohne Zucker)',
    color: 'green',
    id: 'A55',
    nutrients: {
      description:
        'Die Kokospalme oder Kokosnusspalme (Cocos nucifera) ist ein tropisches Palmengewächs, an dem die Kokosnuss wächst. Cocos nucifera ist die einzige Art der Gattung. Es gibt verschiedene Sorten. Kokospalmen werden seit mindestens 3000 Jahren angebaut.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Kokospalme',
      Kalorien: 31,
      Fettgehalt: '2,08 g',
      Kohlenhydrate: '2,92 g',
      Protein: '0,21 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/781126/nutrients',
    },
  },
  {
    title: 'Kokosnuss',
    color: 'green',
    id: 'A56',
    nutrients: {
      description:
        'Die Kokospalme oder Kokosnusspalme (Cocos nucifera) ist ein tropisches Palmengewächs, an dem die Kokosnuss wächst. Cocos nucifera ist die einzige Art der Gattung. Es gibt verschiedene Sorten. Kokospalmen werden seit mindestens 3000 Jahren angebaut.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Kokospalme',
      Kalorien: 354,
      Fettgehalt: '33,49 g',
      Kohlenhydrate: '15,23 g',
      Protein: '3,33 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/784378/nutrients',
    },
  },
  {
    title: 'Kokosnusswasser (Dr. Martins)',
    color: 'green',
    id: 'A57',
    nutrients: {
      description:
        'Die Kokospalme oder Kokosnusspalme (Cocos nucifera) ist ein tropisches Palmengewächs, an dem die Kokosnuss wächst. Cocos nucifera ist die einzige Art der Gattung. Es gibt verschiedene Sorten. Kokospalmen werden seit mindestens 3000 Jahren angebaut.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Kokospalme',
      Kalorien: 11,
      Fettgehalt: '0 g',
      Kohlenhydrate: '2,9 g',
      Protein: '0 g',
      Quelle:
        'https://dr-martins.com/de/product/coco-water-pure-fairtrade-330ml/',
    },
  },
  {
    title: 'Kokosöl/Kokosfett',
    color: 'green',
    id: 'A58',
    nutrients: {
      description:
        'Die Kokospalme oder Kokosnusspalme (Cocos nucifera) ist ein tropisches Palmengewächs, an dem die Kokosnuss wächst. Cocos nucifera ist die einzige Art der Gattung. Es gibt verschiedene Sorten. Kokospalmen werden seit mindestens 3000 Jahren angebaut.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Kokospalme',
      Kalorien: 892,
      Fettgehalt: '99,06 g',
      Kohlenhydrate: '0 g',
      Protein: '0 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/789034/nutrients',
    },
  },
  {
    title: 'Kopfsalat',
    color: 'green',
    id: 'A59',
    nutrients: {
      description:
        'Kopfsalat, in Österreich auch Häuptlsalat genannt, ist eine Sortengruppe des Gartensalats. Die Sprossachse ist stark gestaucht, so dass die Blätter einen dichten, rundlichen „Kopf“ bilden. Verzehrt werden beim Kopfsalat die Blätter meist roh.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Kopfsalat',
      Kalorien: 11,
      Fettgehalt: '0,2 g',
      Kohlenhydrate: '1,1 g',
      Protein: '1,3 g',
      Quelle: 'https://www.wikifit.de/kalorientabelle/gemuese/kopfsalat',
    },
  },
  {
    title: 'Kräutertee',
    color: 'green',
    id: 'A60',
    nutrients: {
      description:
        'Kräutertees werden wie Früchtetees als Tee bezeichnet, dürfen aber nach dem Lebensmittelrecht nur als teeähnliche Erzeugnisse deklariert werden. Hierunter versteht man aromatische Aufgussgetränke, die aus frischen oder getrockneten Pflanzenteilen, z. B.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Kr%C3%A4utertee',
      Kalorien: 0,
      Fettgehalt: '0 g',
      Kohlenhydrate: '0 g',
      Protein: '0 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/171946/nutrients',
    },
  },
  {
    title: 'Lamm (Bioqualität)',
    color: 'green',
    id: 'A61',
    nutrients: {
      description:
        'Aus dem Englischen übersetzt-Lamm, Hogget und Hammel, im Allgemeinen Schaffleisch, sind das Fleisch von Hausschafen, Ovis Aries. Ein Schaf im ersten Jahr ist ein Lamm und sein Fleisch ist auch Lamm. Ein Schaf im zweiten Jahr und sein Fleisch sind hogget. Älteres Schaffleisch ist Hammel.',
      descriptionLink: 'https://en.wikipedia.org/wiki/Lamb_and_mutton',
      Kalorien: 294,
      Fettgehalt: '20,94 g',
      Kohlenhydrate: '0 g',
      Protein: '24,52 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/172480/nutrients',
    },
  },
  {
    title: 'Lauch',
    color: 'green',
    id: 'A62',
    nutrients: {
      description:
        'Lauch, auch Porree, Breitlauch, Winterlauch, Welschzwiebel, Gemeiner Lauch, Spanischer Lauch, Aschlauch, Fleischlauch genannt, ist eine Sortengruppe des aus dem Mittelmeerraum stammenden Ackerlauchs. Dieses Gemüse zählt zur Gattung Allium in der Unterfamilie der Lauchgewächse.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Lauch',
      Kalorien: 61,
      Fettgehalt: '0,3 g',
      Kohlenhydrate: '14 g',
      Protein: '1,5 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169246/nutrients',
    },
  },
  {
    title: 'Leinöl',
    color: 'green',
    id: 'A63',
    nutrients: {
      description:
        'Leinöl ist ein Pflanzenöl, das aus Leinsamen, den reifen Samen des Flachs, gewonnen wird. Rohleinöl ist Leinöl ohne Zusatz weiterer Öle oder sonstiger Stoffe. Zur Ölgewinnung werden außer dem eigentlichen Öllein auch andere Lein-Arten verwendet.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Leinsamen',
      Kalorien: 884,
      Fettgehalt: '100 g',
      Kohlenhydrate: '0 g',
      Protein: '0 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/167702/nutrients',
    },
  },
  {
    title: 'Leinsamen',
    color: 'green',
    id: 'A64',
    nutrients: {
      description:
        'Als Leinsamen (von mittelhochdeutsch līnsāme), häufig auch Leinsaat (von mittelhochdeutsch līnsat) genannt, werden die Samen des Flachses (Gemeiner Lein, Linum usitatissimum) bezeichnet.',
      descriptionLink: '',
      Kalorien: 534,
      Fettgehalt: '42,16 g',
      Kohlenhydrate: '28,88 g',
      Protein: '18,29 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169414/nutrients',
    },
  },
  {
    title: 'Leinsamenöl',
    color: 'green',
    id: 'A65',
    nutrients: {
      description:
        'Leinöl ist ein Pflanzenöl, das aus Leinsamen, den reifen Samen des Flachs, gewonnen wird. Rohleinöl ist Leinöl ohne Zusatz weiterer Öle oder sonstiger Stoffe. Zur Ölgewinnung werden außer dem eigentlichen Öllein auch andere Lein-Arten verwendet.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Leinsamen',
      Kalorien: 884,
      Fettgehalt: '100 g',
      Kohlenhydrate: '0 g',
      Protein: '0 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/167702/nutrients',
    },
  },
  {
    title: 'Linsen',
    color: 'green',
    id: 'A66',
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
  },
  {
    title: 'Lollo Rosso',
    color: 'green',
    id: 'A67',
    nutrients: {
      description:
        'Lollo rossa (im deutschen Sprachraum oft Lollo rosso). typische Mischanbauweise in zwei Farben. Schnittsalat, Pflücksalat oder Blattsalat (Lactuca sativa var. crispa)',
      descriptionLink: 'https://de.wikipedia.org/wiki/Schnittsalat',
      Kalorien: 21,
      Fettgehalt: '0,1 g',
      Kohlenhydrate: '2 g',
      Protein: '1 g',
      Quelle: 'https://eatsmarter.de/lexikon/warenkunde/salat/lollo-rosso',
    },
  },
  {
    title: 'Löwenzahn',
    color: 'green',
    id: 'A68',
    nutrients: {
      description:
        'Löwenzahn (Taraxacum) ist eine Pflanzengattung innerhalb der Familie der Korbblütler (Asteraceae). Ihre bekannteste Art ist der auch in Mitteleuropa sehr häufig vorkommende Gewöhnliche Löwenzahn, die „Pusteblume“, „Butter-“ oder „Kuhblume“. Die Gattung Taraxacum ist nicht zu verwechseln mit der in deutscher Sprache meist gleich benannten und sehr ähnlichen Gattung Leontodon innerhalb derselben Familie.',
      descriptionLink:
        'https://de.wikipedia.org/wiki/L%C3%B6wenzahn_(Taraxacum)',
      Kalorien: 35,
      Fettgehalt: '0,62 g',
      Kohlenhydrate: '2,44 g',
      Protein: '3,13 g',
      Quelle:
        'http://www.ernaehrung.de/lebensmittel/de/G262100/Loewenzahn-roh.php',
    },
  },
  {
    title: 'Macadamia-Nussöl',
    color: 'green',
    id: 'A69',
    nutrients: {
      description:
        'Macadamia ist eine Pflanzengattung in der Familie der Silberbaumgewächse. Sie ist vor allem durch die Frucht der beiden Arten Macadamia integrifolia und Macadamia tetraphylla bekannt, deren Samen Macadamianuss genannt wird.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Macadamia',
      Kalorien: 819,
      Fettgehalt: '91 g',
      Kohlenhydrate: '0 g',
      Protein: '0 g',
      Quelle:
        'http://www.ernaehrung.de/lebensmittel/de/FAUSER67/Vitaquell-Bio-Macadamianussoel-.php',
    },
  },
  {
    title: 'Macadamianüsse',
    color: 'green',
    id: 'A70',
    nutrients: {
      description:
        'Macadamia ist eine Pflanzengattung in der Familie der Silberbaumgewächse. Sie ist vor allem durch die Frucht der beiden Arten Macadamia integrifolia und Macadamia tetraphylla bekannt, deren Samen Macadamianuss genannt wird.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Macadamia',
      Kalorien: 716,
      Fettgehalt: '76,08 g',
      Kohlenhydrate: '12,83 g',
      Protein: '7,79 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/784381/nutrients',
    },
  },
  {
    title: 'Makrele',
    color: 'green',
    id: 'A71',
    nutrients: {
      description:
        'Die Makrele ist ein in Küstengewässern lebender Schwarmfisch. Sie fressen Plankton und Fischbrut von Heringen, Dorschen oder Sprotten. Populationen der Makrele kommen in den Küstengewässern Nordamerikas, im offenen Nordostatlantik, in der Nordsee, im Mittelmeer und im Schwarzen Meer vor.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Makrele',
      Kalorien: 262,
      Fettgehalt: '18 g',
      Kohlenhydrate: '0 g',
      Protein: '24 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/175120/nutrients',
    },
  },
  {
    title: 'Mandelmilch',
    color: 'green',
    id: 'A72',
    nutrients: {
      description:
        'Der Mandelbaum ist eine Pflanzenart der Gattung Prunus in der Familie der Rosengewächse. Seine Samen, die Mandeln, genannt auch Mandelkerne, werden als Nahrungsmittel und Kosmetikum genutzt.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Mandelbaum',
      Kalorien: 47,
      Fettgehalt: '2,9 g',
      Kohlenhydrate: '3,8 g',
      Protein: '0,9 g',
      Quelle: 'https://eatsmarter.de/lexikon/warenkunde/superfood/mandelmilch',
    },
  },
  {
    title: 'Mandeln Bioqualität',
    color: 'green',
    id: 'A73',
    nutrients: {
      description:
        'Der Mandelbaum ist eine Pflanzenart der Gattung Prunus in der Familie der Rosengewächse. Seine Samen, die Mandeln, genannt auch Mandelkerne, werden als Nahrungsmittel und Kosmetikum genutzt.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Mandelbaum',
      Kalorien: 589,
      Fettgehalt: '53 g',
      Kohlenhydrate: '5,7 g',
      Protein: '24 g',
      Quelle: 'https://www.foodspring.de/magazine/mandeln',
    },
  },
  {
    title: 'Mandelöl',
    color: 'green',
    id: 'A74',
    nutrients: {
      description:
        'Der Mandelbaum ist eine Pflanzenart der Gattung Prunus in der Familie der Rosengewächse. Seine Samen, die Mandeln, genannt auch Mandelkerne, werden als Nahrungsmittel und Kosmetikum genutzt.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Mandelbaum',
      Kalorien: 884,
      Fettgehalt: '100 g',
      Kohlenhydrate: '0 g',
      Protein: '0 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/789033/nutrients',
    },
  },
  {
    title: 'Mangold',
    color: 'green',
    id: 'A75',
    nutrients: {
      description:
        'Mangold, deutschschweizerisch auch Krautstiel genannt, ist eine Gemüse­pflanze. Sie ist eine Kulturform der Rübe, verwandt mit der Zuckerrübe, der Futterrübe und der Roten Rübe, und stammt von der an Küstensäumen wachsenden Wilden Rübe oder See-Mangold ab.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Mangold',
      Kalorien: 19,
      Fettgehalt: '0,2 g',
      Kohlenhydrate: '3,74 g',
      Protein: '1,8 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/787213/nutrients',
    },
  },
  {
    title: 'Mannose',
    color: 'green',
    id: 'A76',
    nutrients: {
      description:
        'Mannose, in biochemischer Darstellung häufig mit Man abgekürzt, ist ein Epimer der Glucose, genauer gesagt ein C2-Epimer. Als D-Mannose ist es eine natürliche Hexose und Baustein zahlreicher pflanzlicher Polysaccharide (Mannane). Im Organismus ist es hauptsächlich Bestandteil von Membranen. Bezogen auf Saccharose hat eine 10%ige Lösung eine Süßkraft von 59 %.[5]',
      descriptionLink: 'https://de.wikipedia.org/wiki/Mannose',
      Kalorien: 398,
      Fettgehalt: '0 g',
      Kohlenhydrate: '99,5 g',
      Protein: '0 g',
      Quelle:
        'http://www.ernaehrung.de/lebensmittel/de/SHS1101/D-Mannose-%28Mischung%29-Nutricia-Metabolics.php',
    },
  },
  {
    title: 'Marmelade (selbstgemacht mit Agar Agar, Galactose)',
    color: 'green',
    id: 'A77',
    nutrients: {
      description:
        'Marmelade ist die traditionelle Bezeichnung für einen Brotaufstrich, der aus mit Zucker eingekochten Früchten hergestellt wird, ohne dass Fruchtstücke im Fertigprodukt sichtbar bleiben.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Marmelade',
      Kalorien: 0,
      Fettgehalt: '000 g',
      Kohlenhydrate: '000 g',
      Protein: '000 g',
      Quelle: '',
    },
  },
  {
    title: 'Maulbeeren (getrocknet)',
    color: 'green',
    id: 'A78',
    nutrients: {
      description:
        'Die Maulbeeren oder Maulbeerbäume sind wie die Feigen eine Pflanzengattung in der Familie der Maulbeergewächse.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Maulbeeren',
      Kalorien: 43,
      Fettgehalt: '0,4 g',
      Kohlenhydrate: '10 g',
      Protein: '1,4 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169913/nutrients',
    },
  },
  {
    title: 'Meerettich (frisch)',
    color: 'green',
    id: 'A79',
    nutrients: {
      description:
        'Der Meerrettich, als größerer „Rettich“ zu mittelhochdeutsch/althochdeutsch mēr, gehört zur Familie der Kreuzblütengewächse. Die Wurzel der Meerrettichpflanze wird als Gemüse, Gewürz oder in der Pflanzenheilkunde verwendet. Mit den Rettichen der Gattung Raphanus ist er nicht näher verwandt.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Meerrettich',
      Kalorien: 64,
      Fettgehalt: '0,3 g',
      Kohlenhydrate: '11,6 g',
      Protein: '2,8 g',
      Quelle: 'https://www.vitamine.com/lebensmittel/meerrettich/',
    },
  },
  {
    title: 'Milch (Schaf, Ziege)',
    color: 'green',
    id: 'A80',
    nutrients: {
      description: 'Ziegenmilch ist die Milch von Hausziegen.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Ziegenmilch',
      Kalorien: 69,
      Fettgehalt: '4,1 g',
      Kohlenhydrate: '4,5 g',
      Protein: '3,6 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/171278/nutrients',
    },
  },
  {
    title: 'Mohn',
    color: 'green',
    id: 'A81',
    nutrients: {
      description:
        'Mohn ist eine Pflanzengattung aus der Familie der Mohngewächse mit weltweit zwischen 50 und 120 Arten. Eine Kulturpflanze ist der Schlafmohn. Die leuchtend roten Blüten des in Mitteleuropa wilden Klatschmohns blühen ab Ende Mai und kennzeichnen den Beginn des Frühsommers.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Mohn',
      Kalorien: 525,
      Fettgehalt: '41,56 g',
      Kohlenhydrate: '28,13 g',
      Protein: '17,99 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/171330/nutrients',
    },
  },
  {
    title: 'Morcheln',
    color: 'green',
    id: 'A82',
    nutrients: {
      description: 'Die Morcheln sind eine Gattung der Schlauchpilze.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Morcheln',
      Kalorien: 15,
      Fettgehalt: '0,32 g',
      Kohlenhydrate: '0,5 g',
      Protein: '2,48 g',
      Quelle: 'https://www.vitamine.com/lebensmittel/morchel/',
    },
  },
  {
    title: 'Oliven',
    color: 'green',
    id: 'A83',
    nutrients: {
      description:
        'Der Olivenbaum, auch Echter Ölbaum genannt, ist ein mittelgroßer, im Alter oft knorriger Baum aus der Gattung der Ölbäume, die zur Familie der Ölbaumgewächse gehört. Er wird seit dem 4. Jahrtausend v. Chr. als Nutzpflanze kultiviert.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Olivenbaum',
      Kalorien: 115,
      Fettgehalt: '11 g',
      Kohlenhydrate: '6 g',
      Protein: '0,8 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169094/nutrients',
    },
  },
  {
    title: 'Olivenöl',
    color: 'green',
    id: 'A84',
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
    title: 'Papaya',
    color: 'green',
    id: 'A85',
    nutrients: {
      description:
        'Papaya, auch Melonenbaum oder Papayabaum genannt, ist die einzige Art der Pflanzengattung Carica innerhalb der Familie der Melonenbaumgewächse. Die Wildform kommt vom südlichen Mexiko bis Costa Rica vor. Die Kulturform ist eine wichtige tropische Nutzpflanze. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Papaya',
      Kalorien: 43,
      Fettgehalt: '0,26 g',
      Kohlenhydrate: '10,82 g',
      Protein: '0,47 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169926/nutrients',
    },
  },
  {
    title: 'Papaya (getrocknet)',
    color: 'green',
    id: 'A86',
    nutrients: {
      description:
        'Papaya, auch Melonenbaum oder Papayabaum genannt, ist die einzige Art der Pflanzengattung Carica innerhalb der Familie der Melonenbaumgewächse. Die Wildform kommt vom südlichen Mexiko bis Costa Rica vor. Die Kulturform ist eine wichtige tropische Nutzpflanze. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Papaya',
      Kalorien: 296,
      Fettgehalt: '0,86 g',
      Kohlenhydrate: '75,46 g',
      Protein: '1,55 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/786612/nutrients',
    },
  },
  {
    title: 'Paprika',
    color: 'green',
    id: 'A87',
    nutrients: {
      description:
        'Die Pflanzengattung Paprika (Capsicum) gehört zur Familie der Nachtschattengewächse (Solanaceae). Sie ist vor allem wegen ihrer Früchte bekannt, die als Gemüse und Gewürz verwendet werden. Je nach Größe, Farbe und Geschmack sowie Schärfe werden für viele Sorten besondere Namen wie Chili, Spanischer Pfeffer, Peperoni, Peperoncini oder Pfefferoni gebraucht. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Paprika',
      Kalorien: 31,
      Fettgehalt: '0,3 g',
      Kohlenhydrate: '6,03 g',
      Protein: '0,99 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/787812/nutrients',
    },
  },
  {
    title: 'Paranüsse',
    color: 'green',
    id: 'A88',
    nutrients: {
      description:
        'Der Paranussbaum gehört zu den Topffruchtbaumgewächsen. Den botanischen Gattungsnamen Bertholletia erhielt der Baum zu Ehren des französischen Chemikers Claude Louis Berthollet.',
      descriptionLink: 'Wikipedia',
      Kalorien: 656,
      Fettgehalt: '66 g',
      Kohlenhydrate: '12 g',
      Protein: '14 g',
      Quelle: 'https://fdc.nal.usda.gov/fdc-app.html#/?query=ndbNumber:12078',
    },
  },
  {
    title: 'Pfifferlinge',
    color: 'green',
    id: 'A89',
    nutrients: {
      description:
        'Der Echte Pfifferling, Eierschwamm oder Rehling, auch Eierschwämmchen, in Österreich und Bayern Eierschwammerl und Reherl, in Franken Gelberle, in Sachsen Gelchen, in der Schweiz auch Eierschwämmli genannt, ist ein essbarer Pilz aus der Familie der Pfifferlingsverwandten.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Echter_Pfifferling',
      Kalorien: 32,
      Fettgehalt: '0,53 g',
      Kohlenhydrate: '6,86 g',
      Protein: '1,49 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/168422/nutrients',
    },
  },
  {
    title: 'Pistazien (bio)',
    color: 'green',
    id: 'A90',
    nutrients: {
      description:
        'Der Pistazienbaum oder vereinfacht Pistazie ist eine Pflanzenart innerhalb der Familie der Sumachgewächse. Zur Unterscheidung von den anderen Arten der Gattung Pistazien wird sie genauer Echte Pistazie genannt und ihre Steinfrucht Pistazie.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Pistazie',
      Kalorien: 562,
      Fettgehalt: '45 g',
      Kohlenhydrate: '28 g',
      Protein: '20 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170184/nutrients',
    },
  },
  {
    title: 'Portulak',
    color: 'green',
    id: 'A91',
    nutrients: {
      description:
        'Der Portulak, auch Gemüse-Portulak oder Sommerportulak genannt, ist eine Pflanzenart aus der Gattung Portulak. Sie ist in den gemäßigten Zonen weltweit verbreitet und wird gelegentlich als Gemüse oder Gewürz verwendet.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Portulak',
      Kalorien: 20,
      Fettgehalt: '0,4 g',
      Kohlenhydrate: '3,4 g',
      Protein: '2 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169274/nutrients',
    },
  },
  {
    title: 'Postelein',
    color: 'green',
    id: 'A92',
    nutrients: {
      description:
        'Das Gewöhnliche Tellerkraut, auch Kuba-Spinat, Winterportulak oder Postelein bzw. Winterpostelein genannt, ist eine Pflanzenart aus der Gattung Tellerkräuter innerhalb der Familie der Quellkrautgewächse. Sie ist ursprünglich im Westen Nordamerikas beheimatet, in Mittel- und Westeuropa tritt sie als Neophyt auf. ',
      descriptionLink:
        'https://de.wikipedia.org/wiki/Gew%C3%B6hnliches_Tellerkraut',
      Kalorien: 20,
      Fettgehalt: '0,4 g',
      Kohlenhydrate: '3,4 g',
      Protein: '2 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169274/nutrients',
    },
  },
  {
    title: 'Preiselbeeren (frisch)',
    color: 'green',
    id: 'A93',
    nutrients: {
      description:
        'Die Preiselbeere ist eine Pflanzenart aus der Gattung der Heidelbeeren. Sie ist in Eurasien und Nordamerika weit verbreitet. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Preiselbeere',
      Kalorien: 41,
      Fettgehalt: '0,53 g',
      Kohlenhydrate: '6,22 g',
      Protein: '0,28 g',
      Quelle:
        'http://www.ernaehrung.de/lebensmittel/de/F401000/Preiselbeere---Kronsbeere.php',
    },
  },
  {
    title: 'Quark (Ziege, Schaf)',
    color: 'green',
    id: 'A94',
    nutrients: {
      description:
        'Quark, auch Weißkäse, österreichisch bzw. bairisch Topfen, süddeutsch/südost- und westösterreichisch Schotten, ist das aus der Milch durch Zugabe von Lab oder durch bakterielle Bildung von Milchsäure ausgefällte Milcheiweiß.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Quark_(Milchprodukt)',
      Kalorien: 176,
      Fettgehalt: '14 g',
      Kohlenhydrate: '3,3 g',
      Protein: '9,1 g',
      Quelle: 'http://das-ist-drin.de/Heirler-Ziegen-Quark-180-g--429876/',
    },
  },
  {
    title: 'Radicchio',
    color: 'green',
    id: 'A95',
    nutrients: {
      description:
        'Der Radicchio ist eine Kulturform der Gemeinen Wegwarte, die als Gemüse oder Salat genutzt wird. Die verschiedenen Sorten wurden früher vor allem in Italien angebaut, woraus sich die regionalen Bezeichnungen herleiten.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Radicchio',
      Kalorien: 16,
      Fettgehalt: '0,2 g',
      Kohlenhydrate: '1,5 g',
      Protein: '1,2 g',
      Quelle:
        'https://www.yazio.com/de/kalorientabelle/radicchio-zichorie-roh.html',
    },
  },
  {
    title: 'Radieschen',
    color: 'green',
    id: 'A96',
    nutrients: {
      description:
        'Das Radieschen, auch Radies genannt, selten Monatsrettich, eine Sorte des Garten-Rettichs, ist eine Nutzpflanze aus der Familie der Kreuzblütengewächse. Die bis zu etwa vier Zentimeter dicke Speicherknolle schmeckt scharf, ist innen weiß und außen zumeist weinrot bis rot.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Radieschen',
      Kalorien: 16,
      Fettgehalt: '0,1 g',
      Kohlenhydrate: '2 g',
      Protein: '1 g',
      Quelle:
        'https://eatsmarter.de/ernaehrung/wie-gesund-ist/radieschen-kalorien-und-naehrwerte',
    },
  },
  {
    title: 'Rapsöl',
    color: 'green',
    id: 'A97',
    nutrients: {
      description:
        'Rapsöl oder Rüböl ist ein pflanzliches Öl, welches aus den Samen vom Raps oder seltener auch von dem nahen Verwandten, dem Ölrübsen, gewonnen wird. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Raps%C3%B6l',
      Kalorien: 884,
      Fettgehalt: '100 g',
      Kohlenhydrate: '0 g',
      Protein: '0 g',
      Quelle: 'https://www.yazio.com/de/kalorientabelle/raps-oel-rapsoel.html',
    },
  },
  {
    title: 'Reishi (Ganodernum lucidum)',
    color: 'green',
    id: 'A98',
    nutrients: {
      description:
        'Der Glänzende Lackporling ist ein Pilz aus der Familie der Lackporlingsverwandten. ',
      descriptionLink:
        'https://de.wikipedia.org/wiki/Gl%C3%A4nzender_Lackporling',
      Kalorien: 39,
      Fettgehalt: '0,5 g',
      Kohlenhydrate: '6 g',
      Protein: '2,3 g',
      Quelle:
        'https://www.weightguard.de/kalorientabelle/30_pilze/1900_reishi.html',
    },
  },
  {
    title: 'Rettich',
    color: 'green',
    id: 'A99',
    nutrients: {
      description:
        'Die Rettiche bilden eine Pflanzengattung in der Familie der Kreuzblütengewächse. Es gibt etwa drei Arten, die überwiegend im Mittelmeerraum beheimatet sind. Mit dem als Gewürz verwendeten Meerrettich sind sie nicht näher verwandt.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Rettiche',
      Kalorien: 18,
      Fettgehalt: '0,15 g',
      Kohlenhydrate: '2,39 g',
      Protein: '1,05 g',
      Quelle:
        'http://www.ernaehrung.de/lebensmittel/de/G681100/Rettich-weiss-roh.php',
    },
  },
  {
    title: 'Rhabarber',
    color: 'green',
    id: 'A100',
    nutrients: {
      description:
        'Der Rhabarber, genauer Gewöhnlicher Rhabarber, auch Gemüse-Rhabarber oder Krauser Rhabarber, ist eine Pflanzenart aus der Familie der Knöterichgewächse. Die geschälten oder ungeschälten Blattstiele dieser Nutzpflanze werden unter anderem zu Kompott, Konfitüren, Kuchen und auch zu Saft verarbeitet.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Gemeiner_Rhabarber',
      Kalorien: 21,
      Fettgehalt: '0,2 g',
      Kohlenhydrate: '4,5 g',
      Protein: '0,9 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/167758/nutrients',
    },
  },
  {
    title: 'Ribose',
    color: 'green',
    id: 'A101',
    nutrients: {
      description:
        'Ribose ist ein Zucker mit fünf Kohlenstoff-Atomen, eine Pentose, und kommt als D-Ribose in der Natur häufig vor, während die enantiomere L-Ribose nur geringe Bedeutung hat. D-Ribose ist Bestandteil der Bausteine von Ribonukleinsäure.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Ribose',
      Kalorien: 400,
      Fettgehalt: '0 g',
      Kohlenhydrate: '100 g',
      Protein: '0 g',
      Quelle:
        'https://shop.apotal.de/images/products/apotal/lmiv/10330477_lmiv.pdf',
    },
  },
  {
    title: 'Röhrling',
    color: 'green',
    id: 'A102',
    nutrients: {
      description:
        'Als Röhrlinge werden Pilzarten bezeichnet, deren in Hut und Stiel gegliederte Fruchtkörper auf der Hutunterseite ein röhrlingsartiges Hymenophor aufweisen. Sie gehören verschiedenen Familien an: Dickröhrlingsverwandte Schmierröhrlingsverwandte',
      descriptionLink: 'https://de.wikipedia.org/wiki/R%C3%B6hrlinge',
      Kalorien: 27,
      Fettgehalt: '0,4 g',
      Kohlenhydrate: '0,5 g',
      Protein: '4,5 g',
      Quelle: 'https://www.speisepilze.eu/pilze/maronen.pdf',
    },
  },
  {
    title: 'Römischer Salat',
    color: 'green',
    id: 'A103',
    nutrients: {
      description:
        'Römersalat, auch Römischer oder Romana-Salat, Lattuga, Kochsalat, Bindesalat ist eine Varietät der Pflanzenart Gartensalat',
      descriptionLink: 'https://de.wikipedia.org/wiki/R%C3%B6mersalat',
      Kalorien: 17,
      Fettgehalt: '0,3 g',
      Kohlenhydrate: '3,29 g',
      Protein: '1,23 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169247/nutrients',
    },
  },
  {
    title: 'Rotbarsch',
    color: 'green',
    id: 'A104',
    nutrients: {
      description:
        'Der Rotbarsch oder Goldbarsch ist ein Meeresfisch des nördlichen Atlantik und ein bekannter Speisefisch.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Rotbarsch',
      Kalorien: 105,
      Fettgehalt: '3,9 g',
      Kohlenhydrate: '0 g',
      Protein: '17,2 g',
      Quelle:
        'https://www.yazio.com/de/kalorientabelle/rotbarsch-rotbarschfilet.html',
    },
  },
  {
    title: 'Rucola',
    color: 'green',
    id: 'A105',
    nutrients: {
      description:
        'Als Rucola werden verschiedene Pflanzenarten aus der Familie der Kreuzblütengewächse gehandelt. Rucola wird hauptsächlich als Salatpflanze angebaut. Im deutschsprachigen Raum ursprünglich als Rauke bekannt, aber in Vergessenheit geraten, wurden die Pflanzen unter ihrem italienischen Namen wieder populär.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Rucola',
      Kalorien: 30,
      Fettgehalt: '0,7 g',
      Kohlenhydrate: '2,1 g',
      Protein: '2,6 g',
      Quelle: 'https://www.yazio.com/de/kalorientabelle/rucola-roh-frisch.html',
    },
  },
  {
    title: 'Rucola-Sprossen',
    color: 'green',
    id: 'A106',
    nutrients: {
      description:
        'Als Rucola werden verschiedene Pflanzenarten aus der Familie der Kreuzblütengewächse gehandelt. Rucola wird hauptsächlich als Salatpflanze angebaut. Im deutschsprachigen Raum ursprünglich als Rauke bekannt, aber in Vergessenheit geraten, wurden die Pflanzen unter ihrem italienischen Namen wieder populär.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Rucola',
      Kalorien: 25,
      Fettgehalt: '1 g',
      Kohlenhydrate: '2 g',
      Protein: '2,6 g',
      Quelle: 'https://sprossenwelt.de/keimsaaten/rucolasprossen/',
    },
  },
  {
    title: 'Saibling',
    color: 'green',
    id: 'A107',
    nutrients: {
      description:
        'Die Saiblinge sind eine Gattung aus der Familie der Lachsfische. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Saiblinge',
      Kalorien: 96,
      Fettgehalt: '2 g',
      Kohlenhydrate: '0 g',
      Protein: '19 g',
      Quelle: 'https://eatsmarter.de/lexikon/warenkunde/fisch/saibling',
    },
  },
  {
    title: 'Sanddorn',
    color: 'green',
    id: 'A108',
    nutrients: {
      description:
        'Sanddorn, auch Fasanbeer, Haffdorn, Seedorn und häufig „Zitrone des Nordens“ genannt, ist eine Pflanzenart aus der Gattung der Sanddorne innerhalb der Familie der Ölweidengewächse. Der botanische Gattungsname Hippophae enthält die beiden griechischen Wörter hippos und phaes. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Sanddorn',
      Kalorien: 86,
      Fettgehalt: '7,1 g',
      Kohlenhydrate: '3,29 g',
      Protein: '1,42 g',
      Quelle: 'https://www.vitamine.com/lebensmittel/sanddorn/',
    },
  },
  {
    title: 'Sardine',
    color: 'green',
    id: 'A109',
    nutrients: {
      description:
        'Die Sardine, auch Atlantische oder Europäische Sardine genannt, ist die einzige Art der Gattung Sardina in der Familie der Heringe. Sie ist ein bedeutender Speisefisch. Ihr Vorkommen erstreckt sich vom nordöstlichen Atlantik und der Nordsee bis zum Senegal.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Sardine',
      Kalorien: 1,
      Fettgehalt: '11,45 g',
      Kohlenhydrate: '0 g',
      Protein: '24,62 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/175139/nutrients',
    },
  },
  {
    title: 'Sauerampfer',
    color: 'green',
    id: 'A110',
    nutrients: {
      description:
        'Der Wiesen-Sauerampfer, auch Sauerampfer, Sauerlump oder Suurampfere genannt, ist eine Pflanzenart, die zur Familie der Knöterichgewächse gehört. Er wird als Wildgemüse und Heilpflanze verwendet. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Wiesen-Sauerampfer',
      Kalorien: 26,
      Fettgehalt: '0,36 g',
      Kohlenhydrate: '1,16 g',
      Protein: '3,19 g',
      Quelle:
        'http://www.ernaehrung.de/lebensmittel/de/G263100/Sauerampfer-roh.php',
    },
  },
  {
    title: 'Sauerkraut',
    color: 'green',
    id: 'A111',
    nutrients: {
      description:
        'Sauerkraut oder Sauerkohl ist durch Milchsäuregärung konservierter Weißkohl oder Spitzkohl und wird meist gekocht als Beilage verzehrt. Es gilt international als eines der bekanntesten deutschen Nationalgerichte.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Sauerkraut',
      Kalorien: 19,
      Fettgehalt: '0,14 g',
      Kohlenhydrate: '4,28 g',
      Protein: '0,91 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169279/nutrients',
    },
  },
  {
    title: 'Schafkäse',
    color: 'green',
    id: 'A112',
    nutrients: {
      description:
        'Schafskäse oder Schafkäse ist Käse, hauptsächlich Weichkäse, aus Schafmilch. Schafskäse unterscheidet sich vor allem durch den stärkeren Geruch und Geschmack von Käse aus Kuhmilch.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Schafsk%C3%A4se',
      Kalorien: 284,
      Fettgehalt: '24,1 g',
      Kohlenhydrate: '0,8 g',
      Protein: '15,7 g',
      Quelle:
        'https://www.yazio.com/de/kalorientabelle/schafskaese-feta-hirtenkaese.html',
    },
  },
  {
    title: 'Schellfisch',
    color: 'green',
    id: 'A113',
    nutrients: {
      description:
        'Der Schellfisch ist ein Speisefisch aus der Familie der Dorsche, der in Meeren der gemäßigten Zonen vorkommt.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Schellfisch',
      Kalorien: 90,
      Fettgehalt: '0,7 g',
      Kohlenhydrate: '0 g',
      Protein: '20,7 g',
      Quelle: 'https://www.yazio.com/de/kalorientabelle/schellfisch-gar.html',
    },
  },
  {
    title: 'Scholle',
    color: 'green',
    id: 'A115',
    nutrients: {
      description:
        'Die Scholle oder der Goldbutt gehört zur Ordnung der Plattfische sowie zur Familie der Schollen und ist ein Speisefisch.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Scholle_(Fisch)',
      Kalorien: 86,
      Fettgehalt: '1,9 g',
      Kohlenhydrate: '0 g',
      Protein: '17,1 g',
      Quelle: 'https://www.yazio.com/de/kalorientabelle/scholle.html',
    },
  },
  {
    title: 'Schwarzer Reis',
    color: 'green',
    id: 'A116',
    nutrients: {
      description:
        'Aus dem Englischen übersetzt-Schwarzer Reis ist eine Reihe von Reissorten der Art Oryza sativa L., von denen einige Klebreis sind. Zu den Sorten gehören indonesischer schwarzer Reis, philippinischer Balatinaw-Reis und thailändischer schwarzer Jasminreis.',
      descriptionLink: 'https://en.wikipedia.org/wiki/Black_rice',
      Kalorien: 356,
      Fettgehalt: '3,33 g',
      Kohlenhydrate: '75,56 g',
      Protein: '8,89 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/356561/nutrients',
    },
  },
  {
    title: 'Schwertfisch',
    color: 'green',
    id: 'A117',
    nutrients: {
      description:
        'Der Schwertfisch ist ein großer, räuberisch lebender Knochenfisch, der weltweit in gemäßigt warmen bis tropischen Meeren anzutreffen ist. Er lebt im offenen Ozean, nähert sich nur wenig den Küsten und ernährt sich von anderen Fischen und von Kopffüßern.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Schwertfisch',
      Kalorien: 172,
      Fettgehalt: '7,93 g',
      Kohlenhydrate: '0 g',
      Protein: '23,45 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/173704/nutrients',
    },
  },
  {
    title: 'Seezunge',
    color: 'green',
    id: 'A118',
    nutrients: {
      description:
        'Die Seezunge gehört zur Ordnung der Plattfische und ist einer der begehrtesten und teuersten Speisefische.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Seezunge',
      Kalorien: 83,
      Fettgehalt: '1,4 g',
      Kohlenhydrate: '0 g',
      Protein: '17,5 g',
      Quelle: 'https://eatsmarter.de/lexikon/warenkunde/fisch/seezunge',
    },
  },
  {
    title: 'Sellerie',
    color: 'green',
    id: 'A119',
    nutrients: {
      description:
        'Sellerie (Apium)[1][2] ist eine Gattung in der Familie der Doldenblütler (Apiaceae) mit 30 Arten. Insbesondere der Echte Sellerie, meist einfach Sellerie genannt, findet als Nutz- und Heilpflanze Verwendung.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Sellerie',
      Kalorien: 14,
      Fettgehalt: '0,17 g',
      Kohlenhydrate: '2,97 g',
      Protein: '0,69 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169988/nutrients',
    },
  },
  {
    title: 'Senfpulver',
    color: 'green',
    id: 'A120',
    nutrients: {
      description:
        'Senf ist ein scharfes Gewürz, das aus den Samenkörnern des Weißen, Braunen und des Schwarzen Senfs hergestellt wird. Gebräuchlich sind sowohl reine Senfkörner, Senfpulver und vor allem die aus den mehr oder weniger fein gemahlenen Samen und weiteren Zutaten bereitete Würzpaste, genannt „Tafelsenf“ oder „Mostrich“.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Senf',
      Kalorien: 347,
      Fettgehalt: '6,4 g',
      Kohlenhydrate: '48,3 g',
      Protein: '23 g',
      Quelle: 'https://www.naehrwertrechner.de/naehrwerte/R278011/Senfpulver',
    },
  },
  {
    title: 'Sesamöl',
    color: 'green',
    id: 'A121',
    nutrients: {
      description:
        'Sesamöl wird aus den Samen des Sesams gewonnen. Das helle, aus den naturbelassenen Samen gewonnene Öl ist blassgelb und weitgehend geruchs- und geschmacksneutral – es dient vor allem in der asiatischen und orientalischen Küche als Speiseöl. Daneben wird es zur Margarineherstellung verwendet.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Sesam%C3%B6l',
      Kalorien: 884,
      Fettgehalt: '100 g',
      Kohlenhydrate: '0 g',
      Protein: '0 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/171016/nutrients',
    },
  },
  {
    title: 'Sesamsamen',
    color: 'green',
    id: 'A122',
    nutrients: {
      description:
        'Sesam ist eine Pflanzenart aus der Familie der Sesamgewächse. Er ist eine weit verbreitete Kulturpflanze und vermutlich eine der ältesten Ölpflanzen der Welt.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Sesam',
      Kalorien: 573,
      Fettgehalt: '49,67 g',
      Kohlenhydrate: '23,45 g',
      Protein: '17,73 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170150/nutrients',
    },
  },
  {
    title: 'Sojasprossen',
    color: 'green',
    id: 'A123',
    nutrients: {
      description:
        'Die Sojabohne, häufig auch einfach als Soja bezeichnet, ist eine Pflanzenart aus der Unterfamilie Schmetterlingsblütler innerhalb der Familie der Hülsenfrüchtler. Der Anbau der Nutzpflanze Sojabohne ist seit 3050 v. Chr. in Japan und zumindest seit 1550 v. Chr. in Korea und China als Nahrungspflanze nachgewiesen.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Sojabohne',
      Kalorien: 122,
      Fettgehalt: '6,7 g',
      Kohlenhydrate: '9,57 g',
      Protein: '13,09 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169284/nutrients',
    },
  },
  {
    title: 'Spargel',
    color: 'green',
    id: 'A124',
    nutrients: {
      description:
        'Gemüsespargel oder Gemeiner Spargel ist eine von ca. 220 Arten aus der Gattung Spargel. Umgangssprachlich wird er meist kurz Spargel genannt. Gegessen werden die jungen Triebe.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Gem%C3%BCsespargel',
      Kalorien: 20,
      Fettgehalt: '0,12 g',
      Kohlenhydrate: '3,88 g',
      Protein: '2,2 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/168389/nutrients',
    },
  },
  {
    title: 'Spinat',
    color: 'green',
    id: 'A125',
    nutrients: {
      description:
        'Der Echte Spinat, auch Gemüsespinat, Gartenspinat oder kurz Spinat genannt, ist eine Pflanzenart aus der Gattung Spinat innerhalb der Familie der Fuchsschwanzgewächse. Diese Kulturform entstand wohl in Südwestasien und wird hauptsächlich als Blattgemüse verwendet.',
      descriptionLink: 'Wikipedia',
      Kalorien: 23,
      Fettgehalt: '0,39 g',
      Kohlenhydrate: '3,63 g',
      Protein: '2,86 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/168462/nutrients',
    },
  },
  {
    title: 'Stachelbeeren',
    color: 'green',
    id: 'A126',
    nutrients: {
      description:
        'Die Stachelbeere ist eine Pflanzenart aus der Gattung Ribes innerhalb der Familie der Stachelbeergewächse. Sie besitzt ein weites Verbreitungsgebiet in Eurasien und Nordafrika. Die Sorten liefern Obst.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Stachelbeere',
      Kalorien: 43,
      Fettgehalt: '0,15 g',
      Kohlenhydrate: '7,06 g',
      Protein: '0,8 g',
      Quelle:
        'http://www.ernaehrung.de/lebensmittel/de/F305100/Stachelbeere-roh.php',
    },
  },
  {
    title: 'Steinpilze',
    color: 'green',
    id: 'A127',
    nutrients: {
      description:
        'Die Steinpilze bilden eine Sektion in der Gattung Dickröhrlinge. Die Arten werden aufgrund der schwierigen Unterscheidbarkeit für Laien häufig unter diesem Namen zusammengefasst.',
      descriptionLink: 'Wikipedia',
      Kalorien: 121,
      Fettgehalt: '10,376 g',
      Kohlenhydrate: '2,2 g',
      Protein: '4,8 g',
      Quelle: 'https://www.vitamine.com/lebensmittel/steinpilze/',
    },
  },
  {
    title: 'Stockschwäcmmchen',
    color: 'green',
    id: 'A128',
    nutrients: {
      description:
        'Die Stockschwämmchen sind eine Pilzgattung aus der Familie der Träuschlingsverwandten. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Stockschw%C3%A4mmchen',
      Kalorien: 24,
      Fettgehalt: '0,5 g',
      Kohlenhydrate: '2,2 g',
      Protein: '1,3 g',
      Quelle:
        'http://www.ernaehrung.de/lebensmittel/de/EDEKA185/Stockschwaemmchen,-EDEKA.php',
    },
  },
  {
    title: 'Tagatose',
    color: 'green',
    id: 'A129',
    nutrients: {
      description:
        'Tagatose ist ein Monosaccharid mit sechs Kohlenstoff-Atomen. Dieser Zucker gehört zur Gruppe der Ketohexosen. D-Tagatose eignet sich als Süßstoff, da er – verglichen mit Fructose – bei 92 % Süßkraft nur 38 % des physiologischen Brennwerts besitzt.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Tagatose',
      Kalorien: 400,
      Fettgehalt: '0 g',
      Kohlenhydrate: '100 g',
      Protein: '0 g',
      Quelle:
        'https://www.gesundheitsmanufaktur.de/gesundo/tagatose-d-tagatose-suessungsmittel',
    },
  },
  {
    title: 'Tee (schwarz, grün, weiß)',
    color: 'green',
    id: 'A130',
    nutrients: {
      description:
        'Tee im eigentlichen Sinne ist ein heißes Aufgussgetränk, das in der Hauptsache aus den Blättern und Blattknospen der Teepflanze zubereitet wird. Einige Spezialtees enthalten auch Stängel. Tee ist ein Genussmittel. Tee enthält, je nach Pflanzenteil bis zu 4,5 % Coffein.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Tee',
      Kalorien: 1,
      Fettgehalt: '0 g',
      Kohlenhydrate: '0,17 g',
      Protein: '0,06 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/174873/nutrients',
    },
  },
  {
    title: 'Thunfisch',
    color: 'green',
    id: 'A131',
    nutrients: {
      description:
        'Thunfische bezeichnen eine Gattung großer Raubfische, die in allen tropischen, subtropischen und gemäßigten Meeren vorkommt. Sie gehören zu den wichtigsten Speisefischen und sind von großer fischereiwirtschaftlicher Bedeutung. Einige der acht Arten sind inzwischen durch Überfischung gefährdet.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Thunfische',
      Kalorien: 130,
      Fettgehalt: '0,59 g',
      Kohlenhydrate: '0 g',
      Protein: '29,15 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/172006/nutrients',
    },
  },
  {
    title: 'Tomaten',
    color: 'green',
    id: 'A132',
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
    title: 'Tomatenmark',
    color: 'green',
    id: 'A133',
    nutrients: {
      description:
        'Tomatenmark, in Ostösterreich Paradeismark, in der Schweiz Tomatenpüree, ist eine aus Tomaten hergestellte Paste, die in der Küche vor allem zur Herstellung von Saucen verwendet wird.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Tomatenmark',
      Kalorien: 43,
      Fettgehalt: '0,5 g',
      Kohlenhydrate: '5,55 g',
      Protein: '2,3 g',
      Quelle:
        'http://www.ernaehrung.de/lebensmittel/de/R160000/Tomatenmark.php',
    },
  },
  {
    title: 'Walnüsse',
    color: 'green',
    id: 'A134',
    nutrients: {
      description:
        'Aus dem Englischen übersetzt-Eine Walnuss ist die Nuss eines Baumes der Gattung Juglans, insbesondere der persischen oder englischen Walnuss Juglans regia. Eine Walnuss ist der essbare Samen einer Steinfrucht und somit keine echte botanische Nuss. Es wird üblicherweise als Nuss konsumiert',
      descriptionLink: 'https://en.wikipedia.org/wiki/Walnut',
      Kalorien: 654,
      Fettgehalt: '65,21 g',
      Kohlenhydrate: '13,71 g',
      Protein: '15,23 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170187/nutrients',
    },
  },
  {
    title: 'Walnussöl',
    color: 'green',
    id: 'A135',
    nutrients: {
      description:
        'Walnussöl ist ein hochwertiges Pflanzenöl aus reifen, teilweise auch gerösteten Samen von Walnüssen. Es ist von blass-grünlichgelber bis strohgelber Farbe, relativ dünnflüssig, hat einen intensiven, nussigen Geschmack und zeichnet sich durch einen besonders hohen Gehalt an Triglyceriden ungesättigter Fettsäuren aus.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Walnuss%C3%B6l',
      Kalorien: 884,
      Fettgehalt: '100 g',
      Kohlenhydrate: '0 g',
      Protein: '0 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/171030/nutrients',
    },
  },
  {
    title: 'Wasser',
    color: 'green',
    id: 'A136',
    nutrients: {
      description:
        'Wasser ist eine chemische Verbindung aus den Elementen Sauerstoff und Wasserstoff. Wasser ist als Flüssigkeit durchsichtig, weitgehend farb-, geruch- und geschmacklos. Es kommt in zwei Isomeren vor, die sich im Kernspin der beiden Wasserstoffatome unterscheiden.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Wasser',
      Kalorien: 0,
      Fettgehalt: '0 g',
      Kohlenhydrate: '0 g',
      Protein: '0 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/175096/nutrients',
    },
  },
  {
    title: 'Weizengras',
    color: 'green',
    id: 'A137',
    nutrients: {
      description:
        'nicht verfügbar, nächster Treffer: Als Weizengrassaft wird die Flüssigkeit bezeichnet, die heraustritt, wenn die jungen Triebe von Weichweizen (Triticum aestivum) nach wenigen Tagen (vor der Knotenbilung für neue Blätter – Jointing Stage) geerntet und danach gepresst werden.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Weizengrassaft',
      Kalorien: 213,
      Fettgehalt: '1,9 g',
      Kohlenhydrate: '2,3 g',
      Protein: '14,8 g',
      Quelle: 'https://fddb.mobi/de/naturprodukt_weizengras_pulver.html',
    },
  },
  {
    title: 'Wild (Rücken und Filet, Bioqualität)',
    color: 'green',
    id: 'A138',
    nutrients: {
      description:
        'Wild, teilweise auch deutlicher als Jagdwild bezeichnet, ist ein Sammelbegriff für die im Zusammenhang mit Jagd relevanten Säugetiere und Vögel. Der Begriff „Wild“ grenzt sich damit gegen den des Wildtieres ab, der allgemein alle freilebenden Tiere umfasst.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Wild',
      Kalorien: 104,
      Fettgehalt: '1,88 g',
      Kohlenhydrate: '0 g',
      Protein: '21,78 g',
      Quelle:
        'https://xn--diten-vergleichen-rqb.de/naehrwert-tabelle/tabelle-wild.php',
    },
  },
  {
    title: 'Wildkräuter',
    color: 'green',
    id: 'A139',
    nutrients: {
      description:
        'Der Begriff Wildkräuter bezeichnet krautige Wildpflanzen, vor allem in der direkten Umgebung des Menschen, in Gärten, Ackerland und Saumbiotopen.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Wildkraut',
      Kalorien: 39,
      Fettgehalt: '0 g',
      Kohlenhydrate: '0 g',
      Protein: '8 g',
      Quelle: 'https://www.yazio.com/de/kalorientabelle/giersch-frisch.html',
    },
  },
  {
    title: 'Wildlachs',
    color: 'green',
    id: 'A140',
    nutrients: {
      description:
        'Der Atlantische Lachs gehört zur Gattung der Lachse und lebt größtenteils im Atlantischen Ozean. Im Spätherbst ziehen die Lachse jedoch weit die Flüsse Europas und Nordamerikas hinauf, um an den Oberläufen zu laichen. Die Fische können bis zu 1,5 Meter lang werden und benötigen zum Laichen Kiesgründe.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Atlantischer_Lachs',
      Kalorien: 142,
      Fettgehalt: '6,34 g',
      Kohlenhydrate: '0 g',
      Protein: '19,84 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/173686/nutrients',
    },
  },
  {
    title: 'Wirsing',
    color: 'green',
    id: 'A141',
    nutrients: {
      description:
        'Wirsing, auch Wirsingkohl, Welschkohl, Welschkraut, Savoyen, Savoyerkohl, Bayerisch Wirsching, im Rheinland Schavur, schweizerdeutsch Wirz oder Köhli und in Österreich einfach nur Kohl genannt, ist ein Kopfkohl und eine Kulturvarietät des Gemüsekohls. Er zeichnet sich durch kraus gewellte Blätter aus.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Wirsing',
      Kalorien: 27,
      Fettgehalt: '0,1 g',
      Kohlenhydrate: '6,1 g',
      Protein: '2 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170388/nutrients',
    },
  },
  {
    title: 'Xylose',
    color: 'green',
    id: 'A142',
    nutrients: {
      description:
        'Xylose ist eine Aldopentose, eine Zuckerart mit fünf Kohlenstoff-Atomen und einer Aldehydgruppe als funktioneller Gruppe, die unter anderem bei der Hydrolyse von Holzgummi mit verdünnten Säuren entsteht. Aus ihr wird der Zuckeraustauschstoff Xylit hergestellt.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Xylose',
      Kalorien: 400,
      Fettgehalt: '0 g',
      Kohlenhydrate: '100 g',
      Protein: '0 g',
      Quelle: '',
    },
  },
  {
    title: 'Zander',
    color: 'green',
    id: 'A143',
    nutrients: {
      description:
        'Der Zander, auch Sander, Schill, Hechtbarsch, Zahnmaul oder Fogasch genannt, gehört zur Familie der Barsche. Er ist der größte im Süßwasser lebende Barschartige Europas. Er lebt in Europa vom Stromgebiet des Rheins bis zum Ural und in Westasien in der nordwestlichen Türkei und rund um das Kaspische Meer.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Zander',
      Kalorien: 90,
      Fettgehalt: '1 g',
      Kohlenhydrate: '0 g',
      Protein: '19 g',
      Quelle: 'https://www.wikifit.de/kalorientabelle/fisch/zander',
    },
  },
  {
    title: 'Ziegenkäse',
    color: 'green',
    id: 'A144',
    nutrients: {
      description:
        'Ziegenkäse ist Käse aus Ziegenmilch. Es gibt, wie auch bei Käse aus Kuhmilch, eine große Bandbreite von unterschiedlichen Sorten. Nicht jede Sorte wird zu 100 % aus Ziegenmilch hergestellt, oft ist Kuh- oder Schafsmilch untergemischt.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Ziegenk%C3%A4se',
      Kalorien: 364,
      Fettgehalt: '29,84 g',
      Kohlenhydrate: '0,12 g',
      Protein: '21,58 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/173433/nutrients',
    },
  },
  {
    title: 'Zimt',
    color: 'green',
    id: 'A145',
    nutrients: {
      description:
        'Der Zimt, veraltet auch Zimmet, Echter Zimt, ist ein Gewürz aus der getrockneten Rinde des Ceylon-Zimtbaums und verschiedener anderer Zimtbäume der Gattung Cinnamomum.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Zimt',
      Kalorien: 247,
      Fettgehalt: '1,24 g',
      Kohlenhydrate: '80,59 g',
      Protein: '3,99 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/171320/nutrients',
    },
  },
  {
    title: 'Zitrone',
    color: 'green',
    id: 'A146',
    nutrients: {
      description:
        'Die Zitrone oder Limone ist die etwa faustgroße Frucht des Zitronenbaums aus der Gattung der Zitruspflanzen. Es handelt sich um eine Gruppe von Sorten, die aus einer Kreuzung zwischen Bitterorange und Zitronatzitrone entstanden ist, wahrscheinlich im Norden Indiens.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Zitrone',
      Kalorien: 0,
      Fettgehalt: '0,3 g',
      Kohlenhydrate: '9,32 g',
      Protein: '1,1 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/167746/nutrients',
    },
  },
  {
    title: 'Zucchini',
    color: 'green',
    id: 'A147',
    nutrients: {
      description:
        'Die Zucchini, in der Deutschschweiz Zucchetti, sind eine Unterart des Gartenkürbisses und gehören zur Pflanzenfamilie der Kürbisgewächse. Zucchini sind einhäusig, das heißt, männliche und weibliche Geschlechtsorgane befinden sich in getrennten Blüten, aber an einer Pflanze.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Zucchini',
      Kalorien: 17,
      Fettgehalt: '0,32 g',
      Kohlenhydrate: '3,11 g',
      Protein: '1,21 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169291/nutrients',
    },
  },
  {
    title: 'Zuckerhut/Fleischkraut',
    color: 'green',
    id: 'A148',
    nutrients: {
      description:
        'Bei Fleischkraut, meist Zuckerhut (italienisch Pan di Zucchero, englisch Sugar Loaf, französisch Chicorée Pain De Sucre) genannt, handelt es sich um eine Form der Zichorie (Cichorium intybus var. foliosum; hier mit dem Zusatz f. cylindricum). Der Name Zuckerhut stammt von der Wuchsform, die einem Zuckerhut ähnelt, hat jedoch nichts mit dem Geschmack zu tun. Er bildet längliche, lockere Köpfe, vergleichbar mit Römersalat, auch als Bindesalat bekannt',
      descriptionLink: 'https://de.wikipedia.org/wiki/Fleischkraut',
      Kalorien: 16,
      Fettgehalt: '0,22 g',
      Kohlenhydrate: '1,5 g',
      Protein: '1,2 g',
      Quelle:
        'http://www.ernaehrung.de/lebensmittel/de/G109000/Zuckerhutsalat.php',
    },
  },
  {
    title: 'Zwiebeln',
    color: 'green',
    id: 'A149',
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
];

export const yellow = [
  {
    title: 'Amaranth',
    color: 'yellow',
    id: 'B1',
    nutrients: {
      description:
        'Amarant, auch Fuchsschwanz genannt, manchmal auch Amaranth geschrieben, ist eine Pflanzengattung innerhalb der Familie der Fuchsschwanzgewächse. Die 60 bis 98 Arten sind fast weltweit verbreitet.',
      descriptionLink:
        'https://de.wikipedia.org/wiki/Amarant_(Pflanzengattung)',
      Kalorien: 371,
      Fettgehalt: '7,02 g',
      Kohlenhydrate: '65,25 g',
      Protein: '13,56 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170682/nutrients',
    },
  },
  {
    title: 'Ananas',
    color: 'yellow',
    id: 'B2',
    nutrients: {
      description:
        'Die Ananas ist eine Pflanzenart aus der Familie der Bromeliengewächse. Sie ist ursprünglich in Amerika heimisch und wird heute weltweit in den tropischen Gebieten als Obstpflanze angebaut. Sie bildet fleischige Fruchtstände, die frisch verzehrt oder zu Konserven und Saft verarbeitet werden.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Ananas',
      Kalorien: 50,
      Fettgehalt: '0,12 g',
      Kohlenhydrate: '13,12 g',
      Protein: '0,54 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169124/nutrients',
    },
  },
  {
    title: 'Apfel',
    color: 'yellow',
    id: 'B3',
    nutrients: {
      description:
        'Aus dem Englischen übersetzt-Ein Apfel ist eine essbare Frucht, die von einem Apfelbaum produziert wird. Apfelbäume werden weltweit kultiviert und sind die am weitesten verbreitete Art in der Gattung Malus. Der Baum stammt ursprünglich aus Zentralasien, wo sein wilder Vorfahr Malus sieversii noch heute gefunden wird.',
      descriptionLink: 'https://en.wikipedia.org/wiki/Apple',
      Kalorien: 52,
      Fettgehalt: '0,17 g',
      Kohlenhydrate: '13,81 g',
      Protein: '0,26 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/171688/nutrients',
    },
  },
  {
    title: 'Aprikosen',
    color: 'yellow',
    id: 'B4',
    nutrients: {
      description:
        'Aus dem Englischen übersetzt-Eine Aprikose ist eine Frucht oder der Baum, der die Frucht mehrerer Arten der Gattung Prunus trägt.',
      descriptionLink: 'https://en.wikipedia.org/wiki/Apricot',
      Kalorien: 48,
      Fettgehalt: '0,39 g',
      Kohlenhydrate: '11,12 g',
      Protein: '1,4 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/171697/nutrients',
    },
  },
  {
    title: 'Arganöl',
    color: 'yellow',
    id: 'B5',
    nutrients: {
      description:
        'Das Arganöl ist ein Speiseöl, das aus den Samenplättchen der reifen Beerenfrucht des Arganbaums durch Pressung gewonnen wird. Die ausschließlich im Südwesten Marokkos gelegenen Gebiete der Arganeraie wurde im Jahr 1998 durch die UNESCO zum Biosphärenreservat erklärt.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Argan%C3%B6l',
      Kalorien: 900,
      Fettgehalt: '100 g',
      Kohlenhydrate: '0 g',
      Protein: '0 g',
      Quelle: 'https://www.yazio.com/de/kalorientabelle/arganoel.html',
    },
  },
  {
    title: 'Aroniabeeren',
    color: 'yellow',
    id: 'B6',
    nutrients: {
      description:
        'Die Apfelbeeren sind eine Pflanzengattung innerhalb der Familie der Rosengewächse. Die nur drei Arten stammen ursprünglich aus dem östlichen Nordamerika und wachsen dort als Strauch von ein bis zwei Metern Höhe. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Apfelbeeren',
      Kalorien: 96,
      Fettgehalt: '1,5 g',
      Kohlenhydrate: '18 g',
      Protein: '1,9 g',
      Quelle:
        'https://www.yazio.com/de/kalorientabelle/apfelbeeren-aroniabeeren-frisch.html',
    },
  },
  {
    title: 'Balsamico-Essig',
    color: 'yellow',
    id: 'B7',
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
    title: 'Basmati (Vollkorn)',
    color: 'yellow',
    id: 'B8',
    nutrients: {
      description:
        'Aus dem Englischen übersetzt-Basmati ist eine Sorte von langem, schlankkörnigem aromatischem Reis, der traditionell vom indischen Subkontinent stammt. Von 2018 bis 2019 exportierte Indien auf 65% des Basmatireismarktes in Übersee, während Pakistan den Rest ausmachte. Viele Länder verwenden im Inland angebaute Basmatireispflanzen.',
      descriptionLink: 'https://en.wikipedia.org/wiki/Basmati',
      Kalorien: 351,
      Fettgehalt: '0,3 g',
      Kohlenhydrate: '76 g',
      Protein: '8,9 g',
      Quelle:
        'https://www.wikifit.de/kalorientabelle/reisprodukte/basmati-reis',
    },
  },
  {
    title: 'Biofleisch',
    color: 'yellow',
    id: 'B9',
    nutrients: {
      description:
        'Als Bio-Lebensmittel werden Lebensmittel aus der ökologischen Landwirtschaft bezeichnet. Der Begriff ist in der EU gesetzlich definiert. Diese Produkte müssen aus ökologisch kontrolliertem Anbau stammen, dürfen nicht gentechnisch verändert sein und werden ohne Einsatz von chemisch-synthetischen Pflanzenschutzmitteln, Kunstdünger oder Klärschlamm angebaut. Tierische Produkte stammen von Tieren, die artgerecht gemäß EG-Öko-Verordnung[1] gehalten werden und in der Regel nicht mit Antibiotika und Wachstumshormonen behandelt wurden',
      descriptionLink: 'https://de.wikipedia.org/wiki/Bio-Lebensmittel',
      Kalorien: 0,
      Fettgehalt: '13,6 g',
      Kohlenhydrate: '0,5 g',
      Protein: '19,7 g',
      Quelle:
        'https://www.naehrwertrechner.de/naehrwerte/U010111/Rind+Hackfleisch+frisch',
    },
  },
  {
    title: 'Birne',
    color: 'yellow',
    id: 'B10',
    nutrients: {
      description:
        'Die Birnen bilden eine Pflanzengattung, die zu den Kernobstgewächsen in der Familie der Rosengewächse gehört.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Birnen',
      Kalorien: 57,
      Fettgehalt: '0,14 g',
      Kohlenhydrate: '15,23 g',
      Protein: '0,36 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169118/nutrients',
    },
  },
  {
    title: 'Brottrunk',
    color: 'yellow',
    id: 'B11',
    nutrients: {
      description:
        'Brottrunk ist ein flüssiges Lebensmittel der Firma Kanne Brottrunk GmbH & Co. KG, einem Familienunternehmen aus Lünen, das von dem Brottrunk-Erfinder, dem Bäckermeister Wilhelm Kanne sen., geführt wurde. Brottrunk wird durch Milchsäuregärung aus einem speziellen biologischen Vollkornsauerteigbrot gewonnen.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Brottrunk',
      Kalorien: 6,
      Fettgehalt: '0,1 g',
      Kohlenhydrate: '0,06 g',
      Protein: '0,2 g',
      Quelle: 'https://eatsmarter.de/lexikon/warenkunde/getraenke/brottrunk',
    },
  },
  {
    title: 'Buchweizen',
    color: 'yellow',
    id: 'B12',
    nutrients: {
      description:
        'Der Echte Buchweizen, auch Gemeiner Buchweizen, ist eine Pflanzenart aus der Gattung Buchweizen in der Familie der Knöterichgewächse. Manchmal wird er auch in die Gattung Polygonum eingeordnet. Buchweizen ist ein Pseudogetreide. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Echter_Buchweizen',
      Kalorien: 335,
      Fettgehalt: '3,1 g',
      Kohlenhydrate: '70,59 g',
      Protein: '12,62 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170687/nutrients',
    },
  },
  {
    title: 'Büffelfleisch',
    color: 'yellow',
    id: 'B13',
    nutrients: {
      description:
        'Als Büffel bezeichnet man in der deutschen Sprache mehrere Arten von afrikanischen und asiatischen Rindern, die zu den Gattungen Bubalus und Syncerus gehören. Darunter sind der asiatische Wasserbüffel und der afrikanische Kaffernbüffel am bekanntesten.',
      descriptionLink: 'https://de.wikipedia.org/wiki/B%C3%BCffel',
      Kalorien: 99,
      Fettgehalt: '1,37 g',
      Kohlenhydrate: '0 g',
      Protein: '20,39 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/175299/nutrients',
    },
  },
  {
    title: 'Butter',
    color: 'yellow',
    id: 'B14',
    nutrients: {
      description:
        'Butter ist ein meist aus dem Rahm von Milch hergestelltes Streichfett. Überwiegend wird Butter aus Kuhmilch hergestellt, es gibt jedoch auch Butter aus Schafmilch und Ziegenmilch.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Butter',
      Kalorien: 717,
      Fettgehalt: '81,11 g',
      Kohlenhydrate: '0,06 g',
      Protein: '0,85 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/173430/nutrients',
    },
  },
  {
    title: 'Cranberry (getrocknet ohne Zucker)',
    color: 'yellow',
    id: 'B15',
    nutrients: {
      description:
        'Die Großfrüchtige Moosbeere – niederdeutsch Kraanbeere oder Kranbeere – ist vor allem unter der englischen Bezeichnung Cranberry bekannt. Sie ist eine Pflanzenart aus der Gattung der Heidelbeeren in der Familie der Heidekrautgewächse.',
      descriptionLink:
        'https://de.wikipedia.org/wiki/Gro%C3%9Ffr%C3%BCchtige_Moosbeere',
      Kalorien: 46,
      Fettgehalt: '0,13 g',
      Kohlenhydrate: '11,97 g',
      Protein: '0,46 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/171722/nutrients',
    },
  },
  {
    title: 'Cranberry-Saft/Muttersaft',
    color: 'yellow',
    id: 'B16',
    nutrients: {
      description:
        'Die Großfrüchtige Moosbeere – niederdeutsch Kraanbeere oder Kranbeere – ist vor allem unter der englischen Bezeichnung Cranberry bekannt. Sie ist eine Pflanzenart aus der Gattung der Heidelbeeren in der Familie der Heidekrautgewächse.',
      descriptionLink:
        'https://de.wikipedia.org/wiki/Gro%C3%9Ffr%C3%BCchtige_Moosbeere',
      Kalorien: 46,
      Fettgehalt: '0,13 g',
      Kohlenhydrate: '12,2 g',
      Protein: '0,39 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/168117/nutrients',
    },
  },
  {
    title: 'Datteln',
    color: 'yellow',
    id: 'B18',
    nutrients: {
      description:
        'Die Echte Dattelpalme (Phoenix dactylifera) ist eine Pflanzenart der Gattung Dattelpalmen (Phoenix) in der Familie der Palmengewächse (Arecaceae). Ihre Früchte werden Datteln genannt. Die echte Dattelpalme ist eine alte orientalische Kulturpflanze, deren menschliche Nutzung sich bis in die Archive von Mesopotamien zurückverfolgen lässt.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Echte_Dattelpalme',
      Kalorien: 282,
      Fettgehalt: '0,39 g',
      Kohlenhydrate: '75,03 g',
      Protein: '2,45 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/171726/nutrients',
    },
  },
  {
    title: 'Dinkel (Bio-Qualität)',
    color: 'yellow',
    id: 'B19',
    nutrients: {
      description:
        'Dinkel oder Spelz ist eine Getreideart aus der Gattung des Weizens und ein enger Verwandter des heutigen Weichweizens. Es gibt sehr viele Mischformen und Übergänge zwischen „modernem“ Weizen und Dinkel, weil beide in manchen Regionen gemeinsam angebaut und auch miteinander gekreuzt wurden. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Dinkel',
      Kalorien: 338,
      Fettgehalt: '2,43 g',
      Kohlenhydrate: '70,19 g',
      Protein: '14,57 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169745/nutrients',
    },
  },
  {
    title: 'Dinkelbrot',
    color: 'yellow',
    id: 'B20',
    nutrients: {
      description:
        'Als Dinkelbrot bezeichnet man ein Brot, das vorwiegend aus Dinkelmehl oder Dinkelschrot gebacken wird. Einige Staaten kennen Vorschriften über die Zusammensetzung des Brotes, damit es als Dinkelbrot bezeichnet werden darf. In Deutschland muss ein Dinkelbrot aus mindestens 90 % Dinkelmahlerzeugnissen erstellt werden. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Dinkelbrot',
      Kalorien: 242,
      Fettgehalt: '3,5 g',
      Kohlenhydrate: '39,5 g',
      Protein: '10,4 g',
      Quelle: 'https://www.yazio.com/de/kalorientabelle/dinkelbrot.html',
    },
  },
  {
    title: 'Einkorn (Ur-Dinkel)',
    color: 'yellow',
    id: 'B21',
    nutrients: {
      description: '',
      descriptionLink: '',
      Kalorien: 0,
      Fettgehalt: ' g',
      Kohlenhydrate: ' g',
      Protein: ' g',
      Quelle: '',
    },
  },
  {
    title: 'Emmermehl (Ur-Weizen)',
    color: 'yellow',
    id: 'B22',
    nutrients: {
      description:
        'Einkorn, auch Blicken oder Kleiner Spelz genannt, ist eine der ältesten domestizierten Getreidearten. Einkorn stammt vom wilden Weizen ab, der im Gegensatz zu Einkorn eine brüchige Ährchengabel hat.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Einkorn',
      Kalorien: 320,
      Fettgehalt: '2,6 g',
      Kohlenhydrate: '62 g',
      Protein: '19 g',
      Quelle: 'https://eatsmarter.de/lexikon/warenkunde/getreide/einkorn',
    },
  },
  {
    title: 'Erdbeeren',
    color: 'yellow',
    id: 'B23',
    nutrients: {
      description:
        'Die Erdbeeren sind eine Gattung in der Unterfamilie der Rosoideae innerhalb der Familie der Rosengewächse. Zur Gattung Fragaria gehören ungefähr zwanzig Arten, meistens in den gemäßigten Zonen der Nordhalbkugel vorkommend, und verschiedene Unterarten; daneben gibt es viele hybride Formen mit zahlreichen Kultursorten.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Erdbeeren',
      Kalorien: 32,
      Fettgehalt: '0,3 g',
      Kohlenhydrate: '7,68 g',
      Protein: '0,67 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/167762/nutrients',
    },
  },
  {
    title: 'Erytrithol',
    color: 'yellow',
    id: 'B24',
    nutrients: {
      description:
        'Erythrit ist eine süß schmeckende Verbindung und gehört chemisch zu den Zuckeralkoholen. Es stellt die meso-Form des optisch aktiven Threit dar und wird als Zuckeraustauschstoff verwendet. Es besitzt etwa 50–70 Prozent der Süßkraft von Zucker.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Erythrit',
      Kalorien: 0,
      Fettgehalt: '0 g',
      Kohlenhydrate: '100 g',
      Protein: '0 g',
      Quelle:
        'https://buxtrade.de/de/sweetener/erythritol-erythrit-zuckerersatz-kalorienfrei',
    },
  },
  {
    title: 'Essig',
    color: 'yellow',
    id: 'B25',
    nutrients: {
      description:
        'Essig ist ein sauer schmeckendes Würz- und Konservierungsmittel, das durch Fermentation alkoholhaltiger Flüssigkeiten mit Essigsäurebakterien hergestellt wird. Essig ist im Wesentlichen eine verdünnte Lösung von Essigsäure in Wasser.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Essig',
      Kalorien: 18,
      Fettgehalt: '0 g',
      Kohlenhydrate: '0,04 g',
      Protein: '0 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/172237/nutrients',
    },
  },
  {
    title: 'Esskastanien/Maronen',
    color: 'yellow',
    id: 'B26',
    nutrients: {
      description:
        'Die Edelkastanie, auch Esskastanie genannt, ist der einzige europäische Vertreter der Gattung Kastanien aus der Familie der Buchengewächse. Die Edelkastanie ist ein sommergrüner Baum und bildet stärkereiche Nussfrüchte. In Süd- und Westeuropa wird sie wegen dieser essbaren Früchte und als Holzlieferant angebaut.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Edelkastanie',
      Kalorien: 196,
      Fettgehalt: '1,25 g',
      Kohlenhydrate: '44,17 g',
      Protein: '1,63 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170575/nutrients',
    },
  },
  {
    title: 'Früchtetee',
    color: 'yellow',
    id: 'B27',
    nutrients: {
      description:
        'Früchtetee ist ein teeähnliches Aufgussgetränk. Es gibt klassische Früchtetees aus einer einzigen Pflanzenart, wie Hagebuttentee, und Mischungen aus verschiedenen Früchten.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Fr%C3%BCchtetee',
      Kalorien: 3,
      Fettgehalt: '0 g',
      Kohlenhydrate: '0,8 g',
      Protein: '0,2 g',
      Quelle:
        'https://fddb.info/db/de/lebensmittel/durchschnittswert_fruechtetee/index.html',
    },
  },
  {
    title: 'Fruchtsaft, ftisch gepresst (Beere, Grapefruit)',
    color: 'yellow',
    id: 'B28',
    nutrients: {
      description:
        'Aus dem Englischen übersetzt-Grapefruitsaft ist der Saft von Grapefruits. Es ist reich an Vitamin C und reicht von süß-sauer bis sehr sauer. Zu den Variationen gehören weiße Grapefruit, rosa Grapefruit und rubinroter Grapefruitsaft.',
      descriptionLink: 'https://en.wikipedia.org/wiki/Grapefruit_juice',
      Kalorien: 39,
      Fettgehalt: '0,1 g',
      Kohlenhydrate: '9,2 g',
      Protein: '0,5 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/167774/nutrients',
    },
  },
  {
    title: 'Gojibeeren (getrocknet)',
    color: 'yellow',
    id: 'B29',
    nutrients: {
      description:
        'Aus dem Englischen übersetzt-Goji, Goji-Beere oder Wolfsbeere ist die Frucht von Lycium barbarum oder Lycium chinense, zwei eng verwandten Boxthornarten aus der Familie der Nachtschattengewächse, Solanaceae.',
      descriptionLink: 'https://en.wikipedia.org/wiki/Goji',
      Kalorien: 349,
      Fettgehalt: '0,39 g',
      Kohlenhydrate: '77,06 g',
      Protein: '14,26 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/173032/nutrients',
    },
  },
  {
    title: 'Granatapfel',
    color: 'yellow',
    id: 'B30',
    nutrients: {
      description:
        'Der Granatapfel ist eine Pflanzenart, die der Familie der Weiderichgewächse zugerechnet wird. Die aus zwei Arten bestehende Gattung Punica bildet alleine die Unterfamilie Punicoideae S.A.Graham, Thorne & Reveal, manche Autoren führen sie auch noch als eigene monotypische Familie Punicaceae Horan.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Granatapfel',
      Kalorien: 83,
      Fettgehalt: '1,17 g',
      Kohlenhydrate: '18,7 g',
      Protein: '1,67 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169134/nutrients',
    },
  },
  {
    title: 'Guarkenmehl',
    color: 'yellow',
    id: 'B31',
    nutrients: {
      description:
        'Guaran, auch Guargummi genannt, ist ein Pflanzengummi. Die chemische Verbindung aus der Gruppe der Polysaccharide ist Hauptbestandteil von Guarkernmehl. Guaran wird unter anderem als Lebensmittelzusatzstoff E 412 verwendet. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Guaran',
      Kalorien: 29,
      Fettgehalt: '0,8 g',
      Kohlenhydrate: '0 g',
      Protein: '5 g',
      Quelle:
        'https://www.yazio.com/de/kalorientabelle/guarkernmehl-getreideersatz-bindemittel.html',
    },
  },
  {
    title: 'Haferflocken (kernige)',
    color: 'yellow',
    id: 'B32',
    nutrients: {
      description:
        'Haferflocken sind ein Grundnahrungsmittel, das aus Saat-Hafer hergestellt wird. Sie werden aus dem vollen Korn hergestellt und es werden nur nicht-essbare Teile entfernt, damit sind sie Vollkorn.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Haferflocken',
      Kalorien: 373,
      Fettgehalt: '6,7 g',
      Kohlenhydrate: '59,5 g',
      Protein: '13,2 g',
      Quelle:
        'https://www.yazio.com/de/kalorientabelle/hafer-haferflocken-kernige.html',
    },
  },
  {
    title: 'Hefe',
    color: 'yellow',
    id: 'B33',
    nutrients: {
      description:
        'Backhefe, auch Bierhefe, Bäckerhefe, Bärme, norddeutsch Gest, bairisch Germ, lat.-wiss. Saccharomyces cerevisiae, umgangssprachlich kurz Hefe, gehört zu den Hefen und ist eine Knospungs-Hefe.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Backhefe',
      Kalorien: 105,
      Fettgehalt: '1,9 g',
      Kohlenhydrate: '18,1 g',
      Protein: '8,4 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/175042/nutrients',
    },
  },
  {
    title: 'Hefeflocken',
    color: 'yellow',
    id: 'B34',
    nutrients: {
      description:
        'Nährhefe ist eine durch Hitze inaktivierte Hefe, die einen relativ hohen Nährwert und vor allem einen hohen Gehalt an Vitamin B hat. Sie wird unter anderem als Nährhefeflocken oder als Pulver verkauft, und ist eine der typischen Zutaten der vegetarischen und veganen Küche.',
      descriptionLink: 'https://de.wikipedia.org/wiki/N%C3%A4hrhefe',
      Kalorien: 491,
      Fettgehalt: '7,5 g',
      Kohlenhydrate: '54 g',
      Protein: '37,5 g',
      Quelle:
        'https://www.yazio.com/de/kalorientabelle/hefeflocken-rapunzel.html',
    },
  },
  {
    title: 'Hirse',
    color: 'yellow',
    id: 'B35',
    nutrients: {
      description:
        'Hirse ist eine Sammelbezeichnung für kleinfrüchtiges Spelzgetreide mit 10–12 Gattungen. Sie gehören zur Familie der Süßgräser. Der früher auch männlich gebrauchte Name Hirse stammt aus dem Altgermanischen und ist von einem indogermanischen Wort für „Sättigung, Nährung, Nahrhaftigkeit“ abgeleitet.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Hirse',
      Kalorien: 378,
      Fettgehalt: '4,22 g',
      Kohlenhydrate: '72,85 g',
      Protein: '11,02 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169702/nutrients',
    },
  },
  {
    title: 'Holunderbeere',
    color: 'yellow',
    id: 'B36',
    nutrients: {
      description:
        'Die Holunder bilden eine Pflanzengattung in der Familie der Moschuskrautgewächse. Die Gattung enthält weltweit etwas mehr als zehn Arten, von denen drei in Mitteleuropa heimisch sind.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Holunder',
      Kalorien: 73,
      Fettgehalt: '0,5 g',
      Kohlenhydrate: '18,4 g',
      Protein: '0,66 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/171727/nutrients',
    },
  },
  {
    title: 'Honigmelone',
    color: 'yellow',
    id: 'B37',
    nutrients: {
      description:
        'Die Zuckermelone oder Melone ist eine aus den Tropen und Subtropen stammende Pflanzenart, deren Beerenfrüchte als Obst genutzt werden. Sie ist eine Art aus der Gattung der Gurken, daher mit der Gurke näher verwandt als mit der Wassermelone, die jedoch wie die Zuckermelone zur Familie der Kürbisgewächse gehört.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Zuckermelone',
      Kalorien: 34,
      Fettgehalt: '0,19 g',
      Kohlenhydrate: '8,16 g',
      Protein: '0,84 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169092/nutrients',
    },
  },
  {
    title: 'Inulin',
    color: 'yellow',
    id: 'B38',
    nutrients: {
      description:
        'nulin ist ein Gemisch von Polysacchariden aus Fructosebausteinen mit einer Kettenlänge von bis zu 100 Monomeren und einem endständigen Glucoserest. Es zählt zu den Fructanen.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Inulin',
      Kalorien: 210,
      Fettgehalt: '0 g',
      Kohlenhydrate: '8 g',
      Protein: '0 g',
      Quelle:
        'https://www.fitmart.de/Low-Carb/Ballaststoffe/ESN-Inulin-500g.html',
    },
  },
  {
    title: 'Isomaltulose/Isomaltose',
    color: 'yellow',
    id: 'B39',
    nutrients: {
      description:
        'Isomaltose ist eine chemische Verbindung aus der Gruppe der Disaccharide. Sie ähnelt der Maltose, jedoch mit einer α--Bindung anstelle der α--Bindung. Beide Zuckerarten sind reduzierende Zucker. Sie entsteht unter anderem bei der Verdauung von Stärke und Glycogen im Darm.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Isomaltose',
      Kalorien: 378,
      Fettgehalt: '0 g',
      Kohlenhydrate: '100 g',
      Protein: '0 g',
      Quelle:
        'http://www.foodplaner.de/kalorientabelle-isomaltulose+nutrion+dicount+germany-170375-my%20food.html',
    },
  },
  {
    title: 'Johannisbrotmehl',
    color: 'yellow',
    id: 'B40',
    nutrients: {
      description:
        'Der Johannisbrotbaum bzw. in Österreich Bockshörndlbaum, auch Karubenbaum oder Karobbaum genannt, ist eine Pflanzenart aus der Unterfamilie der Johannisbrotgewächse innerhalb der Familie der Hülsenfrüchtler. Diese Art kommt im Mittelmeerraum und Vorderasien vor.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Johannisbrotbaum',
      Kalorien: 202,
      Fettgehalt: '1,4 g',
      Kohlenhydrate: '7,3 g',
      Protein: '4,5 g',
      Quelle:
        'http://www.ernaehrung.de/lebensmittel/de/R465000/Johannisbrotkernmehl.php',
    },
  },
  {
    title: 'Jostabeere',
    color: 'yellow',
    id: 'B41',
    nutrients: {
      description:
        'Die Jostabeere oder Josta, in Süddeutschland oft Jochelbeere, in Österreich auch Rigatze oder Joglbeere, ist ein Beerenobst; es ist als Additionsbastard hauptsächlich aus den beiden Arten Schwarze Johannisbeere und Stachelbeere entstanden, auch die nordamerikanische Art Ribes divaricatum wurde eingekreuzt.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Jostabeere',
      Kalorien: 47,
      Fettgehalt: '0,2 g',
      Kohlenhydrate: '8,5 g',
      Protein: '0,9 g',
      Quelle: 'https://ernaehrungstagebuch-deluxe.de/kalorien/jostabeere/15309',
    },
  },
  {
    title: 'Kamut',
    color: 'yellow',
    id: 'B42',
    nutrients: {
      description:
        'Aus dem Englischen übersetzt-Khorasan-Weizen oder orientalischer Weizen, im Handel als Kamut bekannt, ist eine tetraploide Weizenart. Es ist ein alter Getreidetyp; Khorasan bezieht sich auf eine historische Region im heutigen Afghanistan und im Iran im Nordosten und in Teilen Zentralasiens.',
      descriptionLink: 'https://en.wikipedia.org/wiki/Khorasan_wheat',
      Kalorien: 346,
      Fettgehalt: '2,4 g',
      Kohlenhydrate: '61,7 g',
      Protein: '14,8 g',
      Quelle:
        'http://www.ernaehrung.de/lebensmittel/de/DAVERT168/KAMUT-Khorasan-Weizen,-Davert.php',
    },
  },
  {
    title: 'Karotten',
    color: 'yellow',
    id: 'B43',
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
  },
  {
    title: 'Kartoffeln, rot',
    color: 'yellow',
    id: 'B44',
    nutrients: {
      description:
        'Die Kartoffel, in Teilen Deutschlands, Österreichs und der Schweiz auch als Erdapfel, Erdbirne, Potaten oder Grundbirne und im restlichen deutschsprachigen Raum unter verschiedenen Regionalnamen wie Potacke bekannt, ist eine Nutzpflanze aus der Familie der Nachtschattengewächse.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Kartoffel',
      Kalorien: 70,
      Fettgehalt: '0,14 g',
      Kohlenhydrate: '15,9 g',
      Protein: '1,89 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170029/nutrients',
    },
  },
  {
    title: 'Kastanienmehl',
    color: 'yellow',
    id: 'B45',
    nutrients: {
      description:
        'Die Edelkastanie, auch Esskastanie genannt, ist der einzige europäische Vertreter der Gattung Kastanien aus der Familie der Buchengewächse. Die Edelkastanie ist ein sommergrüner Baum und bildet stärkereiche Nussfrüchte. In Süd- und Westeuropa wird sie wegen dieser essbaren Früchte und als Holzlieferant angebaut.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Edelkastanie',
      Kalorien: 325,
      Fettgehalt: '3 g',
      Kohlenhydrate: '64,1 g',
      Protein: '3,9 g',
      Quelle:
        'http://www.ernaehrung.de/lebensmittel/de/HANNE003/Kastanienmehl---glutenfrei,-Hanneforth.php',
    },
  },
  {
    title: 'Kichererbsen',
    color: 'yellow',
    id: 'B46',
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
    title: 'Kiwi',
    color: 'yellow',
    id: 'B47',
    nutrients: {
      description:
        'Als Kiwi, Kiwifrucht oder Chinesische Stachelbeere bezeichnet man die Beerenfrucht mehrerer Arten der Strahlengriffel. Ursprünglich stammen alle Kiwiarten aus Ostasien. Die Frucht bezeichnet man als "die Kiwi", wohingegen der Vogel "der Kiwi" ist.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Kiwifrucht',
      Kalorien: 61,
      Fettgehalt: '0,52 g',
      Kohlenhydrate: '14,66 g',
      Protein: '1,14 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/168153/nutrients',
    },
  },
  {
    title: 'Kokosblütenzucker',
    color: 'yellow',
    id: 'B48',
    nutrients: {
      description:
        'Aus dem Englischen übersetzt-Kokosnusszucker ist ein Palmzucker, der aus dem Saft des Blütenknospenstiels der Kokospalme hergestellt wird. Andere Arten von Palmzucker werden aus der Kithul-Palme, der Palmyra-Palme, der Dattelpalme, der Zuckerdattelpalme, der Sagopalme oder der Zuckerpalme hergestellt. ',
      descriptionLink: 'https://en.wikipedia.org/wiki/Coconut_sugar',
      Kalorien: 384,
      Fettgehalt: '0,5 g',
      Kohlenhydrate: '94 g',
      Protein: '1 g',
      Quelle:
        'https://www.bmi-rechner.net/kalorien-naehrwerte/kalorien-kokosbluetenzucker.htm',
    },
  },
  {
    title: 'Kürbis',
    color: 'yellow',
    id: 'B49',
    nutrients: {
      description:
        'Die Kürbisse bilden eine Pflanzengattung aus der Familie der Kürbisgewächse. Fünf Arten werden kultiviert: Cucurbita argyrosperma, Feigenblatt-Kürbis, Riesen-Kürbis, Moschus-Kürbis und Garten-Kürbis.',
      descriptionLink: 'https://de.wikipedia.org/wiki/K%C3%BCrbisse',
      Kalorien: 26,
      Fettgehalt: '0,1 g',
      Kohlenhydrate: '6,5 g',
      Protein: '1 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/168448/nutrients',
    },
  },
  {
    title: 'Kürbiskernöl',
    color: 'yellow',
    id: 'B50',
    nutrients: {
      description:
        'Aus dem Englischen übersetzt-Ein Kürbiskern, in Nordamerika auch als Pepita bekannt, ist der essbare Samen eines Kürbises oder bestimmter anderer Kürbissorten. Die Samen sind typischerweise flach und asymmetrisch oval, haben eine weiße äußere Schale und sind hellgrün gefärbt, nachdem die Schale entfernt wurde.',
      descriptionLink: 'https://en.wikipedia.org/wiki/Pumpkin_seed',
      Kalorien: 884,
      Fettgehalt: '100 g',
      Kohlenhydrate: '0 g',
      Protein: '0 g',
      Quelle:
        'http://www.ernaehrung.de/lebensmittel/de/Q250000/Kuerbiskernoel.php',
    },
  },
  {
    title: 'lactosefreie Milchprodukte',
    color: 'yellow',
    id: 'B51',
    nutrients: {
      description:
        'Lactose, Milchzucker oder Laktose ist ein in Milch enthaltener Zucker. Das Disaccharid besteht aus den beiden Molekülen D-Galactose und D-Glucose, die über eine β-1,4-glycosidische Bindung miteinander verbunden sind.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Lactose',
      Kalorien: 67,
      Fettgehalt: '3,8 g',
      Kohlenhydrate: '4,8 g',
      Protein: '3,3 g',
      Quelle: 'https://www.minusl.de/produkte/minusl-frische-milch-38/',
    },
  },
  {
    title: 'Limetten',
    color: 'yellow',
    id: 'B52',
    nutrients: {
      description:
        'Als Limette bezeichnet man mehrere Arten von Zitrusfrüchten.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Limette',
      Kalorien: 30,
      Fettgehalt: '0,2 g',
      Kohlenhydrate: '10,54 g',
      Protein: '0,7 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/168155/nutrients',
    },
  },
  {
    title: 'Mais',
    color: 'yellow',
    id: 'B53',
    nutrients: {
      description:
        'Mais, in Teilen Österreichs und Altbayerns auch Kukuruz genannt, ist eine Pflanzenart innerhalb der Familie der Süßgräser. Das Getreide stammt ursprünglich aus Mexiko und ist eine einhäusig getrenntgeschlechtige C₄-Pflanze. Wirtschaftlich bedeutend ist die Unterart Zea mays subsp. mays.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Mais',
      Kalorien: 365,
      Fettgehalt: '4,74 g',
      Kohlenhydrate: '74,26 g',
      Protein: '9,42 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170288/nutrients',
    },
  },
  {
    title: 'Maisnudeln',
    color: 'yellow',
    id: 'B54',
    nutrients: {
      description:
        'Mais, in Teilen Österreichs und Altbayerns auch Kukuruz genannt, ist eine Pflanzenart innerhalb der Familie der Süßgräser. Das Getreide stammt ursprünglich aus Mexiko und ist eine einhäusig getrenntgeschlechtige C₄-Pflanze. Wirtschaftlich bedeutend ist die Unterart Zea mays subsp. mays.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Mais',
      Kalorien: 350,
      Fettgehalt: '0,5 g',
      Kohlenhydrate: '76,8 g',
      Protein: '5,9 g',
      Quelle: 'https://www.yazio.com/de/kalorientabelle/maisnudeln-spar.html',
    },
  },
  {
    title: 'Mandarinen',
    color: 'yellow',
    id: 'B55',
    nutrients: {
      description:
        'Mandarine bezeichnet sowohl eine Zitruspflanze aus der Familie der Rautengewächse als auch die orangenfarbene Frucht derselben.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Mandarine',
      Kalorien: 53,
      Fettgehalt: '0,31 g',
      Kohlenhydrate: '13,34 g',
      Protein: '0,81 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169105/nutrients',
    },
  },
  {
    title: 'Mandelmus',
    color: 'yellow',
    id: 'B56',
    nutrients: {
      description:
        'Der Mandelbaum ist eine Pflanzenart der Gattung Prunus in der Familie der Rosengewächse. Seine Samen, die Mandeln, genannt auch Mandelkerne, werden als Nahrungsmittel und Kosmetikum genutzt.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Mandelbaum',
      Kalorien: 649,
      Fettgehalt: '57,4 g',
      Kohlenhydrate: '5 g',
      Protein: '23,4 g',
      Quelle: 'https://www.rapunzel.de/bio-produkt-mandelmus--130100.html',
    },
  },
  {
    title: 'Mango',
    color: 'yellow',
    id: 'B57',
    nutrients: {
      description:
        'Die Mango ist eine Pflanzenart aus der Gattung Mangos innerhalb der Familie Sumachgewächse. Sie wird häufig kultiviert, liefert Obst sowie Öl und wird als Heilpflanze verwendet.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Mango',
      Kalorien: 62,
      Fettgehalt: '0,4 g',
      Kohlenhydrate: '12,5 g',
      Protein: '0,6 g',
      Quelle:
        'https://www.plantura.garden/leserfragen-2/obst/mango-kalorien-und-naehrwerte',
    },
  },
  {
    title: 'Mango (getrocknet)',
    color: 'yellow',
    id: 'B58',
    nutrients: {
      description:
        'Die Mango ist eine Pflanzenart aus der Gattung Mangos innerhalb der Familie Sumachgewächse. Sie wird häufig kultiviert, liefert Obst sowie Öl und wird als Heilpflanze verwendet.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Mango',
      Kalorien: 319,
      Fettgehalt: '1,18 g',
      Kohlenhydrate: '78,58 g',
      Protein: '2,45 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/786611/nutrients',
    },
  },
  {
    title: 'Mate-Tee',
    color: 'yellow',
    id: 'B59',
    nutrients: {
      description:
        'Der Mate-Tee oder Mate, Matetee, Jesuiten-, Missions-, Paraguay- oder Paranatee, spanisch Yerba-Mate, portugiesisch Erva Mate, Chimarrão, ist ein Aufgussgetränk aus den kleingeschnittenen trockenen Blättern des Mate-Strauchs Ilex paraguariensis. Das Getränk ist in Südamerika verbreitet.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Mate-Tee',
      Kalorien: 0,
      Fettgehalt: '0 g',
      Kohlenhydrate: '0 g',
      Protein: '0,1 g',
      Quelle:
        'http://www.ernaehrung.de/lebensmittel/de/N611000/Mate-Tee-(Getraenk).php',
    },
  },
  {
    title: 'Mu-Err',
    color: 'yellow',
    id: 'B60',
    nutrients: {
      description:
        'Das Judasohr ist ein nahezu weltweit verbreiteter Pilz. Eine ähnliche Art mit ostasiatischer Verbreitung wird als Mu-Err, Black Fungus, Holunderpilz oder -schwamm, Ohrlappenpilz oder Wolkenohrenpilz bezeichnet, der in vielen Gerichten der asiatischen und speziell auch der chinesischen Küche verwendet wird.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Judasohr',
      Kalorien: 25,
      Fettgehalt: '0,1 g',
      Kohlenhydrate: '5,4 g',
      Protein: '0,9 g',
      Quelle: 'https://fddb.mobi/de/naturprodukt_mu-err_pilze_frisch.html',
    },
  },
  {
    title: 'Orange',
    color: 'yellow',
    id: 'B61',
    nutrients: {
      description:
        'Die Orange, nördlich der Speyerer Linie auch Apfelsine genannt, ist ein immergrüner Baum, im Speziellen wird auch dessen Frucht so genannt. Der gültige botanische Name der Orange ist Citrus × sinensis L., damit gehört sie zur Gattung der Zitruspflanzen in der Familie der Rautengewächse.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Orange_(Frucht)',
      Kalorien: 46,
      Fettgehalt: '0,21 g',
      Kohlenhydrate: '11,54 g',
      Protein: '0,7 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169918/nutrients',
    },
  },
  {
    title: 'Passionsfrucht/Maracuja',
    color: 'yellow',
    id: 'B62',
    nutrients: {
      description:
        'Passiflora edulis ist eine Art aus der zu den Passionsblumengewächsen zählenden Gattung der Passionsblumen. Das Art-Epitheton edulis bedeutet „essbar“. Innerhalb der Art werden verschiedene Sorten und Formen unterschieden, unter denen forma edulis und forma flavicarpa die wirtschaftlich größte Bedeutung haben.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Passiflora_edulis',
      Kalorien: 97,
      Fettgehalt: '0,7 g',
      Kohlenhydrate: '23,38 g',
      Protein: '2,2 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169108/nutrients',
    },
  },
  {
    title: 'Pastinaken',
    color: 'yellow',
    id: 'B63',
    nutrients: {
      description:
        'Der Pastinak, auch die Pastinake, ist eine Pflanzenart aus der Gattung der Pastinaken in der Familie der Doldenblütler. Als Wildform gilt Pastinaca sativa subsp. sativa var. pratensis; die Kulturform Gemüse-Pastinak wird als Pastinaca sativa subsp. sativa var. sativa bezeichnet.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Pastinak',
      Kalorien: 75,
      Fettgehalt: '0,3 g',
      Kohlenhydrate: '17,99 g',
      Protein: '1,2 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170417/nutrients',
    },
  },
  {
    title: 'Pfirsich',
    color: 'yellow',
    id: 'B64',
    nutrients: {
      description:
        'Der Pfirsich ist eine Pflanzenart aus der Gattung Prunus innerhalb der Familie der Rosengewächse. Seine Früchte werden Pfirsiche genannt und zählen zum Steinobst.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Pfirsich',
      Kalorien: 39,
      Fettgehalt: '0,25 g',
      Kohlenhydrate: '9,54 g',
      Protein: '0,91 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169928/nutrients',
    },
  },
  {
    title: 'Pilzmischung (tiefgekühlt)',
    color: 'yellow',
    id: 'B65',
    nutrients: {
      description:
        'Die Pilze bilden das dritte große Reich eukaryotischer Lebewesen neben den Tieren und den Pflanzen. Sie sind wie die Pflanzen, zu denen sie lange gerechnet wurden, sesshaft, können jedoch keine Photosynthese treiben.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Pilze',
      Kalorien: 22,
      Fettgehalt: '0,34 g',
      Kohlenhydrate: '3,26 g',
      Protein: '3,09 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169251/nutrients',
    },
  },
  {
    title: 'Quinoa',
    color: 'yellow',
    id: 'B66',
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
  },
  {
    title: 'Quitte (verarbeitet) Mus, Gelee',
    color: 'yellow',
    id: 'B67',
    nutrients: {
      description:
        'Die Quitte ist die einzige Pflanzenart der Gattung Cydonia und gehört zur Untertribus der Kernobstgewächse innerhalb der Familie der Rosengewächse. Sie wird als Obstbaum kultiviert.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Quitte',
      Kalorien: 57,
      Fettgehalt: '0,1 g',
      Kohlenhydrate: '15,3 g',
      Protein: '0,4 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/168163/nutrients',
    },
  },
  {
    title: 'Reginbrot reiner Roggen',
    color: 'yellow',
    id: 'B68',
    nutrients: {
      description:
        'Roggen ist eine in den gemäßigten Breiten verbreitete Getreideart aus der Familie der Süßgräser. Er liefert auch auf leichteren oder sandigen Böden und an kühleren oder feuchten Standorten noch gute Erträge. In Europa wird häufig Winterroggen angebaut, während Sommerroggen eine untergeordnete Bedeutung hat.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Roggen',
      Kalorien: 259,
      Fettgehalt: '3,3 g',
      Kohlenhydrate: '48,3 g',
      Protein: '8,5 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/172684/nutrients',
    },
  },
  {
    title: 'Reismilch',
    color: 'yellow',
    id: 'B69',
    nutrients: {
      description:
        'Reismilch ist eine Form der Getreidemilch. Sie wird aus Reis hergestellt und darf daher in der EU nicht als Milch verkauft werden, und wird daher u. a. als „Reis Drink“ vermarktet.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Reismilch',
      Kalorien: 47,
      Fettgehalt: '0,97 g',
      Kohlenhydrate: '9,17 g',
      Protein: '0,28 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/171942/nutrients',
    },
  },
  {
    title: 'Rind (Rücken und Filet, Bioqualität',
    color: 'yellow',
    id: 'B70',
    nutrients: {
      description:
        'Als Rindfleisch bezeichnet man im deutschsprachigen Raum allgemein das Fleisch verschiedener Hausrindrassen, das nach der Schlachtung von Tieren aus der Rinderproduktion erzeugt wird. In der Warenkunde wird auch das Fleisch von Wildrindern hinzugezählt, während dies in der Speisenlehre zum Wildfleisch gerechnet wird.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Rindfleisch',
      Kalorien: 250,
      Fettgehalt: '15,41 g',
      Kohlenhydrate: '0 g',
      Protein: '25,93 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/174032/nutrients',
    },
  },
  {
    title: 'roter Reis',
    color: 'yellow',
    id: 'B71',
    nutrients: {
      description:
        'Als Reis werden die Getreidekörner der Pflanzenarten Oryza sativa und Oryza glaberrima bezeichnet. Oryza sativa wird weltweit in vielen Ländern angebaut, Oryza glaberrima in Westafrika. Zur Gattung Reis gehören außer diesen beiden Reispflanzen noch weitere 17 Arten, die aber nicht domestiziert wurden.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Reis',
      Kalorien: 350,
      Fettgehalt: '1,7 g',
      Kohlenhydrate: '75 g',
      Protein: '7,5 g',
      Quelle:
        'http://www.ernaehrung.de/lebensmittel/de/DAVERT048/Roter-Reis,-Davert.php',
    },
  },
  {
    title: 'Rotwein',
    color: 'yellow',
    id: 'B72',
    nutrients: {
      description:
        'Rotwein ist ein aus blauen Weintrauben hergestellter Wein. Neben der Art der verwendeten Trauben unterscheidet er sich auch im Herstellungsprozess vom Weißwein oder Roséwein. Ein Rotwein entsteht durch Mazeration oder Digestion.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Rotwein',
      Kalorien: 85,
      Fettgehalt: '0 g',
      Kohlenhydrate: '2,61 g',
      Protein: '0,07 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/173190/nutrients',
    },
  },
  {
    title: 'Sahne',
    color: 'yellow',
    id: 'B73',
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
    title: 'Salami (Bio-Qualität)',
    color: 'yellow',
    id: 'B74',
    nutrients: {
      description:
        'Die Salami ist eine europäische Rohwurstsorte aus Schweinefleisch und anderen Fleischsorten.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Salami',
      Kalorien: 336,
      Fettgehalt: '25,9 g',
      Kohlenhydrate: '2,4 g',
      Protein: '21,85 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/172936/nutrients',
    },
  },
  {
    title: 'Sanddornsaft',
    color: 'yellow',
    id: 'B75',
    nutrients: {
      description:
        'Sanddorn, auch Fasanbeer, Haffdorn, Seedorn und häufig „Zitrone des Nordens“ genannt, ist eine Pflanzenart aus der Gattung der Sanddorne innerhalb der Familie der Ölweidengewächse. Der botanische Gattungsname Hippophae enthält die beiden griechischen Wörter hippos und phaes.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Sanddorn',
      Kalorien: 58,
      Fettgehalt: '0,9 g',
      Kohlenhydrate: '14 g',
      Protein: '0,1 g',
      Quelle:
        'https://www.yazio.com/de/kalorientabelle/sanddornsaft-libehna.html',
    },
  },
  {
    title: 'Schokolade (ab 90% Kakao-Anteil)',
    color: 'yellow',
    id: 'B76',
    nutrients: {
      description:
        'Bitterschokolade ist Schokolade mit hohem Kakaoanteil. Andere Bezeichnungen sind Feinherb, Edelbitter, Zartbitter, dunkle oder schwarze Schokolade.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Bitterschokolade',
      Kalorien: 592,
      Fettgehalt: '55 g',
      Kohlenhydrate: '14 g',
      Protein: '10 g',
      Quelle:
        'https://www.yazio.com/de/kalorientabelle/excellence-mild-90-cacao-lindt.html',
    },
  },
  {
    title: 'Senf (Dijon ohne Zucker)',
    color: 'yellow',
    id: 'B77',
    nutrients: {
      description:
        'Senf ist ein scharfes Gewürz, das aus den Samenkörnern des Weißen, Braunen und des Schwarzen Senfs hergestellt wird. Gebräuchlich sind sowohl reine Senfkörner, Senfpulver und vor allem die aus den mehr oder weniger fein gemahlenen Samen und weiteren Zutaten bereitete Würzpaste, genannt „Tafelsenf“ oder „Mostrich“.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Senf',
      Kalorien: 60,
      Fettgehalt: '3,34 g',
      Kohlenhydrate: '5,83 g',
      Protein: '3,74 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/172234/nutrients',
    },
  },
  {
    title: 'Shitake',
    color: 'yellow',
    id: 'B78',
    nutrients: {
      description:
        'Der Shiitake oder Shii-Take ist eine Pilzart aus der Familie der Omphalotaceae. Klassisch wurde er unter den Ritterlingsverwandten oder den Stielporlingsartigen eingereiht. Der japanische Name Shiitake bedeutet Pilz, der am Pasania-Baum wächst; der Pilz wird im Deutschen daher auch Pasaniapilz genannt.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Shiitake',
      Kalorien: 34,
      Fettgehalt: '0,49 g',
      Kohlenhydrate: '6,79 g',
      Protein: '2,24 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169242/nutrients',
    },
  },
  {
    title: 'Sojaprodukte (fermentiert, Sprossen)',
    color: 'yellow',
    id: 'B79',
    nutrients: {
      description:
        'Die Sojabohne, häufig auch einfach als Soja bezeichnet, ist eine Pflanzenart aus der Unterfamilie Schmetterlingsblütler innerhalb der Familie der Hülsenfrüchtler. Der Anbau der Nutzpflanze Sojabohne ist seit 3050 v. Chr. in Japan und zumindest seit 1550 v. Chr. in Korea und China als Nahrungspflanze nachgewiesen. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Sojabohne',
      Kalorien: 446,
      Fettgehalt: '19,94 g',
      Kohlenhydrate: '30,16 g',
      Protein: '36,49 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/174270/nutrients',
    },
  },
  {
    title: 'Truthahn- und Hähnchenbrust (ohne Haut, Bioqualität)',
    color: 'yellow',
    id: 'B80',
    nutrients: {
      description:
        'Das Truthuhn ist eine in Nordamerika beheimatete Art der Truthühner. Es wird auch Wildtruthuhn oder Wildes Truthuhn genannt und ist die größte Art der Hühnervögel. Bereits von indianischen Völkern wurde es domestiziert und ist somit die Stammform des Haustruthuhns, der Pute.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Truthuhn',
      Kalorien: 144,
      Fettgehalt: '5,64 g',
      Kohlenhydrate: '0,14 g',
      Protein: '21,64 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/171081/nutrients',
    },
  },
  {
    title: 'Waldstaudenkorn (Ur-Roggen)',
    color: 'yellow',
    id: 'B81',
    nutrients: {
      description:
        'Waldstaudenroggen ist eine alte Getreide-Sorte, die zur Pflanzenart Roggen aus der Familie der Süßgräser gehört.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Waldstaudenroggen',
      Kalorien: 162,
      Fettgehalt: '1 g',
      Kohlenhydrate: '30 g',
      Protein: '4 g',
      Quelle:
        'https://www.myfitnesspal.com/de/food/calories/zur-ck-zum-ursprung-waldstaudenroggen-209939081',
    },
  },
  {
    title: 'Wasabi-Meerettich',
    color: 'yellow',
    id: 'B82',
    nutrients: {
      description:
        'Wasabi, auch Japanischer Meerrettich oder Wassermeerrettich genannt, ist eine Pflanzenart aus der Familie der Kreuzblütengewächse. Die Rhizome werden in der japanischen Küche als scharfes Gewürz verwendet. Als Wildpflanze ist die Art in sumpfigem Gelände am Rand von Fließgewässern in Japan heimisch.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Wasabi',
      Kalorien: 83,
      Fettgehalt: '0,4 g',
      Kohlenhydrate: '14,1 g',
      Protein: '2,9 g',
      Quelle:
        'https://www.yazio.com/de/kalorientabelle/wasabi-japanischer-meerrettich-frisch.html',
    },
  },
  {
    title: 'Weiße Bohnen',
    color: 'yellow',
    id: 'B83',
    nutrients: {
      description:
        'Als Bohne bezeichnet man sowohl die runden, teils länglichen oder nierenförmigen Samen als auch die sie umgebende Hülse mitsamt den eingeschlossenen Samen und ebenfalls die gesamte solche Samen bildende Pflanze aus der Familie der Hülsenfrüchtler.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Bohne',
      Kalorien: 333,
      Fettgehalt: '0,85 g',
      Kohlenhydrate: '60,27 g',
      Protein: '23,36 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/175202/nutrients',
    },
  },
  {
    title: 'Weißwein',
    color: 'yellow',
    id: 'B84',
    nutrients: {
      description:
        'Weißwein ist ein Wein, der durch die alkoholische Gärung von Weintrauben entsteht. Die Farbe der Beerenhaut kann dabei sowohl hellgelb, gelbgrün, grün, grau, graurot und rot sein. Das Fruchtfleisch enthält nur wenig Farbstoffe.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Wei%C3%9Fwein',
      Kalorien: 82,
      Fettgehalt: '0 g',
      Kohlenhydrate: '2,6 g',
      Protein: '0,07 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/174837/nutrients',
    },
  },
  {
    title: 'Wild (freilaufend)',
    color: 'yellow',
    id: 'B86',
    nutrients: {
      description:
        'Wild, teilweise auch deutlicher als Jagdwild bezeichnet, ist ein Sammelbegriff für die im Zusammenhang mit Jagd relevanten Säugetiere und Vögel. Der Begriff „Wild“ grenzt sich damit gegen den des Wildtieres ab, der allgemein alle freilebenden Tiere umfasst.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Wild',
      Kalorien: 104,
      Fettgehalt: '1,88 g',
      Kohlenhydrate: '0 g',
      Protein: '21,78 g',
      Quelle:
        'https://xn--diten-vergleichen-rqb.de/naehrwert-tabelle/tabelle-wild.php',
    },
  },
  {
    title: 'Wildreis',
    color: 'yellow',
    id: 'B87',
    nutrients: {
      description:
        'Der Wasserreis ist eine Pflanzengattung innerhalb der Familie der Süßgräser. Die etwa vier Arten sind in Nordamerika und Ostasien verbreitet. Die Pflanzen wachsen oft bestandsbildend an Fluss-, See- und Teichufern. Die Früchte einiger Arten werden wie Reiskörner verwendet. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Wasserreis',
      Kalorien: 357,
      Fettgehalt: '1,08 g',
      Kohlenhydrate: '74,9 g',
      Protein: '14,73 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169726/nutrients',
    },
  },
  {
    title: 'Xylit/Xylitol (Birkenzucker)',
    color: 'yellow',
    id: 'B88',
    nutrients: {
      description:
        'Xylit ist ein Trivialname für ein Stereoisomer des Zuckeralkohols Pentanpentol. Als Lebensmittelzusatzstoff trägt es die Bezeichnung und dient als Zuckeraustauschstoff. Die Entdeckung geht auf den späteren Nobelpreisträger Emil Fischer zurück.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Xylit',
      Kalorien: 240,
      Fettgehalt: '0 g',
      Kohlenhydrate: '100 g',
      Protein: '0 g',
      Quelle:
        'https://www.bmi-rechner.net/kalorien-naehrwerte/kalorien-xylit-birkenzucker.htm',
    },
  },
];
export const red = [
  {
    title: 'Apfelsaft',
    color: 'red',
    id: 'C1',
    nutrients: {
      description:
        'Apfelsaft ist ein Fruchtsaft, der durch Pressung von Äpfeln gewonnen wird. Um 1 Liter Apfelsaft zu gewinnen, benötigt man etwa 1,3 kg Äpfel. Im großen Maßstab geschieht dies in Keltereien. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Apfelsaft',
      Kalorien: 46,
      Fettgehalt: '0,13 g',
      Kohlenhydrate: '11,3 g',
      Protein: '0,1 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/173933/nutrients',
    },
  },
  {
    title: 'Bananen',
    color: 'red',
    id: 'C2',
    nutrients: {
      description:
        'Aus dem Englischen übersetzt-Eine Banane ist eine längliche, essbare Frucht - botanisch eine Beere -, die von verschiedenen Arten großer krautiger Blütenpflanzen der Gattung Musa produziert wird. In einigen Ländern können zum Kochen verwendete Bananen als "Kochbananen" bezeichnet werden, was sie von Dessertbananen unterscheidet.',
      descriptionLink: 'https://en.wikipedia.org/wiki/Banana',
      Kalorien: 89,
      Fettgehalt: '0,33 g',
      Kohlenhydrate: '22,84 g',
      Protein: '1,09 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/173944/nutrients',
    },
  },
  {
    title: 'Bier',
    color: 'red',
    id: 'C3',
    nutrients: {
      description:
        'Bier ist ein Getränk, das durch Gärung aus stärkehaltigen Stoffen gewonnen und nicht destilliert wird. Bei der Herstellung des meist kohlensäurehaltigen Getränks werden oft Hopfen oder andere Würzstoffe zugesetzt, etwa Früchte, Kräuter wie Grut oder andere Gewürze. Wein und Bier entstehen durch Gärung von Zucker.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Bier',
      Kalorien: 43,
      Fettgehalt: '0 g',
      Kohlenhydrate: '3,55 g',
      Protein: '0,46 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/168746/nutrients',
    },
  },
  {
    title: 'Cashewnüsse',
    color: 'red',
    id: 'C4',
    nutrients: {
      description:
        'Der Cashewbaum, auch Kaschubaum, Acajoubaum oder Nierenbaum genannt, ist ein zur Familie der Sumachgewächse gehöriger Baum. Er wächst in tropischem Klima und trägt Cashewäpfel und Cashewkerne. Portugiesen entdeckten diesen Baum als erste Europäer im Nordosten Brasiliens.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Cashew',
      Kalorien: 533,
      Fettgehalt: '43,85 g',
      Kohlenhydrate: '30,19 g',
      Protein: '18,22 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170162/nutrients',
    },
  },
  {
    title: 'Chips',
    color: 'red',
    id: 'C5',
    nutrients: {
      description:
        'Kartoffelchips, kurz oft Chips, in der Schweiz auch Pommes-Chips, in Österreich früher, heute nur noch gelegentlich, Rohscheiben genannt, sind ein scheibenförmiges Nahrungsmittel. Sie bestehen aus dünnen, frittierten oder gebackenen Kartoffelscheiben.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Kartoffelchips',
      Kalorien: 536,
      Fettgehalt: '34,6 g',
      Kohlenhydrate: '52,9 g',
      Protein: '7 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170649/nutrients',
    },
  },
  {
    title: 'Couscous (Weizen)',
    color: 'red',
    id: 'C6',
    nutrients: {
      description:
        'Couscous, Cous Cous oder Kuskus ist ein Gericht der nordafrikanischen Küche. Die Grundlage besteht aus befeuchtetem und zu Kügelchen zerriebenem Grieß aus Hartweizen, Gerste oder Hirse. Der Grieß wird zum Garen nicht gekocht, sondern über kochendem Wasser oder einem kochenden Gericht gedämpft.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Couscous',
      Kalorien: 376,
      Fettgehalt: '0,64 g',
      Kohlenhydrate: '77,43 g',
      Protein: '0,64 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169699/nutrients',
    },
  },
  {
    title: 'Erdnüsse',
    color: 'red',
    id: 'C7',
    nutrients: {
      description:
        'Die Erdnuss ist eine Pflanzenart in der Unterfamilie der Schmetterlingsblütler innerhalb der Familie der Hülsenfrüchtler. Die Frucht der Erdnuss ist botanisch gesehen eine Hülsenfrucht, die sich entwicklungsgeschichtlich zur Nuss gewandelt hat.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Erdnuss',
      Kalorien: 567,
      Fettgehalt: '49,24 g',
      Kohlenhydrate: '16,13 g',
      Protein: '25,8 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/172430/nutrients',
    },
  },
  {
    title: 'Erdnusöl',
    color: 'red',
    id: 'C8',
    nutrients: {
      description:
        'Erdnussöl ist das aus den Samen der Erdnuss gepresste Pflanzenöl. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Erdnuss%C3%B6l',
      Kalorien: 884,
      Fettgehalt: '100 g',
      Kohlenhydrate: '0 g',
      Protein: '0 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/171410/nutrients',
    },
  },
  {
    title: 'Fastfood (Hamburger, Pizza)',
    color: 'red',
    id: 'C9',
    nutrients: {
      description:
        'Ein Hamburger ist ein warmes Schnell- oder Fertiggericht und der Standardartikel vieler Fast-Food-Ketten. Es besteht aus einem speziellen Brötchen, dem Bun, das mit verschiedenen Belägen, hauptsächlich jedoch einer gegrillten Scheibe aus Rinderhackfleisch, belegt wird. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Hamburger',
      Kalorien: 264,
      Fettgehalt: '10,09 g',
      Kohlenhydrate: '30,28 g',
      Protein: '12,92 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170717/nutrients',
    },
  },
  {
    title: 'Feigen',
    color: 'red',
    id: 'C10',
    nutrients: {
      description:
        'Die Echte Feige, kurz auch Feige genannt, ist eine Pflanzenart aus der Gattung der Feigen. Sie zählt zu den ältesten domestizierten Nutzpflanzen und wird vor allem im gesamten Mittelmeerraum angebaut. Sie hat wie alle Feigen eine komplexe Bestäubungsökologie.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Echte_Feige',
      Kalorien: 74,
      Fettgehalt: '0,3 g',
      Kohlenhydrate: '19,18 g',
      Protein: '0,75 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/173021/nutrients',
    },
  },
  {
    title: 'firsch gepresster Fruchsaft',
    color: 'red',
    id: 'C11',
    nutrients: {
      description:
        'Fruchtsaft, spezieller auch Obstsaft, ist ein aus Früchten einer oder mehrerer Fruchtarten gewonnenes flüssiges Erzeugnis, das für die menschliche Ernährung bestimmt ist. Der Fruchtgehalt muss 100 % betragen. Es wird zwischen Direktsaft und Fruchtsaft aus Konzentrat unterschieden.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Fruchtsaft',
      Kalorien: 46,
      Fettgehalt: '0,13 g',
      Kohlenhydrate: '11,3 g',
      Protein: '0,1 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/173933/nutrients',
    },
  },
  {
    title: 'frittierte Speisen',
    color: 'red',
    id: 'C12',
    nutrients: {
      description:
        'Frittieren oder Ausbacken ist eine dem Braten verwandte Garmethode, bei der Lebensmittel in heißem Fett schwimmend gebacken werden. Anders als beim Braten wird das Gargut beim Frittieren vor allem durch Wärmeleitung auf der ganzen Oberfläche erhitzt.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Frittieren',
      Kalorien: 312,
      Fettgehalt: '14,73 g',
      Kohlenhydrate: '41,44 g',
      Protein: '3,43 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170698/nutrients',
    },
  },
  {
    title: 'Fruchtnektar',
    color: 'red',
    id: 'C13',
    nutrients: {
      description:
        'Aus dem Englischen übersetzt-Nektare sind eine Art kohlensäurefreies Erfrischungsgetränk, das durch Verwirren des Fruchtfleisches hergestellt wird. In einigen Ländern unterscheidet die Getränkeindustrie Nektare von Getränken, die als "Saft" gekennzeichnet sind.',
      descriptionLink: 'https://en.wikipedia.org/wiki/Nectar_(drink)',
      Kalorien: 56,
      Fettgehalt: '0,45 g',
      Kohlenhydrate: '13,63 g',
      Protein: '0,17 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/171704/nutrients',
    },
  },
  {
    title: 'Fruchtsaftkonzentration',
    color: 'red',
    id: 'C14',
    nutrients: {
      description:
        'Ein Konzentrat, besonders bei Flüssigkeiten auch Essenz, ist ein Stoff – ein Pulver bzw. eine Flüssigkeit – ohne oder mit einem geringen Anteil an zusätzlichen Füllstoffen, im Falle einer Flüssigkeit von Lösungsmitteln. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Konzentrat',
      Kalorien: 0,
      Fettgehalt: '1,34 g',
      Kohlenhydrate: '53,19 g',
      Protein: '3,04 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/168217/nutrients',
    },
  },
  {
    title: 'Gerste',
    color: 'red',
    id: 'C15',
    nutrients: {
      description:
        'Die Gerste ist eine Pflanzenart aus der Gattung der Gersten innerhalb der Familie der Süßgräser. Sie ist eine der wichtigsten Getreide-Arten. Sie wurde vor ca. 10.000 Jahren im Gebiet des Fruchtbaren Halbmondes von der Wildgerste gewonnen und domestiziert. Mit „Gerste“ werden zudem die Samen der Pflanze bezeichnet.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Gerste',
      Kalorien: 354,
      Fettgehalt: '2,3 g',
      Kohlenhydrate: '73,48 g',
      Protein: '12,48 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170283/nutrients',
    },
  },
  {
    title: 'Gnochhi (Fertigprodukt)',
    color: 'red',
    id: 'C16',
    nutrients: {
      description:
        'Nocken oder Nockerln, italienisch Gnocchi, sind eiförmige oder spätzleähnlich geformte Teigmassen der süddeutschen und Alpenküche; sie sind aber auch in angrenzenden Ländern bekannt.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Nocken_(Gericht)',
      Kalorien: 154,
      Fettgehalt: '0,5 g',
      Kohlenhydrate: '31,9 g',
      Protein: '3,6 g',
      Quelle: 'https://www.yazio.com/de/kalorientabelle/gnocchi-nocken.html',
    },
  },
  {
    title: 'Hafer',
    color: 'red',
    id: 'C17',
    nutrients: {
      description:
        'Hafer ist eine Pflanzengattung in der Familie der Süßgräser. Eine Art, der Saat-Hafer, wird als Getreide angebaut und wie dessen Samen umgangssprachlich ebenfalls „Hafer“ genannt.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Hafer',
      Kalorien: 379,
      Fettgehalt: '6,52 g',
      Kohlenhydrate: '67,7 g',
      Protein: '13,15 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/785758/nutrients',
    },
  },
  {
    title: 'Hagebutte',
    color: 'red',
    id: 'C18',
    nutrients: {
      description:
        'Als Hagebutten bezeichnet man die ungiftigen Sammelnussfrüchte verschiedener Rosenarten, besonders der Hunds-Rose. Als Hagebutten werden landläufig auch die Wildrosen, oder Heckenrosen, selbst bezeichnet, an denen die Früchte wachsen.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Hagebutte',
      Kalorien: 162,
      Fettgehalt: '0,34 g',
      Kohlenhydrate: '38,22 g',
      Protein: '1,6 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/168998/nutrients',
    },
  },
  {
    title: 'Hähnchenbrust mit Haut',
    color: 'red',
    id: 'C19',
    nutrients: {
      description:
        'Das Haushuhn, kurz auch Huhn genannt, ist eine Zuchtform des Bankivahuhns, eines Wildhuhns aus Südostasien, und gehört zur Familie der Fasanenartigen. Landwirtschaftlich zählen sie zum Geflügel. Das männliche Haushuhn nennt man Hahn oder Gockel, den kastrierten Hahn Kapaun.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Haushuhn',
      Kalorien: 239,
      Fettgehalt: '13,6 g',
      Kohlenhydrate: '0 g',
      Protein: '27,3 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/171450/nutrients',
    },
  },
  {
    title: 'Hähnchenschlegel',
    color: 'red',
    id: 'C20',
    nutrients: {
      description:
        'Das Haushuhn, kurz auch Huhn genannt, ist eine Zuchtform des Bankivahuhns, eines Wildhuhns aus Südostasien, und gehört zur Familie der Fasanenartigen. Landwirtschaftlich zählen sie zum Geflügel. Das männliche Haushuhn nennt man Hahn oder Gockel, den kastrierten Hahn Kapaun.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Haushuhn',
      Kalorien: 178,
      Fettgehalt: '11,4 g',
      Kohlenhydrate: '0 g',
      Protein: '18,1 g',
      Quelle:
        'http://www.foodplaner.de/kalorientabelle-fleisch+++huehnerkeule+gebraten+selbst+gemacht-75618-my%20food.html',
    },
  },
  {
    title: 'Haselnüsse',
    color: 'red',
    id: 'C21',
    nutrients: {
      description:
        'Aus dem Englischen übersetzt-Die Haselnuss ist die Nuss der Hasel und umfasst daher alle Nüsse, die von Arten der Gattung Corylus stammen, insbesondere die Nüsse der Art Corylus avellana. Es ist auch als Cobnut oder Haselnuss je nach Art bekannt. Ein Kolben ist ungefähr kugelförmig bis oval, etwa 15 bis 25 mm lang und 10 bis 15 mm im Durchmesser. ',
      descriptionLink: 'https://en.wikipedia.org/wiki/Hazelnut',
      Kalorien: 628,
      Fettgehalt: '60,75 g',
      Kohlenhydrate: '16,7 g',
      Protein: '14,95 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170581/nutrients',
    },
  },
  {
    title: 'Honig',
    color: 'red',
    id: 'C22',
    nutrients: {
      description:
        'Honig ist ein von Honigbienen zur eigenen Nahrungsvorsorge erzeugtes und vom Menschen genutztes Lebensmittel aus dem Nektar von Blüten oder den zuckerhaltigen Ausscheidungsprodukten verschiedener Insekten, dem sogenannten Honigtau.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Honig',
      Kalorien: 304,
      Fettgehalt: '0 g',
      Kohlenhydrate: '82,4 g',
      Protein: '0,3 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169640/nutrients',
    },
  },
  {
    title: 'Joghurt (Kuh)',
    color: 'red',
    id: 'C23',
    nutrients: {
      description:
        'Joghurt ist ein Nahrungsmittel, das aus durch Milchsäurebakterien verdickter Milch hergestellt ist. Es wird als Naturjoghurt ohne Zusätze sowie mit Zusätzen wie Zucker oder Obstbestandteilen in verschiedenen Geschmacksrichtungen vermarktet. Naturjoghurt hat in seiner originären Substanz einen säuerlichen Geschmack.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Joghurt',
      Kalorien: 65,
      Fettgehalt: '3,5 g',
      Kohlenhydrate: '5 g',
      Protein: '3,4 g',
      Quelle:
        'https://www.bmi-rechner.net/kalorien-naehrwerte/kalorien-joghurt.htm',
    },
  },
  {
    title: 'Kaki',
    color: 'red',
    id: 'C24',
    nutrients: {
      description:
        'Aus dem Englischen übersetzt-Die Persimone ist die essbare Frucht einer Reihe von Baumarten der Gattung Diospyros. Am weitesten verbreitet ist die asiatische oder japanische Persimone Diospyros kaki. Diospyros gehört zur Familie der Ebenaceae, und eine Reihe von Nicht-Persimmon-Arten der Gattung werden für Ebenholz angebaut.',
      descriptionLink: 'https://en.wikipedia.org/wiki/Persimmon',
      Kalorien: 127,
      Fettgehalt: '0,4 g',
      Kohlenhydrate: '33,5 g',
      Protein: '0,8 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169943/nutrients',
    },
  },
  {
    title: 'Käse (Kuh)',
    color: 'red',
    id: 'C25',
    nutrients: {
      description:
        'Käse ist ein festes Milcherzeugnis, das – bis auf wenige Ausnahmen – durch Gerinnen aus einem Eiweißanteil der Milch, dem Kasein, gewonnen wird. Es ist das älteste Verfahren zur Haltbarmachung von Milch und deren Erzeugnissen. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/K%C3%A4se',
      Kalorien: 403,
      Fettgehalt: '33,31 g',
      Kohlenhydrate: '3,37 g',
      Protein: '22,87 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/173414/nutrients',
    },
  },
  {
    title: 'Kaugummi',
    color: 'red',
    id: 'C26',
    nutrients: {
      description:
        'Der oder das Kaugummi ist eine leicht verformbare, meist süß, manchmal auch scharf oder sauer schmeckende Masse in einer Portionsverpackung, auf der oft einige Stunden lang gekaut werden kann, ohne dass sie zerfällt.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Kaugummi',
      Kalorien: 360,
      Fettgehalt: '0,3 g',
      Kohlenhydrate: '96,7 g',
      Protein: '0 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/168771/nutrients',
    },
  },
  {
    title: 'Kirschen',
    color: 'red',
    id: 'C27',
    nutrients: {
      description:
        'Aus dem Englischen übersetzt-Eine Kirsche ist die Frucht vieler Pflanzen der Gattung Prunus und eine fleischige Steinfrucht. Kommerzielle Kirschen werden aus Sorten verschiedener Arten wie dem süßen Prunus avium und dem sauren Prunus cerasus gewonnen.',
      descriptionLink: 'https://en.wikipedia.org/wiki/Cherry',
      Kalorien: 50,
      Fettgehalt: '0,3 g',
      Kohlenhydrate: '12,18 g',
      Protein: '1 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/173954/nutrients',
    },
  },
  {
    title: 'lactosefreie Kuhmilchprodukte',
    color: 'red',
    id: 'C28',
    nutrients: {
      description:
        'Lactose, Milchzucker oder Laktose ist ein in Milch enthaltener Zucker. Das Disaccharid besteht aus den beiden Molekülen D-Galactose und D-Glucose, die über eine β-1,4-glycosidische Bindung miteinander verbunden sind.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Lactose',
      Kalorien: 67,
      Fettgehalt: '3,8 g',
      Kohlenhydrate: '4,8 g',
      Protein: '3,3 g',
      Quelle: 'https://www.minusl.de/produkte/minusl-frische-milch-38/',
    },
  },
  {
    title: 'Leberwurst',
    color: 'red',
    id: 'C29',
    nutrients: {
      description:
        'Als Leberwurst bezeichnet man in Deutschland unterschiedliche, meist streichfähige Kochwurstsorten. Der Name leitet sich von der Zutat Leber ab, welche mit anderen Lebensmitteln zu Wurst verarbeitet wird.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Leberwurst',
      Kalorien: 305,
      Fettgehalt: '25,45 g',
      Kohlenhydrate: '5,89 g',
      Protein: '12,38 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/174596/nutrients',
    },
  },
  {
    title: 'Limonaden',
    color: 'red',
    id: 'C30',
    nutrients: {
      description:
        'Die Limonade, umgangssprachlich verkürzt die oder das Limo, ist ein alkoholfreies, gesüßtes und meist mit Kohlensäure versetztes Erfrischungsgetränk mit oder ohne Fruchtauszügen auf der Basis von Wasser, das ausschließlich natürliche Zutaten enthalten darf.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Limonade',
      Kalorien: 40,
      Fettgehalt: '0,04 g',
      Kohlenhydrate: '10,42 g',
      Protein: '0,07 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/173217/nutrients',
    },
  },
  {
    title: 'Litschi',
    color: 'red',
    id: 'C31',
    nutrients: {
      description:
        'Der Litschibaum oder Litchibaum ist die einzige Art der Pflanzengattung Litchi innerhalb der Familie der Seifenbaumgewächse.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Litschibaum',
      Kalorien: 66,
      Fettgehalt: '0,44 g',
      Kohlenhydrate: '16,53 g',
      Protein: '0,83 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169086/nutrients',
    },
  },
  {
    title: 'Lupinenmehl',
    color: 'red',
    id: 'C32',
    nutrients: {
      description:
        'Die Lupinen, selten auch Wolfsbohne oder Feigbohne genannt, sind eine Pflanzengattung in der Unterfamilie der Schmetterlingsblütler innerhalb der Familie der Hülsenfrüchtler. Zur gleichen Familie gehören beispielsweise Erbse, Kichererbse und Erdnuss.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Lupinen',
      Kalorien: 342,
      Fettgehalt: '9,1 g',
      Kohlenhydrate: '9,5 g',
      Protein: '40 g',
      Quelle: 'https://www.rapunzel.de/bio-produkt-lupinenmehl--700985.html',
    },
  },
  {
    title: 'Malz',
    color: 'red',
    id: 'C33',
    nutrients: {
      description:
        'Malz ist kurz gekeimtes und wieder getrocknetes Getreide. Dieser Vorgang bildet und aktiviert Enzyme im Getreide, die z. B. für das Bierbrauen notwendig sind. Ein Teil der Stärke wird dabei in kleinere Moleküle zerlegt.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Malz',
      Kalorien: 281,
      Fettgehalt: '1 g',
      Kohlenhydrate: '63 g',
      Protein: '4 g',
      Quelle: 'https://www.naehrwertrechner.de/naehrwerte/L213111/Biomalz',
    },
  },
  {
    title: 'Margarine',
    color: 'red',
    id: 'C34',
    nutrients: {
      description:
        'Margarine, Kunstbutter oder Oleomargarin ist ein industriell hergestelltes Streichfett. Sie dient als Ersatz für Butter und Schmalz. Ihr gesundheitlicher Wert ist Gegenstand kontroverser Debatten.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Margarine',
      Kalorien: 717,
      Fettgehalt: '80,71 g',
      Kohlenhydrate: '0,7 g',
      Protein: '0,16 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/173585/nutrients',
    },
  },
  {
    title: 'Marmelade (fertig gekauft)',
    color: 'red',
    id: 'C35',
    nutrients: {
      description:
        'Marmelade ist die traditionelle Bezeichnung für einen Brotaufstrich, der aus mit Zucker eingekochten Früchten hergestellt wird, ohne dass Fruchtstücke im Fertigprodukt sichtbar bleiben. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Marmelade',
      Kalorien: 246,
      Fettgehalt: '0 g',
      Kohlenhydrate: '66,3 g',
      Protein: '0,3 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/168819/nutrients',
    },
  },
  {
    title: 'Milch (Kuh, laktosefrei)',
    color: 'red',
    id: 'C36',
    nutrients: {
      description:
        'Milch ist eine weiße, trübe Emulsion bzw. kolloidale Dispersion von Proteinen, Milchzucker und Milchfett in Wasser. Der Mensch nutzt die Milch vieler domestizierter Tiere als Nahrungsmittel, insbesondere als Getränk. Gebildet wird sie in den Milchdrüsen von Säugetieren, die damit ihre Neugeborenen nähren.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Milch',
      Kalorien: 0,
      Fettgehalt: ' g',
      Kohlenhydrate: ' g',
      Protein: ' g',
      Quelle: '',
    },
  },
  {
    title: 'Milch (Kuh)',
    color: 'red',
    id: 'C37',
    nutrients: {
      description:
        'Milch ist eine weiße, trübe Emulsion bzw. kolloidale Dispersion von Proteinen, Milchzucker und Milchfett in Wasser. Der Mensch nutzt die Milch vieler domestizierter Tiere als Nahrungsmittel, insbesondere als Getränk. Gebildet wird sie in den Milchdrüsen von Säugetieren, die damit ihre Neugeborenen nähren.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Milch',
      Kalorien: 61,
      Fettgehalt: '3,25 g',
      Kohlenhydrate: '4,8 g',
      Protein: '3,15 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/781084/nutrients',
    },
  },
  {
    title: 'Mirabellen',
    color: 'red',
    id: 'C38',
    nutrients: {
      description:
        'Die Mirabelle, auch als Gelbe Zwetschge bezeichnet, ist eine Unterart der Pflaume. Die Mirabelle wird von Laien oft mit der ihr in Größe und Gestalt ähnlich sehenden Kirschpflaume verwechselt.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Mirabelle',
      Kalorien: 67,
      Fettgehalt: '0,2 g',
      Kohlenhydrate: '14 g',
      Protein: '0,73 g',
      Quelle:
        'http://www.ernaehrung.de/lebensmittel/de/F224100/Mirabelle-roh.php',
    },
  },
  {
    title: 'Müsli',
    color: 'red',
    id: 'C39',
    nutrients: {
      description:
        'Müsli [ˈmyːsli] ist eine Zubereitung aus Haferflocken und weiteren Produkten auf Getreidebasis sowie Obst beziehungsweise Trockenobst, die mit Milch, Sojamilch, Joghurt oder Fruchtsaft üblicherweise zum Frühstück gegessen wird.',
      descriptionLink: 'https://de.wikipedia.org/wiki/M%C3%BCsli',
      Kalorien: 394,
      Fettgehalt: '2,93 g',
      Kohlenhydrate: '86,63 g',
      Protein: '6,01 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/173889/nutrients',
    },
  },
  {
    title: 'Nudeln (Weizen)',
    color: 'red',
    id: 'C40',
    nutrients: {
      description:
        'Nudel ist ein Oberbegriff für eine Vielfalt von gegarten Speisen aus einem Teig meist auf der Basis von gemahlenem Getreide, von denen ein großer Teil heute unter Teigwaren eingeordnet wird. Nudeln können verschiedenste Form und Größe aufweisen und mit sehr unterschiedlichen Zutaten hergestellt sein.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Nudel_(Lebensmittel)',
      Kalorien: 384,
      Fettgehalt: '4,44 g',
      Kohlenhydrate: '71,27 g',
      Protein: '14,16 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169755/nutrients',
    },
  },
  {
    title: 'Orangensaft',
    color: 'red',
    id: 'C41',
    nutrients: {
      description:
        'Orangensaft oder Apfelsinensaft ist ein Fruchtsaft, der durch Auspressen von Orangen hergestellt wird. In Deutschland wird er umgangssprachlich oft als O-Saft bezeichnet. Orangensaft ist der meistgetrunkene Saft der Welt und steht für 50 % des Gesamtkonsums an Fruchtsäften. Weltweit werden pro Jahr rund 12 Mrd.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Orangensaft',
      Kalorien: 45,
      Fettgehalt: '0,2 g',
      Kohlenhydrate: '10,4 g',
      Protein: '0,7 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169098/nutrients',
    },
  },
  {
    title: 'Pizza',
    color: 'red',
    id: 'C42',
    nutrients: {
      description:
        'Pizza ist ein vor dem Backen würzig belegtes Fladenbrot aus einfachem Hefeteig aus der italienischen Küche. Die heutige international verbreitete Variante mit Tomatensauce und Käse als Basis stammt vermutlich aus Neapel.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Pizza',
      Kalorien: 266,
      Fettgehalt: '9,69 g',
      Kohlenhydrate: '33,33 g',
      Protein: '11,39 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/173292/nutrients',
    },
  },
  {
    title: 'Quark (Kuh)',
    color: 'red',
    id: 'C43',
    nutrients: {
      description:
        'Quark, auch Weißkäse, österreichisch bzw. bairisch Topfen, süddeutsch/südost- und westösterreichisch Schotten, ist das aus der Milch durch Zugabe von Lab oder durch bakterielle Bildung von Milchsäure ausgefällte Milcheiweiß.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Quark_(Milchprodukt)',
      Kalorien: 159,
      Fettgehalt: '11,4 g',
      Kohlenhydrate: '2,6 g',
      Protein: '11,1 g',
      Quelle:
        'http://www.ernaehrung.de/lebensmittel/de/M713500/Quark-mind.-40-Fett-i.-Tr..php',
    },
  },
  {
    title: 'Reis',
    color: 'red',
    id: 'C44',
    nutrients: {
      description:
        'Als Reis werden die Getreidekörner der Pflanzenarten Oryza sativa und Oryza glaberrima bezeichnet. Oryza sativa wird weltweit in vielen Ländern angebaut, Oryza glaberrima in Westafrika. Zur Gattung Reis gehören außer diesen beiden Reispflanzen noch weitere 17 Arten, die aber nicht domestiziert wurden.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Reis',
      Kalorien: 360,
      Fettgehalt: '0,58 g',
      Kohlenhydrate: '79,84 g',
      Protein: '6,61 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169760/nutrients',
    },
  },
  {
    title: 'Roggen',
    color: 'red',
    id: 'C45',
    nutrients: {
      description:
        'Roggen ist eine in den gemäßigten Breiten verbreitete Getreideart aus der Familie der Süßgräser. Er liefert auch auf leichteren oder sandigen Böden und an kühleren oder feuchten Standorten noch gute Erträge. In Europa wird häufig Winterroggen angebaut, während Sommerroggen eine untergeordnete Bedeutung hat.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Roggen',
      Kalorien: 326,
      Fettgehalt: '1,7 g',
      Kohlenhydrate: '60,73 g',
      Protein: '9,5 g',
      Quelle: 'http://www.ernaehrung.de/lebensmittel/de/C120000/Roggen-roh.php',
    },
  },
  {
    title: 'Salami (keine-Bio-Qualität)',
    color: 'red',
    id: 'C46',
    nutrients: {
      description:
        'Die Salami ist eine europäische Rohwurstsorte aus Schweinefleisch und anderen Fleischsorten.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Salami',
      Kalorien: 336,
      Fettgehalt: '25,9 g',
      Kohlenhydrate: '2,4 g',
      Protein: '21,85 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/172936/nutrients',
    },
  },
  {
    title: 'Schinken',
    color: 'red',
    id: 'C47',
    nutrients: {
      description:
        'Schinken hat mehrere Bedeutungen. Das Wort bezeichnete ursprünglich das „Bein“ im Sinne von „Knochen“. Gemeinsam mit „Schenkel“ stammt es von der indoeuropäischen Wurzel [s]keng für „schief, krumm“ ab. Der Name der Krankheit Skoliose ist gleichen Ursprungs.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Schinken',
      Kalorien: 180,
      Fettgehalt: '11,15 g',
      Kohlenhydrate: '3,65 g',
      Protein: '16,3 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/172946/nutrients',
    },
  },
  {
    title: 'Schokocreme',
    color: 'red',
    id: 'C48',
    nutrients: {
      description:
        'Schokolade ist ein Lebens- und Genussmittel, dessen wesentliche Bestandteile Kakaoerzeugnisse und Zuckerarten, im Falle von Milchschokolade auch Milcherzeugnisse sind. Schokolade wird in reiner Form genossen und als Halbfertigprodukt weiterverarbeitet.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Schokolade',
      Kalorien: 541,
      Fettgehalt: '29,73 g',
      Kohlenhydrate: '62,16 g',
      Protein: '5,41 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/789138/nutrients',
    },
  },
  {
    title: 'Schokolade (weniger als 90% Kakao, Vollmich etc.',
    color: 'red',
    id: 'C49',
    nutrients: {
      description:
        'Schokolade ist ein Lebens- und Genussmittel, dessen wesentliche Bestandteile Kakaoerzeugnisse und Zuckerarten, im Falle von Milchschokolade auch Milcherzeugnisse sind. Schokolade wird in reiner Form genossen und als Halbfertigprodukt weiterverarbeitet.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Schokolade',
      Kalorien: 535,
      Fettgehalt: '29,66 g',
      Kohlenhydrate: '59,4 g',
      Protein: '7,65 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/167587/nutrients',
    },
  },
  {
    title: 'Schweinefleisch',
    color: 'red',
    id: 'C50',
    nutrients: {
      description:
        'Schweinefleisch ist ein Sammelbegriff für die zum Verzehr geeigneten Teile des Hausschweins. In Europa und Ostasien ist Schweinefleisch die am häufigsten gegessene Fleischart.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Schweinefleisch',
      Kalorien: 242,
      Fettgehalt: '13,92 g',
      Kohlenhydrate: '0 g',
      Protein: '27,32 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/167820/nutrients',
    },
  },
  {
    title: 'Softdrinks (Cola, Limonade, Energiegetränke, Sportgetränke)',
    color: 'red',
    id: 'C51',
    nutrients: {
      description:
        'Als Erfrischungsgetränke produziert die Lebensmittelindustrie verschiedene Kaltgetränke, die meist kohlensäurehaltig und süß-sauer aromatisiert sind.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Erfrischungsgetr%C3%A4nk',
      Kalorien: 41,
      Fettgehalt: '0 g',
      Kohlenhydrate: '10,58 g',
      Protein: '0 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/174851/nutrients',
    },
  },
  {
    title: 'Sojaprodukte (nicht fermentiert)',
    color: 'red',
    id: 'C52',
    nutrients: {
      description:
        'Die Sojabohne, häufig auch einfach als Soja bezeichnet, ist eine Pflanzenart aus der Unterfamilie Schmetterlingsblütler innerhalb der Familie der Hülsenfrüchtler. Der Anbau der Nutzpflanze Sojabohne ist seit 3050 v. Chr. in Japan und zumindest seit 1550 v. Chr. in Korea und China als Nahrungspflanze nachgewiesen.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Sojabohne',
      Kalorien: 446,
      Fettgehalt: '19,94 g',
      Kohlenhydrate: '30,16 g',
      Protein: '36,49 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/174270/nutrients',
    },
  },
  {
    title: 'Spirituosen',
    color: 'red',
    id: 'C53',
    nutrients: {
      description:
        'Liköre sind aromatische Spirituosen mit relativ hohem Zuckergehalt. Der Alkoholgehalt liegt normalerweise bei 15 bis 35 % Vol, es gibt aber auch stärkere und schwächere Liköre, zum Beispiel Chartreuse verte mit 55 % Vol oder Aperol mit 11 oder 15 % Vol. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Lik%C3%B6r',
      Kalorien: 250,
      Fettgehalt: '0 g',
      Kohlenhydrate: '0,1 g',
      Protein: '0 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/171919/nutrients',
    },
  },
  {
    title: 'Stevia-Produkte',
    color: 'red',
    id: 'C54',
    nutrients: {
      description:
        'Stevia ist ein aus der Pflanze Stevia rebaudiana gewonnenes Stoffgemisch, das als Süßstoff verwendet wird. Es besteht hauptsächlich aus Steviolglycosiden, wie dem Diterpenglycosid Steviosid, Rebaudiosid A und sieben bis zehn weiteren Steviolglycosiden. ',
      descriptionLink: 'https://de.wikipedia.org/wiki/Stevia',
      Kalorien: 371,
      Fettgehalt: '0 g',
      Kohlenhydrate: '92,8 g',
      Protein: '0 g',
      Quelle:
        'https://www.fitforfun.de/abnehmen/gesund-essen/stevia-was-bringt-der-neue-suessstoff_aid_12701.html',
    },
  },
  {
    title: 'Sushi-Reis',
    color: 'red',
    id: 'C55',
    nutrients: {
      description:
        'Sushi ist ein japanisches Gericht aus erkaltetem, gesäuertem Reis, ergänzt um Zutaten wie rohen oder geräucherten Fisch, rohe Meeresfrüchte, Nori, Gemüse, Tofuvarianten und Ei. Die Zusammenstellung variiert nach Art und Rezept. Sushi wird in mundgerechten Stücken optisch ansprechend zubereitet serviert.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Sushi',
      Kalorien: 113,
      Fettgehalt: '0,2 g',
      Kohlenhydrate: '25 g',
      Protein: '2,1 g',
      Quelle:
        'https://www.weightguard.de/kalorientabelle/17_getreide/1173_sushireis-gekocht-ohne-lzusatz.html',
    },
  },
  {
    title: 'Süßigkeiten',
    color: 'red',
    id: 'C56',
    nutrients: {
      description:
        'Eine Süßware, auch Süßigkeit, ist ein festes oder halbfestes Lebensmittel, das einen hohen Anteil an Zucker enthält. Sie zählt nicht zu den Grundnahrungsmitteln. Süßwaren werden üblicherweise von Zuckerbäckern hergestellt, Süßspeisen hingegen von Köchen bzw. von einem Pâtissier.',
      descriptionLink: 'https://de.wikipedia.org/wiki/S%C3%BC%C3%9Fware',
      Kalorien: 382,
      Fettgehalt: '8,1 g',
      Kohlenhydrate: '77 g',
      Protein: '4,6 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/167974/nutrients',
    },
  },
  {
    title: 'Süßkartoffeln',
    color: 'red',
    id: 'C57',
    nutrients: {
      description:
        'Die Süßkartoffel ist eine Nutzpflanze, die zu der Familie der Windengewächse in der Ordnung der Nachtschattenartigen gehört. Vor allem die unterirdischen Speicherwurzeln, teilweise die Laubblätter, werden als Nahrungsmittel genutzt.',
      descriptionLink: 'https://de.wikipedia.org/wiki/S%C3%BC%C3%9Fkartoffel',
      Kalorien: 86,
      Fettgehalt: '0,05 g',
      Kohlenhydrate: '20,12 g',
      Protein: '1,57 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/168482/nutrients',
    },
  },
  {
    title: 'Süßstoff',
    color: 'red',
    id: 'C58',
    nutrients: {
      description:
        'Süßstoffe sind synthetisch hergestellte oder natürliche Ersatzstoffe z. B. aus Süßstoffpflanzen für Zucker, die dessen Süßkraft erheblich übertreffen. Sie haben keinen oder einen sehr geringen physiologischen Brennwert.',
      descriptionLink: 'https://de.wikipedia.org/wiki/S%C3%BC%C3%9Fstoff',
      Kalorien: 347,
      Fettgehalt: '0 g',
      Kohlenhydrate: '84,77 g',
      Protein: '2,06 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170675/nutrients',
    },
  },
  {
    title: 'Trauben',
    color: 'red',
    id: 'C59',
    nutrients: {
      description:
        'Weintrauben sind die Fruchtstände der Weinreben, insbesondere die der Edlen Weinrebe. Die einzelnen Früchte des Fruchtstandes heißen Weinbeeren. Umgangssprachlich wird zwischen Beere und Traube nicht immer sauber unterschieden.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Weintraube',
      Kalorien: 67,
      Fettgehalt: '0,35 g',
      Kohlenhydrate: '17,15 g',
      Protein: '0,63 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/174682/nutrients',
    },
  },
  {
    title: 'Wassermelone',
    color: 'red',
    id: 'C60',
    nutrients: {
      description:
        'Die Wassermelone ist eine aus Afrika stammende Nutzpflanze, die heute weltweit in warmen Regionen angebaut wird. Die Wildform wird auch Tsamma-Melone genannt. Andere Bezeichnungen sind: Angurie, Arbuse, Pasteke und Zitrullengurke.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Wassermelone',
      Kalorien: 30,
      Fettgehalt: '0,15 g',
      Kohlenhydrate: '7,55 g',
      Protein: '0,61 g',
      Quelle: 'https://fdc.nal.usda.gov/fdc-app.html#/?query=ndbNumber:9326',
    },
  },
  {
    title: 'Weintrauben',
    color: 'red',
    id: 'C61',
    nutrients: {
      description:
        'Weintrauben sind die Fruchtstände der Weinreben, insbesondere die der Edlen Weinrebe. Die einzelnen Früchte des Fruchtstandes heißen Weinbeeren. Umgangssprachlich wird zwischen Beere und Traube nicht immer sauber unterschieden.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Weintraube',
      Kalorien: 67,
      Fettgehalt: '0,35 g',
      Kohlenhydrate: '17,15 g',
      Protein: '0,63 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/174682/nutrients',
    },
  },
  {
    title: 'Weißer Zucker',
    color: 'red',
    id: 'C62',
    nutrients: {
      description:
        'Als Zucker wird neben verschiedenen anderen Zuckerarten ein süß schmeckendes, kristallines Lebens- und Würzmittel bezeichnet, das aus Pflanzen gewonnen wird und hauptsächlich aus Saccharose besteht. Hauptquellen sind Zuckerrohr, Zuckerrübe und die transgene Zuckerrübe H7-1. 2018 wurden weltweit etwa 275 Mio.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Zucker',
      Kalorien: 387,
      Fettgehalt: '0 g',
      Kohlenhydrate: '99,98 g',
      Protein: '0 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169655/nutrients',
    },
  },
  {
    title: 'Weizen, Weizen-Produkte, Weißbrot',
    color: 'red',
    id: 'C63',
    nutrients: {
      description:
        'Als Weizen wird eine Reihe von Pflanzenarten der Süßgräser der Gattung Triticum bezeichnet. Als Getreide werden vor allem zwei Arten angebaut: Weichweizen und Hartweizen.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Weizen',
      Kalorien: 342,
      Fettgehalt: '1,71 g',
      Kohlenhydrate: '75,9 g',
      Protein: '11,31 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169719/nutrients',
    },
  },
  {
    title: 'Zucker, alternative Süßungsmittel',
    color: 'red',
    id: 'C64',
    nutrients: {
      description:
        'Als Zucker wird neben verschiedenen anderen Zuckerarten ein süß schmeckendes, kristallines Lebens- und Würzmittel bezeichnet, das aus Pflanzen gewonnen wird und hauptsächlich aus Saccharose besteht. Hauptquellen sind Zuckerrohr, Zuckerrübe und die transgene Zuckerrübe H7-1. 2018 wurden weltweit etwa 275 Mio.',
      descriptionLink: 'https://de.wikipedia.org/wiki/Zucker',
      Kalorien: 387,
      Fettgehalt: '0 g',
      Kohlenhydrate: '99,98 g',
      Protein: '0 g',
      Quelle:
        'https://fdc.nal.usda.gov/fdc-app.html#/food-details/169655/nutrients',
    },
  },
];

