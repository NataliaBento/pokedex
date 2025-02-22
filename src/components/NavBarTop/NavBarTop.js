import React from "react";
import { StyleSheet, Text } from 'react-native';

export default function NavBarTop() {
    return (
        <>
            <Text style={styles.textoPokedex}>Pokédex</Text>
        </>
    );
}

const styles = StyleSheet.create({
    textoPokedex: {
        color: "white",
        fontSize: "large",
        fontWeight: "bold",
        textShadowColor: "black",
        textShadowOffset: { width: 5, heigth: 5 },
        textShadowRadius: 5
    },
});