import {
    View, Text, StyleSheet, FlatList, TouchableOpacity
} from "react-native"
import { useState } from "react"

const latestMovements = [
    {
        id: 1,
        label: "Salário mensal",
        value: 150740,
        date: "2023/05/01",
        type: 0
    },
    {
        id: 2,
        label: "Conta da Netflix",
        value: 4000,
        date: "2023/05/02",
        type: 1
    },
    {
        id: 3,
        label: "(BFA) Transferencia / Lucas",
        value: 25000,
        date: "2022/05/02",
        type: 1
    },
    {
        id: 4,
        label: "Pix art",
        value: 4500,
        date: "2022/05/01",
        type: 1
    }
]

function FlatListItem({ item }: {item:{
    id: number,
    label: string,
    value: number,
    date: string,
    type: number
}}) {
    const [showingValue, setShowingValue] = useState<Boolean>(false)
    return (
        <TouchableOpacity 
            style={styles.flListItem} 
            onPress={() => setShowingValue(!showingValue)}
        >
            <Text style={styles.date}>{item.date}</Text>
            <View style={styles.flListItemView}>
                <Text style={styles.label}>{item.label}</Text>
                {showingValue ? (
                    <Text 
                        style={[styles.money, !item.type ? styles.green : styles.red]}
                    >
                        R$ { !item.type ? item.value.toLocaleString(3): "-" + item.value.toLocaleString(3) },00
                    </Text>
                ): (
                    <View style={
                        [styles.notShowing, item.type ? styles.redBcg:styles.notShowing]
                    }/>
                )}
            </View>
        </TouchableOpacity>
    )
}

export function LatestMovements() {
    return (
        <View style={styles.container}>
            <Text style={styles.textMovements}>Ultimas movimentações</Text>

            <FlatList 
                style={styles.flList} 
                data={latestMovements}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                    <FlatListItem item={item}/>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    textMovements: {
        fontWeight: "700",
        fontSize: 18
    },
    flList: {
        marginTop: 10
    },
    flListItem: {
        paddingTop: 20
    },
    flListItemView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    date: {
        fontSize: 11,
        color: "silver",
        marginBottom: 3
    },
    label: {
        fontSize: 16
    },
    money: {
        fontSize: 14,
        fontWeight: "600"
    },
    green: {
        color: "#70C170"
    },
    red: {
        color: "#ff7f7f"
    },
    redBcg: {
        backgroundColor: "#ff7f7f"
    },
    symbol: {
        color: "silver"
    },
    notShowing: {
        padding: 5,
        width: 70,
        borderRadius: 10,
        backgroundColor: "#70C170"
    }
})