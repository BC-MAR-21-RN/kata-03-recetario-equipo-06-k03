import React from 'react'
import { Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { itemStyles } from '../styles/itemStyles'

const Item = ({ item }) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Menu', item)} style={itemStyles.item}>
        <Image
          style={itemStyles.img}
          source={{ uri: item.photo }}
          />
        <Text style={itemStyles.text}>{item.name}</Text>
    </TouchableOpacity>
  )
}

export default Item
