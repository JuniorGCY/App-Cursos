import { StyleSheet } from "react-native"
import { colors } from "../../styles/colors"
import { textStyles } from "../../styles/textStyles"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
    },
    header: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: 'Poppins-Bold',
        fontSize: 24,
        color: colors.white
    },
    subtitle: {
        fontFamily: 'Poppins-Medium',
        fontSize: 18,
        color: colors.gray[300]
    },
    ticket: {
        backgroundColor: colors.white,
        width: '100%',
        borderRadius: 10,
        overflow: "hidden",
        paddingBottom: 24
    },
    content: {
        padding: 20
    },
    flight: {
        width: '100%',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 52
    },
    duration: {
        alignItems: 'center'
    },
    hours: {
        color: colors.gray[800],
        fontSize: 12,
        fontFamily: "Poppins-Regular"
    },
    details: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    footer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginStart: 10,
        marginEnd: 10,
        padding: 10,
        
    }
})