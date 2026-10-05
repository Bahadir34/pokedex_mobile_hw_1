import { Image, StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { IWeaknesses } from '../../models/data/weaknesses';
import AppColors from '../../theme/colors';
import { labelImages } from '../../store/mappingImages';

const Weaknesses: FC<IWeaknesses> = ({ weaknesses }) => {
  return (
    <View>
      <Text style={styles.title}>Weaknesses</Text>

      <View style={styles.contentContainer}>
        {weaknesses?.map(item => (
          <View style={[styles.badge, { backgroundColor: AppColors[item] }]}>
            <View style={styles.labelBg}>
              <Image
                source={labelImages(item)}
                resizeMode="cover"
                style={{ width: '100%', height: '100%' }}
              />
            </View>
            <Text style={styles.badgeValue}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Weaknesses;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: AppColors.Dark,
  },
  contentContainer: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 10,
    rowGap: 20,
    columnGap: '2%',
  },
  badge: {
    width: '48%',
    borderRadius: 30,
    paddingBlock: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  badgeValue: { textAlign: 'center', color: AppColors.White },
  labelBg: {
    backgroundColor: AppColors.White,
    width: 25,
    height: 25,
    borderRadius: 100,
    padding: 5,
  },
});
