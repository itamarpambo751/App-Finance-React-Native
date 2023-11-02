import {
 View, Text, TouchableOpacity, StyleSheet, StatusBar
} from "react-native"

import {
    Feather
} from "@expo/vector-icons"

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64

export function AppStatusBar({
    user_name
}:{ user_name: string }) {
    return(
        <View style={styles.container}>
            <View style={styles.content}>
            <Text style={styles.username}>{user_name}</Text>
            <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                <Feather  name="user" size={27} color="#fff"/>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      paddingTop: statusBarHeight,
      width: "100%",
      backgroundColor: "#8000ff",
      alignItems: "center",
      justifyContent: "space-between",
      paddingLeft: 16,
      paddingRight: 16,
      paddingBottom: 44,
      flexDirection: "row"
    },
    content: {
      flex: 1,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    },
    buttonUser: {
      backgroundColor: "rgba(255, 255, 255, .5)",
      height: 50,
      width: 50,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 25
    },
    username: {
      fontSize: 18,
      fontWeight: "700",
      color: "#fff",
    }
  });
  