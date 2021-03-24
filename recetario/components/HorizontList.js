import React, {useState, useEffect} from 'react'
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  FlatList
} from 'react-native'
import { horizontalStyles } from './styles'

import data from '../data/recipe.json'
import Item from '../components/Item'

const HorizontList = () => {
 
  const renderItem = ({ item }) => (
     <Item item = {item} />
  );

  return (
    <View horizontal={true} style={horizontalStyles.horizontal}>
       <FlatList
        style={horizontalStyles.scroll}
        horizontal={true}
        data={data.recipes}
        renderItem={ renderItem }
        keyExtractor={ (item) => item.id}
      />
    </View>
  )
}

export default HorizontList
