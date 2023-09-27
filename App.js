import React from 'react';
import { View, StyleSheet } from 'react-native';
import TextReverse from './TextReverse';

export default function App() {
  return (
    <View style={styles.container}>
      <TextReverse />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
