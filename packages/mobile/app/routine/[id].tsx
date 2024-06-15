import { LinearGradient } from 'expo-linear-gradient';
import React, { useMemo } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import type { EdgeInsets } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import ExercisesList from '@/components/exercise/exercices-list';
import { scale } from '@/utils/sizes';

const IMAGE_URL =
  'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const DOMINANT_COLOR = '#33393a';

const RoutineId = () => {
  const insets = useSafeAreaInsets();
  const styles = useMemo(() => stylesFnc(insets), [insets]);
  return (
    <>
      <View style={styles.container}>
        <View>
          <Image source={{ uri: IMAGE_URL }} style={styles.image} />
          <LinearGradient
            colors={['transparent', DOMINANT_COLOR]}
            style={StyleSheet.absoluteFill}
          />
        </View>
      </View>
      <View style={styles.mainContentContainer}>
        <View style={styles.contentContainer}>
          <ExercisesList
            title="Rutina para romperse los abdominales"
            exercises={[
              {
                title: 'Burpee con flexiones',
                subtitle: 'Subtitle 1',
                weight: 10,
                repetitions: 10,
                illustration: IMAGE_URL,
              },
            ]}
          />
        </View>
      </View>
    </>
  );
};

export default RoutineId;

const stylesFnc = (insets: EdgeInsets) =>
  StyleSheet.create({
    mainContentContainer: {
      flex: 1,
      alignItems: 'center',
      marginTop: insets.top + scale(120),
      marginBottom: insets.bottom + scale(20),
    },
    container: {
      flex: 1,
      backgroundColor: DOMINANT_COLOR,
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
    image: {
      height: scale(220),
      width: '100%',
    },
    gradient: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      right: 0,
      top: 0,
      flex: 1,
      zIndex: 999,
    },
    contentContainer: {
      backgroundColor: 'white',
      width: '95%',
      alignSelf: 'center',
      borderRadius: scale(10),
      height: '100%',
      padding: scale(20),
    },
  });
