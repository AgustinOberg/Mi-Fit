import { StyleSheet } from 'react-native';

import { gray } from '@/theme/colors';
import { scale } from '@/utils/sizes';

import type { TextProps } from './text';
import Text from './text';

const ItemTitle = ({ style, children }: TextProps) => {
  return (
    <Text
      weight={600}
      style={[styles.text, style]}
      numberOfLines={2}
      ellipsizeMode="tail"
    >
      {children}
    </Text>
  );
};

export default ItemTitle;

const styles = StyleSheet.create({
  text: {
    fontSize: scale(15.5),
    color: gray['900'],
  },
});
