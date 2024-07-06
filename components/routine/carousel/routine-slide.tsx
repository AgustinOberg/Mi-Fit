import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import type { SharedValue } from 'react-native-reanimated';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

import { EXCERCISES } from '@/__test__/mock/exercise';
import ExerciseCounter from '@/components/exercise/exercise-counter';
import Button from '@/components/ui/button';
import Divider from '@/components/ui/divider';
import Surface from '@/components/ui/surface';
import Text from '@/components/ui/text';
import { theme } from '@/theme/colors';
import { scale } from '@/utils/sizes';

import type { ExerciseCounter as IExerciseCounter } from '../routine-exercise';
const COUNTER: IExerciseCounter[] = [
  { key: 'sets', label: 'Sets', value: 3 },
  { key: 'reps', label: 'Reps', value: 12 },
  { key: 'rest', label: 'Rest', value: 60 },
];

const RoutineSlide = ({
  animationValue,
}: {
  animationValue: SharedValue<number>;
}) => {
  const animatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      animationValue.value,
      [-1, 0, 1],
      [0.2, 1, 0.2]
    );

    return { opacity };
  }, [animationValue]);
  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Surface style={styles.slide}>
        <View>
          <Surface style={styles.imgContainer}>
            <Image source={{ uri: EXCERCISES[0].image }} style={styles.image} />
          </Surface>
          <Text weight={700} style={styles.title} numberOfLines={2}>
            Pecho plano
          </Text>
          <Text style={styles.subtitle}>Pecho alto</Text>
          {/* <Text style={styles.description} numberOfLines={3}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil omnis
          ipsam ut? Quas natus esse aliquam optio voluptatem? Quia deserunt
          doloremque aut saepe sequi in quibusdam consectetur. Reprehenderit,
          maxime amet.
        </Text> */}
          <Divider mode="dark" style={styles.divider} />
          <View style={styles.counterContainer}>
            {COUNTER.map((item) => (
              <ExerciseCounter
                key={item.key}
                title={item.label}
                quantity={item.value}
              />
            ))}
          </View>
        </View>
        <View style={styles.footer}>
          <Button variant="filled-primary">Completar</Button>
          <Button variant="text" textStyle={styles.textButton}>
            Saltear
          </Button>
        </View>
      </Surface>
    </Animated.View>
  );
};

export default RoutineSlide;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    height: '100%',
    width: '80%',
    backgroundColor: 'white',
    paddingVertical: scale(28),
    paddingHorizontal: scale(10),
    justifyContent: 'space-between',
  },
  imgContainer: {
    width: scale(180),
    alignSelf: 'center',
    aspectRatio: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: scale(10),
  },
  title: {
    fontSize: scale(20),
    textAlign: 'center',
    marginTop: scale(10),
  },
  subtitle: {
    fontSize: scale(14.5),
    textAlign: 'center',
    color: theme.mutedText,
    marginTop: scale(5),
  },
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',

    paddingHorizontal: scale(10),
  },
  divider: {
    marginVertical: scale(20),
  },
  description: {
    color: theme.mutedText,
    paddingHorizontal: scale(10),
    fontSize: scale(14),
    marginTop: scale(10),
  },
  footer: {
    gap: scale(3),
    alignSelf: 'center',
  },
  textButton: {
    color: theme.mutedText,
    fontSize: scale(14),
  },
});
