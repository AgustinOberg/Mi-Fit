import { LinearGradient } from 'expo-linear-gradient';
import React, { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import type { EdgeInsets } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { theme } from '@/theme/colors';
import { isAndroid } from '@/utils/device';
import { scale } from '@/utils/sizes';

interface Props {
  children: React.ReactNode;
  height?: number;
}

const defaultHeight = isAndroid ? scale(150) : scale(60);

const FooterGradient = ({ height, children }: Props) => {
  const edgeInsets = useSafeAreaInsets();
  const styles = useMemo(
    () => stylesFnc(edgeInsets, height),
    [edgeInsets, height]
  );
  return (
    <LinearGradient
      style={styles.footer}
      colors={['transparent', theme.background]}
      locations={[0, 0.8]}
    >
      {children}
    </LinearGradient>
  );
};

export default FooterGradient;

const stylesFnc = (edge: EdgeInsets, height?: number) =>
  StyleSheet.create({
    footer: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      height: height ?? defaultHeight + edge.bottom,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
