import { useState } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../components/button';
import { Person } from '../components/person';
import { Time } from '../components/time';
import { Text } from '../components/text';

export function FetchingDataScreen() {
  const [person, setPerson] = useState(1);

  return (
    <SafeAreaView edges={['bottom', 'left', 'right']}>
      <View className="h-full w-full flex-1 items-center justify-center">
        <Button
          label="Next Character"
          onPress={() => setPerson((person) => person + 1)}
        />
        <Button label="Reset People" onPress={() => setPerson(1)} />
        <Text size="lg">Person: {person}</Text>
        <Person personId={person} />
        <Time />
      </View>
    </SafeAreaView>
  );
}
