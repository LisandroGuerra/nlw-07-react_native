import React from 'react'
import {View, Text} from 'react-native'

import { Header } from '../../components/Header'
import { MessagesList } from '../../components/MessagesList'
import { SignInBox } from '../../components/SignInBox'
import { SendMessageForm } from '../../components/SendMessageForm'

import { styles } from './styles'

export function Home(){
    return(
        <View style={styles.container}>
            <Header />
            <MessagesList />
            <SendMessageForm />
        </View>
    )
}
