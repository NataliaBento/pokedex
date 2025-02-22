import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function ViaCEP() {
    const [inputTextValue, onChangeText] = React.useState('');

    return (
        <>
            <View style={styles.viewViaCEP}>
                <View style={styles.viewViaCEPForm}>
                    <TextInput
                        style={styles.inputText}
                        onChangeText={onChangeText} 
                        value={inputTextValue}
                        placeholder="Insra valor"
                    >
                    </TextInput>
                    <input type="button"></input>
                </View>
                <View style={styles.viewViaCEPReturn}>
                    <Text>Retorno</Text>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    viewViaCEP: {
        backgroundColor: 'purple',
        flex: 1,
        flexDirection: 'column',
        padding: 20,
        width: 'auto'
    },
    viewViaCEPForm: {
        alignItems: "center",
        backgroundColor: "green",
        flexDirection: 'row',
        height: 50,
        justifyContent: "left",
        padding: 20,
    },
    viewViaCEPReturn: {
        alignItems: "center",
        backgroundColor: "red",
        flex: 1,
        flexDirection: 'column',
        justifyContent: "top",
    },
    inputText:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
});
