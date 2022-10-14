import {
  DrawerContentComponentProps,
  DrawerItemList,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { Image, View } from 'react-native';

export function Sidebar(props: DrawerContentComponentProps) {
  return (
    <View className="h-full">
      <Image
        source={require('../assets/sidebar-masthead.jpg')}
        className=" h-40 w-full"
      />
      <Image
        source={require('../assets/profile.png')}
        className="left-4 z-10 -mt-10 h-28 w-28 rounded-full border-8 border-white bg-orange-500 dark:border-slate-900 dark:bg-orange-600"
      />
      <DrawerContentScrollView className="grow items-start justify-start pl-4 pt-4">
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
}
