import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { IProporties } from '../../models/data/proporties';
import { WeightMeter } from 'iconsax-react-nativejs';
import AppColors from '../../theme/colors';

const Proporties: FC<IProporties> = ({ weight, height, ability, category }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.top}>
        <View style={styles.box}>
          <View style={styles.head}>
            <WeightMeter color={AppColors.Normal} />
            <Text style={styles.title}>Weight</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.data}>{weight?.toFixed(1).toString()} kg</Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.head}>
            <WeightMeter color={AppColors.Normal} />
            <Text style={styles.title}>Height</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.data}>{height?.toFixed(1).toString()} kg</Text>
          </View>
        </View>
      </View>
      <View style={styles.top}>
        <View style={styles.box}>
          <View style={styles.head}>
            <WeightMeter color={AppColors.Normal} />
            <Text style={styles.title}>Category</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.data}>{category} </Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.head}>
            <WeightMeter color={AppColors.Normal} />
            <Text style={styles.title}>Ability</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.data}>{ability}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Proporties;

const styles = StyleSheet.create({
  container: {marginBlock : 10},
  top: {
    flex: 1,
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  box: { flex: 1 },

  head: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    marginBottom: 5,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 25,
    borderColor: AppColors.Normal,
    padding: 10,
  },
  title: { color: AppColors.Normal },
  data: {
    fontSize: 24,
    color: AppColors.Dark,
  },
});
