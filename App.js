import { SafeAreaView, Platform, StatusBar } from "react-native";

export default function App() {
  return <SafeAreaView style={{ flex: 1, marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }}></SafeAreaView>;
}
