import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Input } from '@/components/shared/input';
import ScreenContainer from '@/components/shared/screen-container';
import SectionButton from '@/components/shared/section-button';
import Select from '@/components/shared/select';
import Button from '@/components/ui/button';

import { surfaceShadow } from '../../theme/shared';

const AddRoutine = () => {
  return (
    <ScreenContainer withInsets={false}>
      <View style={styles.container}>
        <Input label="Título" />
        <Select placeholder="Seleccionar" label="Tipo" />
        <SectionButton
          placeholder="Seleccionar ejercicios"
          label="Ejercicios"
        />
        <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: 'white',
            ...surfaceShadow,
          }}
        />

        <Button variant="filled-secondary">aasd</Button>
      </View>
    </ScreenContainer>
  );
};

export default AddRoutine;

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
});
