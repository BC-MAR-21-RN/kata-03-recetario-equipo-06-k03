import { StyleSheet } from 'react-native'

const appStyles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#282828',
    paddingHorizontal: "2.5%"
  },
  text:{
    color: "#d31c71",
    fontSize: 24,
    marginTop: 10,
    marginBottom: 10
  },
  search: {
    marginTop: 30
  }
});

const itemStyles = StyleSheet.create({
  item: {
      height:225,
      width: 180,
      
  },
  img:{
      height: 150,
      width: 150,
      borderRadius: 5
  },
  text: {
      color: "white"
  }
})

const horizontalStyles = StyleSheet.create({
  horizontal: {
      height: 250,
      width: "100%",
      flexDirection: "row"
  },
  text: {
  color: '#d31c71',
  fontSize: 24
  },
  // scroll:{
  //     flexDirection: 'row',
  // }
})

export { appStyles, itemStyles, horizontalStyles }
