import React from 'react';
import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

import Text from '../ui/text';
interface Props {
  children: string;
}
const Label = ({ children }: Props) => {
  return (
    <Text weight={400} style={styles.label}>
      {children}
    </Text>
  );
};

export default Label;

const styles = StyleSheet.create({
  label: {
    marginBottom: scale(3),
    fontSize: scale(13),
  },
});
