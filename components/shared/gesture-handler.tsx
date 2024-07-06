import React from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

interface Props {
  children: React.ReactNode;
}
const GestureHandler = ({ children }: Props) => {
  return (
    <GestureHandlerRootView style={styles.container}>
      {children}
    </GestureHandlerRootView>
  );
};

export default GestureHandler;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
