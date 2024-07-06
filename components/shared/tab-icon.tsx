import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import { scale } from '@/utils/sizes';

const ICON_SIZE = scale(24);

export const FeatherTabIcon = (props: {
  name: React.ComponentProps<typeof Feather>['name'];
  color: string;
  text?: string;
}) => {
  return (
    <Feather
      size={ICON_SIZE}
      style={{ marginBottom: scale(-2.5) }}
      {...props}
    />
  );
};
export const MaterialCommunityTabIcon = (props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  color: string;
  text?: string;
}) => {
  return (
    <MaterialCommunityIcons
      size={ICON_SIZE}
      style={{ marginBottom: scale(-2.5) }}
      {...props}
    />
  );
};
