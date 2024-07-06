import { router } from 'expo-router';
import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import type { EdgeInsets } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import RoutineExerciseList from '@/components/routine/routine-exercise-list';
import FooterGradient from '@/components/shared/footer-gradient';
import { Input } from '@/components/shared/input';
import Button from '@/components/ui/button';
import IconButton from '@/components/ui/icon-button';
import { scale } from '@/utils/sizes';

import { theme } from '../../../theme/colors';

const CreateRoutineScreen = () => {
  const insets = useSafeAreaInsets();
  const styles = useMemo(() => stylesFnc(insets), [insets]);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.screenContainer}>
        <Input placeholder="Nombre de la rutina" style={styles.input} />
        <RoutineExerciseList />
      </View>
      <IconButton onPress={() => router.push('routine/select-exercises')} />
      <FooterGradient height={scale(130)}>
        {/* <Button
          onPress={() => router.push('routine/select-exercises')}
          style={styles.button}
          textStyle={styles.buttonLabel}
          variant="outlined"
        >
          Agregar ejercicio
        </Button> */}
        <Button
          onPress={() => router.push('routine/select-exercises')}
          style={styles.button}
        >
          Crear rutina
        </Button>
      </FooterGradient>
    </View>
  );
};

export default CreateRoutineScreen;

const stylesFnc = (insets: EdgeInsets) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
    },

    input: {
      width: '50%',
    },
    screenContainer: {
      marginTop: scale(10),
      paddingHorizontal: scale(20),
      flexGrow: 1,
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: scale(40),
    },
    button: {
      alignSelf: 'center',
    },
    buttonLabel: {
      color: theme.primaryText,
    },
    footerButtons: {
      marginBottom: insets.bottom + scale(20),
      marginTop: 10,
      flexDirection: 'row',
      alignSelf: 'center',
      gap: 2,
    },
  });
