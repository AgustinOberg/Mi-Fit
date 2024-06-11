export type Weight = 100 | 300 | 400 | 500 | 700 | 900;

export const getFont = (weight: Weight, italic: boolean) => {
  switch (weight) {
    case 100:
      return italic ? 'Roboto_100Thin_Italic' : 'Roboto_100Thin';
    case 300:
      return italic ? 'Roboto_300Light_Italic' : 'Roboto_300Light';
    case 400:
      return italic ? 'Roboto_400Regular_Italic' : 'Roboto_400Regular';
    case 500:
      return italic ? 'Roboto_500Medium_Italic' : 'Roboto_500Medium';
    case 700:
      return italic ? 'Roboto_700Bold_Italic' : 'Roboto_700Bold';
    case 900:
      return italic ? 'Roboto_900Black_Italic' : 'Roboto_900Black';
    default:
      return italic ? 'Roboto_400Regular_Italic' : 'Roboto_400Regular';
  }
};
