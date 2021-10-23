import { StyleSheet } from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'


export const styles = StyleSheet.create({
  container: {
    height: 48,
    paddingHorizontal: 20,
    paddingBottom: getBottomSpace() + 32,
    justifyContent: 'center',
    alignItems: 'center',
  }
})