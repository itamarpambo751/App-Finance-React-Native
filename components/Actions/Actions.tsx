import {
    ScrollView, Text, View, StyleSheet, TouchableOpacity
} from "react-native"

import {
    AntDesign
} from "@expo/vector-icons"

export function Actions() {
    return(
        <ScrollView style={styles.scroll} horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="addfolder" size={26}/>
                </View>
                <Text style={styles.labelButton}>Entradas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="tago" size={26}/>
                </View>
                <Text style={styles.labelButton}>Compras</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="creditcard" size={26}/>
                </View>
                <Text style={styles.labelButton}>Compras</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="barcode" size={26}/>
                </View>
                <Text style={styles.labelButton}>Boletos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="setting" size={26}/>
                </View>
                <Text style={styles.labelButton}>Conta</Text>
            </TouchableOpacity>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scroll: {
        height: "auto",
        maxHeight: 84,
        paddingHorizontal: 20,
        marginTop: 18,
        display: "flex",
        gap: 10
    },
    actionButton: {
        alignItems: "center",
        gap: 2,
        marginRight: 32
    },
    areaButton: {
        backgroundColor: "#eee",
        height: 50,
        width: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center" 
    },
    labelButton: {

    }
})