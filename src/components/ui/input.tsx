import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { FC } from 'react';
import AppColors from '../../theme/colors';

const Input: FC = props => {
  const { emptyData } = props;
  console.log(props);
  return (
    <View
      style={[
        styles.container,
        { borderColor: emptyData ? 'red' : AppColors.Dark },
      ]}
    >
      <TextInput
        style={styles.input}
        {...props}
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderRadius: 6,
    paddingVertical: 15,
  },
  input: {
    fontSize: 18,
  },
});
