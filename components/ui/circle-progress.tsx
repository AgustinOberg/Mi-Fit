import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CircularProgressBase } from 'react-native-circular-progress-indicator';
import { scale } from 'react-native-size-matters';

import { gray, theme } from '@/theme/colors';

import Text from './text';

interface Props {
  progress?: number;
  label?: string;
  footer?: string;
  backgroundColor?: string;
  fillColor?: string;
  radius?: number;
}

const RADIUS = 35;
const STROKE_WIDTH = scale(6);
const CircleProgress = ({
  progress = 0,
  label,
  footer,
  backgroundColor,
  fillColor,
  radius = RADIUS,
}: Props) => {
  return (
    <View style={styles.container}>
      <CircularProgressBase
        value={progress}
        activeStrokeColor={fillColor}
        inActiveStrokeColor={backgroundColor}
        radius={radius}
        inActiveStrokeWidth={STROKE_WIDTH}
        activeStrokeWidth={STROKE_WIDTH}
      >
        <Text style={styles.text} weight={700}>
          {label}
        </Text>
      </CircularProgressBase>
      {footer && <Text style={styles.footer}>{footer}</Text>}
    </View>
  );
};

export default CircleProgress;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    rowGap: scale(5),
  },
  text: {
    color: theme.secondaryText,
    fontSize: scale(10),
  },
  footer: {
    color: gray[500],
    fontSize: 12,
  },
});
