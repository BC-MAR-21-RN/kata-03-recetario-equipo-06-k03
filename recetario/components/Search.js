import React from 'react'
import { View, TextInput } from 'react-native'
import { searchStyles } from '../styles/searchStyles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Search = () => {
  return (
    <View style={searchStyles.input}>
      <View style={searchStyles.glass}>
        <FontAwesome5 name={'search'} style={searchStyles.search} />
        <TextInput
          style={searchStyles.text}
          placeholder="What do you want to eat?"
          placeholderTextColor="#f1f1f1"
        />
      </View>
      <View>
        <FontAwesome5 name={'microphone'} style={searchStyles.microphone} />
      </View>
    </View>
  )
}

export default Search
