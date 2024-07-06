import { Feather } from '@expo/vector-icons';
import React, { useMemo } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { gray, white } from '@/theme/colors';
import type { Post as IPost } from '@/types/post';
import { getFirsts } from '@/utils/array';
import { scale } from '@/utils/sizes';

import ExerciseItem from '../exercise/exercise-item';
import Button from '../ui/button';
import ItemDescription from '../ui/list-item-description';
import UserPostHeader from './user-post-header';

const ItemSeparator = () => <View style={{ height: scale(10) }} />;

const Footer = () => (
  <Button style={styles.button} variant="text">
    Ver Más
  </Button>
);

const Post = ({ createdAt, exercises, user }: IPost) => {
  const cuttedExercises = useMemo(() => getFirsts(exercises, 3), [exercises]);
  const hasMoreExercises = exercises.length > cuttedExercises.length;
  return (
    <View style={styles.container}>
      <UserPostHeader
        username={user.fullName}
        time={createdAt}
        avatarSrc={user.avatar}
      />
      <ItemDescription>Nuevo Entrenamiento</ItemDescription>

      <FlatList
        data={cuttedExercises}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        ItemSeparatorComponent={ItemSeparator}
        style={!hasMoreExercises && styles.buttonSpace}
        ListFooterComponent={hasMoreExercises ? Footer : undefined}
        renderItem={({ item }) => <ExerciseItem {...item} />}
      />
      <View style={styles.socialFooter}>
        <Feather name="heart" size={scale(20)} />
        <Feather name="share-2" size={scale(20)} />
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    gap: scale(12),
    paddingHorizontal: scale(15),
    paddingVertical: scale(10),
  },

  button: {
    alignSelf: 'flex-start',
    marginTop: scale(10),
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  buttonSpace: {
    paddingBottom: scale(10),
  },
  socialFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: scale(10),
    borderTopColor: gray['100'],
    paddingTop: scale(10),
  },
});
