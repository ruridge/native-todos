import { ActivityIndicator, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { z } from 'zod';
import { Text } from './text';

const PersonSchema = z.object({
  name: z.string(),
});

export type PersonType = z.infer<typeof PersonSchema>;

export function Person(props: { personId: number }) {
  const personQuery = useQuery(
    ['person', props.personId],
    async () => {
      const response = await fetch(
        `https://swapi.dev/api/people/${props.personId}`,
      ).then((res) => res.json());

      return PersonSchema.parse(response);
    },
    {
      retry: 0,
    },
  );

  if (personQuery.isLoading) {
    return <Text size="lg">Loading...</Text>;
  }
  if (personQuery.isError) {
    console.log(`personId: ${props.personId}`, personQuery.error);
    if (personQuery.error instanceof Error) {
      return <Text>Error loading person, please try again later.</Text>;
    }
    return <Text>Unknown: JSON.stringify(personQuery.error)</Text>;
  }
  return (
    <View className="flex-row">
      <Text size="lg">Person Name: {personQuery.data.name}</Text>
      {personQuery.isRefetching && <ActivityIndicator />}
    </View>
  );
}
