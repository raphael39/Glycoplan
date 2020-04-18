import React, { useState } from 'react';
import ListView from './PageONEComponents/GlycoList';
import SearchHeader from './PageONEComponents/Search';
import { View, Text } from 'react-native';
import Seachrbar from './PageONEComponents/Search';

const PageOne = (props) => {
  const [searchValue, setSearchValue] = useState('');
  const [GlycoListe, setGlycoListe] = useState({
    green: [
      'Agar Agar',
      'Algen',
      'Alpkäse',
      'Artischocken',
      'Auberginen',
      'Austernpilz',
      'Avocado',
      'Avocado-Öl',
      'Bachforelle',
      'Bambussprossen',
      'Bataviasalat',
      'Bio-Eier',
      'Blumenkohl',
      'Braunhirse (wild)',
      'Brokkoli',
      'Brombeeren',
      'Brunnenkresse',
      'Buchweizennudel',
      'Champignons',
      'Chicoree',
      'Chinakohl',
      'Couscous (Buchweizen)',
      'Couscous (Hirse)',
      'Dinkelgras',
      'Eichblattsalat',
      'Eisbergsalat',
      'Endivien',
      'Erdmandelflocken',
      'FeldSalat',
      'Fenchel',
      'Galactose',
      'Galgant',
      'Ghee-Butter',
      'Grapefruit',
      'grüne Bohnen',
      'Gurken',
      'Hafergras',
      'Hafermilch',
      'Hanföl',
      'Hanfsamen',
      'Heidelbeeren',
      'Heilbutt',
      'Hering',
      'Himbeeren (rot/gelb)',
      'Ingwer',
      'Joghurt (Ziege/Schaf)',
      'Johannisbeeren (rot/weiß/schwarz)',
      'Kabeljau',
      'Kaffee, Espresso',
      'Kakaopulver',
      'Kapstachelbeeren (getrocknet)',
      'Knoblauch',
      'Kohlarten, alle',
      'Kohlrabi',
      'Kokosmehl',
      'Kokosmilch (ohne Zucker)',
      'Kokosnuss',
      'Kokosnusswasser (Dr. Martins)',
      'Kokosöl/Kokosfett',
    ],
    yellow: [
      'Amaranth',
      'Ananas',
      'Apfel',
      'Aprikosen',
      'Arganöl',
      'Aroniabeeren',
      'Balsamico-Essig',
      'Basmati (Vollkorn)',
      'Biofleisch',
      'Birne',
      'Brottrunk',
      'Buchweizen',
      'Büffelfleisch',
      'Butter',
      'Cranberry (getrocknet ohne Zucker)',
      'Cranberry-Saft/Muttersaft',
      'Datteln',
      'Dinkel (Bio-Qualität)',
      'Dinkelbrot',
    ],
  });

  const [GlycoListeFiltered, setGlycoListeFiltered] = useState({
    green: [],
    yellow: [],
  });

  const handleSearch = (searchVal) => {
    setSearchValue(searchVal);
    console.log('<-- searchValue 101 -->', searchValue);
    filterList(searchVal);
  };

  const checkFoodsContainSearchVal = (Food) => {
    return Food.includes(searchValue);
  };

  const filterList = (searchVal) => {
    console.log('test -->', searchVal);
    const green = GlycoListe.green.filter(function (Food) {
      return Food.includes(searchVal);
    });

    setGlycoListeFiltered({
      green: green,
      yellow: GlycoListe.yellow.filter(function (Food) {
        return Food.includes(searchVal);
      }),
    });
  };

  return (
    <View>
      <Seachrbar handleSearch={handleSearch} />
      <ListView
        green={GlycoListeFiltered.green}
        yellow={GlycoListeFiltered.yellow}
      />
    </View>
  );
};

export default PageOne;
