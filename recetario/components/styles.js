import { StyleSheet } from 'react-native'

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#282828',
    paddingHorizontal: '2.5%'
  },
  text: {
    color: '#d31c71',
    fontSize: 24,
    marginTop: 10,
    marginBottom: 10
  },
  search: {
    marginTop: 30
  }
})

const itemStyles = StyleSheet.create({
  item: {
    height: 225,
    width: 180

  },
  img: {
    height: 150,
    width: 150,
    borderRadius: 5
  },
  text: {
    color: 'white'
  }
})

const horizontalStyles = StyleSheet.create({
  horizontal: {
    height: 250,
    width: '100%',
    flexDirection: 'row'
  },
  text: {
    color: '#d31c71',
    fontSize: 24
  }
})

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

export { appStyles, itemStyles, horizontalStyles, searchStyles }
