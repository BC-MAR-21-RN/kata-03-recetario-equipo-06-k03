import React from 'react'
import { View, FlatList } from 'react-native'
import { horizontalStyles } from '../styles/horizontalStyles'
import data from '../data/recipe.json'
import Item from '../components/Item'

const HorizontList = () => {
  return (
    <View horizontal={true} style={horizontalStyles.horizontal}>
      <FlatList
        style={horizontalStyles.scroll}
        horizontal={true}
        data={data.recipes}
        renderItem={ ({ item }) => <Item item = {item} /> }
        keyExtractor={ (item) => item.id.toString()}
      />
    </View>
  )
}
export default HorizontList
