import React from 'react'
import { View, Button, StyleSheet, ImageBackground, Text, FlatList} from 'react-native'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ingredient from './Ingredient'
import data from '../data/recipe.json'
const img = { uri: "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2016/05/costradepizza.jpg" };

const Menu = ({ navigation }) => {
  const renderIngredient = ({ ingredient }) => (
    <Ingredient ingredient = { ingredient } />
  )
  return (
    <View style={styles.menu} >

      <ImageBackground source={img} style={styles.image} imageStyle={styles.image_imageStyle}>

        <View style={styles.separed}>
          <View style={styles.viewIcons}>
              <FontAwesome5 name={'times'} onPress={() => navigation.navigate('Home')} style={styles.icons}/>
              <View style={styles.viewIcons}>
                <FontAwesome5 name={'heart'} style={styles.iconMargin}/>
                <FontAwesome5 name={'upload'} style={styles.icons}/>
              </View>
          </View>

          <View style={styles.infoText}>
            <Text style={styles.category}>TREDDING</Text>
            <Text style={styles.foodName}>Pizza de peperoni</Text>
          </View>

        </View>

      </ImageBackground>

      <View>
        <Text style={styles.textIngredients}>Ingredients{"\n"}for 3 servings</Text>
      </View>

      <FlatList
        data = { data.recipes }
        renderItem = { renderIngredient }
        keyExtractor = { (ingredient) => ingredient.id }
      />

    </View>
  )
}
const styles = StyleSheet.create({
  menu:{
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#282828"
  },
  image:{
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
    height: 200,
  },
  image_imageStyle:{
    opacity: 0.3
  },
  separed:{
    flexDirection: "column",
    justifyContent: "space-between",
    height: "85%",
    marginHorizontal: 15,
  },
  infoText:{
    marginBottom: 15
  },
  viewIcons:{
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icons:{
    color: '#efedec',
    fontSize: 18,
  },
  iconMargin:{
    marginRight: 15,
    color: '#efedec',
    fontSize: 18
  },
  category:{
    fontSize: 10,
    color: '#efedec',
    fontWeight: "bold"
  },
  foodName:{
    fontSize: 15,
    color: '#efedec',
    fontWeight: "100"
  },
  textIngredients:{
    fontSize: 12,
    color: '#efedec',
    marginHorizontal: 15,
    marginVertical: 15
  }
})

export default Menu
