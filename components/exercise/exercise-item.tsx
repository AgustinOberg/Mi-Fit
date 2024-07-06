import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';

import { theme } from '@/theme/colors';
import type { ExcersisePreview } from '@/types/excersise';
import { scale } from '@/utils/sizes';

import ItemDescription from '../ui/list-item-description';
import ItemTitle from '../ui/list-item-title';

interface Props extends ExcersisePreview {
  isSelected?: boolean;
  onPress?: () => void;
}
const ExerciseItem = ({
  image,
  name,
  mainMuscle,
  isSelected,
  onPress,
}: Props) => {
  return (
    <Pressable style={styles.exerciseContent} onPress={onPress}>
      {isSelected && (
        <LinearGradient
          style={styles.completed}
          colors={['white', theme.accent]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          locations={[0.3, 1]}
        />
      )}

      <Image style={styles.image} src={image} />
      <View style={styles.textContainer}>
        <ItemTitle>{name}</ItemTitle>
        <ItemDescription>{mainMuscle}</ItemDescription>
      </View>
    </Pressable>
  );
};

export default ExerciseItem;

const styles = StyleSheet.create({
  exerciseContent: {
    flexDirection: 'row',

    gap: scale(6),
    width: '100%',
  },
  image: {
    width: scale(60),
    height: scale(60),
    borderRadius: scale(5),
  },
  textContainer: {
    flex: 1,
    flexWrap: 'nowrap',
    paddingTop: scale(6),
  },
  completed: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.6,
    borderRadius: scale(15),
  },
});
