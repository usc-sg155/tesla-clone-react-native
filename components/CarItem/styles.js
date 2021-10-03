import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const styles = StyleSheet.create({
  titles: { marginTop: "30%", width: "100%", alignItems: "center" },
  title: { fontSize: 40, fontWeight: "500" },
  subtitle: { fontSize: 16, color: "#5c5e62" },
  carContainer: {
    width: "100%",
    height: Dimensions.get("window").height,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  buttonsContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
  subtitleCTA: {
    textDecorationLine: "underline",
  },
});

export default styles;
