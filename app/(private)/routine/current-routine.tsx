import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import type { EdgeInsets } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import RoutineCarousel from '@/components/routine/carousel/routine-carousel';
import RoutineControl from '@/components/routine/routine-control';
import { scale } from '@/utils/sizes';

const RunRoutineScreen = () => {
  const edgeInsets = useSafeAreaInsets();
  const styles = useMemo(() => stylesFnc(edgeInsets), [edgeInsets]);
  return (
    <>
      <View style={{ height: '80%', width: '100%', paddingTop: 20 }}>
        <RoutineCarousel />
      </View>
      <View style={styles.footer}>
        <RoutineControl />
      </View>
    </>
  );
};

export default RunRoutineScreen;

const stylesFnc = (edgeInsets: EdgeInsets) =>
  StyleSheet.create({
    footer: {
      position: 'absolute',
      bottom: edgeInsets.bottom + scale(20),
      width: '100%',
      paddingHorizontal: scale(40),
    },
  });
