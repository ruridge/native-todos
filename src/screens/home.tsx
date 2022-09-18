import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export function HomeScreen() {
  return (
    <SafeAreaView className="bg-slate-700">
      <View className="h-full w-full flex-1 items-center justify-center text-lg">
        <Text className="text-lg text-white">
          Open up src/screens/home.tsx to start working on your app!
        </Text>
        <Text className="text-lg text-white">Hello world! 👋</Text>
      </View>
    </SafeAreaView>
  )
}
