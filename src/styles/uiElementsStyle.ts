import { StyleSheet } from 'react-native';
import AppColors from '../theme/colors';

const buttonStyle = StyleSheet.create({
  container: {
    backgroundColor: AppColors.Azul,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 100,
    paddingVertical: 18,
  },
  haveAccountContainer: {
    backgroundColor: AppColors.White,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 100,
    paddingVertical: 18,
  },
  title: {
    color: AppColors.White,
    fontSize: 18,
    fontWeight: 'semibold',
  },
  haveAccountTitle: {
    color: AppColors.Azul,
    fontSize: 18,
    fontWeight: 'semibold',
  },
});

export { buttonStyle };
