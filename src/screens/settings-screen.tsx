import { View } from 'react-native';
import { Button } from '../components/button';
import { Text } from '../components/text';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { DrawerParamList } from '../components/navigation';

type SettingsScreenProps = NativeStackScreenProps<DrawerParamList, 'Settings'>;

export function SettingsScreen({ navigation }: SettingsScreenProps) {
  return (
    <View className="h-full items-center justify-evenly">
      <Text>Welcome to the settings, we&apos;ve got fun & games</Text>
      <Button label="Fetch Demo" onPress={() => navigation.navigate('Fetch')} />
    </View>
  );
}
