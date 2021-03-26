import React from 'react'
import { Text, View } from 'react-native'
import { ingredientsStyles } from '../styles/ingredientsStyles'

const Ingredient = ({ item }) => {
  return (
  <View style={ingredientsStyles.contentIngredient}>
    <Text style={ingredientsStyles.ingredient}>{item.name}</Text>
    <Text style={ingredientsStyles.ingredient}>{item.size}</Text>
  </View>
  )
}

export default Ingredient
