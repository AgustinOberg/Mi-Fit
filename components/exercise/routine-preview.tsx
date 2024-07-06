import React from 'react';
import { StyleSheet } from 'react-native';

import type { RoutinePreview as IRoutinePreview } from '@/types/routine';
import { scale } from '@/utils/sizes';

import Button from '../ui/button';
import ItemDescription from '../ui/list-item-description';
import ItemTitle from '../ui/list-item-title';
import Surface from '../ui/surface';

const RoutinePreview = ({ name, description }: IRoutinePreview) => {
  return (
    <Surface style={styles.container}>
      <ItemTitle>{name}</ItemTitle>
      <ItemDescription>{description}</ItemDescription>
      <Button style={styles.button} variant="text">
        Ver más
      </Button>
    </Surface>
  );
};

export default RoutinePreview;

const styles = StyleSheet.create({
  container: {
    padding: scale(15),
    borderRadius: scale(10),
  },
  button: {
    alignSelf: 'flex-end',
  },
});
