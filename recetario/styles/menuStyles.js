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
    height: 200
  },
  image_imageStyle: {
    opacity: 0.3
  },
  separed: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '85%',
    marginHorizontal: 15,
    marginTop: 50
  },
  infoText: {
    marginBottom: 30
  },
  viewIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  icons: {
    color: '#efedec',
    fontSize: 18
  },
  iconMargin: {
    marginRight: 15,
    color: '#efedec',
    fontSize: 18
  },
  category: {
    fontSize: 10,
    color: '#efedec',
    fontWeight: 'bold'
  },
  foodName: {
    fontSize: 15,
    color: '#efedec',
    fontWeight: '100'
  },
  textIngredients: {
    fontSize: 12,
    color: '#efedec',
    marginHorizontal: 15,
    marginVertical: 15
  }
})

export { menuStyles }
