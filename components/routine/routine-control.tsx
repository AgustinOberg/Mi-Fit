import React from 'react';
import { StyleSheet, View } from 'react-native';

import { theme } from '@/theme/colors';
import { getFont } from '@/theme/fonts';
import { scale } from '@/utils/sizes';

import Button from '../ui/button';
import CircleProgress from '../ui/circle-progress';
import Surface from '../ui/surface';
import Text from '../ui/text';

const RADIUS = scale(30);
const RoutineControl = () => {
  return (
    <Surface style={styles.container}>
      <View style={styles.counter}>
        <CircleProgress
          progress={30}
          radius={RADIUS}
          fillColor={theme.surface}
          backgroundColor={theme.secondarySurface}
          label="3/10"
        />
      </View>
      <Button
        variant="filled-secondary"
        style={styles.button}
        textStyle={styles.buttonText}
      >
        Terminar
      </Button>
      <Text style={styles.timer} weight={800}>
        01:03:02
      </Text>
    </Surface>
  );
};

export default RoutineControl;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.accent,
    width: '100%',
    height: scale(70),
    paddingVertical: scale(5),
    paddingHorizontal: scale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    alignSelf: 'center',
    flex: 1,
    marginHorizontal: scale(12),
  },
  counter: {
    height: '100%',
    width: scale(60),
    borderRadius: 1000,
  },
  timer: {
    fontSize: scale(12),
    color: theme.surface,
    alignSelf: 'center',
  },
  buttonText: {
    fontFamily: getFont(500, false),
  },
});
