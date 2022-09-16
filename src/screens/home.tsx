import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function HomeScreen() {
  return (
    <SafeAreaView className="bg-slate-700">
      <View className="flex-1 items-center h-full w-full justify-center text-white text-lg">
        <Text className="text-white text-lg">
          Open up src/screens/home.tsx to start working on your app!
        </Text>
        <Text className="text-white text-lg">Hello world! 👋</Text>
      </View>
    </SafeAreaView>
  );
}
