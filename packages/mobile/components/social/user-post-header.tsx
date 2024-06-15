import React from 'react';
import type { PressableProps, StyleProp, ViewStyle } from 'react-native';
import { Image, Pressable, StyleSheet, View } from 'react-native';

import { gray } from '@/theme/colors';
import { scale } from '@/utils/sizes';

import Button from '../ui/button';
import Text from '../ui/text';

interface Props extends PressableProps {
  avatarSrc?: string;
  username: string;
  time?: string;
  ctaLabel?: string;
  ctaAction?: () => void;
  style?: StyleProp<ViewStyle>;
}

const UserPostHeader: React.FC<Props> = ({
  username,
  avatarSrc,
  ctaAction,
  ctaLabel,
  style,
  time,
  ...rest
}) => {
  return (
    <View style={[styles.mainContainer, style]}>
      <Pressable
        style={styles.container}
        {...rest}
        accessibilityLabel={`Perfil de ${username}`}
      >
        {/* TODO: Avatar component */}
        <View style={styles.imageContainer}>
          {avatarSrc ? (
            <Image source={{ uri: avatarSrc }} style={styles.image} />
          ) : (
            <View style={styles.placeholder} />
          )}
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{username}</Text>
          {time && (
            <Text weight={400} style={styles.subtitle}>
              {time}
            </Text>
          )}
        </View>
      </Pressable>
      {ctaLabel && (
        <Button
          variant="filled-secondary"
          style={styles.button}
          textStyle={styles.buttonText}
          onPress={ctaAction}
        >
          {ctaLabel}
        </Button>
      )}
    </View>
  );
};

export default React.memo(UserPostHeader);

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    columnGap: scale(5),
  },
  imageContainer: {
    width: scale(45),
    height: scale(45),
    borderRadius: scale(22.5),
    overflow: 'hidden',
  },
  placeholder: {
    width: '100%',
    height: '100%',
    backgroundColor: gray[300],
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    gap: scale(2),
  },
  title: {
    fontSize: scale(16),
  },
  subtitle: {
    fontSize: scale(12),
  },
  button: {
    height: scale(30),
    paddingVertical: 0,
    paddingHorizontal: scale(14),
  },
  buttonText: {
    fontSize: scale(14),
  },
});
