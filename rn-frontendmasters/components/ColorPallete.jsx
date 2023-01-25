import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const ColorPallete = ({ styles, colorName, colorHex }) => {
  return (
    <View style={{ width: '100%' }}>
      <View style={[styles.colorbox, { backgroundColor: colorHex }]}>
        <Text style={styles.textColor}>
          {colorName}: {colorHex}
        </Text>
      </View>
    </View>
  );
};
export default ColorPallete;
