import React from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet
} from 'react-native';
import { appStyles } from './styles'

import Search from './Search';
import HorizontList from './HorizontList';
import Item from './Item';


const Home = () => {
    return (
      <View style={appStyles.container}>
        <Search style={appStyles.search}/>
        <Text style={appStyles.text}>TRENDING</Text>
        <HorizontList/>
        <Text style={appStyles.text}>RECENT</Text>
        {/* <Item/> */}
      </View>
    );
  };
  
  export default Home;