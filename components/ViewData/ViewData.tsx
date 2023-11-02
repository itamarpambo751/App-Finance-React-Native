import {
    View, Text, StyleSheet
} from "react-native"

export function ViewData({
    saldo, gastos
}:{ saldo: number, gastos: number }) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.containerField}>
                    <Text style={styles.containerFieldDescription}>Saldo</Text>
                    <View style={styles.containerFieldView}>
                        <Text style={styles.money}>R$</Text>
                        <Text style={[styles.value, styles.green]}>{saldo.toLocaleString(3) ?? 0},00</Text>
                    </View>
                </View>
                <View style={styles.containerField}>
                    <Text style={styles.containerFieldDescription}>Gastos</Text>
                    <View style={styles.containerFieldView}>
                        <Text style={styles.money}>R$</Text>
                        <Text style={[styles.value, styles.red]}>-{gastos.toLocaleString(3) ?? 0},00</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        marginLeft: "5%",
        marginTop: -30,
        backgroundColor: "#fff",
        paddingHorizontal: 15,
        paddingVertical: 25,
        borderTopEndRadius: 5,
        borderTopStartRadius: 5,
        borderBottomEndRadius: 5,
        borderBottomStartRadius: 5,
        elevation: 20,
        shadowColor: '#1717176C',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    content: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    containerField: {
        gap: 5
    },
    containerFieldDescription: {
        fontSize: 18,
        color: "silver",
    },
    containerFieldView: {
        flexDirection: "row",
        gap: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    money: {
        color: "silver"
    },
    value: {
        fontSize: 25,
        fontWeight: "600",
    },
    green: {
        color: "#70C170"
    },
    red: {
        color: "#ff7f7f"
    }
})