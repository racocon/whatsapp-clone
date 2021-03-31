import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  messageBox: {
    padding: 10,
    borderRadius: 5,
  },
  name: {
    color: Colors.light.tint,
    fontWeight: "bold",
    marginBottom: 5,
  },
  message: {},
  time: {
    alignSelf: "flex-end",
    color: "gray",
  },
});

export default styles;
