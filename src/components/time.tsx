import { View, Text } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { z } from 'zod';

import { useRefetchOnFocus } from '../hooks/use-refetch-on-focus';

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
  const timeQuery = useQuery(
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

  // force a refetch of data if this component didn't unmount between
  // navigation (eg: going from a child to a parent stack)
  useRefetchOnFocus(timeQuery.refetch);

  if (timeQuery.isLoading) {
    return <Text className="dark:text-white">Loading...</Text>;
  }
  if (timeQuery.isError) {
    if (timeQuery.error instanceof Error) {
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
        Year: {timeQuery.data.year} | Month: {timeQuery.data.month} | Day:{' '}
        {timeQuery.data.day}
      </Text>
      <Text className="dark:text-white">
        Hour: {timeQuery.data.hour} | Minute: {timeQuery.data.minute} | Second:{' '}
        {timeQuery.data.seconds} {timeQuery.isRefetching && '♻️'}
      </Text>
    </View>
  );
}
