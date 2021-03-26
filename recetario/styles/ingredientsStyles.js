import { StyleSheet } from 'react-native'

const ingredientsStyles = StyleSheet.create({
  contentIngredient: {
    height: 30,
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#3f3f3f',
    borderBottomWidth: 1,
    marginHorizontal: 15,
    marginVertical: 5
  },
  ingredient: {
    color: '#efedec'
  }
})

export { ingredientsStyles }
