import { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../components/navigation';

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

export function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <SafeAreaView className="h-full w-full flex-1 items-center justify-between">
      <Text className="text-lg dark:text-white">Hello!</Text>

      <TouchableOpacity
        className="my-3 rounded-2xl bg-blue-500 px-7 py-3"
        onPress={() => navigation.navigate('FetchingData')}
      >
        <Text className="text-lg text-white">Fetch Demo</Text>
      </TouchableOpacity>
      <Text className="text-lg dark:text-white">Bye bye 👋</Text>
    </SafeAreaView>
  );
}
