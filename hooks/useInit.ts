import { useLoadFonts } from './useLoadFonts';

export const useInit = () => {
  const { fontsLoaded } = useLoadFonts();

  const isLoading = !fontsLoaded;

  return {
    isLoading,
  };
};
