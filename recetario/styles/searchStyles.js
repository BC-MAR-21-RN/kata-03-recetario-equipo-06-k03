import { StyleSheet } from 'react-native'

const searchStyles = StyleSheet.create({
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

export { searchStyles }
