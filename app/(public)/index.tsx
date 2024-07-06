import { LinearGradient } from 'expo-linear-gradient';
import React, { useMemo } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import type { EdgeInsets } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Button from '@/components/ui/button';
import Text from '@/components/ui/text';
import { theme } from '@/theme/colors';
import { scale } from '@/utils/sizes';

const AuthScreen = () => {
  const edgeInsets = useSafeAreaInsets();
  const styles = useMemo(() => stylesFnc(edgeInsets), [edgeInsets]);

  return (
    <View style={styles.screenContainer}>
      <View style={styles.container}>
        <View style={styles.image}>
          <LinearGradient
            colors={['transparent', theme.background]}
            style={[styles.gradient, styles.image]}
          />
          <Image
            style={styles.image}
            source={{
              uri: 'https://images.pexels.com/photos/949131/pexels-photo-949131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.text} dark weight={800}>
              Mi
            </Text>
            <Text style={[styles.text, styles.accentText]} dark weight={800}>
              Fit
            </Text>
          </View>
          <Text style={styles.slogan} dark>
            Tu aplicación de entrenamiento personal
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Button>Iniciar con Google</Button>
        <Button variant="filled-secondary">Iniciar con Apple</Button>
      </View>
    </View>
  );
};

export default AuthScreen;

const stylesFnc = (insets: EdgeInsets) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      height: scale(350),
      width: '100%',
    },
    gradient: {
      position: 'absolute',
      zIndex: 1,
      top: 0,
    },
    titleContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: scale(5),
      alignSelf: 'center',
    },
    text: {
      fontSize: scale(70),
      shadowColor: theme.accent,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.2,
      elevation: 10,
    },
    accentText: {
      color: theme.accent,
    },
    slogan: {
      fontSize: scale(13),
      textAlign: 'center',
      marginHorizontal: scale(20),
      width: '70%',
      alignSelf: 'center',
    },
    textContainer: {
      transform: [{ translateY: -scale(30) }],
      zIndex: 1,
    },
    screenContainer: {
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: theme.background,
    },
    footer: {
      marginBottom: insets.bottom + scale(50),
      marginHorizontal: scale(50),
      gap: scale(10),
    },
  });
