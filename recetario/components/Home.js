import React from 'react'
import {
  Text,
  View,
  StatusBar
} from 'react-native'
import { appStyles } from '../styles/appStyles'

import Search from './Search'
import HorizontList from './HorizontList'

const Home = () => {
  return (
    <View style={appStyles.container}>
      <StatusBar
      backgroundColor = '#282828'
      hidden = {false}
      translucent = {false}
    />
      <Search style={appStyles.search}/>
      <Text style={appStyles.text}>TRENDING</Text>
      <HorizontList />
      <Text style={appStyles.text}>RECENT</Text>

    </View>
  )
}

export default Home
