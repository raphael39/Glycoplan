import React, { useState } from 'react';
import ListView from './PageONEComponents/GlycoList';
import { View, Text } from 'react-native';
import Seachrbar from './PageONEComponents/Search';
import { SHOPPINGITEMS } from './../../Data/data';
import shoppingList from './../../models/shoppinList';
import {green, yellow} from './../../Data/data'

const PageOne = (props) => {
  const [searchValue, setSearchValue] = useState('');
  const [GlycoListe, setGlycoListe] = useState({
    green: green,
    yellow: yellow
  });

  const [GlycoListeFiltered, setGlycoListeFiltered] = useState({
    green: [],
    yellow: [],
  });

  const handleSearch = (searchVal) => {
    setSearchValue(searchVal);
    filterList(searchVal);
  };

  const filterList = (searchVal) => {
    setGlycoListeFiltered({
      green: GlycoListe.green.filter(function (Food) {
        return Food.title.includes(searchVal);
      }),
      yellow: GlycoListe.yellow.filter(function (Food) {
        return Food.title.includes(searchVal);
      }),
    });
  };



  if (
    GlycoListeFiltered.green.length === 0 &&
    GlycoListeFiltered.yellow.length === 0 &&
    searchValue.length === 0
  ) {
    return (
      <View>
        <Seachrbar handleSearch={handleSearch} />
        <ListView
         
          green={GlycoListe.green}
          yellow={GlycoListe.yellow}
        />
      </View>
    );
  }

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
