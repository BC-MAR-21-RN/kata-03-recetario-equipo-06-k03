import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Ingredient = ({ item }) => {
  return(
  <View style={styles.contentIngredient}>
    <Text style={styles.ingredient}>{item.name}</Text>
    <Text style={styles.ingredient}>{item.size}</Text>
  </View>
  )
}

const styles = StyleSheet.create({
  contentIngredient: {
    height: 30,
    alignItems: 'flex-start',
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: '#3f3f3f',
    borderBottomWidth: 1,
    marginHorizontal: 15,
    marginVertical: 5
  },
  ingredient: {
    color: '#efedec'
  }
})

export default Ingredient
