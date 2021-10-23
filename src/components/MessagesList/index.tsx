import React from 'react'
import { ScrollView } from 'react-native'

import { Message } from '../Message'

import { styles } from './styles'


const message = {
  id: '1',
  text: 'Texto de teste de mesnagem do aplicativo em React Native para o DoWhile',
  user: {
      name: 'Lisandro',
      avatar_url: 'https://github.com/LisandroGuerra.png'
  }
}

export function MessagesList() {
  return (
    <ScrollView 
      style={styles.container} 
      contentContainerStyle={styles.content} 
      keyboardShouldPersistTaps='never'>
          <Message data={message}/>
          <Message data={message}/>
          <Message data={message}/>
          <Message data={message}/>
        
    </ScrollView>
  )
}