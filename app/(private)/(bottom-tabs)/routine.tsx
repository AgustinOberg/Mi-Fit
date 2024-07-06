import { router } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import RoutineItem from '@/components/routine/routine-item';
import FooterGradient from '@/components/shared/footer-gradient';
import Button from '@/components/ui/button';
import Divider from '@/components/ui/divider';
import { scale } from '@/utils/sizes';

const Separator = () => <Divider mode="dark" height={scale(15)} />;

const CreateRoutineScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={[1, 2, 3, 4, 5, 6]}
          renderItem={RoutineItem}
          keyExtractor={(item) => item.toString()}
          ItemSeparatorComponent={Separator}
          contentContainerStyle={styles.listContent}
        />
      </View>
      <FooterGradient>
        <Button
          style={styles.button}
          onPress={() => {
            router.push('/routine/create-routine');
          }}
        >
          Crear rutina
        </Button>
      </FooterGradient>
    </>
  );
};

export default CreateRoutineScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: scale(25),
  },
  button: {
    alignSelf: 'center',
    marginTop: scale(10),
  },
  listContent: {
    paddingHorizontal: scale(10),
    paddingBottom: scale(80),
  },
});
