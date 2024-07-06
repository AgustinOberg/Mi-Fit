import React from 'react';
import type { PressableProps, StyleProp, ViewStyle } from 'react-native';
import { Pressable, StyleSheet, View } from 'react-native';

import { gray } from '@/theme/colors';
import { scale } from '@/utils/sizes';

import Button from '../ui/button';
import Text from '../ui/text';
import Avatar from './avatar';

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
        <Avatar src={avatarSrc} />
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
    columnGap: scale(12),
  },

  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    gap: scale(0),
  },
  title: {
    fontSize: scale(17),
  },
  subtitle: {
    fontSize: scale(13),
    color: gray['600'],
  },
  button: {
    height: scale(30),
    paddingVertical: 0,
    paddingHorizontal: scale(14),
  },
});
