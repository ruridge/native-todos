import { Text as RNText } from 'react-native';

const SIZE_STYLES = {
  sm: 'text-sm',
  md: 'text-md',
  lg: 'text-lg',
  xl: 'text-xl',
};
const WEIGHT_STYLES = {
  normal: 'font-normal',
  bold: 'font-bold',
  light: 'font-light',
};
const COLOR_STYLES = {
  gray: 'text-black dark:text-gray-200',
  blue: 'text-blue-700 dark:text-blue-300',
};

type TextProps = {
  size?: keyof typeof SIZE_STYLES;
  weight?: keyof typeof WEIGHT_STYLES;
  color?: keyof typeof COLOR_STYLES;
  children: React.ReactNode;
};

export function Text({
  size = 'md',
  weight = 'normal',
  color = 'gray',
  children,
}: TextProps) {
  return (
    <RNText
      className={[
        SIZE_STYLES[size],
        WEIGHT_STYLES[weight],
        COLOR_STYLES[color],
      ].join(' ')}
    >
      {children}
    </RNText>
  );
}
