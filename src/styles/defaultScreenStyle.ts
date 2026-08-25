import { StyleSheet } from 'react-native';
import AppColors from '../theme/colors';

const defaultScreenStyle = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: AppColors.White,
  },
  container: {
    flex: 1,
    backgroundColor: AppColors.White,
    padding: 15,
  },
});

export default defaultScreenStyle;
