import { useRef, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';

export function useRefetchOnFocus<T>(refetch: () => Promise<T>) {
  const firstTimeRef = useRef(true);

  useFocusEffect(
    // useCallback prevents the effect from running on every render.
    useCallback(() => {
      // this runs on initial render (if the screen is focused)
      // so skip running refetch() during the first render on mounting the component
      if (firstTimeRef.current) {
        firstTimeRef.current = false;
        return;
      }

      console.log('refetching...');
      refetch();
    }, [refetch]),
  );
}
