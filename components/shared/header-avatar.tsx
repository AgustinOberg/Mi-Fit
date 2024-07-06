import React from 'react';
import { StyleSheet, View } from 'react-native';

import { scale } from '@/utils/sizes';

import Avatar from '../social/avatar';

const HeaderAvatar = () => {
  return (
    <View style={styles.container}>
      <Avatar
        height={scale(35)}
        width={scale(35)}
        src="https://lh3.googleusercontent.com/a/ACg8ocK-7JWn0GEds389CADFdphKGitsAyC9sPJRgJvl7KsPbmWVydx75Q=s576-c-no"
      />
    </View>
  );
};

export default HeaderAvatar;

const styles = StyleSheet.create({
  container: {
    marginLeft: scale(15),
  },
});
