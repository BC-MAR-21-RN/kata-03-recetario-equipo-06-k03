import React from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet
} from 'react-native';

import Search from './components/Search';
import HorizontList from './components/HorizontList';
import Item from './components/Item';

const App = () => {
  return (
    <View style={styles.container}>
      <Search/>
      <HorizontList/>
      <Text style={styles.text}>RECENT</Text>
      {/* <Item/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#282828',
    paddingHorizontal: "2.5%"
  },
  text:{
    color: "#d31c71",
    fontSize: 24
  }
});

export default App;
