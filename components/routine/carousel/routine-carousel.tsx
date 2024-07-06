import React from 'react';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import type { ILayoutConfig } from 'react-native-reanimated-carousel/lib/typescript/layouts/parallax';

import { scale } from '@/utils/sizes';

import RoutineSlide from './routine-slide';
const width = Dimensions.get('window').width;

const carouselConfig: ILayoutConfig = {
  parallaxScrollingScale: 1,
  parallaxAdjacentItemScale: scale(0.6),
  parallaxScrollingOffset: scale(140),
};

const RoutineCarousel = () => {
  return (
    <Carousel
      loop
      width={width}
      autoPlay={false}
      data={[...new Array(6).keys()]}
      scrollAnimationDuration={100}
      onSnapToItem={(index) => console.log('current index:', index)}
      mode="parallax"
      modeConfig={carouselConfig}
      renderItem={({ animationValue }) => (
        <RoutineSlide animationValue={animationValue} />
      )}
    />
  );
};

export default RoutineCarousel;

//const styles = StyleSheet.create({});
