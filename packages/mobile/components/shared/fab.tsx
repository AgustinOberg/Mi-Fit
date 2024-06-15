import { Feather } from '@expo/vector-icons';
import React from 'react';
import type { PressableProps } from 'react-native';
import { StyleSheet } from 'react-native';

import { primary, white } from '@/theme/colors';
import { surfaceShadow } from '@/theme/shared';
import { scale } from '@/utils/sizes';

import Button from '../ui/button';

interface Props extends PressableProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
  label: string;
}

const Fab = ({ iconName, label, ...rest }: Props) => {
  return (
    <Button
      variant="filled-secondary"
      style={styles.container}
      {...rest}
      preffix={() => (
        <Feather name={iconName} size={scale(20)} color={primary[900]} />
      )}
    >
      {label}
    </Button>
  );
};

export default Fab;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 1,
    bottom: scale(20),
    right: scale(20),
    padding: scale(15),
    flexDirection: 'row',
    gap: scale(10),
    ...surfaceShadow,
  },
  text: {
    color: white,
  },
});
