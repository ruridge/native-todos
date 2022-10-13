import { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Person } from '../components/person';
import { Time } from '../components/time';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../components/navigation';

export type FetchingDataScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'FetchingData'
>;

export function FetchingDataScreen({ navigation }: FetchingDataScreenProps) {
  const [person, setPerson] = useState(1);

  return (
    <SafeAreaView
      className="bg-slate-50 dark:bg-[#0B1120]"
      edges={['bottom', 'left', 'right']}
    >
      <View className="h-full w-full flex-1 items-center justify-center">
        <TouchableOpacity
          className="my-3 rounded-2xl bg-blue-500 px-7 py-3"
          onPress={() => setPerson((person) => person + 1)}
        >
          <Text className="text-lg text-white">Next Character</Text>
        </TouchableOpacity>
        <Text className="text-lg dark:text-white">Person: {person}</Text>
        <Person personId={person} />
        <Time />
      </View>
    </SafeAreaView>
  );
}
