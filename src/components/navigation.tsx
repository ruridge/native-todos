import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DarkTheme, DefaultTheme } from '../utils/theme';

import { HomeScreen } from '../screens/home-screen';
import { SettingsScreen } from '../screens/settings-screen';
import { FetchingDataScreen } from '../screens/fetching-data-screen';

import type { ColorSchemeName } from 'react-native';

export type DrawerParamList = {
  Home: undefined;
  Fetch: undefined;
  Settings: undefined;
};
const Drawer = createDrawerNavigator<DrawerParamList>();

type NavigationProps = {
  colorScheme: ColorSchemeName;
};
export function Navigation({ colorScheme }: NavigationProps) {
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Tasks', headerShown: true }}
        />
        <Drawer.Screen
          name="Fetch"
          component={FetchingDataScreen}
          options={{ title: 'React Query Demo' }}
        />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
