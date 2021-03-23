import React from 'react'
import { View, StyleSheet, TextInput, SafeAreaView } from 'react-native'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Search = () => {
  return (
    <SafeAreaView style={styles.input}>
      <View style={styles.glass}>
        <FontAwesome5 name={'search'} style={styles.search} />
        <TextInput
          style={styles.text}
          placeholder="What do you want to eat?"
          placeholderTextColor="#f1f1f1"
        />
      </View>
      <View>
        <FontAwesome5 name={'microphone'} style={styles.microphone} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    marginTop: 10,
    marginVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: '#343435',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text: {
    fontSize: 17
  },
  glass: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  search: {
    color: '#fff',
    fontSize: 18,
    marginRight: 10
  },
  microphone: {
    color: '#fff',
    fontSize: 23
  }

})

export default Search
