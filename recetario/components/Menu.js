import React from 'react'
import { View, Button } from 'react-native'

const Menu = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Regresar"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

export default Menu
