import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Input } from '@/components/shared/input';

const Icon = () => {
  return <Text>X</Text>;
};

const SearchScreen = () => {
  return (
    <View>
      <Text>SearchScreen</Text>
      <Input
        label="Nombre de usuario"
        value="asdioansdoinas"
        error="Contraseña incorrecta!"
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
