import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from 'tailwindcss/colors';

import { HomeScreen } from '../screens/home';
import { FetchingDataScreen } from '../screens/fetching-data';

import type { Theme } from '@react-navigation/native';

const Stack = createNativeStackNavigator<RootStackParamList>();

const MyDarkTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    card: colors.slate[900],
  },
};

export type RootStackParamList = {
  Home: undefined;
  FetchingData: undefined;
};

export function Navigation() {
  const colorScheme = useColorScheme();
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? MyDarkTheme : DefaultTheme}
    >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home Screen',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="FetchingData"
          component={FetchingDataScreen}
          options={{
            title: 'Fetching Data',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
