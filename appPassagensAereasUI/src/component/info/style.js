import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
    label: {
        color: colors.gray[400],
        fontSize: 12,
        textTransform: "uppercase"
    },
    value: {
        color: colors.black,
        fontSize: 20,
        fontWeight: 'bold'
    }
})