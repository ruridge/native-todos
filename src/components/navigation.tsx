import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DarkTheme, DefaultTheme } from '../utils/theme';

import { HomeScreen } from '../screens/home-screen';
import { SettingsScreen } from '../screens/settings-screen';
import { FetchingDataScreen } from '../screens/fetching-data-screen';

import type { ColorSchemeName } from 'react-native';
import { Sidebar } from './sidebar';

/*
 * This type gives TypeScript the information it needs to know what routes are
 * defined in this navigator as well as what props might be passed to the
 * screen. If props are passed through to the screen set their types, if no
 * props are passed set undefined.
 * More info:
 *  https://reactnavigation.org/docs/params/
 *  https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 *  https://reactnavigation.org/docs/typescript/#organizing-types
 */

export type DrawerParamList = {
  Home: undefined;
  Fetch: undefined;
  Settings: undefined;
};

// Documentation: https://reactnavigation.org/docs/drawer-navigator
const Drawer = createDrawerNavigator<DrawerParamList>();

type NavigationProps = {
  colorScheme: ColorSchemeName;
};
export function Navigation({ colorScheme }: NavigationProps) {
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <Sidebar {...props} />}
        screenOptions={{
          drawerType: 'back',
        }}
      >
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
