/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native'
import {requestUserPermission, NotificationListner} from './src/utils/pushnotification_helper';

const App = () => {

  useEffect(() => {
    requestUserPermission();
    NotificationListner();
  },[])
  
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <Text>Hello</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
