import {
    View, Text, StyleSheet, FlatList
} from "react-native"

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
        label: "(BFA) Transferencia para o Lucas",
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
    return (
        <View style={styles.flListItem}>
            <Text>{item.date}</Text>
            <View>
                <Text>{item.label}</Text>
                <Text>{item.value.toLocaleString(3)},00</Text>
            </View>
        </View>
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
        paddingLeft: 16,
        paddingRight: 16,
    },
    textMovements: {
        fontWeight: "700",
        fontSize: 18
    },
    flList: {
        marginTop: 10
    },
    flListItem: {

    }
})