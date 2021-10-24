import React from 'react'
import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text, ColorValue,
    ActivityIndicator
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import { styles } from './styles'


type Props = TouchableOpacityProps & {
    title: string,
    color: ColorValue,
    backgroundColor: ColorValue,
    icon?: React.ComponentProps<typeof AntDesign>['name'],
    isLoading?: boolean
}

export function Button({
    title, color, backgroundColor,
    icon, isLoading = false, ...rest }: Props) {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor }]}
            activeOpacity={0.7}
            disabled={isLoading} {...rest}
        >
            {
                isLoading ? <ActivityIndicator color={color} /> :
                    <>
                        <AntDesign style={styles.icon} name={icon} />
                        <Text style={[styles.title, { color }]}>
                            {title}
                        </Text>
                    </>
            }

        </TouchableOpacity>
    )
}