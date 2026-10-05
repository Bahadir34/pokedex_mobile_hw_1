import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { FC } from 'react';
import { IRegionCardProps } from '../../models/ui/regionCardProps';
import LinearGradient from 'react-native-linear-gradient';
import AppColors from '../../theme/colors';

const RegionCard: FC<IRegionCardProps> = ({ region }) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <ImageBackground
        source={require('../../assets/images/backImage.png')}
        style={styles.image}
      >
        <LinearGradient
          colors={['rgba(0,0,0,.7)', 'rgba(0,0,0,0.3)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.cover}
        />
        <View style={{ flex: 1, justifyContent: 'center', paddingLeft: 30 }}>
          <Text style={styles.region}>{region.bolge}</Text>
          <Text style={styles.gen}>
            {region.nesil.toString()}º {region.ates}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap : 10
          }}
        >
          <Image
            source={require('../../assets/images/001.png')}
            style={styles.icon}
          />
          <Image
            source={require('../../assets/images/002.png')}
            style={styles.icon}
          />
          <Image
            source={require('../../assets/images/003.png')}
            style={styles.icon}
          />
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 15,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    flexDirection: 'row',
  },
  cover: {
    position: 'absolute',
    backgroundColor: '',
    inset: 0,
  },
  region: {
    fontSize: 32,
    color: AppColors.White,
    fontWeight: 600,
  },
  gen: {
    textAlign: 'left',
    fontSize: 24,
    color: `#cccccc`,
    fontWeight: 500,
  },

  icon: {
    width: 40,
    height: 40,
  },
});

export default RegionCard;
