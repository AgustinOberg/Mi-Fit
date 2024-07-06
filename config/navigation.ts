import type { NativeStackNavigationOptions } from 'react-native-screens/lib/typescript/native-stack/types';

export const screenWithName = (name: string): NativeStackNavigationOptions => ({
  headerTitle: name,
  headerBackTitleVisible: false,
});
