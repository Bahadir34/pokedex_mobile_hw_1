import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { ISwipeProps } from '../../models/ui/swipeProps';
import AppColors from '../../theme/colors';

const Swipe: FC<ISwipeProps> = ({ screens, section }) => {
  return (
    <View style={{ margin: 'auto', flexDirection: 'row', gap: 5 }}>
      {Array.from({ length: screens }).map((_, index) => {
        const isActiveSection = index + 1 === section;

        return (
          <View
            key={index}
            style={
              isActiveSection ? styles.activeSection : styles.passiveSection
            }
          />
        );
      })}
    </View>
  );
};

export default Swipe;

const styles = StyleSheet.create({
  container: {},
  activeSection: {
    width: 25,
    height: 10,
    backgroundColor: AppColors.Azul,
    borderRadius: 100,
  },
  passiveSection: {
    width: 10,
    height: 10,
    backgroundColor: AppColors.Flying2,
    borderRadius: 100,
  },
});
