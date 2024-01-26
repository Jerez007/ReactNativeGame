import { StyleSheet, View } from "react-native";
import Colors from "../../constants/color";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    marginTop: 100,
    marginHorizontal: 20,
    borderRadius: 8,
    padding: 16,
    backgroundColor: Colors.primary800,
    elevation: 4, //for shadow in android only
    shadowColor: "black", // for iOS
    shadowOffset: {
      width: 0,
      height: 2,
    }, // for iOS
    shadowRadius: 6, // for iOS
    shadowOpacity: 0.25, // for iOS,
    justifyContent: "center",
    alignItems: "center",
  },
});
