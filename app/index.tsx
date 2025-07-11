import { View } from "react-native";
// import SectionListEx from "./components/SectionListEx";
import FlatListEx from "./components/FlatListEx";

export default function Index() {
  return (
    <View
      style={{
        // alignSelf: 'center',
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FlatListEx />
    </View>
  );
}
