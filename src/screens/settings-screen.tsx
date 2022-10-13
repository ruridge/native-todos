import { Text, TouchableOpacity, View } from 'react-native';
import { Button } from '../components/button';

export function SettingsScreen() {
  return (
    <View className="h-full items-center justify-evenly bg-red-200 dark:bg-red-900">
      <Text className="dark:text-neutral-50">
        Welcome to the settings, we&apos;ve got fun & games
      </Text>
      <Button label="Hello World" onPress={() => alert('hello')} />
    </View>
  );
}
