import React, { useMemo } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import type { EdgeInsets } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { scale } from '@/utils/sizes';

import ScreenTitle from './screen-title';

interface Props {
  withScroll?: boolean;
  title?: string;
  children?: React.ReactNode;
  withInsets?: boolean;
}

const ScreenContainer = ({
  withScroll,
  title,
  withInsets = true,
  children,
}: Props) => {
  const insets = useSafeAreaInsets();
  const styles = useMemo(
    () => stylesFnc(insets, withInsets),
    [insets, withInsets]
  );

  const Container = useMemo(() => {
    return withScroll ? ScrollView : View;
  }, [withScroll]);
  return (
    <Container style={styles.container}>
      <>
        {title && <ScreenTitle style={styles.title}>{title}</ScreenTitle>}
        {children}
      </>
    </Container>
  );
};

export default ScreenContainer;

const stylesFnc = (insets: EdgeInsets, withInsets: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: withInsets ? insets.top : scale(15),
      paddingHorizontal: scale(15),
    },
    title: {
      marginBottom: scale(30),
      marginTop: scale(25),
    },
  });
