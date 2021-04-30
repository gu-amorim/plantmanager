import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import userImg from '../assets/GUSTAVO.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';


export function Header() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.userName}>Gustavo</Text>
            </View>

            <Image source={userImg} style={styles.image} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: getStatusBarHeight(),
    },
    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text
    },
    userName: {
        fontSize: 32,
        fontFamily: fonts.heading,
        color: colors.heading
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: colors.green
    }
})