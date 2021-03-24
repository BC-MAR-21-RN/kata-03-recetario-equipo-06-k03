import React from 'react'
import { StatusBar } from 'react-native'
import 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './components/Home'
import Menu from './components/Menu'

const Stack = createStackNavigator()

const App = () => {
  return (
  <>
  <NavigationContainer>
    <StatusBar
      backgroundColor = '#282828'
      barStyle = "transparent"
      hidden = {false}
      translucent = {false}
    />

    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Menu" component={Menu} />

    </Stack.Navigator>
  </NavigationContainer>
  </>
  )
}

export default App
