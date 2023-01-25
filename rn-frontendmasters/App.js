import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ColorPallete from './components/ColorPallete';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Here are some different colors</Text>
      <ColorPallete styles={styles} colorName="Cyan" colorHex="#2aa198" />
      <ColorPallete styles={styles} colorName="Blue" colorHex="#268bd2" />
      <ColorPallete styles={styles} colorName="Magenta" colorHex="#d33682" />
      <ColorPallete styles={styles} colorName="Orange" colorHex="#cb4b16" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 10,
    flex: 1,
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  colorbox: {
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  cyan: {
    backgroundColor: '#2aa198',
  },
  blue: {
    backgroundColor: '#268bd2',
  },
  magenta: {
    backgroundColor: '#d33682',
  },
  orange: {
    backgroundColor: '#cb4b16',
  },
  textColor: {
    color: 'white',
    fontWeight: 'bold',
  },
});
