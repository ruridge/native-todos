import { View, Text } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { z } from 'zod';
import { useRefreshOnFocus } from '../hooks/use-refetch-on-focus';

const PersonSchema = z.object({
  name: z.string(),
});

export type PersonType = z.infer<typeof PersonSchema>;

export function Person(props: { personId: number }) {
  const query = useQuery(
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

  // useRefreshOnFocus(personQuery.refetch)

  if (query.isLoading) {
    return <Text className="dark:text-white">Loading...</Text>;
  }
  if (query.isError) {
    console.log(`personId: ${props.personId}`, query.error);
    if (query.error instanceof Error) {
      return (
        <Text className="dark:text-white">
          Error loading person, please try again later.
        </Text>
      );
    }
    return (
      <Text className="dark:text-white">
        Unknown: JSON.stringify(personQuery.error)
      </Text>
    );
  }
  return (
    <View className="flex flex-row items-center">
      <Text className="dark:text-white">
        Person Name: {query.data.name} {query.isRefetching && '♻️'}
      </Text>
    </View>
  );
}
