import React from 'react'
import {
  Text,
  View,
  StatusBar,
  ScrollView
} from 'react-native'
import { appStyles } from '../styles/appStyles'
import data  from '../data/recipe.json'

import Search from './Search'
import HorizontList from './HorizontList'
import Item from './Item'

const Home = () => {
  return (
    <ScrollView style={appStyles.container}>
      <StatusBar
      backgroundColor = '#282828'
      hidden = {false}
      translucent = {false}
    />
      <Search style={appStyles.search}/>
      <Text style={appStyles.text}>TRENDING</Text>
      <HorizontList />
      <Text style={appStyles.text}>RECENT</Text>

      {data.recipes.map( (item, i) => {
          if (i === data.recipes.length - 1) {
            item.recent = "RECENT"
            return <Item key={item.id} item={item}/>} 
      })}
    </ScrollView>
  )
}

export default Home
