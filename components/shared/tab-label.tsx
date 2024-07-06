import React, { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { scale } from '@/utils/sizes';

import Text from '../ui/text';

interface Props {
  focused: boolean;
  color: string;
  children: string;
}

const TabLabel = ({ color, children, focused }: Props) => {
  const weight = useMemo(() => (focused ? 700 : 500), [focused]);
  return (
    <>
      <Text weight={weight} style={[styles.text, { color }]}>
        {children}
      </Text>
    </>
  );
};

export default TabLabel;

const styles = StyleSheet.create({
  text: {
    fontSize: scale(1.6),
    textAlign: 'center',
  },
});
