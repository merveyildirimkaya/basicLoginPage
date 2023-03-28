import React from 'react';
import { View, StyleSheet, TextInput, Text, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width

const TextInputComp = (props: { backgroundColor: any; placeholder: string; setValue: Function, value: { [key: string]: any }, input: string }) => {

    const [visibility, setVisibility] = React.useState<"none" | "flex">("none")
    const [placeholder, setPlaceHolder] = React.useState(props.placeholder)

    return (
        <View>
            <Text style={{ ...styles.label, backgroundColor: props.backgroundColor, display: visibility }}>{props.placeholder}</Text>
            <TextInput
                style={styles.input}
                onChangeText={(value) => props.setValue({ ...props.value, [props.input]: value })}
                value={props.value[props.input]}
                placeholder={placeholder}
                onPressIn={() => { setVisibility("flex"), setPlaceHolder("") }}
                onEndEditing={() => { setVisibility("none"), setPlaceHolder(props.placeholder) }}
                secureTextEntry={props.input === "password"}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: windowWidth * 0.8,
        margin: 12,
        borderWidth: 2,
        padding: 10,
        borderColor: '#C7C7CD',
        borderRadius: 5,
        position: "relative"
    },
    label: {
        position: "absolute",
        left: 20,
        top: 2,
        zIndex: 1000,
    }
});

export default TextInputComp;