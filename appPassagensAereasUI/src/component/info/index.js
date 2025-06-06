import { Text, View } from "react-native";
import { styles } from "./style";

export default function Info(props) {
    return (
        <View>
            <Text style={styles.label}> {props.label}</Text>
            <Text style={styles.value}> {props.value}</Text>
        </View>
    )
}