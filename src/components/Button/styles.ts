import { StyleSheet } from 'react-native'
import { FONTS } from '../../theme'


export const styles = StyleSheet.create({
  button: {
    height: 48,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
      fontFamily: FONTS.BOLD,
      fontSize: 16,    
  },
  icon: {
      fontSize: 24,
      marginRight: 16,
  }
})