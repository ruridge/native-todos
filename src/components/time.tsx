import { View, Text } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { z } from 'zod';

import { useRefreshOnFocus } from '../hooks/use-refetch-on-focus';

const TimeSchema = z.object({
  year: z.number(),
  month: z.number(),
  day: z.number(),
  hour: z.number(),
  minute: z.number(),
  seconds: z.number(),
});

export type TimeType = z.infer<typeof TimeSchema>;

export function Time() {
  const query = useQuery(
    ['time'],
    async () => {
      const response = await fetch(
        `https://www.timeapi.io/api/Time/current/zone?timeZone=US/Pacific`,
      ).then((res) => res.json());

      return TimeSchema.parse(response);
    },
    {
      retry: 0,
    },
  );

  useRefreshOnFocus(query.refetch);

  if (query.isLoading) {
    return <Text className="dark:text-white">Loading...</Text>;
  }
  if (query.isError) {
    if (query.error instanceof Error) {
      return (
        <Text className="dark:text-white">
          Error loading time, please try again later.
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
    <View className="flex flex-col items-center">
      <Text className="dark:text-white">
        Year: {query.data.year} | Month: {query.data.month} | Day:{' '}
        {query.data.day}
      </Text>
      <Text className="dark:text-white">
        Hour: {query.data.hour} | Minute: {query.data.minute} | Second:{' '}
        {query.data.seconds} {query.isRefetching && '♻️'}
      </Text>
    </View>
  );
}
