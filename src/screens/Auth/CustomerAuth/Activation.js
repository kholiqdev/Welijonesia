import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ICBackCircle } from '../../../assets';
import { Button, Gap, Input } from '../../../components';
import { FONT_MEDIUM, FONT_REGULAR, PRIMARY, WHITE } from '../../../styles';

const Activation = ({ handleSetActivation }) => (
  <View style={styles.container}>
    <View>
      <Gap height={15} />
      <Text style={styles.screenTitle}>
        Verifikasi akun Anda masukkan kode unik yang kami kirim ke alamat email anda
      </Text>
      <Gap height={20} />
      <Input
        placeholder="Kode"
        autoCapitalize="characters"
        keyboardType="email-address"
        variant="roundedPill"
      />
      <Gap height={25} />
      <Text style={styles.txtForgotPassword}>00:60</Text>
      <Gap height={25} />
      <Button text="KIRIM" />
      <Gap height={30} />
      <TouchableOpacity style={{ alignItems: 'center' }}>
        <ICBackCircle height={50} width={50} />
      </TouchableOpacity>
    </View>
  </View>
);

export default Activation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    paddingHorizontal: 5,
  },
  screenTitle: {
    color: PRIMARY,
    ...FONT_REGULAR(14),
    textAlign: 'center',
  },
  txtForgotPassword: {
    ...FONT_MEDIUM(14),
    textAlign: 'center',
  },
});
