import React from 'react';
import type { PressableProps } from 'react-native';
import { ImageBackground, Pressable, StyleSheet, View } from 'react-native';

import { black, white } from '@/theme/colors';
import { scale } from '@/utils/sizes';

import Divider from '../ui/divider';
import Text from '../ui/text';

interface Content extends ExerciseDescriptionItemProps {
  id: string;
}
interface Props extends PressableProps {
  title: string;
  content?: Content[];
  coverImage?: string;
}

interface ExerciseDescriptionItemProps {
  title: string;
  description?: string;
}

const ExerciseDescriptionItem = ({
  title,
  description,
}: ExerciseDescriptionItemProps) => {
  return (
    <View>
      <Text weight={500} style={styles.itemTitle}>
        {title}
      </Text>
      {description && (
        <Text weight={400} style={styles.itemContent} italic>
          {description}
        </Text>
      )}
    </View>
  );
};

const ExerciseCard = ({ title, content, coverImage, ...rest }: Props) => {
  return (
    <Pressable {...rest}>
      <ImageBackground
        style={styles.container}
        source={{
          uri: coverImage,
        }}
        resizeMode="cover"
        imageStyle={styles.imageStyle}
        blurRadius={4}
      >
        <Text style={styles.title} numberOfLines={2} weight={700}>
          {title}
        </Text>
        <Divider mode="light" style={styles.spacer} />
        <View style={styles.exerciesDescriptionContainer}>
          {content?.map((item) => (
            <ExerciseDescriptionItem key={item.id} {...item} />
          ))}
        </View>
      </ImageBackground>
    </Pressable>
  );
};

export default ExerciseCard;
const styles = StyleSheet.create({
  container: {
    backgroundColor: black,
    borderRadius: scale(15),
    paddingTop: scale(15),
    paddingBottom: scale(15),
    paddingHorizontal: scale(15),
  },
  imageStyle: {
    borderRadius: scale(15),
    opacity: 0.35,
  },
  title: {
    fontSize: scale(20),
    color: white,
  },
  spacer: {
    marginVertical: scale(8),
  },
  exerciesDescriptionContainer: {
    gap: scale(10),
  },
  itemTitle: {
    color: white,
  },
  itemContent: {
    color: white,
  },
});
