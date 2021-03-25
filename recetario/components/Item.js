import React from 'react'
import { Text, View, Image } from 'react-native'
import { itemStyles } from './styles'

const Item = ({ item }) => (
  <View style={itemStyles.item} >
    <Image
      style={itemStyles.img}
      source={{ uri: item.photo }}
    />
    <Text style={itemStyles.text}>{item.name}</Text>
  </View>
)

export default Item
