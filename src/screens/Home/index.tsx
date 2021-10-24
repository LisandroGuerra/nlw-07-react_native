import React from 'react'
import { KeyboardAvoidingView, Platform, View } from 'react-native'

import { Header } from '../../components/Header'
import { MessagesList } from '../../components/MessagesList'
import { SignInBox } from '../../components/SignInBox'
import { SendMessageForm } from '../../components/SendMessageForm'

import { styles } from './styles'
import { useAuth } from '../../hooks/auth'

export function Home(){
    const {user} = useAuth()

    return(
        <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
        <View style={styles.container}>
            <Header />
            <MessagesList />
            {user ? <SendMessageForm /> : <SignInBox />}
        </View>
        </KeyboardAvoidingView>
    )
}
