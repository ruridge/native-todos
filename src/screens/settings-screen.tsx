import { Text, View } from 'react-native';
import { Button } from '../components/button';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { DrawerParamList } from '../components/navigation';

type SettingsScreenProps = NativeStackScreenProps<DrawerParamList, 'Settings'>;

export function SettingsScreen({ navigation }: SettingsScreenProps) {
  return (
    <View className="h-full items-center justify-evenly bg-red-200 dark:bg-red-900">
      <Text className="dark:text-neutral-50">
        Welcome to the settings, we&apos;ve got fun & games
      </Text>
      <Button label="Fetch Demo" onPress={() => navigation.navigate('Fetch')} />
    </View>
  );
}
