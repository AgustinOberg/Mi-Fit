import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { gray } from '@/theme/colors';
import { scale } from '@/utils/sizes';

interface Props {
  src?: string;
  height?: number;
  width?: number;
}

const Avatar = ({ src, width, height }: Props) => {
  return (
    <View
      style={[
        styles.imageContainer,
        {
          width: width ?? scale(45),
          height: height ?? scale(45),
        },
      ]}
    >
      {src ? (
        <Image source={{ uri: src }} style={styles.image} />
      ) : (
        <View style={styles.placeholder} />
      )}
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: scale(22.5),
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  placeholder: {
    width: '100%',
    height: '100%',
    backgroundColor: gray[300],
  },
});
