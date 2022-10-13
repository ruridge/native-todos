import { Text, TouchableOpacity } from 'react-native';

type ButtonProps = {
  label: string;
  onPress: () => void;
};

export function Button(props: ButtonProps) {
  return (
    <TouchableOpacity
      className="my-3 rounded-2xl bg-blue-500 px-7 py-3"
      onPress={props.onPress}
    >
      <Text className="text-lg text-white">{props.label}</Text>
    </TouchableOpacity>
  );
}
