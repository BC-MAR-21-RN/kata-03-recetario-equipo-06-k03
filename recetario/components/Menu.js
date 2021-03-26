import React from 'react'
import { View, StyleSheet, ImageBackground, Text, FlatList} from 'react-native'
import { StatusBar } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ingredient from './Ingredient'

const Menu = () => {

  const navigation = useNavigation();
  const route = useRoute();

  const img = { uri: route.params.photo };
  const renderIngredient = ({ item }) => {

    return(
      <Ingredient item = { item } />
    )
  }


  return (
    <View style={styles.menu} >
      <StatusBar
        backgroundColor = 'rgba(0,0,0,0)'
        barStyle = "light-content"
        translucent = {true}
      />
      <ImageBackground source={img} style={styles.image} imageStyle={styles.image_imageStyle}>

        <View style={styles.separed}>
          <View style={styles.viewIcons}>
              <FontAwesome5 name={'times'} onPress={() => navigation.navigate('Home')} style={styles.icons}/>
              <View style={styles.viewIcons}>
                <FontAwesome5 name={'upload'} style={styles.iconMargin}/>
                <FontAwesome5 name={'heart'} style={styles.icons}/>
              </View>
          </View>

          <View style={styles.infoText}>
            <Text style={styles.category}>TREDDING</Text>
            <Text style={styles.foodName}>{route.params.name}</Text>
          </View>
        </View>

      </ImageBackground>

      <View>
        <Text style={styles.textIngredients}>Ingredients{"\n"}for {route.params.servings} servings</Text>
      </View>

      <FlatList
        data = {route.params.ingredients}
        renderItem = { renderIngredient }
         keyExtractor = { (item) => item.name.toString() }
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
    marginTop: 50
  },
  infoText:{
    marginBottom: 30
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
