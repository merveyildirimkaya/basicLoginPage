import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp, ParamListBase } from '@react-navigation/native';
import { HomeScreenRouteParams } from '../types/types';

type HomeScreenProps = {
    route: RouteProp<ParamListBase, "Home">;
};

const HomeScreen = ({ route }: HomeScreenProps) => {

    const { email } = route.params as HomeScreenRouteParams

    return (
        <View style={styles.container}>
            <Text>WELCOME</Text>
            {email && <Text style={styles.text}>{email}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 24
    }
})

export default HomeScreen;