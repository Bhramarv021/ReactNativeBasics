import { ScrollView, View } from "react-native";
import SectionListEx from "./components/SectionListEx.js";
import FlatListEx from "./components/FlatListEx.js";
import ModalEx from "./components/ModalEx.js"
import StatusBarEx from "./components/StatusBarEx.js"

export default function Index() {
  return (
    <ScrollView>
      <View
        style={{
          // alignSelf: 'center',
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FlatListEx />
        <SectionListEx />
        <ModalEx />
        <StatusBarEx />
      </View>
    </ScrollView>
  );
}
