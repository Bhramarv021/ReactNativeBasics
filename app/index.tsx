import { View } from "react-native";
import FlatListEx from "./components/FlatListEx";
import SectionListEx from "./components/SectionListEx";

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
      <SectionListEx />
    </View>
  );
}
