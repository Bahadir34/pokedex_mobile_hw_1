import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { IGender } from '../../models/data/gender';
import AppColors from '../../theme/colors';
import { Man, Woman } from 'iconsax-react-nativejs';

const Gender: FC<IGender> = ({ male, female }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gender</Text>

      <View style={styles.data}>
        <View style={styles.barContainer}>
          <View
            style={[
              {
                width: `${male}%`,
                backgroundColor: AppColors.Dragon,
                height: '100%',
              },
            ]}
          />
          <View
            style={[
              {
                width: `${female}%`,
                backgroundColor: AppColors.Fairy,
                height: '100%',
              },
            ]}
          />
        </View>
        <View style={styles.content}>
          <View style={styles.box}>
            <Man color={AppColors.Dark} />
            <Text style={styles.value}>{male?.toFixed(1).toString()}%</Text>
          </View>
          <View style={styles.box}>
            <Woman color={AppColors.Dark} />
            <Text style={styles.value}>{female?.toFixed(1).toString()}%</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Gender;

const styles = StyleSheet.create({
  container: {
    marginBlock: 20,
  },
  data: { marginBlock: 10 },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 400,
    color: AppColors.Dark,
  },
  barContainer: {
    height: 7,
    flexDirection: 'row',
    borderRadius: 5000,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
  },
  value: {
    fontSize: 16,
    color: AppColors.Dark,
  },
});
