import { View,Text,StyleSheet, Button} from "react-native";

import {useNavigation} from '@react-navigation/native'

export default function Home() {
    const navigation = useNavigation();

    function navegaSobre() {
        navigation.navigate('Detalhes')
    }

    return (
        <View style={styles.container}>
            <Text> Home Page</Text>
            <Button title="ir para sobre" onPress={navegaSobre} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})