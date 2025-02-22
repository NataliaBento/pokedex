import react from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ViaCEP() {
    return (
        <>
            <View style={styles.viewViaCEP}>
                <View style={styles.viewViaCEPForm}>
                    <input type="text"></input>
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
});
