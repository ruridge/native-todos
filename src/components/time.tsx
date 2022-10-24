import { ActivityIndicator, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { z } from 'zod';

import { Text } from './text';
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

  // force a refetch of data if this component didn't unmount between navigation
  useRefetchOnFocus(timeQuery.refetch);

  if (timeQuery.isLoading) {
    return <Text>Loading...</Text>;
  }
  if (timeQuery.isError) {
    if (timeQuery.error instanceof Error) {
      return <Text>Error loading time, please try again later.</Text>;
    }
    return <Text>Unknown: JSON.stringify(personQuery.error)</Text>;
  }
  return (
    <View className="flex-row">
      <View>
        <Text>
          Year: {timeQuery.data.year} | Month: {timeQuery.data.month} | Day:{' '}
          {timeQuery.data.day}
        </Text>
        <View className="flex-row">
          <Text>
            Hour: {timeQuery.data.hour} | Minute: {timeQuery.data.minute} |
            Second: {timeQuery.data.seconds}{' '}
          </Text>
        </View>
      </View>
      {timeQuery.isRefetching && <ActivityIndicator />}
    </View>
  );
}
