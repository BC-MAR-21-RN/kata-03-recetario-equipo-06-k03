import React, {useState, useEffect} from 'react'
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  FlatList
} from 'react-native'

import data from '../data/recipe.json'
import Item from '../components/Item'

const HorizontList = () => {
 
  const renderItem = ({ item }) => (
     <Item item = {item} />
  );

  return (
    <View horizontal={true} style={styles.horizontal}>
       <Text style={styles.text}>TRENDING</Text>
       <FlatList
        style={styles.scroll}
        horizontal={true}
        data={data.recipes}
        renderItem={ renderItem }
        keyExtractor={ (item) => item.id}
      />
    </View>
  )
}


const styles = StyleSheet.create({
    horizontal: {
        height: 250,
        width: "100%",
        flexDirection: "row"
    },
    text: {
    color: '#d31c71',
    fontSize: 24
    },
    // scroll:{
    //     flexDirection: 'row',
    // }
})

export default HorizontList
