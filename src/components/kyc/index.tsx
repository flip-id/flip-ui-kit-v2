import React, {useMemo} from 'react';
import {Image, View, Text} from 'react-native';

import Icons from '../../themes/icons';

import styles from './style';

interface CardKYCProps {
  isPoint: number;
  isPendingKYC?: boolean;
  isFailedOrRejectedKYC?: boolean;
  isIdentityNumberFilled?: boolean;
  isNewlyCreatedAccount?: boolean;
}

const CardKYC: React.FC<CardKYCProps> = ({
  isPoint,
  isPendingKYC,
  isFailedOrRejectedKYC,
  isIdentityNumberFilled,
  isNewlyCreatedAccount,
}) => {
  const label = useMemo(() => {
    return isPendingKYC
      ? 'Verifikasi akun sedang diproses'
      : isFailedOrRejectedKYC
      ? 'Verifikasi gagal. Mohon coba lagi.'
      : isPoint === 50
      ? 'Verifikasi akun agar bebas limit'
      : isIdentityNumberFilled
      ? 'Lanjut verifikasi agar bebas limit'
      : isNewlyCreatedAccount
      ? 'Untuk bisa transfer, kamu harus isi data diri dulu, ya.'
      : 'Verifikasi akun agar bebas limit';
  }, [
    isPoint,
    isPendingKYC,
    isFailedOrRejectedKYC,
    isIdentityNumberFilled,
    isNewlyCreatedAccount,
  ]);

  return (
    <View style={styles.bottomContentContainer}>
      <View style={styles.textBottomContainer}>
        <Image
          source={
            isPendingKYC
              ? Icons.progress
              : isPoint === 50
              ? Icons.emailOrange
              : isFailedOrRejectedKYC
              ? Icons.dangerRed
              : isNewlyCreatedAccount
              ? Icons.document
              : Icons.verifyIdentity
          }
          style={
            isNewlyCreatedAccount
              ? styles.iconKeyNewlyCreatedAcc
              : styles.iconKey
          }
          resizeMode="contain"
        />
        <Text
          style={[
            styles.fillDataText,
            isFailedOrRejectedKYC ? styles.textFailed : styles.textFailedFalse,
          ]}>
          {label}
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <Image
          source={Icons.arrowRightOrange}
          style={styles.icon}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default CardKYC;
