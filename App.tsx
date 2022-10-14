import 'react-native-gesture-handler';
import { useColorScheme } from 'react-native';
import { AppState } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NetInfo from '@react-native-community/netinfo';
import {
  QueryClient,
  QueryClientProvider,
  onlineManager,
  focusManager,
} from '@tanstack/react-query';

import { Navigation } from './src/components/navigation';

NetInfo.addEventListener((state) => {
  onlineManager.setOnline(
    Boolean(state.isConnected) && Boolean(state.isInternetReachable),
  );
});

AppState.addEventListener('change', (status) => {
  focusManager.setFocused(status === 'active');
});

export default function App() {
  const queryClient = new QueryClient();
  const colorScheme = useColorScheme();
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
