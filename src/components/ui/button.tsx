import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import { buttonStyle } from '../../styles/uiElementsStyle';
import { IButtonProps } from '../../models/ui/buttonProps';

const Button: FC<IButtonProps> = props => {
  const { title, haveAccount = false } = props;

  return (
    <TouchableOpacity
      {...props}
      style={
        !haveAccount ? buttonStyle.container : buttonStyle.haveAccountContainer
      }
      activeOpacity={0.8}
    >
      <Text
        style={!haveAccount ? buttonStyle.title : buttonStyle.haveAccountTitle}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
