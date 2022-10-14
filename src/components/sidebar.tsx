import {
  DrawerContentComponentProps,
  DrawerItemList,
  DrawerContentScrollView,
  useDrawerProgress,
} from '@react-navigation/drawer';
import { Image } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

export function Sidebar(props: DrawerContentComponentProps) {
  const progress = useDrawerProgress() as Readonly<
    Animated.SharedValue<number>
  >;

  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(progress.value, [0, 1], [0.8, 1]);
    const opacity = interpolate(progress.value, [0, 0.5, 1], [0, 0.1, 1]);
    return {
      transform: [{ scale }],
      opacity,
    };
  });

  return (
    <Animated.View className="h-full overflow-hidden" style={animatedStyle}>
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
    </Animated.View>
  );
}
