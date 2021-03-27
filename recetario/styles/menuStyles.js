import { StyleSheet } from 'react-native'

const menuStyles = StyleSheet.create({
  menu: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#282828'
  },
  image: {
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: 250
  },
  image_imageStyle: {
    opacity: 0.3
  },
  separed: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '85%',
    marginHorizontal: 15,
    paddingTop: 40
  },
  infoText: {
    marginBottom: 30
  },
  viewIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  icons: {
    color:'#efedec',
    fontSize: 18
  },
  iconMargin: {
    marginRight: 15,
    color: '#efedec',
    fontSize: 18
  },
  category: {
    fontSize: 12,
    color: '#efedec',
    fontWeight: 'bold'
  },
  foodName: {
    fontSize: 16,
    color: '#efedec',
    fontWeight: '100'
  },
  textIngredients: {
    fontSize: 14,
    color: '#efedec',
    marginHorizontal: 15,
    marginVertical: 15
  },
  heartLike:{
    color: "red",
    fontSize: 18
  },
  heartNoLike:{
    color: "#efedec",
    fontSize: 18
  }
})

export { menuStyles }
