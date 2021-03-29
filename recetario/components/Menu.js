import React, {useState} from 'react'
import { View, ImageBackground, Text, FlatList, StatusBar} from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ingredient from './Ingredient'
import { menuStyles } from '../styles/menuStyles'
import data from '../data/recipe.json'

const Menu = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const img = { uri: route.params.photo }
  const [IlikeIt, setLike] = useState(false);
  const { like, name, recent, servings, ingredients } = route.params;
  const {image, image_imageStyle, separed, viewIcons, icons, iconMargin,
          heartLike, heartNoLike, infoText, category, foodName, textIngredients} = menuStyles

 const iLike = () => {
  data.recipes.map( (item) => {
    if ( item.id ===  route.params.id) {
      item.like = !IlikeIt;
      setLike(!IlikeIt)
      }
   })
  }
  return (
    <View style={menuStyles.menu} >
      <StatusBar
        backgroundColor = 'rgba(0,0,0,0)' barStyle = "light-content" translucent = {true}/>
      <ImageBackground source={img} style={image} imageStyle={image_imageStyle}>
        <View style={separed}>
          <View style={viewIcons}>
              <FontAwesome5 name={'times'} onPress={() => navigation.navigate('Home')} style={icons}/>
              <View style={viewIcons}>
                <FontAwesome5 name={'upload'} style={iconMargin}/>
                <FontAwesome5 name={'heart'} onPress={iLike} style={(like) ? heartLike : heartNoLike } solid/>
              </View>
          </View>
          <View style={infoText}>
            <Text style={category}>{(recent) ? "RECENT" : "TREDDING"}</Text>
            <Text style={foodName}>{name}</Text>
          </View>
        </View>
      </ImageBackground>
      <View>
        <Text style={textIngredients}>Ingredients{'\n'}for {servings} servings</Text>
      </View>

      <FlatList
       data = {ingredients} 
       renderItem = { ({item}) => <Ingredient item = {item} /> } 
       keyExtractor = { (item) => item.name.toString() }
       />
    </View>
  )
}

export default Menu
