import React from 'react'
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
  requireNativeComponent
} from 'react-native'

const Item = ({item}) => (
    <View style={styles.item}>
      <Image
        style={styles.img}
        source={{uri: item.photo}}
      /> 
      <Text style={styles.text}>{item.name}</Text>
    </View>
)

const styles = StyleSheet.create({
    item: {
        height:225,
        width: 250
    },
    img:{
        height: 150,
        width: 150
    },
    text: {
        color: "white"
    }
})

export default Item
