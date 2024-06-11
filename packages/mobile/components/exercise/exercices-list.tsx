import React from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';

import { gray } from '@/theme/colors';
import { scale } from '@/utils/sizes';

import Divider from '../ui/divider';
import Text from '../ui/text';

interface Exercise {
  illustration?: string;
  title: string;
  subtitle: string;
  weight: number;
  repetitions: number;
}

interface Props {
  title: string;
  exercises: Exercise[];
}

const ListHeader = ({ title }: { title: string }) => {
  return (
    <>
      <Text weight={700} style={styles.title}>
        {title}
      </Text>
      <Divider mode="dark" opacity={0.1} />
    </>
  );
};

const ListItem = ({ item }: { item: Exercise }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemInfoContainer}>
        <View style={styles.illustrationContainer}>
          {item.illustration && (
            <Image
              source={{ uri: item.illustration }}
              style={{ width: '100%', height: '100%' }}
            />
          )}
        </View>
        <View>
          <Text
            style={styles.listItemTitle}
            lineBreakStrategyIOS="push-out"
            textBreakStrategy="balanced"
            lineBreakMode="clip"
            numberOfLines={2}
          >
            {item.title}
          </Text>
          <Text style={styles.listItemSubtitle} weight={400}>
            {item.subtitle}
          </Text>
        </View>
      </View>
      <View style={styles.itemWeightContainer}>
        <Text weight={700}>{`${item.weight}kg`}</Text>
        <Text style={styles.reps}>{`${item.repetitions}Rep`}</Text>
      </View>
    </View>
  );
};

const ExercisesList = ({ exercises, title }: Props) => {
  return (
    <>
      <FlatList
        data={exercises}
        ListHeaderComponent={<ListHeader title={title} />}
        renderItem={ListItem}
        keyExtractor={(item) => item.title + item.subtitle}
      />
    </>
  );
};

export default ExercisesList;

const styles = StyleSheet.create({
  title: {
    fontSize: scale(20),
    textAlign: 'center',
  },
  listItemTitle: {
    fontSize: scale(16),
  },
  listItemSubtitle: {
    fontSize: scale(14),
    color: gray[500],
  },
  illustrationContainer: {
    width: scale(50),
    height: scale(50),
    overflow: 'hidden',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: scale(10),
  },
  itemInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(5),
    flexShrink: 1,
  },
  itemWeightContainer: {
    alignItems: 'center',
  },
  reps: {
    fontSize: scale(14),
  },
});
