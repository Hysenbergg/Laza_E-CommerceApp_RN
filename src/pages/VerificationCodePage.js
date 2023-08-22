import React, {useState, Fragment} from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import PageTitle from '../components/PageTitle';
import Footer from '../components/Footer';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const CELL_COUNT = 4;

export default function VerificationCodePage({navigation}) {
  const [value, setValue] = useState('7423');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <SafeAreaView style={styles.container}>
      <PageTitle title="Verification Code" onPress={() => navigation.pop()} />
      <View style={styles.image_container}>
        <Image
          style={styles.image}
          source={require('../assets/forgot-password.png')}
        />
      </View>
      {/* Bu kod girme kısmında bir hata var ama ne olduğunu bilmiyorum. */}
      <View style={styles.input_container}>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <View style={styles.inner_container} key={index}>
              <Text
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
              {index === 2 || index === 4 ? (
                <View key={`separator-${index}`} style={styles.separator} />
              ) : null}
            </View>
          )}
        />
      </View>
      <View style={styles.footer_container}>
        <Text style={styles.footer_top_text}>
          <Text style={styles.footer_counter}>00:20</Text> resend confirmation code.
        </Text>
        <Footer
          text="Confirm Code"
          onPress={() => navigation.navigate('NewPassword')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  image_container: {
    alignItems: 'center',
    marginVertical: 50,
  },
  image: {
    width: 250,
    height: 200,
  },
  input_container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
  },
  codeFieldRoot: {},
  inner_container: {textAlign: 'center', justifyContent: 'center'},
  cell: {
    width: 75,
    height: 100,
    borderRadius: 10,
    lineHeight: 75,
    marginHorizontal: 10,
    fontSize: 35,
    borderWidth: 2,
    textAlign: 'center',
    borderColor: '#E7E8EA',
    color: 'black',
  },
  focusCell: {
    borderColor: '#000',
  },
  footer_container: {
    alignItems: 'center',
  },
  footer_top_text: {
    textAlign: 'center',
    fontSize: 15,
    marginHorizontal: 50,
    color: '#8F959E',
    marginBottom: 20,
  },
  footer_counter: {
    fontWeight: 'bold',
    color: 'black'
  }
});
