import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../components/button';

export function HomeScreen() {
  return (
    <SafeAreaView className="h-full w-full flex-1 items-center justify-between">
      <Text className="text-lg dark:text-white">Hello!</Text>

      <Button
        label="Add Task"
        onPress={() => alert('TODO: create new empty task')}
      />
    </SafeAreaView>
  );
}
