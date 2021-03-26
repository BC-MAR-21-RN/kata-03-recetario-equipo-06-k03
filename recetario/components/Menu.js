import React from 'react'
import { View, ImageBackground, Text, FlatList, StatusBar } from 'react-native'

import { useNavigation, useRoute } from '@react-navigation/native'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ingredient from './Ingredient'
import { menuStyles } from '../styles/menuStyles'

const Menu = () => {
  const navigation = useNavigation()
  const route = useRoute()

  const img = { uri: route.params.photo }
  const renderIngredient = ({ item }) => {
    return (
      <Ingredient item = { item } />
    )
  }

  return (
    <View style={menuStyles.menu} >
      <StatusBar
        backgroundColor = 'rgba(0,0,0,0)'
        barStyle = "light-content"
        translucent = {true}
      />
      <ImageBackground source={img} style={menuStyles.image} imageStyle={menuStyles.image_imageStyle}>
        <View style={menuStyles.separed}>
          <View style={menuStyles.viewIcons}>
              <FontAwesome5 name={'times'} onPress={() => navigation.navigate('Home')} style={menuStyles.icons}/>
              <View style={menuStyles.viewIcons}>
                <FontAwesome5 name={'upload'} style={menuStyles.iconMargin}/>
                <FontAwesome5 name={'heart'} style={menuStyles.icons}/>
              </View>
          </View>
          <View style={menuStyles.infoText}>
            <Text style={menuStyles.category}>TREDDING</Text>
            <Text style={menuStyles.foodName}>{route.params.name}</Text>
          </View>
        </View>
      </ImageBackground>
      <View>
        <Text style={menuStyles.textIngredients}>Ingredients{'\n'}for {route.params.servings} servings</Text>
      </View>
      <FlatList
        data = {route.params.ingredients}
        renderItem = { renderIngredient }
         keyExtractor = { (item) => item.name.toString() }
      />
    </View>
  )
}

export default Menu
