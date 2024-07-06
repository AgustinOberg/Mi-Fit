import { router } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';

import { theme } from '@/theme/colors';
import { scale } from '@/utils/sizes';

import Button from '../ui/button';
import Divider from '../ui/divider';
import ItemDescription from '../ui/list-item-description';
import ItemTitle from '../ui/list-item-title';
import Surface from '../ui/surface';

const RoutineItem = () => {
  const startRoutine = () => router.push('routine/current-routine');
  return (
    <Surface style={styles.container}>
      <ItemTitle style={styles.title}>Rutina para romperse el trícep</ItemTitle>
      <Divider mode="light" style={styles.divider} />
      <ItemDescription
        numberOfLines={1}
        ellipsizeMode="tail"
        style={styles.description}
      >
        3x12 Fondos de tríceps (10kg) - 3x12 Fondos de tríceps (10kg) - 3x12
        Fondos de tríceps (10kg) - 3x12 Fondos de tríceps (10kg) - 3x12 Fondos
        de tríceps (10kg) 3x12 Fondos de tríceps (10kg)
      </ItemDescription>
      <Divider mode="light" style={styles.divider} />
      <Button
        style={styles.button}
        variant="filled-secondary"
        onPress={startRoutine}
      >
        Comenzar rutina
      </Button>
    </Surface>
  );
};

export default RoutineItem;

const styles = StyleSheet.create({
  container: {
    padding: scale(15),
    backgroundColor: theme.surface,
    borderWidth: scale(2),
    borderColor: theme.borderPrimary,
  },
  divider: {
    marginTop: scale(4),
  },
  description: {
    color: theme.mutedText,
    marginVertical: scale(6),
  },
  title: {
    fontSize: scale(18),
    color: theme.primaryText,
  },
  button: {
    marginTop: scale(8),
  },
});
