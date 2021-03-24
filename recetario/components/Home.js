import React from 'react'
import {
  Button,
  Text,
  View
} from 'react-native'
import { appStyles } from './styles'

import Search from './Search'
import HorizontList from './HorizontList'

const Home = ({ navigation }) => {
  return (
    <View style={appStyles.container}>
      <Search style={appStyles.search}/>
      <Text style={appStyles.text}>TRENDING</Text>
      <HorizontList/>
      <Text style={appStyles.text}>RECENT</Text>
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate('Menu')}
        />
    </View>
  )
}

export default Home
