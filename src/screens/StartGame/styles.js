import { Dimensions, StyleSheet } from "react-native";
import colors from "../../constants/colors";

const {width, height} = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: "center",
        paddingTop: 50,
        backgroundColor: colors.primary,
        color: colors.white
    },
    subtitle: {
        color: colors.black,
    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        marginTop: 20,
    },
    cleanButton: {
        width: 100,
        maxWidth: width / 2,
        backgroundColor: colors.disableColor,
        borderRadius: 10
    },
    confirmButton: {
        width: 100,
        backgroundColor: colors.actionColor,
        borderRadius: 10
    },
    selectedCard: {
        marginTop: 50,
        width: "70%"
    }
})

export default styles;