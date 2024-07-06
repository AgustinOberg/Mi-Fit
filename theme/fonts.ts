export type Weight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export const getFont = (weight: Weight, italic: boolean) => {
  switch (weight) {
    case 100:
      return italic ? 'Inter_100Thin_Italic' : 'Inter_100Thin';
    case 200:
      return italic ? 'Inter_200ExtraLight_Italic' : 'Inter_200ExtraLight';
    case 300:
      return italic ? 'Inter_300Light_Italic' : 'Inter_300Light';
    case 400:
      return italic ? 'Inter_400Regular_Italic' : 'Inter_400Regular';
    case 500:
      return italic ? 'Inter_500Medium_Italic' : 'Inter_500Medium';
    case 600:
      return italic ? 'Inter_600SemiBold_Italic' : 'Inter_600SemiBold';
    case 700:
      return italic ? 'Inter_700Bold_Italic' : 'Inter_700Bold';
    case 800:
      return italic ? 'Inter_800ExtraBold_Italic' : 'Inter_800ExtraBold';
    case 900:
      return italic ? 'Inter_900Black_Italic' : 'Inter_900Black';
    default:
      return italic ? 'Inter_400Regular_Italic' : 'Inter_400Regular';
  }
};
