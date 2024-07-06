import { StyleSheet } from 'react-native';

import { gray } from '@/theme/colors';
import { scale } from '@/utils/sizes';

import type { TextProps } from './text';
import Text from './text';

const ItemDescription = ({ style, children }: TextProps) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default ItemDescription;

const styles = StyleSheet.create({
  text: {
    fontSize: scale(12),
    color: gray['600'],
  },
});
